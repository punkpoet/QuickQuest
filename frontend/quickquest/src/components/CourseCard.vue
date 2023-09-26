<template>
    <div class="course-card">
      <h2>{{ course.title }}</h2>
      <p>{{ course.description }}</p>
      <router-link :to="{ name: 'courseDetails', params: { id: course.id }}">View Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      course: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .course-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>
  