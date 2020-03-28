<template>
  <div class="page">
    <leftSideLayout class="sidebar col-xl-2 col-lg-3 col-sm-12 col-md-3" />
    <nuxt class="pages col-xl-10 col-lg-9 col-sm-12 col-md-9" />
  </div>
</template>

<style>
.sidebar {
  position: relative;
}

.sidebar::after {
  box-sizing: border-box;
  width: 100%;
  background-size: 100% 100%;
  content: '';
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
.pages {
  margin: 0 auto;
  min-height: 100vh;
}
.pages::after {
  box-sizing: border-box;
  width: 100%;
  background-size: 100% 100%;
  content: '';
  background: url(~assets/images/Background.png);
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00baba;
  color: #00baba;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #00baba;
}
.bg-success {
  color: #00baba;
  background-color: #00baba !important ;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #323a6f;
  color: #323a6f;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #323a6f;
}

@media (min-width: 768px) {
  .page {
    display: flex;
  }
}
@media (max-width: 900px) and (min-width: 400px) {
  .page {
    margin: 0 !important;
    padding: 0 !important;
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
