<script setup lang="ts">
import { skillRows } from '@/data/home';
</script>

<template>
  <div class="skill-rows">
    <p v-for="row in skillRows" :key="row.label" class="skill-row">
      <span class="skill-row-label">{{ row.label }}</span>
      <span class="skill-row-chips">
        <template v-for="item in row.items" :key="item.name">
          <UiTechChip
            class="skill-badge"
            :label="item.name"
            :href="item.href"
            :icon-url="item.iconUrl"
          />
        </template>
      </span>
    </p>
  </div>
</template>
