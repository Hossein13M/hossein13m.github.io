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
    <div class="company-top">
      <div class="company-logo">
        <img
          :src="imgSrc"
          :alt="`${company.name} logo`"
          width="48"
          height="48"
          class="company-logo-img"
          loading="lazy"
        />
      </div>
      <div class="company-copy">
        <div class="company-heading">
          <h2 class="company-name">
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
          <p class="company-meta">
            {{ company.industry }} · {{ company.location }}
          </p>
        </div>
        <p class="company-description">
          {{ company.description }}
        </p>
      </div>
    </div>

    <div class="company-roles">
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
  padding: 1.375rem;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
  background: transparent;
  transition: background-color 0.2s ease;
}

.experience-card:hover {
  background: color-mix(in srgb, var(--color-fg) 5%, transparent);
}

.company-top {
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr);
  grid-template-areas:
    'logo heading'
    'description description';
  column-gap: 1rem;
  row-gap: 0.35rem;
  align-items: start;
}

.company-logo {
  grid-area: logo;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background: color-mix(in srgb, var(--color-fg) 4%, transparent);
}

.company-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.25rem;
  transition: transform 0.75s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.experience-card:hover .company-logo-img {
  transform: scale(1.15);
}

.company-copy {
  display: contents;
}

.company-heading {
  grid-area: heading;
  min-width: 0;
}

.company-name {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25;
}

.company-meta {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  opacity: 0.5;
}

@media (max-width: 639px) {
  .company-meta {
    font-size: 0.75rem;
  }
}

.company-description {
  grid-area: description;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.625;
  opacity: 0.7;
}

.company-roles {
  margin-top: 1.25rem;
}

@media (max-width: 639px) {
  .company-description {
    font-size: 0.75rem;
    line-height: 1.5;
  }
}

@media (min-width: 640px) {
  .experience-card {
    padding: 1.375rem;
  }

  .company-roles {
    margin-top: 1.5rem;
  }

  .company-top {
    display: flex;
    align-items: stretch;
    column-gap: 1.25rem;
    row-gap: 0;
  }

  .company-logo {
    flex: 0 0 7.5rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  .company-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    min-width: 0;
    min-height: 7.5rem;
  }

  .company-heading {
    grid-area: unset;
  }

  .company-description {
    grid-area: unset;
    margin-top: 0.5rem;
  }
}
</style>
