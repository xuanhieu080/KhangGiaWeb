<template>
    <div class="site-header" :class="{ 'hidden-header': isScrollDown }">
        <div class="topbar">
            <div class="left-top-bar">
                <NuxtLink :to="localePath({ name: 'index' })" class="logo">
                    <NuxtImg class="h-full w-full object-contain" alt="Logo Site" :src="images.logo" />
                </NuxtLink>
            </div>
            <div class="sub-nav">
                <NuxtLink :to="localePath({ name: 'blog' })">{{ $t('Blog') }}</NuxtLink>
                <NuxtLink :to="localePath({ name: 'about-us' })">{{ $t('Về GAK') }}</NuxtLink>
                <NuxtLink to="">{{ $t('Trung tâm CSKH') }}</NuxtLink>
            </div>
        </div>
        <div class="header">
            <div class="left-header">
                <NuxtLink :to="localePath({ name: 'index' })" class="logo">
                    <NuxtImg class="h-full w-full object-contain" alt="Logo Site" :src="images.logo" />
                </NuxtLink>
            </div>
            <div class="mobile-header"></div>
            <div class="middle-header" :class="menuMobile ? 'active-mobile' : ''">
                <NuxtLink class="main-nav-item" :to="localePath({ name: 'index' })" @click="menuMobile = false">{{
                    $t('Trang chủ')
                }}</NuxtLink>
                <div class="main-nav-item" @click="menuMobile = false" @mouseleave="(e) => handleCloseSubMenu(e)" @mouseenter="(e) => handleAddSubMenu(e)">
                    <NuxtLink :to="localePath({ name: 'collection-slug', params: { slug: 'tat-ca' } })">
                        {{ $t('Sản phẩm') }}
                    </NuxtLink>
                    <div class="sub-menu">
                        <div class="sub-menu-wrapper grid grid-cols-5 gap-4">
                            <div class="col-span-3 grid grid-cols-4 gap-8 p-6 border-r border-gray-300">
                                <div class="flex flex-col gap-4 text-gray-500">
                                    <div class="sub-product-title uppercase font-bold text-black">Theo sản phẩm</div>
                                    <span>Sản phẩm 1</span>
                                    <span>Sản phẩm 2</span>
                                    <span>Sản phẩm 3</span>
                                    <span>Sản phẩm 4</span>
                                </div>
                                <div class="flex flex-col gap-4 text-gray-500">
                                    <div class="sub-product-title uppercase font-bold text-black">Áo nam</div>
                                    <span>Sản phẩm 1</span>
                                    <span>Sản phẩm 2</span>
                                    <span>Sản phẩm 3</span>
                                </div>
                                <div class="flex flex-col gap-4 text-gray-500">
                                    <div class="sub-product-title uppercase font-bold text-black">Quần nam</div>
                                    <span>Sản phẩm 1</span>
                                    <span>Sản phẩm 2</span>
                                    <span>Sản phẩm 3</span>
                                    <span>Sản phẩm 4</span>
                                    <span>Sản phẩm 5</span>
                                    <span>Sản phẩm 6</span>
                                </div>
                                <div class="flex flex-col gap-4 text-gray-500">
                                    <div class="sub-product-title uppercase font-bold text-black">Phụ kiện nam</div>
                                    <span>Sản phẩm 1</span>
                                    <span>Sản phẩm 2</span>
                                </div>
                            </div>
                            <div class="col-span-2 grid grid-cols-2 grid-rows-2 gap-4 py-6 pr-4">
                                <div class="product-random-box">
                                    <div class="product-item">
                                        <img loading="lazy" src="https://mcdn.coolmate.me/image/March2024/mceclip14_74.jpg" alt="" />
                                        <div class="product-content">Quần jogger nam UT đa năng</div>
                                    </div>
                                </div>
                                <div class="product-random-box">
                                    <div class="product-item">
                                        <img loading="lazy" src="https://mcdn.coolmate.me/image/March2024/mceclip15_78.jpg" alt="" />
                                        <div class="product-content">Pack 3 Áo Polo nam Pique Cotton</div>
                                    </div>
                                </div>
                                <div class="product-random-box">
                                    <div class="product-item">
                                        <img loading="lazy" src="https://mcdn.coolmate.me/image/March2024/mceclip14_74.jpg" alt="" />
                                        <div class="product-content">Quần jogger nam UT đa năng</div>
                                    </div>
                                </div>
                                <div class="product-random-box">
                                    <div class="product-item">
                                        <img loading="lazy" src="https://mcdn.coolmate.me/image/March2024/mceclip15_78.jpg" alt="" />
                                        <div class="product-content">Pack 3 Áo Polo nam Pique Cotton</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-nav-item" @click="menuMobile = false"  @mouseleave="(e) => handleCloseSubMenu(e)" @mouseenter="(e) => handleAddSubMenu(e)">
                    <div :to="localePath({ name: 'collection-slug', params: { slug: 'tat-ca' } })">
                        {{ $t('Áo ghi lê') }}
                    </div>
                    <div class="sub-menu">
                        <div class="sub-menu-wrapper grid grid-cols-5 gap-4">
                            <div class="col-span-3 grid grid-cols-4 gap-8 p-6 border-r border-gray-300">
                                <div class="flex flex-col gap-4 text-gray-500">
                                    <div class="sub-product-title uppercase font-bold text-black">Theo sản phẩm</div>
                                    <span>Sản phẩm 1</span>
                                </div>
                                <div class="flex flex-col gap-4 text-gray-500">
                                    <div class="sub-product-title uppercase font-bold text-black">Áo nam</div>
                                    <span>Sản phẩm 1</span>
                                    <span>Sản phẩm 2</span>
                                </div>
                                <div class="flex flex-col gap-4 text-gray-500">
                                    <div class="sub-product-title uppercase font-bold text-black">Quần nam</div>
                                    <span>Sản phẩm 1</span>
                                    <span>Sản phẩm 2</span>
                                    <span>Sản phẩm 3</span>
                                    <span>Sản phẩm 4</span>
                                </div>
                                <div class="flex flex-col gap-4 text-gray-500">
                                    <div class="sub-product-title uppercase font-bold text-black">Phụ kiện nam</div>
                                    <span>Sản phẩm 1</span>
                                </div>
                            </div>
                            <div class="col-span-2 grid grid-cols-2 grid-rows-2 gap-4 py-6 pr-4">
                                <div class="product-random-box">
                                    <div class="product-item">
                                        <img loading="lazy" src="https://mcdn.coolmate.me/image/March2024/mceclip14_74.jpg" alt="" />
                                        <div class="product-content">Quần jogger nam UT đa năng</div>
                                    </div>
                                </div>
                                <div class="product-random-box">
                                    <div class="product-item">
                                        <img loading="lazy" src="https://mcdn.coolmate.me/image/March2024/mceclip15_78.jpg" alt="" />
                                        <div class="product-content">Pack 3 Áo Polo nam Pique Cotton</div>
                                    </div>
                                </div>
                                <div class="product-random-box">
                                    <div class="product-item">
                                        <img loading="lazy" src="https://mcdn.coolmate.me/image/March2024/mceclip14_74.jpg" alt="" />
                                        <div class="product-content">Quần jogger nam UT đa năng</div>
                                    </div>
                                </div>
                                <div class="product-random-box">
                                    <div class="product-item">
                                        <img loading="lazy" src="https://mcdn.coolmate.me/image/March2024/mceclip15_78.jpg" alt="" />
                                        <div class="product-content">Pack 3 Áo Polo nam Pique Cotton</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div class="main-nav-item" to="localePath({ name: 'articles' })" @click="menuMobile = false">{{ $t('Áo phản quang') }}</div>
                <div class="main-nav-item" to="localePath({ name: 'articles' })" @click="menuMobile = false">
                    {{ $t('Đồ bảo hộ lao động') }}
                </div>
                <div class="main-nav-item" to="localePath({ name: 'articles' })" @click="menuMobile = false">{{ $t('Vải') }}</div>
                <div class="main-nav-item" to="localePath({ name: 'articles' })" @click="menuMobile = false">{{ $t('Đặt may') }}</div>
                <div class="main-nav-item" to="localePath({ name: 'articles' })" @click="menuMobile = false">{{ $t('Văn hoá') }}</div>
            </div>
            <div class="right-header">
                <UInput
                    class="search-box max-w-[500px] rounded-[50px] overflow-hidden"
                    name="search-box"
                    size="xl"
                    color="white"
                    icon="i-heroicons-magnifying-glass-20-solid"
                    v-model="searchItem"
                    :ui="{ icon: { trailing: { pointer: '' } } }"
                    autocomplete="off"
                    placeholder="Tìm kiếm sản phẩm">
                    <template #trailing>
                        <UButton
                            v-show="searchItem !== ''"
                            color="gray"
                            variant="link"
                            icon="i-heroicons-x-mark-20-solid"
                            :padded="false"
                            @click="searchItem = ''" />
                    </template>
                </UInput>

                <!--                <UButton-->
                <!--                    v-if="true"-->
                <!--                    class="user-btn justify-center items-center"-->
                <!--                    :padded="false"-->
                <!--                    variant="ghost"-->
                <!--                    color="none"-->
                <!--                    @click="openProfileSideBar">-->
                <!--                    <UIcon name="i-mdi-account-circle-outline" class="text-green-500 fs-28" dynamic />-->
                <!--                </UButton>-->
                <!--                <UButton v-else class="login-btn" variant="ghost" color="none">-->
                <!--                    <nuxt-link type="button" to="">-->
                <!--                        <img :src="images.person" class="filter-white" alt="" />-->
                <!--                    </nuxt-link>-->
                <!--                </UButton>-->
                <NuxtLink :to="localePath({ name: 'cart' })" class="flex-grow-0 flex-shrink-0">
                    <UButton type="button" class="cart-btn" variant="ghost" color="none">
                        <nuxt-link type="button" to="" class="">
                            <img :src="images.cart" class="filter-white" alt="" />
                        </nuxt-link>
                        <div class="count-item">99</div>
                    </UButton>
                </NuxtLink>
            </div>
            <div class="right-header-mobile flex justify-between items-center gap-6">
                <UButton variant="ghost" color="none" :padded="false" class="search-mobile">
                    <UIcon name="i-heroicons-magnifying-glass" class="fs-28 text-white" />
                </UButton>
                <NuxtLink :to="localePath({ name: 'index' })" class="logo">
                    <NuxtImg class="h-full w-full object-contain" alt="Logo Site" :src="images.logo" />
                </NuxtLink>
                <UButton variant="ghost" color="none" :padded="false" @click="menuMobile = !menuMobile">
                    <UIcon name="i-pajamas-hamburger" class="fs-28 text-white" dynamic />
                </UButton>
            </div>
        </div>
        <USlideover :ui="{ wrapper: 'z-[999]', overlay: { background: 'bg-gray-600/75' } }" v-model="profileSide" v-if="false">
            <UCard
                class="flex flex-col flex-1"
                :ui="{
                    body: { base: 'flex-1 overflow-auto' },
                    rounded: '',
                    ring: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                    footer: { padding: '' },
                }">
                <template #header>
                    <div class="flex flex-col gap-2 w-full">
                        <span class="text-[28px]">Hi, Văn A Nguyễn</span>
                        <div class="new-member flex items-center gap-2 mt-2">
                            <span class="uppercase font-bold text-green-500 fs-22 mt-1">MỚI</span>
                            <UIcon name="i-mdi-account-circle-outline" class="text-green-500 fs-28" dynamic />
                        </div>
                    </div>
                </template>
                <div class="profile-box flex flex-col gap-4 w-full">
                    <div v-if="false" class="bg-[#F1F1F1] p-4 flex flex-col gap-2 text-gray-900/60 w-max rounded-md">
                        <span>Bạn đang có</span>
                        <span class="text-black font-bold flex items-center gap-2">
                            <UIcon name="i-bx-bxs-coin-stack" class="text-gray-500 fs-20" dynamic />
                            0 Coins</span
                        >
                    </div>
                    <div class="vouchers flex flex-col gap-4">
                        <span class="fs-22">Ưu đãi dành riêng cho bạn</span>
                        <div class="voucher-box bg-[#F1F1F1] pl-6 max-w-xs relative rounded-lg overflow-hidden">
                            <div
                                class="circle-ticket w-6 h-6 rounded-full bg-white absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                            <div class="flex flex-col w-full gap-2 px-4 py-3 pr-8 border-l border-dashed border-gray-500/50">
                                <span class="code font-bold">WELCOMEQ124ABC</span>
                                <span class="code-details fs-12 font-medium"
                                    >Giảm 15% tối đa 50K(Không áp dụng cho danh mục Trang chủ)</span
                                >
                                <div class="mt-4 italic text-gray-500/70 font-semibold fs-12">HSD: 20.02.2024</div>
                                <UButton variant="outline" color="none" class="rounded-full w-max py-3 px-4 fs-14 font-bold"
                                    >Sử dụng ngay</UButton
                                >
                            </div>
                        </div>
                    </div>
                    <div class="link-btns grid grid-cols-3 grid-rows-2 gap-4 mt-4">
                        <div class="bg-[#F1F1F1] p-4 flex flex-col items-center gap-2 text-gray-900 rounded-md">
                            <UButton class="link-icon-btn bg-black rounded-2xl h-10 w-10 justify-center" variant="ghost" color="none">
                                <UIcon name="i-carbon-percentage-filled" class="text-white fs-24" dynamic />
                            </UButton>
                            <span class="text-center">Ví Voucher</span>
                        </div>
                        <div class="bg-[#F1F1F1] p-4 flex flex-col items-center gap-2 text-gray-900 rounded-md">
                            <UButton class="link-icon-btn bg-black rounded-2xl h-10 w-10 justify-center" variant="ghost" color="none">
                                <UIcon name="i-mdi-file-document-refresh" class="text-white fs-24" dynamic />
                            </UButton>
                            <span class="text-center">Lịch sử đơn hàng</span>
                        </div>
                        <div class="bg-[#F1F1F1] p-4 flex flex-col items-center gap-2 text-gray-900 rounded-md">
                            <UButton class="link-icon-btn bg-black rounded-2xl h-10 w-10 justify-center" variant="ghost" color="none">
                                <UIcon name="i-bi-geo" class="text-white fs-24" dynamic />
                            </UButton>
                            <span class="text-center">Sổ địa chỉ</span>
                        </div>
                        <div class="bg-[#F1F1F1] p-4 flex flex-col items-center gap-2 text-gray-900 rounded-md">
                            <UButton class="link-icon-btn bg-black rounded-2xl h-10 w-10 justify-center" variant="ghost" color="none">
                                <UIcon name="i-material-symbols-settings-b-roll" class="text-white fs-24" dynamic />
                            </UButton>
                            <span class="text-center">Cài đặt tài khoản</span>
                        </div>
                        <div class="bg-[#F1F1F1] p-4 flex flex-col items-center gap-2 text-gray-900 rounded-md">
                            <UButton class="link-icon-btn bg-black rounded-2xl h-10 w-10 justify-center" variant="ghost" color="none">
                                <UIcon
                                    name="i-streamline-interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars"
                                    class="text-white fs-24"
                                    dynamic />
                            </UButton>
                            <span class="text-center">Đánh giá và phản hồi</span>
                        </div>
                        <div class="bg-[#F1F1F1] p-4 flex flex-col items-center gap-2 text-gray-900 rounded-md">
                            <UButton class="link-icon-btn bg-black rounded-2xl h-10 w-10 justify-center" variant="ghost" color="none">
                                <UIcon
                                    name="i-streamline-interface-help-question-circle-circle-faq-frame-help-info-mark-more-query-question"
                                    class="text-white fs-24"
                                    dynamic />
                            </UButton>
                            <span class="text-center">FAQ & Chính sách</span>
                        </div>
                    </div>
                </div>
                <template #footer>
                    <UButton
                        :ui="{ rounded: 'rounded-none' }"
                        class="change-profile-btn h-[65px] bg-green-700/75 text-gray-50 hover:bg-gray-600/75 transition ease-in-out duration-200"
                        variant="ghost"
                        color="none"
                        size="lg"
                        block>
                        Đi đến tài khoản
                    </UButton>
                </template>
            </UCard>
        </USlideover>
    </div>
