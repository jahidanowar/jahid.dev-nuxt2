<template>
  <div class="portfolio-single">
    <div class="container mx-auto py-10 sm:py-32 px-6 grid grid-cols-10 gap-10">
      <div class="col-span-10 sm:col-span-5 relative">
        <div class="sticky top-20 pt-10">
          <div
            class="w-full rounded-2xl border-[10px] relative h-[400px] overflow-hidden border-gray-50 dark:border-gray-700 shadow-2xl"
          >
            <nuxt-img
              :src="project._embedded['wp:featuredmedia']['0'].source_url"
              alt=""
              class="absolute object-cover w-full h-full"
            ></nuxt-img>
          </div>
        </div>
      </div>
      <!-- Project Info  -->
      <div class="col-span-10 sm:col-span-5">
        <div class="p-10">
          <h1>{{ project.title.rendered }}</h1>
          <p class="mt-5">{{ project.excerpt.rendered }}</p>
          <!-- Info Box -->
          <div class="grid sm:grid-cols-2 gap-5 mt-10">
            <div class="info-box p-5 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-primary-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>

                <h4 class="font-bold ml-2">Industry</h4>
              </div>
              {{ project.industry }}
            </div>
            <div class="info-box p-5 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-primary-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>

                <h4 class="font-bold ml-2">Location</h4>
              </div>
              {{ project.location }}
            </div>
            <div class="info-box p-5 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-primary-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <h4 class="font-bold ml-2">Stack</h4>
              </div>
              {{ project.tech_stack }}
            </div>
            <nuxt-link
              :to="{ name: 'contact' }"
              class="info-box p-5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white dark:text-white text-center shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <h4 class="font-medium ml-2 text-white dark:text-white">
                Have a project?
              </h4>
            </nuxt-link>
          </div>
          <!-- ./ Info Box  -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params, error }) {
    const projects = await $axios.$get(
      '/project/?slug=' + params.slug + '&_embed=1'
    )
    if (projects.length <= 0) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return { project: projects[0] }
  },
  head() {
    return {
      title: this.project.title.rendered,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.excerpt.rendered
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.project._embedded['wp:featuredmedia']['0'].source_url
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.project.title.rendered
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.project.excerpt.rendered
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'blog'
        }
      ]
    }
  }
}
</script>
