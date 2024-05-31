<template>
    <NuxtLayout name="main">
        <section class="pod-banner">
            <video
                poster="/images/dat-may-background.jpg"
                src="/images/dat-may-background.jpg"
                muted="muted"
                autoplay="autoplay"
                loop="loop"
                playsinline=""
                class="pod-banner__video"
                style="pointer-events: none; display: none"></video>
            <img src="/images/dat-may-background.jpg" class="h-full w-full object-contain lg:object-cover" />
            <div class="pod-banner__filter"></div>
            <div v-if="true" class="container container--medium prose prose-lg h-full">
                <div class="pod-banner__content">
                    <h1 class="pod-banner__heading">Đặt may đồng phục</h1>
                    <p class="pod-banner__description">
                        May đo các loại đồng phục tận tâm<br />
                        100% sự hài lòng
                    </p>
                    <div class="pod-banner__policy">
                        <UButton
                            size="lg"
                            variant="ghost"
                            color="none"
                            class="pod-banner__button scroll-to-step bg-white text-[#2f5acf] !text-lg px-6 rounded-2xl font-semibold">
                            Gửi yêu cầu
                        </UButton>
                    </div>
                    <div class="pod-banner__featured">
                        <div class="pod-banner__featured-wrapper">
                            <div href="#" class="pod-banner__featured-item">Đặt càng nhiều<br />May càng rẻ</div>
                            <div href="#" class="pod-banner__featured-item">
                                Giá cả <br />
                                cạnh tranh
                            </div>
                            <div href="#" class="pod-banner__featured-item">Dự kiến giao<br />trong vòng 30 ngày</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="about-content pt-8 mx-auto bg-white">
            <section class="pod-why">
                <div class="container container--medium prose prose-lg">
                    <h2 class="pod-why__heading">Vì sao nên chọn may đồng phục tại công ty GAK</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="grid__column three-twelfths mobile--one-half">
                            <div class="pod-why__card">
                                <div class="card__item__icon"><img src="/images/booking-step-1.png" alt="" /></div>
                                <div class="card__item__content">
                                    <div class="card__item__title">Chi phí tốt nhất trên thị trường</div>
                                    <p class="card__item__description">
                                        Các sản phẩm đồng phục được gia công tại công ty GAK luôn có sự tỉ mỉ và giá thành tốt nhất. Bởi
                                        chúng tôi là nhà sản xuất vải, nhuộm, may đồng phục, in ấn khép kín
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column three-twelfths mobile--one-half">
                            <div class="pod-why__card">
                                <div class="card__item__icon"><img src="/images/booking-step-2.png" alt="" /></div>
                                <div class="card__item__content">
                                    <div class="card__item__title">Dịch vụ tận tâm</div>
                                    <p class="card__item__description">
                                        GAK luôn chú trọng sự tận tâm trên từng sản phẩm, bởi những người thợ giàu kinh nghiệm cần thận trên
                                        từng đường may mũi chỉ và sản phẩm chất lượng cao đang tạo nên thương hiệu của chúng tôi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column three-twelfths mobile--one-half">
                            <div class="pod-why__card">
                                <div class="card__item__icon"><img src="/images/booking-step-3.png" alt="" /></div>
                                <div class="card__item__content">
                                    <div class="card__item__title">Chi phí in ấn đồng phục tốt nhất thị trường</div>
                                    <p class="card__item__description">
                                        Nhờ năng lực sản xuất mạnh và linh hoạt, công ty GAK tự tin vào chất lượng tất cả bản in ấn. Hãy đặt
                                        niềm tin vào chúng tôi thương hiệu của bạn sẽ luôn chỉn chu trên từng bộ đồng phục.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column three-twelfths mobile--one-half">
                            <div class="pod-why__card">
                                <div class="card__item__icon"><img src="/images/booking-step-4.png" alt="" /></div>
                                <div class="card__item__content">
                                    <div class="card__item__title">Biết ngày giao hàng!</div>
                                    <p class="card__item__description">
                                        Nhờ vào khả năng sản xuất và in khép kín. Giúp công ty GAK có thể đảm bảo tiến độ may và giao hàng
                                        cho khách hàng. Nếu bạn đã có số lượng dự kiến, bản mẫu chúng tôi sẽ báo với bạn ngày giao hàng!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pod-activity">
                <div class="container mx-auto">
                    <div class="pod-activity__card">
                        <div class="pod-activity__heading-card">
                            <div class="pod-activity__heading-top">
                                <h2>Quy trình<br />may đồng phục tại Công ty GAK<br />như thế nào?</h2>
                            </div>
                            <div class="pod-activity__heading-cta mobile--hidden tablet--hidden">
                                <p>Chưa bao giờ đơn giản đến thế.</p>
                                <a
                                    class="btn btn--primary scroll-to-step"
                                    >Gửi yêu cầu</a
                                >
                            </div>
                        </div>
                        <div class="pod-activity__card grid-item">
                            <div class="card__item">
                                <div class="card__item__icon"><img src="/images/booking-process-1.png" alt="" /></div>
                                <div class="card__item__content">
                                    <div class="card__item__title">Tiếp nhận yêu cầu</div>
                                    <p class="card__item__description">
                                        Gửi yêu cầu trực tiếp qua Zalo hoặc qua <br />
                                        Hotline: <a href="tel:1900 272 735">0569133339</a>
                                    </p>
                                </div>
                            </div>
                            <div class="card__item">
                                <div class="card__item__icon"><img src="/images/booking-process-2.png" alt="" /></div>
                                <div class="card__item__content">
                                    <div class="card__item__title">Tư vấn thiết kế</div>
                                    <p class="card__item__description">
                                        Lên thiết kế miễn phí, chào mẫu theo yêu cầu <br />
                                        để khách hàng duyệt mẫu
                                    </p>
                                </div>
                            </div>
                            <div class="card__item">
                                <div class="card__item__icon"><img src="/images/booking-process-3.png" alt="" /></div>
                                <div class="card__item__content">
                                    <div class="card__item__title">Gửi báo giá</div>
                                    <p class="card__item__description">
                                        Được gửi ngay sau khi khách hàng đồng ý mẫu thiết kế <br />
                                        (Trong vòng 8 tiếng)
                                    </p>
                                </div>
                            </div>
                            <div class="card__item">
                                <div class="card__item__icon"><img src="/images/booking-process-4.png" alt="" /></div>
                                <div class="card__item__content">
                                    <div class="card__item__title">Giao hàng và cám ơn</div>
                                    <p class="card__item__description">
                                        Giao hàng miễn phí trong nội thành <br />
                                        hoặc tính phí giao vận thông qua bưu cục địa phương
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="products" class="pod-products">
                <div class="container container--medium">
                    <h2 class="pod-products__heading" style="margin-bottom: 10px">
                        Các mẫu đồng phục đẹp giá tốt đang được khách hàng tin chọn
                    </h2>
                    <div>
                        <h3 style="text-align: center; font-size: 16px; padding: 0px 30px">
                            GAK có khả năng đa dạng sản xuất theo yêu cầu riêng của khách hàng
                        </h3>
                    </div>
                    <div class="tab-content">
                        <div data-tab-content="all" class="tab-content__item">
                            <div class="tab-collection-get-content grid grid-cols-2 lg:grid-cols-4 gap-4">
                                <div data-collection-id="ao" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="thun" class="pod-grid__image">
                                                    <img src="/images/product-item-1.jpg" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline"><span>Áo thun </span> Số lượng tối thiểu: 50 chiếc</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="ao" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="polo" class="pod-grid__image">
                                                    <img src="/images/product-item-2.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline"><span>Áo thun polo</span> Số lượng tối thiểu: 50 chiếc</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="ao" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="hoodie" class="pod-grid__image">
                                                    <img src="/images/product-item-3.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline">
                                                <span>Quần áo bảo hộ lao động</span> Số lượng tối thiểu: 50 chiếc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="ao" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="dai-tay" class="pod-grid__image">
                                                    <img src="/images/product-item-4.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline">
                                                <span>Đồng phục công nhân</span> Số lượng tối thiểu: 50 chiếc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="ao" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="so-mi" class="pod-grid__image">
                                                    <img src="/images/product-item-5.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline">
                                                <span>Áo đồng phục công sở</span> Số lượng tối thiểu: 50 chiếc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="underwear" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="underwear" class="pod-grid__image">
                                                    <img src="/images/product-item-6.jpg" class="mix-blend-multiply" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline">
                                                <span>Áo đồng phục công ty</span> Số lượng tối thiểu: 50 chiếc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="quan" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="quan" class="pod-grid__image">
                                                    <img src="/images/product-item-7.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline">
                                                <span>Áo thun phản quang</span> Số lượng tối thiểu: 50 chiếc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="phu-kien" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="mu" class="pod-grid__image">
                                                    <img src="/images/product-item-8.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline">
                                                <span>Áo đồng phục học sinh</span> Số lượng tối thiểu: 50 chiếc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="phu-kien" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="khau-trang" class="pod-grid__image">
                                                    <img src="/images/product-item-9.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline"><span>Áo teambuilding</span> Số lượng tối thiểu: 100 chiếc</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="phu-kien" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="tat" class="pod-grid__image">
                                                    <img src="/images/product-item-10.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline"><span>Áo thun công sở</span> Số lượng tối thiểu: 200 đôi</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="phu-kien" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="tui" class="pod-grid__image">
                                                    <img src="/images/product-item-11.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline">
                                                <span>Áo thun quảng cáo - sự kiện</span>
                                                Số lượng tối thiểu: 50 chiếc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-collection-id="phu-kien" class="grid__column three-twelfths mobile--one-half">
                                    <div rel-script="pod-product-grid" class="pod-grid">
                                        <div class="pod-grid__inner">
                                            <div class="pod-grid__thumbnail">
                                                <div rel-script="popup-grid__popup" data-product="khac" class="pod-grid__image">
                                                    <img src="/images/product-item-12.png" alt="images" />
                                                </div>
                                            </div>
                                            <div class="pod-grid__tagline"><span>Áo thun thể thao</span> Số lượng tối thiểu: 200 chiếc</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="loadmore-product" style="display: none">
                                <a
                                    data-show="10"
                                    data-page="2"
                                    class="btn btn--outline loadmore chidern"
                                    >Xem thêm</a
                                >
                            </div>
                        </div>
                        <div class="loadmore-product" style="display: none">
                            <a
                                data-show="10"
                                data-page="2"
                                class="btn btn--outline loadmore chidern"
                                >Xem thêm</a
                            >
                        </div>
                    </div>
                </div>
            </section>
            <section id="pod-customer">
                <div class="container container--medium">
                    <div class="pod-customer">
                        <div class="pod-customer__wrapper">
                            <h2 class="pod-customer__heading">Khách hàng của công ty GAK</h2>
                            <Swiper :slidesPerView="6" :spaceBetween="24" class="swiper pod-customer-swiper relative z-10 !pb-12">
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip38_59.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip38_59.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip39_30.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip39_30.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip40_12.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip40_12.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip41.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip41.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip43.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip43.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip44.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip44.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip31.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip31.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Ngoài việc tư vấn chất liệu vải và màu phù hợp, Coolmate còn hỗ trợ may riêng áo polo dành
                                                cho nữ dù số lượng ít và sản phẩm không có sẵn . Rất tuyệt vời.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip36.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip36.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Áo của CoolxPrint mặc nhẹ, dễ cử động, nếu dùng để mặc hàng ngày mà hoạt động nhẹ thì okela
                                                lắm nhé, chất liệu in căng, lên màu nét và chuẩn.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip37.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip37.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Mình đã thẩm áo rồi, đúng chất ngon - bổ - rẻ nhé. Cám ơn đội ngũ CoolxPrint đã hỗ trợ
                                                Ecomtek ở nhà meeting với khách vẫn đảm bảo đẹp để nhận diện thương hiệu.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip38.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip38.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Chất lượng vải mát, vải dày, mực in tốt, form áo sau 1 năm mặc vẫn giữ dáng tốt mặc dù nhân
                                                viên mặc đi làm hàng ngày. Sắp tới sẽ đặt hàng tiếp cho công ty.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip39.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip39.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Với số lượng 250 áo, Coolmate hỗ trợ trong vòng 1 tuần, chất lượng áo rất tốt, form áo vừa
                                                vặn với mọi người, được các anh chị tại công ty hưởng ứng rất nhiều.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip40.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip40.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Chất liệu cotton mềm mại thấm hút rất phù hợp cho các fans thích di chuyển và ăn uống. Thật
                                                sự rất ưng ý với đơn hàng này. Chúng tôi sẵn sàng giới thiệu CXP tới nhiều đối tác hơn.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip35.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip35.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip36_94.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip36_94.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip37_4.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip37_4.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip38_59.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip38_59.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip39_30.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip39_30.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip40_12.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip40_12.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip41.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip41.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip43.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip43.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip44.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip44.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip31.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip31.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Ngoài việc tư vấn chất liệu vải và màu phù hợp, Coolmate còn hỗ trợ may riêng áo polo dành
                                                cho nữ dù số lượng ít và sản phẩm không có sẵn . Rất tuyệt vời.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip36.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip36.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Áo của CoolxPrint mặc nhẹ, dễ cử động, nếu dùng để mặc hàng ngày mà hoạt động nhẹ thì okela
                                                lắm nhé, chất liệu in căng, lên màu nét và chuẩn.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip37.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip37.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Mình đã thẩm áo rồi, đúng chất ngon - bổ - rẻ nhé. Cám ơn đội ngũ CoolxPrint đã hỗ trợ
                                                Ecomtek ở nhà meeting với khách vẫn đảm bảo đẹp để nhận diện thương hiệu.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip38.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip38.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Chất lượng vải mát, vải dày, mực in tốt, form áo sau 1 năm mặc vẫn giữ dáng tốt mặc dù nhân
                                                viên mặc đi làm hàng ngày. Sắp tới sẽ đặt hàng tiếp cho công ty.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip39.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip39.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Với số lượng 250 áo, Coolmate hỗ trợ trong vòng 1 tuần, chất lượng áo rất tốt, form áo vừa
                                                vặn với mọi người, được các anh chị tại công ty hưởng ứng rất nhiều.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://mcdn.coolmate.me/image/February2023/mceclip40.png"
                                            alt=""
                                            src="https://mcdn.coolmate.me/image/February2023/mceclip40.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none">
                                                Chất liệu cotton mềm mại thấm hút rất phù hợp cho các fans thích di chuyển và ăn uống. Thật
                                                sự rất ưng ý với đơn hàng này. Chúng tôi sẵn sàng giới thiệu CXP tới nhiều đối tác hơn.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip35.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip35.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip36_94.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip36_94.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip37_4.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip37_4.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip38_59.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip38_59.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip39_30.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip39_30.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip40_12.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip40_12.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip41.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip41.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip43.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip43.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="pod-customer__content">
                                        <img
                                            data-src="https://media.coolmate.me/image/February2023/mceclip44.png"
                                            alt=""
                                            src="https://media.coolmate.me/image/February2023/mceclip44.png"
                                            class="lazyload" />
                                        <h2 class="pod-customer__name" style="font-size: 18px"></h2>
                                        <div class="pod-customer__reviews">
                                            <p class="pod-customer__description" style="display: none"></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <p class="pod-customer__description active-description mobile--hidden">
                                Ngoài việc tư vấn chất liệu vải và màu phù hợp, Coolmate còn hỗ trợ may riêng áo polo dành cho nữ dù số
                                lượng ít và sản phẩm không có sẵn . Rất tuyệt vời.
                            </p>
                        </div>
                        <UButton
                            variant="ghost"
                            color="none"
                            size="lg"
                            href="https://www.coolmate.me/lp/coolxprint-mo-hinh-dat-san-xuat-theo-yeu-cau?itm_source=navbar#mockup"
                            class="bg-[#2f5acf] text-white px-8 rounded-3xl"
                            >Gửi yêu cầu
                        </UButton>
                    </div>
                </div>
            </section>
            <section id="mockup" class="mt-8">
                <div class="container container--medium">
                    <div class="contact">
                        <div class="contact__wrapper">
                            <div class="contact__content">
                                <h2 class="contact__content-title">
                                    Bạn đang cần được tư vấn cho đồng phục công ty, may quần áo bảo hộ lao động, đồng phục công nhân? Hãy để chúng tôi tư vấn cho bạn
                                </h2>
                                <div class="contact__content-hotline">
                                    <div class="contact__content-info">
                                        <img src="/images/phone-icon.svg" alt="" />
                                        <div>
                                            <p>Hotline</p>
                                            <a href="tel:0569133339">0569133339</a>
                                        </div>
                                    </div>
                                    <div class="contact__content-info">
                                        <img src="/images/sms-notification.svg" alt="" />
                                        <div>
                                            <p>Email</p>
                                            <a href="mailto:mediagakvn@gmail.com">mediagakvn@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact__content-contact">
                                    <a href="http://zalo.me/0964807286" target="_blank" class="contact__content-social">
                                        <img src="/images/zalo.png" alt="zalo-podz" />
                                        <div>Liên hệ Sale GAK qua Zalo</div>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/coolxprintinaotheoyeucau/"
                                        target="_blank"
                                        class="contact__content-social"
                                        ><img src="/images/facebook.png" alt="fb-pod" />
                                        <div>CSKH GAK</div></a
                                    >
                                </div>
                            </div>
                            <div class="contact__form">
                                <form action="https://www.coolmate.me/cxp" method="POST" class="xp-form">
                                    <h2 class="title">Gửi yêu cầu tư vấn may đồng phục cho GAK</h2>
                                    <UFormGroup class="form-group" label="Sản phẩm và số lượng dự kiến bạn cần" required>
                                        <UInput
                                            size="xl"
                                            type="text"
                                            color="gray"
                                            variant="none"
                                            id="product"
                                            name="product"
                                            placeholder="vd: Đồng phục Shopee"
                                            :ui="{ base: '!rounded-xl border border-blue-700 !bg-gray-100' }" />
                                    </UFormGroup>
                                    <UFormGroup class="form-group" label="Họ và tên của bạn" required>
                                        <UInput
                                            size="xl"
                                            type="text"
                                            color="gray"
                                            variant="none"
                                            id="product"
                                            name="product"
                                            placeholder="vd: Nguyễn Văn A"
                                            :ui="{ base: '!rounded-xl border border-blue-700 !bg-gray-100' }" />
                                    </UFormGroup>
                                    <UFormGroup class="form-group" label="Số điện thoại của bạn" required>
                                        <UInput
                                            size="xl"
                                            type="text"
                                            color="gray"
                                            variant="none"
                                            id="product"
                                            name="product"
                                            placeholder="vd: 0912345678"
                                            :ui="{ base: '!rounded-xl border border-blue-700 !bg-gray-100' }" />
                                    </UFormGroup>
                                    <UFormGroup class="form-group" label="Email của bạn" required>
                                        <UInput
                                            size="xl"
                                            type="email"
                                            color="gray"
                                            variant="none"
                                            id="product"
                                            name="product"
                                            placeholder="vd: dobaoho@gak.vn"
                                            :ui="{ base: '!rounded-xl border border-blue-700 !bg-gray-100' }" />
                                    </UFormGroup>

                                    <div class="error" style="color: rgb(203, 15, 15)"></div>
                                    <div class="submit-wrapper">
                                        <UButton
                                            variant="ghost"
                                            color="none"
                                            size="lg"
                                            type="submit"
                                            class="bg-[#2f5acf] text-white px-8 rounded-3xl"
                                            >Gửi yêu cầu
                                        </UButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pod-factory">
                <div class="pod-factory__banner">
                    <picture style="width: 100%"
                        ><source
                            class="hidden"
                            media="(max-width: 781px)"
                            srcset="https://mcdn.coolmate.me/image/February2023/mceclip35.jpg" />
                        <img src="/images/nha-may-background.png" alt="Nha may" class="h-full w-full object-cover" />
                    </picture>
                </div>
                <div class="pod-factory__info">
                    <h2>Nhà máy của chúng tôi</h2>
                    <p>
                        Để có một bộ đồng phục đẹp, hay một chiếc áo thun công ty chất lượng đều cần đến nguồn nguyên liệu chất lượng. Chỉ
                        có sự lựa chọn nguồn sợi, quy trình dệt cho đến kỹ thuật may đo tiên tiến mới tạo ra những sản phẩm xứng đáng để in
                        lên logo công ty bạn!
                    </p>
                    <UButton variant="ghost" color="none" size="lg" type="submit" class="bg-[#2f5acf] text-white px-8 rounded-3xl">
                        Năng lực Công ty GAK
                    </UButton>
                </div>
            </section>
            <section class="pod-tech">
                <div class="container container--medium">
                    <h2 class="pod-tech__heading">Tập trung phát triển sản phẩm và công nghệ may mặc tiên tiến</h2>
                    <Swiper
                        :slidesPerView="2"
                        :spaceBetween="24"
                        :slidesPerGroup="2"
                        :modules="modules"
                        :grid="{
                            rows: 2,
                        }"
                        class="swiper pod-tech-swiper h-[450px] lg:!hidden">
                        <SwiperSlide class="pod-tech-slide">
                            <a href="#" class="rounded-xl">
                                <img alt="" src="/images/silk-tech-1.png" class="w-full h-full object-cover rounded-xl" loading="lazy"
                            /></a>
                            <span>Vải chất lượng cao</span>
                        </SwiperSlide>
                        <SwiperSlide class="pod-tech-slide">
                            <a href="#" class="rounded-xl"><img alt="" src="/images/silk-tech-2.png" class="w-full h-full object-cover rounded-xl" loading="lazy" /></a>
                            <span>Công nghệ may tiên tiến</span>
                        </SwiperSlide>
                        <SwiperSlide class="pod-tech-slide">
                            <a href="#" class="rounded-xl"><img alt="" src="/images/silk-tech-3.png" class="w-full h-full object-cover rounded-xl" loading="lazy" /></a>
                            <span>Công nghệ in/thêu đồng phục</span>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        :slidesPerView="3"
                        :spaceBetween="24"
                        :slidesPerGroup="3"
                        :modules="modules"
                        :grid="{
                            rows: 2,
                        }"
                        class="swiper pod-tech-swiper min-w-0 h-[450px] !px-32 !hidden lg:!block">
                        <SwiperSlide class="pod-tech-slide">
                            <a href="#" class="rounded-xl">
                                <img alt="" src="/images/silk-tech-1.png" class="w-full h-full object-cover rounded-xl" loading="lazy"
                            /></a>
                            <span>Vải chất lượng cao</span>
                        </SwiperSlide>
                        <SwiperSlide class="pod-tech-slide">
                            <a href="#" class="rounded-xl"><img alt="" src="/images/silk-tech-2.png" class="w-full h-full object-cover rounded-xl" loading="lazy" /></a>
                            <span>Công nghệ may tiên tiến</span>
                        </SwiperSlide>
                        <SwiperSlide class="pod-tech-slide">
                            <a href="#" class="rounded-xl"><img alt="" src="/images/silk-tech-3.png" class="w-full h-full object-cover rounded-xl" loading="lazy" /></a>
                            <span>Công nghệ in/thêu đồng phục</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section class="blogs-grid-slide mb-6">
                <div class="container container--medium px-6 py-4 rounded-2xl">
                    <div class="blogs-grid-slide__heading">Cẩm nang kiến thức về may đồng phục</div>
                    <div class="blogs-grid-slide__slide container px-8">
                        <Swiper
                            :slidesPerView="2"
                            :spaceBetween="16"
                            :slidesPerGroup="2"
                            :breakpoints="{
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                    slidesPerGroup: 3,
                                },
                            }"
                            class="blog-swiper">
                            <SwiperSlide v-for="article in articleList" class="!h-auto">
                                <ArticleCard :article="article" :is-view-count="false" :is-description="false" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section class="cs-cta">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-cta__heading">
                        Tham gia hội săn Deal GAK- Nhận ngay thông tin ưu đãi, xả kho và live stream tặng quà cực sốc!!!
                    </h2>
                    <span class="flex items-center justify-center flex-wrap gap-4">
                        <UButton size="lg" class="text-[#2f5acf] bg-white rounded-3xl px-6 py-4" variant="ghost" color="none">
                            GAK OFFICIAL
                        </UButton>
                        <UButton
                            size="lg"
                            class="border border-white bg-[#2f5acf] rounded-3xl text-white px-6 py-4"
                            variant="ghost"
                            color="none">
                            Mua quần áo giá cực rẻ tại TIKTOK Shop!
                        </UButton>
                    </span>
                </div>
            </section>
            <div class="cs-faq-container py-8">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-faq__heading text-center w-full">FAQ MAY ĐỒNG PHỤC</h2>
                    <p class="text-center w-full">Bạn có câu hỏi GAK xin trả lời ạ!</p>
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
        label: 'Cần lưu ý gì khi chọn xưởng may đồng phục giá rẻ?',
        slot: 'item-1',
        defaultOpen: true,
    },
    {
        label: 'Đồng phục công nhân giá rẻ liệu có tốt không?',
        slot: 'item-2',
    },
    {
        label: 'Lợi ích khi đặt may - in ấn đồng phục',
        slot: 'item-3',
    },
];
const articleList = ref([
    {
        link: 'https://www.coolmate.me/post/giai-chay-marathon-2024-2745',
        image: 'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2023/9_31.jpg',
        category_link: 'https://www.coolmate.me/blog/kinh-nghiem-hay',
        category_name: 'Kinh nghiệm hay',
        created_at: '26.09.2023',
        title: '[Cập Nhật Liên Tục] 30+ Giải Chạy Marathon 2024',
        description:
            'Nếu là tín đồ đam mê chạy bộ, hãy cùng khám phá thông tin các giải chạy marathon 2024 sắp diễn ra. Cùng khám phá chi tiết để dễ dàng lên kế hoạch tham gia chạy giải nhé!',
        view_count: '36235',
    },
    {
        link: 'https://www.coolmate.me/post/giai-chay-marathon-2024-2745',
        image: 'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2023/giai-dap-y-nghia-cac-con-so-trong-tinh-yeu.jpg',
        category_link: 'https://www.coolmate.me/blog/kinh-nghiem-hay',
        category_name: 'Độc lạ bình dương',
        created_at: '26.10.2023',
        title: 'Coolmate 5 tuổi - Điểm danh bộ sưu tập sinh nhật có gì mới và hấp dẫn?',
        description:
            'Nếu là tín đồ đam mê chạy bộ, hãy cùng khám phá thông tin các giải chạy marathon 2024 sắp diễn ra. Cùng khám phá chi tiết để dễ dàng lên kế hoạch tham gia chạy giải nhé!',
        view_count: '38',
    },
    {
        link: 'https://www.coolmate.me/post/giai-chay-marathon-2024-2745',
        image: 'https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/May2023/tho-hay-ve-tinh-yeu.jpg',
        category_link: 'https://www.coolmate.me/blog/kinh-nghiem-hay',
        category_name: 'Trend mới',
        created_at: '26.11.2023',
        title: 'Cùng thưởng thức 7 bản hit của ông hoàng nhạc phim Phan Mạnh Quỳnh Phan Mạnh Quỳnh Phan Mạnh Quỳnh Phan Mạnh Quỳnh',
        description:
            'Nếu là tín đồ đam mê chạy bộ, hãy cùng khám phá thông tin các giải chạy marathon 2024 sắp diễn ra. Cùng khám phá chi tiết để dễ dàng lên kế hoạch tham gia chạy giải nhé!',
        view_count: '999',
    },
]);
let title = 'Chính sách đặt may';
// let description = "Chính sách bảo mật";
let seoMeta = {
    // description: description,
    // ogDescription: description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    // twitterDescription: description,
    keywords: 'Chính sách đặt may',
};

useSeoMeta(seoMeta);
</script>

<style lang="scss" scoped>
.pod-banner {
    position: relative;
    height: calc(100vh - 120px);
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
                        background-image: url(https://mcdn.coolmate.me/image/February2023/mceclip9_32.png);
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
