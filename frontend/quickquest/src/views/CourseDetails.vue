<template>
    <div class="course-details" v-if="course">
      <h1>{{ course.title }}</h1>
      <p>{{ course.description }}</p>
      <CoursePlayer :lesson="course.lessons[0]" />
      <ReviewsSection :reviews="course.reviews" />
    </div>
    <div v-else>
      Course details not found
    </div>
  </template>
  
  <script>
  import CoursePlayer from '@/components/CoursePlayer.vue';
  import ReviewsSection from '@/components/ReviewsSection.vue';
  
  export default {
    props: {
      course: {
        type: Object,
        required: true
      }
    },
    components: {
      CoursePlayer,
      ReviewsSection
    }
  };
  </script>
  
  <style scoped>
  .course-details {
    margin: 20px;
  }
  </style>
  