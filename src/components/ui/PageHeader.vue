<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <header class="mb-10">
    <h1 class="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
      {{ title }}
    </h1>
    <p
      v-if="subtitle"
      class="mt-2 text-lg opacity-70"
      style="color: var(--color-muted)"
    >
      {{ subtitle }}
    </p>
  </header>
</template>
