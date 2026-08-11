<template>
    <div class='site-header' :class="{ 'hidden-header': isScrollDown }">
        <div class='topbar'>
            <div class='left-top-bar'>
                <div class="flex rounded">
                    <button
                        class="px-3 rounded-l py-1 text-xs font-bold transition-all"
                        :class="locale == 'vi'
                            ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 active'
                            : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'"
                        id="btn-vi"
                        @click="setLocaleLanguage('vi')"
                    >
                        VI
                    </button>
                    <button
                        class="px-3 py-1 rounded-r text-xs font-bold transition-all"
                        id="btn-en"
                        :class="locale == 'en'
                        ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 active'
                        : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'"
                        @click="setLocaleLanguage('en')"
                    >
                        EN
                    </button>
                </div>
            </div>
            <div class='sub-nav'>
                <NuxtLink :to="localePath({ name: 'blog' })">
                    <div class="w-max">
                        {{ trans('Blog') }}
                    </div>
                </NuxtLink>
                <div v-for='page in pageHeaders'>
                    <NuxtLink v-if='page.is_button' :to='localePath(page.link)'>
                        <div class="w-max">{{ page.name }}</div>
                    </NuxtLink>
                    <NuxtLink v-else :to="localePath({ name: 'slug', params: { slug: page.slug } })">
                        <div class="w-max">{{ page.name }}</div>
                    </NuxtLink>
                </div>
                <NuxtLink to='https://zalo.me/3650436242866367358' target='_blank'>{{ trans('Customer Service Center') }}</NuxtLink>
            </div>
        </div>
        <div class='header'>
            <div class='left-header'>
                <NuxtLink :to="localePath({ name: 'index' })" class='logo'>
                    <img class='h-full w-full object-contain' alt='Logo Site' :src='images.logo' />
                </NuxtLink>
            </div>
            <div class='mobile-header'></div>
            <div class='middle-header' :class="menuMobile ? 'active-mobile' : ''">
                <NuxtLink class='main-nav-item' :to="localePath({ name: 'index' })" @click='menuMobile = false'
                >{{ trans('Home') }}
                </NuxtLink>
                <NuxtLink class='main-nav-item'  :to="localePath({ name: 'product-all-products' })"
                          @click='menuMobile = false'
                >{{ trans('Product') }}
                </NuxtLink>
                <UDropdown
                    v-if='categoryHeaders && categoryHeaders?.length > 0 && !menuMobile'
                    v-for='(category, index) in categoryHeaders'
                    :items='[[category]]'
                    mode='hover'
                    :key='category'
                    :ui="{
                        width: 'w-max',
                        container: category.children?.length > 0 ? '' : 'hidden',
                        item: { active: '', base: 'cursor-default', disabled: 'cursor-text select-text' },
                    }"
                    :popper="{ placement: 'bottom-start' }">
                    <NuxtLink
                        :to="localePath({ name: 'collection-slug', params: { slug: category.slug } })"
                        v-show='index < 5'
                        class='main-nav-item'
                        @click='(e) => handleChangePage(e)'
                        @mouseleave='(e) => handleCloseSubMenu(e)'
                        @mouseenter='(e) => handleAddSubMenu(e)'>
                        {{ category.name }}
                    </NuxtLink>
                    <template #item='{ item }'>
                        <div v-show='item.children?.length > 0' class='sub-menu'>
                            <div class='sub-menu-wrapper grid gap-4 w-max'
                                 :class="item.children?.length > 2 ? 'grid-cols-2' : ''">
                                <div
                                    class='flex flex-col items-start gap-y-6 p-6 border-gray-300'
                                    :class="item.children?.length > 2 ? 'border-r' : ''">
                                    <div
                                        v-show='index1 < item.children?.length - 2 || item.children?.length < 2'
                                        v-for='(subMenu, index1) in item.children'
                                        class='text-gray-500'>
                                        <NuxtLink
                                            :to="localePath({ name: 'collection-slug', params: { slug: subMenu.slug } })"
                                            class='uppercase font-bold text-black hover:text-green-700'>
                                            {{ subMenu.name }}
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div v-if='item.children?.length > 1' class='grid grid-cols-2 gap-4 py-6 pr-4'>
                                    <div
                                        v-show='index2 >= item.children?.length - 2'
                                        v-for='(subMenu, index2) in item.children'
                                        class='product-random-box max-w-[300px] max-h-[200px]'>
                                        <NuxtLink
                                            :to="localePath({ name: 'collection-slug', params: { slug: subMenu.slug } })"
                                            class='product-item'>
                                            <img loading='lazy' :src='subMenu.image_url' alt='' />
                                            <div class='product-content'>{{ subMenu.name }}</div>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </UDropdown>
                <NuxtLink
                    v-if='pageHeaders && categoryHeaders?.length > 0 && menuMobile'
                    v-for='(category, index) in categoryHeaders'
                    v-show='index < 5'
                    :to="localePath({ name: 'collection-slug', params: { slug: category.slug } })"
                    class='main-nav-item'
                    @click='(e) => handleChangePage(e)'
                    @mouseleave='(e) => handleCloseSubMenu(e)'
                    @mouseenter='(e) => handleAddSubMenu(e)'>
                    {{ category.name }}
                </NuxtLink>
                <NuxtLink class='main-nav-item' :to="localePath({ name: locale=='vi'? 'dat-may' :'custom-order'})" @click='menuMobile = false'>
                    {{ trans('Custom order') }}
                </NuxtLink>
                <NuxtLink class='main-nav-item' :to="localePath({ name: locale=='vi'? 'van-hoa-khang-gia' :'culture-khang-gia' })" @click='menuMobile = false'
                >{{ trans('KHANG GIA Culture') }}
                </NuxtLink>
            </div>
            <div class='right-header'>
                <UInput
                    class='search-box max-w-[500px] rounded-[50px] overflow-hidden bg-white'
                    name='search-box'
                    size='xl'
                    color='white'
                    variant='none'
                    icon='i-heroicons-magnifying-glass-20-solid'
                    :ui="{ icon: { trailing: { pointer: '' } } }"
                    autocomplete='off'
                    @click='handleOpenSearchSlideOver'
                    :placeholder="trans('Search products')">
                </UInput>
                <UButton
                    v-if='false'
                    class='user-btn justify-center items-center'
                    :padded='false'
                    variant='ghost'
                    color='none'
                    @click='openProfileSideBar'>
                    <UIcon name='i-mdi-account-circle-outline' class='text-green-500 fs-28' dynamic />
                </UButton>
                <UButton v-else-if='false' class='login-btn' variant='ghost' color='none'>
                    <div type='button'>
                        <img :src='images.person' class='filter-white' alt='' />
                    </div>
                </UButton>
            </div>
            <div class='right-header-mobile flex justify-between items-center gap-6'>
                <div class="flex flex-col align-mid items-center gap-1 w-[82px]">
                    <UButton @click='handleOpenSearchSlideOver' variant='ghost' color='none' :padded='false'
                             class='search-mobile'>
                        <UIcon name='i-heroicons-magnifying-glass' class='fs-28 text-black' />
                    </UButton>
                    <div class="flex rounded">
                        <button
                            class="px-3 rounded-l py-1 text-xs font-bold transition-all"
                            :class="locale == 'vi'
                            ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 active'
                            : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'"
                            id="btn-vi"
                            @click="setLocaleLanguage('vi')"
                        >
                            VI
                        </button>
                        <button
                            class="px-3 py-1 rounded-r text-xs font-bold transition-all"
                            id="btn-en"
                            :class="locale == 'en'
                        ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 active'
                        : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'"
                            @click="setLocaleLanguage('en')"
                        >
                            EN
                        </button>
                    </div>
                </div>
                <NuxtLink :to="localePath({ name: 'index' })" class='logo'>
                    <img class='h-full w-full object-contain' alt='Logo Site' :src='images.logo' />
                </NuxtLink>
                <div class=" flex-col justify-end gap-1 w-[82px]">
                    <UButton class='justify-end w-full' variant='ghost' color='none' :padded='false' @click='menuMobile = !menuMobile'>
                        <UIcon name='i-pajamas-hamburger' class='fs-28 text-black' dynamic />
                    </UButton>
                </div>
            </div>
        </div>

        <USlideover v-model='openSearchSlide' :ui="{ wrapper: 'z-[999]', overlay: { background: 'bg-gray-600/75' } }">
            <div class='search-box flex flex-col gap-4 w-full p-4'>
                <UButton
                    @click='openSearchSlide = false'
                    icon='i-heroicons-x-mark-20-solid'
                    variant='soft'
                    color='gray'
                    class='md:hidden self-end w-fit rounded-full'>
                </UButton>
                <UInput
                    class='search-box max-w-[500px] rounded-[50px] overflow-hidden bg-gray-200'
                    name='search-box'
                    size='xl'
                    color='white'
                    variant='none'
                    icon='i-heroicons-magnifying-glass-20-solid'
                    v-model='searchItem'
                    :ui="{ icon: { trailing: { pointer: '' } } }"
                    autocomplete='off'
                    :loading='loadingSearchProduct'
                    @click='handleOpenSearchSlideOver'
                    :placeholder="trans('Search products')">
                    <template #trailing>
                        <UButton
                            v-show="searchItem !== ''"
                            color='gray'
                            variant='link'
                            icon='i-heroicons-x-mark-20-solid'
                            :padded='false'
                            @click="searchItem = ''" />
                    </template>
                </UInput>
                <NuxtLink
                    :to="localePath({ name: 'product-search', query: { search: searchItem } })"
                    v-if="searchItem !== '' && !loadingSearchProduct"
                    @click='handleSearchKeyword'
                    class='search-box-directly w-full py-2 px-6 !bg-gray-100 rounded-md text-sm cursor-pointer'>
                    {{trans('Search keywords')}}: <b class='lowercase'>{{ searchItem }}</b>
                </NuxtLink>
            </div>
            <div class='search-results px-4 pb-6 overflow-auto'>
                <div class='search-title text-2xl font-medium mb-4'>{{trans('List of searches')}}:</div>
                <div
                    v-if="searchProducts?.length == 0 && searchItem == ''"
                    class='mt-4 empty-product h-[150px] rounded-lg border border-dashed flex items-center justify-center'>
                    {{trans('Search for products by entering keywords')}}
                </div>
                <div v-if='searchProducts?.length > 0 && !loadingSearchProduct' class='product-list flex flex-col gap-4'>
                    <UCard v-for='product in searchProducts' :key='product' class='w-full'>
                        <NuxtLink
                            :to="localePath({ name: 'product-slug', params: { slug: product.slug } })"
                            class='flex items-center gap-4 w-full'>
                            <img :src='product.image' class='h-16 w-16 object-contain' />
                            <div class='flex flex-col gap-2'>
                                <div class='product-name'>{{ product.name }}</div>
                                <div class='product-price'>
                                    <div v-if='product.percent == 0' class='original-price'>
                                        {{ trans('price_name', {price: formatPriceProduct(product.price)}) }}
                                    </div>
                                    <div v-else class='discount-price'>
                                        <div class='after-discount'>
                                            {{ trans('price_name', {price: formatPriceProduct(product.price_discount)}) }}
                                        </div>
                                        <div class='original-price'>{{ trans('price_name', {price: formatPriceProduct(product.price)}) }}</div>
                                        <div class='discount-tag'>{{ product.percent + '%' }}</div>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </UCard>
                </div>
                <div
                    v-else-if="searchProducts?.length == 0 && !loadingSearchProduct && searchItem !== ''"
                    class='mt-4 empty-product h-[150px] rounded-lg border border-dashed flex items-center justify-center'>
                    {{trans('No products found')}}
                </div>
            </div>
        </USlideover>
    </div>
