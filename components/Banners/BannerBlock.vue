<template>
    <div v-if="bannerBlock" class="banner-block">
        <picture class="w-full banner-image">
            <source v-if='isMobile' :srcset="bannerBlock.image_mobile" media="(max-width: 991px)" />
            <source v-else :srcset="bannerBlock.image_desktop" />
            <NuxtImg v-if='isMobie' :src="bannerBlock.image_mobile" :alt="bannerBlock.title" style="width: 100%" />
            <NuxtImg v-else :src="bannerBlock.image_desktop" :alt="bannerBlock.title" style="width: 100%" />
        </picture>
        <div v-if="!hideContent" class="banner-content" :class="[splitBanner ? 'modify-position' : '', isWhite ? 'white-text' : '']">
            <div v-if="bannerBlock.subtitle" :class="[splitBanner ? 'text-white md:text-black' : '']" class="opacity-85 md:opacity-75 font-semibold uppercase">{{ bannerBlock.subtitle }}</div>
            <div class="title" :class="[splitBanner ? 'custom-font' : '']">{{ bannerBlock.title }}</div>
            <div v-if="bannerBlock.description" class="description" :class="[splitBanner ? 'custom-font' : '']" v-html="bannerBlock.description"></div>
            <NuxtLink :to="localePath({ name: 'collection-slug', params: { slug: bannerBlock.link } })">
                <UButton
                    size="xl"
                    color="none"
                    variant="ghost"
                    :class="splitBanner ? 'h-[48px] px-6 mt-auto hover:bg-gray-200/80' : ' px-10 h-[54px]  hover:bg-black hover:text-white'"
                    class="rounded-3xl bg-white text-black transition ease-in-out duration-300">
                    <span class="uppercase">{{trans('Discover now')}}</span>
                </UButton>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const { locale, t: trans } = useI18n();
const { isMobile } = useDevice()

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
    isWhite: {
        type: Boolean,
        default: false,
    },
});
</script>
<style lang="scss" scoped>
.banner-block {
    width: 100%;
    position: relative;
    .banner-image {
        position: relative;
        @media screen and (max-width: 768px) {
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.24);
            }
        }
    }
    .banner-content {
        color: black;
        position: absolute;
        @apply flex flex-col gap-4;
        left: 24px;
        top: 85%;
        transform: translateY(-75%);
        color: black;
        &.white-text {
            color: white;
            @media screen and (min-width: 768px) {
                color: black;
            }
        }
        @media screen and (min-width: 992px) {
            top: 75%;
            transform: translateY(-50%);
            left: 72px;
            max-width: 650px;
        }
        @media screen and (min-width: 1440px) {
            left: 96px;
        }
        &.modify-position {
            top: 50%;
            transform: translateY(-50%);
            left: 36px;
            @media screen and (max-width: 768px) {
                top: 60%;
                transform: translateY(-60%);
                left: 24px;
            }
        }
        .title {
            font-size: 2.25rem;
            text-transform: uppercase;
            font-weight: bold;
            @media screen and (min-width: 1660px) {
                font-size: 80px;
            }
            @media screen and (min-width: 1280px) and (max-width: 1659px) {
                font-size: 3.75rem;
            }
            @media screen and (max-width: 767px) {
                max-width: 320px;
            }
            &.custom-font {
                font-size: 2rem;
                max-width: 250px;
                @media screen and (max-width: 767px) {
                    color: white;
                    font-size: 1.5rem;
                }
            }
        }
        .description {
            font-weight: 500;
            @media screen and (min-width: 1280px) {
                font-size: 1.25rem;
            }
            &.custom-font {
                @media screen and (max-width: 767px) {
                    font-size: 1rem;
                    color: white;
                }
            }
        }
    }
}
</style>
