<template>
    <div class="col">
        <div class="card" style="border: none;">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"></text></svg>
            <div class="card-body">
                <i class="fw-bold">{{ article.title }}</i>
                <p class="card-text">{{ article.body.slice(0, 100) }}...</p>
                <div class="d-flex justify-content-between align-items-center card-footer">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">Read article</button>
                    <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
                    </div>
                    <small class="text-body-secondary">{{ new Date(article.created_at).toLocaleString("us")}}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'article-card',
        props: {
            article: { 
                type: Object,
                required: true
            }
        },
        methods: {
            navigateHandler() {
                return this.$router.push(`/article/${this.article.id}`)
            }
        }
    }
</script>

<style scoped>

</style>