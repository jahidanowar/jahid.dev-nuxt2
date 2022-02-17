<template>
  <div class="py-8">
    <div class="container mx-auto mt-14">
      <div class="grid grid-cols-1 items-center md:grid-cols-2">
        <div class="px-6">
          <h1 class="text-4xl md:text-5xl mb-5 leading-tight">
            {{ heading }}
          </h1>
          <p>{{ leading }}</p>
        </div>
        <div v-if="image" class="px-6 flex justify-center">
          <nuxt-img
            :src="image"
            :alt="heading"
            class="w-full feture-image mt-10 content-center"
          />
        </div>
      </div>
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
    leading: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.feture-image {
  max-width: 300px;
  max-height: 343px;
}
</style>
