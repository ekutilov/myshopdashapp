"""Environment variables for the parse_v3 Cloud Function."""

import os

ENV = os.getenv("MSD_ENV", "DEV")
PROD = os.getenv("MSD_ENV", "DEV")!="DEV"
PROJECT_ID = os.getenv("GOOGLE_CLOUD_PROJECT", "rewards-viewer-dev")
STORAGE_BUCKET = os.getenv("STORAGE_BUCKET", 'rewards-viewer-dev.appspot.com')
