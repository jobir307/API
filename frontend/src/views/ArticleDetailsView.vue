<template>
    <loader v-if="isLoading" />
    <article-details v-else />
</template>

<script>
    import ArticleDetails from '@/components/ArticleDetails.vue';
    import { mapState } from 'vuex'

    export default {
        name: 'article-details-view',
        components: {
            ArticleDetails
        },
        mounted() {
            this.$store.dispatch('getArticleDetails', this.$route.params.id)
        },
        computed: {
            ...mapState({
                isLoading: state => state.article.isLoading
            })
        }
    }
</script>

<style scoped>

</style>