<template>
    <NuxtLayout name="main">
        <div class="category-page bg-white">
            <div class="md:hidden">
                <img src="/images/all-products/all-banner-1_1.jpg" class="h-full w-full object-contain" />
            </div>
            <div class="hidden md:block">
                <img src="/images/all-products/all-banner-1.jpg" class="h-full w-full object-contain" />
            </div>
            <div v-if="!loadingProductCollection" class="category-main flex lg:flex-row flex-col justify-between w-full gap-6 px-5">
                <div class="category-data flex flex-col gap-4 flex-1">
                    <div v-if="productCollection.data && productCollection.data.length > 0" class="category-data-list">
                        <div
                            v-for="product in productCollection.data"
                            class="category-data-item data-desktop hidden md:block p-2 rounded-lg"
                            :key="product">
                            <ProductCard :product="product" />
                        </div>
                        <div
                            v-for="(product, index) in productCollection.data"
                            :class="index > 3 ? '!hidden' : ''"
                            class="category-data-item data-mobile block md:hidden p-2 rounded-lg"
                            :key="product">
                            <ProductCard :product="product" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="category-data-list my-4 p-4">
                <div v-for="product in 4" class="category-data-item" :key="product">
                    <ProductCard />
                </div>
            </div>
            <div
                v-show="index < 5"
                v-if="!loadingProductCollectionAll"
                v-for="(category, index) in productCollectionAll.data"
                class="category-product py-4">
                <div class="product-category-title md:!hidden">
                    {{ index != 4 ? 'Áo phản quang' : 'Áo đồng phục' }}
                    <h2 v-if="index == 0" class="sub-title">
                        {{ 'lưới thun 2 bên' }}
                    </h2>
                    <h2 v-if="index == 1" class="sub-title">
                        {{ 'hà nội' }}
                    </h2>
                    <h2 v-if="index == 2" class="sub-title">
                        {{ 'kiểu 3M' }}
                    </h2>
                    <h2 v-if="index == 3" class="sub-title">
                        {{ 'Palize' }}
                    </h2>
                    <h2 v-if="index == 4" class="sub-title">
                        {{ 'công nhân' }}
                    </h2>
                </div>
                <div class="md:hidden">
                    <img v-if="index == 0" src="/images/all-products/all-banner-2_2.jpg" class="h-full w-full object-contain" />
                    <img v-if="index == 1" src="/images/all-products/all-banner-3_3.jpg" class="h-full w-full object-contain" />
                    <img v-if="index == 2" src="/images/all-products/all-banner-4_4.jpg" class="h-full w-full object-contain" />
                    <img v-if="index == 3" src="/images/all-products/all-banner-5_5.jpg" class="h-full w-full object-contain" />
                    <img v-if="index == 4" src="/images/all-products/all-banner-6_6.jpg" class="h-full w-full object-contain" />
                </div>
                <div class="hidden md:flex items-center justify-between w-full gap-4 bg-gray-100">
                    <div class="mx-auto flex items-center justify-between w-full gap-4 relative">
                        <div
                            class="flex flex-col gap-4 absolute top-1/2 left-[22px] -translate-y-1/2 max-w-xs lg:max-w-md 2xl:max-w-screen-sm">
                            <h2 v-if="index == 0" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-bold uppercase !mx-0 !my-0 md:my-auto">
                                {{ 'Sản phẩm áo phản quang lưới thun 2 bên' }}
                            </h2>
                            <h2 v-if="index == 1" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-bold uppercase !mx-0 !my-0 md:my-auto">
                                {{ 'Sản phẩm áo phản quang hà nội' }}
                            </h2>
                            <h2 v-if="index == 2" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-bold uppercase !mx-0 !my-0 md:my-auto">
                                {{ 'Sản phẩm áo phản quang kiểu 3M' }}
                            </h2>
                            <h2 v-if="index == 3" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-bold uppercase !mx-0 !my-0 md:my-auto">
                                {{ 'Sản phẩm áo phản quang Palize' }}
                            </h2>
                            <h2 v-if="index == 4" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-bold uppercase !mx-0 !my-0 md:my-auto">
                                {{ 'Đồng phục công nhân' }}
                            </h2>
                            <h3 v-if="index == 0" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-medium sub-title !m-0">
                                {{ 'Phù hợp mọi môi trường làm việc' }}
                            </h3>
                            <h3 v-if="index == 1" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-medium sub-title !m-0">
                                {{ 'Dòng sản phẩm ưa chuộng ở thị trường phía bắc' }}
                            </h3>
                            <h3 v-if="index == 2" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-medium sub-title !m-0">
                                {{ 'Mặc đẹp, đứng form, nổi tiếng' }}
                            </h3>
                            <h3 v-if="index == 3" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-medium sub-title !m-0">
                                {{ 'Mặt hàng bán chạy số #2' }}
                            </h3>
                            <h3 v-if="index == 4" class="!text-xl lg:!text-3xl 2xl:!text-4xl font-medium sub-title !m-0">
                                {{ 'Vải kaki chéo 2-1 thoáng mát, giá tốt nhất thị trường' }}
                            </h3>
                            <UButton
                                variant="solid"
                                color="none"
                                size="xl"
                                class="h-14 2xl:h-16 flex justify-center w-[300px] 2xl:w-[400px] rounded-2xl bg-green-700 mt-4"
                                :to="localePath({ name: 'collection-slug', params: { slug: category.slug } })">
                                {{ 'Tất cả sản phẩm' }}
                            </UButton>
                        </div>
                        <img v-if="index == 0" src="/images/all-products/all-banner-2.jpg" class="h-full w-full object-contain" />
                        <img v-if="index == 1" src="/images/all-products/all-banner-3.jpg" class="h-full w-full object-contain" />
                        <img v-if="index == 2" src="/images/all-products/all-banner-4.jpg" class="h-full w-full object-contain" />
                        <img v-if="index == 3" src="/images/all-products/all-banner-5.jpg" class="h-full w-full object-contain" />
                        <img v-if="index == 4" src="/images/all-products/all-banner-6.jpg" class="h-full w-full object-contain" />
                    </div>
                </div>
                <div v-if="category.products.length > 0" class="category-main flex lg:flex-row flex-col justify-between w-full gap-6 px-5">
                    <div class="category-data flex flex-col gap-4 flex-1">
                        <div class="category-data-list">
                            <div
                                v-for="product in category.products"
                                class="category-data-item data-desktop hidden md:block p-2 rounded-lg"
                                :key="product">
                                <ProductCard :product="product" />
                            </div>
                            <div
                                v-for="(product, indexProduct) in category.products"
                                :class="indexProduct > 1 ? '!hidden' : ''"
                                class="category-data-item data-mobile block md:hidden rounded-lg"
                                :key="product">
                                <ProductCard :product="product" />
                            </div>
                        </div>
                    </div>
                </div>
                <UButton
                    variant="solid"
                    color="none"
                    size="xl"
                    class="h-12 md:hidden rounded-2xl flex mt-4 mx-auto self-center w-full justify-center max-w-[300px] bg-green-700"
                    :to="localePath({ name: 'collection-slug', params: { slug: category.slug } })">
                    {{ 'Xem thêm' }}
                </UButton>
            </div>
            <div v-else class="category-data-list my-4 p-4">
                <div v-for="product in 4" class="category-data-item" :key="product">
                    <ProductCard />
                </div>
            </div>
            <div class="promotion-box bg-green-700 w-full px-6 py-4 flex flex-col items-center justify-center gap-6">
                <div class="text-2xl text-white text-center">Bạn chưa tìm thấy áo phản quang phù hợp?</div>
                <div class="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
                    <UButton
                        :to="localePath({ name: 'dat-may' })"
                        color="white"
                        class="font-bold !uppercase text-green-700 w-full md:max-w-[300px] justify-center"
                        size="xl"
                        >Đặt may</UButton
                    >
                    <UButton
                        variant="outline"
                        color="none"
                        class="font-bold !uppercase bg-green-700 text-white w-full md:max-w-[300px] justify-center"
                        size="xl"
                        >Nhận tư vấn</UButton
                    >
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import Banner from '@/components/Banners/Banner.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar } from 'swiper/modules';
import ProductCard from '@/components/products/ProductCard';

defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});

const router = useRouter();
const localePath = useLocalePath();
const modules = [Scrollbar];
const isLoadingData = ref(false);
const loadingPageCollection = ref(true);
const showFullOption = ref(false);
const tabIndex = ref(0);

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

const filterList = ref([
    {
        name: 'Mới nhất',
        value: 0,
    },
    {
        name: 'Cũ nhất',
        value: 1,
    },
    {
        name: 'Giá thấp đến cao',
        value: 2,
    },
    {
        name: 'Giá cao đến thấp',
        value: 3,
    },
]);

const filter = ref(filterList.value[0]);

const selectedForm = ref({});
const selectedMaterial = ref({});
const selectedColor = ref(null);
const refreshData = ref(0);
const selectedAll = ref({});
const removeAllFilter = () => {
    selectedAll.value = {};
    refreshData.value++;
};

const loadMoreBtn = ref(false);

const changeCategoryTab = (index) => {
    tabIndex.value = index;
    isLoadingData.value = true;
    setTimeout(() => {
        isLoadingData.value = false;
    }, 500);
};

const getParamsCollection = async () => {
    let params = {
        limit: 5,
    };
    return params;
};

//data
const {
    data: collection,
    pending: loadingCollection,
    error: collectionError,
} = await useLazyAsyncData('all-categories', async () => useOriginalFetch(`/api/v1/attribute-groups`));
const { data: productCollection, pending: loadingProductCollection } = await useLazyAsyncData(
    'product-category-hot',
    async () =>
        useOriginalFetch(`/api/v1/products`, {
            params: { is_hot: 1, limit: 8 },
        }),
    {
        default: () => [],
        watch: [filter, refreshData],
    },
);

