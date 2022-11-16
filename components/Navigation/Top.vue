<script lang="ts" setup>
const isOpen = ref(false);
const route = useRoute();

watch(route, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="header-content">
        <NuxtLink to="/">
          <Logo class="h-8"></Logo>
        </NuxtLink>
        <div class="sm:hidden">
          <button type="button" class="navbar-toggle" @click="isOpen = !isOpen">
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
        <NuxtLink to="/service/" class="navbar-link"> Service </NuxtLink>
        <NuxtLink to="/portfolio/" class="navbar-link"> Portfolio</NuxtLink>
        <NuxtLink to="/blog/" class="navbar-link"> Blog</NuxtLink>
        <NuxtLink to="/contact/" class="navbar-link"> Contact</NuxtLink>
        <ColorSwitcher
          class="mb-2 sm:my-0 sm:ml-4 py-2 w-full text-right flex justify-end"
        />
      </nav>
    </header>
  </div>
</template>

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
