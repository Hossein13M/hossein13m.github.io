<template>
    <div class="story">
        <div class="top-contact justify-content-center">
            <h1 class="text-center pt-5 font-weight-light">Overview!</h1>
        </div>
        <hr />
        <div class="animated bounceInUp container mx-auto story mt-5 mr-5 text-center">
            <p>
                I am a developer with a background of working as a Network specialist. I have experience in both Full-time and Freelance jobs. I have experience
                and knowledge in JavaScript and its frameworks, Angular and Vue.js. I have also got a strong knowledge of HTML, CSS, Sass, and Bootstrap. As a
                team member, I am completely familiar with concepts such as Scrum, Git and GitFlow, Jira, and task management.
            </p>
            <p class="mb-0 pb-5">
                I always enjoy talking about the latest technologies and stuff so feel free to let me know if you want to have a coffee with me!
            </p>
            <nuxt-link class="button--grey text-center mx-auto text-decoration-none" to="/contact-me">Get In Touch With Me</nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.top-contact h1 {
    font-size: 100px;
    color: #323a6f;
}
.story p {
    font-size: 19px;
    text-align: justify;
    text-justify: auto;
}

@media (max-width: 439px) {
    .top-contact h1 {
        font-size: 60px;
    }
}
</style>
