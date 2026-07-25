<template>
    <NuxtLayout name="main">
        <div class="about-us-image relative">
            <img class="w-full h-[500px] object-cover" loading="lazy" format="webp" src="/images/company-banner1.jpg" alt="" />
            <div
                class="about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10">
                <h1 class="font-bold !text-[24px] md:!text-[54px] 2xl:!text-[64px] !my-2">CÂU CHUYỆN VỀ CÔNG TY KHANG GIA</h1>
                <span class="text-lg xl:text-xl"
                    >Đây là chuyên mục giúp các bạn biết được Khang Gia đã hình thành ra sao và chúng tôi muốn xây dựng một hình mẫu như thế nào!</span
                >
            </div>
            <div class="hidden lg:flex justify-center gap-4 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: locale=='vi'? 'abouts-ve-chung-toi' : 'abouts-about-us' })"
                    class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full max-w-[300px] border-2 border-green-500 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <img class="h-full w-12 object-contain" alt="Logo Site" :src="images.logo" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">{{ $t('Câu chuyện về KG') }}</span>
                    </div>
                    <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    color="none"
                   :to="localePath({ name: locale=='vi' ? 'van-hoa-khang-gia': 'culture-khang-gia' })"
                    class="about-us-button bg-white p-4 rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <img class="h-full w-12 object-contain" alt="Logo Site" src="/images/loa.png" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Văn hóa <br />KG</span>
                    </div>
                    <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    :to="localePath({ name: locale == 'vi' ? 'dvkh-tan-tam' : 'dedicated-customer-care-service' })"
                    color="none"
                    class="about-us-button !bg-white p-4 rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <img class="h-full w-12 object-contain" alt="Logo Site" src="/images/star-blink.png" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Trải nghiệm <br />98% hài lòng</span>
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
                :to="localePath({ name: locale=='vi'? 'abouts-ve-chung-toi' : 'abouts-about-us' })"
                class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full border-2 border-green-500 items-center justify-between gap-4">
                <div class="flex justify-center">
                    <img class="h-full w-12 object-contain" alt="Logo Site" :src="images.logo" />
                </div>
                <div class="font-bold text-left flex-1 flex justify-start">
                    <span class="max-w-[150px] text-lg">{{ $t('Câu chuyện về KG') }}</span>
                </div>
                <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                    <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                </div>
            </UButton>
            <UButton
                variant="ghost"
                color="none"
               :to="localePath({ name: locale=='vi' ? 'van-hoa-khang-gia': 'culture-khang-gia' })"
                class="about-us-button bg-white p-4 rounded-2xl w-full border-2 items-center justify-between gap-4">
                <div class="flex justify-center">
                    <img class="h-full w-12 object-contain" alt="Logo Site" src="/images/loa.png" />
                </div>
                <div class="font-bold text-left flex-1 flex justify-start">
                    <span class="max-w-[150px] text-lg">Văn hóa <br />KG</span>
                </div>
                <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                    <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                </div>
            </UButton>
            <UButton
                variant="ghost"
                :to="localePath({ name: locale == 'vi' ? 'dvkh-tan-tam' : 'dedicated-customer-care-service' })"
                color="none"
                class="about-us-button !bg-white p-4 rounded-2xl w-full border-2 items-center justify-between gap-4">
                <div class="flex justify-center">
                    <img class="h-full w-12 object-contain" alt="Logo Site" src="/images/star-blink.png" />
                </div>
                <div class="font-bold text-left flex-1 flex justify-start">
                    <span class="max-w-[150px] text-lg">Trải nghiệm <br />98% hài lòng</span>
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
                                    KHANG GIA
                                </h2>
                                <div class="cs-about__image">
                                    <img src="/images/company-banner-box.jpg" class="h-full w-full object-contain !mt-4" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="grid__column seven-twelfths mobile--one-whole flex">
                            <div class="cs-about__description flex flex-col justify-center items-center flex-nowrap">
                                <p>
                                    Được xây dựng bởi những con người chăm chỉ, Khang Gia không chỉ là một doanh nghiệp mà nó còn là sự cam kết của chúng tôi về một nơi làm việc bền vững, ổn định trong mọi hoàn cảnh dành cho cán bộ công nhân viên, từ đó tạo nên một nên tảng cho tất cả mọi con người cùng vun đấp tạo dựng mái nhà chung.
                                </p>
                                <p>
                                    Mô hình phát triển bền vững của chúng tôi tập trung vào sự đảm bảo chất lượng cho từng sản phẩm trước xuất xưởng, đem lại sự an tâm cho khách hàng khi sử dụng sản phẩm, và nó là tiền đề quan trọng để mọi người lao động đi cùng chúng tôi cảm thấy cuộc sống được chăm sóc và tương lai nghề nghiệp.
                                </p>
                                <p>
                                    Thông qua những hành động thực tế và cách cư xử tử tế trên nhiều phương diện, để ngày hôm nay chúng tôi tự hào là nhà máy sản xuất quần áo với các chủng loại sản phẩm bảo hộ lao động, đồng phục doanh nghiệp, đồng phục công nhân có chất lượng dẫn đầu thị trường và đem lại sự thịnh vượng cho mọi khách hàng.
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
                            <span>“</span>Mỗi con người tại Khang Gia đều tài hoa, nhiệt huyết và sáng tạo. Chúng tôi tự tin các họ sẽ là một nguồn động lực mới để kiến tạo nên thành công của tập thể và Khang Gia hay bất kỳ thương hiệu Local Brand nào được sáng tạo từ đây đều có thể chinh phục tầm cao, vươn mình ra biển lớn. <span>“</span>
                        </h2>
                        <span class="cs-caption__author">Khang Gia Company</span>
                    </div>
                </div>
            </section>
            <section class="cs-story">
                <div class="container container--medium prose prose-lg">
                    <div class="grid grid-cols-1 lg:grid-cols-5 grid--mobile-rev">
                        <div class="grid__column mobile--one-whole lg:col-span-2 p-4">
                            <div class="cs-story__image w-full h-full">
                                <img class="w-full" loading="lazy" format="webp" src="/images/company-banner.jpg" alt="" />
                            </div>
                        </div>
                        <div class="grid__column mobile--one-whole my-auto col-span-3">
                            <div class="cs-story__content lg:py-[25px] pl-4 lg:pl-[45px]">
                                <h2 class="cs-story__heading">WHO WE ARE!</h2>
                                <div class="ca-story__description">
                                    <p>
                                        Công ty May Mặc Khang Gia không chỉ là một xưởng may trang phục, nó còn là đứa con tinh thần, tình yêu và sự đồng cảm của chúng tôi dành trọn cho cộng đồng. Chúng tôi ở đây để đề cao và tôn vinh nghề may và đeo đuổi những giá trị nhân văn “An tâm” - “An Khang” và xem người nhân viên như người em, người bạn của mình.
                                    </p>
                                    <p>
                                        Với định hướng phát triển D2C, chúng tôi tin rằng những hành động trong hành trình kế tiếp của mình sẽ đem lại lợi ích tối đa cho khách hàng từ sự hài lòng cho đến lòng tin của khách hàng ở những sản phẩm cốt lõi của chúng tôi.
                                    </p>
                                    <p>
                                        Với 15 năm trong ngành may mặc bảo hộ lao động, Khang Gia đã và đang đánh dấu một giai đoạn với cho sự mở rộng và định vị thương hiệu của mình trên bản đồ Việt Nam và khu vực, bằng chất lượng và sự minh bạch cho giá trị cốt lõi chung của sản phẩm Made By Khang Gia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-services">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-services__heading">Câu chuyện mô hình doanh nghiệp CÓ TRÁCH NHIỆM Khang Gia đang hướng tới</h2>
                    <div id="services1" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#1 TỬ TẾ VỚI KHÁCH HÀNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Công ty Khang Gia cam kết những sản phẩm có giá hợp lý và chất lượng cao bởi sự may đo của những người thợ may giàu kinh nghiệm, cùng chuỗi cung ứng khép kín từ gốc (với ngành may mặc đó là từ sợi, dệt, nhuộm và may).
                                    </p>
                                    <p>
                                        Ngoài ra mô hình bán hàng trực tiếp (Ecommerce D2C) cho phép Khang Gia tập trung vào nghiên cứu, sản xuất và cải tiến sản phẩm hơn là giảm giá vốn như các mô hình truyền thống! Bởi vì điều đó hơn 21% khách hàng đã dần trở thành đại lý phân phối sản phẩm của chúng tôi và cùng thịnh vượng.
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
                                <h3 class="cs-services__title">#2. TỬ TẾ VỚI NGƯỜI LAO ĐỘNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Công ty Khang Gia hoạt động dựa trên một tập thể đoàn kết, chia sẻ và tử tế với nhau để không ngừng xây dựng văn hóa doanh nghiệp, Mà ở đó các bạn trẻ, người lao động sẽ được đào tạo, trao quyền và lộ trình phát triển nghề nghiệp xứng đáng. Cùng sự ghi nhận và mức phần thưởng cho sự cố gắng từng năm rõ ràng và minh bạch.
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
                                <h3 class="cs-services__title">#3. TỬ TẾ VỚI ĐỐI TÁC</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Chúng tôi xem đối tác không chỉ là những nhà phân phối thương mại mà còn là nhân tố đồng hành trong hành trình phát triển đến sự thịnh vượng chung. Bằng chính cam kết xây dựng một môi trường hợp tác chặt chẽ, minh bạch và lâu dài. Mỗi một đối tác - đại lý - doanh nghiệp khi hợp tác cùng chúng tôi là sự tôn trọng và trân trọng để cùng nhau tạo ra giá trị và thành công bền vững.
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
                                        Công ty Khang Gia cam kết không chỉ tạo ra giá trị cho cộng đồng và đối tác mà còn bảo vệ và gìn giữ môi trường. Chúng tôi nhận thức rõ ràng bảo vệ môi trường không chỉ là trách nhiệm của mỗi cá nhân mà còn là nhiệm vụ cho tươi lai của hàng triệu đứa trẻ. Qua hành động luôn tìm kiếm các vật liệu sợi mới và công nghệ tiến tiến để giảm thiểu lượng rác thải và ô nhiễm môi trường.
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
                                <h3 class="cs-services__title">#5. TỬ TẾ VỚI CỘNG ĐỒNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Công ty Khang Gia cam kết hỗ trợ và tạo ra những ảnh hưởng tích cực cho cộng đồng xung quanh thông qua các chương trình đào tạo, tuyển dụng, thiện nguyện từ tâm và dự án xã hội. Không ngừng tìm kiếm các cơ hội đầu tư vào giáo dục, văn hóa, và tạo hàng ngàn việc làm mỗi năm, giúp cho người lao động cải thiện cuộc sống và nâng cao chuyên môn nghề nghiệp qua từng năm.
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
                        Trong cuộc sống có nhiều sự lựa chọn, <br />
                        cảm ơn bạn đã lựa chọn Khang Gia!
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
                        <NuxtLink :to="localePath({ name: locale == 'vi' ? 'dvkh-tan-tam' : 'dedicated-customer-care-service' })" target="_blank"
                            ><img src="/images/about-us-6.jpg" alt="Tìm hiểu thêm KHANG GIA"
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
                    <h2 class="cs-cta__heading">Tham gia hội săn Deal Khang Gia - Nhận ngay thông tin ưu đãi, xả kho và live stream tặng quà cực sốc!!!</h2>
                    <span class="flex items-center justify-center flex-col sm:flex-row gap-4">
                        <UButton to="https://www.fagcebook.com/groups/1587962561968530" target="_blank" size="lg" class="text-[#22c55ebf] bg-white rounded-3xl px-6 py-4 w-full justify-center sm:max-w-fit !no-underline uppercase" variant="ghost" color="none">
                            Tham gia hội săn Deal KG
                        </UButton>
                        <UButton
                            :to="localePath({name: 'khanggia-official'})"
                            size="lg"
                            class="border bg-[#22c55ebf] rounded-3xl !text-white px-6 py-4 justify-center w-full sm:max-w-[300px] !no-underline"
                            variant="ghost"
                            color="none">
                            KHANG GIA OFFICIAL
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

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);

link.value = `/en/about-us`;

const slug = ref(router.currentRoute.value.params.slug);
let title = 'Về công ty KHANG GIA';
let pageDescription = 'Được hình thành từ sự vượt khó của đội ngũ tận tâm, chúng tôi đã và đang tiến bước đến một tương lai mới mang lại giá trị cho khách hàng, đối tác của chúng tôi.'
const config = useRuntimeConfig();

defineOgImageComponent('KHANG GIA', {
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
