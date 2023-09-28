import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    
    {
      path: '/course/:id',
      name: 'courseDetails',
      component: () => import(/* webpackChunkName: "courseDetails" */ '../views/CourseDetails.vue')
    },
    // Add more routes as needed
    {
      path: '/Signin',
      name: 'Signin',
      component: () => import(/* webpackChunkName: "instructorDashboard" */ '../views/SignIn.vue')
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: () => import(/* webpackChunkName: "instructorDashboard" */ '../views/SignUp.vue')
    },
    
    {
      path: '/instructor-dashboard',
      name: 'instructorDashboard',
      component: () => import(/* webpackChunkName: "instructorDashboard" */ '../views/InstructorDashboard.vue')
    },
    {
      path: '/create-course',
      name: 'createCourse',
      component: () => import(/* webpackChunkName: "createCourse" */ '../views/CreateCourse.vue')
    },
    {
      path: '/edit-course/:id',
      name: 'editCourse',
      component: () => import(/* webpackChunkName: "editCourse" */ '../views/EditCourse.vue')
    },
    {
      path: '/add-lesson/:courseId',
      name: 'addLesson',
      component: () => import(/* webpackChunkName: "addLesson" */ '../views/AddLesson.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "faq" */ '../views/FAQPage.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: () => import(/* webpackChunkName: "privacyPolicy" */ '../views/PrivacyPolicy.vue')
    },
    {
      path: '/terms-of-service',
      name: 'termsOfService',
      component: () => import(/* webpackChunkName: "termsOfService" */ '../views/TermsOfService.vue')
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: () => import(/* webpackChunkName: "contactUs" */ '../views/ContactUs.vue')
    },
    {
      path: '/404',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
