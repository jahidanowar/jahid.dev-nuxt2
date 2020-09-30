<template>
  <div class="bg-gray-100 py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 items-center md:grid-cols-2">
        <div class="px-6">
          <h1
            class="text-gray-900 font-medium text-4xl md:text-5xl mb-5 leading-tight"
          >
            {{ heading }}
          </h1>
          <p>{{ leading }}</p>
        </div>
        <div v-if="image" class="px-6">
          <img :src="image" :alt="heading" class="featured-image" />
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
.featured-image {
  max-width: 400px;
  margin: 0 auto;
}
</style>
