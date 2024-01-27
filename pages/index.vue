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
                <BannerBlock :bannerBlock="bannerBlock" />
            </div>
            <div class="container mx-auto overflow-hidden md:overflow:visible my-4">
                <ProductCollection :productList="collectionList" :collectionTitle="'Sản phẩm áo quần dài nam'" :collectionLink="'/articles'" />
            </div>
            <div class="banner-block h-full">
                <BannerBlock :bannerBlock="bannerBlock2" />
            </div>
            <div class="container mx-auto overflow-hidden md:overflow:visible my-4">
                <ProductCollection :productList="collectionList" :collectionTitle="'Sản phẩm thu đông'" :collectionLink="'/articles'" />
            </div>
            <div class="banner-block container mx-auto flex justify-between gap-4 w-full h-full">
                <BannerBlock :bannerBlock="bannerBlock3" :split-banner="true" />
                <BannerBlock :bannerBlock="bannerBlock4" :split-banner="true" />
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
import Banner from '@/components/Banners/Banner.vue';
import BannerBlock from '@/components/Banners/BannerBlock.vue';
import ProductList from '@/components/products/ProductSwiper';
import ProductCollection from '@/components/products/ProductCollection';
import CategoryBox from '@/components/categories/CategoryBox.vue';
import DiaryWrapper from '@/components/diary/diaryWrapper.vue';
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
]);
const bannerBlock = ref({
    image_desktop: 'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/mceclip2_93.png',
    image_mobile: 'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/mceclip4_96.png',
    title: 'Quần dài nam',
    description: 'Nhập mã <b>CM2024</b> giảm 15% tối đa 100K',
    link: '/articles',
});
const bannerBlock2 = ref({
    image_desktop: 'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/mceclip0_9.png',
    image_mobile: 'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/mceclip3_93.png',
    title: 'Quần dài nam',
    description: 'Nhập mã <b>CM2024</b> giảm 15% tối đa 100K',
    link: '/articles',
});
const bannerBlock3 = ref({
    image_desktop: 'https://mcdn.coolmate.me/image/January2024/mceclip9.png',
    image_mobile: 'https://mcdn.coolmate.me/image/January2024/mceclip9.png',
    title: 'Quà tặng hấp dẫn',
    subtitle: 'CM24 - Nước hoa nam',
    link: '/articles',
});
const bannerBlock4 = ref({
    image_desktop: 'https://mcdn.coolmate.me/image/October2023/mceclip1_15.png',
    image_mobile: 'https://mcdn.coolmate.me/image/October2023/mceclip1_15.png',
    title: 'Basketball collection',
    subtitle: '84Rising - Streetwear',
    link: '/articles',
});

const categoryList = ref([
    {
        name: 'Tất cả sản phẩm',
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/January2024/mceclip1_53.png',
        link: '/collection/tat-ca-san-pham',
    },
    {
        name: 'Đồ thể thao',
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/January2024/mceclip2_29.png',
        link: '/collection/do-the-thao',
    },
    {
        name: 'Mặc hàng ngày',
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/January2024/mceclip0_91.png',
        link: '/collection/mac-hang-ngay',
    },
    {
        name: 'Đồ lót nam',
        image: 'https://media2.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/January2024/mceclip1_92.png',
        link: '/collection/do-lot-nam',
    },
])
const diaryList = ref([
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        image_sale: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        price: 200000,
        discount: 10,
    },
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        image_sale: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        price: 129000,
        discount: 16,
    },
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        image_sale: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        price: 300000,
        discount: 25,
    },
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        image_sale: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        price: 299000,
        discount: 50,
    },
    {
        name: 'Quần đùi nam cá tính',
        slug: 'quan-dui-nam-ca-tinh',
        image_thumb: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        image_sale: 'https://mcdn.coolmate.me/image/October2023/mceclip4_52.png',
        price: 199000,
        discount: 0,
    }
])
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
