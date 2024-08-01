<template>
    <div v-if="productList.length > 0" class="product-wrapper relative">
        <Swiper
            v-show="finishLoadingSwiper"
            :slidesPerView="2"
            :spaceBetween="16"
            :slidesPerGroup="1"
            :modules="modules"
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            @swiper="handleSwiper"
            :navigation="{
                nextEl: '.product-wrapper .next-product-btn',
                prevEl: '.product-wrapper .prev-product-btn',
            }"
            :breakpoints="{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                },
            }"
            class="swiper product-swiper min-w-0 relative z-10">
            <SwiperSlide v-for="product in productList" :key="product" class="h-full w-[300px] ">
                <ProductCard :product="product" />
            </SwiperSlide>
        </Swiper>
        <UButton
            variant="ghost"
            color="none"
            size="lg"
            v-show="finishLoadingSwiper" 
            class="prev-product-btn -translate-x-1/2 rounded-full  absolute top-1/2 left-2 lg:left-0 -translate-y-1/2 z-20 bg-gray-100 p-2 rounded-fullss lg:z-0 hover:z-20"
            :padded="false">
            <UIcon class="text-[22px]" name="i-heroicons-arrow-long-left" dynamic />
        </UButton>
        <UButton
            variant="ghost"
            color="none"
            size="lg"
            v-show="finishLoadingSwiper" 
            class="next-product-btn translate-x-1/2 rounded-full absolute top-1/2 right-2 md:right-0 -translate-y-1/2 z-20 bg-gray-100 p-2 rounded-fullss lg:z-0 hover:z-20"
            :padded="false">
            <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
        </UButton>
        <div v-show="!finishLoadingSwiper" class="product-wrapper w-full grid grid-cols-2 md:grid-cols-5 gap-4">
            <div v-for="item in 5" :key="item">
                <ProductCard />
            </div>
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
    productList: {
        type: Array,
        default: [],
    },
    autoPlay: {
        type: Boolean,
        default: false,
    },
});
let modules = ref([Navigation]);

const finishLoadingSwiper = ref(false);
const handleSwiper = () => {
    finishLoadingSwiper.value = true;
}

onBeforeMount(() => {
    if (props.autoPlay) {
        modules.value.push(Autoplay);
    }
});

</script>
<style lang="scss" scoped></style>
