<template>
  <BackgroundTreeBackground />
  <NuxtLayout>
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
        onAfterLeave: scrollPageToTop,
        onBeforeEnter: scrollPageToTop,
      }"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
function scrollPageToTop() {
  document.querySelector('.app-scroll')?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto',
  });
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}
</script>
