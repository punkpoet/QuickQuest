<template>
    <div class="reviews-section">
      <h2>Reviews</h2>
      <ul v-if="reviews.length > 0">
        <li v-for="review in reviews" :key="review.id">
          <p>Rating: {{ review.rating }}</p>
          <p>{{ review.comment }}</p>
        </li>
      </ul>
      <p v-else>No reviews available.</p>
      <ReviewAndRating />
    </div>
  </template>
  
  <script>
  import ReviewAndRating from '@/components/ReviewAndRating.vue';
  
  export default {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    components: {
      ReviewAndRating
    }
  };
  </script>
  
  <style scoped>
  .reviews-section {
    margin: 20px;
  }
  </style>
  