<script setup lang="ts">
const props = defineProps<{
  to?: string;
  href?: string;
  external?: boolean;
}>();

const isExternal = computed(
  () => props.external ?? (!!props.href && props.href.startsWith('http'))
);
</script>

<template>
  <NuxtLink
    v-if="to && !isExternal"
    :to="to"
    class="transition-opacity hover:opacity-100 opacity-80"
  >
    <slot />
  </NuxtLink>
  <a
    v-else
    :href="href ?? to"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="transition-opacity hover:opacity-100 opacity-80"
  >
    <slot />
  </a>
</template>
