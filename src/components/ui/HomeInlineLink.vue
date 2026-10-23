<script setup lang="ts">
const props = defineProps<{
  href: string;
  label: string;
  icon: string;
  mono?: boolean;
  external?: boolean;
}>();

const isExternal = computed(
  () => props.external ?? /^https?:\/\//.test(props.href)
);
</script>

<template>
  <a
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="home-inline-link"
    :class="{ 'home-email-mono': mono }"
  >
    <img
      :src="icon"
      alt=""
      width="16"
      height="16"
      class="home-inline-link-icon"
      aria-hidden="true"
    />
    {{ label }}
  </a>
</template>
