
const quotesList = []

class QuotesService {
    list(){
        return quotesList;
    };

    addQuote(quote){
        quotesList.push(quote);
    };

}
export const quotesService = new QuotesService();
