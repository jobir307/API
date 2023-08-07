<template>
    <div class="form-group mt-2">
        <input 
            class="form-control" 
            autocomplete="off"
            v-bind:type="type"
            v-bind:placeholder="placeholder"
            v-bind:value="modelValue"
            v-on:input="updateInput"
        />
    </div>
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            type: String,
            placeholder: String,
            modelValue: [String, Number]
        },
        methods: {
            updateInput(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>