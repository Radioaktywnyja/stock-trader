<template>
  <div class="row px-3">
    <stock-item stockName="BMW" stockPrice="110"></stock-item>
    <stock-item stockName="Google" stockPrice="200"></stock-item>
    <stock-item stockName="Apple" stockPrice="250"></stock-item>
    <stock-item stockName="Twitter" stockPrice="8"></stock-item>
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