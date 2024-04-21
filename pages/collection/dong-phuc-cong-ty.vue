<template>
    <NuxtLayout name="main">
        <div  class="category-page pt-16 bg-white">
            <div class="px-8">
                <div class="category-header mb-6">
                    <div class="category-header-title">
                        <h1 class="font-bold uppercase text-2xl">CÁC MẪU ĐỒNG PHỤC CÔNG TY 2024 MỚI NHẤT</h1>
                    </div>
                </div>
                <div v-if="!loadingCollection" class="category-main flex lg:flex-row flex-col justify-between w-full gap-6 mt-12">
                    <div class="category-main-left w-full lg:max-w-[350px] px-4">
                        <div class="flex flex-col gap-4 justify-start w-full sticky top-8">
                            <div
                                class="filter-result text-sm font-semibold w-full pb-2 border-b border-gray-400 flex items-center justify-between gap-4">
                                {{ 0 + ' ' + $t('Kết quả') }}
                                <UButton
                                    v-if="
                                        selectedAll.length > 0
                                    "
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
                        <div v-if="false && loadingCollection" class="category-data-list">
                            <div v-for="product in 6" class="category-data-item" :key="product">
                                <ProductCard />
                            </div>
                        </div>
                        <div v-else-if="false && !loadingCollection && collection.item.products && collection.item.products.length > 0" class="category-data-list">
                            <div v-for="product in collection.item.products" class="category-data-item" :key="product">
                                <ProductCard :product="product" />
                            </div>
                        </div>
                        <div v-else-if="!loadingCollection && collection.item.products && collection.item.products.length == 0" class="category-data-list">
                            <div class="h-48 w-full text-center p-6 border border-dashed border-gray-400 rounded-lg flex items-center justify-center">
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
        <div v-if="collectionError" class="category-page container mx-auto mt-[128px] flex flex-col gap-8 items-center justify-center w-full">
            {{ collectionError.data.message }}
            <UButton size="lg" :to="localePath({name: 'index'})">{{ $t('Quay trở về') }}</UButton>
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
const tabIndex = ref(0);
const categoryList = ref([
    {
        name: 'Áo các loại',
        image: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
        description: 'Áo thun, áo polo và áo khoác',
    },
    {
        name: 'Quần các loại',
        image: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
        description: 'Áo shorts, Jogger, Kaki và Jeans',
    },
    {
        name: 'Phụ kiện các loại',
        image: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
        description: 'Tất/vớ, mũ và phụ kiện khác',
    },
    {
        name: 'Áo các loại',
        image: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
        description: 'Áo thun, áo polo và áo khoác',
    },
    {
        name: 'Quần các loại',
        image: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
        description: 'Áo shorts, Jogger, Kaki và Jeans',
    },
    {
        name: 'Phụ kiện các loại',
        image: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
        description: 'Tất/vớ, mũ và phụ kiện khác',
    },
]);
const productList = ref([
    {
        id: 1,
        product_name: 'Áo polo nam dài tay thể thao',
        product_slug: 'ao-polo-nam-dai-tay-the-thao',
        product_category_id: 1,
        product_category_name: 'Áo thun',
        product_category_slug: 'ao-thun',
        product_introduction: 'Co giãn',
        product_price: 159000,
        product_discount: 0,
        product_compaign_id: 1,
        product_compaign_name: 'Mua 2 bất kỳ giảm thêm 10%',
        product_images: [
            {
                color: 'Đen',
                code: '#000',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/aoexcuwwebjoggerut_copy_2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2023/joggerut.10.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/23CMCW.QD006.s.1_71.jpg',
                ],
            },
        ],
    },
    {
        id: 2,
        product_name: 'Quần jeans nam Basics',
        product_slug: 'quan-jeans-nam-basics',
        product_category_id: 2,
        product_category_name: 'Quần dài',
        product_category_slug: 'quan-dai',
        product_introduction: 'Dáng Straight',
        product_price: 299000,
        product_discount: 10,
        product_compaign_id: null,
        product_compaign_name: null,
        product_images: [
            {
                color: 'Xanh wash',
                code: 'blue',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.11_15.jpg',
                ],
            },
            {
                color: 'Xanh navi',
                code: 'green',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/February2024/joggerutdanang1.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/February2024/joggerutdanang3.jpg',
                ],
            },
        ],
    },
    {
        id: 3,
        product_name: 'Áo bảo hộ thi công',
        product_slug: 'ao-bao-ho-thi-cong',
        product_category_id: 22,
        product_category_name: 'Áo bảo hộ',
        product_category_slug: 'ao-bao-ho',
        product_introduction: 'Thoáng mát / Nhanh khô',
        product_price: 199000,
        product_discount: 10,
        product_compaign_id: 2,
        product_compaign_name: 'Giảm 10% cho thành viên mới',
        product_images: [
            {
                color: 'Vàng',
                code: 'yellow',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.JE002.7_72.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.JE002.9_33.jpg',
                ],
            },
        ],
    },
    {
        id: 1,
        product_name: 'Áo polo nam dài tay thể thao',
        product_slug: 'ao-polo-nam-dai-tay-the-thao',
        product_category_id: 1,
        product_category_name: 'Áo thun',
        product_category_slug: 'ao-thun',
        product_introduction: 'Co giãn',
        product_price: 159000,
        product_discount: 0,
        product_compaign_id: 1,
        product_compaign_name: 'Mua 2 bất kỳ giảm thêm 10%',
        product_images: [
            {
                color: 'Đen',
                code: '#000',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/aoexcuwwebjoggerut_copy_2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2023/joggerut.10.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/23CMCW.QD006.s.1_71.jpg',
                ],
            },
        ],
    },
    {
        id: 2,
        product_name: 'Quần jeans nam Basics',
        product_slug: 'quan-jeans-nam-basics',
        product_category_id: 2,
        product_category_name: 'Quần dài',
        product_category_slug: 'quan-dai',
        product_introduction: 'Dáng Straight',
        product_price: 299000,
        product_discount: 10,
        product_compaign_id: null,
        product_compaign_name: null,
        product_images: [
            {
                color: 'Xanh wash',
                code: 'blue',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.11_15.jpg',
                ],
            },
            {
                color: 'Xanh navi',
                code: 'green',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/February2024/joggerutdanang1.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/February2024/joggerutdanang3.jpg',
                ],
            },
        ],
    },
    {
        id: 3,
        product_name: 'Áo bảo hộ thi công',
        product_slug: 'ao-bao-ho-thi-cong',
        product_category_id: 22,
        product_category_name: 'Áo bảo hộ',
        product_category_slug: 'ao-bao-ho',
        product_introduction: 'Thoáng mát / Nhanh khô',
        product_price: 199000,
        product_discount: 10,
        product_compaign_id: 2,
        product_compaign_name: 'Giảm 10% cho thành viên mới',
        product_images: [
            {
                color: 'Vàng',
                code: 'yellow',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.JE002.7_72.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.JE002.9_33.jpg',
                ],
            },
        ],
    },
]);
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

