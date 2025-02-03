# myshopdash web app

This is source code of MyShopDash webb app with the complementary Chrome browser extension, and principal backend codebase. 

The app captures and consolidates users' shopping data from two major Australian grocery chains - Woolworths and Coles - and turns their shopping receipts (automatically downloaded from their websites) into a personalised shopping dashboard.

The app: https://myshopdash.app/ (demo version is available though a buttom at the bottom of the page) 

# frontend folder
Contains the web app code which is deployed at https://myshopdash.app/. JS+Vue.

# browser extension
Contains the code of the extension that can be installed from Chrome Web Store (the extension is used to capture customer's data in a safe way at the customer's computer). JS+Vue

# backend 
The backend routines used to upload the raw shopping data to the backend DB, parse and enrich it to get it ready for visualising. Python, SQL

# further development
This repo is work in progress.

The goal is to develop more connections that would enable the app handle eReceipts from other retailers + developing more ways for users to get insights and advice about their shopping habits. 

# Get started with this code
If you have a raw file downloaded with the MyShopDash Chrome Extension, you can use Jupyter Notebook: ./backend/cloud_functions/use_examples.ipynb to start using code snippets from this repo to parse and understand this data. 
