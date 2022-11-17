<script lang="ts" setup>
defineProps<{
  items: string[];
}>();

const ticker = ref(0);

const tickerInterval = setInterval(() => {
  ticker.value++;
}, 1000);

onBeforeUnmount(() => {
  clearInterval(tickerInterval);
});
</script>
