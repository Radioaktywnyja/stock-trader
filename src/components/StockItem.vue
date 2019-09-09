<template>
    <b-card no-body class="rounded my-3 mx-auto p-0 col-sm-5">
        <b-card-header class="bg-green py-1">
            <span class="h4 text-success">{{ stockName }} </span><span>(Price: {{ stockPrice }})</span>
        </b-card-header>
        <b-card-body class="py-2">
            <b-form inline>
                <label class="sr-only" for="stock-count">Count</label>
                <b-input id="stock-count" placeholder="Quantity" class="col-7"></b-input>
                <b-button variant="success" class="ml-auto">Buy</b-button>
            </b-form>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        props: {
            stockName: String,
            stockPrice: Number
        }
    }
</script>

<style scoped>
    .rounded {
        border-color: #baecb3;
    }

    .bg-green {
        background-color: #baecb3;
        border-color: #baecb3;
        font-size: 0.7rem;
    }
</style>