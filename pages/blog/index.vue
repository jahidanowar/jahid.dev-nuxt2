<template>
  <main class="contact">
    <page-hero
      heading="Website Design, WordPress and Digital Marketing Articles."
      leading="Get Website Design, Development , Digital Marketing and WordPress Related Articles, Tips , Web Hosting deals coupons and more."
      :image="require('~/assets/img/full-stack-blog.png')"
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
import postsQuery from '~/apollo/queries/posts/postsQuery'

export default {
  components: { PageHero, PostCard },
  /* eslint-disable */
  async asyncData(context) {
    let posts = await context.app.apolloProvider.defaultClient
      .query({
        query: postsQuery
      })
      .then(({ data }) => {
        return data.posts
      })
    return {
      posts
    }
  },
  /* eslint-enable */
  head() {
    return {
      title: 'Website Design, WordPress and Digital Marketing Article',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Visit my Blog for Website Design, Development , Digital Marketing and WordPress Related Articles, Tips , Web Hosting deals coupons and more.'
        }
      ]
    }
  }
}
</script>

<style></style>
