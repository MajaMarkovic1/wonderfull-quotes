
const quotesList = []

class QuotesService {
    list(){
        return quotesList;
    };

    addQuote(quote){
        quotesList.push(quote);
        console.log(quotesList)
        
    };

    delete(quote){
        quotesList.splice(quote, 1)
        console.log(quotesList)
    }

}
export const quotesService = new QuotesService();
