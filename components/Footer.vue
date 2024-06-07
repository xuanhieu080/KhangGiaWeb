<template>
    <footer class="site-footer mobile--hidden">
        <div class="footer-container">
            <div class="site-footer__inner">
                <div class="site-footer__sidebar">
                    <div class="footer-about mb-6">
                        <h4 class="site-footer__title">Công ty GAK tận tâm & tử tế trên từng sản phẩm</h4>
                        <p class="site-footer__description">
                            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm
                            dịch vụ và sản phẩm tốt hơn nữa.
                        </p>
                        <UButton
                            size="xl"
                            to="https://jrsiigcg6eu.typeform.com/to/Fjpxmsmz"
                            rel="nofollow"
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
                                    <a href="tel: 0569133339">056.913.33.39</a> - <a href="tel: 0947636569">094.763.65.69</a> <br />
                                    <span>(8:00 - 17:30)</span>
                                </p>
                            </div>
                        </div>
                        <div class="footer-info">
                            <div class="footer-info__icon">
                                <img :src="images.icon_email" alt="Footer Icon Email" />
                            </div>
                            <div class="footer-info__content">
                                <span class="footer-info__title"> Email </span>
                                <p class="footer-info__desciption"><a href="mailto:ctygak@gmail.com"> ctygak@gmail.com </a></p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/GAKBHLD" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_facebook" alt="Footer Icon facebook"
                        /></a>
                        <a href="https://zalo.me/569133339" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_zalo" alt="Footer Icon Zalo"
                        /></a>
                        <a href="https://www.tiktok.com/@congtygak" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_tiktok" alt="Footer Icon tiktok"
                        /></a>
                        <a href="https://www.instagram.com/congtygak/" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_instagram" alt="Footer Icon instar"
                        /></a>
                        <a href="https://twitter.com/congtygak" target="_blank" class="footer-social__item"
                            ><img :src="images.logo_youtube" alt="Footer Icon youtube"
                        /></a>
                    </div>
                </div>
                <div class="site-footer__menu">
                    <div class="footer-menu">
                        <div v-for="pageGroup in pageGroups" class="footer-menu__item">
                               <div v-for="item in pageGroup">
                                   <h4 class="footer-menu__title">{{item.name}}</h4>
                                      <ul>
                                          <li v-for="page in item.details">
                                              <NuxtLink v-if="page.is_button" :to="localePath( page.link )">{{page.name}}</NuxtLink>
                                              <NuxtLink v-else :to="localePath({ name: 'slug', params:{slug: page.slug} })">{{page.name}}</NuxtLink>
                                          </li>
                                      </ul>
                               </div>
                        </div>
                        <div class="footer-menu__item">
                            <h4 class="footer-menu__title">Địa chỉ liên hệ</h4>
                            <p class="footer-menu__desciption">
                                <u>Văn phòng Tp HCM:</u> 15 Lê Minh Xuân, Phường 7, Tân Bình, Thành phố Hồ Chí Minh 700000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </footer>
</template>
<script setup>
import images from '@/assets/icons/index';
import { useMain } from '@@/store/index';
import { storeToRefs } from 'pinia';

const useMainStore = useMain();
const {getPageGroup} = useMain();
const localePath = useLocalePath();

const {pageGroups} = storeToRefs(useMainStore)

if (pageGroups.value.length == 0) {
    getPageGroup();
}

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