</template>
<script setup>
import images from '@@/assets/icons/index';
import { useHeader } from '@@/store/useHeader';
import { storeToRefs } from 'pinia';

const useHeaderStore = useHeader();

const { isScrollDown } = storeToRefs(useHeaderStore);
const localePath = useLocalePath();
const searchItem = ref('');
const profileSide = ref(false);
const menuMobile = ref(false);
const openProfileSideBar = () => {
    profileSide.value = true;
};

const handleAddSubMenu = (e) => {
    e.srcElement.lastChild.classList.add('active');
}
const handleCloseSubMenu = (e) => {
    e.srcElement.lastChild.classList.remove('active');
}
</script>
<style lang="scss" scoped>
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 99;
    transition: all 0.3s;
    font-size: 14px;
    background-color: white;
    @media screen and (max-width: 991px) {
        transform: inherit;
    }
    &.hidden-header {
        transform: translateY(-100%);
    }
    .topbar {
        @apply flex items-center justify-between gap-6 w-full;
        @media screen and (max-width: 991px) {
            display: none;
        }
        padding: 6px 30px;
        color: #1d1d1d;
        transition: all 0.3s;
        height: var(--header-topbar);
        .left-top-bar {
            @apply flex items-center gap-4 w-full;
            .logo {
                height: 14px;
            }
        }
        .sub-nav {
            @extend .topbar;
            @apply justify-end gap-4;
            font-weight: 500;
            padding: 6px 0;
        }
    }
    .topbar-promotion {
        @apply flex items-center justify-center;
        @media screen and (max-width: 991px) {
            display: none;
        }
        background: #525252;
        color: #fff;
        font-style: normal;
        height: var(--header-top-promotion);
        transition: all 0.3s;
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
    }
    .header {
        background-color: #f1f1f1;
        transition: all 0.3s;
        position: relative;
        height: var(--header-main);
        padding-left: 30px;
        padding-right: 30px;
        @apply flex items-center justify-between w-full;
        .left-header {
            @apply flex items-center gap-4;
            @media screen and (max-width: 991px) {
                display: none;
            }
            margin-right: 8px;
            .logo {
                height: 40px;
                flex: 0 1 100px;
            }
        }
        .middle-header {
            @apply flex items-center justify-center h-full;
            margin-right: 8px;
            @media screen and (max-width: 991px) {
                @apply hidden flex-col;
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                z-index: 999;
                justify-content: unset;
                align-items: unset;
                height: calc(100vh - var(--header-main));
                z-index: 99;
                background-color: #fff;
                overflow: auto;
                &.active-mobile {
                    @apply flex;
                }
            }
            .main-nav-item {
                padding: 31px 16px;
                white-space: nowrap;
                color: #fff;
                transition: all 0.3s;
                font-weight: bold;
                text-transform: uppercase;
                height: 100%;
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
                        @apply block absolute top-full w-full left-0 px-[30px];
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        top: 0;
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
                        .product-random-box {
                            position: relative;
                            .product-item {
                                width: 100%;
                                height: 100%;
                                &:before {
                                    content: '';
                                    position: absolute;
                                    background: linear-gradient(181deg, hsla(0, 0%, 100%, 0) 8.25%, #000);
                                    width: 100%;
                                    height: 100%;
                                    opacity: 0.5;
                                    z-index: 2;
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
                    }
                }
            }
        }
        .right-header {
            @apply flex items-center gap-2;
            @media screen and (max-width: 991px) {
                display: none;
            }
            .cart-btn {
                position: relative;
                .count-item {
                    position: absolute;
                    bottom: 0;
                    right: 4px;
                    width: 15px;
                    height: 15px;
                    background-color: #f9f86c;
                    color: #000;
                    font-size: 10px;
                    font-weight: bold;
                    pointer-events: none;
                    @apply flex items-center justify-center rounded-full;
                    &.bigger {
                        bottom: -2px;
                        right: 2px;
                        width: 18px;
                        height: 18px;
                    }
                }
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
</style>
