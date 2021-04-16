<template>
  <div
    class="link container mx-auto h-screen text-center flex items-center justify-center"
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
  layout: 'empty',
  components: {
    lottie
  },
  async asyncData({ $axios, params }) {
    const links = await $axios.$get('/thirstylink/?slug=' + params.slug)
    return { links }
  },
  head() {
    return {
      title: this.links[0].title.rendered,
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  },
  mounted() {
      // window.location.replace(this.links[0]._ta_destination_url)
      window.location = this.links[0]._ta_destination_url
  },
  data() {
    return {
      lottieOptions: { animationData: loadingAnimation.default }
    }
  }
}
</script>
