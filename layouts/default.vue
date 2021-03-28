<template>
  <div>
    <Appbar />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<script>
import Appbar from '~/components/Appbar'
import PageFooter from '~/components/PageFooter'
export default {
  components: {
    Appbar,
    PageFooter
  },
  head() {
    return {
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
<style>
html {
  color: theme('colors.text');
}
</style>
