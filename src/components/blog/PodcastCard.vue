<script setup lang="ts">
import type { Podcast } from '@/types/podcast';

defineProps<{
  podcast: Podcast;
}>();
</script>

<template>
  <div
    class="podcast-card rounded-xl border p-5"
    style="
      border-color: var(--color-border);
      background: var(--card-surface, var(--color-card));
    "
  >
    <img
      :src="podcast.image"
      :alt="podcast.organization"
      width="120"
      height="120"
      class="podcast-cover"
      loading="lazy"
    />
    <div>
      <p class="podcast-org">{{ podcast.organization }}</p>
      <h3 class="text-lg font-semibold mt-1">
        <a
          :href="podcast.url"
          target="_blank"
          rel="noopener noreferrer"
          class="podcast-card-title-link"
        >
          {{ podcast.title }}
        </a>
      </h3>
      <p class="podcast-description">{{ podcast.description }}</p>
      <div class="podcast-links">
        <a
          v-for="link in podcast.links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="podcast-platform"
        >
          <img :src="link.icon" :alt="link.name" width="28" height="28" />
          <span class="podcast-platform-label">{{ link.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.podcast-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  --card-surface: transparent;
  transition: background-color 0.2s ease;
}

.podcast-card:hover {
  --card-surface: color-mix(in srgb, var(--color-fg) 5%, transparent);
}

.podcast-cover {
  height: 7rem;
  width: 7rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  object-fit: cover;
  transition: transform 0.75s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.podcast-card:hover .podcast-cover {
  transform: scale(1.15);
}

.podcast-org {
  font-size: 0.875rem;
  opacity: 0.6;
}

.podcast-description {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  opacity: 0.8;
}

.podcast-card-title-link {
  color: var(--color-fg-deeper);
  border-bottom: none;
}

.podcast-card-title-link:hover {
  opacity: 0.85;
}

.podcast-links {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1rem;
  width: 100%;
}

.podcast-platform {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  font-size: 0.875rem;
  opacity: 0.85;
  color: inherit;
  transition: opacity 0.2s ease;
}

.podcast-platform img {
  width: 1.75rem;
  height: 1.75rem;
  object-fit: contain;
}

.podcast-platform-label {
  display: none;
}

.podcast-platform:hover {
  opacity: 1;
}

@media (max-width: 639px) {
  .podcast-org {
    display: none;
  }
}

@media (min-width: 640px) {
  .podcast-card {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }

  .podcast-links {
    flex-wrap: wrap;
    justify-content: flex-start;
    width: auto;
    gap: 0.75rem;
  }

  .podcast-platform {
    border-radius: 0.5rem;
    background: color-mix(in srgb, var(--color-fg) 4%, transparent);
    padding: 0.375rem 0.75rem;
    opacity: 0.7;
  }

  .podcast-platform img {
    width: 1.25rem;
    height: 1.25rem;
  }

  .podcast-platform-label {
    display: inline;
  }
}
</style>
