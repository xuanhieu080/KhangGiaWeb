<template>
    <NuxtLayout name="main">
        <div class="about-us-image relative">
            <NuxtImg
                class="w-full h-[500px] object-cover"
                loading="lazy"
                format="webp"
                :src="'https://mcdn.coolmate.me/image/December2023/mceclip0_81.jpg'"
                alt="" />
            <div
                class="about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10">
                <h1 class="font-bold !text-[54px] 2xl:!text-[64px] !my-2">CÂU CHUYỆN VỀ CÔNG TY GAK</h1>
                <span class="text-lg xl:text-xl"
                    >Đây là chuyên mục giúp các bạn biết được GAK đã hình thành ra sao và chúng tôi muốn xây dựng một hình mẫu như thế
                    nào!</span
                >
            </div>
            <div class="flex justify-center gap-4 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({name: 'page-gak-story'})"
                    class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full max-w-[300px] border-2 border-green-500 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" :src="images.logo" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">{{ $t('Câu chuyện về GAK') }}</span>
                    </div>
                    <div class="go-btn bg-green-500 h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: 'page-van-hoa-gak' })"
                    class="about-us-button !bg-white p-4  rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" src="/images/loa.png" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">VĂN HÓA <br />GAK</span>
                    </div>
                    <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-black" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    :to="localePath({name: 'page-gak-be-kind'})"
                    color="none"
                    class="about-us-button !bg-white p-4  rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" src="/images/star-blink.png" />
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
        <div class="about-content !pt-[5rem] mx-auto">
            <section class="cs-about">
                <div class="container container--medium prose prose-lg lg:prose-2xl">
                    <div class="grid lg:grid-cols-2 gap-6 lg:gap-4">
                        <div class="grid__column five-twelfths mobile--one-whole">
                            <div class="cs-about__content">
                                <h2 class="cs-about__heading">
                                    GAK sinh <br />
                                    ra để làm gì?
                                </h2>
                                <div class="cs-about__image">
                                    <img src="https://mcdn.coolmate.me/image/October2023/mceclip0_56.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="grid__column seven-twelfths mobile--one-whole">
                            <div class="cs-about__description">
                                <p>
                                    Được hình thành trong những giai đoạn khó khăn nhất của nền kinh tế, chúng tôi đi lên từ chất lượng, sự
                                    tận tâm và không ngừng đeo đuổi những giá trị tốt nhất để cải thiện đời sống của con người Việt Nam.
                                </p>
                                <p>
                                    Mô hình phát triển bền vững của chúng tôi gói gọn trong 3 chữ GAK tinh hoa của Gia - An - Khang là một
                                    nơi mà không chỉ hướng tới người lao động mà còn đem lại giá trị bền vững cho phía đối tác.
                                </p>
                                <p>
                                    Thông qua những hành động thực tế và cách cư xử tử tế trên nhiều phương diện, để ngày hôm nay chúng tôi
                                    tự hào là nhà sản xuất đa dạng các sản phẩm bảo hộ lao động, vải, lưới, đồng phục có chất lượng dẫn đầu
                                    thị trường và đem lại sự thịnh vượng cho mọi khách hàng.
                                </p>

                                <div class="mobile--visible" style="display: none; max-width: 60%; margin: 0px auto">
                                    <img src="https://mcdn.coolmate.me/image/October2023/mceclip0_56.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-caption">
                <div class="container container--medium prose prose-lg">
                    <div class="cs-caption__wrapper">
                        <h2 class="cs-caption__heading">
                            <span>“</span>Chúng tôi tin rằng việc xây dựng công ty theo mô hình doanh nghiệp có trách nhiệm, sự tử tế và cân
                            bằng để mang tới quyền lợi tốt nhất cho người lao động, khách hàng, đối tác sẽ tạo ra hệ sinh thái phát triển
                            bền vững không chỉ riêng cho chúng tôi. <span>“</span>
                        </h2>
                        <span class="cs-caption__author"> Công ty GAK </span>
                    </div>
                </div>
            </section>
            <section class="cs-story">
                <div class="container container--medium prose prose-lg">
                    <div class="grid grid-cols-1 lg:grid-cols-5 grid--mobile-rev">
                        <div class="grid__column mobile--one-whole lg:col-span-2 p-4">
                            <div class="cs-story__image w-full h-full">
                                <img
                                    src="https://mcdn.coolmate.me/uploads/April2022/1-8_14.jpg"
                                    class="w-full object-cover rounded-lg"
                                    alt="image" />
                            </div>
                        </div>
                        <div class="grid__column mobile--one-whole my-auto col-span-3">
                            <div class="cs-story__content lg:py-[25px] pl-4 lg:pl-[45px]">
                                <h2 class="cs-story__heading">WHO WE ARE!</h2>
                                <div class="ca-story__description">
                                    <p>
                                        Công ty GAK là ước mơ ấp ủ của những con người vượt khó, nuôi dưỡng ước mơ thương hiệu Việt vươn tầm
                                        năm châu. Với quan niệm sự tử tế trong kinh doanh và tập trung vào chất lượng sản phẩm. Thế nên,
                                        nguồn sản phẩm chủ lực của chúng tôi dần chiếm lĩnh thị trường quần áo bảo hộ lao động, vải, lưới và
                                        đồng phục.
                                    </p>
                                    <p>
                                        Với định hướng phát triển D2C, chúng tôi tin rằng những hành động trong hành trình kế tiếp của mình
                                        sẽ đem lại lợi ích tối đa cho khách hàng từ sự hài lòng cho đến lòng tin của khách hàng ở những sản
                                        phẩm cốt lõi của chúng tôi.
                                    </p>
                                    <p>
                                        Và chắc chắn không dừng ở đó, hiện nay với quy trình sản xuất khép kín từ dệt - nhuộm vải cho đến
                                        xưởng may gần 3000m2 và hệ thống kho bãi tại Hồ Chí Minh. Công ty GAK tin rằng chúng tôi có cơ sở về
                                        GIÁ TỐT và năng lực sản xuất tại thị trường Việt Nam và xuất khẩu Quốc Tế!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-services">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-services__heading">Câu chuyện mô hình doanh nghiệp CÓ TRÁCH NHIỆM Coolmate đang hướng tới</h2>
                    <div id="services1" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#1 TỬ TẾ VỚI KHÁCH HÀNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Công ty GAK cam kết những sản phẩm có giá hợp lý và chất lượng cao bởi sự may đo của những người thợ
                                        may giàu kinh nghiệm, cùng chuỗi cung ứng khép kín từ gốc (với ngành may mặc đó là từ sợi, dệt,
                                        nhuộm và may).
                                    </p>
                                    <p>
                                        Ngoài ra mô hình bán hàng trực tiếp (Ecommerce D2C) cho phép GAK tập trung vào nghiên cứu, sản xuất
                                        và cải tiến sản phẩm hơn là giảm giá vốn như các mô hình truyền thống! Bởi vì điều đó hơn 21% khách
                                        hàng đã dần trở thành đại lý phân phối sản phẩm của chúng tôi và cùng thịnh vượng.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img
                                    src="https://mcdn.coolmate.me/uploads/April2022/Group_1_(1).png"
                                    class="w-full object-cover"
                                    alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services2" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column lg:order-2 my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#2. TỬ TẾ VỚI NGƯỜI LAO ĐỘNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Công ty GAK hoạt động dựa trên một tập thể đoàn kết, chia sẻ và tử tế với nhau để không ngừng xây
                                        dựng văn hóa doanh nghiệp, Mà ở đó các bạn trẻ, người lao động sẽ được đào tạo, trao quyền và lộ
                                        trình phát triển nghề nghiệp xứng đáng. Cùng sự ghi nhận và mức phần thưởng cho sự cố gắng từng năm
                                        rõ ràng và minh bạch.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image w-full">
                                <img
                                    src="https://mcdn.coolmate.me/uploads/April2022/sn34-5_2.png"
                                    class="w-full object-cover"
                                    alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services3" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#3. TỬ TẾ VỚI ĐỐI TÁC</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Chúng tôi xem đối tác không chỉ là những nhà phân phối thương mại mà còn là nhân tố đồng hành trong
                                        hành trình phát triển đến sự thịnh vượng chung. Bằng chính cam kết xây dựng một môi trường hợp tác
                                        chặt chẽ, minh bạch và lâu dài. Mỗi một đối tác - đại lý - doanh nghiệp khi hợp tác cùng chúng tôi
                                        là sự tôn trọng và trân trọng để cùng nhau tạo ra giá trị và thành công bền vững.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img src="https://mcdn.coolmate.me/uploads/April2022/Group_1.jpg" class="w-full object-cover" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services4" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto lg:order-2">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#4. TỬ TẾ VỚI MÔI TRƯỜNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Công ty GAK cam kết không chỉ tạo ra giá trị cho cộng đồng và đối tác mà còn bảo vệ và gìn giữ môi
                                        trường. Chúng tôi nhận thức rõ ràng bảo vệ môi trường không chỉ là trách nhiệm của mỗi cá nhân mà
                                        còn là nhiệm vụ cho tươi lai của hàng triệu đứa trẻ. Qua hành động luôn tìm kiếm các vật liệu sợi
                                        mới và công nghệ tiến tiến để giảm thiểu lượng rác thải và ô nhiễm môi trường.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img
                                    src="https://mcdn.coolmate.me/uploads/April2022/Anh_chup_Man_hinh_2021-07-21_luc_16.png"
                                    class="w-full object-cover"
                                    alt="image" />
                            </div>
                        </div>
                    </div>
                    <div id="services5" class="grid lg:grid-cols-2 gap-6 grid--aligned-center grid--two-columns grid--doubling">
                        <div class="grid__column my-auto">
                            <div class="cs-services__content">
                                <h3 class="cs-services__title">#5. TỬ TẾ VỚI CỘNG ĐỒNG</h3>
                                <div class="cs-services__description">
                                    <p>
                                        Công ty GAK cam kết hỗ trợ và tạo ra những ảnh hưởng tích cực cho cộng đồng xung quanh thông qua các
                                        chương trình thiện nguyện từ tâm và dự án xã hội. Không ngừng tìm kiếm các cơ hội đầu tư vào giáo
                                        dục, văn hóa, và tạo hàng ngàn việc làm mỗi năm, giúp cho người lao động cải thiện cuộc sống và nâng
                                        cao chuyên môn nghề nghiệp qua từng năm.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="cs-services__image">
                                <img
                                    class="w-full object-cover"
                                    src="https://mcdn.coolmate.me/uploads/April2022/Thiet_ke_chua_co_ten_(2)_1.jpg"
                                    alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-thanks">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-thanks__heading">
                        Trong cuộc sống có quá nhiều sự lựa chọn, <br />
                        cảm ơn bạn đã lựa chọn GAK!
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
                <div class="grid lg:grid-cols-3 grid--aligned-center grid--three-columns grid--doubling">
                    <div class="grid__column">
                        <a href="https://coolmate.typeform.com/to/lU2oprGc" target="_blank"
                            ><img src="https://mcdn.coolmate.me/image/October2023/mceclip1_45.png" alt="Tim hiểu thêm Coolmate"
                        /></a>
                    </div>
                    <div class="grid__column">
                        <a href="/collections" target="_blank"
                            ><img src="https://mcdn.coolmate.me/image/October2023/mceclip2_96.png" alt="Khám phá ngay"
                        /></a>
                    </div>
                    <div class="grid__column">
                        <a href="/lp/coolmate-101" target="_blank"
                            ><img src="https://mcdn.coolmate.me/image/October2023/mceclip0_36.png" alt="Gia nhập ngay"
                        /></a>
                    </div>
                </div>
            </section>
            <section class="cs-cta">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-cta__heading">Tham gia GAK - Nhận ngay Voucher 15% + Hoàn tiền khi mua sắm</h2>
                    <span class="flex items-center justify-center flex-wrap gap-4">
                        <UButton size="lg" class="text-[#2f5acf] bg-white rounded-3xl px-6 py-4" variant="ghost" color="none">
                            <b class="uppercase">đăng ký miễn phí</b> hoặc <b class="uppercase">Đăng nhập</b>
                        </UButton>
                        <UButton
                            size="lg"
                            class="border border-white bg-[#2f5acf] rounded-3xl text-white px-6 py-4"
                            variant="ghost"
                            color="none">
                            Tìm hiểu đặc quyền Hội viên GAK
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
    background-color: white;
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
    }
    .cs-caption__wrapper {
        background-color: #000000;
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: center;
        font-family: 'CriteriaCF';
        border-radius: 1.5rem;
        padding: 3rem 3rem;
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
        padding-bottom: 15px;
        text-transform: uppercase;
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
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        color: #2f5acf;
        text-transform: uppercase;
        font-family: 'CriteriaCF';
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
    .cs-cta {
        background-color: #2f5acf;
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
