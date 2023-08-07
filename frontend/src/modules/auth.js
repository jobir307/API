import AuthService from "@/service/auth"

const state = {
    isLoading: false,
    user: null,
    errors: null
}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
    }
}

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            AuthService.register(user).then(response => {
                localStorage.setItem("token", response.data)
                resolve(response.data.user)
            }).catch(error => {
                context.commit('registerFailure', error)
                reject(error)
            }) 
        })
    },
    login(user) {
        
    }
}

export default {
    state,
    mutations,
    actions
}