// https://nuxt.com/docs/api/configuration/nuxt-config
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'
export default defineNuxtConfig({
  debug: false,
  runtimeConfig: {
      public: {
          baseURL: process.env.BASE_URL,
          Url: process.env.WEB_BASE_URL,
          domain: process.env.DOMAIN,
          apiURL: process.env.API_BASE_URL,
          hegkaURL: process.env.HEGKA_URL,
      },
  },
  build: {
      transpile: ['@vuepic/vue-datepicker'],
  },
  routeRules: {
    '/articles/**': {ssr: false}
      // '/app/**': { ssr: false },
      // '/en/app/**': { ssr: false },
  },
  modules: ['@nuxtjs/i18n', '@nuxt/ui', '@pinia/nuxt', '@nuxt-alt/auth', 'nuxt-rating', '@nuxt/image'],
  pinia: {
      autoImports: [
          // automatically imports `defineStore`
          'defineStore',
          'storeToRefs',
          'acceptHMRUpdate',
      ],
  },
  plugins: [{ src: '~/plugins/ckeditor.js', mode: 'client' }],
  i18n: {
      lazy: true,
      langDir: 'locales',
      strategy: 'prefix_except_default',
      customRoutes: 'config',
      // pages: {
      //     'app/Job/CreateJob': {
      //         vi: '/app/job/create',
      //         en: '/app/job/create',
      //     },
      //     'app/Notification': {
      //         vi: '/app/notification',
      //         en: '/app/notification',
      //     },
      // },
      locales: [
          {
              code: 'en',
              iso: 'en-US',
              name: 'English',
              file: 'en.json',
          },
          {
              code: 'vi',
              iso: 'vi-VN',
              name: 'Việt Nam',
              file: 'vi.json',
          },
      ],
      detectBrowserLanguage: false,
      defaultLocale: 'vi',
      vueI18n: './nuxt-i18n.js',
  },
  auth: {
      cookie: {
          options: {
              maxAge: 31536000,
          },
      },
      strategies: {
          local: {
              maxAge: 31536000,
              token: {
                  property: 'token',
                  required: true,
                  type: 'Bearer',
                  maxAge: 31536000,
              },
              user: {
                  property: '',
                  autoFetch: true,
              },
              endpoints: {
                  login: {
                      url: `${process.env.BASE_URL}/api/v1/login`,
                      method: 'post',
                  },
                  user: {
                      url: `${process.env.BASE_URL}/api/v1/profile`,
                      method: 'get',
                  },
                  logout: {
                      url: `${process.env.BASE_URL}/api/v1/logout`,
                      method: 'post',
                  },
              },
          },

          google: {
              clientId: process.env.GOOGLE_APP_ID,
              endpoints: {
                  token: {
                      url: `${process.env.BASE_URL}/api/v1/login`,
                      method: 'post',
                  },
                  userInfo: {
                      url: `${process.env.BASE_URL}/api/v1/profile`,
                      method: 'get',
                  },
                  logout: {
                      url: `${process.env.BASE_URL}/api/v1/logout`,
                      method: 'post',
                  },
              },
          },

          // laravelSanctum: {
          //     provider: 'laravel/sanctum',
          //     url: `${process.env.BASE_URL}`,
          //     cookie: {
          //         cookie: {
          //             name: 'XSRF-TOKEN',
          //         },
          //     },
          //     endpoints: {
          //         login: {url: '/api/v1/login', method: 'post'},
          //         user: {url: '/api/v1/user'},
          //         logout: {url: '/api/v1/logout', method: 'post'},
          //         // csrf: {url: `/api/v1/login`, method: 'post'},
          //     },
          // },
      },
      redirect: {
          login: '/',
          home: '/app/home',
          logout: '/',
      },
  },
  css: ['@/assets/css/index.css'],
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@import "@/assets/scss/index.scss";',
              },
          },
      },
      plugins: [ckeditor5({ theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) })]
  },
  ui: {
      global: true,
      icons: 'all',
      selectMenu: {
          background: 'bg-input dark:bg-white',
      },
  },
  colorMode: {
      preference: 'light',
  },
  app: {
      head: {
          htmlAttrs: {
              lang: 'vi',
          },
          meta: [
              {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1, maximum-scale=1',
              },
              {
                  name: 'location',
                  content: 'vi_VN',
              },
              {
                  property: 'og:locale',
                  content: 'vi_VN',
              },
              {
                  property: 'og:locale:alternate',
                  content: 'en_US',
              },
              {
                  property: 'og:type',
                  content: 'website',
              },
              {
                  name: 'type',
                  content: 'website',
              },
          ],
          script: [
              
          ],
      },
  },
});
