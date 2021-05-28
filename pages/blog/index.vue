<template>
  <main class="contact">
    <page-hero
      heading="Website Design, and Full Stack Development Articles."
      leading="Get Website Design, Development , Laravel, Vue and WordPress Related Articles, Tips , Web Hosting deals coupons and more."
      image="https://res.cloudinary.com/jahiddev/image/upload/v1602132651/full-stack-blog_rhbggo.png"
    ></page-hero>
    <div class="section">
      <div class="container mx-auto">
        <div class="flex flex-row flex-wrap">
          <div class="w-full">
            <div v-if="posts" class="flex flex-wrap">
              <post-card
                v-for="(post, i) in posts"
                :key="i"
                class="w-full md:w-1/3"
                :post="post"
              />
            </div>
          </div>
          <!-- <div class="w-full md:w-1/4">SIdebar</div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PageHero from '~/components/PageHero'
import PostCard from '~/components/PostCard'

export default {
  components: { PageHero, PostCard },
  /* eslint-disable */
  async asyncData({ $axios }) {
    let posts = await $axios.$get('/posts?page=1&per_page=20&_embed=1')
    posts = posts
      .filter((el) => el.status === 'publish')
      .map(({ id, slug, title, excerpt, date, _embedded }) => ({
        id,
        slug,
        title,
        excerpt,
        date,
        categories: _embedded['wp:term']['0']
          .filter((el) => el.taxonomy === 'category')
          .map(({ name, slug }) => ({ name, slug })),
        image: _embedded['wp:featuredmedia']['0'].source_url
      }))
    return { posts }
  },
  /* eslint-enable */
  head() {
    return {
      title: 'Full Stack Blog - Vue.js, Nuxt.js, Node.js & Laravel',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Visit my Blog for Website Design, Development , Laravel, Vue, Nuxt.js and WordPress Related Articles Related Articles, Tips , Web Hosting deals coupons and more.'
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
