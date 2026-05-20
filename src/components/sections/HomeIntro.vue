<script setup lang="ts">
import { site } from '@/data/site';
import { heroSummary } from '@/data/profile';
</script>

<template>
  <section class="prose-home">
    <h1 class="prose-home-title">{{ site.name }}</h1>

    <p class="prose-home-lead">{{ heroSummary }}</p>

    <SectionsHomeSkillRows />

    <SectionsHomeFindMe />
  </section>
</template>
