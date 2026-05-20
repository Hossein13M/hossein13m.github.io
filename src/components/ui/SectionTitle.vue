<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  as?: 'h1' | 'h2' | 'h3';
}>();
</script>

<template>
  <header class="section-title mb-8">
    <component :is="as ?? 'h1'" class="section-title-heading">
      {{ title }}
    </component>
    <p v-if="subtitle" class="section-title-sub">
      {{ subtitle }}
    </p>
  </header>
</template>

<style scoped>
.section-title-heading {
  color: var(--color-fg-deeper);
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.section-title-sub {
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-fg-light);
}
</style>
