<template>
  <main class="pt-10">
    <div
      class="container mx-auto flex flex-col sm:flex-row justify-between items-center md:py-16"
    >
      <div
        class="w-full md:w-1/2 px-6 text-left max-w-2xl md:max-w-3xl mx-auto"
      >
        <h2
          class="text-gray-900 text-4xl md:text-5xl font-medium leading-tight tracking-tight"
        >
          Creating Kickass website for businesses.<br />
          <span class="text-primary">One at a Time.</span>
        </h2>
        <p class="leading-relaxed mt-6 sm:text-lg md:text-xl xl:text-lg">
          Hi, I’m Jahid, a Website designer with programming expertise. I’ve
          been designing and programming for the last 4 years and have built
          various human-centered website and web apps for businesses.
        </p>
        <div class="flex my-6">
          <nuxt-link
            to="/contact"
            class="btn bg-primary hover:bg-secondary text-white"
            >Contact Me</nuxt-link
          >
          <nuxt-link
            to="/portfolio"
            class="ml-2 btn bg-gray-900 hover:bg-gray-700 text-white"
            >My Works</nuxt-link
          >
        </div>
      </div>
      <div class="w-full md:w-1/2 self-center align-bottom feature-image-box">
        <img
          src="~/assets/img/jahid-anowar.png"
          alt="Jahid Anowar"
          class="w-full feature-image"
        />
      </div>
    </div>
    <!-- Experience Section -->
    <div class="section bg-gray-100">
      <brands
        heading="Worked with Businesses Globally"
        subheading="Here are some organizations I had a pleasure to work with on their
          Website, Web Apps."
      />
    </div>
    <!-- Service Section  -->
    <div class="services section">
      <div class="container mx-auto">
        <h2 class="section-heading text-gray-900 mb-4">
          Services I can help you with
        </h2>
        <p class="section-description mb-4">
          I help businesses connect with audiences, delivering greater brand
          engagement<br />
          through designing engaging websites and web Apps.
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
              class="h-16"
              id="bold"
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
            title="Web Apps"
            description="I am ready to meet your budget and provide you with a high-quality
              website which will surely satisfy your business needs. You will
              love the web apps because we never compromise on less than the
              best."
            ><svg
              class="h-16"
              id="bold"
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
            description="In the time of Startup era, having a apps is always keeps you one
              step ahead of your competitors, But Creating one could not be so
              easy. I can help you to create Industry Standard Mobile Apps which
              doesn't hurt your pocket."
            ><svg
              class="h-16"
              id="bold"
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
    <div class="section bg-gray-100 bg-pattern">
      <div class="container mx-auto">
        <h2 class="section-heading mb-4 text-gray-900">My Recent Works</h2>
        <p class="text-center mb-4">Take a look at some of my recent works.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          <portfolio-card
            v-for="(portfolio, i) in portfolios"
            :key="i"
            :portfolio="portfolio"
          ></portfolio-card>
        </div>
        <div class="mt-12 text-center">
          <nuxt-link
            to="/portfolio"
            class="btn bg-primary hover:bg-secondary text-white shadow-xs"
            >View All Projects</nuxt-link
          >
        </div>
      </div>
    </div>
    <!-- Testimonial Section -->
    <div class="section">
      <div class="container mx-auto">
        <h2 class="section-heading mb-4 text-gray-900">
          What My Happy Clients Says
        </h2>
        <p class="text-center mb-4">
          I love hearing from my clients. Here is a selection of reviews just
          in!
        </p>
        <div class="flex flex-wrap -m-4 mt-8">
          <testimonial-card v-for="i in 3" :key="i" class="w-full md:w-1/3" />
        </div>
      </div>
    </div>
    <!-- CTA  -->
    <div class="section">
      <div class="container mx-auto">
        <h2 class="section-heading mb-4 text-gray-900">Let's work together!</h2>
        <p class="text-center mb-2">
          You have an idea in your mind and looking for execution with pixel
          perfect designs.<br />
          Let’s build your idea and give your brand an exposure.
        </p>
        <div class="mt-8 md:pb-20 md:pt-16 md:px-20">
          <contact-form />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import portfoliosQuery from '~/apollo/queries/portfolios/portfoliosQuery'
import Brands from '~/components/Brands'
import PortfolioCard from '~/components/PortfolioCard'
import ServiceCard from '~/components/ServiceCard'
import TestimonialCard from '~/components/TestimonialCard'
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    PortfolioCard,
    ServiceCard,
    TestimonialCard,
    ContactForm,
    Brands
  },
  /* eslint-disable */
  async asyncData(context) {
    let portfolios = await context.app.apolloProvider.defaultClient
      .query({ query: portfoliosQuery })
      .then(({ data }) => {
        return data.portfolios
      })
    return {
      portfolios
    }
  },
  /* eslint-enable */
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
      ]
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
  background-image: url('https://jahid.dev/wp-content/uploads/2020/04/pattern-two.svg');
  background-position: center;
  background-size: container;
  background-repeat: no-repeat;
}
</style>
