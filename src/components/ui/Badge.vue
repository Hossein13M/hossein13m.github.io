<script setup lang="ts">
defineProps<{
  badgeClass?: string;
}>();
</script>

<template>
  <span
    class="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium"
    style="color: var(--color-fg-deeper)"
    :class="badgeClass"
  >
    <slot />
  </span>
</template>
