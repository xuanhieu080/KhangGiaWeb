<template>
    <div v-if="bannerBlock" class="banner-block my-4">
        <picture style="width: 100%"
            ><source
                :srcset="bannerBlock.image_mobile"
                media="(max-width: 991px)" />
            <img
                :src="bannerBlock.image_desktop"
                alt="Quần dài nam"
                style="width: 100%"
        /></picture>
        <div class="banner-content">
            <div class="title">{{ bannerBlock.title }}</div>
            <div class="description" v-html="bannerBlock.description"></div>
            <NuxtLink :to="bannerBlock.link">
                <UButton
                    size="xl"
                    color="none"
                    variant="ghost"
                    class="rounded-2xl px-5 py-3 bg-white text-black hover:bg-black hover:text-white transition ease-in-out duration-300"
                    >Khám phá ngay</UButton
                >
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    bannerBlock: {
        type: Object,
        default: null,
    },
});
</script>
<style lang="scss" scoped>
.banner-block {
    width: 100%;
    position: relative;
    .banner-content {
        position: absolute;
        left: 24px;
        width: 100%;
        @apply flex flex-col gap-4;
        color: white;
        top: 75%;
        transform: translateY(-25%);
        @media screen and (min-width: 992px) {
            top: 50%;
            transform: translateY(-50%);
        }
        .title {
            @media screen and (min-width: 1660px) {
                font-size: 80px;
                max-width: 450px;
            }
            @media screen and (min-width: 1280px) and (max-width: 1659px) {
                font-size: 3.75rem;
                max-width: 350px;
            }
            font-size: 2.25rem;
            text-transform: uppercase;
            font-weight: bold;
            max-width: 265px;
        }
        .description {
            @media screen and (min-width: 1280px) {
                font-size: 1.25rem;
            }
            font-weight: 500;
        }
    }
}
</style>
