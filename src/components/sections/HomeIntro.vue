<script setup lang="ts">
import { site } from '@/data/site';
import { heroSummary } from '@/data/profile';

const [firstName, ...lastNameParts] = site.name.split(' ');
const lastName = lastNameParts.join(' ');
</script>

<template>
  <section class="prose-home">
    <h1 class="prose-home-title">
      {{ firstName }}
      <span class="prose-home-lastname">{{ lastName }}</span>
    </h1>

    <p class="prose-home-lead">{{ heroSummary }}</p>

    <SectionsHomeSkillRows />

    <SectionsHomeFindMe />
  </section>
</template>
