<template>
    <b-card no-body class="rounded my-3 mx-auto p-0 col-md-5">
        <b-card-header class="bg-blue py-1">
            <span class="h4 text-primary">{{ stockName }} </span><span>(Price: {{ stockPrice }} | Quantity: {{ stockQuantity }})</span>
        </b-card-header>
        <b-card-body class="py-2">
            <b-form @submit.prevent="sell" inline>
                <label class="sr-only" for="stock-count">Count</label>
                <b-input id="stock-count" placeholder="Quantity" class="col-7" :value="quantityInput" @input.native="updateQuantityInput" @keypress="isNumber"></b-input>
                <b-button variant="danger" class="ml-auto" @click.prevent="sell">Sell</b-button>
                <b-form-invalid-feedback :state="isEnoughQuantity" class="">Not enough stocks.</b-form-invalid-feedback>
            </b-form>
        </b-card-body>
    </b-card>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: {
            stockName: String,
            stockPrice: Number,
            stockQuantity: Number
        },
        data() {
            return {
                quantityInput: null
            }
        },
        computed: {
            isEnoughQuantity() {
                return this.stockQuantity >= this.quantityInput;
            }
        },
        methods: {
            ...mapActions([
                'sellStock'
            ]),
            updateQuantityInput(event) {
                this.quantityInput = event.target.value;
            },
            isNumber(event) {
                if (!/\d/.test(event.key) && event.key !== 'Enter') return event.preventDefault();
            },
            sell() {
                if (this.isEnoughQuantity) {
                    this.sellStock({name: this.stockName, quantity: parseInt(this.quantityInput)});
                    this.quantityInput = null;
                }
            }
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