<template>
    <Header />
    <div v-if="isLoadingPage" class="loading-container">
        <div class="loading-wrapper">
            <div class="loading"></div>
            <div id="loading-text">Welcome...</div>
        </div>
    </div>
    <main v-else class="wrapper-desktop relative w-full min-h-screen">
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
    </main>
    <UCard v-if="articleSEO && articleSEO.data && !loadingSeo" class="m-6">
        <div v-html="articleSEO.data"></div>
    </UCard>
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
import 'swiper/css/zoom';
import { useHeader } from '@@/store/useHeader';
import { storeToRefs } from 'pinia';

const useHeaderStore = useHeader();

const { isScrollDown, isLoadingPage } = storeToRefs(useHeaderStore);
const router = useRouter();
const { locale } = useI18n();
const showBackToTop = ref(false);
let lastScrollTop = 80;
const config = useRuntimeConfig();
const refreshData = ref(0);
const {
    data: articleSEO,
    pending: loadingSeo,
    error: errorSeo,
} = await useAsyncData(
    'product-item',
    async () =>
        useOriginalFetch(`/api/v1/seo-contents`, {
            params: {
                link: `${config.public.Url}${router.currentRoute.value.fullPath}`
            }
        }),
    {
        default: () => [],
        watch: [refreshData],
    },
);

watch(() => router.currentRoute.value.fullPath, () => {
    refreshData.value++
});

onMounted(() => {
    window.addEventListener('resize', handleHideHeader, false);
    window.addEventListener('scroll', controlHeaderShowing, false);
    window.addEventListener('scroll', handleBackToTopButton, false);
});
function handleHideHeader() {
    if (window.innerWidth < 991) {
        window.removeEventListener('scroll', controlHeaderShowing);
        isScrollDown.value = false;
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
            latitude: '10.786930681950782',
            longitude: '106.65401739821424',
        },
    }),
    defineOrganization({
        '@type': 'Organization',
        name: process.env.NUXT_SITE_NAME,
        url: process.env.WEB_BASE_URL,
        logo: process.env.WEB_BASE_URL + '/logo.jpeg',
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
        logo: process.env.WEB_BASE_URL + '/logo.jpeg',
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
        logo: process.env.WEB_BASE_URL + '/logo.jpeg',
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
