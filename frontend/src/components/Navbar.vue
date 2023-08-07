<template>
    <header>
        <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
            <RouterLink :to="{name: 'home'}" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                <span class="fs-4">Sammi API</span>
            </RouterLink>
            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Register</RouterLink>
                <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Login</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
    export default {
        name: "navbar",
    }
</script>

<style scoped>

</style>