<template>
    <div v-if="!loading && productList && productList.length > 0" class="flex flex-col gap-4 relative w-full">
        <div class="collection-title text-[28px] font-bold uppercase">{{ collectionTitle }}</div>
        <div class="collection-wrapper">
            <div v-for="product in productList" :key="product" class="collection-item">
                <ProductCard :product="product" />
            </div>
        </div>
        <NuxtLink v-if="collectionLink" :to="localePath(collectionLink)" class="see-more-btn mx-auto mt-4">
            <UButton size="lg" variant="outline" color="none" class="rounded-2xl h-12 w-[200px] justify-center ring-2">
                <span class="uppercase font-bold">{{ trans('Load more') }}</span>
            </UButton>
        </NuxtLink>
    </div>
    <div v-else-if="loading" class="product-wrapper w-full flex items-center gap-4">
        <div v-for="item in 4" :key="item" class="w-1/4">
            <ProductCard />
        </div>
    </div>
</template>
<script setup>
import ProductCard from '@/components/products/ProductCard';
const localePath = useLocalePath();
const { locale, t: trans } = useI18n();
const props = defineProps({
    productList: Array,
    collectionTitle: String,
    collectionLink: String,
    loading: {
        type: Boolean,
        default: true,
    },
});


</script>
<style lang="scss" scoped>
.collection-wrapper {
    @apply w-full grid grid-cols-4 gap-4;
    @media screen and (max-width: 991px) {
        @apply grid-cols-2;
    }
}
</style>
