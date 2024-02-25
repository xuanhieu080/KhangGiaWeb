<template>
    <NuxtLayout name="main">
        <div class="category-page pt-16 bg-white">
            <div class="container mx-auto">
                <div class="category-header mb-6">
                    <div class="category-header-title">
                        <h1 class="font-bold uppercase text-2xl">Đồ mặc hàng ngày</h1>
                    </div>
                    <div class="category-tabs w-full">
                        <Swiper
                            :slidesPerView="4"
                            :spaceBetween="16"
                            :slidesPerGroup="4"
                            :scrollbar="true"
                            :modules="modules"
                            :breakpoints="{
                                1280: {
                                    slidesPerView: 5,
                                    slidesPerGroup:5,
                                    spaceBetween: 16,
                                },
                            }"
                            class="swiper category-swiper min-w-0 relative z-10">
                            <SwiperSlide v-for="(category, index) in categoryList" :key="product" class="h-full w-[200px] mr-4">
                                <UCard :ui="{ wrapper: '', shadow: '', ring: '', body: { padding: 'p-2 sm:p-2' } }" class="category-card" :class="index == tabIndex ? 'active': ''" @click="changeCategoryTab(index)">
                                    <div class="flex flex-col gap-2">
                                        <NuxtImg :src="category.image" format="webp" class="w-full h-full object-cover rounded-md" />
                                        <div class="category-name font-semibold">
                                            {{category.name}}
                                        </div>
                                    </div>
                                </UCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class="category-data flex flex-col gap-4">
                    <div class="category-filter flex items-center gap-4">
                        <span class="uppercase text-gray-500 fs-14 font-medium">Phân loại</span>
                        <USelect v-model="filter" :options="filterList" option-attribute="name" />
                    </div>
                    <div v-if="isLoadingData" class="category-data-list">
                        <div v-for="product in 6" class="category-data-item">
                            <ProductCard />
                        </div>
                    </div>
                    <div v-else class="category-data-list">
                        <div v-for="product in productList" class="category-data-item">
                            <ProductCard :product="product" />
                        </div>
                    </div>
                </div>

            </div>
            <div class="category-description flex items-center mt-6 bg-[#f1f1f1] p-6 w-full min-h-[250px]">
                <div class="container mx-auto md:max-w-[1280px] p-4">
                    <span class="text-gray-500 font-medium fs-20 leading-relaxed">Dòng sản phẩm thể thao ứng dụng các chất liệu và thiết kế mới với nhiều tính năng ưu việt giúp bạn thoải mái và tập trung hơn vào các chuyển động của mình.</span>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
definePageMeta({layout: false})
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar } from 'swiper/modules';
import ProductCard from '@/components/products/ProductCard';

defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});
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
const filterList = [{
  name: 'Mới nhất',
  value: 'newest'
}, {
  name: 'Cũ nhất',
  value: 'oldest',
}, {
  name: 'Bán chạy',
  value: 'best_sale'
}, {
  name: 'Giá thấp đến cao',
  value: 'Price increasement'
}, {
  name: 'Giá cao đến thấp',
  value: 'Price decreasement'
}]


const filter = ref('newest')

const changeCategoryTab = (index) => {
    tabIndex.value = index;
    isLoadingData.value = true;
    setTimeout(() => {
        isLoadingData.value = false;
    }, 500)
}
</script>
<style lang="scss" scoped>
.category-page {
    .category-tabs {
        .category-swiper {
            padding: 24px 0;
            .category-card {
                border: 2px solid transparent;
                &.active {
                    @apply border-blue-700;
                }
            }
        }
    }
    .category-data-list {
        @apply flex gap-4 justify-start w-full flex-wrap;
        .category-data-item {
            width: calc(25% - 12px);
            @media screen and (max-width: 991px) {
                width: calc(100% / 3 - 11px);
            }
            @media screen and (max-width: 767px) {
                width: calc(100% / 2 - 8px);
            }
        }
    }
}
</style>
