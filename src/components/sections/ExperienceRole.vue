<script setup lang="ts">
import type { JobExperience } from '@/types/portfolio';
import { formatDateRange } from '@/utils/formatDate';

defineProps<{
  role: JobExperience;
}>();
</script>

<template>
  <article class="experience-role">
    <div class="role-heading">
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
.role-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}

.role-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--color-fg-deep);
}

.role-date {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25;
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
