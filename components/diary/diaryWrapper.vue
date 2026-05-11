<template>
    <div class="diary-container">
        <div class="diary-title text-center text-3xl font-bold leading-relaxed">{{trans('KHANG GIA Journal')}}</div>
        <div class="diary-subtitle text-xl text-center">{{trans('Share your latest look with hashtag #GAKVN')}}</div>
        <div v-if="diaryList.length > 0" class="diary-wrapper w-full my-4 relative">
            <Swiper
                :slidesPerView="1"
                :spaceBetween="8"
                :slidesPerGroup="1"
                :modules="modules"
                :loop="true"
                :autoplay="{
                    delay: 100000,
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
                        slidesPerGroup: 5
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                        slidesPerGroup: 4
                    },
                    567: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                        slidesPerGroup: 2
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
                class="prev-diary-btn lg:bg-gray-200 bg-black rounded-full -translate-x-1/2 absolute top-1/2 left-2 lg:left-4 -translate-y-1/2 z-20 lg:z-0 hover:z-20"
                :padded="false">
                <UIcon class="text-[32px] text-white lg:text-black lg:text-[40px]" name="i-flowbite-arrow-left-outline" dynamic />
            </UButton>
            <UButton
                variant="ghost"
                color="none"
                size="lg"
                class="next-diary-btn lg:bg-gray-200 bg-black rounded-full translate-x-1/2 absolute top-1/2 right-2 lg:right-4 -translate-y-1/2 z-20 lg:z-0 hover:z-20"
                :padded="false">
                <UIcon class="text-[32px] text-white lg:text-black lg:text-[40px]" name="i-flowbite-arrow-right-outline" dynamic />
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

const { locale, t: trans } = useI18n();

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
