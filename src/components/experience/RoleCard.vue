<script setup lang="ts">
import type { Role } from '@/types/role';
import { formatDateRange } from '@/utils/formatDate';

defineProps<{
  role: Role;
}>();
</script>

<template>
  <article class="experience-role">
    <div class="role-heading">
      <h3 class="role-title">{{ role.title }}</h3>
      <time class="role-date font-mono">
        {{ formatDateRange(role.startDate, role.endDate) }}
      </time>
    </div>
    <p class="role-summary">
      {{ role.summary }}
    </p>
    <div
      v-if="role.skills.length"
      class="role-skills flex flex-wrap gap-2"
      aria-label="Technologies"
    >
      <TechChip v-for="skill in role.skills" :key="skill" :label="skill" />
    </div>
  </article>
</template>

<style scoped>
.role-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}

.role-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-fg-deep);
}

.role-date {
  font-size: 0.875rem;
  line-height: 1.25;
  color: var(--color-fg-light);
}

.role-summary {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.75;
  color: color-mix(in srgb, var(--color-fg) 58%, var(--color-fg-light));
}

.role-skills {
  margin-top: 0.85rem;
  padding-top: 0.85rem;
  border-top: 1px solid color-mix(in srgb, var(--color-fg) 8%, transparent);
}

.experience-role + .experience-role {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

@media (max-width: 639px) {
  .role-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .role-date {
    font-size: 0.75rem;
  }

  .role-summary {
    font-size: 0.875rem;
    line-height: 1.65;
  }

  :deep(.tech-chip) {
    font-size: 0.75rem;
    padding: 0.15rem 0.38rem;
    gap: 0.2rem;
  }
}
</style>
