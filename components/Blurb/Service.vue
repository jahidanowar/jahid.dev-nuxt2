<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="p-6 rounded-lg">
    <div class="inline-flex items-center justify-center rounded-full mb-4">
      <slot></slot>
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
      {{ title }}
    </h2>
    <p class="leading-relaxed text-base">
      {{ description }}
    </p>
  </div>
</template>
