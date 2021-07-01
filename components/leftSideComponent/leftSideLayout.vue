<template>
    <div class="leftSideLayout col-lg-2 col-sm-12">
        <div class="leftSideWrapper col-12 d-flex flex-column">
            <div class="top-sidebar mb-5">
                <div class="profilePic d-flex justify-content-center mt-5">
                    <nuxt-link to="/">
                        <img src="/personalPicture.png" alt="The Image is not available" class="rounded-circle" />
                    </nuxt-link>
                </div>
                <div class="name text-center justify-content-center mt-4 mb-4">
                    <a href="/" class="text-decoration-none">
                        <h1 class="font-weight-bold">Hossein Mousavi</h1>
                    </a>
                    <p class="d-flex justify-content-center">Software Developer</p>
                    <hr />
                </div>
                <div class="sidebarLinks list-unstyled d-flex justify-content-center mt-4 mb-5">
                    <ul class="d-flex list-unstyled justify-content-center flex-column text-center m-0 p-0">
                        <li>
                            <nuxt-link to="/" class="text-decoration-none">
                                <span>Home</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/overview" class="text-decoration-none">
                                <span>Overview</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/skills" class="text-decoration-none">
                                <span>Skills</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/publications" class="text-decoration-none">
                                <span>Publications</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact-me" class="text-decoration-none">
                                <span>Contact Me</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="animated bounceInLeft socialIcons d-flex justify-content-center mt-5">
                    <a
                        class="social-icon px-1 text-decoration-none"
                        target="blank"
                        v-b-tooltip.hover
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/hossein13mousavi/"
                    >
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        class="social-icon px-1 text-decoration-none"
                        target="blank"
                        v-b-tooltip.hover
                        title="StackOverFlow"
                        href="https://stackoverflow.com/overview/hossein13m"
                    >
                        <i class="fab fa-stack-overflow"></i>
                    </a>
                    <a class="social-icon px-1 text-decoration-none" target="blank" v-b-tooltip.hover title="GitHub" href="https://github.com/hossein13m">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="social-icon px-1 text-decoration-none" target="blank" v-b-tooltip.hover title="GitLab" href="https://gitlab.com/Hossein13M">
                        <i class="fab fa-gitlab"></i>
                    </a>
                    <a class="social-icon px-1 text-decoration-none" target="blank" v-b-tooltip.hover title="Medium" href="https://medium.com/@hossein13m">
                        <i class="fab fa-medium-m"></i>
                    </a>
                    <a class="social-icon px-1 text-decoration-none" target="blank" v-b-tooltip.hover title="Twitter" href="https://twitter.com/Hossein13M">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="social-icon px-1 text-decoration-none" target="blank" v-b-tooltip.hover title="Telegram" href="https://t.me/m13hossein">
                        <i class="fab fa-telegram-plane"></i>
                    </a>
                </div>
            </div>
            <div class="bottom-sidebar text-center justify-content-center mt-5">
                <div class="copyright justify-content-center mb-0">
                    <hr />
                    <p>
                        © 2021 Hossein Mousavi.
                        <a class="text-decoration-none text-light copyright-link" target="blank" href="https://creativecommons.org/licenses/by/4.0/"
                            >All rights reserved.</a
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'acmeGoogleFont';
    font-weight: normal;
    src: url('~static/fonts/Acme-Regular.ttf');
}

.leftSideLayout::after {
    width: 100%;
    background: url(~assets/images/sidebar.png);
    filter: grayscale(70%);
    background-size: cover;
    opacity: 0.9;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
}
.leftSideLayout p {
    color: #b8b8b8;
    font-family: 'acmeGoogleFont';
}
.leftSideLayout span {
    color: #dcdcda;
    font-family: 'acmeGoogleFont';
    font-size: 23px;
}

.name h1 {
    color: #dcdcda;
    font-size: 24px;
    letter-spacing: 1px;
    font-family: 'acmeGoogleFont';
}
.name h1:hover {
    color: #00baba;
}
.social-icon {
    font-size: 29px;
    color: #dcdcda;
}

.social-icon:hover {
    color: #00baba;
}
li span:hover {
    color: #00baba;
}
.copyright {
    font-size: 14px;
}

.copyright p:hover + .copyright-link a {
    color: #00baba;
}
@media (max-width: 768px) {
    .copyright {
        display: none;
    }
}
@media (min-width: 837px) and (max-width: 1200px) {
    .social-icon {
        font-size: 25px;
    }
}
@media (min-width: 768px) and (max-width: 837px) {
    .social-icon {
        font-size: 20px;
    }
}
</style>
