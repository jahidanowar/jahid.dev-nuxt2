<script lang="ts" setup>
defineProps<{
  portfolio: {
    title: any;
    _embedded: any;
  };
}>();
</script>

<template>
  <div class="rounded-2xl overflow-hidden">
    <div class="relative h-64">
      <nuxt-img
        :src="portfolio._embedded['wp:featuredmedia']['0'].source_url"
        :alt="portfolio.title.rendered"
        class="absolute w-full h-full object-cover hover:scale-110 duration-300"
      />
    </div>
  </div>
</template>
