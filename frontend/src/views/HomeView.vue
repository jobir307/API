<template>
    <div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <loader v-if="isLoading"/>
            <article-card 
                v-else
                v-for="article in data" 
                :key="article.id" 
                v-bind:article="article"
            />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import ArticleCard from "@/components/ArticleCard.vue"

    export default {
        computed: {
            ...mapState({
                data: state => state.article.data,
                isLoading: state => state.article.isLoading,
                error: state => state.article.error
            })
        },
        mounted() {
            this.$store.dispatch('articles')
        },
        components: {
            ArticleCard
        }
    }
</script>

<style scoped>

</style>