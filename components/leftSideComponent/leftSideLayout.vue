<template>
  <div class="leftSideLayout col-3">
    <div class="leftSideWrapper col-12 d-flex flex-column">
      <div class="profilePic d-flex justify-content-center mt-5">
        <img
          src="/personalPicture.png"
          alt="The Image is not available"
          class="rounded-circle"
        />
      </div>
      <div class="name justify-content-center mt-3">
        <a href="/" class="text-decoration-none">
          <h1>Hossein Mousavi</h1>
        </a>
        <p class="d-flex justify-content-center">Front End Developer</p>
      </div>
      <div class="sidebarLinks d-flex justify-content-center ">
        <ul
          class=" d-flex justify-content-center flex-column text-center m-0 p-0"
        >
          <li>Home</li>
          <li>Contact Me</li>
          <li>About Me</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.leftSideLayout{
    background-color:red;
}
.sidebarLinks ul{
  list-style-type:none;
}
</style>
