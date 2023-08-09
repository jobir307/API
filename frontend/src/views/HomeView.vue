<template>
    <div>
        <p>Home Page</p>
        {{ data }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState({
                data: state => state.articles,
                isLoading: state => state.articles.isLoading,
                error: state => state.articles.error
            })
        },
        mounted() {
            this.$store.dispatch('articles')
        }
    }
</script>

<style scoped>

</style>