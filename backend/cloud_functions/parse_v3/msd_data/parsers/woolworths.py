from pandas import to_datetime, notna, isna

from ..genericparserenricher import GenericParserEnricher

DIVISIONS_2 = {
    'bws': 'BWS',
    'bigw': 'Big W',
    'woolworths': 'Woolworths',
    'woolworths_metro': 'Woolworths Metro'}

ICONS = {
    "https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/woolworths_wapple.png": "woolworths",
    "https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/bws_logo.png": "bws",
    "https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/bigw_logo.png": "bigw" 
}

# Parse WWonline receipts either - with different schema. TODO

class woolworthsHandler(GenericParserEnricher):
    metabrand = "woolworths"
    enricher_match_type = "name"

    rules={
        "parser": { 
            "transactions":
            {
                "Store Number": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.ereceipt\.activityDetails\.tabs\.(?P<tab>\d+)\.page\.details\.(?P<page>\d+)\.storeNo$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"],
                # cannot start with constant (as the index should be initialised)
                "Segment": "Groceries",
                "segment_id": 1,
                "_brand_cd": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.icon$").dropna(subset="tn") .join(flat_data.value).set_index('tn').query("value=='woolworths_metro'").join(flat_data.key.str.extract(r"(?P<tn>\d+)\.ereceipt\.activityDetails\.tabs\.0\.page\.details\.0.iconUrl").dropna(subset="tn").join(flat_data.value).set_index('tn')['value'].replace(ICONS)
                                                 ,rsuffix="_", how="outer").apply(lambda x: x.value_ if isna(x.value) else x.value, axis=1).rename("value"),
                "Brand": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.icon$").dropna(subset="tn") .join(flat_data.value).set_index('tn').query("value=='woolworths_metro'").join(flat_data.key.str.extract(r"(?P<tn>\d+)\.ereceipt\.activityDetails\.tabs\.0\.page\.details\.0.iconUrl").dropna(subset="tn").join(flat_data.value).set_index('tn')['value'].replace(ICONS)
                                                 ,rsuffix="_", how="outer").apply(lambda x: x.value_ if isna(x.value) else x.value, axis=1).rename("value").fillna("woolworths").replace(DIVISIONS_2),
                # "Store": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.transaction\.origin").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"]
                "Store": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.ereceipt\.activityDetails\.tabs\.\d+\.page\.details\.\d+\.title$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"]
                ,
                "Date": lambda flat_data: flat_data\
                    .key.str.extract(r"^(?P<tn>\d+)\.ereceipt\.activityDetails\.tabs\.(?:\d+)\.page\.details\.(?:\d+)\.transactionDetails$")\
                    .dropna(subset="tn").join(
                        to_datetime(flat_data.value.str.extract(r".*(?P<value>\d{2}\:\d{2}\s+\d{2}\/\d{2}\/\d{4})$").dropna().squeeze(), format=r"%H:%M %d/%m/%Y", utc=False, exact=False).dt.tz_localize('Australia/Sydney')
                    ).set_index('tn')["value"]
                    ,
                "Card Number": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.clientId$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"],
                "Receipt Total": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+).ereceipt\.activityDetails\.tabs.\d+\.page\.details.\d+\.total$").dropna(subset="tn").join(flat_data.value.str.extract(r"\$(?P<value>\d+\.\d{2})").astype('float')).set_index('tn')["value"],
                "Total Points": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.displayValue$").dropna().join(flat_data.value.str.extract(r"^\D*(?P<value>\d+)\D*$").astype('float')).fillna(0).set_index('tn').astype(int)["value"],
                "Extra Bonus Points": 0,
                "Rewards Points": 0,
                "transactionId": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.id$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"],
            },
            "items":
                {

                    "Product": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt\.activityDetails\.tabs.\d+\.page\.details.\d+\.items\.(?P<in>\d+)\.description$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"].str.extract(r"^[\^\#]?(?P<value>.*)$").fillna('')["value"],
                    "Price Per Unit" : None, # add in postprocessing
                    "Quantity" : None, # add in post
                    "Unit": None, # add in post
                    "Price Total" : lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt\.activityDetails\.tabs.\d+\.page\.details.\d+\.items\.(?P<in>\d+)\.amount$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"],
                    "Sku_o": None, # unavailable - required enrichment
                    "Sku": None # unavailable - required enrichment
                }
        },
        "enricher": {
            "items": {"enricher_match_type": "name"},
            "transactions": {}
        }
    }

    def post_processor(self, data):
        processed = super().post_processor(data)
        processed.transactions = processed.transactions.query("(_brand_cd=='woolworths' or _brand_cd=='woolworths_metro' or _brand_cd=='bws') and `Store Number`.str.len()>3 and `Store Number`.str.slice(0,1)!='0'")
        items = processed.items.loc[processed.transactions.index]

        if len(items)!=0:
            processed.items = ww_items_postprocess(items)

        return processed

def ww_items_postprocess(items):
    # this process flattens records where one item record occupies a few lines in the receipt
    def seri(s):
        if notna(s.qty):
            if s['Price Total']=="" or s['Price Total'] is None:
                s['Price Total']=s['Price Total_lead']
            s['Quantity']=s['qty']
            s['Unit']=s['unit']
            s['Price Per Unit']=s['unitPrice']
        else:
            s['Quantity']=1
            s['Price Per Unit']=s['Price Total']
            s['Unit']='pc'
        return s

    templates=[]
    templates.append(r'^Qty (?P<qty>\d+) \@ \$(?P<unitPrice>\d+\.?\d\d) (?P<unit>\w+)$')
    templates.append(r'^(?P<qty>\d+\.?\d+) (?P<unit>\w+) NET \@ \$(?P<unitPrice>\d+\.?\d\d)\/(?P<unit22>\w+)$')

    cols = items.columns.tolist()

    items2 = items.query(r"not Product.str.match('PRICE REDUCED BY.*')")

    items3 = items2.join(items2.groupby('tn').shift(-1), rsuffix='_lead',)\
      .filter(cols+['Product_lead', 'Price Total_lead',]).query(f"not Product.str.match('{templates[0]}')").query(f"not Product.str.match('{templates[1]}')")

    option1 = items3.Product_lead.str.extract(templates[0]).replace({"unit": {"each": "pc", "ea": "pc"}})
    option2 = items3.Product_lead.str.extract(templates[1])

    items4 = items3.join(option1.fillna({'qty': option2.qty, 'unit': option2.unit, 'unitPrice': option2.unitPrice})).apply(seri, axis=1).filter(cols).assign(Product=lambda d: d.Product.str.extract(r"^\#?(?P<Product>.*)$"))

    return items4