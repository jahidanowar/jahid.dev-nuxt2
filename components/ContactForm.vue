<template>
  <form
    ref="contactForm"
    name="contact"
    class="text-center flex flex-col w-full"
    @submit.prevent="onSubmit"
  >
    <div class="flex flex-col md:flex-row gap-2">
      <div class="w-full">
        <input
          v-model="contactForm.fname"
          class="bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 mb-4 w-full"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div class="w-full">
        <input
          v-model="contactForm.email"
          class="bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 mb-4 w-full"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-2">
      <div class="relative w-full mb-4">
        <select
          v-model="contactForm.subject"
          name="projectType"
          class="block bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 appearance-none w-full"
        >
          <option value="0" class="text-gray-400">Interested In</option>
          <option value="Projects" class="text-gray-400">Projects</option>
          <option value="Inquiry" class="text-gray-400">Inquiry</option>
          <option value="Connect" class="text-gray-400">Connect</option>
          <option value="Other" class="text-gray-400">Other</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
      <!-- <div class="relative w-full mb-4">
        <select
          name="budgetRange"
          class="block bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 appearance-none w-full"
        >
          <option value="0" class="text-gray-400">Budget Range</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div> -->
    </div>
    <textarea
      v-model="contactForm.message"
      name="description"
      class="bg-white shadow-sm rounded border border-gray-400 focus:outline-none focus:border-primary text-base px-4 py-2 mb-4 h-32"
      placeholder="Description"
    ></textarea>
    <button
      class="btn w-full bg-primary hover:bg-secondary text-white inline-flex justify-center"
      :disabled="loading"
      type="submit"
    >
      <template v-if="!loading"> Submit </template>
      <template v-else>
        <svg
          class="animate-spin ml-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </template>
    </button>
    <p
      v-if="message"
      class="bg-gray-800 text-gray-100 py-2 px-4 text-center mt-2 rounded"
    >
      {{ message }}
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      contactForm: {
        fname: '',
        email: '',
        subject: 0,
        message: ''
      },
      message: ''
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true

        // eslint-disable-next-line
        let formData = new FormData()
        for (const [key, value] of Object.entries(this.contactForm)) {
          // console.log(`${key}: ${value}`)
          formData.append(key, value)
        }
        await this.$axios
          .post(
            'https://api.jahid.dev/wp-json/contact-form-7/v1/contact-forms/1191/feedback',
            formData
          )
          .then((response) => {
            this.contactForm.fname = ''
            this.contactForm.email = ''
            this.contactForm.subject = 0
            this.contactForm.message = ''
            this.message = response.data.message
            setTimeout(() => {
              this.message = ''
            }, 8000)
          })
      } catch (error) {
        console.log('Login error:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>
