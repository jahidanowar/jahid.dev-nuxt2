<template>
  <div
    class="
      group
      portfolio
      flex flex-wrap
      mb-16
      align-middle
      hover:no-underline
      focus:no-underline
    "
  >
    <div class="w-full md:w-6/12 relative h-64 md:h-96">
      <nuxt-img
        :src="portfolio._embedded['wp:featuredmedia']['0'].source_url"
        :alt="portfolio.title.rendered"
        class="
          absolute
          object-cover
          w-full
          h-full
          rounded-2xl
          transform
          duration-200
          group-hover:-translate-y-2 group-hover:shadow-xl
        "
      />
    </div>
    <div class="w-full md:w-5/12 mt-5 md:mt-0 md:ml-10 self-center">
      <h3
        class="
          text-2xl
          md:text-4xl
          font-normal
          leading-tight
          group-hover:underline
        "
      >
        {{ portfolio.title.rendered }}
      </h3>
      <div v-html="portfolio.excerpt.rendered" class="mt-5"></div>
      <nuxt-link
        to="/contact"
        class="
          mt-5
          text-primary
          inline-flex
          items-center
          group-hover:underline
          duration-200
        "
      >
        View Project
        <svg
          class="w-4 h-4 ml-2 transform group-hover:translate-x-2 duration-200"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  props: {
    portfolio: Object,
    noText: {
      type: Boolean,
      default: false
    }
  }
  /* eslint-enable */
}
</script>

<style scoped>
.h-72 {
  height: 18rem;
}
</style>
