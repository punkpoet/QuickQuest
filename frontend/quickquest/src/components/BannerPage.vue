<template>
    <div class="banner">
      <img :src="bannerUrl" alt="Banner" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bannerUrl: String
    }
  };
  </script>
  
  <style scoped>
  .banner {
    max-width: 100%;
    margin-bottom: 20px;
  }
  
  .banner img {
    width: 100%;
    height: auto;
  }
  </style>
  