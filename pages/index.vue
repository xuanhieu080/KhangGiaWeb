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
            <div class="banner-block h-full">
                <BannerBlock key="banner-block-1" :bannerBlock="bannerBlock" />
            </div>
            <div class="container mx-auto overflow-hidden md:overflow:visible my-4">
                <ProductCollection
                    key="container-1"
                    :productList="collectionList"
                    :collectionTitle="'Sản phẩm áo quần dài nam'"
                    :collectionLink="'/articles'" />
            </div>
            <div class="banner-block h-full">
                <BannerBlock key="banner-block-2" :bannerBlock="bannerBlock2" />
            </div>
            <div class="container mx-auto overflow-hidden md:overflow:visible my-4">
                <ProductCollection
                    key="container-2"
                    :productList="collectionList"
                    :collectionTitle="'Sản phẩm thu đông'"
                    :collectionLink="'/articles'" />
            </div>
            <div class="banner-block container mx-auto flex justify-between gap-4 w-full h-full">
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
definePageMeta({ layout: false, auth: false });
import Banner from '@/components/Banners/Banner.vue';
import BannerBlock from '@/components/Banners/BannerBlock.vue';
import ProductList from '@/components/products/ProductSwiper';
import ProductCollection from '@/components/products/ProductCollection';
import CategoryBox from '@/components/categories/CategoryBox.vue';
import DiaryWrapper from '@/components/diary/diaryWrapper.vue';
const localePath = useLocalePath();
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
]);
const collectionList = ref([
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
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-5_17.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-7_87.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/sCM006.thumb1.2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg',
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
                color: 'Đen',
                code: '#000',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-5_17.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-7_87.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/sCM006.thumb1.2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg',
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
                color: 'Đen',
                code: '#000',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-5_17.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-7_87.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/sCM006.thumb1.2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg',
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
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-5_17.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-7_87.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/sCM006.thumb1.2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg',
                ],
            },
        ],
    },
]);
const bannerBlock = ref({
    image_desktop:
        '/images/banner_3.jpg',
    image_mobile: '/images/banner_3.jpg',
    title: 'Đồng phục',
    description: 'Thời trang 2024',
    link: '/collection/dong-phuc',
});
const bannerBlock2 = ref({
    image_desktop:
        '/images/banner_4.jpg',
    image_mobile: '/images/banner_4.jpg',
    title: 'Áo ghile kỹ sư',
    description: 'Chuyên dụng - Chất lượng - Uy tín',
    link: '/collection/ao-ghile',
});
const bannerBlock3 = ref({
    image_desktop: '/images/banner_5.jpg',
    image_mobile: '/images/banner_5.jpg',
    title: 'Quà tặng hấp dẫn',
    subtitle: 'CM24 - Nước hoa nam',
    link: '/articles',
});
const bannerBlock4 = ref({
    image_desktop: '/images/banner_6.jpg',
    image_mobile: '/images/banner_6.jpg',
    title: 'Basketball collection',
    subtitle: '84Rising - Streetwear',
    link: '/articles',
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
