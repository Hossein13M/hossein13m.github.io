<template>
  <div
    class="homePage d-flex justify-content-center align-items-center m-0 text-center col-lg-10 col-sm-12"
  >
    <div>
      <div class="programmer-pic animated zoomIn mt-5">
        <img src="~assets/images/programmer.png" alt />
      </div>
      <h1 class="title d-block font-weight-light animated bounceIn">Hossein Mousavi</h1>
      <h2 class="subtitle font-weight-light pb-2">Front End Developer</h2>
      <div class="links pt-2 mb-3">
        <nuxt-link class="button--green text-decoration-none" to="/story">My Story!</nuxt-link>
        <nuxt-link class="button--grey text-decoration-none" to="/contact-me">Get In Touch With Me</nuxt-link>
        <!-- 
          TODO: the bellow code can be add for downloading my CV which currently I want to remove
          href="https://drive.google.com/file/d/1H8xRkdr3z7Ve8Vq6AsYChSnpHLHFQd3s/view?usp=sharing"
          class="button--grey text-decoration-none"
          target="blank"
          download="HosseinMousaviCV"
        -->
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
  min-height: 100vh;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}
@media (max-width: 439px) {
  .title {
    font-size: 60px;
  }
}
@media (max-width: 365px) {
  .links a {
    display: block;
    padding: 10px;
    margin: 0;
    margin-top: 20px;
  }
}
</style>