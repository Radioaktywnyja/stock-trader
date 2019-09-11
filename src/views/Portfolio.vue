<template>
  <div class="row px-3">
    <portfolio-item v-for="(stock, name) in $store.getters.stockPurchased" :stockName="name" :stockPrice="stock.price" :stockQuantity="stock.quantity" :key="name"></portfolio-item>
    <portfolio-empty v-if="Object.keys($store.getters.stockPurchased).length == 0"></portfolio-empty>
  </div>
</template>

<script>
  import PortfolioItem from '../components/PortfolioItem';
  import PortfolioEmpty from '../components/PortfolioEmpty';

  export default {
    components: {
      portfolioItem: PortfolioItem,
      portfolioEmpty: PortfolioEmpty
    },
  }
</script>