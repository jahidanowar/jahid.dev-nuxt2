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
    title: 'Jahid Anowar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Jahid Anowar is a Full Stack Web Developer. He's Programming for the last 4 years and have built 200+ human-centered websites and apps for businesses.`
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
    height: '3px'
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
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@/modules/generator'
  ],

  // Google Analytis Config
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || 'UA-000000000-1' // Use as fallback if no runtime config is provided
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
    baseURL: process.env.BASE_URL,

    publicRuntimeConfig: {
      axios: {
        browserBaseURL: process.env.BROWSER_BASE_URL
      }
    },

    privateRuntimeConfig: {
      axios: {
        baseURL: process.env.BASE_URL
      }
    }
  },
  /*
   ** Recaptcha Config
   */
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    secretKey: process.env.RECAPTCHA_SECRET_KEY,
    size: 'invisible',
    version: 3
  },

  /*
   ** Sitemap Config
   */
  sitemap: {
    // options
    hostname: process.env.DOMAIN,
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  /**
   * PWA Module Config
   */
  pwa: {
    meta: {
      name: 'Jahid',
      theme_color: '#4DC0B5',
      description: 'Full Stack Development Tips'
    },
    manifest: {
      lang: 'en',
      name: 'Jahid',
      short_name: 'Jahid'
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  generate: {
    fallback: true
  }
}
