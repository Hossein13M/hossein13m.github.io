<script setup lang="ts">
import { companies, getRolesForCompany } from '@/data/experience';

usePageMeta({
  title: 'Experiences',
  description:
    'Work history from network infrastructure and frontend engineering to Senior DevOps at Nationale Nederlanden, including AIHR, Eurowings, and Alibaba Travels.',
});

const companiesWithRoles = computed(() =>
  companies
    .map((company) => ({
      company,
      roles: getRolesForCompany(company.id),
    }))
    .filter((entry) => entry.roles.length > 0)
);
</script>

<template>
  <div class="slide-enter-content space-y-6">
    <h1 class="page-title">Experiences</h1>

    <CompanyCard
      v-for="{ company, roles } in companiesWithRoles"
      :key="company.id"
      :company="company"
      :roles="roles"
    />
  </div>
</template>
