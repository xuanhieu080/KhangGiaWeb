<template>
    <NuxtLayout name="main">
        <div v-if="!isLoadingPage" class="dashboard">
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
                    <ProductList :productList="productNew?.data" />
                </div>
                <div v-else-if="loadingProductNew" class="product-box my-4">
                    <ProductList :productList="[]" />
                </div>
                <div v-if="!loadingProductHot && productIndex === 1" class="product-box my-4">
                    <ProductList :productList="productHot?.data" />
                </div>
                <div v-if="!loadingProductUpcoming && productIndex === 2" class="product-box my-4">
                    <ProductList :productList="productUpcoming?.data" />
                </div>
            </div>
            <div class="banner-block h-full">
                <BannerBlock key="banner-block-1" :bannerBlock="bannerBlock" :isWhite="true" />
            </div>
            <div v-if="!loadingProductUniform" class="container mx-auto overflow-hidden lg:overflow-visible my-4">
                <ProductCollectionOther
                    key="container-1"
                    :loading="loadingProductUniform"
                    :productList="productUpcoming?.data"
                    :collectionLink="'/collection/dong-phuc-cong-ty'"
                    :collectionTitle="'CÁC MẪU ĐỒNG PHỤC CÔNG TY 2024 MỚI NHẤT'" />
            </div>
            <div v-else-if="loadingProductUniform" class="container mx-auto overflow-hidden lg:overflow-visible my-4">
                <ProductList :productList="[]" />
            </div>
            <div class="banner-block h-full">
                <BannerBlock key="banner-block-2" :bannerBlock="bannerBlock2" />
            </div>
            <div v-if='!loadingProductDashboard' class='container mx-auto overflow-hidden lg:overflow-visible my-4'>
                <ProductCollectionOther
                    key='container-2'
                    :loading='loadingProductDashboard'
                    :productList="productDashboard?.data"
                    :collectionTitle="'QUẦN ÁO GHILE BẢO HỘ CHẤT LƯỢNG CAO'"
                    :collectionLink="'/collection/quan-ao-ghi-le-bao-ho-chat-luong-cao'" />
            </div>
            <div class="banner-block container mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-4 w-full h-full">
                <BannerBlock key="banner-block-3" :bannerBlock="bannerBlock3" :split-banner="true" />
                <BannerBlock key="banner-block-4" :bannerBlock="bannerBlock4" :split-banner="true" />
            </div>
            <div class="container mx-auto w-full h-full my-4">
                <CategoryBox :categoryList="categoryList" />
            </div>
            <div class="container mx-auto w-full my-4  overflow-hidden lg:overflow-visible">
                <DiaryWrapper :diaryList="diaryList" :autoPlay="true" />
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import { defineOrganization } from '@unhead/schema-org';

definePageMeta({ layout: false, auth: false });
import Banner from '@/components/Banners/Banner.vue';
import BannerBlock from '@/components/Banners/BannerBlock.vue';
import ProductList from '@/components/products/ProductSwiper';
import ProductCollection from '@/components/products/ProductCollection';
import ProductCollectionOther from '@/components/products/ProductCollectionOther.vue';
import CategoryBox from '@/components/categories/CategoryBox.vue';
import DiaryWrapper from '@/components/diary/diaryWrapper.vue';
const localePath = useLocalePath();

import { useHeader } from '@@/store/useHeader';
const useHeaderStore = useHeader();
const { isScrollDown, isLoadingPage } = storeToRefs(useHeaderStore);
const productIndex = ref(0);

const bannerList = ref([
    {
        url: '/images/banner_1.jpg',
        name: 'banner 1',
    },
    {
        url: '/images/banner_2.jpg',
        name: 'banner 2',
    },
]);

