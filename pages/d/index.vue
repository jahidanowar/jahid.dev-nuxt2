<template>
  <div
    class="link container mx-auto h-screen text-center flex items-center justify-center"
  >
    <div>
      <lottie :width="300" :height="300" :options="lottieOptions" />
      <h2 class="uppercase tracking-widest font-normal">
        Redirecting to discord
      </h2>
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
      lottieOptions: { animationData: loadingAnimation.default }
    }
  },
  head() {
    return {
      title: 'Join the Discord',
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  },
  mounted() {
    // window.location.replace(this.links[0]._ta_destination_url)
    window.location = 'https://discord.gg/5Bq8Z82d'
  }
}
</script>
