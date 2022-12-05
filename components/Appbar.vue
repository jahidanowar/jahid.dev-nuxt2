<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <nuxt-link to="/">
          <logo class="h-8"></logo>
        </nuxt-link>
        <div class="sm:hidden">
          <button type="button" class="nav-toggle" @click="isOpen = !isOpen">
            <svg
              v-if="isOpen"
              :class="{ '': isOpen }"
              class="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
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
        :class="
          isOpen
            ? 'visible opacity-100 translate-y-0 h-auto'
            : 'opacity-0 sm:opacity-100 sm:visible sm:h-auto sm:translate-y-0 invisible translate-y-10 h-0'
        "
        class="navbar"
      >
        <nuxt-link to="/service/" class="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-4 ml-2 sm:mr-2 icon-trending-up"
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
        <nuxt-link to="/portfolio/" class="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-4 ml-2 sm:mr-2 icon-target"
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
        <nuxt-link to="/blog/" class="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-4 ml-2 sm:mr-2 icon-announcement"
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
        <color-switcher
          class="mb-2 sm:my-0 sm:ml-4 py-2 w-full text-right flex justify-end"
        />
        <nuxt-link
          to="/contact/"
          class="btn btn-primary flex justify-center sm:ml-4 border border-primary-400 py-2 shadow dark:shadow mb-5 sm:mb-0 active:text-primary-50 text-primary-50"
          >Contact</nuxt-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
import Logo from './atoms/Logo.vue'
import ColorSwitcher from './atoms/ColorSwitcher.vue'
export default {
  components: { Logo, ColorSwitcher },
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
