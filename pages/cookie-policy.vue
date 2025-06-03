<template>
    <NuxtLayout name="main">
        <div class="page">
            <div class="about-us-image relative">
                <div
                    class="about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                    <h1 class="font-bold !text-[54px] 2xl:!text-[64px] !my-2">{{trans('Hello')}}</h1>
                    <span class="text-lg xl:text-xl">{{trans('How can GAK assist you?')}}</span>
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
                                <span class="capitalize text-start">{{ item.label }}</span>
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
                <h3>{{trans('Would you like to find more information?')}}</h3>
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
import { useLanguageLink } from '~/store/languageLink';
import { storeToRefs } from 'pinia';

const { locale, t: trans } = useI18n();
const router = useRouter();
const localePath = useLocalePath();

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);

link.value = null
const slug = ref(null)

if (locale.value == 'vi') {
    slug.value = 'chinh-sach-cookie';
} else {
    slug.value = 'cookie-policy';
}


const defaultIndex = ref(1)
const items = ref([
    {
        label: trans('Terms of Use'),
        slug: 'terms-of-use',
        content: 'This is the content shown for Tab1',
    },
    {
        label: trans('Cookie Policy'),
        slug: 'cookie-policy',
        content: 'And, this is the content for Tab2',
    },
    {
        label: trans('Promotional Policy'),
        slug: 'promotional-policy',
        content: 'Finally, this is the content for Tab3',
    },
    {
        label: trans('Privacy Policy'),
        slug: 'privacy-policy',
        content: 'Finally 1, this is the content for Tab3',
    },
    {
        label: trans('Shipping Policy'),
        slug: 'shipping-policy',
        content: 'Finally 2, this is the content for Tab3',
    },
    {
        label: trans('Return Policy'),
        slug: 'return-policy',
        content: 'Finally 2, this is the content for Tab3',
    },
    {
        label: trans('FAQs'),
        slug: 'faqs',
        content: 'Finally 3, this is the content for Tab3',
    },
    {
        label: trans('Payment Regulations'),
        slug: 'payment-regulations',
        content: 'Finally 3, this is the content for Tab3',
    },
    {
        label: trans('Inspection Policy'),
        slug: 'inspection-policy',
        content: 'Finally 3, this is the content for Tab3',
    }
]);
const content = ref();

const { data: page, status: loadingPage } = await useLazyAsyncData('chinh-sach-cookie', () =>
    useOriginalFetch(`/api/v1/pages/${slug.value}`, {
        params: {lang: locale.value}
    }),
);

//SEO

const title = ref('');
const description = ref('');
const key = ref('');
const image = ref();
const seoMeta = ref({})

watchEffect((value) => {
    if (loadingPage.value === 'success' && page.value && page.value.data) {

        items.value[defaultIndex.value].content = page.value.data.description
        title.value = page.value.data?.meta_title;
        description.value =  page.value.data?.meta_description;
        key.value = page.value.data?.meta_key;
        image.value =  page.value.data?.image_url;
        link.value = null;

        if (page.value.data?.slug_other) {
            if (locale.value == 'vi') {
                link.value = `/en/${page.value.data.slug_other}`;
            } else {
                link.value = `/vi/${page.value.data.slug_other}`;
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
        loadingPage.value = 'pending'
    }
});
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
