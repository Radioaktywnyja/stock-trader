<template>
    <b-card no-body class="rounded my-3 mx-auto p-0 col-md-5">
        <b-card-header class="bg-blue py-1">
            <span class="h4 text-primary">{{ stockName }} </span><span>(Price: {{ stockPrice }} | Quantity: {{ stockQuantity }})</span>
        </b-card-header>
        <b-card-body class="py-2">
            <b-form inline>
                <label class="sr-only" for="stock-count">Count</label>
                <b-input id="stock-count" placeholder="Quantity" class="col-7"></b-input>
                <b-button variant="danger" class="ml-auto">Sell</b-button>
            </b-form>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        props: {
            stockName: String,
            stockPrice: Number,
            stockQuantity: Number
        }
    }
</script>

<style scoped>
    .rounded {
        border-color: #9fdef1;
    }

    .bg-blue {
        background-color: #9fdef1;
        border-color: #9fdef1;
        font-size: 0.7rem;
    }
</style>