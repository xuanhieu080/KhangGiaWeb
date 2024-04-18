<template>
    <div class="article-card flex items-center gap-3 w-full">
        <div class="article-card__thumbnail flex-grow-0 flex-shrink-0 basis-[165px] h-[125px] relative rounded-lg overflow-hidden">
            <NuxtLink :to="localePath({name: 'articles-slug', params: {slug: article.slug}})">
                <img class="w-full h-full object-cover" :src="article.image" :alt="article.title" />
            </NuxtLink>
        </div>
        <div class="article-card__content w-full py-4">
            <div class="article-card__wrapper">
                <div class="article-card__category mb-4 text-sm text-[#8e8e8e]">
                    <div>{{ article.category_name ? article.category_name + '| ' : '' }} {{ article.created_at }}</div>
                </div>
                <h3 class="article-card__title text-[20px] font-bold mb-3">
                    <NuxtLink :to="localePath({name: 'articles-slug', params: {slug: article.slug}})" class="article-link">
                        {{ article.title }}
                    </NuxtLink>
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
const prop = defineProps({
    article: {
        type: Object,
        default: null,
    },
    isDescription: {
        type: Boolean,
        default: true,
    },
    isViewCount: {
        type: Boolean,
        default: true,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
.article-card {
    .article-card__content {
        .article-card__title {
            .article-link {
                @include text-overflow(3);
            }
        }
    }
}
</style>
