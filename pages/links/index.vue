<template>
  <div
    class="bio container mx-auto bg-gray-100 p-5 h-screen grid place-items-center"
  >
    <div class="w-full">
      <header class="text-center">
        <h1 class="text-5xl">jahid</h1>
        <p>entreprenure, programmer</p>
      </header>
      <div class="links my-10">
        <nuxt-link
          to="/"
          class="flex p-2 bg-white rounded-lg shadow justify-center mb-5"
          >website</nuxt-link
        >
        <nuxt-link
          to="/blog"
          class="flex p-2 bg-white rounded-lg shadow justify-center mb-5"
          >blog</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="flex p-2 bg-white rounded-lg shadow justify-center mb-5"
          >contact</nuxt-link
        >
      </div>
      <div class="social mb-10">
        <social-buttons class="justify-center" />
      </div>
    </div>
  </div>
</template>

<script>
import SocialButtons from './../../components/SocialButtons'

export default {
  layout: 'empty',
  components: {
    SocialButtons
  },
  head() {
    return {
      title: 'Links - Jahid Anowar'
    }
  }
}
</script>

<style></style>
