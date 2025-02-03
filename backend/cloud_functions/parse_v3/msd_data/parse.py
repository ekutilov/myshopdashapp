"""
    Provides a unified interface for parsing json data. 

"""

from .parsedcontent import ParsedContent
from .parsers import Parsers
# from .classes import Parsers

class Parser():
    """
    Parser class is a wrapper for the Parsers classes. It takes a json_data and inferred_brand as input and returns a parsed_content object.
    It checks the metabrand in the json_data and uses it to select the appropriate parser from the Parsers dictionary.

    Args:
        json_data (dict): The json_data to be parsed.
        inferred_brand (str, optional): The brand of the json_data. Defaults to "woolworths".

    Returns:
        ParsedContent: The parsed content.

    Examples:
        >>> p = Parser(json_data)
        >>> p.parsed_content
    """
    Parsers = Parsers

    def __init__(self, json_data, inferred_brand="woolworths", parse_only=None):

        self.json_data = json_data
        self.inferred_brand = inferred_brand

        if isinstance(self.json_data, dict):
            if "metabrand" in self.json_data:
                brand = self.json_data["metabrand"]
            else:
                brand = self.inferred_brand
        else:
            brand = self.inferred_brand

        self.brand = brand

        if parse_only:
            iters = [ P().enforce_schema(P().parse(self.json_data)) for P in Parser.Parsers[brand] ]
        else:
            iters = [ P().parse_enrich(self.json_data) for P in Parser.Parsers[brand] ]

        parsed_content = ParsedContent.concat(iters)

        self.mismatches_handler(parsed_content)

        self.parsed_content = parsed_content
    
    def mismatches_handler(self, data):
        """
        TODO 
        """
        pass