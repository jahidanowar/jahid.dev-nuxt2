<template>
  <main class="pt-10 overflow-hidden sm:overflow-auto">
    <div
      class="container mx-auto flex flex-col sm:flex-row justify-between items-center md:h-screen relative w-full px-4"
    >
      <!-- Text  -->
      <div
        class="mx-auto w-full md:w-7/12 z-20 flex flex-col gap-y-4 items-center sm:items-start"
      >
        <h1 class="text-4xl md:text-6xl text-center sm:text-left">
          Architecting the next generation of
          <span class="underline text-primary-500 dark:text-primary-400">{{
            tickerText
          }}</span>
          applications
        </h1>
        <p
          class="leading-relaxed sm:text-lg mt-6 w-11/12 sm:w-7/12 text-center sm:text-left"
        >
          Hey this is Jahid, A Full stack developer and Indie Hacker. I love
          building cool things and making videos about it.
        </p>
        <div class="flex my-6 flex-wrap justify-center gap-2">
          <NuxtLink to="/blog/" class="btn btn-primary"
            >Check out my blog</NuxtLink
          >
          <NuxtLink to="/contact/" class="ml-3 btn btn-secondary"
            >Get in touch</NuxtLink
          >
        </div>
      </div>
      <!-- Video Content  -->
      <div class="w-full md:w-5/12 feature-image-box mt-5 relative">
        <div class="globe opacity-30 sm:opacity-50">
          <div
            class="globe-item globe-item__primary rounded-full absolute z-10 w-[400px] h-[400px] bg-gradient-to-tr from-primary-400 to-blue-600"
          ></div>
          <div
            class="globe-item globe-item__warning rounded-full absolute z-10 w-96 h-96 bg-gradient-to-tr from-yellow-500 to-yellow-300"
          ></div>
          <div
            class="globe-item globe-item__success rounded-full absolute z-10 w-96 h-96 bg-gradient-to-tr from-green-500 to-green-300"
          ></div>

          <div
            class="globe-item globe-item__danger rounded-full absolute z-10 w-[300px] h-[300px] bg-gradient-to-tr from-red-300 to-red-500"
          ></div>
        </div>

        <div
          class="w-full min:h-[300px] relative rounded-2xl border-8 border-white border-opacity-30 dark:border-opacity-70 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur bg-opacity-20 dark:bg-opacity-20 shadow-2xl dark:shadow-2xl overflow-hidden group hover:cursor-pointer mb-12"
          @click="handleVideoClick"
        >
          <div class="h-full w-full relative">
            <nuxt-img
              src="https://res.cloudinary.com/jahiddev/image/upload/v1669872286/Deploy_Nuxt_3_App_on_Digital_Ocean_App_Platform_iczdfm.webp"
              class="w-full h-full"
            ></nuxt-img>
            <div
              class="overlay absolute top-0 right-0 bottom-0 left-0 bg-gray-900 grid place-items-center text-white bg-opacity-40 group-hover:bg-opacity-80 duration-300 backdrop-blur-[0px] group-hover:backdrop-blur-[5px] z-10"
            >
              <div class="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  class="bi bi-youtube transition-all duration-300 translate-y-5 group-hover:translate-y-0"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                  />
                </svg>
                <a
                  class="text-white -translate-y-5 scale-0 group-hover:scale-100 group-hover:-translate-y-0 transition-all duration-300"
                  >it's free 🔥</a
                >
              </div>
            </div>
          </div>
          <div
            class="p-4 w-full bg-white dark:bg-gray-900 text-center flex justify-center bg-opacity-60 z-20"
          >
            <h3>Explore youtube videos</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- Experience Section -->
    <div class="section border-t border-b dark:border-gray-600">
      <brands
        heading="Worked with Businesses Globally"
        subheading="Here are some organizations I had a pleasure to work with on their
          Website, Web Apps."
      />
    </div>
    <!-- Service Section  -->
    <div class="services section">
      <div class="container mx-auto">
        <h2 class="section-heading mb-4">Things i do and brag about</h2>
        <p class="section-description mb-4">
          I help businesses connect with audiences, delivering greater brand
          engagement<br />
          through designing engaging web Apps.
        </p>
      </div>
      <div class="container mx-auto mt-8">
        <div class="grid gap-10 grid-cols-1 md:grid-cols-3">
          <service-card
            title="Website Design"
            description="My first focus is on giving a minimalist edge to the web world and
              brand exposure using thoughtful & human-centered design on your
              website. No matter how complex your Idea is I always have a way to
              work it out."
            ><svg
              id="bold"
              class="h-16"
              enable-background="new 0 0 32 32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                fill="#e3f8fa"
              />
              <g fill="#8ce1eb">
                <path
                  d="m18.569 23.431c-.876-.876-.902-1.724-.902-1.766-.001-.183-.15-.331-.333-.331h-2.68c-.184 0-.333.151-.333.335 0 .036-.012.885-.889 1.762-.095.095-.124.239-.072.363.05.125.172.206.307.206h4.667c.135 0 .257-.081.308-.206.051-.124.022-.268-.073-.363z"
                />
                <path
                  d="m19 16.66h-6c-.184 0-.333-.149-.333-.333v-.781c0-.445.173-.864.488-1.179l.845-.846v-1.895c0-.805.27-1.599.76-2.236l.975-1.268c.126-.164.402-.164.529 0l.975 1.268c.49.637.76 1.431.76 2.236v1.895l.845.845c.315.315.488.733.488 1.179v.781c.001.184-.148.334-.332.334z"
                />
                <path
                  d="m17.667 17.993c-.368 0-.667-.299-.667-.667v-1c0-.368.298-.667.667-.667.368 0 .667.299.667.667v1c-.001.368-.299.667-.667.667z"
                />
                <path
                  d="m14.333 17.993c-.368 0-.667-.299-.667-.667v-1c0-.368.298-.667.667-.667.368 0 .667.299.667.667v1c0 .368-.298.667-.667.667z"
                />
              </g>
              <path
                d="m22.833 10.667h-3.6c.067.313.1.64.1.96v.373h3.333v7.333h-13.333v-7.333h3.333v-.373c0-.32.033-.647.1-.96h-3.6c-.639 0-1.166.526-1.166 1.166v9c0 .64.527 1.167 1.167 1.167h13.667c.639 0 1.166-.527 1.166-1.167v-9c0-.64-.527-1.166-1.167-1.166z"
                fill="#26c6da"
              />
            </svg>
          </service-card>
          <service-card
            title="Progressive Webapp"
            description="A progressive web app behaves like and often outperforms native application. As a PWA developer, I can build futuristic web applications, which have the transformational capacity for your business."
            ><svg
              id="bold"
              class="h-16"
              enable-background="new 0 0 32 32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                fill="#ffe6e2"
              />
              <path
                d="m21.867 13.687c-.547 0-1.047-.207-1.42-.547v2.513h-1.7c.153-.34.233-.72.233-1.107 0-1.547-1.26-2.8-2.8-2.8-1.547 0-2.8 1.253-2.8 2.8 0 .387.08.767.227 1.107h-2.053v-6.94c0-.393.32-.713.713-.713h7.467c.393 0 .713.32.713.713v1.253c.48-.433 1.153-.647 1.88-.493.82.167 1.487.853 1.633 1.68.254 1.354-.779 2.534-2.093 2.534z"
                fill="#fd907e"
              />
              <path
                d="m16.925 19.328c-.249 1.358.782 2.539 2.097 2.539.547 0 1.045-.206 1.422-.548v1.97c0 .391-.32.711-.711.711h-7.465c-.391 0-.711-.32-.711-.711v-1.97c-.483.434-1.159.647-1.884.498-.818-.171-1.486-.853-1.635-1.678-.249-1.359.782-2.539 2.097-2.539.547 0 1.045.206 1.422.548v-1.825h3.441c-.576-.384-.953-1.031-.953-1.778 0-1.18.953-2.133 2.133-2.133s2.133.953 2.133 2.133c0 .747-.377 1.394-.953 1.778h3.086v1.825c-.483-.434-1.159-.647-1.884-.498-.817.17-1.486.853-1.635 1.678z"
                fill="#fc573b"
              />
            </svg>
          </service-card>
          <service-card
            title="Mobile Application"
            description="In the time of Startup era, having an app is always keeps you one step ahead of your competitors, But Creating one could not be so easy. I can help you to create Industry Standard Mobile Apps which doesn't hurt your pocket."
            ><svg
              id="bold"
              class="h-16"
              enable-background="new 0 0 32 32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                fill="#f5e6fe"
              />
              <path
                d="m17.396 19.287c-.02.013-.033.02-.053.033v2.013h-8v-11.333c0-.367.3-.667.667-.667h6.667c.367 0 .667.3.667.667v.053c.22-.04.44-.053.667-.053.2 0 .393.013.58.04.027-.027.06-.047.087-.067-.015-1.086-.909-1.973-2.002-1.973h-6.667c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6.667c1.1 0 2-.9 2-2v-2.72c-.22.04-.44.053-.667.053-.206 0-.413-.013-.613-.046z"
                fill="#be63f9"
              />
              <g fill="#d9a4fc">
                <path
                  d="m23.951 10.608c-.079-.186-.262-.307-.464-.305l-1.167.009-.009-1.167c-.001-.203-.124-.384-.311-.46s-.402-.032-.544.112l-1.654 1.679c-.093.094-.145.222-.144.355l.011 1.466c-.006.006-.014.008-.02.014l-1.985 2.015c-.194.197-.192.513.005.707.098.097.227.145.355.144s.255-.051.352-.149l1.985-2.015c.006-.006.008-.014.013-.02l1.466-.011c.132-.001.259-.055.352-.149l1.654-1.679c.143-.144.184-.36.105-.546z"
                />
                <path
                  d="m21.276 13.987h-.473l-.793.807c-.053 1.047-.913 1.873-1.973 1.88-1.107.013-2.007-.88-2.02-1.98-.007-1.067.82-1.94 1.867-2.013l.78-.793v-.488c-.22-.04-.44-.06-.667-.06-1.84.02-3.327 1.52-3.313 3.36.02 1.84 1.527 3.32 3.36 3.307 1.84-.013 3.327-1.52 3.307-3.353-.002-.227-.028-.454-.075-.667z"
                />
              </g>
            </svg>
          </service-card>
        </div>
      </div>
    </div>
    <!-- Portfolio Section  -->
    <div class="section">
      <div class="container mx-auto">
        <h2 class="section-heading mb-4">My Recent Works</h2>
        <p class="text-center mb-4">Take a look at some of my recent works.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          <nuxt-link
            v-for="(portfolio, i) in projects"
            :key="i"
            :to="{ name: 'portfolio-slug', params: { slug: portfolio.slug } }"
          >
            <portfolio-grid-card
              :portfolio="portfolio"
              :no-text="true"
            ></portfolio-grid-card>
          </nuxt-link>
        </div>
        <div class="mt-12 text-center">
          <nuxt-link
            to="/portfolio"
            class="btn btn-muted inline-flex items-center group transform hover:text-primary hover:-translate-y-1 duration-200"
            >View All Projects
            <svg
              class="w-4 h-4 ml-1 transform group-hover:translate-x-2 duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- Testimonial Section -->
    <div class="section">
      <div class="container mx-auto">
        <h2 class="section-heading mb-4">What My Happy Clients Say</h2>
        <p class="text-center mb-4">
          I love hearing from my clients. Here is a selection of reviews just
          in!
        </p>
        <div class="flex flex-wrap -m-4 mt-8">
          <testimonial-card
            v-for="(testimonial, i) in testimonials"
            :key="i"
            :testimonial="testimonial"
            class="w-full md:w-1/3"
          />
        </div>
      </div>
    </div>
    <!-- CTA  -->
    <div class="section px-6 pb-20">
      <div class="container mx-auto">
        <div class="p-12 rounded-2xl border dark:border-gray-600">
          <div class="flex flex-wrap align-middle justify-between">
            <div class="text">
              <h2 class="text-3xl md:text-4xl">
                Need a next level website for your business?
              </h2>
              <p class="md:text-xl my-4 md:my-0">
                Tell me about your product or idea. I'd love to hear it.
              </p>
            </div>
            <div class="self-center justify-self-end mt-4">
              <nuxt-link to="/contact/" class="btn btn-primary"
                >Get in touch!</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Brands from '~/components/Brands'
