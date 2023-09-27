<template>
    <footer class="footer">
      <div class="footer-links">
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/privacy-policy">Privacy Policy</router-link>
        <router-link to="/terms-of-service">Terms of Service</router-link>
        <router-link to="/contact-us">Contact Us</router-link>
      </div>
      <div class="footer-social">
        <!-- Add social media icons or links here -->
      </div>
    </footer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-links a {
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
  }
  
  .footer-social i {
    margin: 0 10px;
    font-size: 1.5em;
    color: #fff;
  }
  </style>
  