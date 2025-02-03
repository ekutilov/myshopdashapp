""" 
This module is a collection of retailer-specific parsers. Each parser is a class that 
inherits from the GenericParserEnricher class.
"""

# from .bigw import bigwHandler
from .woolworths import woolworthsHandler
from .coles import colesHandler

Parsers = {
    "woolworths": [woolworthsHandler, ],
    "coles": [colesHandler, ]
}
