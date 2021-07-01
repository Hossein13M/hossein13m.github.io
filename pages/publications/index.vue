<template>
    <div class="homePage d-flex justify-content-center pt-5 m-0 text-center col-lg-10 col-sm-12">
        <div>
            <div class="publication-header">
                <h1 class="text-center font-weight-light">PUBLICATIONS!</h1>
                <hr />
            </div>
            <!-- Blog -->
            <div>
                <div class="publication-item animated zoomIn">
                    <div class="publication-image col-lg-2 mx-0 my-3">
                        <img class="image-source" src="~assets/images/publication-medium2.jpeg" alt="image not found" />
                    </div>
                    <div class="publication-description col-lg-10">
                        <h1 class="heading mb-2">
                            <a target="blank" class="text-decoration-none" v-b-tooltip.hover title="Medium" href="https://medium.com">
                                <i class="fab fa-medium-m"></i>
                            </a>
                            <a
                                target="blank"
                                href="https://hossein13m.medium.com/husky-6-lint-prettier-eslint-and-commitlint-for-javascript-project-d7174d44735a"
                                >Husky 6 Lint (prettier + eslint) and commitlint for JavaScript Projects</a
                            >
                        </h1>

                        <p class="col-8 mx-auto mt-4">
                            Programming is a teamwork job so we must assure that our codebase is clean and usable for everyone in the team with the team culture
                            and the best practices...
                            <span>
                                <a
                                    target="blank"
                                    href="https://hossein13m.medium.com/husky-6-lint-prettier-eslint-and-commitlint-for-javascript-project-d7174d44735a"
                                    >Read More</a
                                >
                            </span>
                        </p>
                    </div>
                    <a target="blank" href="https://hossein13m.medium.com/husky-6-lint-prettier-eslint-and-commitlint-for-javascript-project-d7174d44735a"></a>
                </div>
            </div>
            <!--  -->
            <div>
                <div class="publication-item animated zoomIn">
                    <div class="publication-image col-lg-2 mx-0 my-3">
                        <img class="image-source" src="~assets/images/publication-medium1.jpeg" alt="image not found" />
                    </div>
                    <div class="publication-description col-lg-10">
                        <h1 class="heading mb-2">
                            <a target="blank" class="text-decoration-none" v-b-tooltip.hover title="Medium" href="https://medium.com">
                                <i class="fab fa-medium-m"></i>
                            </a>
                            <a
                                target="blank"
                                href="https://medium.com/angular-in-depth/angular-forms-reactive-form-including-angular-material-and-custom-validator-9ef324cc3b08"
                                >Angular forms (Reactive Form) including Angular Material and Custom Validator</a
                            >
                        </h1>

                        <p class="col-8 mx-auto mt-4">
                            Forms are major parts of every Angular project and in this article, we want to implement a Reactive Angular form with a custom and
                            dynamic validator...
                            <span>
                                <a
                                    target="blank"
                                    href="https://medium.com/angular-in-depth/angular-forms-reactive-form-including-angular-material-and-custom-validator-9ef324cc3b08"
                                    >Read More</a
                                >
                            </span>
                        </p>
                    </div>
                    <a
                        target="blank"
                        href="https://medium.com/angular-in-depth/angular-forms-reactive-form-including-angular-material-and-custom-validator-9ef324cc3b08"
                    ></a>
                </div>
            </div>
            <!-- Medium -->
            <div>
                <div class="publication-item animated zoomIn">
                    <div class="publication-image col-lg-2 mx-0 my-3">
                        <img class="image-source" src="~assets/images/publication-medium.jpeg" alt="image not found" />
                    </div>
                    <div class="publication-description col-lg-10">
                        <h1 class="heading mb-2">
                            <a target="blank" class="text-decoration-none" v-b-tooltip.hover title="Medium" href="https://medium.com">
                                <i class="fab fa-medium-m"></i>
                            </a>
                            <a target="blank" href="https://publication.usejournal.com/take-a-good-look-at-filter-map-and-reduce-in-javascript-18d72f483ada"
                                >Take a good look at filter, map and reduce in JavaScript</a
                            >
                        </h1>

                        <p class="col-8 mx-auto mt-4">
                            In JavaScript, we have these three methods as a part of Array.prototype method, but what are the differences between them and what
                            do they exactly do? so let’s dive into them...
                            <span>
                                <a target="blank" href="https://publication.usejournal.com/take-a-good-look-at-filter-map-and-reduce-in-javascript-18d72f483ada"
                                    >Read More</a
                                >
                            </span>
                        </p>
                    </div>
                    <a target="blank" href="https://publication.usejournal.com/take-a-good-look-at-filter-map-and-reduce-in-javascript-18d72f483ada"></a>
                </div>
            </div>
            <!-- Virgool -->
            <div>
                <div class="publication-item animated zoomIn">
                    <div class="publication-image col-lg-2 mx-0 my-3">
                        <img class="image-source" src="~assets/images/publication-virgool.jpeg" alt="image not found" />
                    </div>
                    <div class="publication-description col-lg-10">
                        <h1 class="heading mb-2">
                            <a target="blank" class="text-decoration-none" v-b-tooltip.hover title="Virgool" href="https://virgool.io">
                                <img class="virgool" src="~assets/images/virgool.io.png" alt="Virgool.io" />
                            </a>
                            <a target="blank" href="https://vrgl.ir/UPh81">Touchpad gestures in Linux (Persian)</a>
                        </h1>

                        <p class="col-8 mx-auto mt-4">
                            Adding touchpad gestures and configuring them as we desire with the help of a third-party library and writing simple scripts...
                            <span>
                                <a target="blank" href="https://vrgl.ir/UPh81">Read More</a>
                            </span>
                        </p>
                    </div>
                    <a target="blank" href="https://publication.usejournal.com/take-a-good-look-at-filter-map-and-reduce-in-javascript-18d72f483ada"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.publication-header h1 {
    font-size: 100px;
    color: #323a6f;
}
.virgool {
    width: 40px;
    height: 40px;
}
.publication-item {
    border: 5px groove rgba(230, 230, 230, 0.247);
    display: flex;
}
.image-source {
    width: 150px;
    height: 120px;
}
.publication-description .heading a {
    text-decoration: none;
    color: #000;
}

@media (max-width: 768px) {
    .publication-header h1 {
        font-size: 60px;
    }
    .publication-item {
        display: block;
        margin: 0;
    }
    .publication-item img {
        margin: 0;
    }
}
@media (min-width: 768px) and (max-width: 992px) {
    .publication-header h1 {
        font-size: 80px;
    }
    .publication-item {
        display: block;
        margin: 0 !important;
        text-align: center;
        justify-content: center;
    }
    .publication-item img {
        margin: 0 !important;
    }
    .publication-description {
        justify-content: center;
        margin: 0 !important;
    }
}
</style>