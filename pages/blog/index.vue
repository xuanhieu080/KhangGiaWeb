<template>
    <NuxtLayout name="main">
        <div class="blog-page">
            <div class="blog-page-image relative">
                <NuxtImg
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
                        :placeholder="$t('Tìm kiếm bài viết...')" />
                </div>
                <div v-if="!loadingArticleGroup" class="filter-category-blog flex flex-wrap items-center gap-6 w-full">
                    <USelectMenu
                        v-model="selectedCategory"
                        size="xl"
                        :options="articleGroups.data"
                        class="w-full max-w-[250px] custom-input"
                        option-attribute="name"
                        :uiMenu="{option: {container: 'w-full'}}"
                        :ui="{ rounded: 'rounded-full' }">
                        <template #label>
                            <span class="font-bold">{{ selectedCategory ? selectedCategory.name : '' }}</span>
                        </template>
                        <template #option="{ option: category }">
                            <NuxtLink class="min-h-8 flex items-center w-full" :to="localePath({ name: 'blog-slug', params: { slug: category.slug } })">
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
                            >{{ $t('Gak có gì mới?') }}
                        </UButton>
                    </NuxtLink>
                </div>
                <div class="blog-box-content flex md:flex-row flex-col items-start justify-between gap-6 w-full mt-6">
                    <div
                        v-if="!loadingArticleHot && articlesHot.data && articlesHot.data.length > 0"
                        class="flex w-full md:w-1/2 md:max-w-[660px]">
                        <ArticleSwiper :articleList="articlesHot.data" :title="'Bài viết nổi bật'" />
                    </div>
                    <div
                        v-if="!loadingArticleView && articlesView.data && articlesView.data.length > 0"
                        class="most-view flex flex-col gap-4 py-4 md:py-0 w-full md:w-2/5">
                        <div class="title text-[28px] 2xl:text-[36px] font-bold">{{ $t('Xem nhiều nhất') }}</div>
                        <div class="article-list flex flex-col gap-6 md:gap-3">
                            <ArticleBadge v-for="article in articlesView.data" :article="article" />
                        </div>
                    </div>
                </div>
                <div class="blog-daily flex flex-col gap-4 w-full">
                    <div class="title text-[28px] 2xl:text-[30px] font-bold py-3 px-5 bg-[#008000] text-white rounded-xl">
                        {{ $t('Bài mới mỗi ngày') }}
                    </div>
                    <div
                        v-if="!loadingArticleNew && articleNew.data && articleNew.data.length > 0"
                        class="flex flex-wrap items-start justify-start gap-4 w-full">
                        <div v-for="article in articleNew.data" class="blog-daily-item">
                            <ArticleCard :article="article" :is-view-count="false" :custom-height="400" />
                        </div>
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
definePageMeta({ layout: false });
const localePath = useLocalePath();
const searchBlog = ref(null);

const categoryBlog = ref([]);

const selectedCategory = ref(categoryBlog.value[0]);


//data
const { data: articlesList, pending: loadingAticlesList } = await useLazyAsyncData('articles-blog', () =>
    useOriginalFetch('/api/v1/posts'),
);
const { data: articlesHot, pending: loadingArticleHot } = await useLazyAsyncData('articles-blog-hot', () =>
    useOriginalFetch('/api/v1/posts', {
        params: {
            is_hot: true,
        },
    }),
);
const { data: articlesView, pending: loadingArticleView } = await useLazyAsyncData('articles-blog-view', () =>
    useOriginalFetch('/api/v1/posts', {
        params: {
            sort: { desc: 'view' },
        },
    }),
);
const { data: articleNew, pending: loadingArticleNew } = await useLazyAsyncData('articles-blog-new', () =>
    useOriginalFetch('/api/v1/posts', {
        params: {
            is_new: true,
        },
    }),
);
const { data: articleGroups, pending: loadingArticleGroup } = await useLazyAsyncData('post-groups', () =>
    useOriginalFetch('/api/v1/post-groups'),
);
// const { data: articleGroup, pending: loadingArticleGroup } = await useLazyAsyncData('articles-blog-group', () =>
//     useOriginalFetch('/api/v1/post/groups'),
// );

watch(
    () => loadingArticleGroup.value,
    () => {
        if (articleGroups.value.data?.length > 0) {
            selectedCategory.value = articleGroups.value.data[0];
        }
    },
    {
        immediate: true,
    },
);

let title = 'Tất cả bài viết';
let description = "Bài viết GAK";
let seoMeta = {
    description: description,
    ogDescription: description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription: description,
};

useSeoMeta(seoMeta);
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
