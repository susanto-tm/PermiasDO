export default {
    head: {
        title: 'Permias Penn State',
        meta: [
            { charset: 'utf-8' }
        ],
        link: [
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@400;700;800&display=swap" },
            { rel: 'stylesheet', href: "https://unpkg.com/flickity@2/dist/flickity.min.css" }
        ],
        script: [
            { src: "https://code.jquery.com/jquery-3.4.1.min.js" },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js" },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js" },
            { src: "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" },
            { src: "https://unpkg.com/scroll-snap@3.0.2/dist/index.js" }
        ]
    },
    components: true,

    buildModules: [
        '@nuxtjs/style-resources',
    ],

    modules: [
      '@nuxtjs/axios'
    ],

    css: ['~/assets/css/main.scss'],

    styleResources: {
        scss: './assets/css/main.scss'
    },

    axios: {
        baseURL: "http://localhost:8000/api"
    }

}