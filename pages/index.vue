<template>
  <div class="homePage col-lg-10 col-sm-12">
    <div>
      <div class="programmer-pic">
        <img src="~assets/images/programmer.png" alt="" />
      </div>
      <h1 class="title">
        Hossein Mousavi
      </h1>
      <h2 class="subtitle">
        Hossein Mousavi Portfolio
      </h2>
      <div class="links">
        <a
          href="https://github.com/hossein13m?tab=repositories"
          target="_blank"
          class="button--green text-decoration-none"
        >
          My Projects
        </a>
        <a
          href="~assets/images/programmer.png"
          target="_blank"
          class="button--grey text-decoration-none"
          download
        >
          Download My CV
          <!-- TODO: I need to fix downloading my CV -->
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.homePage {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
