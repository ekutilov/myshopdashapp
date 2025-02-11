"""
This module defines classes and constants used for handling file uploads and 
interacting with Google Cloud Firestore and Storage in the myshopdashapp backend.
It is used for the main cloud function parse_v3.
All the data processing related classes are in the msd_data module.

Classes:
    Folders: Defines constants for folder names used in the application.
    UploadFileNames: Generates file names and paths for uploaded files based on upload records.
    UploadQueueRecord: Represents a record in the upload queue, including database connection and user ID extraction.

Constants:
    ENV: Environment configuration (Prod, Test or Dev).
    PROD: Production environment flag.
    PROJECT_ID: Google Cloud project ID.
    STORAGE_BUCKET: Google Cloud Storage bucket name.
"""

import re
from datetime import datetime
from pandas import Timestamp, to_datetime, to_timedelta
from google.events.cloud import firestore as firestoredata
from google.cloud.firestore import SERVER_TIMESTAMP, FieldFilter, ArrayUnion
from google.cloud.storage import Client as StorageClient
from google.cloud.firestore import Client as DBClient
from google.cloud.exceptions import GoogleCloudError

from .msd_data.env import ENV, PROD, PROJECT_ID, STORAGE_BUCKET
# Attn, these are being exported from this file, so keep the import
# ENV
# PROD
# PROJECT_ID
# STORAGE_BUCKET


class Folders():
    """
    Enumerator - folder names used in the application.
    Defines constants for folder names used in the application.

    (Static) Attributes:
        UPLOADS (str): Folder name for uploads.
        ARCHIVE (str): Folder name for archived files.
        ERROR (str): Folder name for error files.
    """

    def __init__(self):
        pass

    UPLOADS="uploads"
    ARCHIVE="archive"
    ERROR="error"


class UploadFileNames():
    """
    Helper class - Generates file names and paths for uploaded files based on upload records.
    
    Attributes:
        upload_id (str): The ID of the upload.
        brand (str): The brand associated with the upload.
        file_name (str): The generated file name.
        UPLOAD (str): The path for the uploaded file.
        ARCHIVE (str): The path for the archived file.
        ERROR (str): The path for the error file.
        NAME (str): The name of the file.
        
    Example:
        upload_record = UploadRecord(upload_id="12345", brand="example_brand")
        upload_file_names = UploadFileNames(upload_record)
        print(upload_file_names.UPLOAD)  # Output: uploads/example_brand_12345_json.json

    """

    def __init__(self, upload_record):
        self.upload_id = upload_record.upload_id
        self.brand = upload_record.brand
        # self.file_name = f'{self.brand}_{self.upload_id}_json.json'
        self.NAME =  f"{self.brand}_{self.upload_id}_json.json"
        self.UPLOAD = f'{Folders.UPLOADS}/{self.NAME}'
        self.ARCHIVE = f'{Folders.ARCHIVE}/{self.NAME}'
        self.ERROR = f'{Folders.ERROR}/{self.NAME}'


class UploadQueueRecord():
    """
    Represents a record in the upload queue, including database connection and user ID extraction.

    Attributes:
        db_connection (firebase.Client): The Firestore database client.
        request_loc (str): The location of the upload record.
        upload_ts (datetime): The timestamp of the upload.
        user_id (str): The ID of the user extracted from the request location.
        record_ref (DocumentReference): The reference to the document in the Firestore database.

    Example:
        upload_queue_record = UploadQueueRecord(request_loc="projects/myproject/databases/(default)/documents/users/user123/uploads/upload123", upload_ts=datetime.now())
        print(upload_queue_record.user_id)  # Output: user123
    """

    def __init__(self, request_loc, upload_ts):

        self.db_connection = DBClient()

        self.request_loc = request_loc
        self.upload_ts = upload_ts

        self.user_id = re.compile(r'.*users/([^/]+)').match(request_loc).group(1)

        self.record_ref = self.db_connection.document(self.request_loc)
        self.user_profile_ref = self.db_connection.collection("users").document(self.user_id)

        if not self.user_profile_ref.get().exists:
            raise FileNotFoundError('User record doesn\'t exist')

        record = self.record_ref.get()

        if not record.exists:
            raise FileNotFoundError(f'Upload record doesn\'t exist at {request_loc}')
        
        record = self.record_ref.get().to_dict()
        self.upload_id = record['upload_id']
        self.brand = record['metabrand'].lower()

        # TODO: review this logic for better security - limit live time of the record
        if Timestamp.today(tz='UTC')-to_datetime(self.upload_ts) > to_timedelta('5 min'):
            self.record_ref.update({'status': 'error', 'errorMessage': f'Parse timeout at {request_loc}', "last_updated": SERVER_TIMESTAMP})
            raise TimeoutError(f"Parse timeout at {request_loc}")

    @property
    def record(self):
        """
        Returns the upload record from the Firestore database as a dict.

        Raises:
            Exception: If the record doesn't exist.

        Returns:
            dict: The record from the Firestore database.
        """
        return self.record_ref.get().to_dict()

    def update(self, upd_dict: dict):
        """
        Updates the upload record in the Firestore database.
        
        Args:
            upd_dict (dict): The dictionary of fields to update.
        """
        return self.record_ref.update(upd_dict)


