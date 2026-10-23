<script setup lang="ts">
import type { SocialLink } from '@/types/social-link';

const props = defineProps<
  SocialLink & {
    mono?: boolean;
    external?: boolean;
  }
>();

const isExternal = computed(
  () => props.external ?? /^https?:\/\//.test(props.href)
);
</script>

<template>
  <a
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="inline-link"
    :class="{ 'email-mono': mono }"
  >
    <img
      :src="icon"
      alt=""
      width="16"
      height="16"
      class="inline-link-icon"
      aria-hidden="true"
    />
    {{ label }}
  </a>
</template>
