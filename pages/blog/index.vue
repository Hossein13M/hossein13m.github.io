<template>
  <div class="homePage d-flex justify-content-center pt-5 m-0 text-center col-lg-10 col-sm-12">
    <div>
      <div class="blog-header">
        <h1 class="text-center font-weight-light">BLOG!</h1>
        <hr />
      </div>
      <!-- Blog -->
      <div></div>
      <!-- Medium -->
      <div>
        <div class="blog-item animated zoomIn mt-5">
          <div class="blog-image col-lg-2 mx-0 my-3">
            <img
              class="image-source"
              src="~assets/images/blog-medium.jpeg"
              alt="image not found"
            />
          </div>
          <div class="blog-description col-lg-10">
            <h1 class="heading mb-2">
              <a
                target="blank"
                class="text-decoration-none"
                v-b-tooltip.hover
                title="Medium"
                href="https://medium.com"
              >
                <i class="fab fa-medium-m"></i>
              </a>
              <a
                target="blank"
                href="https://blog.usejournal.com/take-a-good-look-at-filter-map-and-reduce-in-javascript-18d72f483ada"
              >Take a good look at filter, map and reduce in JavaScript</a>
            </h1>

            <p class="col-8 mx-auto mt-4">
              In JavaScript, we have these three methods as a part of Array.prototype method, but what are the differences between them and what do they exactly do? so let’s dive into them...
              <span>
                <a
                  target="blank"
                  href="https://blog.usejournal.com/take-a-good-look-at-filter-map-and-reduce-in-javascript-18d72f483ada"
                >Read More</a>
              </span>
            </p>
          </div>
          <a
            target="blank"
            href="https://blog.usejournal.com/take-a-good-look-at-filter-map-and-reduce-in-javascript-18d72f483ada"
          ></a>
        </div>
      </div>
      <!-- Virgool -->
      <div>
        <div class="blog-item animated zoomIn mt-5">
          <div class="blog-image col-lg-2 mx-0 my-3">
            <img
              class="image-source"
              src="~assets/images/blog-virgool.jpeg"
              alt="image not found"
            />
          </div>
          <div class="blog-description col-lg-10">
            <h1 class="heading mb-2">
              <a
                target="blank"
                class="text-decoration-none"
                v-b-tooltip.hover
                title="Virgool"
                href="https://virgool.io"
              >
                <img class="virgool" src="~assets/images/virgool.io.png" alt="Virgool.io" />
              </a>
              <a target="blank" href="http://vrgl.ir/UPh81">Touchpad gestures in Linux (Persian)</a>
            </h1>

            <p class="col-8 mx-auto mt-4">
              Adding touchpad gestures and configuring them as we desire with the help of a third-party library and writing simple scripts...
              <span>
                <a target="blank" href="http://vrgl.ir/UPh81">Read More</a>
              </span>
            </p>
          </div>
          <a
            target="blank"
            href="https://blog.usejournal.com/take-a-good-look-at-filter-map-and-reduce-in-javascript-18d72f483ada"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.blog-header h1 {
  font-size: 100px;
}
.virgool {
  width: 40px;
  height: 40px;
}
.blog-item {
  border: 5px groove rgb(230, 230, 230);
  display: flex;
  /* border: 5px groove #1C6EA4; */
}
.image-source {
  width: 150px;
  height: 120px;
}
.blog-description .heading a {
  text-decoration: none;
  color: #000;
}

@media (max-width: 768px) {
  .blog-header h1 {
    font-size: 60px;
  }
  .blog-item {
    display: block;
    margin: 0;
  }
  .blog-item img {
    margin: 0;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .blog-header h1 {
    font-size: 80px;
  }
  .blog-item {
    display: block;
    margin: 0 !important;
    text-align: center;
    justify-content: center;
  }
  .blog-item img {
    margin: 0 !important;
  }
  .blog-description {
    justify-content: center;
    margin: 0 !important;
  }
}
</style>