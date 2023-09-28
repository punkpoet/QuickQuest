<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          <img src="@/assets/signin-image.jpg" alt="Sign In Image" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <Form @submit="handleLogin" :validation-schema="schema" class="mb-4">
            <div class="">
              <div class="card-body">
                <h2 class="card-title text-center mb-4">Sign In</h2>
                <div class="form-group mb-3">
                  <label for="username">Username (Email ID)</label>
                  <Field
                    name="username"
                    type="email"
                    class="form-control"
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage name="username" class="error-feedback" />
                </div>
                <div class="form-group position-relative mb-3">
                  <label for="password">Password</label>
                  <Field
                    name="password"
                    :type="passwordType"
                    class="form-control"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    class="toggle-password"
                    @click="togglePassword"
                  >
                    <i v-if="passwordType === 'password'" class="fas fa-eye"></i>
                    <i v-else class="fas fa-eye-slash"></i>
                  </button>
                  <ErrorMessage name="password" class="error-feedback" />
                </div>
                <div class="form-group mt-4 text-center">
                  <button
                    style="background-color: #bf0a30; color: white"
                    class="btn"
                    :disabled="loading"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                    <span>LOGIN</span>
                  </button>
                </div>
              </div>
            </div>
          </Form>
          <div class="row">
            <div class="col-12 text-center">
              <router-link to="customerForgotpassword" class="forgot-link">Forgot Password?</router-link>
            </div>
          </div>
          <div class="mt-3 text-center">
            Don't have an account? <router-link to="customerRegister" class="signup-link">Sign Up</router-link>
          </div>
          <div v-if="message" class="alert alert-danger mt-3" role="alert">{{ message }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  
  export default {
    name: "signIn",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const schema = yup.object().shape({
        username: yup.string().email("Please enter a valid email address").required("Email Address is required!"),
        password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required!"),
      });
  
      return {
        loading: false,
        message: "",
        schema,
        passwordType: "password",
        userinfo: '',
      };
    },
    methods: {
      handleLogin() {
        console.log("User: ", this.userinfo);
        // Add your login logic here
      },
      togglePassword() {
        this.passwordType = this.passwordType === "password" ? "text" : "password";
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .card {
    border: none;
    border-radius: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
  }
  
  .card-body {
    padding: 1.25rem;
  }
  
  .toggle-password {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    font-size: 1.25rem;
    color: #6c757d;
  }
  
  .error-feedback {
    color: red;
  }
  
  .btn {
    font-size: 1.25rem;
  }
  
  .forgot-link,
  .signup-link {
    color: blue;
    text-decoration: none;
    font-weight: bold;
  }
  
  .forgot-link:hover,
  .signup-link:hover {
    text-decoration: underline;
  }
  </style>
  