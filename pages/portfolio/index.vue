<template>
  <main class="portfolio">
    <page-hero
      heading="Few projects I have worked on so far."
      leading="Designed Website for Small and Medium Sized Business and did UI/UX enhancements to bring more customers to the business."
      image="/img/Portfolio-Full-Stack-Web-Development.png"
    ></page-hero>
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 my-10 px-6"
    >
      <portfolio-card
        v-for="(portfolio, i) in portfolios"
        :key="i"
        :portfolio="portfolio"
      />
    </div>
  </main>
</template>

<script>
import portfoliosQuery from '~/apollo/queries/portfolios/portfoliosQuery'
import PageHero from '~/components/PageHero'
import PortfolioCard from '~/components/PortfolioCard'

export default {
  components: { PageHero, PortfolioCard },
  data() {
    return {
      portfolios: []
    }
  },
  /* eslint-disable */
  async asyncData(context) {
    let portfolios = await context.app.apolloProvider.defaultClient
      .query({
        query: portfoliosQuery
      })
      .then(({ data }) => {
        return data.portfolios
      })
    return {
      portfolios
    }
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
