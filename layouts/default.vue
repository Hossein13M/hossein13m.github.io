<template>
  <div class="page">
    <head>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"
      ></script>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css"
      />
    </head>
    <leftSideLayout class="sidebar  col-lg-2 col-sm-12 col-md-2" />
    <nuxt class="pages col-lg-10 col-sm-12 col-md-2" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Acme|Caveat|Fjalla+One|Kalam&display=swap');
.sidebar {
  /* display: block; */
  position: relative;
}

.sidebar::after {
  box-sizing: border-box;
  width: 100%;
  background-size: 100% 100%;
  content: '';
  background: url(~assets/images/sidebar.jpg);
  opacity: 0.9;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
/*  */
.pages {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
}
.pages::after {
  box-sizing: border-box;
  width: 100%;
  background-size: 100% 100%;
  content: '';
  background: url(~assets/images/Background.jpg);
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */

/* *,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
} */

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@media (min-width: 768px) {
  .page {
    display: flex;
  }
}
@media (max-width: 900px) and (min-width: 400px) {
  .page {
  }
}
</style>

<script>
// let's first import the left side of the website
import leftSideLayout from '~/components/leftSideComponent/leftSideLayout.vue'
export default {
  components: {
    leftSideLayout
  }
}
</script>
