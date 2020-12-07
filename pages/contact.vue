<template>
  <main class="contact">
    <page-hero
      heading="Hello there, I'm glad that you're here!"
      leading="You have an idea in your mind and looking for execution with pixel perfect designs. Let’s build your idea and give your brand an exposure."
      image="https://res.cloudinary.com/jahiddev/image/upload/v1602132651/contact-jahid_ddm3c9.png"
    ></page-hero>
    <div class="section">
      <div class="container mx-auto">
        <div class="w-full md:w-3/5 mx-auto">
          <contact-form />
        </div>
        <div class="text-center">
          <p class="mt-8">Or email me here</p>
          <a href="mailto:contact@jahid.dev" class="text-xl mt-5"
            >contact[at]jahid.dev</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PageHero from '~/components/PageHero'
import ContactForm from '~/components/ContactForm'
export default {
  components: { PageHero, ContactForm },
  head() {
    return {
      title: 'Contact - Jahid Anowar',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Hello, I am Jahid Anowar. Contact me if you are looking for a website that is built for conversion, speed, accessibility and mobile performance.'
        }
      ]
    }
  }
}
</script>

<style></style>
