<template>
    <NuxtLayout name="main">
        <section class="pod-banner md:px-5">
            <h1 class="font-bold px-4 md:px-0 !text-xl md:!text-3xl">SOCIAL MEDIA OFFICIAL</h1>
            <video
                poster="/images/official-banner.jpg"
                src="/images/official-banner.jpg"
                muted="muted"
                autoplay="autoplay"
                loop="loop"
                playsinline=""
                class="pod-banner__video"
                style="pointer-events: none; display: none"></video>
            <img src="/images/official-banner.jpg" class="h-full w-full object-contain" />
        </section>
        <section class="smo-content flex flex-col w-full px-5 bg-white py-8">
            <h2 class="font-bold !text-2xl md:!text-4xl text-center">SOCIAL MEDIA</h2>
            <div class="md:grid md:grid-cols-3 flex flex-col justify-center items-center w-full gap-4 md:gap-0">
                <a href="https://www.facebook.com/GAKBHLD" target="_blank">
                    <img src="/images/facebook-gak.jpg" class="max-h-[250px] md:max-h-auto" alt="" />
                </a>
                <a href="https://www.tiktok.com/@congtygak" target="_blank">
                    <img src="/images/tiktok-gak.jpg" class="max-h-[250px] md:max-h-auto" alt="" />
                </a>
                <a href="https://www.youtube.com/@CongtyGAK" target="_blank">
                    <img src="/images/youtube-gak.jpg" class="max-h-[250px] md:max-h-auto" alt="" />
                </a>
            </div>
        </section>
        <div v-if="false" class="gak-news flex flex-col gap-4 p-5 w-full">
            <h3 class="font-bold !text-2xl md:!text-3xl">TIN TỨC</h3>
            <Swiper
                :spaceBetween="0"
                :navigation="{
                    nextEl: '.news-swiper .next-news-btn',
                    prevEl: '.news-swiper .prev-news-btn',
                }"
                :modules="modules"
                :slidesPerView="1"
                :slidesPerGroup="1"
                :grabCursor="true"
                :loop="true"
                :breakpoints="{
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    567: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                }"
                class="news-swiper relative">
                <SwiperSlide v-for="article in articlesList" class="p-2 rounded-lg relative overflow-hidden !h-[300px] md:!h-[350px]">
                    <img :src="article.image" class="h-full w-full object-cover rounded-lg" alt="" />
                    <span
                        class="bg-white px-4 py-3 font-medium text-xs sm:text-sm md:text-[16px] rounded-3xl absolute left-1/2 bottom-4 -translate-x-1/2 w-max"
                        >{{ article.note }}</span
                    >
                </SwiperSlide>
                <template v-slot:container-end>
                    <UButton
                        variant="ghost"
                        color="none"
                        class="prev-news-btn w-[40px] h-[40px] absolute top-1/2 left-0 -translate-y-1/2 z-[99] !bg-black text-white rounded-full justify-center"
                        :padded="false">
                        <UIcon class="text-[24px]" name="i-heroicons-arrow-left" dynamic />
                    </UButton>
                    <UButton
                        variant="ghost"
                        color="none"
                        class="next-news-btn w-[40px] h-[40px] absolute top-1/2 right-0 -translate-y-1/2 z-[99] !bg-black text-white rounded-full justify-center"
                        :padded="false">
                        <UIcon class="text-[24px]" name="i-heroicons-arrow-right" dynamic />
                    </UButton>
                </template>
            </Swiper>
        </div>
        <div class="gak-map flex flex-col gap-4 relative">
            <h3 class="font-bold !text-2xl md:!text-3xl absolute top-4 left-1/2 -translate-x-1/2">{{trans('GAK Map')}}</h3>
            <img src="/images/gak-map.jpg" class="h-[600px] md:h-[auto] md:max-h-[600px] object-bottom w-full object-cover" alt="" />
            <div class="map-box w-full absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center p-6 md:p-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.936581647136!2d106.652818292957!3d10.786402732044506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eca006bdbe5%3A0x9a8c008355ae6829!2zMTUgTMOqIE1pbmggWHXDom4sIFBoxrDhu51uZyA4LCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1717928335457!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="about-content pt-8 mx-auto bg-white">
            <section v-if="false" class="cs-cta">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-cta__heading">
                     {{trans('Join the GAK Deal Hunters group – Get instant updates on promotions, clearance sales, and shocking giveaway livestreams!!!')}}
                    </h2>
                    <span class="flex items-center justify-center flex-col sm:flex-row gap-4">
                        <UButton
                            to="https://www.facebook.com/groups/1587962561968530"
                            target="_blank"
                            size="lg"
                            class="text-[#22c55ebf] bg-white rounded-3xl px-6 py-4 w-full justify-center sm:max-w-fit !no-underline uppercase"
                            variant="ghost"
                            color="none">
                            {{trans('Join the GAK Deal Hunters group')}}
                        </UButton>
                        <UButton
                            :to="localePath({name: 'gak-official'})"
                            size="lg"
                            class="border bg-[#22c55ebf] rounded-3xl !text-white px-6 py-4 justify-center w-full sm:max-w-[300px] !no-underline"
                            variant="ghost"
                            color="none">
                            GAK OFFICIAL
                        </UButton>
                    </span>
                </div>
            </section>
            <div class="cs-faq-container py-8 bg-[#f1f1f1]">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-faq__heading text-center w-full">{{trans('FAQ - Frequently Asked Questions')}}</h2>
                    <UAccordion multiple :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
                        <template #default="{ item, index, open }">
                            <UButton
                                color="gray"
                                variant="soft"
                                class="border-b text-black !justify-between border-gray-200 dark:border-gray-700"
                                :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                                <span class="text-xl md:text-center text-left">{{ index + 1 }}. {{ item.label }}</span>

                                <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']" />
                                </template>
                            </UButton>
                        </template>
                        <template #item-1>
                            <div class="text-gray-900 dark:text-white px-3 text-lg">
                                <p>{{trans('Address: 15 Le Minh Xuan, Ward 7, Tan Binh, Ho Chi Minh City, Vietnam')}}</p>
                            </div>
                        </template>
                        <template #item-2>
                            <div class="text-gray-900 dark:text-white px-3 text-lg">
                                <p>
                                    {{trans("GAK Company specializes in providing fabric, mesh, labor protection products, and company uniforms with quality and prices suitable for the company's budget. During its operation, GAK has been trusted by many customers and partners to choose high-quality Vietnamese products. Currently, GAK is becoming a supplier and strategic partner of many industrial parks, restaurants, construction, real estate... throughout Vietnam. Choose GAK to choose quality, choose good prices.")}}
                                </p>
                            </div>
                        </template>
                        <template #item-3>
                            <div class="text-gray-900 dark:text-white px-3 text-lg">
                                <ul>
                                    <li>
                                        {{trans('GAKPlatforms', {platform: "Facebook"})}}
                                        <a href="https://www.facebook.com/GAKBHLD" target="_blank" class="text-blue-500"
                                            >{{trans('Here')}}</a
                                        >
                                    </li>
                                    <li>
                                        {{trans('GAKPlatforms', {platform: "Tiktok"})}}
                                        <a href="https://www.tiktok.com/@congtygak" target="_blank" class="text-blue-500"
                                            >{{trans('Here')}}</a
                                        >
                                    </li>
                                    <li>
                                        {{trans('GAKPlatforms', {platform: "Zalo"})}}
                                        <a href="https://zalo.me/0569133339" target="_blank" class="text-blue-500"
                                            >{{trans('Here')}}</a
                                        >
                                    </li>
                                    <li>
                                        {{trans('GAKPlatforms', {platform: "Instagram"})}}
                                        <a href="https://www.instagram.com/congtygak/" target="_blank" class="text-blue-500"
                                            >{{trans('Here')}}</a
                                        >
                                    </li>
                                    <li>
                                        {{trans('GAKPlatforms', {platform: "Twitter"})}}
                                        <a href="https://twitter.com/congtygak" target="_blank" class="text-blue-500"
                                            >{{trans('Here')}}</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <template #item-4>
                            <div class="text-gray-900 dark:text-white px-3 text-lg">
                                <ul>
                                    <li>
                                        Hotline:
                                        <a href="tel:0569133339">056.913.33.39</a> 
                                    </li>
                                    
                                </ul>
                            </div>
                        </template>
                    </UAccordion>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import images from '@@/assets/icons';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import ArticleCard from '@/components/articles/ArticleCard.vue';
