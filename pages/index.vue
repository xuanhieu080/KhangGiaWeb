<template>
    <NuxtLayout name="main">
        <div class="dashboard">
            <Banner :bannerList="bannerList" :autoPlay="false" />
        </div>
    </NuxtLayout>
</template>
<script setup>
import Banner from '@/components/Banner';
const localePath = useLocalePath();
const bannerList = ref([
    {
        url: 'https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/BANNER_WINTER_CLT_(ccmfnlfnal)s.png',
        name: 'banner 1'
    },
    {
        url: 'https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/January2024/cmbsBanner-6_copy.jpg',
        name: 'banner 2',
    }
])
</script>
<style lang="scss" scoped></style>