const { data: productCollectionAll, pending: loadingProductCollectionAll } = await useLazyAsyncData('product-category-all', async () =>
    useOriginalFetch(`/api/v1/categories/all`, {
        params: await getParamsCollection(),
    }),
);

// const { data: categories, pending: loadingCategories } = await useLazyAsyncData('all-category', () =>
//     useOriginalFetch(`/api/v1/categories`),
// );

// watch(
//     () => collectionError.value,
//     () => {},
// );

let title = 'Tất cả sản phẩm';
const config = useRuntimeConfig();

defineOgImageComponent('GAK', {
    title: title,
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
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription:  config.public.description,
    keywords: title,
};
useSeoMeta(seoMeta);
</script>
<style lang="scss" scoped>
.category-page {
    .category-main {
        @apply mx-auto;
        @media screen and (max-width: 767px) {
            padding: 0 8px;
        }
    }
    .product-category-title {
        @apply flex flex-col gap-4 font-extrabold text-3xl text-center bg-gray-300 p-4;
        .sub-title {
            color: green;
            margin: 0 !important;
            font-size: 46px !important;
            line-height: 1.4;
            font-weight: 900;
            text-transform: capitalize;
        }
    }
    .category-tabs {
        .category-swiper {
            padding: 24px 0;
            .category-card {
                .category-item {
                    border: 2px solid transparent;
                    padding: 12px;
                    border-radius: 12px;
                    &.router-link-active {
                        @apply border-blue-700;
                    }
                }
            }
        }
    }
    .category-data {
        @apply py-4;
    }
    .category-data-list {
        @apply flex gap-4 justify-start w-full flex-wrap;
        .category-data-item {
            width: calc(25% - 12px);
            @media screen and (max-width: 991px) {
                width: calc(100% / 2 - 8px);
            }
        }
    }
}
</style>
