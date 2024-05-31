<template>
    <NuxtLayout name='main'>

        <div v-if="page && page.data" class="page">
            <div v-if="!page.data.is_button && page.data.image_url" class="about-us-image relative">
                <NuxtImg
                    v-if="page.data.image_url"
                    class="w-full h-[500px] object-cover"
                    loading="lazy"
                    format="webp"
                    :src="page.data.image_url"
                    alt="" />
                <div
                    class="about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                    <h1 v-if="page.data.title" class="font-bold !text-[54px] 2xl:!text-[64px] !my-2">{{page.data.title}}</h1>
                    <span v-if="page.data.description_short" class="text-lg xl:text-xl">{{page.data.description_short}}</span>
                </div>
            </div>
            <div class="about-content !py-12 container mx-auto">
                <div class="prose max-w-full" v-html="page.data.description"></div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>

import images from 'assets/icons';
import { storeToRefs } from 'pinia';
import { useHeader } from '~/store/useHeader';
const useHeaderStore = useHeader();
const { isScrollDown, isLoadingPage } = storeToRefs(useHeaderStore);

const router = useRouter();
const route = useRoute();
const slug = ref(route.params.slug)
const { locale, t: trans } = useI18n();

const content = ref();

const refreshData = ref(0);
const {
    data: page,
    pending: loadingPage,
    error: errorGetItem,
} = await useAsyncData(
    'pages',
    async () =>
        useOriginalFetch(`/api/v1/pages/${route.params.slug}`),
    {
        default: () => [],
        watch: [refreshData],
    },
);
if (errorGetItem.value) {
    router.push({ name: `index___${locale.value}` });
}

watchEffect(() => {
    if (!loadingPage.value) {
        isLoadingPage.value = false;
    }
});
let title = page.value.data.meta_title;
let description = page.value.data.meta_description;
let seoMeta = {
    image: page.value.data.image_url,
    ogImage: page.value.data.image_url,
    description: description,
    ogDescription: description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription: description,
    keywords: page.value.data.meta_key,
};

useSeoMeta(seoMeta);
</script>
<style lang='scss' scoped>
.page {
    @apply flex flex-col gap-6 w-full;
}
</style>
