<template>
  <div class="rounded-lg shadow-lg overflow-hidden border bg-white">
    <div class="relative h-64">
      <img
        :src="portfolio._embedded['wp:featuredmedia']['0'].source_url"
        :alt="portfolio.title"
        class="absolute w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  props: ['portfolio']
  /* eslint-enable */
}
</script>

<style></style>
