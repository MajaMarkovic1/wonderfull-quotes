<template>
    <div>
        <h4>Quotes added: {{ quotes.length }} of {{ maxQuotes }}</h4>
        <div class="progress">
            <div class="progress-bar" role="progressbar" 
            :style="{width: (quotes.length * 100 / maxQuotes) + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div id="card">
            <div class="card" style="width: 18rem;" v-for="quote in quotes" :key="quote.id">
                <div class="card-body" >
                    <h5 class="card-title">"{{ quote.text }}"</h5>
                    <h6 class="float-right" >- {{ quote.author }}</h6>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { quotesService } from '../services/Quotes'

export default {
    data(){
        return {
            quotes: quotesService.list(),
            maxQuotes: 10
        }
    }
    
}
</script>

<style>

#card {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;  
}
.card {
    margin-top :1rem;
     margin-right: 1rem;
     border: 3px solid rgb(219, 219, 233);
     width: 80px;
}
h4 {
    text-align: center;
}


</style>


