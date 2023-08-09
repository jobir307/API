<template>
    <div class="container">
        <navbar />
        <RouterView />
    </div>
</template>

<script>
  import { RouterView } from 'vue-router'

  export default {
    mounted() {
      this.$store.dispatch('getUser')
    }
  }
</script>

<style scoped>

</style>