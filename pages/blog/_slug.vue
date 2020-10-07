<template>
  <div v-if="posts">
    <article
      v-for="post in posts"
      :key="post.id"
      class="container mx-auto py-16 px-6"
      itemtype="https://schema.org/CreativeWork"
    >
      <div class="text-center px-0 md:px-10">
        <h1
          class="text-gray-900 text-4xl md:text-6xl tracking-tight font-bold leading-tight"
        >
          {{ post.Title }}
        </h1>
      </div>
      <div class="mt-5 md:mt-10">
        <img
          v-if="post.Image"
          :src="post.Image.url"
          :alt="post.Title"
          class="rounded-lg shadow-lg w-full content-center object-cover"
        />
      </div>
      <div class="mt-8 flex flex-wrap px-0 md:px-6">
        <div class="w-full md:w-1/3 inline-flex items-center">
          <img
            src="https://secure.gravatar.com/avatar/06973051ae1000ce76854211a57b12f1?s=96&d=mm&r=g"
            alt=""
            class="rounded-full border"
          />
          <div class="ml-4">
            <h4
              class="text-xl font-medium"
              itemprop="author"
              itemtype="http://schema.org/Person"
            >
              {{ post.created_by.firstname + ' ' + post.created_by.lastname }}
            </h4>
            <p>
              <time
                class="entry-date published"
                :datetime="post.updated_at"
                itemprop="datePublished"
                >{{ post.updated_at | formatDate }}</time
              >
            </p>
            <p>{{ readTime }} Minutes Read</p>
          </div>
        </div>
        <div
          class="w-full md:w-2/3 mt-4 md:mt-0 inline-flex items-center justify-end"
        >
          <p class="font-medium">
            {{ post.Summary }}
          </p>
        </div>
      </div>
      <div class="py-6 px-0 md:py-8 md:px-8">
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
import Prism from '~/plugins/prism'
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
  },
  mounted() {
    Prism.highlightAll()
  },
  computed: {
    readTime() {
      let minutes = 0
      const contentString = JSON.stringify(this.posts[0].content)
      const words = contentString.split(' ').length
      const wordsPerMinute = 200
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    }
  }
}
/* eslint-enable */
</script>

<style>
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #1a202c !important;
}
.content img {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
}
.content > ol,
ul {
  list-style: disc;
}
.content > fieldset,
ol,
ul {
  margin: revert;
  padding: revert;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
thead {
  border-radius: 0.5rem 0.5rem 0 0;
}
tbody {
  border-radius: 0 0 0.5rem 0.5rem;
}
/* Zebra striping */
tr:nth-of-type(odd) {
  background: #edf2f7;
}

th {
  background: #4dc0b5;
  color: white;
  font-weight: bold;
}

td,
th {
  padding: 10px;
  text-align: left;
}
</style>
