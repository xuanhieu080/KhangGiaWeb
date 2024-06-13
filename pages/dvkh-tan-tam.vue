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
                <h1 class="font-bold !text-[24px] md:!text-[54px] 2xl:!text-[64px] !my-2">CÂU CHUYỆN VỀ CÔNG TY GAK</h1>
                <span class="text-lg xl:text-xl"
                    >Đây là chuyên mục giúp các bạn biết được GAK đã hình thành ra sao và chúng tôi muốn xây dựng một hình mẫu như thế
                    nào!</span
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
                        <span class="max-w-[150px] text-lg">{{ $t('Câu chuyện về GAK') }}</span>
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
                        <span class="max-w-[150px] text-lg">Văn hóa <br />GAK</span>
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
                        <span class="max-w-[150px] text-lg">Trải nghiệm <br />98% hài lòng</span>
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
                        <span class="max-w-[150px] text-lg">{{ $t('Câu chuyện về GAK') }}</span>
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
                        <span class="max-w-[150px] text-lg">Văn hóa <br />GAK</span>
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
                        <span class="max-w-[150px] text-lg">Trải nghiệm <br />98% hài lòng</span>
                    </div>
                    <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                    </div>
                </UButton>
        </div>
        <div class="about-content pt-6 md:!pt-[5rem] mx-auto">
            <section class="cs-caption pt-4 pb-8">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-about__heading w-full text-center !my-6">CÔNG TY GAK XIN CHÀO !</h2>
                    <div class="cs-caption__wrapper !bg-[#2f5acf]">
                        <div class="cs-content">
                            <p>
                                Bạn ơi, chúng mình cảm ơn bạn đã lựa chọn các sản phẩm công ty GAK. Bạn biết không nhờ vào sự tin yêu và tấm
                                lòng của bạn đã và đang giúp các nhân viên tại GAK có cuộc sống tốt hơn từng ngày.
                            </p>
                            <p>
                                Chúng tớ biết mặc dù thương mại điện tử thật sự đang phổ biến, nhưng vẫn có một chút sự phức tạp khi bấm vào
                                nút đặt hàng. Bạn xinh yêu ơi, nếu bạn đang gặp khó khăn trong hành trình mua hàng của mình, hãy liên hệ tới
                                đội CSKH của GAK nha.
                            </p>
                            <p>
                                À bạn ơi, mỗi một sản phẩm trên gian hàng của GAK đều là ảnh sản phẩm thực tế, nhưng đôi lúc cũng có một
                                chút sai lệch về màu sắc, nên nếu bạn cảm thấy không giống những gì mình hình dung hãy hỏi GAK nha. Chúng tớ
                                luôn và luôn luôn bên bạn trước và sau bán hàng ạ.
                            </p>
                            <p>
                                Tại GAK chúng tớ đi lên bởi sự tử tế, tỉ mỉ và không ngừng tập trung cải thiện sản phẩm, từ nguồn sợi, cho
                                đến công nghệ may mặc. Bởi chỉ có sự tận tâm và gia tăng giá trị sản phẩm mới đem lại sự tin yêu của khách
                                hàng và làm hài lòng những người bạn đang đồng hành cùng chúng tớ. Cảm ơn bạn đã chọn Công ty GAK!!!!
                            </p>
                            <strong class="text-white"> Khám phá hành trình mua sắm Online tại GAK nhé </strong>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-services pt-6 lg:pt-[128px]">
                <div class="container container--medium prose prose-lg space-y-16">
                    <div id="services1" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling items-end">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">ĐẶT HÀNG ONLINE THÔNG TIN RÕ RÀNG</h3>
                                <div class="cs-services__description">
                                    <p>Chúng tớ tin rằng sự minh bạch và đạo đức là nền tảng của một mối quan hệ kinh doanh thành công.</p>
                                    <p>
                                        Đó là lý do tại sao chúng tớ luôn cam kết cung cấp thông tin rõ ràng và minh bạch đến từng khách
                                        hàng, từ mỗi giao dịch đặt hàng online cho đến những đơn hàng theo dự án.
                                    </p>
                                    <p>
                                        Khi bạn chọn GAK, bạn không chỉ nhận được sản phẩm chất lượng, mà còn được trải nghiệm một quy trình
                                        mua sắm trực tuyến mượt mà và đáng tin cậy.
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
                                <h3 class="cs-services__title">CHĂM SÓC ĐƠN ĐẶT HÀNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Tại GAK chúng tớ tin rằng sự ân cần và tận tâm là nguồn động lực giúp thể hiện tinh thần tử tế. Mỗi
                                        khi bạn đặt hàng, chúng tớ sử dụng thông tin đơn hàng sẽ kết nối tới bạn để tư vấn và hướng dẫn bạn
                                        thủ tục thanh toán để lên đơn hàng nhanh chóng .
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
                                <h3 class="cs-services__title">VĂN HOÁ BE KIND CẨN THẬN VÀ TỈ MỈ</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Chúng tớ cam kết với bạn rằng, từng sản phẩm mà đặt mua đều được đối xử tích cực, từ khi nó được may
                                        mặc ra, in ấn, đóng gói - vận chuyển để đến tay bạn với sự chỉn chu nhất có thể.
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
                    <div class="services-thankyou__content">Trong cuộc sống có quá nhiều sự lựa chọn, cảm ơn bạn đã chọn GAK!</div>
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
                        Tham gia hội săn Deal GAK - Nhận ngay thông tin ưu đãi, xả kho và live stream tặng quà cực sốc!!!
                    </h2>
                    <span class="flex items-center justify-center flex-col sm:flex-row gap-4">
                        <UButton to="https://www.facebook.com/groups/1587962561968530" target="_blank" size="lg" class="text-[#22c55ebf] bg-white rounded-3xl px-6 py-4 w-full justify-center sm:max-w-fit no-underline uppercase" variant="ghost" color="none">
                            Tham gia hội săn Deal GAK
                        </UButton>
                        <UButton
                            :to="localePath({name: 'gak-official'})"
                            size="lg"
                            class="border bg-[#22c55ebf] rounded-3xl text-white px-6 py-4 justify-center w-full sm:max-w-[300px] no-underline"
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

const router = useRouter();
const localePath = useLocalePath();
const slug = ref(router.currentRoute.value.params.slug);

let title = 'CSKH GAK tận tâm và hành trình mua sắm tận gốc!';
let pageDescription = 'Cảm ơn bạn đã chọn GAK, chúng tôi ở đây là vì bạn, không ngừng cải thiện tất cả dịch vụ để bạn luôn hài lòng và có những trải nghiệm tốt nhất tại GAK.'
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
