<template>
  <main class="portfolio">
    <page-hero
      heading="Shaping world class websites, designs and experiences"
      leading="Designed Website for Small and Medium Sized Business and did UI/UX enhancements to bring more customers to the business."
      image="/img/full-stack-development-services.png"
    ></page-hero>
    <div v-if="projects" class="container mx-auto my-20 px-6">
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
      title: 'Portfolio - Jahid Anowar',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Jahid is a Jamstack developer from Kolkata, Designing Website for Small and Medium Sized Business and making UI/UX enhancements to bring more customers to the business.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://jahid.dev' + this.$route.path
        }
      ]
    }
  }
}
</script>

<style></style>
