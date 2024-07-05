<template>
    <NuxtLayout name="main">
        <div v-if="!loadingArticle && !error" class="article-details">
            <div class="container mx-auto prose prose-lg max-w-screen-xl py-8">
                <UBreadcrumb :ui="{ol: 'gap-0 max-w-fit mt-0 pl-0'}" :links="links" />
                <h1 class="article-title">
                    {{ content.data.title }}
                </h1>
                <div v-html="content.data.content"></div>
                <div class="author-name text-end font-bold">
                    - {{ content.data.author_name }}
                </div>
            </div>
        </div>
        <div
            class="container mx-auto prose prose-lg max-w-screen-xl mt-[128px] text-center flex flex-col items-center gap-8"
            v-else-if="!loadingArticle && error">
            {{ 'Không tìm thấy bài viết' }}
            <UButton size="lg" :to="localePath({ name: 'index' })" class="no-underline">Quay về trang chủ</UButton>
        </div>
    </NuxtLayout>
</template>

<script setup>
const localePath = useLocalePath();
const router = useRouter();
const { locale, t: trans } = useI18n();


const titleArticle = ref(null);
const links = ref([
    {
        label: 'Trang chủ',
        icon: 'i-heroicons-home',
        to: localePath({name: 'index'}),
    },
    {
        label: titleArticle,
    },
]);
const refreshData = ref(0);
const {
    data: content,
    pending: loadingArticle,
    error: errorGetItem,
} = await useLazyAsyncData(
    'articles-details',
    async () =>
        useOriginalFetch(`/api/v1/posts/${router.currentRoute.value.params.slug}`),
    {
        default: () => [],
        watch: [refreshData],
    },
);

if (errorGetItem.value) {
    router.push({ name: `index___${locale.value}` });
}

watchEffect(() => {
    if(!loadingArticle.value) {
        links.value[1].label = content.value?.data?.title
    }
})
let title = content.value?.data?.meta_title;

let description = content.value?.data?.meta_description;
defineOgImageComponent('GAK', {
    title: title,
    description: description,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url:  content.value?.data?.image_url,
});
let seoMeta = {
    description: description,
    ogDescription: description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription: description,
    keywords: content.value?.data?.meta_key,
};

useSeoMeta(seoMeta);
</script>

<style lang="scss" scoped></style>
