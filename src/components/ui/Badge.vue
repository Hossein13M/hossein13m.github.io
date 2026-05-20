<script setup lang="ts">
defineProps<{
  badgeClass?: string;
}>();
</script>

<template>
  <span
    class="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
    :class="badgeClass"
  >
    <slot />
  </span>
</template>
