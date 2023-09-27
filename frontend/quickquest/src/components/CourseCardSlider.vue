<template>
    <div class="course-card-slider">
      <Carousel :perPage="3" :pagination="true">
        <div v-for="(course, index) in courses" :key="index">
          <CourseCard :course="course" />
        </div>
      </Carousel>
    </div>
  </template>
  
  <script>
  import { Carousel } from 'vue3-carousel';
  import CourseCard from './CourseCard.vue'; // Import your CourseCard component
  
  export default {
    components: {
      Carousel,
      CourseCard
    },
    props: {
      courses: Array
    }
  };
  </script>
  
  <style scoped>
  .course-card-slider {
    max-width: 800px; /* Adjust as needed */
    margin: 0 auto;
  }
  
  .carousel-slide {
    padding: 10px;
  }
  
  .carousel-pagination {
    text-align: center;
  }
  </style>
  