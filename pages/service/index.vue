<template>
  <main class="service">
    <page-hero
      heading="How I bring value to your business."
      leading="Think of me as your remote Website Development and Marketing Agency. I help businesses connect with audiences, delivering greater brand engagement through designing engaging websites and web Apps."
      image="/img/full-stack-development-services.png"
    ></page-hero>
  </main>
</template>

<script>
import PageHero from '~/components/PageHero'
export default {
  components: { PageHero },
  head() {
    return {
      title: 'Services - Jahid Anowar',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'From standard business websites to advanced e-commerce sites. I create awesome looking websites that meet your business objectives.'
        }
      ]
    }
  }
}
</script>

<style></style>
