from json import loads
from hashlib import md5
from pandas import DataFrame, NA, notna, Timestamp

from .parsedcontent import ParsedContent

class MSDSchema():
    def __init__(self):
        self.data_schema = DATA_SCHEMA

    def enforce_schema(self, data):

        transactions_df=dict()

        for k, v in self.data_schema['transform']['transactions'].items():
            if v is None:
                if k in data.transactions.columns:
                    transactions_df[k]=data.transactions[k]
                else:
                    transactions_df[k]=DataFrame(index=data.transactions.index)
            elif callable(v):
                transactions_df[k] = v(data.transactions)
            elif isinstance(v, str):
                if v in data.transactions.columns:
                    transactions_df[k] = data.transactions[v]
                else:
                    transactions_df[k] = DataFrame(index=data.transactions.index)
                    print(f"ATTENTIOM: {v} not found in transactions - while present in schema description")

        items_df=dict()

        for k, v in self.data_schema['transform']['items'].items():
            if v is None:
                items_df[k]=data.items[k]
            elif callable(v):
                items_df[k]=v(data.items)
            elif isinstance(v, str):
                items_df[k]=data.items[v]

        transactions = DataFrame(transactions_df, index=data.transactions.index)
        
        items = DataFrame(items_df, index=data.items.index).join(transactions.filter(self.data_schema['from_transactions_to_items']), how='left')

        # enforce indices
        transactions = transactions.set_index(self.data_schema['indices']['transactions'], drop=False)
        items = items.set_index(self.data_schema['indices']['items'], drop=False)

        return ParsedContent(transactions, items, data.status, data.metabrand)

    @property
    def DATA_SCHEMA(self):
        return self.data_schema


DATA_SCHEMA = {
    "transform": {
        "transactions": {
            "Brand": None, # non-changing statement
            "Card Number": None,
            "Date": None,
            "Extra Bonus Points": None,
            "Receipt Total": None,
            "Rewards Points": None,
            "Store": lambda df: df["storename"].fillna(df["Store"]).fillna("Unknown"),
            "Store Number": lambda df: df["number"].fillna(df['Store Number']),
            "Store_Address": "address",
            "Store_Division": "division",
            "Store_Facilities": lambda df: df["facilities"].astype(str, errors='ignore').fillna('[]'),
            "Store_GMTZone": "tz",
            "Store_Latitude": "lat",
            "Store_Longitude": "long", 
            "Store_Name": "storename", # renaming statement
            "Store_Postcode": "postcode",
            "Store_State": "state",
            "Store_StoreNo": lambda df: df['number'].fillna(df['Store Number']).astype(int, errors='ignore'),
            "Store_Suburb": "suburb",
            "Total Points": None,
            "_store_not_found": lambda df: df["number"].isna(),
            "metabrand": None,
            "recordId": lambda df: df['Date'].dt.strftime('%Y%m%d%H%M%S')+df['Store Number']+df['Receipt Total'].map(lambda s: '{:08.2f}'.format(s)).str.replace('.', ''),
            "transaction_hash": lambda df: df.apply(transaction_hash, axis=1),
            "_brand_cd": None,
            "Brand ID": "brand_id",
            "Segment": "Segment",
            "segment_id": "segment_id",
            "tn": lambda df: df['tn'].astype(int, errors='ignore'), # transformation statement
        }
        ,
        "items": {
            "Aisle": "aisle",
            "Barcode": "barcode",
            "Brand": "brand",
            "Category": "category",
            "Category_c": "category",
            "Category Original": "orig_category",
            "CountryOfOrigin": "country_of_origin",
            "CupMeasure": "cup_measure",
            "CupPrice": "cup_price",
            "CupString": "cup_price_desc",
            "Department": "department",
            "Department ID": "department_id",
            "Department_c": "department",
            "Department Original": "orig_deparment",
            "DisplayName": "display_name",
            "FullDescription": "product_name",
            "Name": "product_name",
            "Package Size": lambda df: df.apply(lambda s: {"Size": s['package_size'], "Unit": s['package_size_unit']}, axis=1),
            "Nutrition Plate": lambda df: df["nutrition_plate"].fillna("{}").apply(loads),
            "Price": "Price Total",
            "Price Per Unit": None,
            "Price Total": None,
            "Product": None,
            "Quantity": None,
            "Reduction": lambda df: df.assign(reduction=NA)["reduction"],
            "SmallFormatDescription": "product_name",
            "SmallImageFile": "small_image_url",
            "Stockcode": lambda df: df["sku"].astype(int, errors='ignore'),
            "SKU": "Sku",
            "sku_inferred_fl": lambda df: df.assign(sku_inferred_fl=True)["sku_inferred_fl"],
            "Subcategory": "subcategory",
            "Subcategory_c": "subcategory",
            "Unit": None,
            "Unit_c": "Unit",
            "UrlFriendlyName": "url_friendly_name",
            "URL": "product_url",
            "_product_not_known": lambda df: df.receipt_name.isna() & df.sku.isna(),
            "nn": lambda df: df.groupby(df.tn).cumcount()+1,
            "in": lambda df: df['in'].astype(int, errors='ignore'),
            "tn": lambda df: df['tn'].astype(int, errors='ignore'),
            "receipt_name": "Product",
            "sku_guess": "sku",
            "sku_used":  lambda df: df["sku"].astype(int, errors='ignore'),
        }
    }
    ,
    "from_transactions_to_items": ['transaction_hash', 'recordId'],
    "indices": {
        "transactions": ['transaction_hash'],
        "items": ['transaction_hash', 'nn'],
    },
}

def transaction_hash(t):
    def coalesce(s):
        if notna(s):
            return s
        else:
            return 0

    # hashing_string = f"{{ ts: {coalesce(t['Date'].strftime('%Y%m%d%H%M%S'))}, metabrand: {coalesce(t['metabrand'])}, brand: {coalesce(t['_brand_cd'])}, store_number: {coalesce(t['Store Number'])}, receipt_total: {coalesce(t['Receipt Total'])} }}"
    hashing_string = f"{{ ts: {coalesce(Timestamp(t['Date'])).tz_convert('Australia/Sydney').strftime('%Y%m%d%H%M%S')}, metabrand: {coalesce(t['metabrand'])}, brand: {coalesce(t['_brand_cd'])}, store_number: {coalesce(t['Store Number'])}, receipt_total: {coalesce(t['Receipt Total'])} }}"

    return md5(hashing_string.encode()).hexdigest()
