<template>
    <Header />
    <main class="wrapper-desktop relative w-full min-h-screen">
        <div class="w-full relative main">
            <slot />
        </div>
        <div
            class="scroll-to-top fixed bottom-8 left-4 z-[999]"
            :class="showBackToTop ? 'opacity-100 transition duration-300 ease-in-out' : 'opacity-0 transition duration-300 ease-in-out'">
            <UButton
                class="back-to-top rounded-full w-[50px] h-[50px] justify-center"
                icon="i-heroicons-chevron-up"
                @click="backToTop"></UButton>
        </div>
<!--        <div-->
<!--            class="scroll-to-top fixed bottom-8 right-4"-->
<!--            :class="showBackToTop ? 'opacity-100 transition duration-300 ease-in-out' : 'opacity-0 transition duration-300 ease-in-out'">-->
<!--            <UButton-->
<!--                class="back-to-top rounded-full w-[50px] h-[50px] justify-center"-->
<!--                icon="i-heroicons-chevron-up"-->
<!--                @click="backToTop"></UButton>-->
<!--        </div>-->
    </main>
    <Footer />
    <div class="dmca-container">
        <a
            href="//www.dmca.com/Protection/Status.aspx?ID=96e6318b-dec0-4669-9c13-a488589c8416"
            title="DMCA.com Protection Status"
            class="dmca-badge">
            <NuxtImg
                format="webp"
                src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=96e6318b-dec0-4669-9c13-a488589c8416"
                alt="DMCA.com Protection Status"
                class="w-full h-full object-contain"
        /></a>
    </div>
    <UNotifications class="z-99999" />
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import '@vueform/multiselect/themes/default.css';
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
import { useHeader } from '@@/store/useHeader';
import { storeToRefs } from 'pinia';

const useHeaderStore = useHeader();

const { isScrollDown } = storeToRefs(useHeaderStore);
const router = useRouter();
const { locale } = useI18n();
const showBackToTop = ref(false);
let lastScrollTop = 80;
onMounted(() => {
    window.addEventListener('resize', handleHideHeader, false);
    window.addEventListener('scroll', controlHeaderShowing, false);
    window.addEventListener('scroll', handleBackToTopButton, false);
});
function handleHideHeader() {
    if (window.innerWidth < 991) {
        window.removeEventListener('scroll', controlHeaderShowing);
    } else {
        window.addEventListener('scroll', controlHeaderShowing, false);
    }
}
function controlHeaderShowing() {
    if (window.innerWidth > 991) {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            isScrollDown.value = true;
        } else {
            isScrollDown.value = false;
        }
        lastScrollTop = st <= 80 ? 80 : st;
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
            latitude: "10.786930681950782",
            longitude: "106.65401739821424"
        }
    }),
    defineOrganization({
        '@type': 'Organization',
        name: process.env.NUXT_SITE_NAME,
        url: process.env.WEB_BASE_URL,
        logo: process.env.WEB_BASE_URL + '/__og-image__/image/og.png',
        email:process.env.NUXT_SITE_EMAIL,
        phone:process.env.NUXT_SITE_PHONE,
        telephone:process.env.NUXT_SITE_PHONE,
        sameAs: [
            'https://www.facebook.com/GAKBHLD',
            'https://twitter.com/congtygak',
            'https://www.instagram.com/congtygak',
            'https://www.tiktok.com/@congtygak',
        ]
    }),
    defineOrganization({
        '@type': 'Store',
        name: process.env.NUXT_SITE_NAME,
        url: process.env.WEB_BASE_URL,
        logo: process.env.WEB_BASE_URL + '/__og-image__/image/og.png',
        email:process.env.NUXT_SITE_EMAIL,
        phone:process.env.NUXT_SITE_PHONE,
        telephone:process.env.NUXT_SITE_PHONE,
        sameAs: [
            'https://www.facebook.com/GAKBHLD',
            'https://twitter.com/congtygak',
            'https://www.instagram.com/congtygak',
            'https://www.tiktok.com/@congtygak',
        ]
    }),
    defineLocalBusiness({
        name: process.env.NUXT_SITE_NAME,
        url: process.env.WEB_BASE_URL,
        logo: process.env.WEB_BASE_URL + '/__og-image__/image/og.png',
        address: {
            addressCountry: process.env.NUXT_SITE_ADDRESS_COUNTRY,
            postalCode: process.env.NUXT_SITE_POSTAL_CODE,
            addressLocality: process.env.NUXT_SITE_ADDRESS_LOCALITY,
            addressRegion: process.env.NUXT_SITE_ADDRESS_REGION,
            streetAddress: process.env.NUXT_SITE_STREET_ADDRESS,
        },
        openingHoursSpecification: [
            {
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                opens: '08:00',
                closes: '12:00',
            },
            {
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                opens: '13:00',
                closes: '17:00',
            },
        ],
    }),
])
</script>
<style lang="scss" scoped>
.wrapper-desktop {
    padding-top: calc(var(--header-topbar) + var(--header-top-promotion) + var(--header-main));
    @media screen and (max-width: 991px) {
        padding-top: var(--header-main);
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
