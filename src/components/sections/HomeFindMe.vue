<script setup lang="ts">
import { findMeOnLinks } from '@/data/home';
import { site } from '@/data/site';
</script>

<template>
  <section>
    <hr class="home-divider" />
    <div class="home-find-stack">
      <div class="home-find-row">
        <p>Find me on</p>
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
      </div>
      <div class="home-find-row">
        <p>Mail me at</p>
        <a
          :href="`mailto:${site.email}`"
          class="home-inline-link home-email-mono"
        >
          {{ site.email }}
        </a>
      </div>
    </div>
  </section>
</template>
