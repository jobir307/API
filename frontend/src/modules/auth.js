import AuthService from "@/service/auth"
import { setItem, removeItem } from "@/helpers/persistaneStore"
import {getterTypes} from './types'

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: null
}

const getters = {
    [getterTypes.currentUser]: state => {
        return state.user
    },
    [getterTypes.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn)
    },
    [getterTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    }

}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null 
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true 
    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggedIn = false
    },
    loginStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null 
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true 
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
        state.isLoggedIn = false 
    },
    currentUserStart(state) {
        state.isLoading = true
    },
    currentUserSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    currentUserFailure(state) {
        state.isLoading = false
        state.user = null
        state.isLoggedIn = false
    },
    logout(state) {
        state.user = null
        state.isLoggedIn = false
        removeItem("token")
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
    },
    getUser(context) {
        return new Promise((resolve, reject) => {
            context.commit('currentUserStart')
            AuthService.getUser().then(response => {
                context.commit('currentUserSuccess', response.data.user)
                resolve(response.data.user)
            }).catch(() => context.commit('currentUserFailure'))
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}