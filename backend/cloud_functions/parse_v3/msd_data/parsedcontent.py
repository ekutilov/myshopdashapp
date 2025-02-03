from pandas import concat

class ParsedContent():
    def __init__(self, transactions, items, status=[], metabrand=None):
        self.transactions = transactions
        self.items = items
        self.status = status
        self.metabrand = metabrand

    @staticmethod
    def concat(data):
        transactions = concat([d.transactions for d in data]).drop_duplicates(subset=['transaction_hash'])

        items = concat([d.items for d in data])
        items = items[items['transaction_hash'].isin(transactions['transaction_hash'])]

        status = [d.status for d in data]
        metabrand = [d.metabrand for d in data][0] if len(data) > 0 else None

        return ParsedContent(transactions, items, status, metabrand)