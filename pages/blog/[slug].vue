<template>
    <NuxtLayout name="main">
        <div class="blog-page">
            <div class="blog-page-image relative">
                <img
                    class="w-full h-[500px] object-cover"
                    loading="lazy"
                    format="webp"
                    :src="'https://images.unsplash.com/photo-1710415273471-24431054c4da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
                    alt="" />
                <div
                    class="about-us-content absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                    <h1 class="font-bold !text-[54px] 2xl:!text-[64px] !my-2">GAKBLOG</h1>
                </div>
            </div>
            <div class="blog-page-content container mx-auto py-6 flex flex-col gap-4">
                <div v-if="false" class="search-box w-4/5 max-w-[567px] mx-auto">
                    <UInput
                        size="lg"
                        :ui="{ rounded: 'rounded-2xl' }"
                        v-model="searchBlog"
                        name="search-box-blog"
                        :placeholder="trans('Search articles...')" />
                </div>
                <div v-if="!loadingArticleGroup" class="filter-category-blog flex flex-wrap items-center gap-6 w-full">
                    <USelectMenu
                        v-model="selectedCategory"
                        size="xl"
                        :options="articleGroups.data"
                        class="w-full max-w-[250px] custom-input"
                        option-attribute="name"
                        :uiMenu="{ option: { container: 'w-full' } }"
                        :ui="{ rounded: 'rounded-full' }">
                        <template #label>
                            <span class="font-bold">{{ selectedCategory ? selectedCategory.name : '' }}</span>
                        </template>
                        <template #option="{ option: category }">
                            <NuxtLink
                                class="min-h-8 flex items-center w-full"
                                :to="localePath({ name: 'blog-slug', params: { slug: category.slug } })">
                                <span>{{ category.name }}</span>
                            </NuxtLink>
                        </template>
                    </USelectMenu>
                    <NuxtLink :to="localePath({ name: 'index' })">
                        <UButton
                            size="lg"
                            class="rounded-full h-11 px-6 font-bold border border-gray-300 shadow-sm"
                            variant="ghost"
                            color="none"
                            >{{ trans("What's new in Gak?") }}
                        </UButton>
                    </NuxtLink>
                </div>
                <div class="blog-box-content flex md:flex-row flex-col items-start justify-between gap-6 w-full mt-6">
                    <div
                        v-if="!loadingArticleHot && articlesHot.data && articlesHot.data.length > 0"
                        class="flex w-full md:w-1/2 md:max-w-[660px]">
                        <ArticleSwiper :articleList="articlesHot.data" :title="trans('Featured article')" />
                    </div>
                    <div
                        v-if="!loadingArticleView && articlesView.data && articlesView.data.length > 0"
                        class="most-view flex flex-col gap-4 py-4 md:py-0 w-full md:w-2/5">
                        <div class="title text-[28px] 2xl:text-[36px] font-bold">{{ trans('Most viewed') }}</div>
                        <div class="article-list flex flex-col gap-6 md:gap-3">
                            <ArticleBadge v-for="article in articlesView.data" :article="article" />
                        </div>
                    </div>
                </div>
                <div v-if="!loadingArticleNew" class="blog-daily flex flex-col gap-4 w-full">
                    <div class="title text-[28px] 2xl:text-[30px] font-bold py-3 px-5 bg-[#008000] text-white rounded-xl">
                        {{ trans('Article about') + ' ' + selectedCategory.name }}
                    </div>
                    <div v-if="articleNew.data && articleNew.data.length > 0" class="flex flex-wrap items-start justify-start gap-4 w-full">
                        <div v-for="article in articleNew.data" class="blog-daily-item">
                            <ArticleCard :article="article" :is-view-count="false" :custom-height="400" />
                        </div>
                        <div
                            v-if="articleNew.meta.total > articleNew.meta.to"
                            class="m-auto opacity-100 transition duration-300 ease-in-out">
                            <UButton
                                @click="getArticle"
                                class="rounded-2xl justify-center py-2.5 px-6"
                            >   <span class="uppercase font-bold">{{ trans('Load more') }}</span></UButton>
                        </div>
                    </div>
                    <div
                        v-else
                        class="flex items-center h-48 text-xl justify-center text-center border border-dashed rounded-lg gap-4 w-full">
                        {{ trans('There are no posts in this group') }}
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import images from '@@/assets/icons/index';
import ArticleSwiper from '@@/components/articles/ArticleSwiper.vue';
import ArticleBadge from '@@/components/articles/ArticleBadge.vue';
import ArticleCard from '@@/components/articles/ArticleCard.vue';
import { useLanguageLink } from '~/store/languageLink';
import { storeToRefs } from 'pinia';
definePageMeta({
    layout: false,
    seo: {
        canonical: false,
    },
});
const localePath = useLocalePath();
const searchBlog = ref(null);
const selectedCategory = ref(null);
const { locale, t: trans } = useI18n();
const router = useRouter();

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);
link.value = null;

