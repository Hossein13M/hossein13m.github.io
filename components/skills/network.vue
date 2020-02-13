<template>
  <div class="skills">
    <div class="skills-progressbar mt-5">
      <div class="leftSide col-lg-6">
        <ul>
          <li>
            <span>Network Fundamentals</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:95%"
              ></div>
            </div>
          </li>
          <li>
            <span>Windows Server</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:85%"
              ></div>
            </div>
          </li>
          <li>
            <span>Active Directory</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:90%"
              ></div>
            </div>
          </li>
          <li>
            <span>DHCP and DNS</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:90%"
              ></div>
            </div>
          </li>
          <li>
            <span>IIS</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:95%"
              ></div>
            </div>
          </li>
          <li>
            <span>Linux</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:90%"
              ></div>
            </div>
          </li>
          <li>
            <span>Virtual Private Network (VPN)</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:65%"
              ></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="rightSide col-lg-6">
        <ul>
          <li>
            <span>RADIUS</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:50%"
              ></div>
            </div>
          </li>
          <li>
            <span>Subnetting </span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:75%"
              ></div>
            </div>
          </li>
          <li>
            <span>Virtualization (VMware)</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:35%"
              ></div>
            </div>
          </li>
          <li>
            <span>Quality of Service (QoS)</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:60%"
              ></div>
            </div>
          </li>
          <li>
            <span>WDS and WSUS</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:55%"
              ></div>
            </div>
          </li>
          <li>
            <span>SSL</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:75%"
              ></div>
            </div>
          </li>
          <li>
            <span>Bash</span>
            <div class="progress mt-2">
              <div
                class="progress-bar progress-bar-striped"
                style="width:80%"
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
