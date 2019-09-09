<template>
  <div class="row px-3">
    <portfolio-item stockName="BMW" stockPrice="110" stockQuantity="10"></portfolio-item>
    <portfolio-item stockName="Google" stockPrice="200"  stockQuantity="15"></portfolio-item>
  </div>
</template>

<script>
  import PortfolioItem from '../components/PortfolioItem';

  export default {
    components: {
      portfolioItem: PortfolioItem
    }
  }
</script>