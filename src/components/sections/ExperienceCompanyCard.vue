<script setup lang="ts">
import type { Company, JobExperience } from '@/types/portfolio';
import { companyLogoSrc } from '@/utils/companyLogo';

const props = defineProps<{
  company: Company;
  roles: JobExperience[];
}>();

const imgSrc = computed(() => companyLogoSrc(props.company.logo));
</script>

<template>
  <article class="experience-card slide-enter-item">
    <div class="flex gap-4 sm:gap-5">
      <div
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border p-2 sm:h-16 sm:w-16"
        style="
          border-color: var(--color-border);
          background: color-mix(in srgb, var(--color-fg) 4%, transparent);
        "
      >
        <img
          :src="imgSrc"
          :alt="`${company.name} logo`"
          width="48"
          height="48"
          class="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <div class="min-w-0 flex-1">
        <h2 class="text-xl font-semibold leading-tight">
          <a
            v-if="company.website"
            :href="company.website"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:opacity-100 opacity-90 transition-opacity"
          >
            {{ company.name }}
          </a>
          <span v-else>{{ company.name }}</span>
        </h2>
        <p class="mt-1 text-sm opacity-50">
          {{ company.industry }} · {{ company.location }}
        </p>
        <p class="mt-2 text-sm opacity-70 leading-relaxed">
          {{ company.description }}
        </p>
      </div>
    </div>

    <div class="mt-6 space-y-0">
      <SectionsExperienceRole
        v-for="role in roles"
        :key="`${role.jobTitle}-${role.startDate}`"
        :role="role"
      />
    </div>
  </article>
</template>

<style scoped>
.experience-card {
  padding: 1.25rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-card) 90%, transparent);
  transition: background-color 0.2s ease;
}

.experience-card:hover {
  background: color-mix(in srgb, var(--color-fg) 3%, var(--color-card));
}
</style>
