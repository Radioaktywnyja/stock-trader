<template>
    <b-card no-body class="rounded my-3 mx-auto p-0 col-sm-5">
        <b-card-header class="bg-green py-1">
            <span class="h4 text-success">{{ stockName }} </span><span>(Price: {{ stockPrice }})</span>
        </b-card-header>
        <b-card-body class="py-2 px-2">
            <b-form @submit.prevent="buy" inline>
                <label class="sr-only" for="stock-count">Quantity</label>
                <b-input id="stock-count" class="col-7" placeholder="Quantity" :value="quantityInput" @input.native="updateQuantityInput" @keypress="isNumber"></b-input>
                <b-button variant="success" class="ml-auto" @click.prevent="buy">Buy</b-button>
                <b-form-invalid-feedback :state="isEnoughMoney" class="">Not enough money.</b-form-invalid-feedback>
            </b-form>
        </b-card-body>
    </b-card>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                quantityInput: null
            }
        },
        computed: {
            isEnoughMoney() {
                return this.$store.state.funds >= (this.quantityInput * this.$store.state.stocks[this.stockName].price);
            }
        },
        props: {
            stockName: String,
            stockPrice: Number
        },
        methods: {
            ...mapActions([
                'buyStock'
            ]),
            updateQuantityInput(event) {
                this.quantityInput = parseInt(event.target.value);
            },
            isNumber(event) {
                if (!/\d/.test(event.key) && event.key !== 'Enter') return event.preventDefault();
            },
            buy() {
                if (this.isEnoughMoney) {
                    this.buyStock({name: this.stockName, quantity: this.quantityInput});
                    this.quantityInput = null;
                }
            }
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