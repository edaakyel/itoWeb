import colors from 'vuetify/es5/util/colors';

export default {
  srcDir: 'src/',
  publicRuntimeConfig: {
    strapiUrl: process.env.STRAPI_URL,
    apiUrl: process.env.API_URL,
    assetsUrl: process.env.ASSETS_URL,
  },
  privateRuntimeConfig: {},
  // Global page headers: https://go.nuxtjs.dev/config-head,
  head: {
    titleTemplate: '%s - ito-web',
    title: 'ito-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/app-config',
    '@/plugins/inject',
    '@/plugins/svg-icon',
    '@/plugins/global-components',
    { src: '@/plugins/helpers', ssr: false },
    '@/plugins/jsonld',
    '@/filters/capitalize',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['@/styles/core.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'portal-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/strapi',
    '@nuxt/image',
    '@nuxtjs/apollo',
  ],
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },

  strapi: {},
  dayjs: {
    locales: ['tr'],
    defaultLocale: 'tr',
    
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: '@/plugins/apollo.config.ts',
    },
    cookieAttributes: {
      expires: 7,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/config/vuetify.options.ts',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        sourceMap: process.env.NODE_ENV === 'development' ? false : true,
      }, //fix inspector live edit problem
    },
    html: {
      minify: {
        collapseWhitespace: false,
      },
    },
    extractCSS: { ignoreOrder: false },
    parallel: false,
    transpile: [/^vuetify/, 'swiper', 'dom7', 'gsap', 'gsap/all'],
    hotMiddleware: {
      client: {
        overlay: false,
      },
    },
  },
};
