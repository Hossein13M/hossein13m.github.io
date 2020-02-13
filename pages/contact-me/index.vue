<template>
  <div class="contact-me">
    <div class="top-contact justify-content-center pt-5">
      <h1 class="text-center">
        Contact Me!
      </h1>
    </div>
    <hr>
    <div class="bottom-contact mt-5">
      <div class="left-bottom mt-5 col-lg-6 col-sm-12  text-center">
        <div class="mb-5">
          <p class="bottom-text mb-5">
            Feel Free to give me a call or find me on Telegram with my number!
          </p>
        </div>
        <div class="phone">
          <a class="text-decoration-none" href="tel:+989396197609"
            ><i class="animated zoomIn contact-icon mr-3 fas fa-mobile"></i
          ></a>
          <p class="text-decoration-none contact-text mt-3">
            Phone: +989396197609
          </p>
        </div>
      </div>
      <div class="right-bottom mt-5 col-lg-6 col-sm-12 text-center">
        <p class="bottom-text mb-5">
          OR you can just drop me a message and I will get back to you!
        </p>
        <div class="">
          <a class="text-decoration-none" href="mailto:hoseinjob13@gmail.com"
            ><i class="animated zoomIn contact-icon mr-3 fas fa-at"></i
          ></a>
          <p class="text-decoration-none contact-text mt-3 mb-0 pb-3">
            Email: Hoseinjob13@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
.contact-me h1 {
  /* font-family: 'Fjalla One', sans-serif; */
  font-weight: 300;
  font-size: 100px;
}
.bottom-text {
  font-family: 'Kalam', cursive;
  font-weight: 500;
  font-size: 19px;
  margin: 0;
}

.contact-icon {
  font-size: 200px;
  color: #3f3f3f;
}
.contact-icon:hover {
  color: #858585;
}
.contact-text {
  color: #3f3f3f !important;
}
.contact-text p:hover {
  color: #858585;
}
@media (min-width: 992px) {
  .bottom-contact {
    display: flex;
  }
}
</style>
