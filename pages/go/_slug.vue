<template>
  <div
    class="
      link
      container
      mx-auto
      h-screen
      text-center
      flex
      items-center
      justify-center
    "
  >
    <div>
      <lottie :width="300" :height="300" :options="lottieOptions" />
      <h2 class="uppercase tracking-widest font-normal">Redirecting</h2>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as loadingAnimation from '~/assets/lottie/loading.json'
export default {
  components: {
    lottie
  },
  layout: 'empty',
  // async asyncData({ $axios, params }) {
  //   const links = await $axios.get('/thirstylink/?slug=' + params.slug)
  //   return { link: links[0] }
  // },
  data() {
    return {
      lottieOptions: { animationData: loadingAnimation.default },
      link: {}
    }
  },
  async fetch() {
    this.link = (
      await this.$axios.$get(`/thirstylink/?slug=${this.$route.params.slug}`)
    )[0]
  },
  head() {
    return {
      title: this.link.title.rendered,
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  },
  mounted() {
    // window.location.replace(this.links[0]._ta_destination_url)
    window.location = this.link._ta_destination_url
  }
}
</script>
