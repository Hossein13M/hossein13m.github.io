<script setup lang="ts">
import type { Podcast } from '@/types/portfolio';

defineProps<{
  podcast: Podcast;
}>();
</script>

<template>
  <UiCard class="podcast-card flex flex-col gap-4 sm:flex-row">
    <img
      :src="podcast.image"
      :alt="podcast.organization"
      width="120"
      height="120"
      class="h-28 w-28 shrink-0 rounded-lg object-cover"
      loading="lazy"
    />
    <div>
      <p class="text-sm opacity-60">{{ podcast.organization }}</p>
      <h3 class="text-lg font-semibold mt-1">
        <a
          :href="podcast.generalLink"
          target="_blank"
          rel="noopener noreferrer"
          class="podcast-card-title-link"
        >
          {{ podcast.subject }}
        </a>
      </h3>
      <p class="mt-2 text-sm opacity-80">{{ podcast.description }}</p>
      <div class="mt-4 flex flex-wrap gap-3">
        <a
          v-for="link in podcast.links"
          :key="link.name"
          :href="link.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-opacity hover:opacity-100 opacity-70"
          style="border-color: var(--color-border)"
        >
          <img :src="link.icon" :alt="link.name" width="20" height="20" />
          {{ link.name }}
        </a>
      </div>
    </div>
  </UiCard>
</template>

<style scoped>
.podcast-card-title-link {
  color: var(--color-fg-deeper);
  text-decoration: none;
  border-bottom: none;
}

.podcast-card-title-link:hover {
  opacity: 0.85;
}
</style>
