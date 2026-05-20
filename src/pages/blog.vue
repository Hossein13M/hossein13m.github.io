<script setup lang="ts">
import { articles, podcasts } from '@/data/blog';

usePageMeta({
  title: 'Blog',
  description: 'Technical articles, publications, and podcast appearances.',
});

const sortedArticles = computed(() => {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);
  return [...featured, ...rest];
});
</script>

<template>
  <div class="slide-enter-content space-y-10">
    <UiSectionTitle title="Blog" as="h1" />

    <section class="space-y-4">
      <SectionsPodcastCard
        v-for="podcast in podcasts"
        :key="podcast.generalLink"
        :podcast="podcast"
      />
    </section>

    <section>
      <div class="grid gap-4 sm:grid-cols-2">
        <SectionsPublicationCard
          v-for="article in sortedArticles"
          :key="article.url"
          :article="article"
        />
      </div>
    </section>
  </div>
</template>
