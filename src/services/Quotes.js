
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
        quotesList.splice(quotesList.indexOf(quote), 1)
    }

}
export const quotesService = new QuotesService();
