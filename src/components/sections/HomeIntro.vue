<script setup lang="ts">
import { homeIntroduction } from '@/data/home';
import { site } from '@/data/site';

const [firstName, ...lastNameParts] = site.name.split(' ');
const lastName = lastNameParts.join(' ');
</script>

<template>
  <section>
    <h1>
      {{ firstName }}
      <span class="prose-home-lastname">{{ lastName }}</span>
    </h1>

    <p class="prose-home-lead">{{ homeIntroduction }}</p>

    <SectionsHomeSkillRows />

    <SectionsHomeFindMe />
  </section>
</template>
