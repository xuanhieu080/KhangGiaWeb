// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    debug: false,
    experimental: {
        appManifest: false,
    },
    devtools: {
        enabled: false,
        timeline: {
            enabled: false,
        },
    },
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
            // gtm: {
            //     id: 'GTM-5MFK8NDW',
            //     defer: false,
            //     compatibility: false,
            //     enabled: true,
            //     debug: true,
            //     loadScript: true,
            //     enableRouterSync: true,
            //     trackOnNextTick: false,
            //     devtools: true,
            // },
        },
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

    modules: [
        // 'nuxt-delay-hydration',
        '@nuxtjs/i18n',
        '@nuxt/ui',
        '@pinia/nuxt',
        'nuxt-rating',
        '@nuxt/image',
        '@nuxtjs/seo',
        '@zadigetvoltaire/nuxt-gtm',
        '@nuxtjs/device',
    ],
    delayHydration: {
        // enables nuxt-delay-hydration in dev mode for testing
        // NOTE: you should disable this once you've finished testing, it will break HMR
        debug: false,
        mode: 'mount',
    },
    site: {
        indexable: true,
        url: process.env.WEB_BASE_URL,
        name: process.env.NUXT_SITE_NAME,
        description: process.env.NUXT_SITE_DESCRIPTION,
        defaultLocale: 'vi',
        locales: ['vi', 'en'],
    },

    sitemap: {
        enabled: true,
    },

    robots: {
        enabled: false,
    },

    schemaOrg: {
        identity: {
            type: 'Organization',
            name: process.env.NUXT_SITE_NAME,
            url: process.env.WEB_BASE_URL,
            logo: process.env.WEB_BASE_URL + '/logo.jpg',
            email: process.env.NUXT_SITE_EMAIL,
            phone: process.env.NUXT_SITE_PHONE,
            telephone: process.env.NUXT_SITE_PHONE,
            sameAs: [
                'https://www.facebook.com/GAKBHLD',
                'https://twitter.com/congtygak',
                'https://www.instagram.com/congtygak',
                'https://www.tiktok.com/@congtygak',
            ],
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

    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag === 'iconify-icon',
        },
    },

    i18n: {
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix',
        customRoutes: 'config',
        locales: [
            {
                code: 'vi',
                language: 'vi-VN',
                name: 'Việt Nam',
                file: 'vi.json',
            },
            {
                code: 'en',
                language: 'en-US',
                name: 'English',
                file: 'en.json',
            },
        ],
        detectBrowserLanguage: false,
        defaultLocale: 'vi',
        vueI18n: './nuxt-i18n.js',
        pages: {
            'product/search': {
                vi: '/tim-kiem-san-pham',
                en: '/product-search',
            },
            'product/all-products': {
                vi: '/tat-ca-san-pham',
                en: '/all-products',
            },
            'privacy-policy': {
                vi: '/chinh-sach-bao-mat',
                en: '/privacy-policy',
            },
            'cookie-policy': {
                vi: '/chinh-sach-cookie',
                en: '/cookie-policy',
            },
            'product-return-policy': {
                vi: '/chinh-sach-hoan-tra-san-pham',
                en: '/product-return-policy',
            },
            'delivery-policy': {
                vi: '/chinh-sach-giao-hang',
                en: '/delivery-policy',
            },
            'retail-promotions-policy': {
                vi: '/chinh-sach-khuyen-mai',
                en: '/retail-promotions-policy',
            },
            'quality-assurance-policy': {
                vi: '/chinh-sach-kiem-hang',
                en: '/quality-assurance-policy',
            },
            'terms-of-use': {
                vi: '/dieu-khoan-su-dung',
                en: '/terms-of-use',
            },
            'payment-regulations': {
                vi: '/quy-dinh-thanh-toan',
                en: '/payment-regulations',
            },
            'culture-khanggia': {
                vi: false,
                en: '/culture-khanggia',
            },
            'van-hoa-khanggia': {
                vi: '/van-hoa-khanggia',
                en: false,
            },
            'custom-order': {
                vi: false,
                en: '/custom-order',
            },
            'dat-may': {
                vi: '/dat-may',
                en: false,
            },
            'dedicated-customer-care-service': {
                vi: false,
                en: '/dedicated-customer-care-service',
            },
            'dvkh-tan-tam': {
                vi: '/dvkh-tan-tam',
                en: false,
            },
            'nha-may': {
                vi: '/nha-may',
                en: false,
            },
            'factory': {
                vi: false,
                en: '/factory',
            },
            'abouts/about-us': {
                vi: false,
                en: '/about-us',
            },

            'abouts/ve-chung-toi': {
                en: false,
                vi: '/ve-chung-toi',
            },
        },
    },
    tailwindcss: {
        cssPath: ['@/assets/css/index.css'],
        configPath: 'tailwind.config.ts',
        exposeConfig: true,
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/index.scss";',
            },
        },
    },
    ui: {
        global: true,
        strategy: 'override',
    },

    image: {
        // Tự động tối ưu ảnh nội bộ
        dir: 'public',

        // Cho phép ảnh từ các domain ngoài (CDN, API)
        domains: ['app.khanggiagarment.com'],

        // Chọn provider xử lý ảnh, `ipx` là default
        provider: 'ipx', // dùng được cả cho ảnh nội bộ và từ domain ngoài
        ipx: {
            dir: 'public',
            cacheDir: 'node_modules/.cache/ipx', // nơi cache ảnh xử lý
        }
    },

    colorMode: {
        preference: 'light',
    },
    app: {
        head: {
            titleTemplate: '%s',
            htmlAttrs: {
                lang: 'vi',
            },
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1',
                },
                {
                    name: 'robots',
                    content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
                },
                {
                    name: 'googlebot',
                    content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
                },
                {
                    name: 'bingbot',
                    content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
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
                    content: 'vi_VN',
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
            __dangerouslyDisableSanitizers: ['script'],
        },
    },
    nitro: {
        routeRules: {
            '/_ipx/**': {
                headers: {
                    'Cache-Control': 'public, max-age=31536000, immutable',
                }
            }
        },
        prerender: {
            routes: ['/404'],
        }
    },
    compatibilityDate: '2024-07-25',
});