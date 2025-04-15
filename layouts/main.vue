<template>
    <div>
        <Header />
        <main class="wrapper-desktop relative w-full min-h-screen">
            <div class="w-full relative main">
                <slot />
            </div>
            <div
                class="scroll-to-top fixed bottom-8 left-4 z-[99] hidden lg:block"
                :class="showBackToTop ? 'opacity-100 transition duration-300 ease-in-out' : 'opacity-0 transition duration-300 ease-in-out'">
                <UButton
                    class="back-to-top rounded-full w-[50px] h-[50px] justify-center"
                    icon="i-heroicons-chevron-up"
                    @click="backToTop"></UButton>
            </div>
            <div class="circle-button" id="chat-box-widgets">
                <button class="main-button" :class="showMenuChat ? 'active' : ''" @click="showMenuChat = !showMenuChat"></button>
                <div class="sub-buttons flex flex-col gap-2" :class="showMenuChat ? 'show' : 'hide'">
                    <a
                        type="button"
                        class="sub-button zalo"
                        :class="showMenuChat ? 'show' : ''"
                        href="https://m.me/gakbhld"
                        target="_blank">
                        <div class="sub-button-overlay">
                            <img src="/images/messenger.png" alt="" />
                        </div>
                    </a>
                    <a
                        type="button"
                        class="sub-button zalo"
                        :class="showMenuChat ? 'show' : ''"
                        href="https://zalo.me/1160130089290834053"
                        target="_blank">
                        <div class="sub-button-overlay">
                            <img src="/images/zalo-gak.png" alt="" />
                        </div>
                    </a>
                    <a
                        type="button"
                        class="sub-button zalo"
                        :class="showMenuChat ? 'show' : ''"
                        href="https://zalo.me/0569133339"
                        target="_blank">
                        <div class="sub-button-overlay">
                            <img src="/images/zalo-cskh.png" alt="" />
                        </div>
                    </a>
                    <button class="sub-button livechat" :class="showMenuChat ? 'show' : ''" rel-script="toggle-chat-box" data-id="livechat">
                        <a href="tel:0569133339" ga-tracking-label="Gọi hotline">
                            <img src="/images/phone-hotline-icon.png" alt="" />
                        </a>
                        <a href="tel:0569133339" class="sub-button-tooltip" ga-tracking-label="Gọi hotline">
                        <span class="sub-button-tooltip__hotline flex items-center gap-2 w-max">
                            <svg width="12" height="12" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.374 16.8797L19.1643 13.67C18.018 12.5236 16.0692 12.9822 15.6107 14.4724C15.2668 15.5041 14.1205 16.0773 13.0888 15.848C10.7961 15.2748 7.70102 12.2944 7.12786 9.88709C6.78396 8.85535 7.47176 7.70902 8.50345 7.36517C9.99368 6.90663 10.4522 4.95788 9.30588 3.81155L6.09616 0.60183C5.1791 -0.2006 3.80351 -0.2006 3.00108 0.60183L0.823054 2.77985C-1.35497 5.07251 1.05232 11.148 6.44006 16.5358C11.8278 21.9235 17.9033 24.4455 20.196 22.1528L22.374 19.9748C23.1765 19.0577 23.1765 17.6821 22.374 16.8797Z"
                                    fill="#2F5ACF"></path>
                            </svg>
                            <span class="sub-button-tooltip__number text-sm">0569133339</span>
                        </span>
                        </a>
                    </button>
                </div>
            </div>
        </main>

        <client-only>
            <UNotifications class="prose-p:mt-0">
                <template #title="{ title }">
                    <span class="font-bold" v-html="title" />
                </template>
                <template #description="{ description }">
                    <ul v-if="typeof description == 'object'" class="flex flex-col gap-4 !px-0 text-red-500 prose prose-li:!my-0">
                        <li class="px-0 list-disc" v-for="item in Object.values(description)">{{ item[0] }}</li>
                    </ul>
                    <div class="w-fit" v-else>
                        {{ description }}
                    </div>
                </template>
            </UNotifications>
        </client-only>
        <Footer />
        <div class="dmca-container">
            <a
                href="https://www.dmca.com/Protection/Status.aspx?ID=2f97a68e-2887-430c-a056-d40ed5fa44e2&refurl=https://gak.vn/"
                title="DMCA.com Protection Status"
                class="dmca-badge">
                <NuxtImg
                    format="webp"
                    src="https://images.dmca.com/Badges/DMCA_logo-grn-btn100w.png?ID=2f97a68e-2887-430c-a056-d40ed5fa44e2"
                    alt="DMCA.com Protection Status"
                    class="w-full h-full object-contain"
                /></a>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

//Swiper css
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import { useHeader } from '@@/store/useHeader';
import { storeToRefs } from 'pinia';

const useHeaderStore = useHeader();

const { isScrollDown, isLoadingPage, menuMobile } = storeToRefs(useHeaderStore);
const router = useRouter();
const { locale } = useI18n();
const showBackToTop = ref(false);
let lastScrollTop = 80;
const config = useRuntimeConfig();
const showMenuChat = ref(false);
const refreshData = ref(0);

watch(
    () => router.currentRoute.value.fullPath,
    () => {
        refreshData.value++;
    },
);


