<template>
  <div class="section error">
    <div class="container mx-auto flex flex-wrap flex-col items-center">
      <h1
        v-if="error.statusCode === 404"
        class="text-4xl text-center font-bold"
      >
        Page not found
      </h1>
      <h1 v-else>An error occured</h1>
      <nuxt-link
        to="/"
        class="btn bg-primary hover:bg-secondary text-white text-center mt-5 w-1/4"
        >Go to Home Page</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {
      title:
        this.error.statusCode === 404 ? 'Page not found' : 'An error occured'
    }
  }
}
</script>

<style></style>
