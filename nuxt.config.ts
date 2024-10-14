// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  ssr: true,
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-pages-plus',
    '@sidebase/nuxt-auth',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/css/tailwind.css'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL,
      origin: process.env.NUXT_PUBLIC_ORIGIN || 'https://nuxt-luna.vercel.app/',
    },
    authOrigin: 'https://nuxt-luna.vercel.app/',
  },
  auth: {
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'github',
      addDefaultCallbackUrl: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@prisma/client'],
    },
  },
})
