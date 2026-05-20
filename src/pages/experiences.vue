<script setup lang="ts">
import { companies, getExperiencesForCompany } from '@/data/experience';

usePageMeta({
  title: 'Experiences',
  description:
    'Professional work experience at AIHR, Eurowings, Alibaba Travels, Tapsell, XEPOS, and MFT.',
});

const companiesWithRoles = computed(() =>
  companies
    .map((company) => ({
      company,
      roles: getExperiencesForCompany(company.companyId),
    }))
    .filter((entry) => entry.roles.length > 0)
);
</script>

<template>
  <div class="slide-enter-content space-y-6">
    <UiSectionTitle title="Experiences" as="h1" />

    <SectionsExperienceCompanyCard
      v-for="{ company, roles } in companiesWithRoles"
      :key="company.companyId"
      :company="company"
      :roles="roles"
    />
  </div>
</template>
