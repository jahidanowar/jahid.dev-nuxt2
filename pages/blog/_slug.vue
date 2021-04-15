<template>
  <div>
    <article
      v-for="post in posts"
      :key="post.id"
      class="container mx-auto py-16 px-6"
      itemtype="https://schema.org/CreativeWork"
    >
      <!-- Post Heading -->
      <div class="max-w-4xl mx-auto text-center px-0 md:px-10">
        <h1
          class="text-gray-900 text-4xl md:text-6xl tracking-tight leading-tight"
        >
          {{ post.title.rendered }}
        </h1>
      </div>
      <!-- ./ Post Heading -->
      <!-- Post Thumbnails -->
      <div class="max-w-4xl mx-auto mt-5 md:mt-10">
        <img
          :src="post._embedded['wp:featuredmedia']['0'].source_url"
          :alt="post.title.rendred"
          class="rounded-lg shadow-lg w-full content-center object-cover"
        />
      </div>
      <!-- ./ Post Thumbnails -->
      <!-- Post Meta  -->
      <div class="max-w-4xl mx-auto mt-8 flex flex-wrap px-0 md:px-6">
        <div class="w-full md:w-1/3 inline-flex items-center">
          <img
            :src="post._embedded['author']['0'].avatar_urls['96']"
            :alt="post._embedded['author']['0'].name"
            class="rounded-full border"
          />
          <div class="ml-4">
            <h4
              class="text-xl font-medium"
              itemprop="author"
              itemtype="http://schema.org/Person"
            >
              {{ post._embedded['author']['0'].name }}
            </h4>
            <p>
              <time
                class="entry-date published"
                :datetime="post.date"
                itemprop="datePublished"
                >{{ post.date | formatDate }}</time
              >
            </p>
            <p>{{ readTime }} Minutes Read</p>
          </div>
        </div>
        <div
          class="w-full md:w-2/3 mt-4 md:mt-0 inline-flex items-center justify-end"
        >
          <div class="font-medium" v-html="post.excerpt.rendered"></div>
        </div>
      </div>
      <!-- ./ Post Meta -->
      <!-- Social Share  -->
      <div class="entry-sticky-shares">
        <ul class="entry-shares">
          <li class="share-sum">
            <span>Share</span>
          </li>
          <li>
            <a
              :href="
                'https://twitter.com/share?text=' +
                post.title.rendered +
                '&url=' +
                currentUrl
              "
              title="Share on Twitter"
              rel="nofollow"
              target="_blank"
              class="share-btn"
            >
              <svg viewBox="0 0 512 512" class="icon-twitter">
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              :href="
                'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl
              "
              title="Share on Facebook"
              rel="nofollow"
              target="_blank"
              class="share-btn"
              ><svg viewBox="0 0 320 512" class="icon-facebook">
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path></svg
            ></a>
          </li>
          <li>
            <a
              :href="
                'https://www.linkedin.com/shareArticle?mini=true&url=' +
                currentUrl
              "
              title="Share on Linkedin"
              rel="nofollow"
              target="_blank"
              class="share-btn"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="909.333"
                viewBox="-21 -35 682.667 682"
                class="icon-linkedin"
                width="909.333"
                xmlns:v="https://vecta.io/nano"
              >
                <path
                  d="M77.613-.668C30.684-.668 0 30.148 0 70.652c0 39.6 29.77 71.305 75.813 71.305h.9c47.848 0 77.625-31.695 77.625-71.305-.895-40.504-29.777-71.32-76.715-71.32zM8.1 198.313h137.195V611.07H8.1zm473.945-9.688c-74.012 0-123.64 69.547-123.64 69.547v-59.86h-137.2V611.07h137.2v-230.5c0-12.34.895-24.66 4.52-33.484 9.918-24.64 32.488-50.168 70.4-50.168 49.645 0 69.5 37.852 69.5 93.34V611.07H640V374.402c0-126.78-67.687-185.777-157.945-185.777zm0 0"
                ></path></svg
            ></a>
          </li>
        </ul>
      </div>
      <!-- ./ Social Share  -->
      <!-- Post Content -->
      <div class="max-w-4xl mx-auto py-6 px-0 md:py-8 md:px-8">
        <div
          v-if="post.content"
          class="mt-5 content"
          v-html="post.content.rendered"
        ></div>
      </div>
      <!-- ./ Post Content -->
      <!-- Author Box -->
      <div
        class="max-w-4xl mx-auto author-box p-8 md:p-12 rounded-xl flex flex-wrap md:flex-no-wrap"
      >
        <div class="avatar w-64 mr-5 mb-5 md:mb-0">
          <img
            alt=""
            src="https://secure.gravatar.com/avatar/06973051ae1000ce76854211a57b12f1?s=96&amp;d=mm&amp;r=g"
            srcset="
              https://secure.gravatar.com/avatar/06973051ae1000ce76854211a57b12f1?s=192&amp;d=mm&amp;r=g 2x
            "
            class="avatar rounded-full border"
            loading="lazy"
            width="96"
            height="96"
          />
        </div>
        <div class="author-box__content">
          <div class="flex flex-wrap justify-between">
            <div class="mb-5 md:mb-0">
              <p class="text-primary uppercase text-xs">About Me</p>
              <h4
                class="text-3xl"
                itemprop="author"
                itemscope=""
                itemtype="http://schema.org/Person"
              >
                Jahid Anowar
              </h4>
            </div>
            <div class="justify-self-end">
              <social-buttons></social-buttons>
            </div>
          </div>
          <div class="author-summery mt-5 mb-8">
            <p class="author-description transform-none text-lg">
              Hi, I’m Jahid Anowar, a Website designer with programming
              expertise. I’ve been designing and programming for the last four
              years and have built various human-centered websites and web apps
              for small and medium-sized businesses.
            </p>
          </div>
          <nuxt-link
            to="/contact"
            class="block md:inline text-center btn bg-primary hover:bg-secondary text-white"
            >Get in touch!</nuxt-link
          >
        </div>
      </div>
      <!-- ./ Author Box  -->
    </article>
  </div>
</template>

<script>
/* eslint-disable */
import Prism from '~/plugins/prism'
import SocialButtons from '~/components/SocialButtons'
export default {
  components: { SocialButtons },
  async asyncData({ $axios, params }) {
    const posts = await $axios.$get('/posts/?slug=' + params.slug + '&_embed=1')
    return { posts }
  },
  head() {
    return {
      title: this.posts[0].title.rendered,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.posts[0].excerpt.rendered
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.posts[0]._embedded['wp:featuredmedia']['0'].source_url
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.posts[0].title.rendered
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.posts[0].excerpt.rendered
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'blog'
        }
      ],
    }
  },
  mounted() {
    Prism.highlightAll()
    console.log(this.$route.path)
  },
  computed: {
    readTime() {
      let minutes = 0
      const contentString = JSON.stringify(this.posts[0].content.rendered)
      const words = contentString.split(' ').length
      const wordsPerMinute = 200
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    },
    currentUrl() {
      return 'https://jahid.dev' + this.$route.fullPath
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
.content ol,
.content ul {
  list-style: disc;
}
.content fieldset,
.content ol,
.content ul {
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
.author-box {
  box-shadow: 0 0 5px 0 rgba(25, 77, 66, 0.02),
    0 3px 20px 0 rgba(81, 239, 199, 0.04), 0 10px 28px 0 rgba(39, 25, 77, 0.03);
}
</style>