class CloudEventParser():
    """
    Helper - Parses a Google Cloud event for Firestore data updates.
    
    Attributes:
        event (Event): The Google Cloud event.
        payload (DocumentEventData): The payload of the event.
        value (Document): The document value of the payload.
        request_loc (str): The location of the document generated the event.
        update_ts (datetime): The timestamp of the update.
        
    Example:
        cloud_event_parser = CloudEventParser(event)
        print(cloud_event_parser.request_loc)  # Output: projects/myproject/databases/(default)/documents/users/user123/uploads/upload123
    """

    def __init__(self, event):
        self.event = event
        self.payload = firestoredata.DocumentEventData()
        self.payload._pb.ParseFromString(event.data)

    def __getattr__(self, name):
        return getattr(self.payload, name)

    @property
    def value(self):
        """Returns the document value of the payload."""
        return self.payload.value

    @property
    def request_loc(self):
        """Returns the location of the document generated the event."""
        return self.payload.value.name

    @property
    def update_ts(self):
        """Returns the timestamp of the update.""" 
        return Timestamp(self.payload.value.create_time, unit="s")


class Storage():
    """
    Helper class for interacting with Google Cloud Storage.
    
    Attributes:
        bucket_name (str): The name of the bucket.
        client (StorageClient): The Google Cloud Storage client.
        bucket (Bucket): The bucket object.
        
    Example:

        storage = Storage()
        content = storage.read('example_file.json')
        print(content)  # Output: {"example": "content"}
    """

    def __init__(self, bucket_name=None):
        if bucket_name is None:
            bucket_name = STORAGE_BUCKET

        assert bucket_name is not None and isinstance(bucket_name, str), "Bucket name is not provided nether as an argument nor as an environment variable or not a string ."

        self.bucket_name = bucket_name
        self.client = StorageClient()
        self.bucket = self.client.bucket(self.bucket_name)

    def move(self, blob_name, new_blob_name):
        """Moves a blob from one location to another within the same bucket."""

        blob = self.bucket.blob(blob_name)

        if blob.exists():
            self.bucket.rename_blob(blob, new_name=new_blob_name)
            return True

        return False

    def read(self, blob_name):
        """Reads a file from a bucket (as a text)."""

        blob = self.bucket.blob(blob_name)

        if blob.exists():
            return blob.download_as_text()

        return None

    def write(self, blob_name, content):
        """Writes a file from a bucket (from a string)."""

        blob = self.bucket.blob(blob_name)

        # if blob.exists(): blob.delete() # for overwrite policies we should rely on the bucket settings

        blob.upload_from_string(content)

        return True

    def delete(self, blob_name):
        """Deletes a file from a bucket."""

        blob = self.bucket.blob(blob_name)

        if blob.exists():
            blob.delete()
            return True

        return False