let modules = ref([Navigation]);

defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});

const { locale, t: trans } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const slug = ref(router.currentRoute.value.params.slug);

const articlesList = ref([
    {
        image: '/images/about-us-7.jpg',
        note: 'Bộ sưu tập trước',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'Bộ sưu tập ',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'Bộ sưu tập sau',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'Bộ sưu tập Mới',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'Áo ghile',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'Quà tặng',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'Giới hạn',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'Tặng quà sinh nhật',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'New collection',
    },
    {
        image: '/images/about-us-7.jpg',
        note: 'Most popular',
    },
]);

const items = [
    {
        label: trans('GAK company address'),
        slot: 'item-1',
        defaultOpen: true,
    },
    {
        label: trans('Is GAK company a scam?'),
        slot: 'item-2',
    },
    {
        label: trans("GAK's social media platforms"),
        slot: 'item-3',
    },
    {
        label: trans("What are the hotline numbers of GAK company?"),
        slot: 'item-4',
    },
];
let title = 'GAK MEDIA OFFICIAL';
let pageDescription = trans('Where is GAK and how can you contact us? Explore our official media channels!');
const config = useRuntimeConfig();

defineOgImageComponent('GAK', {
    title: title,
    description: pageDescription,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url: config.public.logo,
});
let seoMeta = {
    description: pageDescription,
    ogDescription: pageDescription,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription: pageDescription,
    keywords: title,
};
useSeoMeta(seoMeta);
</script>

