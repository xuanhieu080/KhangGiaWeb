<template>
    <footer class="site-footer mobile--hidden">
        <div class="footer-container">
            <div class="site-footer__inner">
                <div class="site-footer__sidebar">
                    <div class="footer-about mb-6">
                        <h4 class="site-footer__title">COOLMATE lắng nghe bạn!</h4>
                        <p class="site-footer__description">
                            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm
                            dịch vụ và sản phẩm tốt hơn nữa.
                        </p>
                        <UButton
                            size="xl"
                            class=" hover:bg-white hover:text-black transition ease-in-out px-6 duration-300 rounded-2xl">
                            Đóng góp ý kiến
                        </UButton>
                    </div>
                    <div class="footer-contact">
                        <div class="footer-info">
                            <div class="footer-info__icon">
                                <img :src="images.icon_hotline" alt="Footer Icon Phone" />
                            </div>
                            <div class="footer-info__content">
                                <span class="footer-info__title"> Hotline </span>
                                <p class="footer-info__desciption">
                                    <a href="tel: 1900272737">1900.272737</a> - <a href="tel: 02877772737">028.7777.2737</a> <br />
                                    <span>(8:30 - 22:00)</span>
                                </p>
                            </div>
                        </div>
                        <div class="footer-info">
                            <div class="footer-info__icon">
                                <img :src="images.icon_email" alt="Footer Icon Email" />
                            </div>
                            <div class="footer-info__content">
                                <span class="footer-info__title"> Email </span>
                                <p class="footer-info__desciption"><a href="mailto: Cool@coolmate.me"> Cool@coolmate.me </a></p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/coolmate.me" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_facebook" alt="Footer Icon facebook"
                        /></a>
                        <a href="https://zalo.me/1517736583279228381" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_zalo" alt="Footer Icon Zalo"
                        /></a>
                        <a href="https://www.tiktok.com/@cool.coolmate" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_tiktok" alt="Footer Icon tiktok"
                        /></a>
                        <a href="https://www.instagram.com/coolmate.me/" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_instagram" alt="Footer Icon instar"
                        /></a>
                        <a href="https://www.youtube.com/channel/UCWw8wLlodKBtEvVt1tTAsMA" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_youtube" alt="Footer Icon youtube"
                        /></a>
                    </div>
                </div>
                <div class="site-footer__menu">
                    <div class="footer-menu">
                        <div class="footer-menu__item">
                            <h4 class="footer-menu__title">COOLCLUB</h4>
                            <ul>
                                <li>
                                    <a href="/page/coolclub-chuong-trinh-khach-hang-than-thiet-cua-coolmate?itm_source=footerm"
                                        >Đăng kí thành viên</a
                                    >
                                </li>
                                <li>
                                    <a href="/page/coolclub-chinh-sach-khach-hang-than-thiet?itm_source=footer">Ưu đãi &amp; Đặc quyền</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-menu__item">
                            <h4 class="footer-menu__title">Chính sách</h4>
                            <ul>
                                <li><a href="/page/dich-vu-60-ngay-doi-tra">Chính sách đổi trả 60 ngày</a></li>
                                <li><a href="/page/chuong-trinh-va-chinh-sach-khuyen-mai-tai-coolmate">Chính sách khuyến mãi</a></li>
                                <li><a href="/page/chinh-sach-bao-mat-thong-tin-ca-nhan">Chính sách bảo mật</a></li>
                                <li><a href="/page/dich-vu-giao-hang-coolmate">Chính sách giao hàng</a></li>
                            </ul>
                            <h4 class="footer-menu__title">Coolmate.me</h4>
                            <ul>
                                <li><a href="/page/changelog?itm_source=footer">Lịch sử thay đổi website</a></li>
                            </ul>
                        </div>
                        <div class="footer-menu__item">
                            <h4 class="footer-menu__title">Chăm sóc khách hàng</h4>
                            <ul>
                                <li><a href="/page/11-dich-vu-tai-coolmate-co-the-ban-chua-biet">Trải nghiệm mua sắm 100% hài lòng</a></li>
                                <li><a href="/page/faqs">Hỏi đáp - FAQs</a></li>
                            </ul>
                            <h4 class="footer-menu__title">Kiến thức mặc đẹp</h4>
                            <ul>
                                <li><a href="/size-chart">Hướng dẫn chọn size</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li>
                                    <a href="https://www.facebook.com/groups/2103080403316797" target="_blank">Group mặc đẹp sống chất</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-menu__item">
                            <h4 class="footer-menu__title">Tài liệu - Tuyển dụng</h4>
                            <ul>
                                <li><a href="/lp/coolmate-101?itm_source=footer#recruitment-jobs">Tuyển dụng</a></li>
                                <li>
                                    <a
                                        href="http://online.gov.vn/(X(1)S(sgmttobbtsiaq3l5itoicxhw))/Home/WebDetails/53184?AspxAutoDetectCookieSupport=1"
                                        target="_blank"
                                        >Đăng ký bản quyền</a
                                    >
                                </li>
                            </ul>
                            <h4 class="footer-menu__title">Về COOLMATE</h4>
                            <ul>
                                <li><a href="/lp/coolmate-101?itm_source=footer">Coolmate 101</a></li>
                                <li><a href="/page/11-dich-vu-tai-coolmate-co-the-ban-chua-biet?itm_source=footer">DVKH xuất sắc</a></li>
                                <li><a href="/page/coolmate-story?itm_source=footer"> Câu chuyện về Coolmate</a></li>
                                <li><a href="/page/san-pham-coolmate-duoc-san-xuat-nhu-the-nao?itm_source=footer">Nhà máy</a></li>
                                <li><a href="/collection/care-and-share?itm_source=footer">Care &amp; Share</a></li>
                            </ul>
                        </div>
                        <div class="footer-menu__item">
                            <h4 class="footer-menu__title">Địa chỉ liên hệ</h4>
                            <p class="footer-menu__desciption">
                                <u>Văn phòng Hà Nội:</u> Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng Hưng, Phường Phúc La, Quận Hà Đông, TP Hà
                                Nội
                            </p>
                            <p class="footer-menu__desciption">
                                <u>Văn phòng Tp HCM:</u> Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="false" class="site-footer__after">
                <div class="copyright">
                    <h5 class="copyright__title">@ CÔNG TY TNHH FASTECH ASIA</h5>
                    <p class="copyright__description">
                        Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu
                        ngày 20/02/2019.
                    </p>
                </div>
                <div class="site-footer__logo">
                    <a
                        href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/coolmateme-1646213826"
                        title="Chung nhan Tin Nhiem Mang"
                        target="_blank"
                        style="margin-right: 10px"
                        ><img
                            src="https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/handle_cert.png"
                            alt="Chung nhan Tin Nhiem Mang"
                            style="max-height: 40px"
                    /></a>
                    <a
                        href="https://www.dmca.com/Protection/Status.aspx?ID=c6fdbdee-127c-4cf1-923d-7efe75201df6&amp;refurl=https://www.coolmate.me/"
                        title="DMCA.com Protection Status"
                        target="_blank"
                        class="dmca-badge"
                        style="margin-right: 10px"
                        ><img
                            src="https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/dmca_protected_15_120.png"
                            alt="DMCA.com Protection Status"
                            style="max-height: 40px"
                    /></a>
                    <a href="#" style="margin-right: 10px"
                        ><img src="https://static.coolmate.me/images/footer/Coolmate-info.png" alt="Coolmate info" width="39" height="40"
                    /></a>
                    <a
                        href="http://online.gov.vn/(X(1)S(3e0hkhscv5zs101mhuopx43a))/Home/WebDetails/53184?AspxAutoDetectCookieSupport=1"
                        target="_blank"
                        ><img src="https://static.coolmate.me/images/footer/logoSaleNoti.png" alt="Coolmate info" width="106" height="40"
                    /></a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
