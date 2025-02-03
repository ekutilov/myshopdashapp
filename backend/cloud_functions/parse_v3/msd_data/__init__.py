""" MSD Data Parsing Module """

# from .classes import ParsedContent, Parsers
# from .classes import Parsers #, Parsers as parsers
from .parse import Parser
# from .genericparserenricher import GenericParserEnricher
# from .parsedcontent import ParsedContent


config = {
    "name": "msd_parsers",
    "version": "3.0.1",
}

__all__ = [
    "ParsedContent",
    "Parser",
    "config",
]

__version__ = config["version"]


# These are the classes that are imported from the msd_data module:
# GenericParserEnricher
# ParsedContent
