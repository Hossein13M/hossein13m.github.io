<script setup lang="ts">
import { site } from '@/data/site';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="shrink-0 py-4 text-center text-sm">
    <p>
      © {{ year }}
      <a :href="site.url">{{ site.name }}</a>
    </p>
  </footer>
</template>
