import AuthService from "@/service/auth"
import { setItem } from "@/helpers/persistaneStore"

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
        state.errors = payload.errors
    },
    loginStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
    }
}

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            AuthService.register(user).then(response => {
                context.commit('registerSuccess', response.data.user)
                setItem("token", response.data.token)
                resolve(response.data.user)
            }).catch(error => {
                context.commit('registerFailure', error)
                reject(error)
            }) 
        })
    },
    login(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('loginStart')
            AuthService.login(user).then(response => {
                context.commit('loginSuccess', response.data.user)
                setItem("token", response.data.token)
                resolve(response.data.user)
            }).catch(error => {
                context.commit('loginFailure', error)
                reject(error)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}