<script setup lang="ts">
import { site } from '@/data/site';
</script>

<template>
  <NuxtLink
    to="/"
    class="app-logo-link select-none outline-none"
    :aria-label="`${site.name} — Home`"
  >
    Home
  </NuxtLink>
</template>

<style scoped>
.app-logo-link {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  color: var(--color-fg);
  text-decoration: none;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.app-logo-link:hover {
  opacity: 1;
}
</style>
