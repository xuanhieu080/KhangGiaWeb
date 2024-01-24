<template>
    <div v-if="productList.length > 0" class="flex flex-col gap-4 relative w-full">
        <div class="collection-title fs-20 font-bold uppercase">{{ collectionTitle }}</div>
        <div class="collection-wrapper">
            <div v-for="product in productList" :key="product" class="collection-item">
                <ProductCard :product="product" />
            </div>
        </div>
        <NuxtLink :to="collectionLink" class="see-more-btn mx-auto mt-4">
            <UButton size="lg" variant="outline" color="none" class="rounded-2xl h-12 w-[200px] justify-center ring-2"
                ><span class="uppercase font-bold">Xem thêm</span></UButton
            >
        </NuxtLink>
    </div>
    <div v-else class="product-wrapper w-full flex items-center gap-4">
        <div v-for="item in 4" :key="item" class="w-1/4">
            <ProductCard />
        </div>
    </div>
</template>
<script setup>
import ProductCard from '@/components/products/ProductCard';
const props = defineProps({
    productList: Array,
    collectionTitle: String,
    collectionLink: String,
});
</script>
<style lang="scss" scoped>
.collection-wrapper {
    @apply w-full flex justify-start gap-4;
    @media screen and (max-width: 991px) {
        @apply flex-wrap;
    }
    .collection-item {
        width: 25%;
        @media screen and (max-width: 991px) {
            width: calc(50% - 12px);
        }
    }
}
</style>
