<template>
  <a
    :href="link"
    class="p-3 bg-gray-700 hover:bg-primary text-white rounded-full ml-2"
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
