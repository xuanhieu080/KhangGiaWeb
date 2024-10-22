<template>
    <NuxtLayout name='main'>
        <div v-if='page && page.data' class='page'>
            <div v-if='!page.data.is_button && page.data.image_url' class='about-us-image relative'>
                <NuxtImg
                    v-if='page.data.image_url'
                    class='w-full h-[500px] object-cover'
                    loading='lazy'
                    format='webp'
                    :src='page.data.image_url'
                    alt='' />
                <div
                    class='about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center'>
                    <h1 v-if='page.data.title' class='font-bold !text-[54px] 2xl:!text-[64px] !my-2'>
                        {{ page.data.title }}</h1>
                    <span v-if='page.data.description_short'
                          class='text-lg xl:text-xl'>{{ page.data.description_short }}</span>
                </div>
            </div>
            <div class='about-content !py-12 container mx-auto'>
                <div class='prose max-w-full' v-html='page.data.description'></div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>

import images from 'assets/icons';
import { storeToRefs } from 'pinia';
import { useHeader } from '~/store/useHeader';

const useHeaderStore = useHeader();
const { isLoadingPage } = storeToRefs(useHeaderStore);

const route = useRoute();
const { locale, t: trans } = useI18n();

const refreshData = ref(0);
const {
    data: page,
    status: loadingPage,
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
    navigateTo({ path: `/${locale.value}/404` }, { redirectCode: 301, replace: true });
}

const title = ref('');
const description = ref('');
const key = ref('');
const image = ref();
const seoMeta = ref({})

watchEffect((value) => {
    if (loadingPage.value === 'success') {
        title.value = page.value.data?.meta_title;
        description.value = page.value.data?.meta_description;
        key.value = page.value.data?.meta_key;
        image.value = page.value.data?.image_url;

        seoMeta.value = {
            description: description.value,
            ogDescription: description.value,
            ogTitle: title.value,
            title: title.value,
            twitterTitle: title.value,
            twitterImage: image.value,
            twitterImageAlt: title.value,
            twitterDescription: description.value,
            keywords: key.value,
            image: image.value,
            ogImage: image.value,
            ogImageAlt: title.value,
        }
        defineOgImageComponent('GAK', {
            title: title.value,
            description: description.value,
            theme: '#ff0000',
            colorMode: 'dark',
            url: image.value,
            image: image.value,
        });
        defineOgImage({
            url: image.value,
            image: image.value,
        });

        useSeoMeta(seoMeta.value);
        loadingPage.value = 'pending'
    }
});
</script>
<style lang='scss' scoped>
.page {
    @apply flex flex-col gap-6 w-full;
}
</style>
