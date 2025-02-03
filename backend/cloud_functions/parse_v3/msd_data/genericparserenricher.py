""" 
    Generic class for store receipt parsers - extend this class to create a new parser.
    To extend, at minimum, you need to: 
    1) re-define metabrand property
    2) re-define rules property
    
    The rules property is a dictionary with two keys: "parser" and "enricher".
    enricher_match_type is a string that can be either "name" or "sku" - defaults to "sku".
    in parser, the keys are "transactions" and "items".
    Each of these keys is a dictionary with keys as the column names and values as the functions to extract the data.
    For transactions, the function should take a flattened json file and return a series with transaction identifier in the index and values as values
    For items, the function should take a flattened json file and return a series with a multiindex of transaction identifier and item identifier and values as respective values
    Instead of the function, the rule may provide a scalar constant, however the first rule of the set should be a function as it provides the index for the final Data Frame.

"""

from pandas import DataFrame, Series

from .parsedcontent import ParsedContent
from .enrichmentdata import EnrichmentData
from .schema import MSDSchema


class GenericParserEnricher():
    """ 
    Generic class for store receipt parsers - extend this class to create a new parser.
    To extend, at minimum, you need to:
    1) re-define metabrand property
    2) re-define rules property
    """
    metabrand="any"

    rules={
        "parser": { 
            "transactions": {"tfield": lambda _: "dummy t-rule"}, 
            "items": {"ifiled": lambda _: "dummy i-rule"} 
        },
        "enricher": {
            "items": {"enricher_match_type": "sku"},
            "transactions": {}
        }
    }

    def __init__(self):
        self.rules["parser"]["transactions"]["metabrand"] = self.metabrand

    def parse(self, json_data):
        """ 
        Parses the json data and returns a ParsedContent object.
        Args:
            json_data (dict): The json data to be parsed.
        Returns:
            ParsedContent: The parsed content with following properties:
                - transactions: DataFrame with transaction data
                - items: DataFrame with item data
                - status: List of status messages
                - metabrand: The metabrand of the data
            Items are linked to transactions by a transaction ID (contained in the index of transactions and multi index of items)
        """
        if isinstance(json_data, dict):
            store_data = json_data["download"]
        elif isinstance(json_data, list):
            store_data = json_data
        else:
            raise ValueError("Invalid JSON data")

        flat_dataset = DataFrame(self.flatten_json(store_data), index=["value"]).T.reset_index().rename(columns={"index": "key"})

        pre_processed = self.pre_processor(flat_dataset)

        parsed = self.__parser(pre_processed)

        final = self.post_processor(parsed)

        return final

    def enrich(self, obj):
        """ 
        Enriches the parsed data and returns a ParsedContent object with additional columns.
        Attention: this method (if not overriden) will use external data to enrich the items and transactions. Premissions to access this data are required.
        It also enfirces the schema of the data to ensure it is valid and required attributes and required types are written.
        
        Args:
            obj (ParsedContent): The parsed content to be enriched.
            Returns:
                ParsedContent
        """
        return self.finalise(
            self.enforce_schema(
                self.__enricher(obj)
            )
        )

    def enforce_schema(self, obj):
        """ 
        Enforces the schema of the data to ensure it is valid and required attributes and required types are written.
        Args:
            obj (ParsedContent): The parsed content to be enriched.
            Returns:
                ParsedContent
        It is recommended to override this method in the prod environment as it may lead to exceptions in the front end.
        
        """
        s = MSDSchema()
        return s.enforce_schema(obj)

    def parse_enrich(self, json_data):
        """
        Parses and enriches the json data and returns a ParsedContent object.
        Args:
            json_data (dict): The json data to be parsed.
        Returns:
            ParsedContent: The parsed content
        """
        return self.enrich(self.parse(json_data))

    def pre_processor(self, data):
        """ 
            Pre-processes the data before parsing.
            Override this method to add custom pre-processing steps if the simple 'parsing rules' approach is not applicable.
        """
        return data

    def post_processor(self, data):
        """ 
            Post-processes the data after parsing.
            Override this method to add custom post-processing steps if the simple 'parsing rules' approach is not cover required logic.
        """
        return data

    def __parser(self, data):

        t_columns = []

        for k, v in self.rules["parser"]["transactions"].items():
            if v is None or isinstance(v, str) or isinstance(v, int) or isinstance(v, float):
                t_columns.append(Series(v, index = t_columns[0].index).rename(k))
            else:
                t_columns.append(v(data).rename(k))

        transactions = t_columns[0].to_frame().join(t_columns[1:])

        i_columns = []

        for k, v in self.rules["parser"]["items"].items():
            if v is None or isinstance(v, str) or isinstance(v, int) or isinstance(v, float):
                i_columns.append(Series({"value": v}, index = i_columns[0].index).rename(k))
            else:
                i_columns.append(v(data).rename(k))

        # TODO: improve readability here (the idea: align indexes)

        items = i_columns[0].to_frame().join(i_columns[1:]).join(transactions['_brand_cd'], how="inner").drop("_brand_cd", axis=1)

        transactions = transactions.loc[items.index.droplevel('in').unique()]

        return ParsedContent(transactions, items, [], self.metabrand)

    def __enricher(self, data):
        edata = EnrichmentData(data, self.rules["enricher"]["items"]["enricher_match_type"])
        if self.rules["enricher"]["items"]["enricher_match_type"]=="name":
            items = data.items.reset_index().merge(edata.items_enrichment, how='left', left_on='Product', right_on='receipt_name').set_index(['tn', 'in'], drop=False)
        else:
            items = data.items.reset_index().merge(edata.items_enrichment, how='left', left_on='Sku', right_on='sku').set_index(['tn', 'in'], drop=False)
            
        transactions = data.transactions.reset_index().merge(edata.transactions_enrichment, how='left', left_on='Store Number', right_on='number').set_index('tn', drop=False)
        return ParsedContent(transactions, items, data.status, self.metabrand)
    
    def finalise(self, obj):
        """ 
        Placeholder method for finalising the parsed and enriched data that applied AFTER the parsing, enrichment and schema alignment.
        reserved for future use where existing logic is not sufficient.
        """
        return obj

    @staticmethod
    def flatten_json(y, sep="."):
        """ 
        Flattens a nested dictionary to a flat dictionary (used here to flatten the json data before extracting).
        Args:
            y (dict): The dictionary to be flattened.
            sep (str, optional): The separator for the keys in the flat dictionary. Defaults to ".".
            Returns:
                dict: The flat dictionary.
        """
        
        out = {}

        def flatten(x, name=''):
            if isinstance(x, dict):
                for a in x:
                    flatten(x[a], name + a + sep)

            elif isinstance(x, list):
                i = 0
                for a in x:
                    flatten(a, name + str(i) + sep)
                    i += 1
            else:
                out[name[:-1]] = x

        flatten(y)
        return out
