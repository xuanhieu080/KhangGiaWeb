<template>
    <NuxtLayout name="main">
        <div class="about-us-image relative">
            <NuxtImg class="w-full h-[500px] object-cover" loading="lazy" format="webp" src="/images/company-banner.jpg" alt="" />
            <div
                class="about-us-content absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10">
                <h1 class="font-bold !text-[24px] md:!text-[54px] 2xl:!text-[64px] !my-2">VĂN HÓA GAK</h1>
                <span class="text-lg xl:text-xl">Tất cả những điều bạn muốn biết về GAK!</span>
            </div>
            <div class="hidden lg:flex justify-center gap-4 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                <UButton
                    variant="ghost"
                    color="none"
                    :to="localePath({ name: locale=='vi'? 'abouts-ve-chung-toi' : 'abouts-about-us' })"
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
                   :to="localePath({ name: locale=='vi' ? 'van-hoa-gak': 'culture-gak' })"
                    color="none"
                    class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full max-w-[300px] border-2 border-green-500 items-center justify-between gap-4">
                    <div class="flex justify-center">
                        <NuxtImg class="h-full w-12 object-contain filter-green" alt="Logo Site" src="/images/loa.png" />
                    </div>
                    <div class="font-bold text-left flex-1 flex justify-start">
                        <span class="max-w-[150px] text-lg">Văn hóa <br />GAK</span>
                    </div>
                    <div class="go-btn bg-green-500 border h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                        <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                    </div>
                </UButton>
                <UButton
                    variant="ghost"
                    :to="localePath({ name: locate == 'vi' ? 'dvkh-tan-tam' : 'dedicated-customer-care-service' })"
                    color="none"
                    class="about-us-button !bg-white p-4 rounded-2xl w-full max-w-[300px] border-2 items-center justify-between gap-4">
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
        <div class="lg:hidden flex flex-col justify-between gap-4 my-4 px-4">
            <UButton
                variant="ghost"
                color="none"
                :to="localePath({ name: locale=='vi'? 'abouts-ve-chung-toi' : 'abouts-about-us' })"
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
               :to="localePath({ name: locale=='vi' ? 'van-hoa-gak': 'culture-gak' })"
                color="none"
                class="about-us-button !bg-white p-4 text-green-500 rounded-2xl w-full border-2 border-green-500 items-center justify-between gap-4">
                <div class="flex justify-center">
                    <NuxtImg class="h-full w-12 object-contain filter-green" alt="Logo Site" src="/images/loa.png" />
                </div>
                <div class="font-bold text-left flex-1 flex justify-start">
                    <span class="max-w-[150px] text-lg">Văn hóa <br />GAK</span>
                </div>
                <div class="go-btn bg-green-500 border h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                    <UIcon name="i-heroicons-arrow-right" class="text-lg text-white" />
                </div>
            </UButton>
            <UButton
                variant="ghost"
                :to="localePath({ name: locate == 'vi' ? 'dvkh-tan-tam' : 'dedicated-customer-care-service' })"
                color="none"
                class="about-us-button !bg-white p-4 rounded-2xl w-full border-2 items-center justify-between gap-4">
                <div class="flex justify-center">
                    <NuxtImg class="h-full w-12 object-contain" alt="Logo Site" src="/images/star-blink.png" />
                </div>
                <div class="font-bold text-left flex-1 flex justify-start">
                    <span class="max-w-[150px] text-lg">Trải nghiệm <br />98% hài lòng</span>
                </div>
                <div class="go-btn bg-white border border-black h-6 w-8 flex items-center justify-center rounded-3xl self-end">
                    <UIcon name="i-heroicons-arrow-right" class="text-grid lg:grid-cols-2 items-center gap-6 lg:gap-12lg text-black" />
                </div>
            </UButton>
        </div>
        <div class="about-content pt-6 md:!pt-[5rem] mx-auto">
            <section class="cs-about">
                <div class="container container--medium prose prose-lg lg:prose-2xl">
                    <div class="grid lg:grid-cols-2 items-center md:gap-12">
                        <div class="grid__column five-twelfths mobile--one-whole">
                            <div class="cs-about__content">
                                <h2 class="cs-about__heading">ĐI LÊN TỪ CHẤT LƯỢNG VÀ SỰ TỈ MỈ</h2>
                                <div class="cs-about__image">
                                    <img src="/images/company-banner-box.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="grid__column seven-twelfths mobile--one-whole">
                            <div class="cs-about__description">
                                <p>
                                    Cùng chúng tôi tìm hiểu văn hoá tại công ty GAK và những mục tiêu mà chúng tôi đang hoàn thiện ngày một
                                    tốt hơn.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-caption">
                <div class="cs-caption__wrapper w-full">
                    <div class="container container--medium text-white">
                        <div class="grid md:grid-cols-2 gap-4 items-center">
                            <div class="grid-column text-white text-left">
                                <h2 class="cs-caption__heading !mb-0">VĂN HOÁ GAK</h2>
                                <p class="max-w-[500px] leading-6 !ml-0">
                                    Tại GAK, văn hóa không chỉ là một chuỗi các quy tắc, mà nó được coi là tinh thần sống động và nguồn động
                                    lực cho mỗi cá nhân trong công ty. Văn hóa của chúng tôi là một phần không thể tách rời trong mỗi hoạt
                                    động hàng ngày, từ sản xuất đến dịch vụ khách hàng để hoà trộn sự tự tế trên nhiều phương diện:
                                </p>
                            </div>
                            <div class="grid-column">
                                <img src="/images/order-step-2.jpg" alt="" />
                            </div>
                        </div>
                        <div class="recruitment-culture__ten-facts mt-8 lg:mt-16">
                            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                                <div class="grid__column min-h-[150px]">
                                    <div class="ten-facts__item">
                                        <div class="ten-facts__order">01</div>
                                        <div class="ten-facts__description">
                                            Tận Tâm và Chất Lượng: Chúng tôi cam kết mang đến sản phẩm và dịch vụ chất lượng nhất, từ tinh
                                            thần nhiệt huyết và tâm huyết của mỗi nhân viên.
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__column min-h-[150px]">
                                    <div class="ten-facts__item">
                                        <div class="ten-facts__order">02</div>
                                        <div class="ten-facts__description">
                                            Sự Đoàn Kết và Hỗ Trợ: Tại GAK, chúng tôi là một gia đình. Chúng tôi luôn hỗ trợ và động viên
                                            lẫn nhau, xây dựng một môi trường làm việc tích cực và đầy sức mạnh tập thể
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__column min-h-[150px]">
                                    <div class="ten-facts__item">
                                        <div class="ten-facts__order">03</div>
                                        <div class="ten-facts__description">
                                            Sáng Tạo và Phát Triển: Chúng tôi khuyến khích sự sáng tạo và đổi mới ở mọi cấp độ. Mỗi ý kiến
                                            đóng góp được đánh giá cao và nhân viên được khuyến khích trau dồi chuyên môn qua từng năm.
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__column min-h-[150px]">
                                    <div class="ten-facts__item">
                                        <div class="ten-facts__order">04</div>
                                        <div class="ten-facts__description">
                                            Trách Nhiệm Xã Hội và Môi Trường: Chúng tôi cùng nhau cam kết hành động trách nhiệm với cộng
                                            đồng và môi trường. Tập thể nhân viên tại GAK luôn sẽ cùng nhau tìm cách để góp phần vào sự phát
                                            triển bền vững của xã hội và đất nước.
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__column min-h-[150px]">
                                    <div class="ten-facts__item">
                                        <div class="ten-facts__order">05</div>
                                        <div class="ten-facts__description">
                                            Tôn Trọng và Trung Thực: Tôn trọng và trung thực là giá trị cốt lõi của từng con người tại công
                                            ty GAK. Chúng tôi đánh giá cao mỗi mối quan hệ và cam kết đối xử công bằng và trung thực trong
                                            mọi tình huống.
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__column min-h-[150px]">
                                    <div class="ten-facts__item">
                                        <div class="ten-facts__order">06</div>
                                        <div class="ten-facts__description">
                                            Hạnh phúc: Chúng tôi xây dựng một môi trường làm việc tích cực, hoà nhã và tập trung sự ổn định
                                            việc làm cho tất cả cán bộ công ty.
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__column min-h-[150px]">
                                    <div class="ten-facts__item">
                                        <div class="ten-facts__order">07</div>
                                        <div class="ten-facts__description">
                                            Lắng nghe và thấu hiểu: Chúng tôi xây dựng một công ty của sự đồng cảm, đặt mình vào vị thế của
                                            đồng nghiệp, khách hàng, lắng nghe không phán xét để thấu hiểu mọi người và cởi mở bằng cả trái
                                            tim.
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__column min-h-[150px]">
                                    <div class="ten-facts__item">
                                        <div class="ten-facts__order">08</div>
                                        <div class="ten-facts__description">
                                            Học tập và trau dồi tính chuyên môn: Chúng tôi trao quyền và tạo cơ hội học tập cho mọi con
                                            người nhằm giúp họ cải thiện cuộc sống của chính mình. Chỉ có học tập và sự ủng hộ học tập mới
                                            giúp cho mọi người cùng tốt hơn.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="recruitment-cta mt-8 lg:mt-16">
                            <UButton size="xl" variant="ghost" color="none" href="#" class="bg-white h-14 rounded-3xl px-8 text-black">
                                Gia nhập ngay
                                <UIcon name="i-heroicons-arrow-right"></UIcon>
                            </UButton>
                        </div>
                    </div>
                </div>
            </section>
            <div class="recruitment-jobs p-6">
                <div class="container container--medium prose prose-lg">
                    <h2 class="recruitment-jobs__heading !text-3xl">Cơ hội để chúng ta gặp nhau</h2>
                    <div class="recruitment-jobs__sub-heading text-center text-white font-medium">
                        Hãy đồng hành cùng GAK đi xa và bền vững hơn<br />Tìm hiểu về các vị trí đang tuyển dụng mới nhất!
                    </div>
                    <div class="recruitment-job__swiper w-full mt-8 mb-4 relative">
                        <Swiper
                            :slidesPerView="1"
                            :spaceBetween="16"
                            :slidesPerGroup="1"
                            :modules="modules"
                            :autoHeight="true"
                            :pagination="{
                                clickable: true,
                            }"
                            class="swiper diary-swiper min-w-0 md:!hidden relative z-10 !pb-14">
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Content Marketing Intern
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex flex-wrap items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Marketing Executive
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Marketing Leader
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Marketing Manager
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Director of Marketing
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Chief Marketing Officer - CMO
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Design Specialist
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Tuyển dụng thợ may
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            SEO Specialist
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Warehouse staff
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Product Photographer
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Senior Advertising Operator
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            :slidesPerView="3"
                            :spaceBetween="16"
                            :slidesPerGroup="3"
                            :modules="modules"
                            :grid="{
                                rows: 2,
                            }"
                            :pagination="{
                                clickable: true,
                                renderBullet: (index, className) => renderBullet(index, className),
                            }"
                            class="swiper diary-swiper min-w-0 h-[580px] !hidden md:!block relative z-10 !pb-14">
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Content Marketing Intern
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Marketing Executive
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Marketing Leader
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li class="!mt-2">Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Marketing Manager
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Director of Marketing
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Chief Marketing Officer - CMO
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Design Specialist
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Tuyển dụng thợ may
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            SEO Specialist
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Warehouse staff
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Product Photographer
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide class="recruitment-jobs-slide">
                                <div class="job-item">
                                    <div class="job-grid__thumbnail" style="z-index: 9">
                                        <div class="job-grid__image"><img src="/images/recruitment-job-1.png" alt="" /></div>
                                    </div>
                                    <div class="job-grid__content" style="position: relative; overflow: hidden">
                                        <h3 class="job-grid__title">
                                            <span class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block"
                                                >NEW</span
                                            >
                                            Senior Advertising Operator
                                        </h3>
                                        <ul class="!m-0 list-none p-0 text-left">
                                            <li>Địa điểm: <span style="margin-left: 5px">Thành phố Hồ Chí Minh</span></li>
                                            <li>Thu nhập: <span style="margin-left: 5px">Thương lượng</span></li>
                                        </ul>
                                        <div class="job-grid__footer">
                                            <div class="job-grid__time flex items-center gap-1 text-[12px]">
                                                <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38">
                                                    <defs></defs>
                                                    <title>Clock</title>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Fulltime
                                            </div>
                                            <a rel-script="jobs-views" class="job-grid__link">
                                                Chi tiết &amp; Ứng tuyển
                                                <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <section class="recruitment-send">
                <div class="container container--medium prose prose-lg flex flex-col">
                    <h2 class="recruitment-send__heading">Cảm ơn bạn đã chọn công ty GAK</h2>
                    <p class="recruitment-send__description">
                        Nếu các vị trí đang mở chưa phù hợp với bạn, nhưng bạn lại muốn cùng GAK thực hiện những ước mơ lớn, hãy cứ tự tin
                        gửi CV cho GAK nhé. Phòng HR sẽ liên hệ với bạn sớm!
                    </p>
                    <UButton
                        variant="ghost"
                        color="none"
                        to="#"
                        target="_blank"
                        class="mx-auto justify-center h-16 px-[50px] !bg-[#2f5acf] !text-white text-lg no-underline rounded-full">
                        Gửi CV ngay
                        <UIcon name="i-heroicons-arrow-right"></UIcon>
                    </UButton>
                </div>
            </section>
            <section v-if="false" class="recruitment-blogs">
                <div class="container container--medium">
                    <h2 class="recruitment-blogs__heading">Truyền thông nội bộ</h2>
                    <div class="grid lg:grid-cols-2 gap-4">
                        <div class="grid__column">
                            <div class="recruitment-blogs__left">
                                <h3 class="recruitment-blogs__title">Tin tức mới</h3>
                                <div
                                    rel-script="blogs-listing"
                                    data-cat-id="61d4159419f5db2b5a398f95"
                                    data-type="grid"
                                    class="recruitment-blogs__listings">
                                    <div class="grid lg:grid-cols-2 gap-4 grid--two-columns pb-12">
                                        <div class="grid__column">
                                            <div class="recruitment-blog-grid">
                                                <div class="recruitment-blog-grid__thumbnail">
                                                    <div class="recruitment-blog-grid__image">
                                                        <a target="_blank"
                                                            ><img
                                                                src="/images/blog-VH-1.jpg"
                                                                alt="Gak Year End Party 2023 - Một bước nhảy, vạn dặm bay"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-grid__content">
                                                    <div class="recruitment-blog-grid__meta">
                                                        <span class="recruitment-blog-grid__cat"> Tin Tức và Hoạt Động </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-grid__title">
                                                        <a target="_blank"> Gak Year End Party 2023 - Một bước nhảy, vạn dặm bay </a>
                                                    </h3>
                                                    <p style="margin: 0px 0px 15px; color: rgb(255, 255, 255)">
                                                        Để tổng kết lại năm cũ và lên tinh thần cho năm mới 2024 bùng nổ, anh chị em
                                                        Gak đã tham gia chương trình YEP 2023 tại 2 đầu cầu Nam - Bắc, với rất nhiều
                                                        những hoạt động và nội dung thú vị.
                                                    </p>
                                                    <a target="_blank" class="recruitment-blog-grid__link"> Đọc thêm </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-grid">
                                                <div class="recruitment-blog-grid__thumbnail">
                                                    <div class="recruitment-blog-grid__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Giáng sinh 2023 Gak có gì?"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-grid__content">
                                                    <div class="recruitment-blog-grid__meta">
                                                        <span class="recruitment-blog-grid__cat"> Tin Tức và Hoạt Động </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-grid__title">
                                                        <a target="_blank"> Giáng sinh 2023 Gak có gì? </a>
                                                    </h3>
                                                    <p style="margin: 0px 0px 15px; color: rgb(255, 255, 255)">
                                                        Chúng mình đã cùng nhau trải qua một buổi Giáng sinh 2023 với rất nhiều tiếng cười.
                                                        Cùng theo dõi tại bài viết dưới đây nhé!
                                                    </p>
                                                    <a target="_blank" class="recruitment-blog-grid__link"> Đọc thêm </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-grid">
                                                <div class="recruitment-blog-grid__thumbnail">
                                                    <div class="recruitment-blog-grid__image">
                                                        <a target="_blank"
                                                            ><img
                                                                src="/images/blog-VH-1.jpg"
                                                                alt="20/10 - Chúc mừng ngày Phụ nữ Việt Nam cùng Gak "
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-grid__content">
                                                    <div class="recruitment-blog-grid__meta">
                                                        <span class="recruitment-blog-grid__cat"> Tin Tức và Hoạt Động </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-grid__title">
                                                        <a target="_blank"> 20/10 - Chúc mừng ngày Phụ nữ Việt Nam cùng Gak </a>
                                                    </h3>
                                                    <p style="margin: 0px 0px 15px; color: rgb(255, 255, 255)">
                                                        Như thông lệ hằng năm, dịp để tôn vinh các chị em như ngày Phụ nữ Việt Nam 20/10 là
                                                        dịp mà các chàng trai nhà Gak không bao giờ bỏ lỡ. Cùng theo dõi xem các chị em
                                                        nhà Gak đã có một chương trình 20/10 như thế nào nhé!
                                                    </p>
                                                    <a target="_blank" class="recruitment-blog-grid__link"> Đọc thêm </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-grid">
                                                <div class="recruitment-blog-grid__thumbnail">
                                                    <div class="recruitment-blog-grid__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Vui Trung thu cùng Gak "
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-grid__content">
                                                    <div class="recruitment-blog-grid__meta">
                                                        <span class="recruitment-blog-grid__cat"> Tin Tức và Hoạt Động </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-grid__title">
                                                        <a target="_blank"> Vui Trung thu cùng Gak </a>
                                                    </h3>
                                                    <p style="margin: 0px 0px 15px; color: rgb(255, 255, 255)">
                                                        Một mùa Trung thu nữa lại về với anh em Gak . Cùng theo chân chúng mình đi xem
                                                        Trung thu năm nay chúng mình có những chương trình thú vị gì nhé!
                                                    </p>
                                                    <a target="_blank" class="recruitment-blog-grid__link"> Đọc thêm </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-grid">
                                                <div class="recruitment-blog-grid__thumbnail">
                                                    <div class="recruitment-blog-grid__image">
                                                        <a target="_blank"
                                                            ><img
                                                                src="/images/blog-VH-1.jpg"
                                                                alt="Gak Company Trip 2023 - Better Me, Better Gak "
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-grid__content">
                                                    <div class="recruitment-blog-grid__meta">
                                                        <span class="recruitment-blog-grid__cat"> Tin Tức và Hoạt Động </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-grid__title">
                                                        <a target="_blank"> Gak Company Trip 2023 - Better Me, Better Gak </a>
                                                    </h3>
                                                    <p style="margin: 0px 0px 15px; color: rgb(255, 255, 255)">
                                                        Sau một năm làm việc chăm chỉ thì anh em Gak lại có dịp được du lịch cùng nhau
                                                        trong chuyến Company Trip. Cùng theo dõi xem chuyến đi 2 ngày 1 đêm năm nay có điều
                                                        gì thú vị nhé!
                                                    </p>
                                                    <a target="_blank" class="recruitment-blog-grid__link"> Đọc thêm </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-grid">
                                                <div class="recruitment-blog-grid__thumbnail">
                                                    <div class="recruitment-blog-grid__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Gak lên tư -  Từ bạn mà có"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-grid__content">
                                                    <div class="recruitment-blog-grid__meta">
                                                        <span class="recruitment-blog-grid__cat"> Tin Tức và Hoạt Động </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-grid__title">
                                                        <a target="_blank"> Gak lên tư - Từ bạn mà có </a>
                                                    </h3>
                                                    <p style="margin: 0px 0px 15px; color: rgb(255, 255, 255)">
                                                        Tháng 3 tưng bừng với chuỗi hoạt động chúc mừng sinh nhật Gak lên 4, hướng tới
                                                        việc gắn kết tất cả các thành viên và gia tăng kỹ năng quản lý đội nhóm qua các cuộc
                                                        thi. Cùng chúng mình nhìn lại các chương trình thú vị qua bài viết này nhé!
                                                    </p>
                                                    <a target="_blank" class="recruitment-blog-grid__link"> Đọc thêm </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column">
                            <div class="recruitment-blogs__right">
                                <h3 class="recruitment-blogs__title">Tự hào GAK</h3>
                                <div
                                    rel-script="blogs-listing"
                                    data-cat-id="61d415b9f9289f26a80883f8"
                                    data-type="list"
                                    class="recruitment-blogs__listings">
                                    <div class="grid gap-4 pb-12">
                                        <div class="grid__column">
                                            <div class="recruitment-blog-item">
                                                <div class="recruitment-blog-item__thumbnail">
                                                    <div class="recruitment-blog-item__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Bản tin Gak tháng 03/2024"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-item__content">
                                                    <div class="recruitment-blog-item__meta">
                                                        <span class="recruitment-blog-item__cat"> Tạp Chí Hàng Tháng </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-item__title">
                                                        <a> Bản tin Gak tháng 03/2024 </a>
                                                    </h3>
                                                    <p class="recruitment-blog-item__description">
                                                        5 năm đồng hành, chân thành cùng bạn - Gak đã đón sinh nhật 5 tuổi cùng với
                                                        những chương trình hoạt động gì? Hãy cùng đón đọc ngay tại vài viết này nhé!
                                                    </p>
                                                    <a
                                                        href="https://drive.google.com/file/d/1bQl3u2YO_ARp4LIx5l_MgYyvhQxFnzjE/view?usp=drive_link"
                                                        target="_blank"
                                                        class="recruitment-blog-item__button"
                                                        >Tải tài liệu</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-item">
                                                <div class="recruitment-blog-item__thumbnail">
                                                    <div class="recruitment-blog-item__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Bản tin Gak tháng 02/2024"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-item__content">
                                                    <div class="recruitment-blog-item__meta">
                                                        <span class="recruitment-blog-item__cat"> Tạp Chí Hàng Tháng </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-item__title">
                                                        <a> Bản tin Gak tháng 02/2024 </a>
                                                    </h3>
                                                    <p class="recruitment-blog-item__description">
                                                        Tháng 2 đã đi qua, cùng chúng mình nhìn lại các tin tức, chương trình và hoạt động
                                                        của nhà Gak qua bản tin tháng 2 dưới đây nha!
                                                    </p>
                                                    <a
                                                        href="https://drive.google.com/file/d/16IeWWGG56y_oMETc5P20rkQYVovUIsKa/view?usp=sharing"
                                                        target="_blank"
                                                        class="recruitment-blog-item__button"
                                                        >Tải tài liệu</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-item">
                                                <div class="recruitment-blog-item__thumbnail">
                                                    <div class="recruitment-blog-item__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Bản tin Gak tháng 01/2024"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-item__content">
                                                    <div class="recruitment-blog-item__meta">
                                                        <span class="recruitment-blog-item__cat"> Tạp Chí Hàng Tháng </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-item__title">
                                                        <a> Bản tin Gak tháng 01/2024 </a>
                                                    </h3>
                                                    <p class="recruitment-blog-item__description">
                                                        Chào đón năm mới 2024 với nhiều chương trình và hoạt động thú vị. Cùng nhìn lại
                                                        tháng đầu tiên của năm 2024 cùng Bản tin tháng 01 nhé!
                                                    </p>
                                                    <a
                                                        href="https://drive.google.com/file/d/1zjeGz0LpuodWxgVjEaePP_u7YwtU3oKe/view?usp=sharing"
                                                        target="_blank"
                                                        class="recruitment-blog-item__button"
                                                        >Tải tài liệu</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-item">
                                                <div class="recruitment-blog-item__thumbnail">
                                                    <div class="recruitment-blog-item__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Bản tin Gak tháng 12/2023"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-item__content">
                                                    <div class="recruitment-blog-item__meta">
                                                        <span class="recruitment-blog-item__cat"> Tạp Chí Hàng Tháng </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-item__title">
                                                        <a> Bản tin Gak tháng 12/2023 </a>
                                                    </h3>
                                                    <p class="recruitment-blog-item__description">
                                                        Vậy là chúng ta đã cùng nhau đi qua tháng 12 - tháng cuối cùng của năm 2023 với rất
                                                        nhiều chương trình, hoạt động cũng như kết quả đặc biệt. Cùng nhìn lại tháng 12 cũng
                                                        như một số tổng kết cho năm 2023 qua bản tin dưới đây nhé!
                                                    </p>
                                                    <a
                                                        href="https://drive.google.com/file/d/1YC21sw3oQslxl2cTWFjp7fK67eJQd1kG/view?usp=drive_link"
                                                        target="_blank"
                                                        class="recruitment-blog-item__button"
                                                        >Tải tài liệu</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-item">
                                                <div class="recruitment-blog-item__thumbnail">
                                                    <div class="recruitment-blog-item__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Bản tin Gak tháng 11/2023"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-item__content">
                                                    <div class="recruitment-blog-item__meta">
                                                        <span class="recruitment-blog-item__cat"> Tạp Chí Hàng Tháng </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-item__title">
                                                        <a> Bản tin Gak tháng 11/2023 </a>
                                                    </h3>
                                                    <p class="recruitment-blog-item__description">
                                                        Giai đoạn nước rút của năm 2023, Gak cùng anh chị em Gak rs đang tràn đầy
                                                        năng lượng với kỉ lục xử lý hơn 12.000 đơn hàng trong ngày 11/11, tiến thẳng tới mục
                                                        tiêu lớn của năm 2023. Cùng theo dõi các chương trình hoạt động và kết quả thú vị
                                                        của Gak qua bản tin Gak tháng 11/2023 nhé!
                                                    </p>
                                                    <a
                                                        href="https://drive.google.com/file/d/1eslwXRKIvRL78g0CrPOi9YLPFXwmzkkI/view?usp=drive_link"
                                                        target="_blank"
                                                        class="recruitment-blog-item__button"
                                                        >Tải tài liệu</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column">
                                            <div class="recruitment-blog-item">
                                                <div class="recruitment-blog-item__thumbnail">
                                                    <div class="recruitment-blog-item__image">
                                                        <a target="_blank"
                                                            ><img src="/images/blog-VH-1.jpg" alt="Bản tin Gak tháng 10/2023"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <div class="recruitment-blog-item__content">
                                                    <div class="recruitment-blog-item__meta">
                                                        <span class="recruitment-blog-item__cat"> Tạp Chí Hàng Tháng </span>
                                                    </div>
                                                    <h3 class="recruitment-blog-item__title">
                                                        <a> Bản tin Gak tháng 10/2023 </a>
                                                    </h3>
                                                    <p class="recruitment-blog-item__description">
                                                        Bắt đầu chạy đua chặng nước rút của Gak với tháng 10 - tháng đầu tiên của quý
                                                        IV với rất nhiều hoạt động đặc biệt. Cùng theo dõi qua bản tin tháng 10 của chúng
                                                        mình nhé!
                                                    </p>
                                                    <a
                                                        href="https://drive.google.com/file/d/1jeicoXebz5JLenE7wEYBd76EuozHgEBL/view?usp=sharing"
                                                        target="_blank"
                                                        class="recruitment-blog-item__button"
                                                        >Tải tài liệu</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="recruitment-connect">
                <div class="container container--medium">
                    <div class="about-card">
                        <div class="about-card__content">
                            <h2 class="about-card__heading">
                                Trở thành<br />
                                một nhân tố tốt hơn
                            </h2>
                            <div class="about-card__description">
                                <p>Trưởng thành từ những công việc thiết thực, được học hỏi và trau đồi kiến thức để sống có ý nghĩa!</p>
                            </div>
                            <div class="about-card__button">
                                <UButton variant="ghost" color="none" to="" class="bg-white text-black h-10 px-8 rounded-full">
                                    Gia nhập ngay
                                </UButton>
                            </div>
                        </div>
                        <div class="about-card__image"><img loading="lazy" src="/images/company-banner.jpg" alt="Image" /></div>
                    </div>
                </div>
            </section>
            <section class="recruitment-social">
                <div class="container container--medium">
                    <div class="grid grid-cols-3 items-center">
                        <div class="grid__column three-twelfths mobile--one-half">
                            <div class="recruitment-social__item">
                                <div class="recruitment-social__icon"><img src="/images/facebook.png" alt="" /></div>
                                <div class="recruitment-social__content">
                                    <div class="recruitment-social__title">Fanpage</div>
                                    <a href="https://www.facebook.com/GAKBHLD" class="recruitment-social__link"> Life at GAK </a>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column three-twelfths mobile--one-half">
                            <div class="recruitment-social__item">
                                <div class="recruitment-social__icon"><img src="/images/linkedin.png" alt="" /></div>
                                <div class="recruitment-social__content">
                                    <div class="recruitment-social__title">Linkedin</div>
                                    <a href="https://www.linkedin.com/company/cong-ty-gak" class="recruitment-social__link"> GAK VN </a>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column three-twelfths mobile--one-half">
                            <div class="recruitment-social__item">
                                <div class="recruitment-social__icon"><img src="/images/tiktok.png" alt="" /></div>
                                <div class="recruitment-social__content">
                                    <div class="recruitment-social__title">Tiktok</div>
                                    <a href="https://www.tiktok.com/@congtygak" class="recruitment-social__link"> Life at GAK </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cs-cta">
                <div class="container container--medium prose prose-lg">
                    <h2 class="cs-cta__heading">Tham gia hội săn Deal GAK - Nhận ngay thông tin ưu đãi, xả kho và live stream tặng quà cực sốc!!!</h2>
                    <span class="flex items-center justify-center flex-col sm:flex-row gap-4">
                        <UButton to="https://www.facebook.com/groups/1587962561968530" target="_blank" size="lg" class="text-[#22c55ebf] bg-white rounded-3xl px-6 py-4 w-full justify-center sm:max-w-fit !no-underline uppercase" variant="ghost" color="none">
                            Tham gia hội săn Deal GAK
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
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { useLanguageLink } from '~/store/languageLink';
import { storeToRefs } from 'pinia';
defineComponent({
    props: ['Swiper', 'SwiperSlide'],
});
let modules = ref([Navigation, Pagination, Grid]);

