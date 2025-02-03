import pandas as pd

from ..genericparserenricher import GenericParserEnricher


# # Extract SKUs TODO


class bigwHandler(GenericParserEnricher):
    metabrand = "woolworths"
    def __init__(self):
        super().__init__()
        self.rules = { "transactions":
            {
                "storeNo": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.ereceipt\.activityDetails\.tabs\.(?P<tab>\d+)\.page\.details\.(?P<page>\d+)\.storeNo$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"],
                "brand": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.icon$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"],
                "store": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.transaction\.origin").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"]
                ,
                "Date": lambda flat_data: flat_data\
                    .key.str.extract(r"^(?P<tn>\d+)\.ereceipt.activityDetails.tabs.(?:\d+).page.details.(?:\d+).transactionDetails$")\
                    .dropna(subset="tn").join(
                        pd.to_datetime(flat_data.value.str.extract(r".*(?P<value>\d{2}\:\d{2}\s+\d{2}\/\d{2}\/\d{4})$").dropna().squeeze(), format="%H:%M %d/%m/%Y", utc=False, exact=False).dt.tz_localize('Australia/Sydney')
                    ).set_index('tn')["value"]
                    ,
                "card": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.clientId$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"],
                "receipt_total": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+).ereceipt.activityDetails.tabs.\d+.page.details.\d+.total$").dropna(subset="tn").join(flat_data.value.str.extract(r"\$(?P<value>\d+\.\d{2})").astype('float')).set_index('tn')["value"],
                "Total Points": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.displayValue$').dropna().join(flat_data.value.str.extract(r"^\D*(?P<value>\d+)\D*$").astype('float')).fillna(0).astype(int).set_index('tn')["value"],
                "Extra Bonus Points": 0,
                "Rewards Points": 0,
                "transactionId": lambda flat_data: flat_data.key.str.extract(r"^(?P<tn>\d+)\.id$").dropna(subset="tn").join(flat_data.value).set_index('tn')["value"],
                "recordId": None
            },
                       "items":
                       {
                          "Product": lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.activityDetails.tabs.\d+.page.details.\d+.items.(?P<in>\d+)\.description$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in']).str.extract(r"^(?:\^|\#)(?P<value>.*)$").fillna('')["value"],
                          "Price Per Unit" : None, # add in post
                          "Quantity" : None, # add in post
                          "Unit": None, # add in post
                          "Price Total" : lambda flat_data: flat_data.key.str.extract(r'^(?P<tn>\d+)\.ereceipt.activityDetails.tabs.\d+.page.details.\d+.items.(?P<in>\d+)\.amount$').dropna(subset="tn").join(flat_data.value).set_index(['tn', 'in'])["value"],
                          "Sku_o": None # unavailable - required enrichment

                       }
        }

    def post_processor(self, data):
        processed = super().post_processor(data)
        processed.transactions = processed.transactions.query("brand=='bigw'")
        processed.items = ww_postprocess(processed.items.loc[processed.transactions.index])
        return processed


def ww_postprocess(items):
    def seri(s):
        if pd.notna(s.qty):
            if s['Price Total']=="" or s['Price Total'] is None:
                s['Price Total']=s['Price Total_lead']
            s['Quantity']=s['qty']
            s['Unit']=s['unit']
            s['Price Per Unit']=s['unitPrice']
        else:
            s['Quantity']=1
            s['Price Per Unit']=s['Price Total']
            s['Unit']='each'
        return s

    templates=[]
    templates.append(r'^Qty (?P<qty>\d+) \@ \$(?P<unitPrice>\d+\.?\d\d) (?P<unit>\w+)$')
    templates.append(r'^(?P<qty>\d+\.?\d+) (?P<unit>\w+) NET \@ \$(?P<unitPrice>\d+\.?\d\d)\/(?P<unit22>\w+)$')

    cols = items.columns.tolist()

    items2 = items.query(r"not Product.str.match('PRICE REDUCED BY.*')")

    items3 = items2.join(items2.groupby('tn').shift(-1), rsuffix='_lead',)\
      .filter(cols+['Product_lead', 'Price Total_lead',]).query(f"not Product.str.match('{templates[0]}')").query(f"not Product.str.match('{templates[1]}')")

    option1 = items3.Product_lead.str.extract(templates[0])
    option2 = items3.Product_lead.str.extract(templates[1])

    items4 = items3.join(option1.fillna({'qty': option2.qty, 'unit': option2.unit, 'unitPrice': option2.unitPrice})).apply(seri, axis=1).filter(cols).assign(Product=lambda d: d.Product.str.extract(r"^\#?(?P<Product>.*)$"))

    return items4
