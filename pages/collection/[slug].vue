<template>
    <NuxtLayout name="main">
        <div v-if='!collectionError' class="category-page pt-8 bg-white">
            <div class="px-4 md:px-8">
                <div class="category-header mb-6">
                    <div class="category-header-title">
                        <h1 class="font-bold uppercase !text-2xl lg:!text-4xl">{{ collection?.item.name }}</h1>
                    </div>
                    <div v-if="collection?.item.descendants.length > 0" class="category-tabs w-full">
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
                                v-for="(category, index) in collection?.item.descendants"
                                :key="product"
                                class="!h-[300px] xl:!h-[400px] w-[200px] mr-4">
                                <UCard
                                    :ui="{ wrapper: '', shadow: '', ring: '', body: { base: 'h-full', padding: 'p-0 sm:p-2' } }"
                                    class="category-card h-full"
                                    @click="changeCategoryTab(index)">
                                    <NuxtLink
                                        :to="localePath({ name: 'collection-slug', params: { slug: category.slug } })"
                                        class="category-item flex flex-col justify-between gap-2 h-full">
                                        <img
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
                                    (loadingProductCollection == 'success' && productCollection.data ? productCollection.data.length : '') +
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
                            <div class="filter-options grid grid-cols-1 sm:grid-cols-2 lg:flex hidden lg:flex-wrap lg:flex-col gap-4">
                                <div v-for="variant in collection.variants" class="filter-option-item flex flex-col gap-4">
                                    <UAccordion
                                        :items="[variant]"
                                        :key="variant"
                                        :defaultOpen="false && variant.attributes.length < 6 ? true : false">
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
                                <span class="uppercase text-gray-500 fs-14 font-medium">{{trans('Classification')}}</span>
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
                        <div v-if="loadingProductCollection == 'pending'" class="category-data-list">
                            <div v-for="product in 8" class="category-data-item" :key="product">
                                <ProductCard />
                            </div>
                        </div>
                        <div
                            v-else-if="loadingProductCollection == 'success' && productCollection.data && productCollection.data.length > 0"
                            class="category-data-list">
                            <div v-for="product in productCollection.data" class="category-data-item" :key="product">
                                <ProductCard :product="product" />
                            </div>
                        </div>
                        <div
                            v-else-if="loadingProductCollection == 'success' && productCollection.data && productCollection.data.length == 0"
                            class="category-data-list">
                            <div
                                class="h-48 w-full text-center p-6 border border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                                {{ trans('There are no products in this category') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category-description flex items-center mt-6 bg-[#f1f1f1] p-6 w-full min-h-[250px]">
                <div class="container mx-auto md:max-w-[1280px] p-4">
                    <span class="text-gray-500 font-medium fs-20 leading-relaxed">
                        {{trans('GAK is a pioneer in delivering high-quality, precisely customized products tailored to customer needs, with a steadfast commitment to continuous improvement')}}
                    </span>
                </div>
            </div>
        </div>
        <UCard v-if="collection?.item?.content_seo" class="m-6 prose prose-lg max-w-full">
            <div v-html="collection?.item.content_seo"></div>
        </UCard>
    </NuxtLayout>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar } from 'swiper/modules';
import ProductCard from '@/components/products/ProductCard';
import { useLanguageLink } from '~/store/languageLink';
import { storeToRefs } from 'pinia';


defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});

const { locale, t: trans } = useI18n();

const router = useRouter();
const localePath = useLocalePath();
const modules = [Scrollbar];
const isLoadingData = ref(false);
const loadingPageCollection = ref(true);
const tabIndex = ref(0);

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);
link.value = null;

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
        lang: locale.value
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
    status: loadingCollection,
    error: collectionError,
} = await useAsyncData('collection-category', async () => useOriginalFetch(`/api/v1/categories/${router.currentRoute.value.params.slug}`, {
    params: {lang: locale.value}
}));
const { data: productCollection, status: loadingProductCollection } = await useLazyAsyncData(
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

if (collectionError.value) {
    navigateTo({ path: `/${locale.value}/404`}, {redirectCode: 301, replace: true });
}
const title = ref('');
const description = ref('');
const key = ref('');
const image = ref();
const seoMeta = ref({})

watchEffect((value) => {
    if (loadingCollection.value === 'success') {
        title.value = collection.value.item?.meta_title;
        description.value =  collection.value.item?.meta_description;
        key.value = collection.value.item?.meta_key;
        image.value =  collection.value.item?.image_url;

        if (collection.value.item?.slug_other) {
            if (locale.value == 'vi') {
                link.value = `/en/collection/${collection.value.item?.slug_other}`;
            } else {
                link.value = `/vi/collection/${collection.value.item?.slug_other}`;
            }
        }

        seoMeta.value = {
            description: description.value,
            ogDescription: description.value,
            ogTitle: title.value,
            title: title.value,
            twitterTitle: title.value,
            twitterImage: image.value,
            twitterImageAlt: title.value,
            twitterDescription: description.value,
            keywords: key.value,
            image: image.value,
            ogImage: image.value,
            ogImageAlt: title.value,
        }
        defineOgImageComponent('GAK', {
            title: title.value,
            description: description.value,
            theme: '#ff0000',
            colorMode: 'dark',
            url: image.value,
            image: image.value,
        });
        defineOgImage({
            url: image.value,
            image: image.value,
        });

        useSeoMeta(seoMeta.value);
        loadingCollection.value = 'pending'
    }
});
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
