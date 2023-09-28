<template>
    <div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <img :src="getFlagImageUrl()" alt="Country Flag" class="flag-icon" />
          </span>
        </div>
        <vue-select-3 v-model="selectedCountryCode" :options="countryCodes"></vue-select-3>
        <input
          type="tel"
          class="form-control"
          v-model="phone"
          @input="$emit('input', phone)"
          @blur="validate"
        />
      </div>
      <div v-if="error && touched" class="error-feedback">{{ error }}</div>
    </div>
  </template>
  
  <script>
  import VueSelect3 from 'vue-select-3';
  import countryCodes from '@/assets/countryCodes.json';
  
  export default {
    components: {
      VueSelect3
    },
    props: ['value'], // Assume 'phone' is passed as a prop
  
    data() {
      return {
        selectedCountryCode: null,
        countryCodes: countryCodes
      };
    },
  
    methods: {
      getFlagImageUrl() {
        // Assuming you have a method to get the flag image URL based on the selected country code
      },
      validate() {
        // Assume you have a method to validate the phone number
      }
    }
  };
  </script>
  
  <style>
  /* Add any necessary styles */
  </style>
  