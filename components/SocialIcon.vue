<template>
  <a
    :href="link"
    class="p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg ml-2"
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
