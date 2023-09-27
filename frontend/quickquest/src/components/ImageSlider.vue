<template>
    <div class="image-slider">
      <Carousel :perPage="1" :pagination="true">
        <div v-for="(slide, index) in slides" :key="index">
          <img :src="slide.url" alt="Slide" />
        </div>
      </Carousel>
    </div>
  </template>
  
  <script>
  import { Carousel } from 'vue3-carousel';
  
  export default {
    components: {
      Carousel
    },
    data() {
      return {
        slides: [
          { url: 'path_to_image1.jpg' },
          { url: 'path_to_image2.jpg' },
          { url: 'path_to_image3.jpg' },
          // Add more slides as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .image-slider {
    max-width: 800px; /* Adjust as needed */
    margin: 0 auto;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  </style>
  