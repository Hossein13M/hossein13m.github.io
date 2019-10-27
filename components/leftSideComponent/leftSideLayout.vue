<template>
  <div class="leftSideLayout col-lg-2 col-sm-12">
    <div class="leftSideWrapper col-12 d-flex flex-column">
      <div class="top-sidebar mb-5">
        <div class="profilePic d-flex justify-content-center mt-5">
          <img
            src="/personalPicture.png"
            alt="The Image is not available"
            class="rounded-circle"
          />
        </div>
        <div class="name text-center justify-content-center mt-4 mb-4">
          <a href="/" class="text-decoration-none">
            <h1>Hossein Mousavi</h1>
          </a>
          <p class="d-flex justify-content-center">Front End Developer</p>
          <hr />
        </div>
        <div class="sidebarLinks d-flex justify-content-center mt-4 mb-5">
          <ul
            class=" d-flex justify-content-center flex-column text-center m-0 p-0"
          >
            <li>
              <nuxt-link to="/" class="text-decoration-none"
                ><span>Home</span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/skills" class="text-decoration-none"
                ><span>Skills</span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/contact-me" class="text-decoration-none"
                ><span>Contact Me</span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/about   " class="text-decoration-none"
                ><span>About</span></nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="socialIcons d-flex justify-content-center mt-5">
          <p>here come the social icons</p>
        </div>
      </div>
      <div class="bottom-sidebar align-self-end mt-5">
        <div class="copyright mt-5">
          <hr />
          <p>
            © 2019 Hossein Mousavi. All rights reserved.
          </p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Acme|Caveat|Fjalla+One|Kalam&display=swap');
.leftSideLayout {
  display: block;
  position: relative;
}
.leftSideLayout::after {
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
.leftSideLayout p {
  color: #dcdcda;
  font-family: 'Acme', sans-serif;
}
.leftSideLayout span {
  color: #dcdcda;
  font-family: 'Kalam', cursive;
}
.sidebarLinks ul {
  list-style-type: none;
}
.name h1 {
  color: #dcdcda;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: 'Fjalla One', sans-serif;
}
.copyright {
  font-size: 10px;
  text-align: center;
  font-weight: 100;
  bottom: 0;
  align-self: flex-end;
}
</style>