import images from '@/assets/icons/index'
</script>
<style lang="scss" scoped>
.site-footer {
    background-color: #000;
    color: #fff;
    padding: 30px 0;
    font-size: 13px;
    line-height: 160%;
    color: #d9d9d9;
    .footer-container {
        padding-left: 16px;
        padding-right: 16px;
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
        .site-footer__inner {
            @apply flex p-2.5 lg:pb-8 flex-col;
            .site-footer__sidebar {
                width: 100%;
                max-width: unset;
                display: flex;
                gap: 8%;
                justify-content: space-between;
                border-bottom: 1px solid #d9d9d942;
                margin-bottom: 2rem;
                @media screen and (max-width: 991px) {
                    flex-direction: column;
                }
                .site-footer__title {
                    font-weight: 600;
                    font-size: 21px;
                    line-height: 27px;
                    color: #fff;
                    margin-bottom: 6px;
                }
                .site-footer__description {
                    @apply w-full lg:max-w-[500px];
                    margin-top: 30px;
                }
                .footer-contact {
                    @apply w-full lg:w-1/4;
                    @media screen and (max-width: 991px) {
                        @apply flex gap-6;
                    }
                    @media screen and (max-width: 420px) {
                        @apply flex-col gap-4;
                    }
                    .footer-info {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        font-weight: 500;
                        font-size: 13px;
                        color: #fff;
                        margin-bottom: 12px;
                        @media screen and (max-width: 991px) {
                            @apply items-start;
                        }
                        .footer-info__icon {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 30px;
                            height: 30px;
                            margin-right: 15px;
                        }
                        .footer-info__content {
                            .footer-info__title {
                                font-weight: normal;
                            }
                            .footer-info__desciption {
                                font-weight: 700;
                                margin: 0;
                                @apply lg:text-[1.2em];
                            }
                        }
                    }
                }
                .footer-social {
                    display: flex;
                    padding: 25px 0;
                    @apply w-full;
                    @media screen and (min-width: 992px) {
                        width: unset;
                        padding-right: 40px;
                        justify-content: center;
                        .footer-social__item + .footer-social__item {
                            margin-left: 50px;
                            min-width: 33px;
                        }
                    }
                    .footer-social__item {
                        transition: all 0.2s;
                        flex: 1;
                        display: flex;
                        align-items: center;
                        width: 17%;
                        height: 30px;
                        @media screen and (min-width: 992px) {
                            height: 50px;
                            flex: unset;
                            width: unset;
                        }
                        img {
                            object-fit: contain;
                            width: 100%;
                            height: 100%;
                            object-position: left;
                        }
                    }
                }
            }
            .site-footer__menu {
                flex: 1;

                padding-right: 130px;
                @media screen and (max-width: 991px) {
                    padding-right: 0;
                }
                @apply lg:pr-0;
                .footer-menu {
                    display: flex;
                    justify-content: space-between;
                    @media screen and (max-width: 767px) {
                        @apply grid grid-cols-3;
                    }
                    @media screen and (max-width: 567px) {
                        @apply grid grid-cols-2;
                    }
                    &__item {
                        flex: 1;
                        font-size: 13px;
                        line-height: 200%;
                        color: #d9d9d9;
                        max-width: 160px;
                        @apply lg:max-w-none;
                        .footer-menu__title {
                            text-transform: uppercase;
                            font-weight: 900;
                            color: white;
                        }
                        @media screen and (max-width: 767px) {
                            &:last-child {
                                @apply col-span-2;
                                max-width: max-content;
                            }
                        }
                    }
                }
            }
        }
        .site-footer__after {
            display: flex;
            align-items: flex-end;
            border-top: 1px solid #d9d9d9;
            padding-top: 16px;
            @media screen and (min-width: 992px) {
                border-top: 1px solid #d9d9d942;
            }
            @media screen and (max-width: 567px) {
                @apply flex-col items-start gap-4;
            }
            .copyright {
                flex: 1;
                .copyright__title,
                .copyright__description {
                    font-size: 12px;
                    line-height: 14px;
                    letter-spacing: 0.03em;
                    color: #fff;
                }
                .copyright__description {
                    margin: 0;
                }
            }
            .site-footer__logo {
                @apply flex;
                img {
                    object-fit: contain;
                }
            }
        }
    }
}
</style>
