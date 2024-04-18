<template>
    <div class="article-card w-full h-full">
        <div class="article-card__thumbnail w-full relative rounded-lg overflow-hidden" :class="customHeight > 0 ? `h-[${customHeight}px]` : 'h-full'">
            <NuxtLink :to="localePath({name: 'articles-slug', params: {slug: article.slug}})">
                <img class="w-full h-full object-cover" :src="article.image" :alt="article.title" />
            </NuxtLink>
        </div>
        <div class="article-card__content w-full py-4">
            <div class="article-card__wrapper">
                <div class="article-card__category mb-4 text-sm text-[#8e8e8e] font-semibold">
                    <div> {{ article.category_name ? article.category_name + '| ' : '' }} {{ $t('Ngày đăng')  }}: {{ article.created_at }} </div>
                </div>
                <h3 class="article-card__title text-[24px] font-bold mb-3">
                    <NuxtLink :to="localePath({name: 'articles-slug', params: {slug: article.slug}})" class="article-link">
                        {{ article.title }}
                    </NuxtLink>
                </h3>
                <div class="article-card__description" v-if="isDescription">
                    <p>
                        {{article.description}}
                    </p>
                </div>
                <div class="article-card__viewcount text-[#8e8e8e] text-sm font-medium" v-if="isViewCount">{{ $t('Số lượt xem') }}: {{ article.view }}</div>
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
    customHeight: {
        type: Number,
        default: 0
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
.article-card {
    @apply flex flex-col;
    .article-card_description {
        p {
            @include text-overflow(3);
        }
    }
    .article-card__title {
        .article-link {
            @include text-overflow(2);
        }
    }
}
</style>
