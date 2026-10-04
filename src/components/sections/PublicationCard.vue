<script setup lang="ts">
import type { Article } from '@/types/portfolio';

defineProps<{
  article: Article;
}>();
</script>

<template>
  <a
    :href="article.url"
    target="_blank"
    rel="noopener noreferrer"
    class="publication-card"
  >
    <div class="publication-card-media">
      <img
        :src="article.image"
        :alt="article.title"
        width="400"
        height="200"
        class="publication-card-image"
        loading="lazy"
      />
    </div>
    <div class="publication-card-body">
      <h3 class="publication-card-title">
        {{ article.title }}
      </h3>
      <p class="publication-card-summary">
        {{ article.summary }}
      </p>
    </div>
  </a>
</template>

<style scoped>
.publication-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  background: transparent;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease;
  height: 100%;
}

.publication-card:hover {
  background: color-mix(in srgb, var(--color-fg) 5%, transparent);
  text-decoration: none;
}

.publication-card-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.375;
  text-decoration: none;
  min-height: 2lh;
  display: flex;
  align-items: center;
}

.publication-card-media {
  height: 14.5rem;
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
}

.publication-card-image {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.95;
  transform: scale(1);
  transform-origin: center;
  transition:
    transform 0.75s cubic-bezier(0.22, 0.61, 0.36, 1),
    opacity 0.5s ease;
}

.publication-card:hover .publication-card-image {
  opacity: 1;
  transform: scale(1.22);
}

@media (prefers-reduced-motion: reduce) {
  .publication-card-image {
    transition: opacity 0.2s ease;
  }

  .publication-card:hover .publication-card-image {
    transform: none;
  }
}

.publication-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.25rem 1.25rem 1.5rem;
  gap: 0.75rem;
}

.publication-card-summary {
  flex: 1;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.55;
  opacity: 0.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
