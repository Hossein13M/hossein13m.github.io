<script setup lang="ts">
import { findMeOnLinks } from '@/data/home';
import { site } from '@/data/site';
</script>

<template>
  <section class="home-social">
    <hr class="home-divider" />
    <div class="home-find-stack">
      <div class="home-find-row">
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
      </div>
      <div class="home-find-row">
        <p class="home-muted-label">Mail me at</p>
        <p class="home-link-row">
          <a
            :href="`mailto:${site.email}`"
            class="home-inline-link home-email-mono"
          >
            {{ site.email }}
          </a>
        </p>
      </div>
    </div>
  </section>
</template>
