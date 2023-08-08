<template>
    <div class="container">
      <header>
        <navbar />
      </header>
      <main>
        <RouterView />
      </main>
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