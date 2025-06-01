<template>
    <NuxtLayout name="main">
        <div class="dashboard">
            <Banner :bannerList="bannerList" :autoPlay="true" />
            <div class="container mx-auto overflow-hidden lg:overflow-visible">
                <div class="flex flex-wrap items-center gap-4 w-full my-4">
                    <UButton
                        @click="
                            () => {
                                productIndex = 0;
                            }
                        "
                        variant="ghost"
                        color="none"
                        size="lg"
                        class="tab-button"
                        :class="{ active: productIndex === 0 }"
                        >Sản phẩm mới</UButton
                    >
                    <UButton
                        @click="
                            () => {
                                productIndex = 1;
                            }
                        "
                        variant="ghost"
                        color="none"
                        size="lg"
                        class="tab-button"
                        :class="{ active: productIndex === 1 }"
                        >Sản phẩm nổi bật</UButton
                    >
                    <UButton
                        @click="
                            () => {
                                productIndex = 2;
                            }
                        "
                        variant="ghost"
                        color="none"
                        size="lg"
                        class="tab-button"
                        :class="{ active: productIndex === 2 }">
                        Sắp ra mắt
                        <UIcon name="i-ic-round-star" class="fs-22 tab-button-icon" dynamic />
                    </UButton>
                </div>
                <div v-if="!loadingProductNew && productIndex === 0" class="product-box my-4">
                    <ProductList :productList="productNew.data" />
                </div>
                <div v-else-if="loadingProductNew" class="product-box my-4">
                    <ProductList :productList="[]" />
                </div>
                <div v-if="!loadingProductHot && productIndex === 1" class="product-box my-4">
                    <ProductList :productList="productHot.data" />
                </div>
                <div v-if="!loadingProductUpcoming && productIndex === 2" class="product-box my-4">
                    <ProductList :productList="productUpcoming.data" />
                </div>
            </div>
            <div class="banner-block h-full">
                <BannerBlock key="banner-block-1" :bannerBlock="bannerBlock" :isWhite="true" />
            </div>
            <div v-if="!loadingProductUniform" class="container mx-auto overflow-hidden lg:overflow-visible my-4">
                <ProductCollectionOther
                    key="container-1"
                    :loading="loadingProductUniform"
                    :productList="productUniform.data"
                    :collectionLink="'/collection/dong-phuc'"
                    :collectionTitle="'CÁC MẪU ĐỒNG PHỤC CÔNG TY MADE BY GAK'" />
            </div>
            <div v-else-if="loadingProductUniform" class="container mx-auto overflow-hidden lg:overflow-visible my-4">
                <ProductList :productList="[]" />
            </div>
            <div class="banner-block h-full">
                <BannerBlock key="banner-block-2" :bannerBlock="bannerBlock2"  :isWhite="true" />
            </div>
            <div v-if='!loadingProductDashboard' class='container mx-auto overflow-hidden lg:overflow-visible my-4'>
                <ProductCollectionOther
                    key='container-2'
                    :loading='loadingProductDashboard'
                    :productList="productDashboard.data"
                    :collectionTitle="'Áo gile kỹ sư cao cấp'"
                    :collectionLink="'/collection/ao-ghi-le'" />
            </div>
            <div class="banner-block container mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-4 w-full h-full">
                <BannerBlock key="banner-block-3" :bannerBlock="bannerBlock3" :split-banner="true" />
                <BannerBlock key="banner-block-4" :bannerBlock="bannerBlock4" :split-banner="true" />
            </div>
            <div class="container mx-auto w-full h-full">
                <ClientOnly>
                    <CategoryBox :categoryList="categoryList" />
                </ClientOnly>
            </div>
            <div class="container mx-auto w-full my-4  overflow-hidden lg:overflow-visible">
                <DiaryWrapper :diaryList="diaryList" :autoPlay="true" />
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
definePageMeta({ layout: false, auth: false });
import Banner from '@/components/Banners/Banner.vue';
import BannerBlock from '@/components/Banners/BannerBlock.vue';
import ProductList from '@/components/products/ProductSwiper';
import ProductCollectionOther from '@/components/products/ProductCollectionOther.vue';
import CategoryBox from '@/components/categories/CategoryBox.vue';
import DiaryWrapper from '@/components/diary/diaryWrapper.vue';
const localePath = useLocalePath();

import { storeToRefs } from 'pinia';
import { useLanguageLink } from '~/store/languageLink';

const { locale, t: trans } = useI18n()

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);

if (locale.value == 'vi') {
    link.value = 'en';
} else {
    link.value = 'en';
}

