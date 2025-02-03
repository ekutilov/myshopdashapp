""" 
TODO 
"""
from google.cloud.bigquery import Client as BQClient 

from .env import ENV, PROJECT_ID


class EnrichmentData():
    def __init__(self, data, match_type="sku"):
        self.data = data
        self.metabrand = data.metabrand
        self.match_type = match_type
        self.client = BQClient()
        self.items_enrichment = self.get_items_enrichment_data(match_type)
        self.transactions_enrichment = self.get_transactions_enrichment_data()

    def get_items_enrichment_data(self, match_type="sku"):

        if match_type=="name":
            in_clause_items = lambda data: '( "' +\
                '","'.join(data.items.Product.str.extract(r"^\#?(?P<Product>.*)$").squeeze().unique().tolist()) +\
                '")'

            q_items = lambda data, metabrand: f"""
                SELECT
                     m.receipt_name
                    ,m.sku
                    ,p.sku IS NOT NULL prod_exists
                    ,p.display_name
                    ,p.product_name
                    ,p.department
                    ,p.department_id
                    ,p.category
                    ,p.subcategory
                    ,p.aisle
                    ,p.orig_deparment
                    ,p.orig_category
                    ,p.brand
                    ,p.country_of_origin
                    ,p.package_size
                    ,p.package_size_unit
                    ,p.unit_price
                    ,p.cup_price
                    ,p.cup_measure
                    ,p.cup_price_desc
                    ,p.nutrition_plate
                    ,p.big_image_url
                    ,p.small_image_url
                    ,p.product_url
                    ,p.url_friendly_name
                    ,p.msd_product_key
                    ,p.barcode
                FROM `{PROJECT_ID}.{ENV.lower()}.rcpt2sku_map` m
                LEFT JOIN `{PROJECT_ID}.{ENV.lower()}.products` p
                ON m.sku=p.sku AND p.metabrand=m.metabrand
                WHERE m.metabrand="{metabrand}"
                AND m.receipt_name IN {in_clause_items(data)}
        """

        elif match_type=="sku":
            in_clause_items = lambda content: '( "' +\
                '","'.join(content.items['Sku'].unique().tolist()) +\
                '")'

            q_items = lambda data, metabrand: f"""
                SELECT
                     p.sku
                    ,p.display_name
                    ,p.product_name
                    ,p.department
                    ,p.department_id
                    ,p.category
                    ,p.subcategory
                    ,p.aisle
                    ,p.orig_deparment
                    ,p.orig_category
                    ,p.brand
                    ,p.country_of_origin
                    ,p.package_size
                    ,p.package_size_unit
                    ,p.unit_price
                    ,p.cup_price
                    ,p.cup_measure
                    ,p.cup_price_desc
                    ,p.nutrition_plate
                    ,p.big_image_url
                    ,p.small_image_url
                    ,p.product_url
                    ,p.url_friendly_name
                    ,p.msd_product_key
                    ,p.barcode
                    ,p.receipt_name
                FROM `{PROJECT_ID}.{ENV.lower()}.products` p
                WHERE p.metabrand="{metabrand}"
                AND p.sku IN {in_clause_items(data)}
        """

        items_enrichment = self.client.query(q_items(self.data, self.data.metabrand)).to_dataframe()

        return items_enrichment

    def get_transactions_enrichment_data(self, match_type=None):
        in_clause_transactions = lambda data: '( "' +\
            '","'.join(data.transactions['Store Number'].unique().tolist()) +\
            '")'

        q_stores = lambda data, metabrand: f"""
            SELECT
                brand
                ,brand_cd
                ,brand_id
                ,division
                ,storename
                ,number
                ,state
                ,suburb
                ,postcode
                ,address
                ,phone
                ,tz
                ,lat
                ,long
                ,facilities
                ,trading_hours
            FROM `{PROJECT_ID}.{ENV.lower()}.stores`
            WHERE metabrand="{metabrand}"
            AND number IN {in_clause_transactions(data)}
        """

        transactions_enrichment = self.client.query(q_stores(self.data,self.data.metabrand)).to_dataframe()

        return transactions_enrichment