const selectedForm = ref({});
const selectedMaterial = ref({});
const selectedColor = ref(null);
const selectedSize = ref({});
const selectedAll = ref([]);
const removeAllFilter = () => {
    selectedForm.value = {};
    selectedMaterial.value = {};
    selectedSize.value = {};
    selectedColor.value = null;
    selectedAll.value = [];
};
const formFilter = ref([
    {
        name: 'Quần Trunk',
        label: 'Quần Trunk',
    },
    {
        name: 'Quần Tam Giác',
        label: 'Quần Tam Giác',
    },
    {
        name: 'Quần Boxer dài',
        label: 'Quần Boxer dài',
    },
    {
        name: 'Quần Long Leg',
        label: 'Quần Long Leg',
    },
]);

const materialFilter = ref([
    {
        name: 'Vải bamboo',
        label: 'Vải bamboo (Sợi tre)',
    },
    {
        name: 'Vải Café',
        label: 'Vải Café',
    },
    {
        name: 'Vải Cotton',
        label: 'Vải Cotton',
    },
    {
        name: 'Vải Ice Cooling',
        label: 'Vải Ice Cooling',
    },
]);
const sizeFilter = ref([
    {
        name: 'S',
        label: 'S',
    },
    {
        name: 'M',
        label: 'M',
    },
    {
        name: 'L',
        label: 'L',
    },
    {
        name: 'XL',
        label: 'XL',
    },
    {
        name: '2XL',
        label: '2XL',
    },
]);
const colourFilter = ref([
    {
        name: 'Đen',
        label: 'Đen',
        color: '#000',
    },
    {
        name: 'Trắng',
        label: 'Trắng',
        color: '#fff',
    },
    {
        name: 'Xanh navy',
        label: 'Xanh navy',
        color: 'blue',
    },
    {
        name: 'Xám',
        label: 'Xám',
        color: 'gray',
    },
    {
        name: 'Đỏ',
        label: 'Đỏ',
        color: 'red',
    },
]);

const changeCategoryTab = (index) => {
    tabIndex.value = index;
    isLoadingData.value = true;
    setTimeout(() => {
        isLoadingData.value = false;
    }, 500);
};

const { data: collection, pending: loadingCollection, error: collectionError } = await useLazyAsyncData('collection-category', () =>
        // useOriginalFetch(`/api/v1/categories`),
    useOriginalFetch(`/api/v1/categories/ao-ghi-le`),
);

const { data: categories, pending: loadingCategories } = await useLazyAsyncData('all-category', () =>
    useOriginalFetch(`/api/v1/categories`),
);

watch(() => collectionError.value, () => {


})

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
