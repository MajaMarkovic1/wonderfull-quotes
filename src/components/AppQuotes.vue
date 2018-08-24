<template>
    <div>
        <QuoteForm />
        <QuotesList @deleteCard="deleteCard" />
    </div>
</template>

<script>
import QuoteForm from './QuoteForm'
import QuotesList from './QuotesList'

import { quotesService } from '../services/Quotes'



export default {
    components: {
        QuoteForm,
        QuotesList
    },
    methods: {
        deleteCard(quote){
            quotesService.delete(quote)
        }
    }


}
</script>

