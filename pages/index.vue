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
    <div class="section bg-gray-200">
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </service-card>
          <service-card
            title="Web Apps"
            description="I am ready to meet your budget and provide you with a high-quality
              website which will surely satisfy your business needs. You will
              love the web apps because we never compromise on less than the
              best."
            ><svg
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              ></path>
            </svg>
          </service-card>
          <service-card
            title="Mobile Application"
            description="In the time of Startup era, having a apps is always keeps you one
              step ahead of your competitors, But Creating one could not be so
              easy. I can help you to create Industry Standard Mobile Apps which
              doesn't hurt your pocket."
            ><svg
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
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
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
