<template>
    <NuxtLayout name="main">
        <div v-if="!loadingPageCollection" class="category-page pt-8 bg-white">
            <div class="px-4 md:px-8">
                <div class="category-header mb-6">
                    <div class="category-header-title">
                        <h1 class="font-bold uppercase !text-2xl lg:!text-4xl">{{ trans('All products') }}</h1>
                    </div>
                    <UInput
                        class="search-box max-w-[500px] rounded-[50px] bg-white"
                        name="search-box"
                        size="xl"
                        color="white"
                        variant="outline"
                        icon="i-heroicons-magnifying-glass-20-solid"
                        :loading="loadingProductCollection"
                        v-model="searchItem"
                        :ui="{ icon: { trailing: { pointer: '' } } }"
                        autocomplete="off"
                        :placeholder="trans('Search products')">
                    </UInput>
                </div>
                <div class="category-main flex lg:flex-row flex-col justify-between w-full gap-6 py-12">
                    <div class="category-main-left w-full lg:max-w-[350px] md:pr-4">
                        <div class="flex flex-col gap-4 justify-start w-full">
                            <div
                                class="filter-result text-sm font-semibold w-full pb-2 border-b border-gray-400 flex items-center justify-between gap-4">
                                {{
                                    (!loadingProductCollection && productCollection.data ? productCollection.data.length : '') +
                                    ' ' +
                                    trans('Result')
                                }}
                                <UButton
                                    v-if="Object.keys(selectedAll).length > 0"
                                    size="lg"
                                    variant="ghost"
                                    color="none"
                                    class="border rounded-3xl border-black font-bold"
                                    @click="removeAllFilter"
                                    >{{ trans('Clear filtering') }}</UButton
                                >
                            </div>
                            <div
                                :class="showFullOption ? 'h-full' : 'h-[170px] overflow-hidden'"
                                class="filter-options grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4">
                                <div v-for="variant in collection.data" class="filter-option-item flex flex-col gap-4">
                                    <UAccordion :items="[variant]" :key="variant" :defaultOpen="variant.attributes.length < 6 ? true : false">
                                        <template #default="{ item, index, open }">
                                            <UButton
                                                color="none"
                                                variant="ghost"
                                                class="border-b border-gray-200 dark:border-gray-700 pl-0"
                                                :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                                                <span class="truncate text-gray-700">{{ item.name }} ({{item.attributes.length}})</span>
                                                <template #trailing>
                                                    <UIcon
                                                        :name="open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                                                        class="w-5 h-5 ms-auto transform transition-transform duration-200" />
                                                </template>
                                            </UButton>
                                        </template>
                                        <template #item="{ item }">
                                            <div v-for="(form, index) in item.attributes" class="flex flex-col gap-4">
                                                <p class="italic text-gray-900 dark:text-white text-center !mx-4">
                                                    <UCheckbox
                                                        :modelValue="selectedAll[form.id]"
                                                        @change="(e) => setFilterSelect(form.id, e)"
                                                        size="lg"
                                                        class="rounded-full"
                                                        :name="form.name"
                                                        :ui="{ inner: 'w-full text-left' }"
                                                        :label="form.name" />
                                                </p>
                                            </div>
                                        </template>
                                    </UAccordion>
                                </div>
                            </div>
                            <UButton
                                v-if="false"
                                variant="outline"
                                color="none"
                                @click="showFullOption = !showFullOption"
                                class="show-option-btn border text-gray-500 border-gray-400 ring-0 justify-center">
                                {{ showFullOption ? trans('Collapse') : trans('Expand') }}
                                <UIcon
                                    class="text-sm"
                                    :name="showFullOption ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                                    dynamic></UIcon>
                            </UButton>
                        </div>
                    </div>
                    <div class="category-data flex flex-col gap-4 flex-1">
                        <div class="flex justify-between gap-6 w-full">
                            <div class="category-filter-data flex items-center z-50 w-full gap-4">
                                <span class="uppercase text-gray-500 fs-14 font-medium">Phân loại</span>
                                <USelectMenu v-model="filter" :options="filterList" option-attribute="name" class="w-full max-w-[200px]">
                                    <UButton size="lg" color="gray" class="flex-1 justify-between">
                                        {{ filter ? filter.name : trans('Sort by') }}
                                        <UIcon
                                            name="i-heroicons-chevron-right-20-solid"
                                            class="w-5 h-5 transition-transform transform rotate-90 text-gray-400 dark:text-gray-500" />
                                    </UButton>
                                    <template #option="{ option: filterItem }">
                                        <span>{{ filterItem.name }}</span>
                                    </template>
                                </USelectMenu>
                            </div>
                        </div>
                        <div v-if="loadingProductCollection" class="category-data-list">
                            <div v-for="product in 6" class="category-data-item" :key="product">
                                <ProductCard />
                            </div>
                        </div>
                        <div
                            v-else-if="!loadingProductCollection && productCollection.data && productCollection.data.length > 0"
                            class="category-data-list">
                            <div v-for="product in productCollection.data" class="category-data-item" :key="product">
                                <ProductCard :product="product" />
                            </div>
                        </div>
                        <div
                            v-else-if="!loadingProductCollection && productCollection.data && productCollection.data.length == 0"
                            class="category-data-list">
                            <div
                                class="h-48 w-full text-center p-6 border border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                                {{ trans('There are no products in this category') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="loadingPageCollection"
            class="category-page container mx-auto mt-[128px] flex flex-col gap-8 items-center justify-center w-full">
            <div class="loading-wrapper">
                <div class="loading"></div>
                <div id="loading-text">Loading...</div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar } from 'swiper/modules';
