<script setup lang="ts">
import { articles, podcasts } from '@/data/blog';

usePageMeta({
  title: 'Blog',
  description: 'Technical articles, publications, and podcast appearances.',
});
</script>

<template>
  <div class="slide-enter-content space-y-10">
    <h1 class="page-title">Blog</h1>

    <section class="space-y-4">
      <SectionsPodcastCard
        v-for="podcast in podcasts"
        :key="podcast.generalLink"
        :podcast="podcast"
      />
    </section>

    <section>
      <div class="grid gap-x-6 gap-y-10 sm:grid-cols-2">
        <SectionsPublicationCard
          v-for="article in articles"
          :key="article.url"
          :article="article"
        />
      </div>
    </section>
  </div>
</template>
