<template>
  <div class="skills">
    <div class="skills-progressbar mt-5">
      <div class="leftSide col-lg-6">
        <ul>
          <li>
            <span>HTML</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:85%"
              ></div>
            </div>
          </li>
          <li>
            <span>Cascading Style Sheets (CSS)</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:80%"
              ></div>
            </div>
          </li>
          <li>
            <span>Sass</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:90%"
              ></div>
            </div>
          </li>
          <li>
            <span>Bootstrap</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:75%"
              ></div>
            </div>
          </li>
          <li>
            <span>JavaScript</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:60%"
              ></div>
            </div>
          </li>
          <li>
            <span>Vue.js</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:65%"
              ></div>
            </div>
          </li>
          <li>
            <span>Nuxt.js</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:60%"
              ></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="rightSide col-lg-6">
        <ul>
          <li>
            <span>jQuery</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:40%"
              ></div>
            </div>
          </li>
          <li>
            <span>Angular 2+</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:50%"
              ></div>
            </div>
          </li>
          <li>
            <span>TypeScript</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:40%"
              ></div>
            </div>
          </li>
          <li>
            <span>Git</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:40%"
              ></div>
            </div>
          </li>
          <li>
            <span>Responsive Designing</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:60%"
              ></div>
            </div>
          </li>
          <li>
            <span>RESTful API</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:30%"
              ></div>
            </div>
          </li>
          <li>
            <span>Regular Expression (regex)</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:30%"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-progressbar ul {
  list-style-type: none;
}
.skills-progressbar ul li {
  padding-bottom: 25px;
}
@media (min-width: 768px) {
  .skills-progressbar {
    display: flex;
  }
}
</style>

<script>
export default {}
</script>
