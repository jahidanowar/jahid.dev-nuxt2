<template>
  <div class="relative h-64 rounded-2xl overflow-hidden group">
    <nuxt-img
      :src="portfolio._embedded['wp:featuredmedia']['0'].source_url"
      :alt="portfolio.title.rendered"
      class="absolute w-full h-full object-cover group-hover:scale-110 duration-300"
    />
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
