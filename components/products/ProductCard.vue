<template>
    <UCard
        :ui="{ rounded: '', ring: '', shadow: '', background: 'bg-transparent', body: { padding: '' } }"
        v-if="product"
        class="product-card relative">
        <div class="flex flex-col gap-4 w-full">
            <div v-if="product && product.product_images.length > 0" class="product-image relative">
                <button
                    v-for="(image, index) in product.product_images"
                    class="absolute left-0 top-0 z-30 h-full w-full product-image-item rounded-lg overflow-hidden"
                    :class="activeType == index ? 'block' : 'hidden'">
                    <NuxtImg
                        v-for="(item, indexImage) in image.list"
                        class="absolute left-0 top-0 z-30 h-full w-full object-top rounded-lg object-cover"
                        :class="{
                            hidden: indexImage > 1,
                            'first-look': indexImage == 0 && image.list.length > 1,
                            'second-look': indexImage == 1,
                        }"
                        :src="item"
                        format="webp" />
                </button>
            </div>
            <div class="product-type flex items-center justify-start flex-wrap gap-2">
                <button
                    v-for="(image, index) in product.product_images"
                    class="product-type-item opacity-80"
                    :style="{ 'background-color': image.code }"
                    @click="activeType = index"></button>
            </div>
            <div class="product-details flex flex-col gap-2 w-full">
                <div class="product-name">
                    {{ product.product_name }}
                </div>
                <div class="product-introduction">{{ product.product_introduction }} / {{ product.product_images[activeType].color }}</div>
                <div class="product-price">
                    <div v-if="product.product_discount == 0" class="original-price">
                        {{ formatPriceProduct(product.product_price) + 'đ' }}
                    </div>
                    <div v-else class="discount-price">
                        <div class="after-discount">
                            {{ formatPriceProduct((product.product_price * (100 - product.product_discount)) / 100) + 'đ' }}
                        </div>
                        <div class="original-price">{{ formatPriceProduct(product.product_price) + 'đ' }}</div>
                        <div class="discount-tag">{{ product.product_discount + '%' }}</div>
                    </div>
                </div>
            </div>
            <div v-if="product.product_compaign_id" class="product-compaign">
                {{ product.product_compaign_name }}
            </div>
        </div>
    </UCard>
    <UCard :ui="{shadow: '', ring: '', body: { padding: '', base: 'flex flex-col gap-4' } }" v-else class="product-card w-full relative">
        <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-[300px] w-full" />
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-6 w-[48px]" />
                <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-6 w-[48px]" />
            </div>
            <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-5 w-4/5" />
            <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-5 w-3/5" />
            <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-5 w-1/2" />
            <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-5 w-4/5 mt-2" />
        </div>
    </UCard>
</template>
<script setup>
const props = defineProps({
    product: Object,
});
const activeType = ref(0);

const formatPriceProduct = (item) => {
    return new Intl.NumberFormat('en-US').format(item);
};
</script>
<style lang="scss" scoped>
.product-card {
    width: 100%;
    .product-image {
        height: 300px;
        min-width: 1px;
        &:hover {
            .first-look {
                display: none;
            }
            .second-look {
                display: block;
            }
        }
        .first-look {
            display: block;
        }
        .second-look {
            display: none;
        }
    }
    .product-type {
        &-item {
            width: 40px;
            height: 23px;
            border: 1px solid #000;
            border-radius: 10px;
        }
    }
    .product-details {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.2em;
        .product-name {
            padding-right: 8px;
            @apply text-gray-900 font-bold;
            @include text-overflow(2);
            @media screen and (max-width: 991px) {
                font-size: 12px;
            }
        }
        .product-introduction {
            @apply text-gray-500 font-semibold;
        }
        .product-price {
            @apply font-bold;
            .discount-price {
                @apply flex items-center gap-3;
                .original-price {
                    @apply font-bold;
                    text-decoration: line-through;
                    text-decoration-thickness: 2px;
                    @apply text-gray-400/75;
                }
                .discount-tag {
                    @apply font-semibold;
                    font-size: 13px;
                    color: red;
                }
            }
        }
    }
    .product-compaign {
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        @apply text-blue-700;
    }
}
</style>
