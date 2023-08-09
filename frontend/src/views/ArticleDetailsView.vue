<template>
    <div>
        Article details
    </div>
</template>

<script>
    export default {
        name: 'article-details',
        mounted() {
            this.$store.dispatch('getArticleDetails', this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>