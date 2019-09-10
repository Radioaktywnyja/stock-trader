<template>
  <div class="container">
    <app-header></app-header>
    <transition name="bounce" mode="out-in">
      <router-view></router-view>
    </transition>
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
  body {
    font-family: 'Roboto', sans-serif;
  }
  .bounce-enter-active {
  animation: bounce-in .2s;
  }
  .bounce-leave-active {
    animation: bounce-in .2s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
