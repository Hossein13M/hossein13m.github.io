<template>
  <div class="skills">
    <div class="skills-title d-flex mt-5">
      <button
        class="sectionChanger btn mr-5"
        @click="changeComponent('Programming')"
        :class="{ activeComponent: currentComponent === 'Programming' }"
      >
        <h1>Programming Skills</h1>
      </button>
      <button
        class="btn mr-5"
        @click="changeComponent('Network')"
        :class="{ activeComponent: currentComponent === 'Network' }"
      >
        <h1>Network Skills</h1>
      </button>
      <button
        class="btn mr-5"
        @click="changeComponent('Other')"
        :class="{ activeComponent: currentComponent === 'Other' }"
      >
        <h1>Other Skills</h1>
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
  outline: none;
  /* TODO: fix the outline thing */
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
