<template>
  <div class="container mx-auto text-center">
    <h1 class="section-heading mb-4">
      {{ heading }}
    </h1>
    <p class="section-description mb-4">
      {{ subheading }}
    </p>
    <div class="flex justify-center">
      <nuxt-img
        src="/img/clientele.png"
        alt="Work Experience"
        class="w-3/4 hidden md:block"
      />
      <nuxt-img
        src="/img/clientele-mobile.png"
        alt="Work Experience"
        class="w-3/4 block md:hidden"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: ''
    },
    subheading: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
