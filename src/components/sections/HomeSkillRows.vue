<script setup lang="ts">
import { skillRows } from '@/data/home';
</script>

<template>
  <div class="skill-rows">
    <p v-for="row in skillRows" :key="row.label" class="skill-row">
      <span class="skill-row-label">{{ row.label }}</span>
      <span>
        <UiTechChip
          v-for="item in row.items"
          :key="item.name"
          :label="item.name"
          :href="item.href"
          :icon-url="item.iconUrl"
        />
      </span>
    </p>
  </div>
</template>
