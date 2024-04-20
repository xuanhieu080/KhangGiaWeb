<template>
    <UCard
        :ui="{ rounded: '', ring: '', shadow: '', background: 'bg-transparent', body: { padding: '' } }"
        v-if="product"
        class="product-card relative">
        <NuxtLink :to="localePath({ name: 'product-slug', params: { slug: product.slug } })" class="flex flex-col gap-4 w-full">
            <div v-if="product.variants && product.variants.length > 0" class="product-image relative">
                <button
                    v-for="(image, index) in product.variants"
                    class="absolute left-0 top-0 z-30 h-full w-full product-image-item rounded-lg overflow-hidden"
                    :class="activeType == index ? 'block' : 'hidden'">
                    <NuxtImg
                        v-for="(item, indexImage) in image.thumb_image"
                        class="absolute left-0 top-0 z-30 h-full w-full object-top rounded-lg object-cover"
                        :class="{
                            hidden: indexImage > 1,
                            'first-look': indexImage == 0 && image.thumb_image.length > 1,
                            'second-look': indexImage == 1,
                        }"
                        :src="item" />
                </button>
            </div>
            <div v-if="product.variantAttribute" class="product-type flex items-center justify-start flex-wrap gap-2">
                <button
                    v-for="(color, index) in product.variantAttribute['Màu sắc']"
                    class="product-type-item opacity-80"
                    :style="{ 'background-color': color.attribute_color }"
                    @click.stop.prevent="activeType = index"></button>
            </div>
            <div class="product-details flex flex-col gap-2 w-full">
                <div class="product-name">
                    {{ product.name }}
                </div>
                <div class="product-introduction flex items-center gap-1">
                    <span v-html="product.description"></span> /
                    {{ product.variantAttribute &&  product.variantAttribute['Màu sắc'] ? product.variantAttribute['Màu sắc'][activeType].attribute_name : '' }}
                </div>
                <div class="product-price">
                    <div v-if="product.price_discount == 0" class="original-price">
                        {{ formatPriceProduct(product.price) + 'đ' }}
                    </div>
                    <div v-else class="discount-price">
                        <div class="after-discount">
                            {{ formatPriceProduct((product.price * (100 - product.price_discount)) / 100) + 'đ' }}
                        </div>
                        <div class="original-price">{{ formatPriceProduct(product.price) + 'đ' }}</div>
                        <div class="discount-tag">{{ product.price_discount + '%' }}</div>
                    </div>
                </div>
            </div>
            <div v-if="product.product_compaign_id" class="product-compaign">
                {{ product.product_compaign_name }}
            </div>
        </NuxtLink>
    </UCard>
    <UCard :ui="{ shadow: '', ring: '', body: { padding: '', base: 'flex flex-col gap-4' } }" v-else class="product-card w-full relative">
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
const localePath = useLocalePath();

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
            span {
                p {
                    margin: 0 !important;
                }
            }
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
