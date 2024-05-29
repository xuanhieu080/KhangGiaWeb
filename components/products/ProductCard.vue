<template>
    <UCard
        :ui="{ rounded: '', ring: '', shadow: '', background: 'bg-transparent', body: { padding: '' } }"
        v-if="product"
        class="product-card relative">
        <NuxtLink :to="localePath({ name: 'product-slug', params: { slug: product.slug } })" class="flex flex-col gap-4 w-full">
            <div class="product-image relative">
                <button class="absolute left-0 top-0 z-30 h-full w-full product-image-item rounded-lg overflow-hidden flex">
                    <NuxtImg
                        class="absolute left-0 top-0 z-30 h-full w-full rounded-lg object-contain first-look"
                        :src="product.thumb_image[0]" />
                    <NuxtImg
                        v-if="product.thumb_image[1]"
                        class="absolute left-0 top-0 z-30 h-full w-full rounded-lg object-contain second-look"
                        :src="product.thumb_image[1]" />
                </button>
            </div>
            <div v-if="productColor" class="product-type flex items-center justify-start flex-wrap gap-2">
                <button
                    v-for="(color, index) in productColor.attributes"
                    v-show="index < 5"
                    class="product-type-item opacity-80"
                    :style="{ 'background-color': color.attribute_color }"></button>
                <span v-if="productColor.attributes.length > 5" class="self-end text-xs text-blue-500">Xem thêm...</span>
            </div>
            <div class="product-details flex flex-col gap-2 w-full">
                <div class="product-name">
                    {{ product.name }}
                </div>
                <div v-if="productSilk || productColor" class="product-introduction flex items-center gap-1">
                    {{ productSilk ? productSilk.attributes[activeSilk].attribute_name + ' / ' : '' }}
                    {{ productColor ? productColor.attributes[activeColor].attribute_name : '' }}
                </div>
                <div class="product-price">
                    <div v-if="product.percent == 0" class="original-price">
                        {{ formatPriceProduct(product.price) + 'đ' }}
                    </div>
                    <div v-else class="discount-price">
                        <div class="after-discount">
                            {{ formatPriceProduct(product.price_discount) + 'đ' }}
                        </div>
                        <div class="original-price">{{ formatPriceProduct(product.price) + 'đ' }}</div>
                        <div class="discount-tag">{{ product.percent + '%' }}</div>
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
const activeSilk = ref(0);
const activeColor = ref(0);
const localePath = useLocalePath();

const productColor = ref(null);
const productSize = ref(null);
const productSilk = ref(null);

const mixedProduct = ref(null);

const productVariants = ref([]);

// => Data {màu: A, mã màu A: ... , hình của màu A: []}

let initialProduct = () => {
    let productColorIndex = props.product.variantAttribute.findIndex((attr) => attr.slug == 'mau-sac');
    let productSizeIndex = props.product.variantAttribute.findIndex((attr) => attr.slug == 'size');
    let productSilkIndex = props.product.variantAttribute.findIndex((attr) => attr.slug == 'chat-vai');
    if (productColorIndex != -1) {
        productColor.value = props.product.variantAttribute[productColorIndex];
        productVariants.value = [...productVariants.value, ...productColor.value.attributes];
    }
    if (productSizeIndex != -1) {
        productSize.value = props.product.variantAttribute[productSizeIndex];
        productVariants.value = [...productVariants.value, ...productSize.value.attributes];
    }
    if (productSilkIndex != -1) {
        productSilk.value = props.product.variantAttribute[productSilkIndex];
        productVariants.value = [...productVariants.value, ...productSilk.value.attributes];
    }
};

const handleShowImage = (colorItem, index) => {
    let imageIndex = props.product.variants.findIndex((item) => item.options.length > 0 && item.options.includes(colorItem.attribute_id));
    let colorIndex = productColor.value.attributes.findIndex((item) => item.attribute_id == colorItem.attribute_id);
    if (imageIndex != -1) {
        activeType.value = imageIndex;
    }
    if (colorIndex != -1) {
        activeColor.value = colorIndex;
    }
};

function getProductItem() {
    // Duyệt qua từng phần tử trong mảng variants
    for (const variant of props.product.data.variants) {
        // Tạo mảng optionAll riêng từ option_all
        const optionAll = variant.option_all.map((item) => JSON.stringify(item));
        // Kiểm tra xem tất cả các phần tử của productVariants có nằm trong optionAll hay không
        if (productVariants.value.every((item) => optionAll.includes(JSON.stringify(item)))) {
            return variant; // Trả lại variant phù hợp
        }
    }
    return null;
}
onBeforeMount(() => {
    if (props.product) {
        initialProduct();
    }
});

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
        @media screen and (max-width: 768px) {
            height: 200px;
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
