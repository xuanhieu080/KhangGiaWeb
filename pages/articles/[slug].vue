<template>
    <NuxtLayout name='main'>
        <div v-if='!loadingArticle && !error' class='article-details'>
            <div class='container mx-auto prose prose-lg max-w-screen-xl py-8'>
                <UBreadcrumb :ui="{ol: 'gap-0 max-w-fit mt-0 pl-0'}" :links='links' />
                <h1 class='article-title'>
                    {{ content.data.title }}
                </h1>
                <div v-html='content.data.content'></div>
                <div class='author-name text-end font-bold'>
                    - {{ content.data.author_name }}
                </div>
                <div v-if='articles.data && articles.data.length > 0' class='blog-daily flex flex-col gap-4 w-full mt-2'>
                    <div
                        class='title text-[28px] 2xl:text-[30px] font-bold py-3 px-5 bg-[#008000] text-white rounded-xl'>
                        {{ $t('Bài viết khác') }}
                    </div>
                    <div
                         class='flex flex-wrap items-start justify-start gap-4 w-full'>
                        <div v-for='article in articles.data' class='blog-daily-item'>
                            <ArticleCard :article='article' :is-view-count='false' :custom-height='400' />
                        </div>
                        <div
                            v-if='articles.meta.total > articles.meta.to'
                            class='m-auto opacity-100 transition duration-300 ease-in-out'>
                            <UButton
                                @click='getArticle'
                                class='rounded-2xl justify-center py-2.5 px-6'
                            ><span class='uppercase font-bold'>{{ $t('Xem thêm') }}</span></UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class='container mx-auto prose prose-lg max-w-screen-xl mt-[128px] text-center flex flex-col items-center gap-8'
            v-else-if='!loadingArticle && error'>
            {{ 'Không tìm thấy bài viết' }}
            <UButton size='lg' :to="localePath({ name: 'index' })" class='no-underline'>Quay về trang chủ</UButton>
        </div>
    </NuxtLayout>
</template>

<script setup>

import ArticleCard from '~/components/articles/ArticleCard.vue';

const localePath = useLocalePath();
const router = useRouter();
const { locale, t: trans } = useI18n();

const articles = ref({ data: [] });
const links = ref([]);
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
    navigateTo({ path: `/${locale.value}/404` }, { redirectCode: 301, replace: true });
}

const page = ref(0);

async function getArticle() {
    page.value++;
    const { data: response, error } = await useMyFetch(`/api/v1/posts`, {
        params: {
            sort: { desc: 'created_at' },
            group_id: content.value?.data?.category_id,
            not_id: content.value?.data?.id,
            limit: 12,
            page: page.value,
        },
    });
    if (response.value) {
        articles.value.data.push(...response.value.data);
        if (page.value == 1) {
            articles.value.meta = response.value.meta;
        }
    }
}

onMounted(() => {
    setTimeout(() => {
        links.value = [
            {
                label: 'Trang chủ',
                icon: 'i-heroicons-home',
                to: localePath({ name: 'index' }),
            },
            {
                label: content.value?.data?.title
            },
        ]
        if (content.value?.data?.category_slug) {
            links.value = [
                {
                    label: 'Trang chủ',
                    icon: 'i-heroicons-home',
                    to: localePath({ name: 'index' }),
                },
                {
                    label: content.value.data.category_name,
                    to: localePath({ name: 'blog-slug', params: {slug: content.value.data.category_slug} }),
                },
                {
                    label: content.value?.data?.title
                },
            ]
        }
        getArticle();
    },100)
})
const title = ref(content.value?.data?.meta_title);

const description = ref(content.value?.data?.meta_description);
const key = ref(content.value?.data?.meta_key);
const image = ref(content.value?.data?.image_url);


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
let seoMeta = {
    description: description.value,
    ogDescription: description.value,
    ogTitle: title.value,
    title: title.value,
    twitterTitle: title.value,
    twitterDescription: description.value,
    keywords: key.value,
    image: image.value,
    ogImage: image.value,
    ogImageAlt: title.value,
};
</script>

<style lang='scss' scoped>
.blog-daily {
    .blog-daily-item {
        width: calc(100% / 4 - 12px);
        @media screen and (max-width: 1279px) {
            width: calc(100% / 3 - 11px);
        }
        @media screen and (max-width: 991px) {
            width: calc(100% / 2 - 8px);
        }
        @media screen and (max-width: 567px) {
            width: 100%;
        }
    }
}
</style>
