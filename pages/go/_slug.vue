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
  data() {
    return {
      links: null,
      lottieOptions: { animationData: loadingAnimation.default }
    }
  },
  head() {
    return {
      title: 'Redirecting to destination',
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  },
  mounted() {
    this.$axios
      .get('/thirstylink/?slug=' + this.$route.params.slug)
      .then((res) => {
        this.links = res.data
        window.location = res.data[0]._ta_destination_url
      })
  }
}
</script>