class ReceiptCollection():
    """
    Class for handling receipt data in Firestore.
    
    Attributes:
        upload_record (UploadQueueRecord): The upload record.
        user_profile_ref (DocumentReference): The reference to the user profile in Firestore.
        
    Example:
        receipt_collection = ReceiptCollection(upload_record)
        receipt_collection.update(receipt_data)
    """

    def __init__(self, upload_record):
        self.upload_record = upload_record
        self.user_profile_ref = upload_record.user_profile_ref

    def update(self, d):
        """
        Updates the Firestore database with receipt data.
        1) Creates new receipts for transactions not already in the database.
        2) Updates existing receipts adding a new upload ID and timestamp.
        
        Args:
            d (Class ParsedContent): The receipt data.
            
        Returns:
            dict: The summary of the update.
        """

        # TODO: Improve readability of this method

        fbconnection = self.upload_record.db_connection

        # user_profile_ref = self.upload_record.user_profile_ref
        upload_id = self.upload_record.upload_id
        # user_id = self.upload_record.user_id
        # brand = d.metabrand
        receipts_collection_ref = self.upload_record.user_profile_ref.collection('receipts')

        all_transaction_ids = d.transactions['transaction_hash'].unique().tolist() # TODO: add hashes to existing receipts
        all_transaction_ids_chunks = [all_transaction_ids[x:x+30] for x in range(0, len(all_transaction_ids), 30)]
        existing_ids = []

        t1 = datetime.now()
        
        writer = fbconnection.bulk_writer()

        for chunk in all_transaction_ids_chunks:
            existing_receipts_refs = receipts_collection_ref.where(filter=FieldFilter('transaction_hash', 'in', chunk)).where(filter=FieldFilter('metabrand', '==', d.metabrand))

            for receipt_ref in existing_receipts_refs.stream():
                existing_ids.append(receipt_ref.to_dict()['transaction_hash']) # receipt_ref.reference.update({'upload_id': ArrayUnion([upload_id,]), 'updated': SERVER_TIMESTAMP})
                writer.update(receipt_ref.reference, {'upload_id': ArrayUnion([upload_id,]), 'updated': SERVER_TIMESTAMP})

        transactions_new = d.transactions.loc[~d.transactions['transaction_hash'].isin(existing_ids)]

        if len(transactions_new) > 0:

            transactions_new = transactions_new.assign(upload_id=lambda df:df.apply(lambda x: [upload_id,], axis=1)) #

            for i, row in transactions_new.iterrows():
                items_from_transaction = d.items.loc[i].rename({"nn": "rn"}, axis=1).sort_values('rn').rename({"rn": "nn"}, axis=1)
                receipt_ref = receipts_collection_ref.document()

                try:
                    if len(items_from_transaction)>0:
                        writer.set(receipt_ref, {**row.to_dict(), 'items': items_from_transaction.to_dict(orient='records')}) # receipt_ref.set({**row.to_dict(), 'items': items_from_transaction.to_dict(orient='records')}) #; batch_size = batch_size - 1
                    else:
                        writer.set(receipt_ref, {**row.to_dict(), }) # receipt_ref.set({**row.to_dict(), }) #; batch_size = batch_size - 1
                except GoogleCloudError:
                    print('fb writing error at ', i)

                items_ref = receipt_ref.collection('receipt_items')

                for __, row in items_from_transaction.iterrows():
                    doc_ref = items_ref.document()
                    try:
                        writer.set(doc_ref, {'uid': self.upload_record.user_id, **row.to_dict()}) # doc_ref.set({'uid': user_id, **row.to_dict()}) #; batch_size = batch_size - 1
                    except GoogleCloudError:
                        print('writing error in item ',  __)
                        print('1 - ', row)
                        print('2 - ', row.to_dict())

        writer.flush()
        writer.close()

        t2 = datetime.now()

        print("Collection written in ", t2-t1)

        return {"transactions_new": transactions_new.index.tolist(), "existing_ids": existing_ids, "summary": self.summariser(d)}

    @staticmethod
    def summariser(d):
        """
        Summarises the receipt data.
        
        Args:
            d (Class ParsedContent): The receipt data.
            
        Returns:
            dict: The summary of the receipt data.
        """

        try:
            start_date = d.transactions['Date'].min()
            end_date = d.transactions['Date'].max()
            brands = list(d.transactions['Brand'].unique())

            return { "start_date": start_date, "end_date": end_date, "brands": brands }
        except ValueError:
            return { "error" : "summariser error"}