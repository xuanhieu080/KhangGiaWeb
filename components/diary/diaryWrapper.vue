<template>
    <div class="diary-container">
        <div class="diary-title text-center fs-28 font-bold leading-relaxed">Nhật ký GAK</div>
        <div class="diary-subtitle text-center">Chia sẻ diện mạo mới nhất của bạn cùng với #GAK</div>
        <div v-if="diaryList.length > 0" class="diary-wrapper w-full my-4">
            <Swiper
                :slidesPerView="4"
                :spaceBetween="24"
                :slidesPerGroup="4"
                :modules="modules"
                :loop="true"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :navigation="{
                    nextEl: '.diary-wrapper .next-diary-btn',
                    prevEl: '.diary-wrapper .prev-diary-btn',
                }"
                :breakpoints="{
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 24,
                    },
                }"
                class="swiper diary-swiper min-w-0 relative z-10">
                <SwiperSlide v-for="diary in diaryList" :key="diary" class="h-full w-[200px]">
                    <DiaryCard :diary="diary" />
                </SwiperSlide>
            </Swiper>
            <UButton
                variant="ghost"
                color="none"
                size="lg"
                class="prev-diary-btn -translate-x-1/2 md:-translate-x-full absolute top-1/2 left-0 -translate-y-1/2 z-0 hover:z-20"
                :padded="false">
                <UIcon class="text-[40px]" name="i-flowbite-arrow-left-outline" dynamic />
            </UButton>
            <UButton
                variant="ghost"
                color="none"
                size="lg"
                class="next-diary-btn translate-x-1/2 md:translate-x-full absolute top-1/2 right-0 -translate-y-1/2 z-0 hover:z-20"
                :padded="false">
                <UIcon class="text-[40px]" name="i-flowbite-arrow-right-outline" dynamic />
            </UButton>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import DiaryCard from '@/components/diary/diaryCard';
defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});
const props = defineProps({
    diaryList: {
        type: Array,
        default: [],
    },
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
<style lang="scss">
.diary-container {
}
</style>
