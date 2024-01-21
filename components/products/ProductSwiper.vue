<template>
    <div v-if="productList.length > 0" class="product-wrapper relative">
        <Swiper
            :slidesPerView="1"
            :spaceBetween="0"
            :modules="modules"
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :navigation="{
                nextEl: '.navigation-btns .next-product-btn',
                prevEl: '.navigation-btns .prev-product-btn',
            }"
            :grabCursor="true"
            :breakpoints="{
                '@0.75': {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                '@1.0': {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                '@1.5': {
                    slidesPerView: 5,
                    spaceBetween: 16,
                },
            }"
            class="swiper product-swiper w-full h-full">
            <SwiperSlide v-for="item in productList" :key="item">
                <a href="http://fb.com/HmD.102" target="_blank" rel="noopener noreferrer">
                    <NuxtImg fit="contain" class="w-full h-full" loading="lazy" format="webp" :src="item.url" alt="" />
                </a>
            </SwiperSlide>
        </Swiper>
        <div class="navigation-btns flex w-full justify-between absolute top-1/2 left-0 -translate-y-1/2 z-20">
            <UButton variant="ghost" color="none" size="lg" class="prev-product-btn md:-ml-6" :padded="false">
                <UIcon class="text-[40px]" name="i-material-symbols-arrow-circle-left-rounded" dynamic />
            </UButton>
            <UButton variant="ghost" color="none" size="lg" class="next-product-btn md:-mr-6" :padded="false">
                <UIcon class="text-[40px]" name="i-material-symbols-arrow-circle-right-rounded" dynamic />
            </UButton>
        </div>
    </div>
    <div v-else class="product-wrapper relative">
        <Swiper
            :slidesPerView="1"
            :spaceBetween="0"
            :modules="modules"
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :navigation="{
                nextEl: '.navigation-btns .next-product-btn',
                prevEl: '.navigation-btns .prev-product-btn',
            }"
            :grabCursor="true"
            :breakpoints="{
                '@0.75': {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                '@1.0': {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                '@1.5': {
                    slidesPerView: 5,
                    spaceBetween: 16,
                },
            }"
            class="swiper product-swiper w-full h-full">
            <SwiperSlide v-for="item in 5" :key="item">
                <ProductCard />
            </SwiperSlide>
        </Swiper>
        <div class="navigation-btns flex w-full justify-between absolute top-1/2 left-0 -translate-y-1/2 z-20">
            <UButton variant="ghost" color="none" size="lg" class="prev-product-btn -ml-6" :padded="false">
                <UIcon class="text-[40px]" name="i-material-symbols-arrow-circle-left-rounded" dynamic />
            </UButton>
            <UButton variant="ghost" color="none" size="lg" class="next-product-btn -mr-6" :padded="false">
                <UIcon class="text-[40px]" name="i-material-symbols-arrow-circle-right-rounded" dynamic />
            </UButton>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import ProductCard from '@/components/products/ProductCard';
defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});
const props = defineProps({
    productList: Array,
    autoPlay: {
        type: Boolean,
        default: false,
    },
});
let modules = ref([Navigation]);
onBeforeMount(() => {
    if (props.autoPlay) {
        modules.value.push(Autoplay);
    }
});
</script>
<style lang="scss" scoped></style>
