<template>
    <div v-if="bannerBlock" class="banner-block my-4">
        <picture class="w-full">
            <source :srcset="bannerBlock.image_mobile" media="(max-width: 991px)" />
            <img :src="bannerBlock.image_desktop" :alt="bannerBlock.title" style="width: 100%" />
        </picture>
        <div v-if="!hideContent" class="banner-content" :class="splitBanner ? 'modify-position' : ''">
            <div v-if="bannerBlock.subtitle" class="opacity-75 font-semibold uppercase">{{ bannerBlock.subtitle }}</div>
            <div class="title" :class="splitBanner ? 'custom-font' : ''">{{ bannerBlock.title }}</div>
            <div v-if="bannerBlock.description" class="description" v-html="bannerBlock.description"></div>
            <NuxtLink :to="localePath({name: 'collection-slug', params: {slug: bannerBlock.link}})">
                <UButton
                    size="xl"
                    color="none"
                    variant="ghost"
                    :class="splitBanner ? 'h-[48px] px-6 mt-auto hover:bg-gray-200/80' : ' px-10 h-[54px]  hover:bg-black hover:text-white'"
                    class="rounded-3xl bg-white text-black transition ease-in-out duration-300">
                    <span class="uppercase">Khám phá ngay</span>
                </UButton>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const localePath = useLocalePath();
const props = defineProps({
    bannerBlock: {
        type: Object,
        default: null,
    },
    splitBanner: {
        type: Boolean,
        default: false,
    },
    hideContent: {
        type: Boolean,
        default: false,
    },
});
</script>
<style lang="scss" scoped>
.banner-block {
    width: 100%;
    position: relative;
    .banner-content {
        color: black;
        position: absolute;
        left: 24px;
        @apply flex flex-col gap-4;
        top: 24px;
        @media screen and (min-width: 992px) {
            top: 50%;
            transform: translateY(-50%);
            left: 128px;
        }
        &.modify-position {
            top: 50%;
            transform: translateY(-50%);
            left: 36px;
        }
        .title {
            @media screen and (min-width: 1660px) {
                font-size: 80px;
                max-width: 500px;
            }
            @media screen and (min-width: 1280px) and (max-width: 1659px) {
                font-size: 3.75rem;
                max-width: 350px;
            }
            color: black;
            font-size: 2.25rem;
            text-transform: uppercase;
            font-weight: bold;
            max-width: 300px;
            &.custom-font {
                font-size: 2rem;
                max-width: 250px;
            }
        }
        .description {
            color: black;
            @media screen and (min-width: 1280px) {
                font-size: 1.25rem;
            }
            font-weight: 500;
        }
    }
}
</style>
