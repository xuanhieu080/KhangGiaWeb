<script setup lang='ts'>

import images from '@@/assets/icons';

const router = useRouter();
const localePath = useLocalePath();
const { locale, t: trans } = useI18n();
</script>

<template>
    <div class="flex justify-center gap-4 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
        <UButton
            variant="ghost"
            color="none"
            :to="localePath({name: 'page-khanggia-story'})"
            class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full max-w-[300px] border-2 border-green-500 items-center justify-between gap-4">
            <div class="flex justify-center">
                <img class="h-full w-12 object-contain" alt="Logo Site" :src="images.logo" />
            </div>
            <div class="font-bold text-left flex-1 flex justify-start">
                <span class="max-w-[150px] text-lg">{{ trans('Khang Gia Story') }}</span>
            </div>
            <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
            </div>
        </UButton>
        <UButton
            variant="ghost"
            color="none"
            :to="localePath({name: 'about-us'})"
            class="about-us-button bg-white p-4  rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
            <div class="flex justify-center">
                <img class="h-full w-12 object-contain" alt="Logo Site" src="/images/loa.png" />
            </div>
            <div class="font-bold text-left flex-1 flex justify-start">
                <span class="max-w-[150px] text-lg">KHANG GIA <br />101</span>
            </div>
            <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
            </div>
        </UButton>
        <UButton
            variant="ghost"
            :to="localePath({name: 'page-khanggia-be-kind'})"
            color="none"
            class="about-us-button !bg-white p-4  rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
            <div class="flex justify-center">
                <img class="h-full w-12 object-contain" alt="Logo Site" src="/images/star-blink.png" />
            </div>
            <div class="font-bold text-left flex-1 flex justify-start">
                <span class="max-w-[150px] text-lg">{{trans('Customer journey')}} <br />{{trans('98% satisfaction')}}</span>
            </div>
            <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
            </div>
        </UButton>
    </div>
</template>

<style scoped lang='scss'>

</style>