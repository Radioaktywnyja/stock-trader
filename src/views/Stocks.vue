<template>
  <div class="row px-3">
    <stock-item v-for="(stock, name) in $store.state.stocks" :stockName="name" :stockPrice="stock.price" :key="name"></stock-item>
  </div>
</template>

<script>
  import StockItem from '../components/StockItem';

  export default {
    components: {
      stockItem: StockItem
    }
  }
</script>