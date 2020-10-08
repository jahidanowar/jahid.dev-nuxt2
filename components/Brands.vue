<template>
  <div class="container mx-auto text-center">
    <h1 class="section-heading text-gray-900 mb-4">
      {{ heading }}
    </h1>
    <p class="section-description mb-4">
      {{ subheading }}
    </p>
    <div class="flex justify-center">
      <img
        src="https://res.cloudinary.com/jahiddev/image/upload/v1602132651/clientele_wopnza.png"
        alt="Work Experience"
        class="w-3/4 hidden md:block"
      />
      <img
        src="https://res.cloudinary.com/jahiddev/image/upload/v1602132651/clientele-mobile_msimxa.png"
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
