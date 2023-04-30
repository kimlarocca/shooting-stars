export default defineNuxtConfig( {
  build: {
    transpile: [
      'primevue'
    ]
  },
  css: [
    'primevue/resources/themes/mdc-light-deeppurple/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // be sure to mirror theses imports in the vitest.config.ts
          additionalData: `@charset "UTF-8"; @use 'sass:map'; @use 'sass:math'; @use 'sass:string'; @import "~/assets/scss/global.scss";`,
        },
      },
    },
  },
  components: true
} )