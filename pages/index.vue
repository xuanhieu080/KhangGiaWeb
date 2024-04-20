<template>
    <NuxtLayout name="main">
        <div v-if="!isLoadingPage" class="dashboard">
            <Banner :bannerList="bannerList" :autoPlay="true" />
            <div class="container mx-auto overflow-hidden md:overflow-visible">
                <div class="flex items-center gap-4 w-full my-4">
                    <UButton variant="ghost" color="none" size="lg" class="tab-button active">Sản phẩm mới</UButton>
                    <UButton variant="ghost" color="none" size="lg" class="tab-button">Sản phẩm nổi bật</UButton>
                    <UButton variant="ghost" color="none" size="lg" class="tab-button">
                        Sắp ra mắt
                        <UIcon name="i-ic-round-star" class="fs-22 tab-button-icon" dynamic />
                    </UButton>
                </div>
                <div v-if="!loadingCategoryDashboard" class="product-box my-4">
                    <ProductList :productList="categoryDashboard.data && categoryDashboard.data.length > 0 ? categoryDashboard.data[0].products : []" />
                </div>
            </div>
            <div class="banner-block h-full">
                <BannerBlock key="banner-block-1" :bannerBlock="bannerBlock" />
            </div>
            <div v-if="!loadingCategoryDashboard" class="container mx-auto overflow-hidden md:overflow:visible my-4">
                <ProductCollection
                    key="container-1"
                    :loading="loadingCategoryDashboard"
                    :productList="categoryDashboard.data && categoryDashboard.data.length > 0 ? categoryDashboard.data[0] : []"
                    :collectionTitle="'CÁC MẪU ĐỒNG PHỤC CÔNG TY 2024 MỚI NHẤT'"
                    :collectionLink="'/articles'" />
            </div>
            <div class="banner-block h-full">
                <BannerBlock key="banner-block-2" :bannerBlock="bannerBlock2" />
            </div>
            <div v-if="!loadingCategoryDashboard" class="container mx-auto overflow-hidden md:overflow:visible my-4">
                <ProductCollection
                    key="container-2"
                    :loading="loadingCategoryDashboard"
                    :productList="categoryDashboard.data && categoryDashboard.data.length > 1 ? categoryDashboard.data[1] : []"
                    :collectionTitle="'QUẦN ÁO GHILE BẢO HỘ CHẤT LƯỢNG CAO'"
                    :collectionLink="'/articles'" />
            </div>
            <div class="banner-block container mx-auto flex flex-col md:flex-row justify-between gap-1 md:gap-4 w-full h-full">
                <BannerBlock key="banner-block-3" :bannerBlock="bannerBlock3" :split-banner="true" />
                <BannerBlock key="banner-block-4" :bannerBlock="bannerBlock4" :split-banner="true" />
            </div>
            <div class="container mx-auto w-full h-full my-4">
                <CategoryBox :categoryList="categoryList" />
            </div>
            <div class="container mx-auto w-full my-4">
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
import CategoryBox from '@/components/categories/CategoryBox.vue';
import DiaryWrapper from '@/components/diary/diaryWrapper.vue';
const localePath = useLocalePath();

import { useHeader } from '@@/store/useHeader';
const useHeaderStore = useHeader();
const { isScrollDown, isLoadingPage } = storeToRefs(useHeaderStore);

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
;
const bannerBlock = ref({
    image_desktop: '/images/banner_3.jpg',
    image_mobile: '/images/banner_3.jpg',
    title: 'Đồng phục',
    description: 'Công ty',
    link: 'dong-phuc',
});
const bannerBlock2 = ref({
    image_desktop: '/images/banner_4.jpg',
    image_mobile: '/images/banner_4.jpg',
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
        link: '/collection/tat-ca-san-pham',
    },
    {
        name: 'Đồ thể thao',
        image: '/images/phan_quang_2B.jpg',
        link: '/collection/do-the-thao',
    },
    {
        name: 'Mặc hàng ngày',
        image: '/images/phan_quang_3M.jpg',
        link: '/collection/mac-hang-ngay',
    },
    {
        name: 'Đồ lót nam',
        image: '/images/phan_quang_palize.jpg',
        link: '/collection/do-lot-nam',
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
const { data: categoryDashboard, pending: loadingCategoryDashboard } = await useLazyAsyncData('category-dashboard', async () =>
    useOriginalFetch('/api/v1/categories/dashboard'),
);

///SEO
const config = useRuntimeConfig();

defineOgImageComponent('GAK', {
    title: config.public.title,
    description: config.public.description,
    theme: '#ff0000',
    colorMode: 'dark',
});
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
