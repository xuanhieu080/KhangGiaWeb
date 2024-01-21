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
                <div class="product-box my-4 ">
                    <ProductList :productList="bannerList" />
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
</script>
<style lang="scss" scoped>
.dashboard {
    @apply flex flex-col gap-4;
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
