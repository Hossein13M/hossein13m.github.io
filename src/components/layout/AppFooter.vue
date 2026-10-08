<script setup lang="ts">
import { site } from '@/data/site';

const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="app-footer mt-auto shrink-0 border-t py-4 text-center text-sm"
    style="border-color: var(--color-border)"
  >
    <p>
      © {{ year }}
      <a :href="site.url">{{ site.name }}</a>
    </p>
  </footer>
</template>

<style scoped>
.app-footer {
  color: var(--color-fg);
}

.app-footer a {
  color: inherit;
  transition: color 0.2s ease;
}

.app-footer a:hover {
  color: var(--color-fg);
}
</style>