</template>
<script setup>
import images from '@@/assets/icons/index';
import { useHeader } from '@@/store/useHeader';
import { storeToRefs } from 'pinia';

const { locale, t: trans, setLocale } = useI18n()

const pageHeaders = useState('page-headers', () => []);

async function loadPage() {
    const { data } = await useLazyAsyncData(
        'page-headers',
        () => useOriginalFetch(`/api/v1/pages/headers`, {
            query: { lang: locale.value },
        }),
        {
            default: () => [],
        },
    );

    pageHeaders.value = data.value?.data;
}

const categoryHeaders = useState('category-headers', () => []);

async function loadCategory() {
    const { data: categories , status: loadingCategory} = await useLazyAsyncData(
        'category-headers',
        () => useOriginalFetch(`/api/v1/categories/header`, {
            query: { lang: locale.value },
        }),
        {
            default: () => [],
        },
    );

    categoryHeaders.value = categories.value?.data;
}


const useHeaderStore = useHeader();

import { useLanguageLink } from '~/store/languageLink';

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);

const { isScrollDown, isLoadingPage, menuMobile } = storeToRefs(useHeaderStore);
const localePath = useLocalePath();

const config = useRuntimeConfig();

const router = useRouter();
const searchItem = ref('');
const profileSide = ref(false);
const openSearchSlide = ref(false);
const openProfileSideBar = () => {
    profileSide.value = true;
};

