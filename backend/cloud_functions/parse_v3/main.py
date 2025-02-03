"""
    This module is the entry point for the parse_v3 cloud function. 
    It is triggered by a new file upload to the parse queue. It reads the uploaded file, parses it, 
    and updates the Firestore database with the parsed data. It also moves the uploaded file to the 
    archive folder and updates the status of the upload record in the Firestore database.
"""

from json import loads as jload, JSONDecodeError
from pandas import Timestamp
from google.cloud.firestore import SERVER_TIMESTAMP
import functions_framework
from cloudevents.http import CloudEvent

from .classes import CloudEventParser, UploadQueueRecord, Storage, ReceiptCollection, UploadFileNames, PROD, ENV
from .msd_data import Parser


@functions_framework.cloud_event
def main(event: CloudEvent=None) -> None:
    """
    This function is the entry point for the parse_v3 cloud function. It is triggered by a new file upload to the parse queue. It reads the uploaded file, parses it, and updates the Firestore database with the parsed data. It also moves the uploaded file to the archive folder and updates the status of the upload record in the Firestore database.
    
    Args:
        event (CloudEvent, optional): The CloudEvent that triggered the function. Defaults to None.

    """

    if event is None: # None input is handled for testing purposes
        request_loc, update_ts = "users/cMWR8ZGrmpWoIctWIspG/uploads/a1sWr9sezCd6xGWhDvVu", Timestamp.now('Australia/Sydney')
    else:
        event_data = CloudEventParser(event)
        request_loc, update_ts = event_data.request_loc, event_data.update_ts

    store = Storage()
    upload_record = UploadQueueRecord(request_loc, update_ts)
    f = UploadFileNames(upload_record)

    content = store.read(f.UPLOAD)

    if not upload_record.brand in Parser.Parsers:
        upload_record.update({'status': 'error', 'errorMessage': f'Not supported brand: {upload_record.brand}', "last_updated": SERVER_TIMESTAMP})
        raise ValueError(f'Not supported brand/metabrand in parse request: {upload_record.brand}')

    # print(f'Processing {f.NAME} for {upload_record.brand} brand ', type(content), len(content), content[:100], content is None)

    if content is None:
        upload_record.update({'status': 'error', 'errorMessage': f'Blob {f.NAME} doesnt exist', "last_updated": SERVER_TIMESTAMP})
        raise FileNotFoundError(f'Blob {f.NAME} doesnt exist')

    if PROD:
        store.move(f.UPLOAD, f.ARCHIVE)

    upload_record.update({'status': 'parsing', "last_updated": SERVER_TIMESTAMP})

    try:
        json_data = jload(content)
    except JSONDecodeError as exc:
        store.move(f.ARCHIVE, f.ERROR)
        upload_record.update({'status': 'error', 'errorMessage': f'Decoding error: captured json was not in a correct format. Please contact support.', "last_updated": SERVER_TIMESTAMP})
        raise JSONDecodeError(f'JSON decode error: file uploaded ({upload_record.upload_id}) is not a correct json') from exc

    if PROD:
        try:
            parsed_content = Parser(json_data).parsed_content
        except Exception as exc:
            store.move(f.ARCHIVE, f.ERROR)
            upload_record.update({'status': 'error', 'errorMessage': f'Decoding error: the {upload_record.brand} app was not able to parse the data. Please contact support.', "last_updated": SERVER_TIMESTAMP})
            raise JSONDecodeError(f'JSON decode error: file uploaded ({upload_record.upload_id}) is not in correct format for {upload_record.brand} parser') from exc
    else:   
        parsed_content = Parser(json_data).parsed_content

    if len(parsed_content.items) == 0 or len(parsed_content.transactions) == 0:
        upload_record.update({'status': 'error', 'errorMessage': f'No records were parsed successfully: the app was not able to parse the data. Please contact support.', "last_updated": SERVER_TIMESTAMP})
        raise JSONDecodeError(f'No items found: file uploaded ({upload_record.upload_id}) is not in correct format or empty')

    # parsed_content.items = parsed_content.items.join(parsed_content.transactions.filter(['transaction_hash', 'recordId']), how='left')
    receipt_collection = ReceiptCollection(upload_record)
    update_summary = receipt_collection.update(parsed_content)

    parse_status = { 
        "transactions_mismatches": parsed_content.transactions.query('_store_not_found')['transaction_hash'].tolist(),
        "transactions_mismatches_n": len(parsed_content.transactions.query('_store_not_found')['transaction_hash'].tolist()),
        "items_mismatches": parsed_content.items.query('_product_not_known').assign(stock_id=lambda df: df['SKU'].fillna(df['receipt_name']))["stock_id"].tolist(),
        "items_mismatches_n": len(parsed_content.items.query('_product_not_known')),
    }

    upload_record.update(
        {
            'status': 'ok',
            'last_updated': SERVER_TIMESTAMP,
            'parse_status': parse_status,
            'total_transactions_cnt': len(parsed_content.transactions),
            'new_transactions_cnt': len(update_summary.get('transactions_new', [])),
            'summary': update_summary.get('summary', {}),
        })

# main() ## Uncomment this line to run the function locally for testing purposes
