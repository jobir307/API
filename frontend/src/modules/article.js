import ArticleService from  '@/service/article'

const state = {
    data: null,
    isLoading: false,
    error: null
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
    }
}

const actions = {
    articles(context) {
        return new Promise((resolve, reject) => {
            context.commit('getArticlesStart')
            ArticleService.articles()
                .then(response => {
                    context.commit('getArticlesSuccess', response.data.articles)
                    resolve(response.data.articles)
                })
                .catch(error => {
                    context.commit('getArticlesFailure', error.response.data.errors)
                    reject(error.response.data.errors)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}