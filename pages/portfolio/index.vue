<template>
  <main class="portfolio">
    <page-hero
      heading="Few projects I have worked on so far."
      leading="Designed Website for Small and Medium Sized Business and did UI/UX enhancements to bring more customers to the business."
      image="https://res.cloudinary.com/jahiddev/image/upload/v1602132651/full-stack-development-services_mgomjz.png"
    ></page-hero>
    <div
      v-if="projects"
      class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 my-10 px-6"
    >
      <portfolio-card
        v-for="(portfolio, i) in projects"
        :key="i"
        :portfolio="portfolio"
      />
    </div>
  </main>
</template>

<script>
import PageHero from '~/components/PageHero'
import PortfolioCard from '~/components/PortfolioCard'

export default {
  components: { PageHero, PortfolioCard },
  /* eslint-disable */
  async asyncData({ $axios }) {
    const projects = await $axios.$get('/project?_embed=1')
    return { projects }
  },
  /* eslint-enable */
  head() {
    return {
      title: 'Portfolio - Jahid Anowar'
    }
  }
}
</script>

<style></style>
