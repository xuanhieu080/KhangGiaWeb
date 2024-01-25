<template>
    <div v-if="categoryList.length > 0" class="flex flex-col gap-4 relative w-full">
        <div class="collection-wrapper">
            <div v-for="category in categoryList" :key="category" class="collection-item">
                <CategoryCard :category="category" />
            </div>
        </div>
    </div>
    <div v-else class="product-wrapper w-full flex items-center gap-4">
        <div v-for="item in 4" :key="item" class="w-1/4">
            <CategoryCard />
        </div>
    </div>
</template>
<script setup>
import CategoryCard from '@/components/categories/CategoryCard';
const props = defineProps({
    categoryList: Array,
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
