export default {
    router: {
        base: '/'
    },
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Hossein Mousavi' || process.env.npm_package_name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css'
            }
        ],
        script: [{
            src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }],
        script: [{ src: 'https://use.fontawesome.com/releases/v5.0.7/js/all.js' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#71b479' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        'bootstrap-vue/nuxt',
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}