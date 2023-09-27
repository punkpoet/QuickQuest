<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/">QuickQuest</router-link>
      </div>
      <div class="navbar-links">
        <router-link to="/courses">Courses</router-link>
        <router-link to="/categories">Categories</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="navbar-auth">
        <!-- Add authentication buttons or links here -->
      </div>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-brand a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5em;
  }
  
  .navbar-links a {
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
  }
  
  .navbar-auth a {
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
  }
  </style>
  