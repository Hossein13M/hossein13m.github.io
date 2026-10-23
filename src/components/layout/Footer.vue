<script setup lang="ts">
import { site } from '@/data/site';

const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="shrink-0 border-t py-4 text-center text-sm"
    style="border-color: var(--color-border)"
  >
    <p>
      © {{ year }}
      <a :href="site.url">{{ site.name }}</a>
    </p>
  </footer>
</template>
