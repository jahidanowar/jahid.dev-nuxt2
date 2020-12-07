<template>
  <div class="rounded-lg shadow-lg overflow-hidden border bg-white">
    <div class="relative h-64">
      <img
        :src="portfolio._embedded['wp:featuredmedia']['0'].source_url"
        :alt="portfolio.title"
        class="absolute w-full h-full object-cover"
      />
    </div>
    <div class="p-6">
      <h4 class="font-semibold text-lg">{{ portfolio.title.rendered }}</h4>
      <div
        class="text-gray-600 text-sm mt-3"
        v-html="portfolio.excerpt.rendered"
      ></div>
      <nuxt-link to="/" class="mt-5 text-primary inline-flex items-center"
        >View Porject
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path></svg
      ></nuxt-link>
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
