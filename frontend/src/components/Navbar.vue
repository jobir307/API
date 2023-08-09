<template>
    <header>
        <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
            <RouterLink :to="{name: 'home'}" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                <span class="fs-4">Sammi API</span>
            </RouterLink>            
            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <div v-if="isAnonymous">
                    <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Register</RouterLink>
                    <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Login</RouterLink>
                </div>
                <div v-if="isLoggedIn">
                    <RouterLink :to="{name: 'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none">{{ currentUser.name }}</RouterLink>
                    <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#" @click="logout">Logout</a>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import { mapGetters } from 'vuex';
    import { getterTypes } from '@/modules/types'
    export default {
        name: "navbar",
        computed: {
            ...mapGetters({
                currentUser: getterTypes.currentUser,
                isLoggedIn: getterTypes.isLoggedIn,
                isAnonymous: getterTypes.isAnonymous
            })
        },
        methods: {
            logout() {
                return this.$store.commit("logout")
            }
        }
    }
</script>

<style scoped>

</style>