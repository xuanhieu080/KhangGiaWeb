<template>
    <UCard
        :ui="{ rounded: '', ring: '', shadow: '', background: 'bg-transparent', body: { padding: '' } }"
        v-if="category"
        class="category-card relative">
        <NuxtLink :to="category.link">
            <img loading="lazy" format="webp" :src="category.image" class="w-full h-full" />
        </NuxtLink>
    </UCard>
    <UCard :ui="{ body: { padding: '' } }" v-else class="product-card w-full relative">
        <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-[300px] w-full" />
    </UCard>
</template>
<script setup>
const props = defineProps({
    category: Object,
});
const activeType = ref(0);

const formatPriceProduct = (item) => {
    return new Intl.NumberFormat('en-US').format(item);
};
</script>
<style lang="scss" scoped>
.category-card {
    width: 100%;
    position: relative;
    &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        @apply bg-transparent transition ease-in-out duration-300;
    }
    &:hover {
        &:after {
            @apply bg-black/20 transition ease-in-out duration-300;
        }
    }
}
</style>
