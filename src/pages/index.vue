<script setup lang="ts">
// Keep the site title (no "Home —" prefix) so shared link previews stay clean.
usePageMeta();
usePersonJsonLd();
</script>

<template>
  <div class="slide-enter-content">
    <SectionsHomeIntro />
  </div>
</template>
