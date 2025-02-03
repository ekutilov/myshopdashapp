from pandas import to_datetime

from ..genericparserenricher import GenericParserEnricher

ENTITIES = {"COLES SUPERMARKETS AUSTRALIA PTY LTD": {
    "_brand_cd": "coles", 
    "Brand": "Coles"}
    }

# Parse Coles receipts either - with different schema. TODO

class colesHandler(GenericParserEnricher):
    metabrand = "coles"

    rules={ 
        "parser": { 
            "transactions":
            {
                "requestId": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.requestId").dropna(subset="tn").join(flat_data.value).set_index('tn')['value'],
                "Segment": "Groceries",
                "segment_id": 1,
                "Store": lambda flat_data: flat_data["key"].str.extract(r"^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.data\.storeName$").dropna(subset="tn").join(flat_data["value"]).set_index('tn')["value"],
                "Store Number": lambda flat_data: flat_data["key"].str.extract(r"^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.data\.store\.storeId$").dropna(subset="tn").join(flat_data["value"]).set_index('tn')["value"].str.lstrip(to_strip="0"),
                "_brand_cd": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.data\.store\.entityName$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"].replace({k: v["_brand_cd"] for k, v in ENTITIES.items()}).fillna("coles"),
                "Brand": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.data\.store\.entityName$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"].replace({k: v["Brand"] for k, v in ENTITIES.items()}).fillna("coles"),
                "Date": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.data\.orderPlacementTime$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"].apply(lambda x: to_datetime(x, utc=True)),
                "Card Number": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.data\.orderAttributes\.flybuysNumber$').dropna(subset='tn').join(flat_data.value).set_index('tn')["value"],
                "Receipt Total": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.getOrderV2\([^\)]*\)\.data.orderAttributes.orderTotalPrice$').dropna(subset="tn").join(flat_data.value).set_index('tn')["value"].astype('float', errors='ignore'),
                "Total Points": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.data\.orderAttributes\.flybuysPointsEarned$').dropna().join(flat_data.value).set_index('tn')["value"],
                "Extra Bonus Points": 0,
                "Rewards Points": 0,
            },
            "items":
                {

                    "Product": lambda flat_data: flat_data["key"].str.extract(r"^(?P<tn>\d+)\.ereceipt\.getOrderV2\([^\)]*\)\.data\.items\.(?P<in>\d+)\.name$").dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"],
                    "Price Per Unit" : lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.getOrderV2\([^\)]*\)\.data.items\.(?P<in>\d+)\.orderItem.unitPrice$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"].astype(float, errors='ignore'),
                    "Quantity" : lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.getOrderV2\([^\)]*\)\.data.items\.(?P<in>\d+)\.orderItem.(?:(?:quantity)|(?:weight))$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"].astype(float, errors='ignore'),
                    "Quantity" : lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.getOrderV2\([^\)]*\)\.data.items\.(?P<in>\d+)\.orderItem.(?:(?:quantity)|(?:weight))$').dropna(subset="tn").join(flat_data.value).query("value!=0").set_index(['tn', 'in'])["value"].astype(float, errors='ignore'),
                    "Unit": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.getOrderV2\([^\)]*\)\.data.items\.(?P<in>\d+)\.orderItem.(?P<units>(?:quantity)|(?:weight))$').dropna(subset="tn").join(flat_data.value).query("value!=0").set_index(['tn', 'in'])["units"].replace({"quantity": "pc", "weight": "kg"}),
                    "Price Total" : lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.getOrderV2\([^\)]*\)\.data.items\.(?P<in>\d+)\.orderItem.itemTotalPrice$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"].astype(float, errors='ignore'),
                    "Sku_o": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.getOrderV2\([^\)]*\)\.data.items\.(?P<in>\d+)\.id$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"].astype(str, errors='ignore'),
                    "Sku": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.getOrderV2\([^\)]*\)\.data.items\.(?P<in>\d+)\.id$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"].astype(str, errors='ignore'),
                }
        },
        "enricher": {
            "items": {"enricher_match_type": "sku"},
            "transactions": {}
        }
    }

    def __init__(self):
        super().__init__()
