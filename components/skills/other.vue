<template>
  <div class="skills">
    <div class="skills-progressbar mt-5">
      <div class="ul-padd-mobile-remove leftSide col-lg-6">
        <ul>
          <li>
            <span>Team Leadership</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:85%"></div>
            </div>
          </li>

          <li>
            <span>Conflict Resolution</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:70%"></div>
            </div>
          </li>

          <li>
            <span>Adobe Photoshop</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:60%"></div>
            </div>
          </li>
          <li>
            <span>Task Management</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:90%"></div>
            </div>
          </li>
          <li>
            <span>Time Management</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:60%"></div>
            </div>
          </li>
          <li>
            <span>Adaptability</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:60%"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="ul-padd-mobile-remove rightSide col-lg-6">
        <ul>
          <li>
            <span>Teamwork</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:80%"></div>
            </div>
          </li>
          <li>
            <span>IT Solutions</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:75%"></div>
            </div>
          </li>

          <li>
            <span>SQL Server</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:40%"></div>
            </div>
          </li>
          <li>
            <span>Agile Methodology (Scrum)</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:85%"></div>
            </div>
          </li>
          <li>
            <span>Documentation</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:80%"></div>
            </div>
          </li>

          <li>
            <span>Creativity</span>
            <div class="progress mt-2">
              <div class="progress-bar progress-bar-striped bg-success" style="width:55%"></div>
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
@media (max-width: 768px) {
  .ul-padd-mobile-remove ul {
    padding-left: 0;
  }
}
</style>

<script>
export default {}
</script>
