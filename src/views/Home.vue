<template>
  <div>
    <b-card bg-variant="light" border-variant="dark" class="mt-4">
      <h2 class="font-weight-bold">Trade or View your Portfolio</h2>
      <p class="my-0">You may Save & Load your Data</p>
      <p class="my-0">Click on "End Day" to begin a new Day!</p>
      <hr>
      <span class="font-weight-bold">Your Funds: ${{ funds }}</span>
    </b-card>
  </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.localeFunds;
            }
        }
    }
</script>

<style scoped>
  p {
    font-size: 0.9rem;
  }
</style>