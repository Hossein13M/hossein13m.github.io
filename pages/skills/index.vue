<template>
  <div class="skills">
    <div class="skills-title pt-5">
      <button
        class="sectionChanger btn mr-5"
        @click="changeComponent('Programming')"
        :class="{ activeComponent: currentComponent === 'Programming' }"
      >
        <h1 class="mobile-size">Programming Skills</h1>
      </button>
      <button
        class="mobile-size btn mr-5"
        @click="changeComponent('Network')"
        :class="{ activeComponent: currentComponent === 'Network' }"
      >
      <!-- test -->
        <h1 class="mobile-size">Network Skills</h1>
      </button>
      <button
        class="btn mr-5"
        @click="changeComponent('Other')"
        :class="{ activeComponent: currentComponent === 'Other' }"
      >
        <h1 class="mobile-size">Other Skills</h1>
      </button>
    </div>
    <component :is="currentComponent"></component>
  </div>
</template>

<style scoped>
.skills-progressbar ul {
  list-style-type: none;
}
.skills-progressbar ul li {
  padding-bottom: 25px;
}
.activeComponent {
  color: #0b6891;
  border-bottom: 2px solid #0b6891;
}
button:focus {
  outline: none !important;
  /* TODO: fix the outline thing */
}
@media (max-width: 992px) {
  .mobile-size {
    display: flex;
    font-size: 28px;
  }
  .skills-title {
    padding-top: 20px !important;
  }
}
@media (min-width: 768px) {
  .skills-title {
    display: flex;
  }
}
@media (max-width: 350px) {
  .mobile-size {
    display: flex;
    font-size: 24px;
  }
}
</style>

<script>
import Network from '~/components/skills/network'
import Programming from '~/components/skills/programming'
import Other from '~/components/skills/other'

export default {
  components: {
    Network,
    Programming,
    Other
  },
  data() {
    return {
      currentComponent: 'Programming',
      selectedComponent: ''
    }
  },
  methods: {
    changeComponent(section) {
      this.currentComponent = section
    }
  }
}
</script>
