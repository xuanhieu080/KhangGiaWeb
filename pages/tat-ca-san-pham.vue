<template>
    <NuxtLayout name="main">
        <div class="category-page bg-white">
            <Banner :bannerList="bannerList" :autoPlay="true" />
            <div v-if="!loadingProductCollection" class="category-main flex lg:flex-row flex-col justify-between w-full gap-6 py-8">
                <div class="category-data flex flex-col gap-4 flex-1">
                    <div v-if="productCollection.data && productCollection.data.length > 0" class="category-data-list">
                        <div
                            v-for="product in productCollection.data"
                            class="category-data-item data-desktop hidden md:block border p-2 rounded-lg shadow-md"
                            :key="product">
                            <ProductCard :product="product" />
                        </div>
                        <div
                            v-for="(product, index) in productCollection.data"
                            :class="index > 1 ? '!hidden' : ''"
                            class="category-data-item data-mobile block md:hidden border p-2 rounded-lg shadow-md"
                            :key="product">
                            <ProductCard :product="product" />
                        </div>
                    </div>
                    <UButton
                        variant="solid"
                        color="none"
                        size="xl"
                        class="mx-auto self-center w-full justify-center max-w-[300px] bg-green-700"
                        v-if="productCollection.meta.last_page > productCollection.meta.from"
                        >{{ 'Xem thêm' }}</UButton
                    >
                </div>
            </div>
            <div v-else class="category-data-list my-4 p-4">
                <div v-for="product in 4" class="category-data-item" :key="product">
                    <ProductCard />
                </div>
            </div>
            <div v-if="!loadingProductCollectionAll" v-for="category in productCollectionAll.data" class="category-product py-4">
                <div class="product-category-title">
                    Sản phẩm
                    <span class="sub-title">{{ category.name }}</span>
                </div>
                <Banner :bannerList="[{ url: category.image_url }]" :autoPlay="true" />
                <div class="category-main flex lg:flex-row flex-col justify-between w-full gap-6 py-12">
                    <div class="category-data flex flex-col gap-4 flex-1">
                        <div v-if="category.products.length > 0" class="category-data-list">
                            <div
                                v-for="product in category.products"
                                class="category-data-item data-desktop hidden md:block border p-2 rounded-lg shadow-md"
                                :key="product">
                                <ProductCard :product="product" />
                            </div>
                            <div
                                v-for="(product, index) in category.products"
                                :class="index > 1 ? '!hidden' : ''"
                                class="category-data-item data-mobile block md:hidden border p-2 rounded-lg shadow-md"
                                :key="product">
                                <ProductCard :product="product" />
                            </div>
                        </div>
                        <UButton
                            variant="solid"
                            color="none"
                            size="xl"
                            class="mx-auto self-center w-full justify-center max-w-[300px] bg-green-700"
                            :to="localePath({ name: 'collection-slug', params: { slug: category.slug } })">
                            {{ 'Xem thêm' }}
                        </UButton>
                    </div>
                </div>
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
        limit: 4,
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
            params: await getParamsCollection(),
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
</script>
<style lang="scss" scoped>
.category-page {
    .category-main {
        @apply container mx-auto;
        @media screen and (max-width: 767px) {
            padding: 0 4px;
        }
    }
    .product-category-title {
        @apply flex flex-col gap-4 font-bold text-2xl lg:text-4xl text-center bg-gray-300 p-4;
        .sub-title {
            color: green;
            @apply text-4xl lg:text-5xl;
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
