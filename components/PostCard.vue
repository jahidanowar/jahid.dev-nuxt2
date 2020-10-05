<template>
  <div class="p-4">
    <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
      <img
        v-if="post.Image.length > 0"
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        :src="post.Image[0].url"
        :alt="post.Title"
      />
      <div class="p-6">
        <h2
          class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
        >
          <p class="uppercase text-xs">
            <span v-for="(category, i) in post.categories" :key="i" class="mr-2"
              >{{ category.Name }}
            </span>
          </p>
        </h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
          {{ post.Title }}
        </h1>
        <p class="leading-relaxed mb-3">
          {{ post.content.substring(0, 100) + '...' }}
        </p>
        <div class="flex items-center flex-wrap">
          <nuxt-link
            :to="{ name: 'blog-slug', params: { slug: post.slug } }"
            class="text-primary inline-flex items-center md:mb-2 lg:mb-0"
            >Learn More
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </nuxt-link>
          <span
            class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path></svg
            >{{ post.updated_at | formatDate }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  props: ['post']
  /* eslint-enable */
}
</script>

<style></style>
