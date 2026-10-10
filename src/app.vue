<template>
  <BackgroundTreeBackground />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();

function scrollPageToTop() {
  document.querySelector('.app-scroll')?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto',
  });
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

watch(() => route.fullPath, scrollPageToTop, { flush: 'sync' });
</script>
