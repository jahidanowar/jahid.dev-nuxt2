<template>
  <div class="shadow-xs">
    <header
      class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 container mx-auto"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <nuxt-link to="/">
          <img class="h-10" src="/img/jahid-anowar-logo.svg" alt="Workcation" />
        </nuxt-link>
        <div class="sm:hidden">
          <button
            type="button"
            class="block foxus:text-primary focus:outline-none focus:bg-gray-200 p-2 rounded-md"
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
        class="px-2 pt-2 pb-4 sm:flex sm:p-0 bg-gray-100 sm:bg-transparent"
      >
        <nuxt-link
          to="/service"
          class="mt-1 px-2 py-1 rounded text-lg hover:bg-gray-200 sm:mt-0 sm:ml-2 flex items-center"
          >Service
          <svg class="h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </nuxt-link>
        <nuxt-link
          to="/portfolio"
          class="mt-1 block px-2 py-1 rounded text-lg hover:bg-gray-200 sm:mt-0 sm:ml-2"
          >Portfolio</nuxt-link
        >
        <nuxt-link
          to="/blog"
          class="mt-1 block px-2 py-1 rounded text-lg hover:bg-gray-200 sm:mt-0 sm:ml-2"
          >Blog</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="mt-1 block px-2 py-1 rounded text-lg hover:bg-gray-200 sm:mt-0 sm:ml-2"
          >Contact</nuxt-link
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
