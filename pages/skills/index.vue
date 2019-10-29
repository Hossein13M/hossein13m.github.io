<template>
  <div class="skills">
    <div class="skills-title pt-5">
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
    <!-- TODO: the bellow is for mobile and it is drop down! -->
    <!-- <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>
      </div>
    </div> -->
    <!-- TODO: repair the drop down first -->
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
@media (min-width: 768px) {
  .skills-title {
    display: flex;
  }
  .dropdown {
    /* display: none; */
  }
}
@media (max-width: 768px) {
  .skills-title {
    display: none;
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