function handleCloseMenuMobile() {
    if (window.innerWidth > 991 && menuMobile.value) {
        menuMobile.value = false;
    }
}
function controlHeaderShowing() {
    if (!menuMobile.value) {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            isScrollDown.value = true;
        } else {
            isScrollDown.value = false;
        }
        lastScrollTop = st <= 80 ? 80 : st;
    } else {
        isScrollDown.value = false;
    }
}
function handleBackToTopButton() {
    if (window.scrollY > 500 && !showBackToTop.value) {
        showBackToTop.value = true;
    } else if (window.scrollY < 500 && showBackToTop.value) {
        showBackToTop.value = false;
    }
}
const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
useHead({
    script: [
        {
            innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5MFK8NDW');`
        }
    ]
})
useSchemaOrg([
    definePlace({
        name: process.env.NUXT_SITE_NAME,
        address: {
            addressCountry: process.env.NUXT_SITE_ADDRESS_COUNTRY,
            postalCode: process.env.NUXT_SITE_POSTAL_CODE,
            addressLocality: process.env.NUXT_SITE_ADDRESS_LOCALITY,
            addressRegion: process.env.NUXT_SITE_ADDRESS_REGION,
            streetAddress: process.env.NUXT_SITE_STREET_ADDRESS,
        },
        geo: {
            latitude: '10.786930681950782',
            longitude: '106.65401739821424',
        },
    }),
    defineOrganization({
        '@type': 'Organization',
        name: process.env.NUXT_SITE_NAME,
        url: process.env.WEB_BASE_URL,
        logo:'/logo.jpg',
        email: process.env.NUXT_SITE_EMAIL,
        phone: process.env.NUXT_SITE_PHONE,
        telephone: process.env.NUXT_SITE_PHONE,
        sameAs: [
            'https://www.facebook.com/GAKBHLD',
            'https://twitter.com/congtygak',
            'https://www.instagram.com/congtygak',
            'https://www.tiktok.com/@congtygak',
        ],
    }),
    defineOrganization({
        '@type': 'Store',
        name: process.env.NUXT_SITE_NAME,
        url: process.env.WEB_BASE_URL,
        logo: '/logo.jpg',
        email: process.env.NUXT_SITE_EMAIL,
        phone: process.env.NUXT_SITE_PHONE,
        telephone: process.env.NUXT_SITE_PHONE,
        sameAs: [
            'https://www.facebook.com/GAKBHLD',
            'https://twitter.com/congtygak',
            'https://www.instagram.com/congtygak',
            'https://www.tiktok.com/@congtygak',
        ],
    }),
    defineLocalBusiness({
        name: process.env.NUXT_SITE_NAME,
        url: process.env.WEB_BASE_URL,
        logo: '/logo.jpg',
        address: {
            addressCountry: process.env.NUXT_SITE_ADDRESS_COUNTRY,
            postalCode: process.env.NUXT_SITE_POSTAL_CODE,
            addressLocality: process.env.NUXT_SITE_ADDRESS_LOCALITY,
            addressRegion: process.env.NUXT_SITE_ADDRESS_REGION,
            streetAddress: process.env.NUXT_SITE_STREET_ADDRESS,
        },
        openingHoursSpecification: [
            {
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '12:00',
            },
            {
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '13:00',
                closes: '17:00',
            },
        ],
    }),
]);

onMounted(() => {
    window.addEventListener('resize', handleCloseMenuMobile, false);
    window.addEventListener('scroll', controlHeaderShowing, false);
    window.addEventListener('scroll', handleBackToTopButton, false);
    const script = document.createElement('script');
    script.src = 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js';
    document.body.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5MFK8NDW" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.prepend(noscript);
});
</script>
<style lang="scss" scoped>
.loading-container {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    @apply flex items-center justify-center;
    background-color: rgb(244, 244, 244);
}
.wrapper-desktop {
    padding-top: calc(var(--header-topbar) + var(--header-main)); // + var(--header-top-promotion) if need middle header
    @media screen and (max-width: 991px) {
        padding-top: var(--header-main);
    }
}
#chat-box-widgets {
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 1000;
    transition: all 0.3s;
    .main-button {
        background: url('/images/hotline-button.png') no-repeat center center;
        background-size: contain;
        height: 80px;
        width: 80px;
        &.active {
            filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.2));
            background: #2f5acf;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            &::after {
                content: '';
                position: absolute;
                width: 30px;
                height: 2px;
                background-color: #f0ff97;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
                transition: transform 0.2s ease-in-out;
            }
            &::before {
                content: '';
                position: absolute;
                width: 30px;
                height: 2px;
                background-color: #f0ff97;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(-45deg);
                transition: transform 0.2s ease-in-out;
            }
        }
    }
    .sub-buttons {
        visibility: hidden;
        opacity: 1;
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
        &.hide {
            visibility: hidden;
            opacity: 0;
            transform: translateX(-50%) translateY(40px);
        }
        &.show {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) translateY(-5px);
        }
    }
    .sub-button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background: none;
        transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        transform: translateY(50px);
        opacity: 0;
        padding: 0;
        &.show {
            transform: translateY(0px);
            opacity: 1;
        }
        &.livechat {
            &:hover {
                .sub-button-tooltip {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-5%);
                }
            }
        }
        .sub-button-overlay {
            position: absolute;
            z-index: 2247483644;
            pointer-events: none;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 1px solid #a5a5a5;
            img {
                width: 40px;
                height: 40px;
            }
        }
        .sub-button-tooltip {
            min-width: 110px;
            display: flex;
            flex-flow: column;
            position: absolute;
            top: 18px;
            right: 65px;
            background: #fff;
            border-radius: 6px;
            padding: 5px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.1s;
            transform: translateX(50%);
            box-shadow: 0px 3px 8px 0px #00000033;
            &.active {
                opacity: 1;
                visibility: visible;
                transform: translateX(-5%);
            }
        }
    }
}

.dmca-container {
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    opacity: 0;
    width: max-content;
    .dmca-badge {
        display: block;
        width: 182px;
        height: 36px;
        @media screen and (min-width: 768px) {
            width: 121px;
            height: 24px;
        }
    }
}
</style>
