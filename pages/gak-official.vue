<template>
    <NuxtLayout name="main">
        <section class="pod-banner">
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
        <div class="about-content pt-8 mx-auto bg-white">
            
            <section class="cs-cta">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-cta__heading">
                        Tham gia hội săn Deal GAK - Nhận ngay thông tin ưu đãi, xả kho và live stream tặng quà cực sốc!!!
                    </h2>
                    <span class="flex items-center justify-center flex-col sm:flex-row gap-4">
                        <UButton
                            to="https://www.facebook.com/groups/1587962561968530"
                            target="_blank"
                            size="lg"
                            class="text-[#22c55ebf] bg-white rounded-3xl px-6 py-4 w-full justify-center sm:max-w-fit no-underline uppercase"
                            variant="ghost"
                            color="none">
                            Tham gia hội săn Deal GAK
                        </UButton>
                        <UButton
                            :to="localePath({ name: 'slug', params: { slug: 'van-hoa-cong-ty' } })"
                            size="lg"
                            class="border bg-[#22c55ebf] rounded-3xl text-white px-6 py-4 justify-center w-full sm:max-w-[300px] no-underline"
                            variant="ghost"
                            color="none">
                            GAK OFFICIAL
                        </UButton>
                    </span>
                </div>
            </section>
            <div class="cs-faq-container py-8">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-faq__heading text-center w-full">FAQ - Câu hỏi thường gặp</h2>
                    <UAccordion multiple :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
                        <template #default="{ item, index, open }">
                            <UButton
                                color="gray"
                                variant="soft"
                                class="border-b text-black !justify-between border-gray-200 dark:border-gray-700"
                                :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                                <span class="text-xl">{{ index + 1 }}. {{ item.label }}</span>

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
                                <p>
                                    Hiện nay, có rất nhiều Xưởng may đồng phục giá rẻ tại Quận Tân Bình, TPHCM, toàn quốc..., đều có thể
                                    cung cấp tới bạn những chiếc đồng phục có chi phí tốt. Tuy nhiên bạn sẽ cần lưu ý những điều này để tìm
                                    ra công ty may in đồng phục có uy tín.
                                </p>
                                <ul class="marker:text-gray-700">
                                    <li>Xem xét <b>địa chỉ xưởng may</b> có thông tin liên hệ rõ ràng</li>
                                    <li>Xem xét <b>thời gian giao hàng</b> có đúng hẹn hay không</li>
                                    <li>Xem xét <b>có hỗ trợ thiết kế lại logo và lên bản thiết kế sản phẩm</b> miễn phí hay không</li>
                                    <li>
                                        Xem xét <b>nhân viên CSKH</b> có tư vấn nhiệt tình trong suốt quá trình và sau bán hàng hay không
                                    </li>
                                    <li>Xem xét <b>chất liệu vải</b> may đồng phục mặc có mát, bền màu hay không</li>
                                    <li>
                                        Xem xét <b>đánh giá của khách hàng</b> về cảm nhận của họ sau khi sử dụng dịch vụ hay chất lượng áo
                                        thun đồng phục sau một khoảng thời gian sử dụng
                                    </li>
                                </ul>
                                <span>
                                    Dựa theo những tiêu chí đánh giá địa chỉ xưởng may đồng phục uy tín bên trên, công ty GAK mong rằng nó
                                    sẽ giúp bạn tìm thấy công ty may có uy tín.
                                </span>
                            </div>
                        </template>
                        <template #item-2>
                            <div class="text-gray-900 dark:text-white px-3 text-lg">
                                <p>
                                    <b>Đồng phục công nhân giá rẻ, kém chất lượng</b> thường gây ảnh hưởng đến sức khoẻ người lao động. Vì
                                    những bộ quần áo này được họ sử dụng hằng ngày và cơ sở giúp họ bảo vệ mình khi có tai nạn vô tình xảy
                                    ra. Nên việc sử dụng nguồn vải kém chất lượng có thể gây ảnh hưởng tới hình ảnh của công ty và đặc biệt
                                    nguy hại tới sức khoẻ của người lao động.
                                </p>

                                <p>
                                    Tại GAK chúng tôi tự chủ sản xuất nguồn vải có chất lượng, đem lại sự an toàn, thoải mái khi vận động -
                                    làm việc, khả năng thấm hút co giãn tốt. Đặc biệt nhờ vào hệ sinh thái khép kín từ sợi, dệt, nhuộm cho
                                    tới in ấn chúng tôi luôn đảm bảo mọi bộ đồng phục công nhân luôn có chất lượng, giá thành cạnh tranh
                                    nhất thị trường. Hãy tìm hiểu thêm các sản phẩm có sẵn của chúng tôi!
                                </p>
                            </div>
                        </template>
                        <template #item-3>
                            <div class="text-gray-900 dark:text-white px-3 text-lg">
                                <p>
                                    <b>In ấn đồng phục chất lượng cao</b> đang là giải pháp giúp công ty bạn tăng cường hình ảnh chuyên
                                    nghiệp và xây dựng nhận diện thương hiệu cho doanh nghiệp của mình? Dưới đây là những lợi ích quan
                                    trọng:
                                </p>
                                <ul class="marker:text-gray-700">
                                    <li>
                                        Tạo ấn tượng chuyên nghiệp: Đồng phục là một cách hiệu quả để tạo ra một hình ảnh chuyên nghiệp và
                                        đồng nhất cho toàn bộ đội ngũ của bạn. Với bề dày kinh nghiệm trong ngành may, GAK cam kết mang lại
                                        những bộ đồng phục chất lượng, phản ánh sự chuyên nghiệp của doanh nghiệp.
                                    </li>
                                    <li>
                                        Nâng cao nhận diện thương hiệu: Logo và thông điệp của thương hiệu được in trên đồng phục không chỉ
                                        giúp khách hàng dễ dàng nhận ra bạn mà còn là một cách hiệu quả để quảng bá thương hiệu của bạn. GAK
                                        sẽ giúp bạn thiết kế và in ấn các mẫu đồng phục độc đáo, thể hiện đầy đủ giá trị và phong cách của
                                        thương hiệu.
                                    </li>
                                    <li>
                                        Tinh thần đồng đội: Đồng phục không chỉ là trang phục, mà còn là biểu tượng của sự đoàn kết và nhất
                                        quán trong tổ chức. GAK hiểu rõ giá trị của việc tạo sự gắn kết giữa các thành viên, và chúng tôi
                                        cam kết mang lại những bộ đồng phục đẹp mắt, tạo cảm giác kết nôi và đoàn kết cho nhân viên của bạn.
                                    </li>
                                    <li>
                                        Dịch vụ may đo cao cấp và chất lượng cao: GAK không chỉ cung cấp những mẫu đồng phục tiêu chuẩn mà
                                        còn chú trọng đến sự tùy chỉnh theo yêu cầu của khách hàng - công ty. Chúng tôi cam kết sử dụng vật
                                        liệu vải, khuy nút chất lượng cao và công nghệ in ấn tiên tiến để đảm bảo bạn nhận được sản phẩm
                                        hoàn hảo nhất.
                                    </li>
                                    <li>
                                        Giá trị hợp lý: GAK hiểu rằng việc đầu tư vào đồng phục cần phải hợp lý về chi phí. Với chính sách
                                        giá cạnh tranh và chất lượng sản phẩm được hoàn thiện tỉ mỉ, chúng tôi cam kết mang lại giá trị tốt
                                        nhất với mức chi phí bạn đã bỏ ra.
                                    </li>
                                </ul>
                                <span>
                                    Hãy để GAK trở thành đối tác đáng tin cậy của bạn trong việc thiết kế trang phục cao cấp và may đồng
                                    phục chất lượng . Liên hệ với chúng tôi ngay hôm nay để bắt đầu hành trình tạo ra một hình ảnh chuyên
                                    nghiệp và thương hiệu ấn tượng cho doanh nghiệp của bạn!
                                </span>
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
import { Grid } from 'swiper/modules';
import ArticleCard from '@/components/articles/ArticleCard.vue';
let modules = ref([Grid]);

defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});
const router = useRouter();
const localePath = useLocalePath();
const slug = ref(router.currentRoute.value.params.slug);

const items = [
    {
        label: 'Địa chỉ công ty GAK',
        slot: 'item-1',
        defaultOpen: true,
    },
    {
        label: 'Công ty GAK có lừa đảo không',
        slot: 'item-2',
    },
    {
        label: 'Những nền tảng mạng xã hội của GAK',
        slot: 'item-3',
    },
    {
        label: 'Những nền tảng mạng xã hội của GAK',
        slot: 'item-4',
    },
];
let title = 'GAK Official';
const config = useRuntimeConfig();

defineOgImageComponent('GAK', {
    title: title,
    description: config.public.description,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url: config.public.logo,
});
let seoMeta = {
    description: config.public.description,
    ogDescription: config.public.description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription: config.public.description,
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
.about-content {
    .container--medium {
        max-width: 1280px;
        margin: 0 auto;
    }
    .pod-why {
        margin-top: 2em;
        padding-bottom: 30px;
        .pod-why__heading {
            font-weight: 500;
            font-size: 36px;
            text-align: center;
        }
        .pod-why__card {
            display: flex;
            flex-flow: column;
            align-items: center;
            text-align: center;
            background: #f1f1f1;
            border-radius: 28px;
            row-gap: 22px;
            padding: 40px 35px;
            height: 100%;
            position: relative;
            color: black;
            @media (min-width: 1201px) and (max-width: 1440px) {
                padding: 30px 23px;
            }
            .card__item__icon {
                img {
                    margin: 0;
                }
                @media (min-width: 1201px) and (max-width: 1440px) {
                    width: 84px;
                }
            }
            .card__item__title {
                font-weight: 500;
                font-size: 24px;
                line-height: 1.4;
            }
            .card__item__description {
                line-height: 20px;
                font-size: 16px;
                color: #6b818c;
                margin-bottom: 0;
                @media (min-width: 1201px) and (max-width: 1440px) {
                    .card__item__description {
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .pod-activity {
        .pod-activity__card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #2f5acf;
            border-radius: 28px;
            padding: 50px 30px;
            @media screen and (max-width: 1200px) {
                flex-direction: column;
            }
            .pod-activity__heading-card {
                background: #fff;
                border-radius: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                padding: 50px 45px;
                @media screen and (max-width: 1200px) {
                    padding: 10px 20px;
                    width: 100%;
                    border-radius: 12px;
                    margin-bottom: 1em;
                }
                .pod-activity__heading-top {
                    width: 228px;
                    h2 {
                        font-size: 40px;
                        color: #2f5acf;
                        line-height: 51px;
                        font-weight: 500;
                    }
                    @media screen and (max-width: 1200px) {
                        width: 100%;
                        text-align: center;
                    }
                }
                .pod-activity__heading-cta {
                    width: 100%;
                    font-size: 16px;
                    color: #6b818c;
                    @media screen and (max-width: 1200px) {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    .btn--primary {
                        background-color: #f9f86c;
                        color: #000;
                        border: 2px solid #f9f86c;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        height: 40px;
                        border-radius: 16px;
                        padding: 0 30px;
                        transition: all 0.2s;
                    }
                }
            }
            .grid-item {
                padding: 0 20px;
                @media (min-width: 1201px) and (max-width: 1440px) {
                    padding: 0;
                    gap: 15px;
                    row-gap: 30px;
                    margin-left: 0;
                }
                @media (max-width: 1200px) {
                    row-gap: 50px;
                    padding: 0;
                    margin-bottom: 1em;
                    width: 100%;
                }
                .card__item {
                    margin-right: 0;
                    position: relative;
                    display: flex;
                    align-items: center;
                    flex-flow: column;
                    padding-left: 0;
                    padding-right: 0;
                    row-gap: 24px;
                    @media (min-width: 1201px) and (max-width: 1440px) {
                        margin-left: 0;
                    }
                    @media (max-width: 1200px) {
                        margin-left: 0;
                        text-align: center;
                        row-gap: 0;
                        flex-flow: row;
                        gap: 20px;
                    }
                    .card__item__content {
                        text-align: center;
                        color: #fff;
                        @media (max-width: 1200px) {
                            font-size: 14px;
                            text-align: left;
                            flex: 1;
                        }
                    }
                    &:not(:first-child):before {
                        content: '';
                        position: absolute;
                        width: 24px;
                        height: 24px;
                        background-image: url('/images/chevron-right-yellow-circle.png');
                        background-size: contain;
                        background-position: 50%;
                        left: -24px;
                        top: calc(20% - 7px);
                        @media (max-width: 1200px) {
                            left: 50%;
                            top: -45%;
                            width: 20px;
                            height: 20px;
                            transform: rotate(90deg);
                        }
                    }
                }
            }
            .card__item__title {
                font-size: 24px;
                font-weight: 700;
                @media (min-width: 1201px) and (max-width: 1440px) {
                    font-size: 20px;
                }
                @media (max-width: 1200px) {
                    font-size: 14px;
                    font-weight: 500;
                }
            }
            .card__item__description {
                padding: 0 70px;
                @media (min-width: 1201px) and (max-width: 1440px) {
                    padding: 0;
                    font-size: 14px;
                }
                @media (max-width: 1200px) {
                    padding: 0;
                    br {
                        display: none;
                    }
                    margin: 4px 0;
                }
            }
        }
    }
    .pod-products {
        margin-top: 3em;
        background-color: white;
        .pod-products__heading {
            font-weight: 500;
            font-size: 36px;
            text-align: center;
            margin-bottom: 24px;
        }
        .tab-content {
            .pod-grid {
                height: 100%;
                .pod-grid__inner {
                    background-color: #f1f1f1;
                    padding: 14px;
                    height: 100%;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 12px;
                    .pod-grid__thumbnail {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .pod-grid__image {
                            position: relative;
                            cursor: pointer;
                            width: 90%;
                        }
                    }

                    .pod-grid__tagline {
                        font-size: 14px;
                        line-height: 20px;
                        color: #6b818c;
                        text-align: center;
                        span {
                            font-size: 20px;
                            display: block;
                            color: #000;
                            font-weight: 500;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
    .pod-customer {
        background: #f3f5f6;
        color: #000;
        margin-top: 2em;
        padding-top: 32px;
        padding-bottom: 30px;
        text-align: center;
        border-radius: 24px;
        .pod-customer__heading {
            font-weight: 500;
            font-size: 36px;
            text-align: center;
            margin-bottom: 70px;
        }
        .pod-customer__content {
            max-width: 991px;
            margin: 0 auto;
            padding: 0 20px;
            img {
                width: 100%;
                height: 70px;
                margin: 0 auto 10px;
                -o-object-fit: contain;
                object-fit: contain;
                cursor: pointer;
                filter: grayscale(100%);
                transition: all 0.3s;
                opacity: 0.3;
            }
            &:hover,
            &.active {
                img {
                    filter: grayscale(0);
                    transition: all 0.3s;
                    opacity: 1;
                }
            }
        }
        .pod-customer__description {
            font-size: 18px;
            text-align: center;
            max-width: 820px;
            color: #3a4348;
            margin: 24px auto;
        }
    }
    .contact {
        background-color: #2f5acf;
        border-radius: 24px;
        position: relative;
        .contact__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            padding: 80px 100px;
            @media (min-width: 1201px) and (max-width: 1440px) {
                padding: 30px;
            }
            @media screen and (max-width: 1200px) {
                @apply flex-col-reverse gap-4;
                padding: 64px;
            }
            @media screen and (max-width: 991px) {
                padding: 32px;
            }
            .contact__content {
                display: flex;
                justify-content: space-between;
                flex-flow: column;
                max-width: 537px;
                color: #fff;
                @media screen and (max-width: 1200px) {
                    max-width: 100%;
                    @apply items-center flex-wrap;
                }
                .contact__content-title {
                    font-size: 28px;
                    margin-bottom: 48px;
                    color: #fff;
                }
                .contact__content-hotline {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    max-width: 463px;
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
                            color: #aebbc1;
                            margin: 0;
                        }
                    }
                }
                .contact__content-contact {
                    display: flex;
                    justify-content: space-between;
                    gap: 16px;
                    @media (max-width: 991px) {
                        @apply flex-wrap items-center justify-center;
                    }
                    max-width: 463px;
                    .contact__content-social {
                        border: 1px solid #fff;
                        border-radius: 16px;
                        padding: 10px 20px 10px 10px;
                        width: 220px;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        img {
                            width: 32px;
                            height: 32px;
                            object-fit: contain;
                        }
                    }
                }
            }
            .contact__form {
                border-radius: 24px;
                background: #fff;
                max-width: 578px;
                @media (max-width: 1200px) {
                    max-width: 100%;
                    width: 100%;
                }
                .xp-form {
                    padding: 80px 58px;
                    @apply flex flex-col gap-4;
                    @media (min-width: 1201px) and (max-width: 1440px) {
                        padding: 50px 30px;
                    }
                    .title {
                        color: #2f5acf;
                        font-size: 28px;
                        margin: 0 0 14px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
    .pod-factory {
        position: relative;
        margin-top: 3em;
        .pod-factory__banner {
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(105, 105, 105, 0.5);
            }
        }
        .pod-factory__info {
            position: absolute;
            top: 25%;
            left: 10%;
            max-width: 768px;
            color: #fff;
            h2 {
                font-size: 64px;
                color: #fff;
                @media screen and (max-width: 991px) {
                    font-size: 48px;
                }
            }
            p {
                font-size: 24px;
                @media screen and (max-width: 991px) {
                    font-size: 16px;
                }
            }
            @media screen and (max-width: 767px) {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
    .pod-tech {
        .pod-tech__heading {
            font-size: 36px;
            text-align: center;
            margin-bottom: 1em;
        }
        .pod-tech-slide {
            text-align: center;
            font-size: 18px;
            height: calc((100% - 24px) / 2) !important;
            border-radius: 12px;
            /* Center slide text vertically */
            @apply flex flex-col gap-4 items-center justify-start;
            img {
                height: 150px;
            }
        }
    }
    .blogs-grid-slide {
        padding: 0 60px;
        margin-top: 2em;
        border-radius: 20px;
        @media screen and (max-width: 991px) {
            padding: 0 16px;
        }
        .container {
            background-color: rgb(249, 248, 108);
        }
        .blogs-grid-slide__heading {
            font-size: 25px;
            font-weight: 700;
            padding: 24px;
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
