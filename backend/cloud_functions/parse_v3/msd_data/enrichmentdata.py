""" 
TODO 
"""

from google.cloud.bigquery import Client as BQClient,\
    QueryJobConfig, ScalarQueryParameter, ArrayQueryParameter

from .env import ENV, PROJECT_ID


class EnrichmentData():
    """
    Class to enrich the data with additional information from the database.
    """
    def __init__(self, data, match_type="sku"):
        self.data = data
        self.metabrand = data.metabrand
        self.match_type = match_type
        self.client = BQClient()
        self.items_enrichment = self.get_items_enrichment_data(match_type)
        self.transactions_enrichment = self.get_transactions_enrichment_data()

    def get_items_enrichment_data(self, match_type="sku"):
        """
        Get the items enrichment data from the database.
        """
        if match_type=="name":
            job_config = QueryJobConfig(
                query_parameters=[
                    ScalarQueryParameter("metabrand", "STRING", self.data.metabrand),
                    ArrayQueryParameter("receipt_name", "STRING", 
                        self.data.items.Product.str.extract(r"^\#?(?P<Product>.*)$").squeeze().unique().tolist()
                    ),
                ]
            )

            q_items = f"""
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
                WHERE m.metabrand= @metabrand
                AND m.receipt_name IN UNNEST(@receipt_name)
            """

            return self.client.query(q_items, job_config=job_config).to_dataframe()


        job_config = QueryJobConfig(
            query_parameters=[
                ScalarQueryParameter("metabrand", "STRING", self.data.metabrand),
                ArrayQueryParameter("sku", "STRING", self.data.items['Sku'].unique().tolist()),
            ]
        )

        q_items = f"""
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
            WHERE p.metabrand=@metabrand
            AND p.sku IN UNNEST(@sku)
        """

        items_enrichment = self.client.query(q_items, job_config=job_config).to_dataframe()

        return items_enrichment

    def get_transactions_enrichment_data(self, match_type=None):
        """
        Get the transactions enrichment data from the database.
        """
        job_config = QueryJobConfig(
            query_parameters=[
                ScalarQueryParameter("metabrand", "STRING", self.data.metabrand),
                ArrayQueryParameter("number", "STRING",
                    self.data.transactions['Store Number'].unique().tolist()
                ),
            ])

        q_stores = f"""
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
            WHERE metabrand=@metabrand
            AND number IN UNNEST(@number)
        """

        transactions_enrichment = self.client.query(q_stores, job_config=job_config).to_dataframe()

        return transactions_enrichment
