<template>
    <NuxtLayout name="main">
        <div class="about-us-image relative">
            <NuxtImg
                class="w-full h-[500px] object-cover"
                loading="lazy"
                format="webp"
                src="/images/company-banner.jpg"
                alt="" />
            <div
                class="about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10">
                <h1 class="font-bold !text-[24px] md:!text-[54px] 2xl:!text-[64px] !my-2">GAK STORY</h1>
                <span class="text-lg xl:text-xl"
                    >This section helps you understand how GAK came to be and what kind of model we want to build!</span
                >
            </div>
            <div class="hidden lg:flex justify-center gap-4 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: 've-chung-toi' })"
                    class="about-us-button !bg-white p-4 rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" :src="images.logo" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Gak Story</span>
                    </div>
                    <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: 'van-hoa-gak' })"
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
                    :to="localePath({ name: 'dvkh-tan-tam' })"
                    color="none"
                    class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full max-w-[300px] border-2 border-green-500 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain filter-green" alt="Logo Site" src="/images/star-blink.png" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Customer journey <br />98% satisfaction</span>
                    </div>
                    <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                    </div>
                </UButton>
            </div>
        </div>
        <div class="lg:hidden flex flex-col justify-between gap-4 my-4 px-4">
            <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: 've-chung-toi' })"
                    class="about-us-button !bg-white p-4 rounded-2xl w-full border-2 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" :src="images.logo" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Gak Story</span>
                    </div>
                    <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: 'van-hoa-gak' })"
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
                    :to="localePath({ name: 'dvkh-tan-tam' })"
                    color="none"
                    class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full border-2 border-green-500 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain filter-green" alt="Logo Site" src="/images/star-blink.png" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Customer journey <br />98% satisfaction</span>
                    </div>
                    <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                    </div>
                </UButton>
        </div>
        <div class="about-content pt-6 md:!pt-[5rem] mx-auto">
            <section class="cs-caption pt-4 pb-8">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-about__heading w-full text-center !my-6">WELCOME GAK</h2>
                    <div class="cs-caption__wrapper !bg-[#2f5acf]">
                        <div class="cs-content">
                            <p>
                                Dear valued customer, Thank you so much for choosing GAK's products. Your trust and support truly make a difference—it is because of kind customers like you that our team at GAK continues to build better lives every single day.
                            </p>
                            <p>
                                We understand that while e-commerce is becoming increasingly popular, clicking that "Order" button can still feel a little complicated at times. If you’re facing any difficulties during your shopping journey, please don’t hesitate to reach out to our GAK Customer Support Team—we’re always here to help you.
                            </p>
                            <p>
                                Also, please note that all product images on GAK’s online store are real photos of the actual items. However, due to lighting and screen differences, slight color variations may occur. If something doesn’t look quite like what you imagined, feel free to reach out and ask—we’re happy to assist before and after your purchase.
                            </p>
                            <p>
                                At GAK, our foundation is built on kindness, precision, and continuous improvement—from the sourcing of materials to the tailoring technology we use. We believe that only through dedication and adding real value to each product can we earn the trust and satisfaction of our customers and long-term partners.


                            </p>
                            <strong class="text-white"> Thank you once again for choosing GAK! We invite you to enjoy a smooth and meaningful online shopping journey with us. </strong>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-services pt-6 lg:pt-[128px]">
                <div class="container container--medium prose prose-lg space-y-16">
                    <div id="services1" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling items-end">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">ORDER ONLINE CLEAR INFORMATION</h3>
                                <div class="cs-services__description">
                                    <p>We believe that transparency and integrity are the foundation of a successful business relationship.</p>
                                    <p>
                                        That’s why we are committed to providing clear and transparent information to every customer—whether it’s an individual online order or a large-scale project.
                                    </p>
                                    <p>
                                        When you choose GAK, you're not only receiving high-quality products, but also experiencing a smooth and trustworthy online shopping process.
                                    </p>
                                </div>
                                <div class="cs-services-info__order">01</div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img src="/images/order-step-1.jpg" class="w-full object-cover" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services2" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling items-end">
                        <div class="grid__column lg:order-2">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">ORDER CARE</h3>
                                <div class="cs-services__description">
                                    <p>
                                        At GAK, we believe that thoughtfulness and dedication are the driving forces behind genuine kindness. Every time you place an order, we use your order information to connect with you—offering consultation and guiding you through the payment process to ensure your order is processed quickly and smoothly.
                                    </p>
                                </div>
                                <div class="cs-services-info__order !text-left">02</div>
                            </div>
                        </div>
                        <div class="grid__column flex items-end">
                            <div class="cs-services__image w-full">
                                <img src="/images/order-step-2.jpg" class="w-full object-cover mb-6" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services3" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling items-end">
                        <div class="grid__column">
                            <div class="cs-services__content flex flex-col gap-2">
                                <h3 class="cs-services__title">BE KIND CULTURE CAREFUL AND MECHANICAL</h3>
                                <div class="cs-services__description">
                                    <p>
                                        We assure you that every product you order is treated with care and integrity — from the moment it is tailored, printed, and packaged, to the moment it is delivered to your hands — with the utmost attention to detail.
                                    </p>
                                </div>
                                <div class="cs-services-info__order mt-auto">03</div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img src="/images/order-step-3.jpg" class="w-full object-cover" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="services-thankyou mt-8 lg:mt-[128px]">
                <div class="services-thankyou__wrapper">
                    <h2 class="services-thankyou__heading">THANK YOU!</h2>
                    <div class="services-thankyou__content">In a world full of choices, thank you for choosing GAK!</div>
                </div>
                <div class="services-thankyou__image">
                    <picture style="width: 100%"
                        ><source srcset="/images/order-thank-you.jpg" media="(max-width: 991px)" />
                        <img src="/images/order-thank-you.jpg" alt="Thanks you"
                    /></picture>
                </div>
            </section>
            <section class="cs-cta">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-cta__heading">
                        Join the GAK Deal Hunters group – Get instant updates on promotions, clearance sales, and shocking giveaway livestreams!!!
                    </h2>
                    <span class="flex items-center justify-center flex-col sm:flex-row gap-4">
                        <UButton to="https://www.facebook.com/groups/1587962561968530" target="_blank" size="lg" class="text-[#22c55ebf] bg-white rounded-3xl px-6 py-4 w-full justify-center sm:max-w-fit !no-underline uppercase" variant="ghost" color="none">
                            Join the GAK Deal Hunters group
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
        </div>
    </NuxtLayout>
