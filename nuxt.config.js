export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // publicPath: '/a-thousand-channels/',


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'A thousand channels',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'title', name: 'title', content: 'A 1000 Channels' },
      { hid: 'og:title', name: 'og:title', content: 'A 1000 Channels' },
      { hid: 'description', name: 'description', content: 'A queer mapping platform to document and visualize queer narratives.' },
      { hid: 'og:description', name: 'og:description', content: 'A queer mapping platform to document and visualize queer narratives.' },
      { hid: 'og:image', name: 'og:image', content: 'https://a-thousand-channels.xyz/a1000c-animation-banner.jpg'
      }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-shortkey.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-leaflet', { /* module options */ }],
    ['nuxt-i18n', {
        locales: [
          {
            name: 'Deutsch',
            code: 'de',
            iso: 'de-DE',
            file: 'de-DE.js',
            active: true
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
            active: true
          },
          {
            name: 'Arabic',
            code: 'ar',
            iso: 'ar-AR',
            file: 'ar-AR.js',
            active: true
          },
          {
            name: 'Espanol',
            code: 'es',
            iso: 'es-ES',
            file: 'es-ES.js',
            active: true
          }
        ],
        langDir: 'lang/',
        defaultLocale: 'de',
      }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    // base: '/a-thousand-channels/',
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      console.log("scrollBehavior")

      if (to.hash) {
        console.log(to.hash)
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          console.log('smooth')
          console.log(el)
          console.log(el.offsetTop)
          console.log(el.offsetLeft)
          return document.getElementById('page_inner').scrollTo({ top: el.offsetTop, left: el.offsetLeft, behavior: 'smooth' })
        } else {
          console.log('non smooth')
          return document.getElementById('page_inner').scrollTo(0, el.offsetTop, el.offsetLeft)
        }
      }

      return { x: 0, y: 0 }
    }
  },
}