import { useHeader } from '@@/store/useHeader';
const useHeaderStore = useHeader();
const { isScrollDown, isLoadingPage } = storeToRefs(useHeaderStore);
const productIndex = ref(0);

const bannerList = ref([
    {
        url: '/images/banner_1.jpg',
        url_mobile: '/images/banner_mobile_1.jpg',
        name: 'banner 1',
        link: localePath({ name: 'collection-slug', params: { slug: 'ao-ghi-le'} })
    },
    {
        url: '/images/banner_2.jpg',
        url_mobile: '/images/banner_mobile_2.jpg',
        name: 'banner 2',
        link: localePath({ name: 'tat-ca-san-pham' })
    },
]);

const bannerBlock = ref({
    image_desktop: '/images/banner_3.jpg',
    image_mobile: '/images/banner_3_mobile.jpg',
    title: 'Đồng phục',
    description: 'Công ty mẫu mã đẹp',
    link: 'dong-phuc',
});
const bannerBlock2 = ref({
    image_desktop: '/images/banner_4.jpg',
    image_mobile: '/images/banner_4_mobile.jpg',
    title: 'Áo ghile kỹ sư',
    description: 'Chuyên dụng - Chất lượng - Uy tín',
    link: 'ao-ghi-le',
});
const bannerBlock3 = ref({
    image_desktop: '/images/banner_5.jpg',
    image_mobile: '/images/banner_5.jpg',
    title: 'Nguyên phụ liệu',
    subtitle: 'Phản Quang Chất lượng cao',
    link: 'phan-quang'
});
const bannerBlock4 = ref({
    image_desktop: '/images/banner_6.jpg',
    image_mobile: '/images/banner_6.jpg',
    title: 'Nguyên phụ liệu',
    subtitle: 'Vải /lưới',
    link: 'vai'
});

const categoryList = ref([
    {
        name: 'Tất cả sản phẩm',
        image: '/images/tat-ca-san-pham.jpg',
        link: localePath({ name: 'tat-ca-san-pham' }),
    },
    {
        name: 'Đồ thể thao',
        image: '/images/phan_quang_2B.jpg',
        link: localePath({ name: 'collection-slug', params: { slug: 'ao-phan-quang-thun-2-ben'} })
    },
    {
        name: 'Mặc hàng ngày',
        image: '/images/phan_quang_3M.jpg',
        link: localePath({ name: 'collection-slug', params: { slug: 'ao-phan-quang-kieu-3m'} })
    },
    {
        name: 'Đồ lót nam',
        image: '/images/phan_quang_palize.jpg',
        link: localePath({ name: 'collection-slug', params: { slug: 'ao-phan-quang-palize'} })
    },
]);
const diaryList = ref([
    {
        name: 'Áo phản quang thun 2 bên',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/diary-phan-quang-thun-luoi.jpg',
        image_sale: '/images/diary-phan-quang-thun-luoi.jpg',
        price: 200000,
        discount: 10,
    },
    {
        name: 'Áo phản quang kiểu 3M',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/diary-phan-quang-3M.jpg',
        image_sale: '/images/diary-phan-quang-3M.jpg',
        price: 129000,
        discount: 16,
    },
    {
        name: 'Áo phản quang Hà Nội',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/diary-phan-quang-ha-noi.jpg',
        image_sale: '/images/diary-phan-quang-ha-noi.jpg',
        price: 300000,
        discount: 25,
    },
    {
        name: 'Áo phản quang Palize',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/diary-phan-quang-palize.jpg',
        image_sale: '/images/diary-phan-quang-palize.jpg',
        price: 299000,
        discount: 50,
    },
    {
        name: 'Áo phản quang túi lưới',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/diary-phan-quang-tui-luoi.jpg',
        image_sale: '/images/diary-phan-quang-tui-luoi.jpg',
        price: 199000,
        discount: 0,
    },
]);

