from flask import make_response #, redirect, request
from google.cloud.storage import Client
from os import getenv 
import uuid
from json import loads, JSONDecodeError
import functions_framework

uuid_generate = lambda: str(uuid.uuid4())
ALLOWED_BRANDS = ['woolworths', 'coles']

def upload_blob(bucket_name, content, name):
    """Uploads a file to a bucket."""
    storage_client = Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(name)
    blob.upload_from_string(content)

    return blob.exists()


def generate_log_message(note, request):
    form = request.form
    print(f"{note} :: IP: {request.remote_addr}, content sample: {form.get('content')[:1000]}, length: {len(form.get('content'))}, form.keys: {form.keys()}, referrer: {request.referrer}, request headers: {request.headers}")


@functions_framework.http
def main(request):
    """Uploader function."""

    if request.method == 'OPTIONS':
        # Set CORS headers for the preflight request (as request coming to this script are cross-origin)

        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)
    
    elif request.method == 'POST':

        bucket = getenv("STORAGE_BUCKET", 'rewards-viewer-dev.appspot.com')

        content = request.form["content"]

        try:
            parsed_content = loads(content)
        except JSONDecodeError:
            generate_log_message('File was uploaded which is not valid JSON format', request)
            return ("Bad Request", 400)

        if isinstance(parsed_content, dict):
            brand = parsed_content.get('metabrand', request.form.get("brand", None).lower())
        elif isinstance(parsed_content, list):
            brand = request.form.get("brand", None).lower()
        else:
            generate_log_message('Content is not valid', request)
            return ("Bad Request", 400)

        if brand is None:
            generate_log_message('Brand not found neither in contat nor in request parameters', request)
            return ("Bad Request", 400)
        
        if brand not in ALLOWED_BRANDS:
            generate_log_message(f'Brand is not allowed: {brand}', request)
            return ("Bad Request", 400)
        
        if len(content) > 4000000:
            generate_log_message('File is too large', request)
            return ("Bad Request", 400)

        file_id = uuid_generate()

        name = f"uploads/{brand}_{file_id}_json.json"
        result = upload_blob(bucket, content, name)

        if result:
            response = make_response(file_id, 200)
        else:
            response = make_response('Error', 400)
            print('Upload fail')

        # temporary duplication for backward compatibility - remove after full transition
        name2 = f"uploads/{brand}/{file_id}_json.json"
        result = upload_blob(bucket, content, name2)

        response.headers['Access-Control-Allow-Origin'] = '*'
        
        return response
    
    else:
        return ("Bad Request", 405)