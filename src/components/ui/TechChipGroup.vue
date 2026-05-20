<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<template>
  <div class="flex flex-wrap gap-2" aria-label="Technologies">
    <UiTechChip v-for="item in items" :key="item" :label="item" />
  </div>
</template>