<style lang="scss" scoped>
.pod-banner {
    position: relative;
    @media screen and (max-width: 991px) {
        height: 100%;
    }
    .pod-banner__content,
    .pod-banner__filter,
    .pod-banner__video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .pod-banner__video {
        -o-object-fit: cover;
        object-fit: cover;
    }
    .pod-banner__content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        background-color: rgba(0, 0, 0, 0.5);
        .pod-banner__heading {
            font-size: 500%;
            font-weight: 700;
            color: #fff;
            text-align: center;
            margin-bottom: 20px;
            line-height: 1em;
        }
        .pod-banner__description {
            font-size: 170%;
            text-align: center;
            color: #fff;
            margin: 0 0 30px;
        }
        .pod-banner__policy {
            text-align: center;
            font-size: 170%;
            color: #fff;
            margin-bottom: 50px;
        }
        .pod-banner__featured {
            position: absolute;
            bottom: 32px;
            left: 50%;
            width: 100%;
            max-width: 1800px;
            padding: 0 32px;
            transform: translate3d(-50%, 0, 0);
            .pod-banner__featured-wrapper {
                display: flex;
                margin-left: -15px;
                margin-right: -15px;
                .pod-banner__featured-item {
                    position: relative;
                    flex: 1;
                    margin: 0 15px;
                    height: 100%;
                    border-radius: 16px;
                    color: #000;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 1.15em;
                    transition: all 0.3s;
                    overflow: hidden;
                    padding: 16px 15px;
                    border: 1px solid #fff;
                    color: #fff;
                }
            }
        }
    }
}
.gak-map {
}
.about-content {
    .container--medium {
        max-width: 1280px;
        margin: 0 auto;
    }
    .cs-cta {
        background-color: #176c36;
        text-align: center;
        padding-top: 30px;
        padding-bottom: 40px;
        color: white;
        .cs-cta__heading {
            text-align: center;
            color: #ffffff;
            text-transform: initial;
        }
    }
}
</style>
