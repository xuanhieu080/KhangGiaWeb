<template>
    <div v-if="bannerList.length > 0" class="banner-wrapper relative">
        <Swiper
            ref="bannerSwiper"
            :slidesPerView="1"
            :modules="modules"
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :navigation="{
                nextEl: '.next-banner-btn',
                prevEl: '.prev-banner-btn',
            }"
            :grabCursor="true"
            class="swiper banner-swiper w-full h-full">
            <SwiperSlide v-for="item in bannerList" :key="item">
                <a href="http://fb.com/HmD.102" target="_blank" rel="noopener noreferrer">
                    <NuxtImg fit="contain" class="w-full h-full" loading="lazy" format="webp" :src="item.url" alt="" />
                </a>
            </SwiperSlide>
            <template v-slot:container-end>
                <div class="navigation-btns flex flex-col absolute top-1/2 right-4 -translate-y-1/2 z-10">
                    <UButton variant="ghost" color="none" size="lg" class="next-banner-btn">
                        <svg width="27" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.4755 7.84696L12.961 0.33225C12.7465 0.117742 12.4606 0 12.1557 0C11.8505 0 11.5648 0.117912 11.3503 0.33225L10.668 1.01468C10.4537 1.22885 10.3356 1.51492 10.3356 1.81993C10.3356 2.12478 10.4537 2.42049 10.668 2.63466L15.0519 7.02818H1.12414C0.496176 7.02818 0 7.51979 0 8.14792V9.11269C0 9.74082 0.496176 10.282 1.12414 10.282H15.1017L10.6682 14.7C10.4539 14.9146 10.3358 15.1928 10.3358 15.4979C10.3358 15.8025 10.4539 16.0849 10.6682 16.2992L11.3505 16.9794C11.565 17.194 11.8507 17.3109 12.1559 17.3109C12.4607 17.3109 12.7466 17.1924 12.9611 16.9779L20.4757 9.46338C20.6907 9.2482 20.809 8.96095 20.8081 8.6556C20.8088 8.34923 20.6907 8.06181 20.4755 7.84696Z"
                                fill="white"></path>
                        </svg>
                    </UButton>
                    <UButton variant="ghost" color="none" size="lg" class="prev-banner-btn">
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.33258 10.7751L8.84713 18.2898C9.06163 18.5043 9.34753 18.6221 9.65238 18.6221C9.95756 18.6221 10.2433 18.5042 10.4578 18.2898L11.1401 17.6074C11.3544 17.3932 11.4725 17.1072 11.4725 16.8021C11.4725 16.4973 11.3544 16.2016 11.1401 15.9874L6.75618 11.5939L20.684 11.5939C21.3119 11.5939 21.8081 11.1023 21.8081 10.4742L21.8081 9.50938C21.8081 8.88125 21.3119 8.34007 20.684 8.34007L6.70645 8.34007L11.1399 3.92202C11.3542 3.70752 11.4723 3.42923 11.4723 3.12422C11.4723 2.81954 11.3542 2.5372 11.1399 2.32286L10.4576 1.64262C10.2431 1.42812 9.95739 1.31122 9.65221 1.31122C9.34736 1.31122 9.06146 1.42964 8.84696 1.64415L1.33241 9.15869C1.1174 9.37387 0.999148 9.66112 0.999994 9.96648C0.999317 10.2728 1.1174 10.5603 1.33258 10.7751Z"
                                stroke="#F3F5F6"></path>
                        </svg>
                    </UButton>
                </div>
            </template>
        </Swiper>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
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
const bannerSwiper = ref(null);
onBeforeMount(() => {
    if (props.autoPlay) {
        modules.value.push(Autoplay);
    }
});
</script>
<style lang="scss" scoped></style>
