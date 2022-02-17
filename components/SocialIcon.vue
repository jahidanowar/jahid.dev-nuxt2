<template>
  <a
    :href="link"
    target="_blank"
    class="p-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-100 text-gray-800 rounded-lg"
    ><slot></slot
  ></a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
      required: true
    }
  }
}
</script>

<style></style>
