<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './views/Home';
  import Header from './components/Header'

  export default {
    components: {
      appHome: Home,
      appHeader: Header
    }
  }
</script>

<style>

</style>
