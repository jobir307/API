<template>
    <ul class="list-group">
        <li 
            v-for='error in errorMessages' 
            :key="error"
            class="list-group-item list-group-item-danger"    
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
                return Object.keys(this.validationErrors).map(name => {
                    const msg = this.validationErrors[name].join(', ')
                    return `${name} ${msg}`
                })
            }
        }
    }
</script>

<style scoped>

</style>