<template>
    <NuxtLayout name="main">
        <div class="page">
            <div class="about-us-image relative">
                <div
                    class="about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                    <h1 class="font-bold !text-[54px] 2xl:!text-[64px] !my-2">Xin chào</h1>
                    <span class="text-lg xl:text-xl">GAK có thể giúp gì cho bạn?</span>
                </div>
            </div>
            <div v-if="!loadingPage" class="about-content !py-12 container mx-auto">
                <div class="flex items-start justify-between w-full gap-8">
                    <UTabs
                        variant="ghost"
                        color="none"
                        :items="items"
                        orientation="vertical"
                        class="w-full"
                        :default-index="defaultIndex"
                        :ui="{
                            wrapper: 'flex flex-col items-start gap-6 lg:flex-row lg:gap-16',
                            list: {
                                base: 'flex flex-col gap-4',
                                width: 'flex-grow-0 flex-shrink-0 basis-[250px]',
                                tab: { base: '!h-12 !px-0 lg:!px-3' },
                            },
                        }">
                        <template #default="{ item, index, selected }">
                            <NuxtLink :to="localePath({name: item.slug})"
                                class="flex items-center justify-between gap-2 relative w-full h-12 font-bold hover:text-green-700"
                                :class="selected ? 'text-green-700' : 'text-black'">
                                <span class="capitalize">{{ item.label }}</span>
                                <UIcon name="i-heroicons-chevron-right-20-solid"></UIcon>
                            </NuxtLink>
                        </template>
                        <template #item="{ item }">
                            <div class="prose max-w-full" v-html="item.content"></div>
                        </template>
                    </UTabs>
                </div>
            </div>
            <div class="footer-policy-page flex flex-col gap-4 items-center mt-auto">
                <h3>Bạn có muốn tìm thêm thông tin gì không?</h3>
                <div class="contact__content-hotline mx-auto">
                    <div class="contact__content-info">
                        <img
                            src="/images/phone-icon.svg"
                            class="bg-gray-200 p-2 rounded-full !border border-solid border-gray-300"
                            alt="" />
                        <div>
                            <p>Hotline</p>
                            <a href="tel:0569133339">0569133339</a>
                        </div>
                    </div>
                    <div class="contact__content-info">
                        <img
                            src="/images/sms-notification.svg"
                            class="bg-gray-200 p-2 rounded-full !border border-solid border-gray-300"
                            alt="" />
                        <div>
                            <p>Email</p>
                            <a href="mailto:mediagakvn@gmail.com">mediagakvn@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import EditorBox from '@@/components/EditorBox.vue';
import images from 'assets/icons';

const router = useRouter();
const localePath = useLocalePath();
const slug = ref(router.currentRoute.value.params.slug);
const defaultIndex = ref(0)
const items = ref([
    {
        label: 'Điều khoản sử dụng',
        slug: 'dieu-khoan-su-dung',
        content: 'This is the content shown for Tab1',
    },
    {
        label: 'Chính sách Cookie',
        slug: 'chinh-sach-cookie',
        content: 'And, this is the content for Tab2',
    },
    {
        label: 'Chính sách khuyến mãi',
        slug: 'chinh-sach-khuyen-mai',
        content: 'Finally, this is the content for Tab3',
    },
    {
        label: 'Chính sách bảo mật',
        slug: 'chinh-sach-bao-mat',
        content: 'Finally 1, this is the content for Tab3',
    },
    {
        label: 'Chính sách giao hàng',
        slug: 'chinh-sach-giao-hang',
        content: 'Finally 2, this is the content for Tab3',
    },
]);
const content = ref();
const { data: page, pending: loadingPage } = await useLazyAsyncData('dieu-khoan-su-dung', () =>
    useOriginalFetch(`/api/v1/pages/dieu-khoan-su-dung`),
);

watchEffect(() => {
    if(!loadingPage.value && page.value && page.value.data) {
        items.value[defaultIndex.value].content = page.value.data.description
    }
})
let title = 'Điều khoản sử dụng';
const config = useRuntimeConfig();

defineOgImageComponent('GAK', {
    title: title,
    description: config.public.description,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url:  config.public.logo,
});
let seoMeta = {
    description:  config.public.description,
    ogDescription:  config.public.description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription:  config.public.description,
    keywords: title,
};
useSeoMeta(seoMeta);
</script>
<style lang="scss" scoped>
.page {
    @apply flex flex-col gap-6 w-full;
    min-height: 100vh;
    .about-us-image {
        height: 300px;
        width: 100%;
        background-color: #1f9408;
    }
    .footer-policy-page {
        background-color: white;
        .contact__content-hotline {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 48px;
            @media (max-width: 991px) {
                @apply flex-wrap items-center justify-center;
            }
            .contact__content-info {
                display: flex;
                border-radius: 16px;
                gap: 8px;
                align-items: flex-end;
                padding: 4px 20px 4px 12px;
                p {
                    font-size: 14px;
                    color: #2c2f30;
                    margin: 0;
                }
            }
        }
    }
}
</style>
