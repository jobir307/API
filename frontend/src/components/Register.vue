<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
                <div class="login-wrap p-4 p-md-5">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-user" aria-hidden="true"></span>
                    </div>
                    <h3 class="text-center mb-4">Register Form</h3>
                    <form class="login-form">
                        <my-input
                            class="rounded-left"
                            v-bind:type="'text'"
                            v-bind:placeholder="'Username'"
                            v-model="formData.name"
                        />
                        <my-input 
                            class="rounded-left"
                            v-bind:type="'email'"
                            v-bind:placeholder="'E-mail'"
                            v-model="formData.email"
                        />
                        <my-input 
                            class="rounded-left" 
                            v-bind:type="'password'"
                            v-bind:placeholder="'Password'"
                            v-model="formData.password"
                        />
                        <div class="form-group">
                            <my-button 
                                type="submit"
                                class="btn-primary submit p-3 px-5"
                                v-bind:disabled="isLoading"
                                @click="submitHandler"
                            >
                            Register
                            </my-button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            isLoading() {
                return this.$store.state.auth.isLoading
            }
        },
        methods: {
            submitHandler(e) {
                e.preventDefault()
                this.$store.dispatch('register', this.formData).then(response => {
                    localStorage.setItem('token', response.data)
                    this.$router.push({name: "home"})
                }).catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
.login-wrap {
    position: relative;
    background: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
}
.login-wrap h3 {
    font-weight: 700;
    font-size: 20px;
    color: #8d448b;
}
input:focus {
    border-color: #8d448b;
}
.login-wrap .icon {
    width: 80px;
    height: 80px;
    background: #8d448b;
    border-radius: 50%;
    font-size: 30px;
    margin: 0 auto;
    margin-bottom: 10px; 
}
.login-wrap .icon span {
    color: #fff; 
}

.form-group {
    position: relative; 
}
.rounded-left {
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important; 
}
.form-group {
    position: relative; 
}
.form-group .submit {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto; 
    background: #8d448b;
    border-color: #8d448b;
}
@media (max-width: 767.98px) {
    .form-group .submit {
        top: 0; 
    } 
}
</style>