const bannerBlock = ref({
    image_desktop: '/images/banner_3.jpg',
    image_mobile: '/images/banner_3_mobile.jpg',
    title: 'Đồng phục',
    description: 'Công ty',
    link: 'dong-phuc',
});
const bannerBlock2 = ref({
    image_desktop: '/images/banner_4.jpg',
    image_mobile: '/images/banner_4_mobile.jpg',
    title: 'Áo ghile kỹ sư',
    description: 'Chuyên dụng - Chất lượng - Uy tín',
    link: 'ao-ghile',
});
const bannerBlock3 = ref({
    image_desktop: '/images/banner_5.jpg',
    image_mobile: '/images/banner_5.jpg',
    title: 'Nguyên phụ liệu',
    subtitle: 'Phản Quang Chất lượng cao',
    link: 'articles',
});
const bannerBlock4 = ref({
    image_desktop: '/images/banner_6.jpg',
    image_mobile: '/images/banner_6.jpg',
    title: 'Nguyên phụ liệu',
    subtitle: 'Vải /lưới',
    link: 'articles',
});

const categoryList = ref([
    {
        name: 'Tất cả sản phẩm',
        image: '/images/tat-ca-san-pham.jpg',
        link: localePath({ name: 'collection-slug', params: { slug: 'tat-ca-san-pham' } }),
    },
    {
        name: 'Đồ thể thao',
        image: '/images/phan_quang_2B.jpg',
        link: localePath({ name: 'collection-slug', params: { slug: 'tat-ca-san-pham' } }),
    },
    {
        name: 'Mặc hàng ngày',
        image: '/images/phan_quang_3M.jpg',
        link: localePath({ name: 'collection-slug', params: { slug: 'tat-ca-san-pham' } }),
    },
    {
        name: 'Đồ lót nam',
        image: '/images/phan_quang_palize.jpg',
        link: localePath({ name: 'collection-slug', params: { slug: 'tat-ca-san-pham' } }),
    },
]);
const diaryList = ref([
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/phan_quang_2B.jpg',
        image_sale: '/images/phan_quang_2B.jpg',
        price: 200000,
        discount: 10,
    },
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/phan_quang_3M.jpg',
        image_sale: '/images/phan_quang_3M.jpg',
        price: 129000,
        discount: 16,
    },
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/phan_quang_2B.jpg',
        image_sale: '/images/phan_quang_2B.jpg',
        price: 300000,
        discount: 25,
    },
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/phan_quang_3M.jpg',
        image_sale: '/images/phan_quang_3M.jpg',
        price: 299000,
        discount: 50,
    },
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: '/images/phan_quang_palize.jpg',
        image_sale: '/images/phan_quang_palize.jpg',
        price: 199000,
        discount: 0,
    },
]);

//data
const { data: productDashboard, pending: loadingProductDashboard } = await useLazyAsyncData('product-dashboard', async () =>
    useOriginalFetch('/api/v1/products',{
        params:{
            category_name:'ghi le',
            limit: 4,
        }
    }),
);
const { data: productNew, pending: loadingProductNew } = await useLazyAsyncData('product-new', async () =>
    useOriginalFetch('/api/v1/products', {
        params: {
            sort: {
                'desc[0]': 'id',
            },
            is_new: 1,
            limit: 20,
        },
    }),
);
const { data: productHot, pending: loadingProductHot } = await useLazyAsyncData('product-hot', async () =>
    useOriginalFetch('/api/v1/products', {
        params: {
            sort: {
                'desc[0]': 'id',
            },
            is_hot: 1,
            limit: 20,
        },
    }),
);
const { data: productUpcoming, pending: loadingProductUpcoming } = await useLazyAsyncData('product-upcoming', async () =>
    useOriginalFetch('/api/v1/products', {
        params: {
            sort: {
                'desc[0]': 'id',
            },
            is_upcoming: 1,
            limit: 20,
        },
    }),
);
const { data: productUniform, pending: loadingProductUniform } = await useLazyAsyncData('product-uniform', async () =>
    useOriginalFetch('/api/v1/products', {
        params: {
            sort: {
                'desc[0]': 'id',
            },
            is_uniform: 1,
            limit: 4,
        },
    }),
);

///SEO
const config = useRuntimeConfig();
let pageTitle = 'Trang chủ';
useHead({
    templateParams: {
        site: {
            name: config.public.name,
        },
        separator: '|',
    },

    titleTemplate: '%site.name %separator %s',
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
    description:  config.public.description,
    ogDescription:  config.public.description,
    ogTitle: pageTitle,
    title: pageTitle,
    twitterTitle: pageTitle,
    twitterDescription:  config.public.description,
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
