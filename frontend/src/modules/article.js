import ArticleService from  '@/service/article'

const state = {
    data: null,
    isLoading: false,
    error: null,
    articleDetails: null
}

const mutations = {
    getArticlesStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getArticlesSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
        state.error = null
    },
    getArticlesFailure(state) {
        state.isLoading = false
        state.data = null
    },
    getArticleDetailsStart(state) {
        state.isLoading = true
        state.articleDetails = null
        state.error = null
    },
    getArticleDetailsSuccess(state, payload) {
        state.isLoading = false
        state.articleDetails = payload
        state.error = null
    },
    getArticleDetailsFailure(state) {
        state.isLoading = false
        state.articleDetails = null
    }
}

const actions = {
    articles(context) {
        return new Promise((resolve) => {
            context.commit('getArticlesStart')
            ArticleService.articles()
                .then(response => {
                    context.commit('getArticlesSuccess', response.data.articles)
                    resolve(response.data.articles)
                })
                .catch(() => {
                    context.commit('getArticlesFailure')
                })
        })
    },
    getArticleDetails(context, id) {
        return new Promise((resolve) => {
            context.commit('getArticleDetailsStart')
            ArticleService.articleDetails(id)
                .then(response => {
                    context.commit('getArticleDetailsSuccess', response.data.article)
                    resolve(response.data.article)
                })
                .catch( () => {
                    context.commit('getArticleDetailsFailure')
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}