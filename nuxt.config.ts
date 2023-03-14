// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true
  },
  ssr: true,
  app: {
    baseURL: "/nuxt-content-example"
  }
})
