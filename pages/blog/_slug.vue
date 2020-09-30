<template>
  <div v-if="posts">
    <article
      v-for="post in posts"
      :key="post.id"
      class="container mx-auto py-16 px-6"
    >
      <div class="rounded-lg relative w-full h-half overflow-hidden">
        <img
          v-if="post.Image"
          :src="post.Image[0].url"
          :alt="post.Title"
          class="absolute w-full h-full content-center object-cover"
        />
      </div>
      <div
        class="-mt-16 bg-white shadow rounded-lg mx-5 md:mx-8 p-6 md:p-8 relative z-10"
      >
        <p class="text-sm font-semibold uppercase text-gray-500">
          <span v-for="(category, i) in post.categories" :key="i">{{
            category.Name + ' '
          }}</span>
        </p>
        <h1 class="text-gray-900 text-3xl tracking-tight font-medium">
          {{ post.Title }}
        </h1>
        <div
          v-if="post.content"
          class="mt-5 content"
          v-html="$md.render(post.content)"
        ></div>
      </div>
    </article>
  </div>
</template>

<script>
/* eslint-disable */
import single from '~/apollo/queries/posts/single'
export default {
  async asyncData(context) {
    let posts = await context.app.apolloProvider.defaultClient
      .query({
        query: single,
        variables: {
          slug: context.params.slug
        }
      })
      .then(({ data }) => {
        return data.posts
      })
      .catch((e) => {
        return posts
        console.log(e)
      })
    return {
      posts
    }
  },
  head() {
    return {
      title: this.posts.length > 0 ? this.posts[0].Title : '404 Page Not Found'
    }
  }
}
/* eslint-enable */
</script>

<style>
.h-half {
  height: 50vh;
}
</style>
