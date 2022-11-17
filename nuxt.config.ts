// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
      title: "Jahid Anowar",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: `Jahid Anowar is a Full Stack Web Developer. He's Programming for the last 4 years and have built 200+ human-centered websites and apps for businesses.`,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // { rel: 'preload', href: 'https://rsms.me/inter/inter.css', as: 'style' },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter&family=Space+Grotesk:wght@500&display=swap",
        },
      ],
      script: [
        // {
        //   src: '//code.tidio.co/udunhgztvraa9n4fvkphtc4sqxbzugxt.js',
        //   defer: true
        // }
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/image-edge"],
  colorMode: {
    classSuffix: "",
  },
  image: {
    // Options
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.BASE_URL,
    },
  },
});
