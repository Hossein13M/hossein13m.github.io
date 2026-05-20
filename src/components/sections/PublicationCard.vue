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
    <img
      :src="article.image"
      :alt="article.title"
      width="400"
      height="200"
      class="publication-card-image"
      loading="lazy"
    />
    <div class="publication-card-body">
      <h3 class="publication-card-title">
        {{ article.title }}
      </h3>
      <p class="mt-2 flex-1 text-sm opacity-50 line-clamp-2">
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
  border-bottom: none;
  color: inherit;
  transition: background-color 0.2s ease;
  height: 100%;
}

.publication-card:hover {
  background: color-mix(in srgb, var(--color-fg) 5%, transparent);
  text-decoration: none;
  border-bottom: none;
}

.publication-card-title {
  font-weight: 600;
  line-height: 1.375;
  text-decoration: none;
}

.publication-card-image {
  height: 10rem;
  width: 100%;
  object-fit: cover;
  opacity: 0.9;
  transition: opacity 0.2s ease;
}

.publication-card:hover .publication-card-image {
  opacity: 1;
}

.publication-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
}
</style>
