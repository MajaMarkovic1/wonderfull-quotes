<template>
    <div >
        <form @submit.prevent="onSubmit" id="form">
            <div class="form-group">
                <label for="formGroupExampleInput"><strong>Quote</strong></label>
                <input v-model="quote.text" type="text" name="text" class="form-control" id="formGroupExampleInput">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2"><strong>Author</strong></label>
                <input v-model="quote.author" name="author" type="text" class="form-control" id="formGroupExampleInput2">
            </div>
            <button type="submit" class="btn btn-primary">Add quote</button>
        </form>
    </div>
</template>

<script>
import { quotesService } from '../services/Quotes'

export default {
    data(){
        return {
            quote: {
                text: '',
                author: ''
            },
        }
    },

    methods: {
        onSubmit(){
            if (quotesService.list().length >= 10){
                return;
            }
            
            if ((this.quote.text && this.quote.author) === '') {
                alert('Your quote should not be empty!')
                return
            } 
         
            quotesService.addQuote(this.quote)
            this.quote = {}
            
            //console.log(quotesService.list())
        }
    }
}
</script>

<style>
#form {
    
    margin: 0 auto;
    width: 30%;
    margin-top: 1rem;
    margin-bottom: 2rem;
}
</style>
