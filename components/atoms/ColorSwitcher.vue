<template>
  <button type="button" class="relative group">
    <div>
      <svg
        v-if="$colorMode.value === 'light'"
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
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
      <svg
        v-else
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
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
      <ul
        class="scale-0 group-hover:scale-100 transition-all duration-100 ease-in-out absolute z-50 bottom-full sm:bottom-auto right-0 sm:top-10 sm:-right-10 w-36 cursor-pointer rounded-lg p-4 bg-white dark:bg-gray-800 border dark:border-gray-600 sm:shadow-lg"
      >
        <li
          class="flex items-center w-full h-ful mb-4"
          :class="{ 'text-primary-500': $colorMode.preference === 'light' }"
          @click="$colorMode.preference = 'light'"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          Light
        </li>
        <li
          class="flex items-center w-full h-full mb-4"
          :class="{ 'text-primary-500': $colorMode.preference === 'dark' }"
          @click="$colorMode.preference = 'dark'"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
          Dark
        </li>
        <li
          class="flex items-center w-full h-full"
          :class="{ 'text-primary-500': $colorMode.preference === 'system' }"
          @click="$colorMode.preference = 'system'"
        >
          <svg
            class="w-6 h-6 mr-2"
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
          System
        </li>
      </ul>
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDark: null
    }
  },
  computed: {
    colorMode() {
      return this.$colorMode.value
    }
  },
  mounted() {
    this.isDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.watchColorChanges)
  },
  methods: {
    watchColorChanges(e) {
      console.log(e)
      this.isDark = e.matches
    }
  }
}
</script>

<style></style>
