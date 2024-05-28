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


const route = useRoute();
const slug = ref(route.params.slug)

const content = ref();

const { data: page, pending: loadingPage } = await useLazyAsyncData('pages', () =>
    useOriginalFetch(`/api/v1/pages/${slug.value}`),
);
watchEffect(() => {
    if (!loadingPage.value) {
        isLoadingPage.value = false;
    }
});
// useSchemaOrg([
//     defineArticle({
//         type: 'Article',
//         headline: 'Tại sao nên chọn hãng máy bay uy tín Vietravel Airlines cho dịp Tết',
//         title: 'Tại sao nên chọn hãng máy bay uy tín Vietravel Airlines cho dịp Tết',
//         description: 'Tại sao nên chọn hãng máy bay uy tín Vietravel Airlines cho dịp Tết',
//         image: process.env.WEB_BASE_URL + '/__og-image__/image/og.png',
//         datePublished: new Date(2024, 1, 1),
//         dateModified: new Date(2024, 1, 1),
//         author: [
//             {
//                 name: 'Chung Ngô',
//                 url: 'https://gak.vn',
//             },
//         ]
//     })
// ]);
</script>
<style lang='scss' scoped>
.page {
    @apply flex flex-col gap-6 w-full;
}
</style>