const handleAddSubMenu = (e) => {
    if (e.srcElement.children.length > 0) {
        e.srcElement.lastChild.classList.add('active');
    }
};
const handleCloseSubMenu = (e) => {
    if (e.srcElement.children.length > 0) {
        e.srcElement.lastChild.classList.remove('active');
    }
};
const handleChangePage = (e) => {
    menuMobile.value = false;
    handleCloseSubMenu(e);
};

const handleOpenSearchSlideOver = () => {
    openSearchSlide.value = true;
};

let searchWord = useCookie('search-keyword', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 7,
});
const handleSearchKeyword = () => {
    searchWord.value = searchItem.value;
    openSearchSlide.value = false;
};

const formatPriceProduct = (item) => {
    return new Intl.NumberFormat('en-US').format(item);
};
onBeforeMount(() => {
    isLoadingPage.value = false;
});
const deboundTime = ref({
    timeOut: null,
});

const loadingSearchProduct = ref(false);

const searchProducts = ref([]);
const getProductSearch = async () => {
    const { data: response, error } = await useMyFetch('/api/v1/products', {
        params: {
            search: searchItem.value,
            limit: 12,
            lang: locale.value
        },
    });
    if (response.value) {
        searchProducts.value = response.value.data;
        loadingSearchProduct.value = false;
    } else {
        searchProducts.value = [];
        loadingSearchProduct.value = false;
    }
};

