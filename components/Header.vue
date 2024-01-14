<template>
    <div class="site-header">
        <div class="topbar">
            <div class="left-top-bar">
                <NuxtLink :to="localePath({ name: 'index' })" class="logo">
                    <NuxtImg
                        class="h-full w-full object-contain"
                        format="webp"
                        loading="lazy"
                        alt="Logo Site"
                        src="https://static.coolmate.me/images/logo-coolmate-v2.svg" />
                </NuxtLink>
            </div>
            <div class="sub-nav">
                <NuxtLink to="#">Blog</NuxtLink>
                <NuxtLink to="#">Về Coolmate</NuxtLink>
                <NuxtLink to="#">Trung tâm CSKH</NuxtLink>
                <NuxtLink to="#">Đăng nhập</NuxtLink>
            </div>
        </div>
        <div class="topbar-promotion">
            <NuxtLink to="#" target="_blank" class="flex items-center gap-1">
                Ra mắt Coolmate Basics!
                <img
                    src="https://mcdn.coolmate.me/image/August2023/mceclip0_10.png"
                    alt=""
                    style="height: 18px; margin-bottom: 3px; margin-left: 3px" />
            </NuxtLink>
        </div>
        <div class="header">
            <div class="left-header">
                <NuxtLink :to="localePath({ name: 'index' })" class="logo">
                    <NuxtImg
                        class="h-full w-full object-contain"
                        format="webp"
                        loading="lazy"
                        alt="Logo Site"
                        src="https://static.coolmate.me/images/logo-coolmate-new.svg?v=1" />
                </NuxtLink>
            </div>
            <div class="middle-header">
                <NuxtLink class="main-nav-item" to="#">Sale</NuxtLink>
                <NuxtLink class="main-nav-item" :to="localePath({ name: 'articles' })">Sản phẩm</NuxtLink>
                <NuxtLink class="main-nav-item" :to="localePath({ name: 'articles' })">Đồ lót</NuxtLink>
                <NuxtLink class="main-nav-item" :to="localePath({ name: 'articles' })">Đồ thể thao</NuxtLink>
                <NuxtLink class="main-nav-item" :to="localePath({ name: 'articles' })">Mặc hàng ngày</NuxtLink>
                <NuxtLink class="main-nav-item" :to="localePath({ name: 'articles' })">Nước hoa</NuxtLink>
                <NuxtLink class="main-nav-item" :to="localePath({ name: 'articles' })">Sản xuất riêng</NuxtLink>
                <NuxtLink class="main-nav-item" :to="localePath({ name: 'articles' })">Care&Share</NuxtLink>
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

                <UButton class="login-btn" variant="ghost" color="none">
                    <nuxt-link type="button" to="">
                        <img :src="images.person" class="filter-white" alt="" />
                    </nuxt-link>
                </UButton>
                <UButton class="cart-btn" variant="ghost" color="none">
                    <nuxt-link type="button" to="">
                        <img :src="images.cart" class="filter-white" alt="" />
                    </nuxt-link>
                    <div class="count-item">99</div>
                </UButton>
            </div>
        </div>
    </div>
</template>
<script setup>
import images from '@@/assets/icons/index';
const localePath = useLocalePath();
const searchItem = ref('');
</script>
<style lang="scss" scoped>
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 10;
    transition: all 0.3s;
    font-size: 14px;
    background-color: white;
    .topbar {
        @apply flex items-center justify-between gap-6 w-full;
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
        background-color: #212121;
        transition: all 0.3s;
        position: relative;
        height: var(--header-main);
        padding-left: 30px;
        padding-right: 30px;
        @apply flex items-center justify-between w-full;
        .left-header {
            @apply flex items-center gap-4;
            margin-right: 8px;
            .logo {
                width: 100px;
                height: 40px;
                flex: 0 1 100px;
            }
        }
        .middle-header {
            @apply flex items-center justify-center h-full;
            margin-right: 8px;
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
                    background-color: rgb(255, 86, 5);
                    color: white;
                }
            }
        }
        .right-header {
            @apply flex items-center gap-2;
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
    }
}
</style>
