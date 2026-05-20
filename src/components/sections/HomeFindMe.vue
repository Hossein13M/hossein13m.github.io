<script setup lang="ts">
import { findMeOnLinks } from '@/data/home';
import { site } from '@/data/site';
</script>

<template>
  <section class="home-social">
    <hr class="home-divider" />
    <p class="home-muted-label">Find me on</p>
    <p class="home-link-row">
      <a
        v-for="link in findMeOnLinks"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="home-inline-link"
      >
        <img
          :src="link.icon"
          alt=""
          width="16"
          height="16"
          class="home-inline-link-icon"
          aria-hidden="true"
        />
        {{ link.label }}
      </a>
    </p>
    <p class="home-email">
      Or mail me at
      <a
        :href="`mailto:${site.email}`"
        class="home-inline-link home-email-mono"
      >
        {{ site.email }}
      </a>
    </p>
  </section>
</template>
