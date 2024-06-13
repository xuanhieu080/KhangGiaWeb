<template>
    <NuxtLayout name="main">
        <div v-if="!loadingCollection && !collectionError" class="category-page pt-8 bg-white">
            <div class="px-4 md:px-8">
                <div class="category-header mb-6">
                    <div class="category-header-title">
                        <h1 class="font-bold uppercase !text-2xl lg:!text-4xl">{{ collection.item.name }}</h1>
                    </div>
                    <div v-if="collection.item.descendants.length > 0" class="category-tabs w-full">
                        <Swiper
                            :slidesPerView="2"
                            :spaceBetween="8"
                            :slidesPerGroup="2"
                            :scrollbar="true"
                            :modules="modules"
                            :breakpoints="{
                                1280: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                    spaceBetween: 16,
                                },
                                992: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                    spaceBetween: 15,
                                },
                            }"
                            class="swiper category-swiper min-w-0 relative z-10">
                            <SwiperSlide
                                v-for="(category, index) in collection.item.descendants"
                                :key="product"
                                class="!h-[250px] sm:!h-[300px] xl:!h-[400px] w-[200px] mr-4">
                                <UCard
                                    :ui="{ wrapper: '', shadow: '', ring: '', body: { base: 'h-full', padding: 'p-0 sm:p-2' } }"
                                    class="category-card h-full"
                                    @click="changeCategoryTab(index)">
                                    <NuxtLink
                                        :to="localePath({ name: 'collection-slug', params: { slug: category.slug } })"
                                        class="category-item flex flex-col justify-between gap-2 h-full">
                                        <NuxtImg
                                            :src="category.image_url"
                                            format="webp"
                                            class="w-full object-contain object-center xl:object-left rounded-md h-[90%]" />
                                        <div class="category-name text-center xl:text-left font-semibold min-h-[40px] sm:min-h-0">
                                            {{ category.name }}
                                        </div>
                                    </NuxtLink>
                                </UCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class="category-main flex lg:flex-row flex-col justify-between w-full gap-6 mt-12">
                    <div class="category-main-left w-full lg:max-w-[350px] md:pr-4">
                        <div class="flex flex-col gap-4 justify-start w-full">
                            <div
                                class="filter-result text-sm font-semibold w-full pb-2 border-b border-gray-400 flex items-center justify-between gap-4">
                                {{
                                    (!loadingProductCollection && productCollection.data ? productCollection.data.length : '') +
                                    ' ' +
                                    $t('Kết quả')
                                }}
                                <UButton
                                    v-if="Object.keys(selectedAll).length > 0"
                                    size="lg"
                                    variant="ghost"
                                    color="none"
                                    class="border rounded-3xl border-black font-bold"
                                    @click="removeAllFilter"
                                    >{{ $t('Xóa lọc') }}</UButton
                                >
                            </div>
                            <div class="filter-options grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:flex-col gap-4">
                                <div v-for="variant in collection.variants" class="filter-option-item flex flex-col gap-4">
                                    <UAccordion
                                        :items="[variant]"
                                        :key="variant"
                                        :defaultOpen="variant.attributes.length < 6 ? true : false">
                                        <template #default="{ item, index, open }">
                                            <UButton
                                                color="none"
                                                variant="ghost"
                                                class="border-b border-gray-200 dark:border-gray-700 pl-0"
                                                :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                                                <span class="truncate text-gray-700">{{ item.name }} ({{ item.attributes.length }})</span>
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
                        </div>
                    </div>
                    <div class="category-data flex flex-col gap-4 flex-1">
                        <div class="flex justify-between gap-6 w-full">
                            <div class="category-filter-data flex items-center z-50 w-full gap-4">
                                <span class="uppercase text-gray-500 fs-14 font-medium">Phân loại</span>
                                <USelectMenu v-model="filter" :options="filterList" option-attribute="name" class="w-full max-w-[200px]">
                                    <UButton size="lg" color="gray" class="flex-1 justify-between">
                                        {{ filter ? filter.name : $t('Sắp xếp theo') }}
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
                                {{ 'Không có sản phẩm trong danh mục này' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category-description flex items-center mt-6 bg-[#f1f1f1] p-6 w-full min-h-[250px]">
                <div class="container mx-auto md:max-w-[1280px] p-4">
                    <span class="text-gray-500 font-medium fs-20 leading-relaxed"
                        >Dòng sản phẩm thể thao ứng dụng các chất liệu và thiết kế mới với nhiều tính năng ưu việt giúp bạn thoải mái và tập
                        trung hơn vào các chuyển động của mình.
                    </span>
                </div>
            </div>
        </div>
        <div
            v-if="collectionError"
            class="category-page container mx-auto mt-[128px] flex flex-col gap-8 items-center justify-center w-full">
            {{ collectionError.data.message }}
            <UButton size="lg" :to="localePath({ name: 'index' })">{{ $t('Quay trở về') }}</UButton>
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

const router = useRouter();
const localePath = useLocalePath();
const modules = [Scrollbar];
const isLoadingData = ref(false);
const loadingPageCollection = ref(true);
const tabIndex = ref(0);

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
let selectedAll = ref({});
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

const getParamsCollection = async () => {
    let params = {
        category_slug: router.currentRoute.value.params.slug,
    };
    let attribute = Object.entries(selectedAll.value).map(([key, value]) => ({ key, value }));
    if (attribute.length > 0) {
        attribute = attribute.filter((item) => item.value == true);
        attribute.forEach((item, index) => {
            if (item.value) {
                params[`attributes[${index}]`] = item.key;
            }
        });
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
} = await useAsyncData('collection-category', async () => useOriginalFetch(`/api/v1/categories/${router.currentRoute.value.params.slug}`));
const { data: productCollection, pending: loadingProductCollection } = await useLazyAsyncData(
    'product-category',
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
// const { data: categories, pending: loadingCategories } = await useLazyAsyncData('all-category', () =>
//     useOriginalFetch(`/api/v1/categories`),
// );

// watch(
//     () => collectionError.value,
//     () => {},
// );

let title = collection.value.item.meta_title;
let description = collection.value.item.meta_description;

defineOgImageComponent('GAK', {
    title: title,
    description: description,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url: collection.value.item.image_url,
});
let seoMeta = {
    description: description,
    ogDescription: description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription: description,
    keywords: collection.value.item.meta_key,
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
                    border-radius: 12px;
                    padding: 2px;
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