import PortfolioGridCard from '~/components/PortfolioGridCard'
import ServiceCard from '~/components/ServiceCard'
import TestimonialCard from '~/components/TestimonialCard'

export default {
  components: {
    PortfolioGridCard,
    ServiceCard,
    TestimonialCard,
    Brands
  },
  /* eslint-disable */
  async asyncData({ $axios }) {
    const projects = await $axios.$get('/project?_embed=1&page=1&per_page=6')
    return { projects }
  },
  /* eslint-enable */
  data() {
    return {
      tickerText: 'web',
      testimonials: [
        {
          review:
            'Jahid took time to understand the requirements and finished before the deadline set. His task was to create a multi-lingual landing page with automatic language change based on location, and he did it successfully in a timely manner',
          name: 'Hasan Alkhater',
          job: 'Co-Founder & COO, MacQueen',
          avatar: '/img/hasan-alkhater.jpg'
        },
        {
          review:
            'Jahid understands the requirements quite well, and implementation is praiseworthy .. He puts in his mind and gives real good practical suggestions. Would surely work on more projects with him in future.. Recommend that one should try out his work.. I believe you would like his work.',
          name: 'Jaideep Hinduja',
          job: 'Director, Simext Technologies',
          avatar: '/img/Jaideep-Hinduja.jpg'
        },
        {
          review:
            "I really like working with Jahid. He has a lot of experience with WordPress, is friendly and doesn't stop working until you are completely satisfied with the result.",
          name: 'Duelen',
          job: 'Entrepreneur & Digital Marketer',
          avatar: '/img/Duelen.jpg'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Jahid Anowar - Full Stack Web Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'I’m Jahid Anowar, a Full Stack Web Developer, Programming for the last 4 years and have built 200+ human-centered websites and apps for businesses.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://jahid.dev' + this.$route.path
        }
      ]
    }
  },
  mounted() {
    const texts = ['web', 'mobile']
    setInterval(() => {
      this.tickerText = texts[Math.floor(Math.random() * texts.length)]
    }, 3000)
  },
  methods: {
    handleVideoClick() {
      this.$router.push('/go/yt/')
    }
  }
}
</script>

<style>
.feature-image {
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
.feature-image-box {
  background-image: url('~assets/img/pattern-two.svg');
  background-position: center;
  background-size: container;
  background-repeat: no-repeat;
}
.globe-item__primary {
  top: -15%;
  left: -10%;
}
.globe-item__success {
  left: 10%;
  bottom: -35%;
}
.globe-item__warning {
  right: -15%;
  bottom: -10%;
}
.globe-item__danger {
  right: -10%;
  top: -15%;
}
</style>
