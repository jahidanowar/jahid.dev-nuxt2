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
  mounted() {
    console.log('Fetch Posts')
    this.$store.dispatch('fetchPosts')
  }
}
</script>
<style>
html {
  color: theme('colors.text');
}
</style>