function setLocaleLanguage(language) {
    if (!link.value) return;

    // Parse relative URL với base giả
    const url = new URL(link.value, config.public.baseURL)
    const path = url.pathname
    const queryParams = Object.fromEntries(url.searchParams.entries())

    const newLink = localePath({ path, query: queryParams }, language)

    router.push(newLink)
}

onMounted(() => {
    // Cart removed
})

    if (!categoryHeaders.value || categoryHeaders.value.length === 0) {
        loadCategory();
    }

    if (!pageHeaders.value || pageHeaders.value.length === 0) {
        loadPage();
    }

watch(
    () => searchItem.value,
    async () => {
        if (openSearchSlide.value) {
            loadingSearchProduct.value = true;
            clearTimeout(deboundTime.value.timeOut);
            deboundTime.value.timeOut = setTimeout(() => {
                getProductSearch();
                deboundTime.value.timeOut = null;
            }, 500);
        }
    },
);
watch(
    () => openSearchSlide.value,
    () => {
        if (!openSearchSlide.value) {
            searchProducts.value = [];
            searchItem.value = '';
        }
    },
);
watch(
    () => locale.value,
    () => {
        loadPage();
        loadCategory();
    },
);

</script>
<style lang='scss' scoped>
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 101;
    transition: all 0.3s;
    font-size: 14px;
    background-color: white;
    @media screen and (max-width: 991px) {
        transform: none;
    }

    &.hidden-header {
        transform: translateY(-100%);
    }

    .topbar {
        padding: 6px 30px;
        color: #1d1d1d;
        transition: all 0.3s;
        height: var(--header-topbar);
        @apply flex items-center justify-between gap-6 w-full;
        @media screen and (max-width: 991px) {
            display: none;
        }

        .left-top-bar {
            @apply flex items-center gap-4;
            .logo {
                height: 14px;
            }
        }

        .sub-nav {
            font-weight: 500;
            padding: 6px 0;
            @extend .topbar;
            @apply justify-end gap-4;
        }
    }

    .topbar-promotion {
        background: #525252;
        color: #fff;
        font-style: normal;
        height: var(--header-top-promotion);
        transition: all 0.3s;
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        @apply flex items-center justify-center;
        @media screen and (max-width: 991px) {
            display: none;
        }
    }

    .header {
        background-color: #f1f1f1;
        color: black;
        transition: all 0.3s;
        position: relative;
        height: var(--header-main);
        padding-left: 30px;
        padding-right: 30px;
        @apply flex items-center justify-between w-full;
        .left-header {
            margin-right: 8px;
            @apply flex items-center gap-4;
            @media screen and (max-width: 991px) {
                display: none;
            }

            .logo {
                height: 40px;
                flex: 0 1 100px;
            }
        }

        .middle-header {
            margin-right: 8px;
            @apply flex items-center justify-center h-full;
            @media screen and (max-width: 991px) {
                position: absolute;
                top: var(--header-main);
                left: 0;
                width: 100%;
                justify-content: stretch;
                align-items: stretch;
                height: calc(100vh - var(--header-main));
                z-index: 100;
                background-color: #fff;
                overflow: auto;

                @apply hidden flex-col;
                &.active-mobile {
                    @apply flex;
                }
            }

            .main-nav-item {
                padding: 31px 16px;
                white-space: nowrap;
                color: #000000;
                transition: all 0.3s;
                font-weight: bold;
                text-transform: uppercase;
                height: 100%;
                position: relative;
                @apply flex items-center;
                &.router-link-active {
                    @apply bg-green-500/75;
                    color: white;
                }

                @media screen and (max-width: 1279px) {
                    font-size: 12px;
                }
                @media screen and (max-width: 991px) {
                    justify-content: center;
                    padding: 24px;
                    height: auto !important;
                    color: #000;
                    border-bottom: 1px solid #f3f3f3;
                }

                .sub-menu {
                    display: none;

                    &.active {
                        @apply block absolute top-full w-max left-0;
                    }

                    &:after {
                        content: '';
                        position: fixed;
                        top: calc(var(--header-topbar) + var(--header-main));
                        left: 0;
                        width: 100%;
                        height: 100vh;
                        background: rgba(77, 77, 77, 0.69);
                        pointer-events: none;
                    }

                    .sub-menu-wrapper {
                        @apply bg-slate-100;
                        position: relative;
                        z-index: 1;

                        .sub-product-title {
                            font-size: 14px;
                            position: relative;
                            padding-bottom: 0.75rem;
                            margin-bottom: 12px;
                            @apply font-extrabold;
                            &:before {
                                content: '';
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                height: 3px;
                                width: 40px;
                                background-color: #000;
                            }
                        }
                    }
                }
            }
        }

        .right-header {
            @apply flex items-center gap-2;
            @media screen and (max-width: 991px) {
                display: none;
            }

        }

        .right-header-mobile {
            @apply lg:hidden;
            width: 100%;

            .logo {
                width: 100px;
                height: 40px;
                flex: 0 1 100px;
            }
        }
    }
}

.product-random-box {
    position: relative;

    .product-item {
        width: 100%;
        height: 100%;
        display: block;

        &:before {
            content: '';
            position: absolute;
            background: linear-gradient(181deg, hsla(0, 0%, 100%, 0) 8.25%, #000);
            width: 100%;
            height: 100%;
            opacity: 0.5;
            z-index: 2;
            left: 0;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .product-content {
            font-size: 12px;
            padding: 0 10px 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            color: white;
            transition: opacity 0.3s ease-in-out;
            z-index: 5;
            font-weight: bold;
            white-space: pre-wrap;
        }
    }
}

.product-price {
    @apply font-bold;
    .discount-price {
        @apply flex items-center gap-3;
        .original-price {
            @apply font-bold;
            text-decoration: line-through;
            text-decoration-thickness: 2px;
            @apply text-gray-400/75;
        }

        .discount-tag {
            @apply font-semibold;
            font-size: 13px;
            color: red;
        }
    }
}
</style>
