<template>
    <NuxtLayout name="main">
        <div class="dashboard">
            <Banner :bannerList="bannerList" :autoPlay="true" />
            <div class="container mx-auto overflow-hidden md:overflow-visible">
                <div class="flex items-center gap-4 w-full my-4">
                    <UButton variant="ghost" color="none" size="lg" class="tab-button active">Sản phẩm mới</UButton>
                    <UButton variant="ghost" color="none" size="lg" class="tab-button">Bán chạy nhất</UButton>
                    <UButton variant="ghost" color="none" size="lg" class="tab-button">
                        Sắp ra mắt
                        <UIcon name="i-ic-round-star" class="fs-22 tab-button-icon" dynamic />
                    </UButton>
                </div>
                <div class="product-box my-4">
                    <ProductList :productList="productList" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import Banner from '@/components/Banner';
import ProductList from '@/components/products/ProductSwiper';
const localePath = useLocalePath();
const bannerList = ref([
    {
        url: 'https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/BANNER_WINTER_CLT_(ccmfnlfnal)s.png',
        name: 'banner 1',
    },
    {
        url: 'https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/cmbsBanner-6_copy.jpg',
        name: 'banner 2',
    },
    {
        url: 'https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/BANNER_WINTER_CLT_(ccmfnlfnal)s.png',
        name: 'banner 1',
    },
    {
        url: 'https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/cmbsBanner-6_copy.jpg',
        name: 'banner 2',
    },
    {
        url: 'https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/BANNER_WINTER_CLT_(ccmfnlfnal)s.png',
        name: 'banner 1',
    },
    {
        url: 'https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/cmbsBanner-6_copy.jpg',
        name: 'banner 2',
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
                    'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.PL001.1s7.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMAW.PL001.1s6_74.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/December2023/23CMAW.PL001.13.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.PL001.1s7.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMAW.PL001.1s6_74.jpg',
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
        product_category_name: 'quan-dai',
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
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.1_46_27.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.2_45.jpg',
                ],
            },
            {
                color: 'Xanh navi',
                code: 'green',
                list: ['https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.5_8.jpg'],
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
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.1_46_27.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.2_45.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.5_8.jpg',
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
                    'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.PL001.1s7.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMAW.PL001.1s6_74.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: ['https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/December2023/23CMAW.PL001.13.jpg'],
            },
        ],
    },
    {
        id: 2,
        product_name: 'Quần jeans nam Basics',
        product_slug: 'quan-jeans-nam-basics',
        product_category_id: 2,
        product_category_name: 'Quần dài',
        product_category_name: 'quan-dai',
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
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.1_46_27.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.2_45.jpg',
                ],
            },
            {
                color: 'Xanh navi',
                code: 'green',
                list: ['https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.5_8.jpg'],
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
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.1_46_27.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.2_45.jpg',
                    'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMCW.JE006.5_8.jpg',
                ],
            },
        ],
    },
]);
</script>
<style lang="scss" scoped>
.dashboard {
    @apply flex flex-col gap-4 w-full;
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
