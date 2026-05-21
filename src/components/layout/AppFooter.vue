<script setup lang="ts">
import { site } from '@/data/site';

const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="mt-16 border-t py-8 text-center text-sm opacity-60"
    style="border-color: var(--color-border)"
  >
    <p>
      © {{ year }}
      <a :href="site.url" class="hover:opacity-100">{{ site.name }}</a>
    </p>
  </footer>
</template>