const router = useRouter();
const localePath = useLocalePath();
const slug = ref(router.currentRoute.value.params.slug);
const { locale, t: trans } = useI18n();

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);

link.value = '/en/culture-gak'

function renderBullet(index, className) {
    return '<div class="custom-bullet ' + className + '">' + (index + 1) + '</div>';
}

let title = 'Văn hoá công ty GAK';
let pageDescription = 'Tử tế, chân thành và đoàn kết. Khám phá những điều chúng tôi làm, để tiến bước tới tương lai cùng chúng tôi.'
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
@import '@/assets/scss/mixins.scss';
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
    .cs-about__description {
        font-size: 1.125rem;
        font-weight: 500;
    }
    .cs-caption__wrapper {
        background-color: #000000;
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: center;
        padding: 3rem 3rem;
        .cs-caption__heading {
            text-transform: initial;
            position: relative;
            margin-bottom: 3rem;
            color: #fff;
            font-size: 2rem;
            margin-top: 0;
        }
        .cs-caption__author {
            color: #f2fd5d;
            font-size: 1.125rem;
        }
        .recruitment-culture__ten-facts {
            .ten-facts__item {
                background-color: #fff;
                border-radius: 1.5rem;
                padding: 15px;
                display: flex;
                height: 100%;
                min-height: 100px;
                .ten-facts__order {
                    color: #2f5acf;
                    font-size: 2.5rem;
                    font-weight: 700;
                    line-height: normal;
                }
                .ten-facts__description {
                    color: #000;
                    font-size: 1rem;
                    font-weight: 400;
                    padding: 0 0 0 15px;
                    text-align: justify;
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
    }
    .recruitment-send {
        background-color: hsla(0, 0%, 92.2%, 0.5);
        padding: 4rem 0;
        .recruitment-send__heading {
            color: #000;
            letter-spacing: 0.025em;
            text-align: center;
            font-size: 2.25rem;
            font-weight: 700;
            line-height: normal;
            text-transform: uppercase;
            padding: 0 6rem;
            @media screen and (max-width: 767px) {
                padding: 0 1rem;
            }
        }
        .recruitment-send__description {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 3rem;
            padding: 0 7rem;
            @media screen and (max-width: 767px) {
                padding: 0 1rem;
            }
        }
    }
    .recruitment-blogs {
        padding-top: 50px;
        .recruitment-blogs__heading {
            text-align: center;
            margin-bottom: 35px;
            font-size: 2.25rem;
        }
        .recruitment-blogs__left,
        .recruitment-blogs__right {
            padding: 45px 6px 0 66px;
            border-radius: 50px;
            background-color: #2f5acf;
            height: 100%;
            overflow: hidden;
            .recruitment-blogs__title {
                font-size: 18px;
                line-height: 27px;
                font-weight: 600;
                margin-bottom: 20px;
                color: #fff;
            }
            .recruitment-blogs__listings {
                max-height: 780px;
                overflow-y: auto;
                overflow-x: hidden;
                padding-right: 50px;
                -webkit-overflow-scrolling: touch;
                .recruitment-blog-grid {
                    display: flex;
                    flex-flow: column;
                    border-radius: 15px;
                    background: hsla(0, 0%, 92.2%, 0.5);
                    overflow: hidden;
                    height: 100%;
                    .recruitment-blog-grid__content {
                        display: flex;
                        flex-flow: column;
                        padding: 15px 20px;
                        height: 100%;
                        .recruitment-blog-grid__meta {
                            display: flex;
                            justify-content: space-between;
                            color: #6e798c;
                            font-size: 11px;
                            line-height: 14px;
                            font-weight: 600;
                            margin-bottom: 15px;
                        }
                        .recruitment-blog-grid__title {
                            font-size: 18px;
                            line-height: 20px;
                            font-weight: 500;
                            height: 83px;
                            color: #fff;
                            margin: 0 0 15px;
                            @include text-overflow(4);
                        }
                        .recruitment-blog-grid__link {
                            color: #f9f86c;
                            font-size: 11px;
                            font-size: 14px;
                            margin-top: auto;
                        }
                    }
                }
            }
        }
        .recruitment-blogs__right {
            background-color: #d9d9d9;
            .recruitment-blogs__title {
                color: #000;
            }
            .recruitment-blog-item {
                display: flex;
                border-radius: 15px;
                background: #fff;
                overflow: hidden;
                .recruitment-blog-item__image {
                    width: 195px;
                    height: 100%;
                    img {
                        height: 100%;
                        -o-object-fit: cover;
                        object-fit: cover;
                    }
                }
                .recruitment-blog-item__content {
                    padding: 25px 20px;
                }
                .recruitment-blog-item__meta {
                    display: flex;
                    justify-content: space-between;
                    color: #6e798c;
                    font-size: 11px;
                    line-height: 14px;
                    font-weight: 600;
                    margin-bottom: 15px;
                }
                .recruitment-blog-item__title {
                    font-size: 18px;
                    line-height: 20px;
                    font-weight: 500;
                    color: #000;
                    margin: 0 0 15px;
                }
                .recruitment-blog-item__button {
                    display: inline-flex;
                    align-items: center;
                    background: #f9f86c;
                    color: #000;
                    height: 30px;
                    border-radius: 10px;
                    padding: 0 15px;
                    font-size: 12px;
                }
            }
        }
    }
    .recruitment-connect {
        padding-top: 30px;
        padding-bottom: 25px;
        background-color: white;
        .about-card {
            display: flex;
            background-color: #f9f86c;
            border-radius: 50px;
            @media screen and (max-width: 767px) {
                flex-direction: column-reverse;
            }
            .about-card__content {
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                flex: 1;
                padding: 70px 40px 80px 60px;

                .about-card__heading {
                    font-weight: 400;
                    font-size: 58px;
                    line-height: 1.15em;
                    @media screen and (max-width: 767px) {
                        margin: auto 0;
                    }
                }
            }
            .about-card__image {
                border-radius: 50px;
                overflow: hidden;
                max-width: 720px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    .recruitment-social {
        .recruitment-social__item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            font-size: 14px;
            .recruitment-social__icon {
                width: 37px;
                height: 37px;
                margin-right: 10px;
            }
            .recruitment-social__link {
                text-decoration: underline;
                font-weight: 700;
            }
        }
    }
    .recruitment-jobs {
        background-color: #2f5acf;
        .recruitment-jobs__heading {
            text-align: center;
            color: #ffffff;
            text-transform: initial;
        }
        .recruitment-job__swiper {
            .recruitment-jobs-slide {
                text-align: center;
                font-size: 18px;
                padding-left: 40px;
                padding-right: 50px;
                height: calc((100% - 16px) / 2) !important;
                border-radius: 12px;
                /* Center slide text vertically */
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (max-width: 991px) {
                    height: 100% !important;
                }
                .job-item {
                    border-radius: 16px;
                    display: flex;
                    flex-flow: column;
                    height: 100%;
                    position: relative;
                    font-weight: 500;
                    .job-grid__thumbnail {
                        position: absolute;
                        top: 20px;
                        left: -38px;
                        width: 80px;
                        height: 80px;
                        border-radius: 16px;
                        z-index: 1;
                        background-color: #f9f86c;
                        .job-grid__image {
                            img {
                                margin: 0;
                            }
                        }
                    }
                    .job-grid__content {
                        padding: 22px 20px 22px 50px;
                        flex: 1;
                        display: flex;
                        flex-flow: column;
                        background-color: #fff;
                        border-radius: 16px;
                        text-align: left;
                        .job-grid__title {
                            font-size: 18px;
                            font-weight: 500;
                            margin-bottom: 0;
                            .menu-tag--new {
                                background: #2f5acf;
                                color: #fff;
                                font-style: normal;
                                font-weight: 500;
                                font-size: 10px;
                                text-align: center;
                                line-height: 17px;
                                padding: 0 7px;
                                border-radius: 5px;
                                margin-left: 5px;
                            }
                        }
                        .job-grid__description {
                            margin: 0 0 24px;
                            font-size: 14px;
                            color: #000;
                            line-height: 20px;
                        }
                        .job-grid__description + ul li {
                            display: flex;
                            align-items: center;
                            background-color: #f1f1f1;
                            padding: 0 20px;
                            height: 27px;
                            border-radius: 5px;
                            font-size: 12px;
                            margin: 0;
                            @media screen and (max-width: 767px) {
                                height: max-content;
                                padding: 0 4px;
                            }
                        }
                    }
                    .job-grid__footer {
                        display: flex;
                        flex: 1;
                        justify-content: space-between;
                        align-items: flex-end;
                        margin-top: 20px;
                        @media screen and (max-width: 767px) {
                            flex-wrap: wrap;
                        }
                        .job-grid__link {
                            display: flex;
                            align-items: center;
                            font-size: 11px;
                            color: #2f5acf;
                            cursor: pointer;
                        }
                    }
                }
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
