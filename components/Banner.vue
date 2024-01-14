<template>
    <div v-if="bannerList.length > 0" class="banner-wrapper">
        <Swiper
            :slidesPerView="1"
            :modules="modules"
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :navigation="true"
            class="swiper banner-swiper w-full h-full">
            <SwiperSlide v-for="item in bannerList" :key="item" >
                <NuxtImg fit="contain" class="w-full h-full" loading="lazy" format="webp" :src="item.url" alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});
const props = defineProps({
    bannerList: Array,
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