//data

const { data: articlesHot, pending: loadingArticleHot } = await useLazyAsyncData('articles-blog-hot-specific', () =>
    useOriginalFetch('/api/v1/post-hots', {
        params: {
            is_hot: true,
            lang: locale.value
        },
    }),
);
const { data: articlesView, pending: loadingArticleView } = await useLazyAsyncData('articles-blog-view-specific', () =>
    useOriginalFetch('/api/v1/posts', {
        params: {
            sort: { desc: 'view' },
            limit: 4,
            lang: locale.value
        },
    }),
);

const page = ref(1)
const { data: articleNew, pending: loadingArticleNew } = await useLazyAsyncData('articles-category-specific', () =>
    useOriginalFetch('/api/v1/posts', {
        params: {
            sort: { desc: 'created_at' },
            group_slug: router.currentRoute.value.params?.slug,
            limit: 12,
            lang: locale.value
        },
    }),
);
async function getArticle() {
    page.value++;
    const { data: response, error } = await useMyFetch(`/api/v1/posts`, {
        params: {
            sort: { desc: 'created_at' },
            group_slug: router.currentRoute.value.params?.slug,
            limit: 12,
            page: page.value,
            lang: locale.value
        }
    });

    if (response.value) {
        articleNew.value.data.push(...response.value.data)
        articleNew.value.meta = response.value.meta
    }
}

const {
    data: content,
    status: loadingContent,
    error: errorGetCategory,
} = await useAsyncData(
    'content',
    async () =>
        useOriginalFetch(`/api/v1/post-groups/${router.currentRoute.value.params.slug}`, {
            query: {
                code: router.currentRoute.value.query?.code,
                lang: locale.value
            },
        }),
    {
        default: () => [],
    },
);
if (errorGetCategory.value) {
    navigateTo({ path: `/${locale.value}/404`}, {redirectCode: 301, replace: true });
}

const { data: articleGroups, pending: loadingArticleGroup } = await useLazyAsyncData('post-groups', () =>
    useOriginalFetch('/api/v1/post-groups', {
        params: {
        lang: locale.value
        }
    }),
);
// const { data: articleGroup, pending: loadingArticleGroup } = await useLazyAsyncData('articles-blog-group', () =>
//     useOriginalFetch('/api/v1/post/groups'),
// );
watch(
    () => loadingArticleGroup.value,
    () => {
        if (articleGroups.value?.data?.length > 0) {
            if (router.currentRoute.value.params.slug) {
                let findIndex = articleGroups.value.data.findIndex((article) => article.slug == router.currentRoute.value.params.slug);
                if (findIndex != -1) {
                    selectedCategory.value = articleGroups.value.data[findIndex];
                } else {
                    selectedCategory.value = articleGroups.value.data[0];
                }
            } else {
                selectedCategory.value = articleGroups.value.data[0];
            }
        }
    },
    {
        immediate: true,
    },
);

const title = ref('');
const description = ref('');
const key = ref('');
const image = ref();
const seoMeta = ref({})

watchEffect((value) => {
    if (loadingContent.value === 'success') {
        title.value = content.value.data?.meta_title;
        description.value =  content.value.data?.meta_description;
        key.value = content.value.data?.meta_key;
        image.value =  content.value.data?.image_url;

        if (content.value.data?.slug_other) {
            if (locale.value == 'vi') {
                link.value = `/en/blog/${content.value.data?.slug_other}`;
            } else {
                link.value = `/vi/blog/${content.value.data?.slug_other}`;
            }
        }

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
        loadingContent.value = 'pending'
    }
});
</script>

<style lang="scss" scoped>
.blog-page {
    @apply flex flex-col gap-6 w-full;
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
}
</style>
