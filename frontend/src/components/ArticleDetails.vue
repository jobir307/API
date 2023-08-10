<template>
    <div v-if="article">
        <div class="row">
            <div class="col-12">
                <p class="fs-2">{{ article.title }}</p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-8">
                <p class="fs-4">{{ article.description }}</p>
            </div>
            <div class="col-2">
                <p class="opacity-75">Created at</p>
                <p class="fs-5 fst-italic">{{ new Date(article.created_at).toLocaleString('us') }}</p>
            </div>
            <div class="col-2">
                <p class="opacity-75">Updated at</p>
                <p class="fs-5 fst-italic">{{ new Date(article.updated_at).toLocaleString('us') }}</p>
            </div>
        </div>
    </div>
    <div v-else>
        <h2>Nothing has found </h2>
    </div>
</template>

<script>
    import { mapState } from "vuex"

    export default {
        name: 'article-details',
        computed: {
            ...mapState({
                article: state => state.article.articleDetails
            })
        }
    }
</script>

<style scoped>

</style>