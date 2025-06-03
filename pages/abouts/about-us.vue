<template>
    <NuxtLayout name="main">
        <div class="about-us-image relative">
            <NuxtImg class="w-full h-[500px] object-cover" loading="lazy" format="webp" src="/images/company-banner.jpg" alt="" />
            <div
                class="about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10">
                <h1 class="font-bold !text-[24px] md:!text-[54px] 2xl:!text-[64px] !my-2">GAK COMPANY STORY</h1>
                <span class="text-lg xl:text-xl"
                    >This category helps you know how GAK was formed and what kind of model we want to build!</span>
            </div>
            <div class="hidden lg:flex justify-center gap-4 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: 'abouts-about-us' })"
                    class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full max-w-[300px] border-2 border-green-500 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" :src="images.logo" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">GAK Story</span>
                    </div>
                    <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: 'culture-gak' })"
                    class="about-us-button bg-white p-4 rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" src="/images/loa.png" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Culture GAK</span>
                    </div>
                    <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    :to="localePath({ name: 'dedicated-customer-care-service' })"
                    color="none"
                    class="about-us-button !bg-white p-4 rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" src="/images/star-blink.png" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Customer journey <br />98% satisfaction</span>
                    </div>
                    <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                    </div>
                </UButton>
            </div>
        </div>
        <div class="lg:hidden flex flex-col justify-between gap-4 my-4 px-4">
            <UButton
                variant="ghost"
                color="none"
                :to="localePath({ name: 'abouts-about-us' })"
                class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full border-2 border-green-500 items-center justify-between gap-4">
                <div class="flex justify-center">
                    <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" :src="images.logo" />
                </div>
                <div class="font-bold text-left flex-1 flex justify-start">
                    <span class="max-w-[150px] text-lg">GAK Story</span>
                </div>
                <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                    <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                </div>
            </UButton>
            <UButton
                variant="ghost"
                color="none"
                :to="localePath({ name: 'culture-gak' })"
                class="about-us-button bg-white p-4 rounded-2xl w-full border-2 items-center justify-between gap-4">
                <div class="flex justify-center">
                    <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" src="/images/loa.png" />
                </div>
                <div class="font-bold text-left flex-1 flex justify-start">
                    <span class="max-w-[150px] text-lg">Culture GAK</span>
                </div>
                <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                    <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                </div>
            </UButton>
            <UButton
                variant="ghost"
                :to="localePath({ name: 'dedicated-customer-care-service' })"
                color="none"
                class="about-us-button !bg-white p-4 rounded-2xl w-full border-2 items-center justify-between gap-4">
                <div class="flex justify-center">
                    <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" src="/images/star-blink.png" />
                </div>
                <div class="font-bold text-left flex-1 flex justify-start">
                    <span class="max-w-[150px] text-lg">Customer journey <br />98% satisfaction</span>
                </div>
                <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                    <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                </div>
            </UButton>
        </div>
        <div class="about-content pt-6 md:!pt-[5rem] mx-auto">
            <section class="cs-about">
                <div class="container container--medium prose prose-lg lg:prose-2xl">
                    <div class="grid lg:grid-cols-2 gap-2 md:gap-6 lg:gap-12">
                        <div class="grid__column five-twelfths mobile--one-whole">
                            <div class="cs-about__content">
                                <h2 class="cs-about__heading">
                                    What is <br />
                                    GAK born for?
                                </h2>
                                <div class="cs-about__image">
                                    <img src="/images/company-banner-box.png" class="h-full w-full object-contain !mt-4" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="grid__column seven-twelfths mobile--one-whole flex">
                            <div class="cs-about__description flex flex-col justify-center items-center flex-nowrap">
                                <p>
                                    Formed during some of the most challenging periods of the economy, we have risen through quality, dedication, and an unwavering pursuit of the highest values to improve the lives of the Vietnamese people.
                                </p>
                                <p>
                                    Our sustainable development model is encapsulated in the three core letters GAK—representing Gia (Family), An (Peace), and Khang (Prosperity)—a philosophy that not only focuses on the well-being of our employees but also delivers long-term value to our partners.
                                </p>
                                <p>
                                    Through practical actions and genuine kindness across all areas of our work, we are proud to stand today as a leading manufacturer of a wide range of high-quality products, including personal protective equipment, fabrics, nets, and uniforms—bringing prosperity to every customer we serve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-caption">
                <div class="container container--medium prose prose-lg">
                    <div class="cs-caption__wrapper">
                        <h2 class="cs-caption__heading">
                            <span>“</span>We believe that building a company based on responsibility, kindness, and balance—where the best interests of employees, customers, and partners are prioritized—will foster a sustainable ecosystem that extends far beyond our organization.<span>“</span>
                        </h2>
                        <span class="cs-caption__author">GAK CO.,LTD</span>
                    </div>
                </div>
            </section>
            <section class="cs-story">
                <div class="container container--medium prose prose-lg">
                    <div class="grid grid-cols-1 lg:grid-cols-5 grid--mobile-rev">
                        <div class="grid__column mobile--one-whole lg:col-span-2 p-4">
                            <div class="cs-story__image w-full h-full">
                                <NuxtImg class="w-full" loading="lazy" format="webp" src="/images/company-banner.jpg" alt="" />
                            </div>
                        </div>
                        <div class="grid__column mobile--one-whole my-auto col-span-3">
                            <div class="cs-story__content lg:py-[25px] pl-4 lg:pl-[45px]">
                                <h2 class="cs-story__heading">WHO WE ARE!</h2>
                                <div class="ca-story__description">
                                    <p>
                                        GAK is the realization of a dream nurtured by resilient individuals who aspire to elevate a Vietnamese brand to the global stage. Guided by the principles of integrity in business and a relentless focus on product quality, we have gradually established a strong foothold in the markets for workwear, fabric, netting, and uniforms.
                                    </p>
                                    <p>
                                        With a clear direction toward a Direct-to-Consumer (D2C) model, we are confident that our next steps will deliver maximum value to our customers—earning not only their satisfaction but also their trust in our core products.
                                    </p>
                                    <p>
                                        And we’re only just beginning. With a fully integrated production process—from fabric weaving and dyeing to a nearly 3,000-square-meter garment factory and warehouse system based in Ho Chi Minh City—GAK is well-positioned to offer competitive pricing and robust production capacity for both the domestic and international markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-services">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-services__heading">The story of the RESPONSIBLE business model Gak is aiming for</h2>
                    <div id="services1" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#1 BE KIND TO CUSTOMERS</h3>
                                <div class="cs-services__description">
                                    <p>
                                        GAK is committed to delivering high-quality products at reasonable prices—crafted by skilled and experienced tailors, supported by a fully integrated supply chain from the very source (in the garment industry: yarn, weaving, dyeing, and sewing).
                                    </p>
                                    <p>
                                        Moreover, our Direct-to-Consumer (D2C) ecommerce model allows us to focus on research, production, and continuous product improvement rather than simply cutting costs as in traditional models. As a result, more than 21% of our customers have gradually become distribution partners—growing and prospering alongside us.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img src="/images/about-us-1.png" class="w-full object-cover" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services2" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column lg:order-2 my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#2. BE KIND WITH EMPLOYEE</h3>
                                <div class="cs-services__description">
                                    <p>
                                        GAK operates on the foundation of a united, compassionate, and collaborative team—continuously building a strong corporate culture. Here, young talents and workers are empowered through training, career development opportunities, and clear, transparent recognition and reward systems that honor their efforts year after year.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image w-full">
                                <img src="/images/about-us-2.png" class="w-full object-cover" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services3" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#3. BE KIND TO OUR PARTNER</h3>
                                <div class="cs-services__description">
                                    <p>
                                        We view our partners not merely as commercial distributors, but as long-term companions on the journey toward shared prosperity. With a firm commitment to fostering close, transparent, and lasting collaboration, we treat every partner—whether a distributor or business—as a valued ally. Together, we strive to create lasting value and sustainable success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img src="/images/about-us-3.jpg" class="w-full object-cover" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services4" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto lg:order-2">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#4. TỬ TẾ VỚI MÔI TRƯỜNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        GAK is dedicated not only to creating value for the community and our partners but also to protecting and preserving the environment. We recognize that environmental protection is not only an individual responsibility but also a collective duty to safeguard the future for millions of children. Through our ongoing efforts to explore innovative fiber materials and advanced technologies, we aim to reduce waste and minimize environmental impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img src="/images/about-us-4.jpg" class="w-full object-cover" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services5" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#5. BE KIND TO THE COMMUNITY</h3>
                                <div class="cs-services__description">
                                    <p>
                                        We are also committed to making a positive impact on the communities around us through heartfelt charitable initiatives and meaningful social projects. GAK continuously seeks opportunities to invest in education, culture, and job creation—providing thousands of employment opportunities each year and helping workers improve their quality of life and professional skills over time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img class="w-full object-cover" src="/images/about-us-5.jpeg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-thanks">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-thanks__heading">
                        In life there are many choices, <br />
                        thank you for choosing GAK!
                    </h2>
                    <span class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="73" viewBox="0 0 118 73" fill="none">
                            <path
                                opacity="0.4"
                                d="M28.0214 24.9079C42.2051 25.5998 51.1997 35.6321 51.1997 48.432C51.1997 61.9237 41.1671 72.6479 26.2915 72.6479C9.68628 72.6479 0 59.8481 0 45.3185V42.8969C0 24.5619 12.4542 7.95666 28.3675 0L28.0214 24.9079ZM66.7668 45.3185V42.8969C66.7668 24.5619 79.221 7.95666 95.1344 0L94.7882 24.9079C108.972 25.5998 117.966 35.6321 117.966 48.432C117.966 61.9237 107.934 72.6479 93.0587 72.6479C76.4535 72.6479 66.7668 59.8481 66.7668 45.3185Z"
                                fill="white"></path>
                        </svg>
                    </span>
                </div>
            </section>
            <section class="cs-more">
                <div class="grid lg:grid-cols-2 grid--aligned-center grid--three-columns grid--doubling">
                    <div class="grid__column">
                        <NuxtLink :to="localePath({ name: 'dedicated-customer-care-service' })" target="_blank"
                            ><img src="/images/about-us-6.jpg" alt="Tim hiểu thêm GAK"
                        /></NuxtLink>
                    </div>
                    <div class="grid__column">
                        <NuxtLink :to="localePath({ name: 'product-all-products' })" target="_blank"
                            ><img src="/images/about-us-7.jpg" alt="Khám phá ngay"
                        /></NuxtLink>
                    </div>
                </div>
            </section>
            <section class="cs-cta">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-cta__heading">Join the GAK Deal Hunters group – Get instant updates on promotions, clearance sales, and shocking giveaway livestreams!!!</h2>
                    <span class="flex items-center justify-center flex-col sm:flex-row gap-4">
                        <UButton to="https://www.facebook.com/groups/1587962561968530" target="_blank" size="lg" class="text-[#22c55ebf] bg-white rounded-3xl px-6 py-4 w-full justify-center sm:max-w-fit !no-underline uppercase" variant="ghost" color="none">
                            Join the GAK Deal Hunters group
                        </UButton>
                        <UButton
                            :to="localePath({name: 'gak-official'})"
                            size="lg"
                            class="!text-white border bg-[#22c55ebf] rounded-3xl px-6 py-4 justify-center w-full sm:max-w-[300px] !no-underline"
                            variant="ghost"
                            color="none">
                            GAK OFFICIAL
                        </UButton>
                    </span>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>

