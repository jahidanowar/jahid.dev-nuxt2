/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
// const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        gray: colors.slate,
        text: '#4a5568'
      },
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      spacing: {
        96: '23rem'
      }
    }
  },
  variants: {
    translate: ['group-hover'],
    boxShadow: ['group-hover'],
    textDecoration: ['group-hover']
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