</template>

<script setup>
import images from '@@/assets/icons';

const { locale, t: trans } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const slug = ref(router.currentRoute.value.params.slug);

let title = 'GAK’s dedicated customer service and a direct-to-source shopping journey!';
let pageDescription = 'Thank you for choosing GAK. We’re here for you — constantly improving our services so you’re always satisfied and have the best experience with us.'
const config = useRuntimeConfig();

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
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        color: #000000;
        font-size: 3.5rem;
        @media screen and (max-width: 567px) {
            font-size: 3rem;
            text-align: center;
        }
    }
    .cs-caption__wrapper {
        padding: 50px;
        border-radius: 1.5rem;
        color: white;

        .cs-content {
            color: #fff;
            font-size: 16px;
            line-height: 1.5em;
            padding: 0 3rem;
            position: relative;
            @media screen and (max-width: 767px) {
                padding: 0;
            }
            &:before {
                content: '';
                position: absolute;
                width: 70px;
                height: 70px;
                pointer-events: none;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: 20% top;
                background-image: url('/images/big-dash.png');
                top: -50px;
                left: 0;
                @media screen and (max-width: 567px) {
                    left: -24px;
                }
            }
        }
    }
    .cs-story__heading {
        font-weight: 500;
        font-size: 30px;
        line-height: 50px;
        position: relative;
        padding-bottom: 15px;
        text-transform: uppercase;
    }
    .cs-services {
        background-color: white;
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
    }
    .cs-services__title {
        font-style: normal;
        font-weight: 700;
        font-size: 2.25rem;
        line-height: 35px;
        color: black;
        text-transform: uppercase;
        max-width: 400px;
        margin: auto 0;
        @media screen and (max-width: 567px) {
            line-height: 1.4;
        }
    }
    .cs-services-info__order {
        color: #dedede;
        font-weight: 700;
        font-size: 10rem;
        line-height: 170px;
        text-align: right;
    }
    .cs-thanks {
        background-color: #2f5acf;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        margin-top: 30px;
        .cs-thanks__heading {
            font-style: normal;
            text-align: center;
            color: #ffffff;
            font-size: 2.25rem;
            text-transform: initial;
        }
    }
    .services-thankyou {
        background-color: #f3f3f5;
        position: relative;
        .services-thankyou__image {
            width: 100%;
            height: 100%;
        }
        .services-thankyou__image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .services-thankyou__wrapper {
            border-radius: 30px;
            text-align: center;
            padding: 32px 0;
            .services-thankyou__heading {
                font-size: 4rem;
                font-weight: 600;
                line-height: normal;
                margin-bottom: 0;
            }
            .services-thankyou__content {
                font-size: 24px;
                font-weight: 400;
            }
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