<script setup>
import images from 'assets/icons';
import { useLanguageLink } from '~/store/languageLink';
import { storeToRefs } from 'pinia';

const { locale, t: trans } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const slug = ref(router.currentRoute.value.params.slug);
let title = 'About GAK';
let pageDescription = 'Born from the perseverance of a dedicated team, we continue moving toward a new future — one that brings value to our customers and partners.'
const config = useRuntimeConfig();

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);

link.value = `/vi/ve-chung-toi`;

defineOgImageComponent('GAK', {
    title: title,
    description: pageDescription,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url:  config.public.logo,
});
let seoMeta = {
    description:  pageDescription,
    ogDescription:  pageDescription,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription:  pageDescription,
    keywords: title,
};
useSeoMeta(seoMeta);
</script>

<style lang="scss" scoped>
.about-us-image {
    position: relative;
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: linear-gradient(0deg, #000 -6.11%, rgba(0, 0, 0, 0) 124.54%);
        background: -webkit-gradient(linear, left bottom, left top, color-stop(-6.11%, #000), color-stop(124.54%, rgba(0, 0, 0, 0)));
        background-image: linear-gradient(transparent, #00000091);
    }
}
.about-content {
    background-color: #f1f1f1;
    .cs-about,
    .cs-caption,
    .cs-story {
        background-color: #f1f1f1;
    }
    .container--medium {
        max-width: 1280px;
        margin: 0 auto;
    }
    .cs-about__heading {
        font-size: 3.5rem;
        font-weight: 500;
        color: #000000;
        @media screen and (max-width: 567px) {
            font-size: 3rem;
            text-align: center;
        }
    }
    .cs-about__description {
        font-size: 1.125rem;
        font-weight: 500;
    }
    .cs-caption__wrapper {
        background-color: #000000;
        text-align: center;
        font-family: 'CriteriaCF';
        border-radius: 1.5rem;
        padding: 3rem 3rem;
        @media screen and (max-width: 567px) {
            padding: 2rem;
        }
        .cs-caption__heading {
            text-transform: initial;
            position: relative;
            margin-bottom: 3rem;
            color: #fff;
            font-size: 2rem;
            margin-top: 0;
            &::before {
                content: '';
                position: absolute;
                bottom: -35px;
                left: 50%;
                width: 200px;
                height: 1px;
                background-color: #fff;
                transform: translate(-50%, -50%);
            }
        }
        .cs-caption__author {
            color: #f2fd5d;
            font-size: 1.125rem;
        }
    }
    .cs-story__heading {
        font-weight: 500;
        font-size: 30px;
        line-height: 50px;
        position: relative;
        text-transform: uppercase;
    }
    .cs-services {
        background-color: white;
        padding: 32px 0;
    }
    .cs-services__heading {
        font-style: normal;
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 60px;
        text-align: center;
        text-transform: uppercase;
        padding: 0 5rem;
        @media screen and (max-width: 991px) {
            padding: 3rem;
        }
        @media screen and (max-width: 567px) {
            padding: 2rem;
        }
    }
    .cs-services__title {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        color: #2f5acf;
        text-transform: uppercase;
        font-family: 'CriteriaCF';
    }
    .cs-thanks {
        background-color: #176c36;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        .cs-thanks__heading {
            font-style: normal;
            text-align: center;
            color: #ffffff;
            font-size: 2.25rem;
            text-transform: initial;
        }
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
