<template>
    <UCard v-if="product" class="product-card relative"> </UCard>
    <UCard v-else class="product-card w-full relative">
        <template #header>
            <USkeleton class="h-8 w-3/5" />
        </template>
        <USkeleton class="h-48 w-full" />
    </UCard>
</template>
<script setup>
const props = defineProps({
    product: Object,
});
</script>
<style lang="scss" scoped></style>
