<template>
  <div class="homePage col-lg-10 col-sm-12">
    <div>
      <div class="programmer-pic animated zoomIn mt-5">
        <img src="~assets/images/programmer.png" alt="" />
      </div>
      <h1 class="title animated bounceIn">
        Hossein Mousavi
      </h1>
      <h2 class="subtitle">
        Front End Developer
      </h2>
      <div class="links mb-3">
        <nuxt-link class="button--green text-decoration-none" to="/story"
          >My Story!</nuxt-link
        >
        <a
          href="https://files.jjcloudservices.com/files/uploads/documents/03a94e14-f529-11e9-a5ad-d6b790452c1a_e1250417-6908-4ca3-8c67-169bedac8d19.pdf"
          class="button--grey text-decoration-none"
          target="blank"
          download="HosseinMousaviCV"
        >
          Download My CV
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
