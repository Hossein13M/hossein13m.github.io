<script setup lang="ts">
import { mentoringLinks, socialLinks } from '@/data/home';
import { site } from '@/data/site';
import { socialIconUrl } from '@/utils/socialIcon';
</script>

<template>
  <section>
    <hr class="home-divider" />
    <div class="contact-stack">
      <div class="contact-row">
        <p>Find me on</p>
        <InlineLink
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          :label="link.label"
          :icon="link.icon"
        />
      </div>
      <div class="contact-row">
        <p>I’m mentoring at</p>
        <InlineLink
          v-for="link in mentoringLinks"
          :key="link.href"
          :href="link.href"
          :label="link.label"
          :icon="link.icon"
        />
      </div>
      <div class="contact-row">
        <p>Mail me at</p>
        <InlineLink
          :href="`mailto:${site.email}`"
          :label="site.email"
          :icon="socialIconUrl('Gmail')"
          mono
        />
      </div>
    </div>
  </section>
</template>
