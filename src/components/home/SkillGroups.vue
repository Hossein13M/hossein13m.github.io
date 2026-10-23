<script setup lang="ts">
import { skillGroups } from '@/data/home';
</script>

<template>
  <div class="skill-groups">
    <p v-for="row in skillGroups" :key="row.label" class="skill-group">
      <span class="skill-group-label">{{ row.label }}</span>
      <span>
        <TechChip
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
