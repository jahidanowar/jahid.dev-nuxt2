<template>
  <div class="border border-gray-300 p-6 rounded-lg">
    <div
      class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-100 text-primary mb-4"
    >
      <slot></slot>
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
      {{ title }}
    </h2>
    <p class="leading-relaxed text-base">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
