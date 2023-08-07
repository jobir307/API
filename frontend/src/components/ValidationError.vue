<template>
    <ul>
        <li 
            v-for='error in errorMessages' 
            :key="error"
            class="text-danger"    
        >
            {{ error }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'validation-error',
        props: {
            validationErrors: Object,
            required: true
        },
        computed: {
            errorMessages() {
                return [
                    "email is required",
                    'password must be at least 8 characters',
                    'username is required'
                ]
            }
        }
    }
</script>

<style scoped>

</style>