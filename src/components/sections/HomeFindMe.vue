<script setup lang="ts">
import { findMeOnLinks, mentoringLinks } from '@/data/home';
import { site } from '@/data/site';
import { socialIconPath } from '@/utils/socialIcon';
</script>

<template>
  <section>
    <hr class="home-divider" />
    <div class="home-find-stack">
      <div class="home-find-row">
        <p>Find me on</p>
        <UiHomeInlineLink
          v-for="link in findMeOnLinks"
          :key="link.url"
          :href="link.url"
          :label="link.label"
          :icon="link.icon"
        />
      </div>
      <div class="home-find-row">
        <p>I’m mentoring at</p>
        <UiHomeInlineLink
          v-for="link in mentoringLinks"
          :key="link.url"
          :href="link.url"
          :label="link.label"
          :icon="link.icon"
        />
      </div>
      <div class="home-find-row">
        <p>Mail me at</p>
        <UiHomeInlineLink
          :href="`mailto:${site.email}`"
          :label="site.email"
          :icon="socialIconPath('Gmail')"
          mono
        />
      </div>
    </div>
  </section>
</template>
