<template>
  <div
    class="
      shadow-xs
      bg-white
      fixed
      bottom-0
      w-full
      z-50
      sm:static
      transition-all
      duration-300
    "
  >
    <header
      class="
        sm:flex
        sm:justify-between
        sm:items-center
        sm:px-4
        container
        mx-auto
      "
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <nuxt-link to="/">
          <img
            class="h-10"
            src="~/assets/img/jahid-anowar-logo.svg"
            alt="Jahid"
          />
        </nuxt-link>
        <div class="sm:hidden">
          <button
            type="button"
            class="
              block
              foxus:text-primary
              focus:outline-none
              focus:bg-gray-200
              p-2
              rounded-md
              transition-all
              duration-300
            "
            @click="isOpen = !isOpen"
          >
            <svg v-if="isOpen" class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            </svg>
            <svg
              v-if="!isOpen"
              class="w-6 h-6 fill-current"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="px-2 pt-3 pb-4 sm:flex bg-gray-100 sm:bg-transparent"
      >
        <nuxt-link
          to="/service"
          class="
            px-4
            py-2
            rounded-lg
            hover:bg-gray-200
            sm:mt-0
            sm:ml-2
            w-full
            sm:w-auto
            inline-flex
            sm:flex-row
            items-center
            flex-row-reverse
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 ml-2 sm:mr-2 icon-trending-up"
          >
            <path
              class="text-gray-500 fill-current"
              d="M3.7 20.7a1 1 0 1 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0l3.3 3.29 4.3-4.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0L9 15.4l-5.3 5.3z"
            ></path>
            <path
              class="text-gay-800 fill-current"
              d="M16.59 8l-2.3-2.3A1 1 0 0 1 15 4h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1.7.7L18 9.42l-4.3 4.3a1 1 0 0 1-1.4 0L9 10.4l-5.3 5.3a1 1 0 1 1-1.4-1.42l6-6a1 1 0 0 1 1.4 0l3.3 3.3L16.59 8z"
            ></path>
          </svg>
          Service
        </nuxt-link>
        <nuxt-link
          to="/portfolio"
          class="
            px-4
            py-2
            rounded-lg
            hover:bg-gray-200
            sm:mt-0
            sm:ml-2
            w-full
            sm:w-auto
            inline-flex
            sm:flex-row
            items-center
            flex-row-reverse
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 ml-2 sm:mr-2 icon-target"
          >
            <path
              class="text-gray-500 fill-current"
              d="M15.23 2.53l-.35.35a3 3 0 0 0-.8 1.4 8.01 8.01 0 1 0 5.64 5.63 3 3 0 0 0 1.4-.79l.35-.35A9.99 9.99 0 0 1 12 22a10 10 0 1 1 3.23-19.47zM13.55 6.2L11.75 8a4 4 0 1 0 4.24 4.25l1.8-1.8a6 6 0 1 1-4.24-4.25z"
            ></path>
            <path
              class="text-gay-800 fill-current"
              d="M16 6.59V5a1 1 0 0 1 .3-.7l2-2A1 1 0 0 1 20 3v1h1a1 1 0 0 1 .7 1.7l-2 2a1 1 0 0 1-.7.3h-1.59l-4.7 4.7a1 1 0 0 1-1.42-1.4L16 6.58z"
            ></path>
          </svg>
          Portfolio</nuxt-link
        >
        <nuxt-link
          to="/blog"
          class="
            px-4
            py-2
            rounded-lg
            hover:bg-gray-200
            sm:mt-0
            sm:ml-2
            w-full
            sm:w-auto
            inline-flex
            sm:flex-row
            items-center
            flex-row-reverse
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 ml-2 sm:mr-2 icon-announcement"
          >
            <path
              class="text-gray-500 fill-current"
              d="M5.04 14.3l-.1-.3H4a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1a1 1 0 0 1 1-1h6.34a3 3 0 0 0 2.12-.88l1.66-1.66A5 5 0 0 1 19.66 3H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1.34a5 5 0 0 1-3.54-1.46l-1.66-1.66a3 3 0 0 0-2.12-.88H11v5a1 1 0 0 1-1 1H8a1 1 0 0 1-.95-.68l-2-5.98a1 1 0 0 1 0-.05z"
            ></path>
            <rect
              width="8"
              height="10"
              x="4"
              y="6"
              class="text-gay-800 fill-current"
              rx="1"
            ></rect>
          </svg>
          Blog</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="
            px-4
            py-2
            rounded-lg
            border
            hover:bg-gray-200
            sm:mt-0
            sm:ml-2
            w-full
            sm:w-auto
            inline-flex
            sm:flex-row
            items-center
            flex-row-reverse
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 ml-2 sm:mr-2 icon-launch"
          >
            <path
              class="secondary"
              d="M6.64 6.46h7.07a1 1 0 0 1 .7 1.71l-4.24 4.24a1 1 0 0 1-.7.3H2.38A1 1 0 0 1 1.7 11l4.24-4.24a1 1 0 0 1 .7-.3zm10.9 10.9a1 1 0 0 1-.3.71L13 22.31a1 1 0 0 1-1.7-.7v-7.07a1 1 0 0 1 .29-.71l4.24-4.24a1 1 0 0 1 1.7.7v7.07z"
            ></path>
            <path
              class="text-gray-500 fill-current"
              d="M5.78 13.19a15.94 15.94 0 0 1 14.39-10.4 1 1 0 0 1 1.04 1.04 15.94 15.94 0 0 1-10.4 14.39 1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16zm.59 2.57a16.2 16.2 0 0 1 1.87 1.87 1 1 0 0 1-.47 1.6c-.79.25-1.6.42-2.4.54a1 1 0 0 1-1.14-1.13c.12-.82.3-1.62.53-2.41a1 1 0 0 1 1.6-.47z"
            ></path>
            <path
              class="text-gay-800 fill-current"
              d="M7.23 10.26a19.04 19.04 0 0 1 6.5 6.51c-.92.58-1.9 1.07-2.92 1.45a1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16c.38-1.03.87-2 1.45-2.93zM17.62 3.1c.84-.17 1.7-.27 2.55-.3a1 1 0 0 1 1.04 1.04c-.03.86-.13 1.71-.3 2.55a19.2 19.2 0 0 0-3.29-3.29zm-3.91 7.2a2 2 0 1 1 2.83-2.83 2 2 0 0 1-2.83 2.83z"
            ></path>
          </svg>
          Contact</nuxt-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    $route() {
      this.isOpen = false
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
