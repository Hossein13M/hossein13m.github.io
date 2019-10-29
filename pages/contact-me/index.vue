<template>
  <div class="contact-me">
    <div class="top-contact justify-content-center mt-5">
      <h1 class="text-center">
        Contact Me
      </h1>
    </div>
    <div class="bottom-contact d-flex mt-5">
      <div class="left-bottom mt-5 col-lg-6 col-sm-12">
        <div class="mb-5">
          <p class="bottom-text text-center mb-5">
            Please Feel Free to drop me a message and I will get back to you!
          </p>
        </div>
        <form action="">
          <div class="row">
            <div class="col">
              <input
                v-model="user.name"
                type="text"
                class="form-control"
                placeholder="Full name"
              />
            </div>
            <div class="col">
              <input
                v-model="user.email"
                type="email"
                class="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group mt-2">
            <textarea
              class="form-control"
              v-model="user.message"
              id="exampleFormControlTextarea1"
              placeholder="Please enter your message"
              rows="3"
            ></textarea>
          </div>
          <div class="form-row align-items-center">
            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect"
                >Preference</label
              >
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Please choose your subject</option>
                <option value="1">Personal Reason</option>
                <option value="2">Job Offer</option>
                <option value="3">Overbid improvement</option>
              </select>
            </div>
            <div class="col-auto my-1">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div class="right-bottom mt-5 col-lg-6 col-sm-12">
        <p class="bottom-text text-center mb-5">
          OR you can just simply find me!
        </p>
        <div class="social-media-contact ml-5">
          <a class="text-decoration-none" href="tel:+989396197609"
            ><p class=" mb-4">
              <i class="mr-3 fas fa-mobile"></i>Phone number: +989396197609
            </p></a
          >
          <a class="text-decoration-none" href="mailto:hoseinjob13@gmail.com"
            ><p class="mt-3">
              <i class="mr-3 fas fa-at"></i>Email: Hoseinjob13@gmail.com
            </p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        message: ''
      },
      errormsg: {
        name: false,
        email: false,
        message: false
      },
      hasError: false
    }
  },
  methods: {
    RequiredFields() {
      this.errormsg.name = !this.user.name
      this.errormsg.email = !this.user.email
      this.errormsg.message = !this.user.message
      this.hasError =
        this.hasError ||
        this.errormsg.name ||
        this.errormsg.email ||
        this.errormsg.message
    },
    SubmitInfo() {
      this.hasError = false
      this.RequiredFields()
      if (!this.hasError) this.Register()
    },
    SendInfo() {
      // TODO: send information to me the "hoseinjob13@gmail.com"
    }
  }
}
</script>

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
.social-media-contact a {
  color: #3f3f3f;
}
</style>
