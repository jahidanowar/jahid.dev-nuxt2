<template>
  <div class="section error">
    <div class="container mx-auto flex flex-wrap flex-col items-center">
      <div v-if="error.statusCode === 404" class="">
        <img
          src="https://res.cloudinary.com/jahiddev/image/upload/v1602058256/404_kaloxm.png"
          alt="404 Not Found"
          style="max-width: 100%"
          class="content-center"
        />
        <h1 class="text-3xl text-center font-medium mt-5">Page not found</h1>
      </div>
      <div v-else>
        <h1 class="text-3xl text-center font-medium">An error occured</h1>
      </div>

      <nuxt-link
        to="/"
        class="
          btn
          bg-primary
          hover:bg-secondary
          text-white text-center
          mt-5
          md:w-1/4
        "
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
        this.error.statusCode === 404 ? 'Page not found' : 'An error occured',
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  }
}
</script>

<style></style>