import ProductCard from '@/components/products/ProductCard';

defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});

const { locale, t: trans } = useI18n();

const router = useRouter();
const localePath = useLocalePath();
const modules = [Scrollbar];
const isLoadingData = ref(false);
const loadingPageCollection = ref(true);
const showFullOption = ref(true);
const tabIndex = ref(0);
const searchItem = ref(router.currentRoute.value.query ? router.currentRoute.value.query.search : null);

const filterList = ref([
    {
        name: trans('Latest'),
        value: 0,
    },
    {
        name: trans('Oldest'),
        value: 1,
    },
    {
        name: trans('Price: Low to High'),
        value: 2,
    },
    {
        name: trans('Price: High to Low'),
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

const setFilterSelect = (id, e) => {
    selectedAll.value[id] = e;
    if (!selectedAll.value[id]) delete selectedAll.value[id];
    refreshData.value++;
};

const changeCategoryTab = (index) => {
    tabIndex.value = index;
    isLoadingData.value = true;
    setTimeout(() => {
        isLoadingData.value = false;
    }, 500);
};

const deboundTime = ref({
    timeOut: null,
});

const getParamsCollection = async () => {
    let params = {};
    let attribute = Object.entries(selectedAll.value).map(([key, value]) => ({ key, value }));
    if (attribute.length > 0) {
        attribute = attribute.filter((item) => item.value == true);
        attribute.forEach((item, index) => {
            if (item.value) {
                params[`attributes[${index}]`] = item.key;
            }
        });
    }
    if (router.currentRoute.value.query) {
        params.search = searchItem.value;
    }
    switch (filter.value.value) {
        case 0:
            params['sort[desc][0]'] = 'id';
            break;
        case 1:
            params['sort[asc][0]'] = 'id';
            break;
        case 2:
            params['sort[desc][0]'] = 'price_discount';
            break;
        case 3:
            params['sort[asc][0]'] = 'price_discount';
            break;
        default:
            break;
    }
    return params;
};

//data
const {
    data: collection,
    pending: loadingCollection,
    error: collectionError,
} = await useLazyAsyncData('all-categories', async () => useOriginalFetch(`/api/v1/attribute-groups`));
const { data: productCollection, pending: loadingProductCollection } = await useLazyAsyncData(
    'product-category-all',
    async () =>
        useOriginalFetch(`/api/v1/products`, {
            params: await getParamsCollection(),
        }),
    {
        default: () => [],
        watch: [filter, refreshData],
    },
);

watch(
    () => loadingCollection.value,
    () => {
        if (!loadingCollection.value) loadingPageCollection.value = false;
    },
);

watch(
    () => searchItem.value,
    async () => {
        clearTimeout(deboundTime.value.timeOut);
        deboundTime.value.timeOut = setTimeout(() => {
            refreshData.value++;
            deboundTime.value.timeOut = null;
        }, 500);
    },
);
// const { data: categories, pending: loadingCategories } = await useLazyAsyncData('all-category', () =>
//     useOriginalFetch(`/api/v1/categories`),
// );

// watch(
//     () => collectionError.value,
//     () => {},
// );

let title = 'Tìm kiếm sản phẩm';
const config = useRuntimeConfig();

defineOgImageComponent('GAK', {
    title: title,
    description: config.public.description,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url: config.public.logo,
});
let seoMeta = {
    description: config.public.description,
    ogDescription: config.public.description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription: config.public.description,
    keywords: title,
};
useSeoMeta(seoMeta);
</script>
<style lang="scss" scoped>
.category-page {
    .category-tabs {
        .category-swiper {
            padding-bottom: 24px;
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
    .category-data-list {
        @apply flex gap-4 justify-start w-full flex-wrap;
        .category-data-item {
            width: calc(25% - 12px);
            @media screen and (max-width: 1199px) {
                width: calc(100% / 3 - 11px);
            }
            @media screen and (max-width: 991px) {
                width: calc(100% / 2 - 8px);
            }
        }
    }
}
</style>