//data
// const { data: productDashboard, pending: loadingProductDashboard } = await useLazyAsyncData('product-dashboard', async () =>
//     useOriginalFetch('/api/v1/products',{
//         params:{
//             category_slug:'ao-ghi-le',
//             limit: 4,
//         }
//     }),
// );
// const { data: productNew, pending: loadingProductNew } = await useLazyAsyncData('product-new', async () =>
//     useOriginalFetch('/api/v1/products', {
//         params: {
//             sort: {
//                 'desc[0]': 'id',
//             },
//             is_new: 1,
//             limit: 20,
//         },
//     }),
// );
// const { data: productHot, pending: loadingProductHot } = await useLazyAsyncData('product-hot', async () =>
//     useOriginalFetch('/api/v1/products', {
//         params: {
//             sort: {
//                 'desc[0]': 'id',
//             },
//             is_hot: 1,
//             limit: 20,
//         },
//     }),
// );
// const { data: productUpcoming, pending: loadingProductUpcoming } = await useLazyAsyncData('product-upcoming', async () =>
//     useOriginalFetch('/api/v1/products', {
//         params: {
//             sort: {
//                 'desc[0]': 'id',
//             },
//             is_upcoming: 1,
//             limit: 20,
//         },
//     }),
// );
// const { data: productUniform, pending: loadingProductUniform } = await useLazyAsyncData('product-uniform', async () =>
//     useOriginalFetch('/api/v1/products', {
//         params: {
//             sort: {
//                 'desc[0]': 'id',
//             },
//             is_uniform: 1,
//             limit: 4,
//         },
//     }),
// );

// const productDashboard = ref([]);
// const loadingProductDashboard = ref(true);


const {
    data: productDashboard,
    pending: loadingProductDashboard,
} = await useAsyncData(
    'ao-ghi-le',
    async () =>
        useOriginalFetch(`/api/v1/products`,{
            params: {
                category_slug:'ao-ghi-le',
                limit: 4,
            },
        }),
    {
        default: () => [],
    },
);


const {
    data: productNew,
    pending: loadingProductNew,
} = await useAsyncData(
    'product-new',
    async () =>
        useOriginalFetch(`/api/v1/product-news`,{
            sort: {
                'desc[0]': 'id',
            },
            is_new: 1,
            limit: 20,
        }),
    {
        default: () => [],
    },
);


const {
    data: productHot,
    pending: loadingProductHot,
} = await useAsyncData(
    'product-hot',
    async () =>
        useOriginalFetch(`/api/v1/product-hots`,{
            sort: {
                'desc[0]': 'id',
            },
            is_hot: 1,
            limit: 20,
        }),
    {
        default: () => [],
    },
);


const {
    data: productUpcoming,
    pending: loadingProductUpcoming,
} = await useAsyncData(
    'product-upcoming',
    async () =>
        useOriginalFetch(`/api/v1/product-upcoming`,{
            sort: {
                'desc[0]': 'id',
            },
            is_upcoming: 1,
            limit: 20,
        }),
    {
        default: () => [],
    },
);

// const loadingProductNew = ref(false)
// const productNew = productNews
//
// const loadingProductHot = ref(false)
// const productHot = productHots
//
// const loadingProductUpcoming = ref(false)
// const productUpcoming = productUpcomings
//
// const productDashboard = aoGhiLe
// const loadingProductDashboard = ref(false)

// const productUniform = productUniforms
// const loadingProductUniform = ref(false)

const {
    data: productUniform,
    pending: loadingProductUniform,
} = await useAsyncData(
    'product-uniforms',
    async () =>
        useOriginalFetch(`/api/v1/product-uniforms`,{
            sort: {
                'desc[0]': 'id',
            },
            is_uniform: 1,
            limit: 4,
        }),
    {
        default: () => [],
    },
);


///SEO
const config = useRuntimeConfig();
let pageTitle = 'Công ty GAK | Xưởng sản xuất vải, lưới, quần áo bảo hộ, đồng phục giá gốc!';
let pageDescription = 'Công ty GAK công ty chuyên cung cấp quần áo bảo hộ lao động, đồng phục, vải, lưới, phản quang giá sỉ, nguồn hàng sẵn có! Liên hệ GAK tư vấn tận tâm.';
useHead({
    templateParams: {
        site: {
            name: config.public.name,
        },
        separator: '|',
    },

    titleTemplate: '%s',
})

defineOgImageComponent('GAK', {
    title: pageTitle,
    description: config.public.description,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url:  config.public.logo,
});
let seoMeta = {
    description:  pageDescription,
    ogDescription:  pageDescription,
    ogTitle: pageTitle,
    title: pageTitle,
    twitterTitle: pageTitle,
    twitterDescription:  pageDescription,
};
useSeoMeta(seoMeta);
</script>
<style lang="scss" scoped>
.dashboard {
    @apply flex flex-col gap-4 w-full bg-white;
    .tab-button {
        height: 45px;
        padding: 16px;
        border-radius: 24px;
        @apply border-green-500 border text-green-600 font-medium;
        &.active {
            @apply border-none bg-green-500 text-white;
        }
    }
}
</style>
