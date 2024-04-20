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
            <div class="about-content !py-12 container mx-auto">
                <div class="flex items-start justify-between w-full gap-8">
                    <UTabs
                        variant="ghost"
                        color="none"
                        :items="items"
                        orientation="vertical"
                        class="w-full"
                        :ui="{
                            wrapper: 'flex flex-col items-start gap-6 lg:flex-row lg:gap-16',
                            list: {
                                base: 'flex flex-col gap-4',
                                width: 'flex-grow-0 flex-shrink-0 basis-[250px]',
                                tab: { base: '!h-12 !px-0 lg:!px-3' },
                            },
                        }">
                        <template #default="{ item, index, selected }">
                            <div
                                class="flex items-center justify-between gap-2 relative w-full h-12 font-bold hover:text-green-700"
                                :class="selected ? 'text-green-700' : 'text-black'">
                                <span class="capitalize">{{ item.label }}</span>
                                <UIcon name="i-heroicons-chevron-right-20-solid"></UIcon>
                            </div>
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

const route = useRoute();
const slug = ref(route.params.slug);
const items = [
    {
        label: 'Mua sắm cùng GAK',
        content: 'This is the content shown for Tab1',
    },
    {
        label: 'Khuyến mãi & Ưu đãi',
        content: 'And, this is the content for Tab2',
    },
    {
        label: 'Thanh Toán',
        content: 'Finally, this is the content for Tab3',
    },
    {
        label: 'Đơn hàng & Vận chuyển',
        content: 'Finally 1, this is the content for Tab3',
    },
    {
        label: 'Trả hàng & Hoàn Tiền',
        content: 'Finally 2, this is the content for Tab3',
    },
    {
        label: 'Thông tin chung',
        content: 'Finally 2, this is the content for Tab3',
    },
];
const content = ref();

// useSchemaOrg([
//     defineArticle({
//         type: 'Article',
//         headline: 'Tại sao nên chọn hãng máy bay uy tín Vietravel Airlines cho dịp Tết',
//         title: 'Tại sao nên chọn hãng máy bay uy tín Vietravel Airlines cho dịp Tết',
//         description: 'Tại sao nên chọn hãng máy bay uy tín Vietravel Airlines cho dịp Tết',
//         image: process.env.WEB_BASE_URL + '/__og-image__/image/og.png',
//         datePublished: new Date(2024, 1, 1),
//         dateModified: new Date(2024, 1, 1),
//         author: [
//             {
//                 name: 'Chung Ngô',
//                 url: 'https://gak.vn',
//             },
//         ]
//     })
// ]);
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
