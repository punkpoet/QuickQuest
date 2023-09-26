<template>
    <div class="course-player">
      <h1>{{ lesson.title }}</h1>
      <div class="video-container">
        <!-- Embed YouTube video here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      lesson: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .course-player {
    margin: 20px;
  }
  
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  