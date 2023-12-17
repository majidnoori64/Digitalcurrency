// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui' , '@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/Components',
    },
  ],
  
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  colorMode: {
    preference: 'light'
  }
})
