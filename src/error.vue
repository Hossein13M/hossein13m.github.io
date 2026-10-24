<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number;
    message: string;
  };
}>();

usePageMeta({
  title: props.error.statusCode === 404 ? 'Not Found' : 'Error',
  index: false,
});
</script>

<template>
  <div class="error-page">
    <TreeBackground />
    <main class="prose-site error-main">
      <h1>You have been lost!</h1>
      <a href="/">Go home</a>
    </main>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100dvh;
}

.error-main {
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 2.5rem 1.5rem;
  text-align: center;
}

.error-main h1 {
  margin: 0;
}
</style>
