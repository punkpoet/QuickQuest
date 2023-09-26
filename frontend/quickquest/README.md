# quickquest

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


###  Project tree for Front end


src/
|-- assets/
|   |-- images/
|   |-- css/
|-- views/
|   |-- Course/
|   |   |-- CourseListing.vue
|   |   |-- CourseCard.vue
|   |   |-- CourseDetails.vue
|   |   |-- ReviewsSection.vue
|   |-- User/
|   |   |-- UserDashboard.vue
|   |   |-- EnrolledCourses.vue
|   |   |-- UserProfile.vue
|   |-- Auth/
|   |   |-- Register.vue
|   |   |-- Login.vue
|   |   |-- ForgotPassword.vue
|   |   |-- AccountSettings.vue
|   |-- Category/
|   |   |-- CategoryPage.vue
|   |-- Search/
|   |   |-- SearchResults.vue
|   |-- CoursePlayer/
|   |   |-- CoursePlayer.vue
|   |   |-- Lesson.vue
|   |-- Review/
|   |   |-- ReviewAndRating.vue
|   |-- FAQ/
|   |   |-- FAQPage.vue
|   |-- Legal/
|   |   |-- PrivacyPolicy.vue
|   |   |-- TermsOfService.vue
|   |-- Contact/
|   |   |-- ContactUs.vue
|   |-- NotFound.vue
|-- Instructor/
|   |-- InstructorDashboard.vue
|   |-- CreateCourse.vue
|   |-- EditCourse.vue
|   |-- AddLesson.vue