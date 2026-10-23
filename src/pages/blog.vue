<script setup lang="ts">
import { podcasts, publications } from '@/data/blog';

usePageMeta({
  title: 'Blog',
  description: 'Technical articles, publications, and podcast appearances.',
});
</script>

<template>
  <div class="slide-enter-content space-y-10">
    <h1 class="page-title">Blog</h1>

    <section class="space-y-4">
      <PodcastCard
        v-for="podcast in podcasts"
        :key="podcast.url"
        :podcast="podcast"
      />
    </section>

    <section>
      <div class="grid gap-x-6 gap-y-10 sm:grid-cols-2">
        <PublicationCard
          v-for="publication in publications"
          :key="publication.url"
          :article="publication"
        />
      </div>
    </section>
  </div>
</template>
