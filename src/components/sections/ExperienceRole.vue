<script setup lang="ts">
import type { JobExperience } from '@/types/portfolio';
import { formatDateRange } from '@/utils/formatDate';

defineProps<{
  role: JobExperience;
}>();
</script>

<template>
  <article class="experience-role">
    <div class="flex flex-wrap items-baseline justify-between gap-2">
      <h3 class="role-title">{{ role.jobTitle }}</h3>
      <time class="role-date font-mono">
        {{ formatDateRange(role.startDate, role.endDate) }}
      </time>
    </div>
    <p class="role-summary">
      {{ role.jobSummary }}
    </p>
    <UiTechChipGroup
      v-if="role.jobRequiredSkills.length"
      class="mt-4"
      :items="role.jobRequiredSkills"
    />
  </article>
</template>

<style scoped>
.role-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-fg-deep);
}

.role-date {
  font-size: 0.875rem;
  color: var(--color-fg-light);
}

.role-meta {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-fg-light);
}

.role-summary {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-fg);
}

.experience-role + .experience-role {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
</style>
