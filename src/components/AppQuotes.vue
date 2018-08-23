<template>
    <div>
        <QuoteForm />
        <QuotesList  />
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


}
</script>

