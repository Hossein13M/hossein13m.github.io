<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  imgClass?: string;
}>();
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    loading="lazy"
    decoding="async"
    :class="imgClass"
  />
</template>
