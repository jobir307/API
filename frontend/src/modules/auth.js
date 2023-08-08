import AuthService from "@/service/auth"
import { setItem } from "@/helpers/persistaneStore"
import {getterTypes} from './types'

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: false
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
        state.errors = payload.errors
        state.isLoggedIn = false 
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
    actions,
    getters
}