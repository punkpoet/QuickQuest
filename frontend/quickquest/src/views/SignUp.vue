<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          <img src="@/assets/signup-image.jpg" alt="Sign Up Image" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <Form @submit="handleSignup" :validation-schema="schema" class="mb-4">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title text-center mb-4">Sign Up</h2>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label for="firstName">First Name</label>
                      <Field
                        name="firstName"
                        class="form-control"
                        placeholder="Enter your first name"
                      />
                      <ErrorMessage name="firstName" class="error-feedback" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label for="lastName">Last Name</label>
                      <Field
                        name="lastName"
                        class="form-control"
                        placeholder="Enter your last name"
                      />
                      <ErrorMessage name="lastName" class="error-feedback" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group mb-3">
                      <label for="email">Email</label>
                      <Field
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="Enter your email address"
                      />
                      <ErrorMessage name="email" class="error-feedback" />
                    </div>
                  </div>
                  <div class="col-md-6">
                        <phone-input v-model="userinfo.phone" />
                    </div>
                </div>
                <div class="form-group mb-3">
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
                <div class="form-group mb-3">
                  <label for="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    :type="passwordType"
                    class="form-control"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    class="toggle-password"
                    @click="togglePassword"
                  >
                    <i v-if="passwordType === 'password'" class="fas fa-eye"></i>
                    <i v-else class="fas fa-eye-slash"></i>
                  </button>
                  <ErrorMessage name="confirmPassword" class="error-feedback" />
                </div>
                <div class="form-group form-check mb-3">
                  <Field
                    name="terms"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="terms">Terms and Conditions</label>
                  <ErrorMessage name="terms" class="error-feedback" />
                </div>
                <div class="form-group mt-4 text-center">
                  <button
                    style="background-color: #bf0a30; color: white"
                    class="btn"
                    :disabled="loading"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                    <span>SIGN UP</span>
                  </button>
                </div>
              </div>
            </div>
          </Form>
          <div class="mt-3 text-center">
            Already have an account? <router-link to="/sign-in" class="signin-link">Sign In</router-link>
          </div>
          <div v-if="message" class="alert alert-danger mt-3" role="alert">{{ message }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { Form, Field, ErrorMessage } from "vee-validate";
import PhoneInput from "@/components/PhoneInput.vue";
  import * as yup from "yup";
  
  export default {
    name: "signUp",
    components: {
      Form,
      Field,
      ErrorMessage,
      PhoneInput,
    },
    data() {
      const schema = yup.object().shape({
        firstName: yup.string().required("First Name is required!"),
        lastName: yup.string().required("Last Name is required!"),
        email: yup.string().email("Please enter a valid email address").required("Email Address is required!"),
        password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required!"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        terms: yup.boolean().oneOf([true], 'Terms and Conditions must be accepted')
      });
  
      return {
        loading: false,
        message: "",
        schema,
        passwordType: "password",
        userinfo: {
          phone: '',
        },
        defaultCountry: 'us',
      };
    },
    methods: {
      togglePassword() {
        this.passwordType = this.passwordType === "password" ? "text" : "password";
      },
      handleSignup() {
        // Handle signup logic here
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 50px;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-body {
    padding: 2rem;
  }
  
  .form-group {
    position: relative;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border: none;
    background: none;
  }
  
  .error-feedback {
    color: red;
  }
  
  .signin-link:hover {
    text-decoration: underline;
  }
  </style>
  