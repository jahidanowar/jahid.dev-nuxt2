export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    title: process.env.npm_package_name || '',
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
      // { rel: 'preload', href: 'https://rsms.me/inter/inter.css', as: 'style' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter&family=Space+Grotesk:wght@500&display=swap'
      }
    ],
    script: [
      {
        src: '//code.tidio.co/udunhgztvraa9n4fvkphtc4sqxbzugxt.js',
        defer: true
      }
    ]
  },
  /*
   ** Loading Progress Bar
   */
  loading: {
    color: '#4DC0B5',
    height: '5px'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/prism', '~/plugins/filters'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@/modules/generator'
  ],

  // Google Analytis Config
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || 'UA-166805413-1' // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    '@nuxtjs/sitemap'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || 'https://api.jahid.dev/wp-json/wp/v2',

    publicRuntimeConfig: {
      axios: {
        browserBaseURL:
          process.env.BROWSER_BASE_URL || 'https://api.jahid.dev/wp-json/wp/v2'
      }
    },

    privateRuntimeConfig: {
      axios: {
        baseURL: process.env.BASE_URL || 'https://api.jahid.dev/wp-json/wp/v2'
      }
    }
  },
  /*
   ** Recaptcha Config
   */
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: true,
    siteKey: '6LcZ2fUUAAAAAMUw7ufw06Dhs07yFdwYdxld9D7w',
    secretKey: '6LcZ2fUUAAAAAERcLZDth1k3rsyiUEJh2B66Sy6C',
    size: 'invisible',
    version: 3
  },

  /*
   ** Sitemap Config
   */
  sitemap: {
    // options
    hostname: 'https://jahid.dev',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  generate: {
    devtools: false,
    fallback: true
  }
}
