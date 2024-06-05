<template>
    <NuxtLayout name="main">
        <div class="category-page pt-8 bg-white">
            <div class="px-8">
                <div class="category-header mb-6">
                    <div class="category-header-title">
                        <h1 class="font-bold uppercase text-2xl">CÁC MẪU ĐỒNG PHỤC CÔNG TY 2024 MỚI NHẤT</h1>
                    </div>
                </div>
                <div class="category-main flex lg:flex-row flex-col justify-between w-full gap-6 mt-12">
                    <div v-if="!loadingCollection" class="category-main-left w-full lg:max-w-[350px] px-4">
                        <div class="flex flex-col gap-4 justify-start w-full sticky top-8">
                            <div
                                class="filter-result text-sm font-semibold w-full pb-2 border-b border-gray-400 flex items-center justify-between gap-4">
                                {{
                                    (!loadingCollectionProduct && collectionProduct.data ? collectionProduct.data.length : '') +
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
                                    >{{ $t('Xóa lọc') }}
                                </UButton>
                            </div>
                            <div
                                :class="showFullOption ? 'h-full' : 'h-[170px] overflow-hidden'"
                                class="filter-options grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4">
                                <div v-for="variant in collection.data" class="filter-option-item flex flex-col gap-4">
                                    <div class="filter-option-title text-sm font-bold text-gray-500">
                                        {{ variant.name }}
                                    </div>
                                    <UCheckbox
                                        v-model="selectedAll[form.id]"
                                        v-for="(form, index) in variant.attributes"
                                        size="lg"
                                        class="rounded-full"
                                        :name="form.name"
                                        :label="form.name" />
                                </div>
                            </div>
                            <UButton
                                variant="outline"
                                color="none"
                                @click="showFullOption = !showFullOption"
                                class="show-option-btn border text-gray-500 border-gray-400 ring-0 justify-center">
                                {{ showFullOption ? 'Thu gọn' : 'Mở rộng' }}
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
                        <div v-if="loadingCollectionProduct" class="category-data-list">
                            <div v-for="product in 6" class="category-data-item" :key="product">
                                <ProductCard />
                            </div>
                        </div>
                        <div
                            v-else-if="!loadingCollectionProduct && collectionProduct.data && collectionProduct.data.length > 0"
                            class="category-data-list">
                            <div v-for="product in collectionProduct.data" class="category-data-item border p-2 rounded-lg" :key="product">
                                <ProductCard :product="product" />
                            </div>
                        </div>
                        <div
                            v-else-if="!loadingCollectionProduct && collectionProduct.data && collectionProduct.data.length == 0"
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
        <div
            v-if="loadingCollection"
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

const router = useRouter();
const localePath = useLocalePath();

const showFullOption = ref(false);

const filterList = ref([
    {
        name: 'Mới nhất',
        value: 'newest',
    },
    {
        name: 'Cũ nhất',
        value: 'oldest',
    },
    {
        name: 'Bán chạy',
        value: 'best_sale',
    },
    {
        name: 'Giá thấp đến cao',
        value: 'Price increasement',
    },
    {
        name: 'Giá cao đến thấp',
        value: 'Price decreasement',
    },
]);

const filter = ref(filterList.value[0]);

const refreshData = ref(0);
const selectedAll = ref({});
const removeAllFilter = () => {
    selectedAll.value = {};
    refreshData.value++;
};

const getParamsCollection = async () => {
    let params = {
        is_uniform: 1,
        limit: 20,
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

const { data: collection, pending: loadingCollection } = await useLazyAsyncData('all-attribute-group', async () =>
    useOriginalFetch(`/api/v1/attribute-groups`),
);
const {
    data: collectionProduct,
    pending: loadingCollectionProduct,
    error: collectionError,
} = await useLazyAsyncData(
    'collection-dong-phuc',
    async () =>
        useOriginalFetch(`/api/v1/products`, {
            params: await getParamsCollection(),
        }),
    {
        default: () => [],
        watch: [filter, selectedAll.value, refreshData],
    },
);

// watch(
//     () => collectionError.value,
//     () => {},
// );

let title = 'Các mẫu đồng phục công ty mới nhất';
let description = 'Các mẫu đồng phục công ty mới nhất';

const config = useRuntimeConfig();

defineOgImageComponent('GAK', {
    title: title,
    description: description,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url:  config.public.logo,
});
let seoMeta = {
    description:  description,
    ogDescription:  description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription:  description,
    keywords: 'Đồng phục công ty',
};
useSeoMeta(seoMeta);
</script>
<style lang="scss" scoped>
.category-page {
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
