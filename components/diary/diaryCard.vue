import type { _relative } from '#tailwind-config/content';
<template>
    <UCard :ui="{ ring: '', shadow: '', background: 'bg-transparent', body: { padding: '' } }" v-if="diary" class="diary-card relative">
        <div class="diary-card-wrapper w-full h-full cursor-pointer">
            <NuxtImg format="webp" class="w-full h-full object-cover" :src="diary.image_thumb" />
        </div>
    </UCard>
    <UCard :ui="{ body: { padding: '' } }" v-else class="product-card w-full relative">
        <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-[250px] w-full" />
    </UCard>
</template>
<script setup>
const props = defineProps({
    diary: Object,
});
const activeType = ref(0);

const formatPriceProduct = (item) => {
    return new Intl.NumberFormat('en-US').format(item);
};
</script>
<style lang="scss" scoped>
.diary-card {
    width: 100%;
    .diary-card-wrapper {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            width: 30px;
            height: 30px;
            top: 10px;
            right: 10px;
            background-image: url('/images/cart-circle-btn.png');
            background-repeat: no-repeat;
            background-size: 30px;
        }
    }
}
</style>
