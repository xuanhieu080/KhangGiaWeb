<template>
    <UCard :ui="{ ring: '', shadow: '', background: 'bg-transparent', body: { padding: '' } }" v-if="diary" class="diary-card relative">
        <div class="diary-card-wrapper w-full h-full cursor-pointer">
            <span class="absolute left-5 top-4 font-bold diary-name">{{diary.name}}</span>
            <img class="w-full object-contain object-left" :src="diary.image_thumb" :alt="diary.name" />
        </div>
    </UCard>
    <UCard :ui="{ body: { padding: '' } }" v-else class="product-card w-full relative">
        <USkeleton :ui="{ background: 'bg-gray-300' }" class="h-[250px] w-full" />
    </UCard>
    <UModal :ui="{ base: 'md:max-w-[64rem]' }" v-model="openDiaryProduct">
        <UCard class="diary-mini-modal w-full relative">
            <UButton class="close-btn rounded-full  absolute right-4 top-4" size="lg" variant="ghost" color="gray" @click="handleCloseDiaryProduct">
                <UIcon name="i-heroicons-x-mark" class="fs-22 text-black" />
            </UButton>
            <div class="flex gap-4 w-full justify-between">
                <div class="diary-thumb-image">
                    <NuxtImg format="jpg" class="w-full h-full object-contain object-center" :src="diary.image_thumb" :alt="diary.name" />
                </div>
                <div class="diary-product">
                    <div class="diary-product-item">
                        <div class="diary-product-image">
                            <NuxtImg format="webp" class="w-full h-full object-cover" :src="diary.image_sale" :alt="diary.name"/>
                        </div>
                        <div class="diary-product-name font-medium">
                            {{ diary.name }}
                        </div>
                        <div v-if="diary.discount == 0" class="diary-product-price">
                            {{ trans('price_name', {price: formatPriceProduct(diary.price)}) }}
                        </div>
                        <div v-else class="diary-product-price">
                            <div class="discount-price">
                                {{ trans('price_name', {price: (formatPriceProduct(diary.price * diary.discount / 100) )}) }}
                            </div>
                            <div class="original-price">
                                {{ trans('price_name', {price: formatPriceProduct(diary.price)}) }}
                            </div>
                            <div class="discount-tag">-{{ diary.discount }}%</div>
                        </div>
                        <UButton color="none" size="lg" class="bg-blue-600 hover:bg-black transition ease-linear duration-200 justify-center h-[54px] rounded-2xl">Mua ngay</UButton>
                    </div>
                </div>
            </div>
        </UCard>
    </UModal>
</template>
<script setup>
const props = defineProps({
    diary: Object,
});

const { locale, t: trans } = useI18n();
const activeType = ref(0);

const formatPriceProduct = (item) => {
    return new Intl.NumberFormat('en-US').format(item);
};
const openDiaryProduct = ref(false);
const handleOpenDiaryProduct = () => {
    openDiaryProduct.value = true;
};
const handleCloseDiaryProduct = () => {
    openDiaryProduct.value = false;
}
</script>
<style lang="scss" scoped>
.diary-card {
    width: 100%;
    height: 100%;
    .diary-card-wrapper {
        position: relative;
        &:after {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 10px;
            right: 10px;
            background-image: url('/images/cart-circle-btn.png');
            background-repeat: no-repeat;
            background-size: 30px;
        }
        .diary-name {
            font-size: 20px;
            width: 150px;
            @media screen and (min-width: 768px) and (max-width: 991px) {
                font-size: 32px;
                width: 250px;
                top: 24px;
                left: 24px;
            }
            @media screen and (min-width: 640px) and (max-width: 767px) {
                font-size: 28px;
                width: 250px;
                top: 24px;
                left: 24px;
            }
            @media screen and (min-width: 420px) and (max-width: 567px) {
                font-size: 36px;
                width: 330px;
                top: 24px;
                left: 24px;
            }
            @media screen and  (max-width: 419px) {
                font-size: 24px;
                width: 180px;
                top: 24px;
                left: 24px;
            }
        }
    }
}
.diary-mini-modal {
    .diary-thumb-image {
        width: 50%;
        max-height: 540px;
        border-radius: 8px;
        overflow: hidden;
    }
    .diary-product {
        width: 50%;
        .diary-product-item {
            @apply flex flex-col h-full justify-center gap-4;
            max-width: 50%;
            margin: auto;
            .diary-product-image {
                width: 100%;
                max-height: 250px;
                border-radius: 8px;
                overflow: hidden;
            }
            .diary-product-price {
                font-weight: bold;
                font-size: 14px;
                @apply flex gap-3 items-center;
                .original-price {
                    @apply text-gray-400/50;
                    text-decoration: line-through;
                    text-decoration-thickness: 2px;
                    font-weight: 600;
                }
                .discount-price {
                    font-size: 16px;
                }
                .discount-tag {
                    @apply text-red-500;
                }
            }

        }
        
    }
}
</style>
