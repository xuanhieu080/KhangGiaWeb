// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: false,

  runtimeConfig: {
      public: {
          baseURL: process.env.BASE_URL,
          Url: process.env.WEB_BASE_URL,
          domain: process.env.DOMAIN,
          apiURL: process.env.API_BASE_URL,
          name: process.env.NUXT_SITE_NAME,
          title: process.env.NUXT_SITE_TITLE,
          description: process.env.NUXT_SITE_DESCRIPTION,
          defaultLocale: process.env.NUXT_SITE_LOCALE,
          email: process.env.NUXT_SITE_EMAIL,
          telephone: process.env.NUXT_SITE_TELEPHONE,
          street: process.env.NUXT_SITE_STREET_ADDRESS,
          region: process.env.NUXT_SITE_ADDRESS_REGION,
          country: process.env.NUXT_SITE_ADDRESS_COUNTRY,
          postal: process.env.NUXT_SITE_POSTAL_CODE,
          logo: process.env.WEB_BASE_URL + '/logo.jpg',
          gtm: {
              id: 'GTM-5MFK8NDW',
              defer: false,
              compatibility: false,
              enabled: true,
              debug: true,
              loadScript: true,
              enableRouterSync: true,
              trackOnNextTick: false,
              devtools: true,
          }
      },
  },

  build: {
      transpile: ['@vuepic/vue-datepicker'],
  },

  router: {
      scrollBehavior: function (to, from, savedPosition) {
          return { x: 0, y: 0 };
      },
  },

  routeRules: {
      // '/articles/**': { ssr: false },
      // '/app/**': { ssr: false },
      // '/en/app/**': { ssr: false },
  },

  modules: ['@nuxtjs/i18n', '@nuxt/ui', '@pinia/nuxt', '@nuxt-alt/auth', 'nuxt-rating', '@nuxt/image', '@nuxtjs/seo', '@zadigetvoltaire/nuxt-gtm'],

  site: {
      indexable: true,
      url: process.env.WEB_BASE_URL,
      name: process.env.NUXT_SITE_NAME,
      description: process.env.NUXT_SITE_DESCRIPTION,
      defaultLocale: process.env.NUXT_SITE_LOCALE,
  },

  sitemap: {
      enabled: false,
  },

  schemaOrg: {
      identity: {
          type: 'Organization',
          name: process.env.NUXT_SITE_NAME,
          url: process.env.WEB_BASE_URL,
          logo: process.env.WEB_BASE_URL + '/logo.jpg',
          email:process.env.NUXT_SITE_EMAIL,
          phone:process.env.NUXT_SITE_PHONE,
          telephone:process.env.NUXT_SITE_PHONE,
          sameAs: [
              'https://www.facebook.com/GAKBHLD',
              'https://twitter.com/congtygak',
              'https://www.instagram.com/congtygak',
              'https://www.tiktok.com/@congtygak',
          ]
      },
  },

  pinia: {
      autoImports: [
          // automatically imports `defineStore`
          'defineStore',
          'storeToRefs',
          'acceptHMRUpdate',
      ],
  },

  i18n: {
      lazy: true,
      langDir: 'locales',
      strategy: 'prefix',
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
              code: 'vi',
              iso: 'vi-VN',
              name: 'Việt Nam',
              file: 'vi.json',
          },
          // {
          //     code: 'en',
          //     iso: 'en-US',
          //     name: 'English',
          //     file: 'en.json',
          // },
          
      ],
      detectBrowserLanguage: false,
      defaultLocale: 'vi',
      vueI18n: './nuxt-i18n.js',
  },

  auth: {
      //   cookie: {
      //       options: {
      //           maxAge: 31536000,
      //       },
      //   },
      //   strategies: {
      //       local: {
      //           maxAge: 31536000,
      //           token: {
      //               property: 'token',
      //               required: true,
      //               type: 'Bearer',
      //               maxAge: 31536000,
      //           },
      //           user: {
      //               property: '',
      //               autoFetch: true,
      //           },
      //           endpoints: {
      //               login: {
      //                   url: `${process.env.BASE_URL}/api/v1/login`,
      //                   method: 'post',
      //               },
      //               user: {
      //                   url: `${process.env.BASE_URL}/api/v1/profile`,
      //                   method: 'get',
      //               },
      //               logout: {
      //                   url: `${process.env.BASE_URL}/api/v1/logout`,
      //                   method: 'post',
      //               },
      //           },
      //       },
      //       google: {
      //           clientId: process.env.GOOGLE_APP_ID,
      //           endpoints: {
      //               token: {
      //                   url: `${process.env.BASE_URL}/api/v1/login`,
      //                   method: 'post',
      //               },
      //               userInfo: {
      //                   url: `${process.env.BASE_URL}/api/v1/profile`,
      //                   method: 'get',
      //               },
      //               logout: {
      //                   url: `${process.env.BASE_URL}/api/v1/logout`,
      //                   method: 'post',
      //               },
      //           },
      //       },
      //       // laravelSanctum: {
      //       //     provider: 'laravel/sanctum',
      //       //     url: `${process.env.BASE_URL}`,
      //       //     cookie: {
      //       //         cookie: {
      //       //             name: 'XSRF-TOKEN',
      //       //         },
      //       //     },
      //       //     endpoints: {
      //       //         login: {url: '/api/v1/login', method: 'post'},
      //       //         user: {url: '/api/v1/user'},
      //       //         logout: {url: '/api/v1/logout', method: 'post'},
      //       //         // csrf: {url: `/api/v1/login`, method: 'post'},
      //       //     },
      //       // },
      //   },
      //   redirect: {
      //       login: '/',
      //       home: '/app/home',
      //       logout: '/',
      //   },
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
  },

  ui: {
      global: true,
      strategy: 'override',
      icons: {
          dynamic: true,
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
              {
                  hid: 'gtmHead',
                  async: true,
                  defer: true,
                  src: 'https://www.googletagmanager.com/gtag/js?id=GTM-5MFK8NDW',
              },
              // {
              //     hid: 'gtmHead',
              //     defer: true,
              //     src: 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js',
              // },
              {
                  hid: 'gtmHead',
                  innerHTML:
                      "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'GTM-5MFK8NDW');",
              },
              {
                  name: 'google-site-verification',
                  content: "6w3-X134SqCECM8aDFS_WmQg30hUbvRAYVVbYpAYiZk",
              },
          ],
          __dangerouslyDisableSanitizers: ['script'],
      },
  },

  compatibilityDate: '2024-07-11',
});