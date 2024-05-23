<template>
    <NuxtLayout name="main">
        <div v-if="!loadingProduct" class="product-page py-6 w-full">
            <div class="container mx-auto flex flex-col gap-4">
                <div class="product-image-swiper flex flex-col lg:flex-row justify-center items-start gap-4 relative pt-12">
                    <UBreadcrumb
                        class="w-full absolute -top-2 left-2 lg:left-[96px]"
                        :ui="{ol: 'gap-0 max-w-fit mt-0 pl-0'}" 
                        divider="/"
                        :links="[{ label: $t('Home'), to: localePath({ name: 'index' }) }, { label: productItem.data.name }]" />

                    <Swiper
                        v-if="!loadingProductItem"
                        @swiper="setThumbsSwiper"
                        :spaceBetween="16"
                        :slidesPerView="4"
                        :freeMode="true"
                        :watchSlidesProgress="true"
                        :modules="modules"
                        :lazy="true"
                        :direction="'vertical'"
                        class="!hidden lg:!block !w-[60px] !mx-0 !shrink-0 thumb-product-swiper !sticky top-2.5">
                        <SwiperSlide v-if="productItem.data.video_link" class="!h-[80px] w-full rounded-md relative">
                            <video class="pointer-events-none">
                                <source :src="productItem.data.video_link" />
                            </video>
                        </SwiperSlide>
                        <SwiperSlide
                            v-if="productItemCurrent && productItemCurrent.thumb_image.length > 0"
                            v-for="(image, index) in productItemCurrent.thumb_image"
                            v-show="!productItem.data.video_link ? index < 4 : index < 3"
                            class="!h-[80px] w-full rounded-md relative">
                            <span
                                v-if="
                                    (!productItem.data.video_link && productItemCurrent.thumb_image.length > 4 && index == 3) ||
                                    (productItem.data.video_link && productItemCurrent.thumb_image.length > 3 && index == 2)
                                "
                                class="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-md bg-gray-500/50 text-white font-bold text-lg"
                                >+{{ productItemCurrent.thumb_image.length - index - 1 }}</span
                            >
                            <img :src="image" loading="lazy" alt="" class="w-full h-full object-cover rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide
                            v-else-if="productItemCurrent && productItemCurrent.thumb_image.length <= 0"
                            class="!h-[80px] w-full rounded-md">
                            <img
                                :src="productItemCurrent ? productItemCurrent.image_url : ''"
                                alt="No image"
                                class="w-full h-full object-cover rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide
                            v-else-if="!productItemCurrent && productItem.data.thumb_image.length > 0"
                            v-for="(image, index) in productItem.data.thumb_image"
                            v-show="!productItem.data.video_link ? index < 4 : index < 3"
                            class="!h-[80px] w-full rounded-md relative">
                            <span
                                v-if="
                                    (!productItem.data.video_link && productItem.data.thumb_image.length > 4 && index == 3) ||
                                    (productItem.data.video_link && productItem.data.thumb_image.length > 3 && index == 2)
                                "
                                class="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-md bg-gray-500/50 text-white font-bold text-lg"
                                >+{{ productItem.data.thumb_image.length - index - 1 }}</span
                            >
                            <img :src="image" loading="lazy" alt="" class="w-full h-full object-cover rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide
                            v-else-if="!productItemCurrent && productItem.data.thumb_image.length <= 0"
                            class="!h-[120px] w-full rounded-md">
                            <img
                                :src="productItem.data ? productItem.data.image_url : ''"
                                alt="No image"
                                class="w-full h-full object-cover rounded-md" />
                        </SwiperSlide>
                    </Swiper>
                    <div v-show="!thumbsSwiper" class="loading-frame flex flex-col gap-4">
                        <USkeleton class="min-w-[60px] h-[80px] rounded-md"></USkeleton>
                        <USkeleton class="min-w-[60px] h-[80px] rounded-md"></USkeleton>
                    </div>
                    <div
                        v-show="thumbsSwiper"
                        class="main-product-swiper w-full lg:min-w-[540px] lg:w-[540px] lg:sticky top-2 bg-[#f1f1f1]">
                        <Swiper
                            v-if="!loadingProductItem"
                            :spaceBetween="10"
                            :lazy="true"
                            :navigation="{
                                nextEl: '.main-product-swiper .next-product-btn',
                                prevEl: '.main-product-swiper .prev-product-btn',
                            }"
                            :thumbs="{ swiper: thumbsSwiper }"
                            :modules="modules"
                            class="!mx-0">
                            <SwiperSlide v-if="productItem.data.video_link" class="!flex justify-center !h-auto">
                                <video controls class="h-full w-full object-contain" autoplay muted>
                                    <source
                                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                        type="video/mp4" />
                                </video>
                            </SwiperSlide>
                            <SwiperSlide
                                v-if="productItemCurrent && productItemCurrent.thumb_image.length > 0"
                                v-for="image in productItemCurrent.thumb_image"
                                class="!flex justify-center !h-auto aspect-[3/4]">
                                <img :src="image" loading="lazy" alt="" class="rounded-md object-contain" />
                            </SwiperSlide>
                            <SwiperSlide
                                v-else-if="productItemCurrent && productItemCurrent.thumb_image.length <= 0"
                                class="!h-[200px] w-full rounded-md">
                                <img
                                    :src="productItemCurrent ? productItemCurrent.image_url : ''"
                                    alt="No image"
                                    class="w-full h-full object-cover rounded-md" />
                            </SwiperSlide>
                            <SwiperSlide
                                v-else-if="!productItemCurrent && productItem.data.thumb_image.length > 0"
                                v-for="image in productItem.data.thumb_image"
                                class="!flex justify-center !h-auto aspect-[3/4]">
                                <img :src="image" loading="lazy" alt="" class="w-full h-full rounded-md object-contain" />
                            </SwiperSlide>

                            <SwiperSlide
                                v-else-if="!productItemCurrent && productItem.data.thumb_image.length <= 0"
                                class="!h-[120px] w-full rounded-md">
                                <img
                                    :src="productItem.data ? productItem.data.image_url : ''"
                                    alt="No image"
                                    class="w-full h-full object-cover rounded-md" />
                            </SwiperSlide>
                            <template v-slot:container-end>
                                <UButton
                                    variant="ghost"
                                    color="none"
                                    class="prev-product-btn w-[40px] h-[40px] absolute bottom-4 right-6 -translate-x-full z-[99] !bg-white text-black rounded-full justify-center hover:!bg-black hover:!text-white"
                                    :padded="false">
                                    <UIcon class="text-[22px]" name="i-heroicons-arrow-long-left" dynamic />
                                </UButton>
                                <UButton
                                    variant="ghost"
                                    color="none"
                                    class="next-product-btn w-[40px] h-[40px] absolute bottom-4 right-4 z-[99] !bg-white text-black rounded-full justify-center hover:!bg-black hover:!text-white"
                                    :padded="false">
                                    <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                                </UButton>
                            </template>
                        </Swiper>
                    </div>

                    <div v-show="!thumbsSwiper" class="loading-frame flex flex-col gap-4">
                        <USkeleton class="min-w-[350px] w-[350px] h-[500px] rounded-md"></USkeleton>
                    </div>
                    <div class="product-information flex flex-col gap-4 px-4">
                        <div class="product-name flex flex-col gap-2">
                            <span class="font-bold text-[28px] lg:text-[32px]">{{
                                productItemCurrent ? productItemCurrent.name : productItem.data.name
                            }}</span>
                        </div>
                        <div class="product-rate flex items-center gap-2 text-black">
                            <NuxtRating
                                class="w-[220px]"
                                :read-only="true"
                                :ratingValue="productItem.data.average_rate"
                                :active-color="'green'"
                                rating-content="⭐" />
                            <div class="fs-12">({{ productItem.data.rate_count }})</div>
                            <div>|</div>
                            <div class="fs-12">{{ $t('Sold') + ' (web): ' + productItem.data.qty_sold }}</div>
                        </div>

                        <div v-if="productItemCurrent" class="product-price font-bold text-[22px]">
                            <div v-if="productItemCurrent.percent == 0" class="original-price">
                                {{ formatPriceProduct(productItemCurrent.price) + 'đ' }}
                            </div>
                            <div v-else class="discount-price">
                                <div class="after-discount">
                                    {{ formatPriceProduct(productItemCurrent.price_discount) + 'đ' }}
                                </div>
                                <div class="original-price">{{ formatPriceProduct(productItemCurrent.price) + 'đ' }}</div>
                                <div class="discount-tag">{{ productItemCurrent.percent + '%' }}</div>
                            </div>
                        </div>
                        <div v-else class="product-price font-bold text-[22px]">
                            <div v-if="productItem.data.percent == 0" class="original-price">
                                {{ formatPriceProduct(productItem.data.price) + 'đ' }}
                            </div>
                            <div v-else class="discount-price">
                                <div class="after-discount">
                                    {{ formatPriceProduct(productItem.data.price_discount) + 'đ' }}
                                </div>
                                <div class="original-price">{{ formatPriceProduct(productItem.data.price) + 'đ' }}</div>
                                <div class="discount-tag">{{ productItem.data.percent + '%' }}</div>
                            </div>
                        </div>
                        <div v-if="productItem.data.compaign_name" class="product-compaign fs-14 text-blue-600 italic font-semibold">
                            {{ product.product_compaign_name }}
                        </div>

                        <div
                            v-for="variantAttribute in productItem.data.variantAttribute"
                            class="flex flex-col gap-2"
                            :class="{
                                'product-color-list': variantAttribute.is_color,
                                'product-size-list': !variantAttribute.is_color,
                            }">
                            <span class="text-[15px]"
                                >{{ variantAttribute.name }}: <b>{{ getAttributeName(variantAttribute.id) }}</b></span
                            >
                            <div v-if="variantAttribute.is_color" class="color-list flex items-center flex-wrap gap-4">
                                <div v-for="(attribute, index) in variantAttribute.attributes">
                                    <button
                                        v-if="checkEventNone(attribute.attribute_id, variantAttribute.id)"
                                        class="color-list-item w-12 h-8 rounded-3xl ring-2 ring-transparent"
                                        :class="{ '!ring-green-500': checkActive(attribute.attribute_id) }"
                                        :style="{ backgroundColor: attribute.attribute_color }"
                                        @click="selectVariant(variantAttribute, attribute)"></button>
                                    <button
                                        v-else
                                        class="color-list-item w-12 h-8 rounded-3xl ring-2 ring-transparent"
                                        :style="{ backgroundColor: attribute.attribute_color }">
                                        <div class="check-mark"></div>
                                    </button>
                                </div>
                                <UButton
                                    v-if="productItemCurrent"
                                    :to="localePath({ name: 'product-slug', params: { slug: router.currentRoute.value.params.slug } })"
                                    variant="ghost"
                                    color="blue"
                                    icon="i-heroicons-arrow-path"
                                    @click="resetProductPage(true)"
                                    >{{ $t('Cài lại') }}</UButton
                                >
                            </div>
                            <div v-else class="size-list flex items-center gap-4">
                                <div v-for="(attribute, index) in variantAttribute.attributes">
                                    <button
                                        v-if="checkEventNone(attribute.attribute_id, variantAttribute.id) && !variantAttribute.is_main"
                                        :class="{ '!bg-black !text-white': checkActive(attribute.attribute_id) }"
                                        class="size-list-item bg-gray-200 flex items-center justify-center w-fit py-2 px-3 h-10 rounded-2xl font-bold fs-14"
                                        @click="selectVariant(variantAttribute, attribute)">
                                        {{ attribute.attribute_name }}
                                    </button>
                                    <button
                                        v-else-if="
                                            !checkEventNone(attribute.attribute_id, variantAttribute.id) &&
                                            !variantAttribute.is_main &&
                                            !productItemCurrent
                                        "
                                        :class="{ '!bg-black !text-white': checkActive(attribute.attribute_id) }"
                                        class="size-list-item bg-gray-200 flex items-center justify-center w-fit py-2 px-3 h-10 rounded-2xl font-bold fs-14"
                                        @click="selectVariant(variantAttribute, attribute)">
                                        {{ attribute.attribute_name }}
                                    </button>
                                    <button
                                        v-else
                                        class="size-list-item bg-gray-200 flex items-center justify-center w-fit py-2 px-3 h-10 rounded-2xl font-bold fs-14">
                                        {{ attribute.attribute_name }}
                                        <div class="check-mark"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <span class="fs-14"
                            >{{ $t('Số lượng còn') }}
                            <b>{{
                                productItemCurrent && productItemCurrent.qty
                                    ? productItemCurrent.qty
                                    : productItem.data.variants.length == 0 && productItem.data.variantAttribute.length == 0
                                    ? productItem.data.qty
                                    : 0
                            }}</b></span
                        >
                        <div v-if="productItemCurrent" class="product-add-to-cart mt-auto flex items-center gap-4">
                            <div
                                class="select-amount flex items-center justify-between w-1/4 max-w-[200px] border h-12 px-4 rounded-3xl border-black">
                                <UIcon name="i-heroicons-minus" @click="handleQuantity(-1)"></UIcon>
                                {{ quantity }}
                                <UIcon name="i-heroicons-plus" @click="handleQuantity(1)"></UIcon>
                            </div>
                            <NuxtLink
                                class="flex flex-1 h-12 rounded-full justify-center"
                                :class="productItemCurrent.qty > 0 ? '' : 'pointer-events-none'"
                                @click="handleAddToCookie(productItemCurrent, true)"
                                :to="localePath({ name: 'cart' })">
                                <UButton
                                    :class="productItemCurrent.qty > 0 ? '' : 'bg-gray-400'"
                                    class="flex-1 h-12 rounded-full justify-center">
                                    <UIcon name="i-heroicons-shopping-bag" class="text-xl"></UIcon>
                                    <span>Thêm vào giỏ hàng</span>
                                </UButton>
                            </NuxtLink>
                        </div>
                        <div v-else-if="productItem.data.variants.length == 0" class="product-add-to-cart mt-auto flex items-center gap-4">
                            <div
                                class="select-amount flex items-center justify-between w-1/4 max-w-[200px] border h-12 px-4 rounded-3xl border-black">
                                <UIcon name="i-heroicons-minus" @click="handleQuantity(-1, false)"></UIcon>
                                {{ quantity }}
                                <UIcon name="i-heroicons-plus" @click="handleQuantity(1, false)"></UIcon>
                            </div>
                            <NuxtLink
                                class="flex flex-1 h-12 rounded-full justify-center"
                                :class="productItem.data.qty > 0 ? '' : 'pointer-events-none'"
                                @click="handleAddToCookie(productItem.data, false)"
                                :to="localePath({ name: 'cart' })">
                                <UButton
                                    :class="productItem.data.qty > 0 ? '' : 'bg-gray-400'"
                                    class="flex-1 h-12 rounded-full justify-center">
                                    <UIcon name="i-heroicons-shopping-bag" class="text-xl"></UIcon>
                                    <span>Thêm vào giỏ hàng</span>
                                </UButton>
                            </NuxtLink>
                        </div>
                        <UDivider />
                        <div class="delivery-box flex flex-col gap-4">
                            <button class="flex items-center gap-2">
                                <img src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" class="h-8 w-8 object-contain" alt="" />
                                <a href="https://zalo.me/569133339" class="text-blue-700 fs-14 font-bold">Chat với GAK để được tư vấn ngay ( 08:00 - 17:30)</a>
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                            </button>
                            <div class="delivery-information p-6 bg-gray-200 rounded-lg flex flex-col gap-4 fs-14 font-medium">
                                <span class="font-bold">Giao hàng toàn quốc nhanh chóng tiện lợi</span>
                                <div class="flex items-center gap-2">
                                    <UIcon class="text-[24px] text-green-500" name="i-mdi-clock-fast" dynamic />
                                    <span>Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <UIcon class="text-[24px] text-green-500" name="i-mdi-truck-delivery-outline" dynamic />
                                    <span>Ở tỉnh thành khác nhận hàng từ 2-5 ngày</span>
                                </div>
                            </div>
                        </div>
                        <UDivider />
                        <div class="grid grid-cols-2 fs-14 gap-8">
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-mdi-phone-return" dynamic />
                                <span>Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-game-icons-return-arrow" dynamic />
                                <span>30 ngày đổi trả hàng (Hàng trơn chưa dùng)</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-fluent-phone-checkmark-20-regular" dynamic />
                                <span>Hotline <a href="tel: 0569133339">056.913.33.39</a> hoặc <a href="tel: 0947636569">094.763.65.69</a> hỗ trợ từ 8h00 - 17h30 mỗi ngày</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-ph-clock-clockwise-bold" dynamic />
                                <span>Tiếp nhận đơn hàng và phản hồi trong vòng 1 tiếng</span>
                            </div>
                        </div>
                        <UDivider />
                    </div>
                </div>
                <div v-if="productItem.data.highlight" class="product-features p-4 md:p-6 bg-gray-200 rounded-md flex flex-col gap-6 mt-[80px]">
                    <h3 class="product-features__heading !text-2xl font-bold">Đặc điểm nổi bật</h3>
                    <div class="product-details flex justify-between w-full">
                        <div class="information flex flex-col gap-4">
                            <h3 class="font-bold !m-0">Thông tin sản phẩm</h3>
                            <div v-html="productItem.data.highlight"></div>
<!--                            <ul class="product-details-list !list-['-'] !mt-0 fs-14 font-semibold">-->
<!--                                <li v-for="feature in product.product_information" class="product-details__item pl-3">-->
<!--                                    {{ feature }}-->
<!--                                </li>-->
<!--                            </ul>-->
                        </div>
                        <div v-if="productItem.data.highlight_image_url" class="image-example w-1/2 max-w-[300px] m-auto">
                            <img :src="productItem.data.highlight_image_url" class="w-[300px] h-[300px] object-contain" alt="" />
                        </div>
                    </div>
                </div>
                <div class="product-more-details">
                    <h3 class="!text-2xl font-extrabold">Chi tiết sản phẩm</h3>
                    <div v-html="productItem.data.description"></div>
                </div>
                <div v-if="!loadingProductHot && productHot.data" class="product-similar my-8">
                    <h3 class="w-full text-center !text-3xl !mb-8 font-extrabold">SẢN PHẨM BẠN CÓ THỂ THÍCH</h3>
                    <Swiper
                        :spaceBetween="0"
                        :navigation="{
                            nextEl: '.similar-products-swiper .next-similar-btn',
                            prevEl: '.similar-products-swiper .prev-similar-btn',
                        }"
                        :modules="modulesSimilar"
                        :slidesPerView="1"
                        :slidesPerGroup="1"
                        :grabCursor="true"
                        :loop="true"
                        :breakpoints="{
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 12,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 14,
                            },
                            567: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                        }"
                        class="similar-products-swiper relative">
                        <SwiperSlide v-for="similarProduct in productHot.data">
                            <ProductCard :product="similarProduct" />
                        </SwiperSlide>
                        <template v-slot:container-end>
                            <UButton
                                variant="ghost"
                                color="none"
                                class="prev-similar-btn w-[40px] h-[40px] absolute top-1/2 left-0 -translate-y-1/2 z-[99] !bg-gray-300 text-black rounded-full justify-center"
                                :padded="false">
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-left" dynamic />
                            </UButton>
                            <UButton
                                variant="ghost"
                                color="none"
                                class="next-similar-btn w-[40px] h-[40px] absolute top-1/2 right-0 -translate-y-1/2 z-[99] !bg-gray-300 text-black rounded-full justify-center"
                                :padded="false">
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                            </UButton>
                        </template>
                    </Swiper>
                </div>
                <div class="product-reviews flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-[48px]">
                    <div class="product-rating flex flex-col gap-4 items-center bg-gray-100 rounded-md p-8 w-max lg:sticky top-2">
                        <div class="uppercase font-bold">Đánh giá sản phẩm</div>
                        <div class="font-bold text-[4rem]">{{ productItem.data.average_rate }}</div>
                        <NuxtRating
                            class="w-[220px]"
                            :read-only="true"
                            :ratingValue="productItem.data.average_rate"
                            :active-color="'green'"
                            rating-content="⭐" />
                        <div v-if="productItem.data.rate_count > 0" class="italic fs-14 leading-relaxed font-medium">
                            {{ productItem.data.rate_count + ' ' + $t('Review') }}
                        </div>
                    </div>
                    <div v-if="!loadingReviewProduct" class="grid grid-cols-1 sm:grid-cols-2 flex-1 gap-8">
                        <div
                            v-if="reviewProduct.data.length > 0"
                            v-for="review in reviewProduct.data"
                            class="review-item flex flex-col justify-start gap-4 py-4 fs-14 font-medium border-b">
                            <div class="flex flex-col gap-2">
                                <NuxtRating
                                    class="w-[220px]"
                                    :read-only="true"
                                    :ratingValue="review.rate"
                                    :rating-size="'18px'"
                                    :active-color="'green'"
                                    rating-content="⭐" />
                                <div class="review-name font-bold capitalize">
                                    {{ review.customer_name }}
                                </div>
                                <div v-if="review.option_name" class="review-collection-product fs-12 italic">
                                    {{ review.option_name }}
                                </div>
                            </div>
                            <div class="review-content">
                                {{ review.description }}
                            </div>
                            <div v-if="review.reply" class="feedback-review bg-gray-300 p-4 rounded-lg font-semibold">
                                {{ review.reply }}
                            </div>
                            <div class="review-date text-gray-500">
                                {{ moment(review.created_at).format('DD/MM/YYYY  HH:mm:ss') }}
                            </div>
                        </div>
                        <div
                            v-else
                            class="empty-review h-[224px] col-span-2 flex items-center justify-center border border-dashed border-gray-200 rounded-lg font-medium text-gray-500">
                            {{ 'Chưa có đánh giá nào cho sản phẩm này' }}
                        </div>
                        <div
                            v-if="reviewProduct.data.length > 0 && pageTotal > 0"
                            class="flex flex-wrap justify-between items-center w-full col-span-2">
                            <div class="flex items-center gap-1.5">
                                <span class="text-sm leading-5">{{ $t('Rows per page') }}:</span>
                                <USelect v-model="pageCount" :options="[8, 25, 50]" class="me-2 w-20" size="xs" />
                            </div>
                            <div>
                                <span class="text-sm leading-5">
                                    Hiển thị
                                    <span class="font-medium">{{ pageFrom }}</span>
                                    đến
                                    <span class="font-medium">{{ pageTo }}</span>
                                    trong
                                    <span class="font-medium">{{ pageTotal }}</span>
                                    tổng số
                                </span>
                            </div>

                            <UPagination
                                v-model="page"
                                :page-count="pageCount"
                                :total="pageTotal"
                                :ui="{
                                    wrapper: 'flex items-center gap-1',
                                    rounded: '!rounded-full min-w-[32px] justify-center',
                                    default: {
                                        activeButton: {
                                            variant: 'outline',
                                        },
                                    },
                                }" />
                        </div>
                    </div>
                    <div v-else class="grid grid-cols-1 sm:grid-cols-2 flex-1 gap-8">
                        <div v-for="item in 4" class="skeleton-btn">
                            <div class="flex flex-col gap-2">
                                <USkeleton class="h-16"></USkeleton>
                                <div class="review-name font-bold capitalize">
                                    <USkeleton class="h-8 w-1/2"></USkeleton>
                                </div>
                                <div class="review-collection-product fs-12 italic">
                                    <USkeleton  class="h-24"></USkeleton>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="loading-wrapper !mt-[128px]">
            <div class="loading"></div>
            <div id="loading-text">Loading...</div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation, Autoplay, Thumbs } from 'swiper/modules';
import ProductCard from '@/components/products/ProductCard';
import moment from 'moment';

const route = useRoute();
const router = useRouter();
const toast = useToast();

let modules = ref([Navigation, Thumbs]);
let modulesSimilar = ref([Navigation]);

const { locale, t: trans } = useI18n();
const localePath = useLocalePath();
const colorProductActive = ref(0);
const productSizeIndex = ref(null);
const quantity = ref(1);
const productVariants = ref([]);
const productVariantSlugs = ref({});
const productItemCurrent = ref(null);

const sort = ref({ direction: 'desc' });
const page = ref(1);
const pageCount = ref(8);
const pageTotal = ref(0); // This value should be dynamic coming from the API
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1);
const pageTo = computed(() => Math.min(page.value * pageCount.value, pageTotal.value));

const productColor = ref(null);
const productSize = ref(null);
const productSilk = ref(null);
const indexActive = ref(0);
const indexActiveColor = ref(0);
const product1 = ref({});
const product = ref({
    product_information: [
        'Chất liệu 100% Polyester',
        'Kiểu dệt Mini Square hạn chế sờn vải, tăng độ bền, ít bị rách hay thủng lỗ',
        'Các lỗ nhỏ trên vải giúp thoáng khí hơn',
        'Tính năng Wicking thấm hút vượt trội',
        'Công nghệ Ex-Dry nhanh khô thoáng mát',
        'Logo in phản quang trong bóng tối',
        'Sản phẩm được đánh giá phù hợp với hoạt động chạy bộ bởi các Runner',
        'Tự hào sản xuất tại Việt Nam',
        'Người mẫu: 181cm - 76kg, mặc áo 2XL',
    ],
    product_for_example:
        'https://media.coolmate.me/cdn-cgi/image/width=1426,height=2100,quality=80,format=auto/uploads/January2024/23CMAW.TT004.3D.3K.png',
});
const loadingProductItem = ref(true);
const selectedProductVariant = ref({});
const imageList = computed(() => product.value.product_images[colorProductActive.value]);
const thumbsSwiper = ref(null);
let reviewJson = ref([]);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const setProductSize = (size, index) => {
    productSize.value = size;
    productSizeIndex.value = index;
    quantity.value = 1;
};
const handleQuantity = (index, variant = true) => {
    if (index == 1 && variant) {
        if (quantity.value < productItemCurrent.value.qty) {
            quantity.value += index;
        }
    } else if (variant) {
        if (quantity.value > 1) {
            quantity.value += index;
        }
    }
    if (index == 1 && variant == false) {
        if (quantity.value < productItem.value.data.qty) {
            quantity.value += index;
        }
    } else if (variant == false) {
        if (quantity.value > 1) {
            quantity.value += index;
        }
    }
};

// let initialProduct = (product) => {
//     let productColorIndex = product.variantAttribute.findIndex((attr) => attr.name == 'Màu sắc');
//     let productSizeIndex = product.variantAttribute.findIndex((attr) => attr.name == 'Size');
//     let productSilkIndex = product.variantAttribute.findIndex((attr) => attr.name == 'Chất vải');
//     if (productColorIndex != -1) {
//         productColor.value = product.variantAttribute[productColorIndex];
//     }
//     if (productSizeIndex != -1) {
//         productSize.value = product.variantAttribute[productSizeIndex];
//     }
//     if (productSilkIndex != -1) {
//         productSilk.value = product.variantAttribute[productSilkIndex];
//     }
//     let optionsFirst = [];
//     if (router.currentRoute.value.query && router.currentRoute.value.query.color) {
//         optionsFirst.push(Number(router.currentRoute.value.query.color));
//         let colorIndex = -1;
//         if (productColor.value) {
//             colorIndex = productColor.value.attributes.findIndex((item) => item.attribute_id == router.currentRoute.value.query.color);
//             if (colorIndex != -1) {
//                 indexActiveColor.value = colorIndex;
//                 selectedProductVariant.value[productColor.value.name] = productColor.value.attributes[colorIndex].attribute_name;
//             }
//         }
//     } else {
//         if (productColor.value) {
//             optionsFirst.push(productColor.value.attributes[0].attribute_id);
//             selectedProductVariant.value[productColor.value.name] = productColor.value.attributes[0].attribute_name;
//             router.push({ path: router.currentRoute.value.path, query: { color: productColor.value.attributes[0].attribute_id } });
//         }
//     }
//     if (productSize.value) {
//         optionsFirst.push(productSize.value.attributes[0].attribute_id);
//         selectedProductVariant.value[productSize.value.name] = productSize.value.attributes[0].attribute_name;
//     }
//     if (productSilk.value) {
//         optionsFirst.push(productSilk.value.attributes[0].attribute_id);
//         selectedProductVariant.value[productSilk.value.name] = productSilk.value.attributes[0].attribute_name;
//     }
//
//     let findProduct = product.variants.find((item) => JSON.stringify(item.options.sort()) == JSON.stringify(optionsFirst.sort()));
//     if (findProduct) {
//         productItemCurrent.value = findProduct;
//         productVariants.value = [...findProduct.option_all];
//     } else {
//         router.push({ path: router.currentRoute.value.path });
//     }
//
//     loadingProductItem.value = false;
// };

let initialProduct = (product) => {
    let findProduct = null;
    if (router.currentRoute.value.query?.code) {
        findProduct = product.variants.find((item) => item.code == router.currentRoute.value.query.code);
        if (findProduct) {
            productItemCurrent.value = { ...findProduct };
            productVariants.value = [...findProduct.option_all];
        } else {
            let filteredAttributes = product.variantAttribute.reduce((acc, variant) => {
                if (!variant.is_color) {
                    // Chỉ xử lý những variant có is_color là false
                    let firstAttribute = variant.attributes[0]; // Lấy phần tử đầu tiên trong attributes
                    if (firstAttribute) {
                        // Kiểm tra phần tử đầu có is_main là false
                        acc.push({
                            attribute_id: firstAttribute.attribute_id,
                            attribute_group_id: variant.id,
                        });
                    }
                }
                return acc;
            }, []);

            productVariants.value = [...filteredAttributes];
            router.push({ path: router.currentRoute.value.path });
        }
        loadingProductItem.value = false;
    } else {
        let filteredAttributes = product.variantAttribute.reduce((acc, variant) => {
            if (!variant.is_color) {
                // Chỉ xử lý những variant có is_color là false
                let firstAttribute = variant.attributes[0]; // Lấy phần tử đầu tiên trong attributes
                if (firstAttribute) {
                    // Kiểm tra phần tử đầu có is_main là false
                    acc.push({
                        attribute_id: firstAttribute.attribute_id,
                        attribute_group_id: variant.id,
                    });
                }
            }
            return acc;
        }, []);

        productVariants.value = [...filteredAttributes];
        loadingProductItem.value = false;
        // let attributeIds = product.variantAttribute.map((item) =>
        //     item.attributes && item.attributes.length > 0 ? item.attributes[0].attribute_id : undefined,
        // );
        // findProduct = product.variants.find((item) => JSON.stringify(item.options.sort()) == JSON.stringify(attributeIds.sort()));
    }
};
const formatPriceProduct = (item) => {
    return new Intl.NumberFormat('en-US').format(item);
};

const handleAddToCookie = (item, variant = true) => {
    let productLists = useCookie('products-cart', {
        default: () => [],
        maxAge: 60 * 60 * 24 * 7,
    });
    if (productLists.value.length == 0) {
        if (item.id) {
            if (variant == true) {
                productLists.value.push({
                    variant_id: item.id,
                    product_id: productItem.value.data.id,
                    quantity: quantity.value,
                });
            } else {
                productLists.value.push({
                    variant_id: null,
                    product_id: item.id,
                    quantity: quantity.value,
                });
            }

            toast.add({
                title: trans('Chúc mừng') + ' !',
                description: trans('Sản phẩm đã được thêm vào giỏ hàng'),
                timeout: 3000,
                icon: 'i-heroicons-check-badge',
                color: 'green',
            });
        }
    } else {
        let productIndex = productLists.value.findIndex(
            (ele) => (ele.product_id == productItem.value.data.id && ele.variant_id == null) || ele.variant_id == item.id,
        );
        if (productIndex == -1) {
            if (variant == true) {
                productLists.value.push({
                    variant_id: item.id,
                    product_id: productItem.value.data.id,
                    quantity: quantity.value,
                });
            } else {
                productLists.value.push({
                    variant_id: null,
                    product_id: item.id,
                    quantity: quantity.value,
                });
            }
            toast.add({
                title: trans('Chúc mừng') + ' !',
                description: trans('Sản phẩm đã được thêm vào giỏ hàng'),
                timeout: 3000,
                icon: 'i-heroicons-check-badge',
                color: 'green',
            });
        } else {
            productLists.value[productIndex].quantity += quantity.value;
            toast.add({
                title: trans('Chúc mừng') + ' !',
                description: trans('Sản phẩm đã được thêm vào giỏ hàng'),
                timeout: 3000,
                icon: 'i-heroicons-check-badge',
                color: 'green',
            });
        }
    }
};
//DATA
const refreshData = ref(0);
const {
    data: productItem,
    pending: loadingProduct,
    error: errorGetProduct,
} = await useLazyAsyncData(
    'product-item',
    async () =>
        useOriginalFetch(`/api/v1/products/${router.currentRoute.value.params.slug}`, {
            query: {
                code: router.currentRoute.value.query?.code,
            },
        }),
    {
        default: () => [],
        watch: [refreshData],
    },
);
if (errorGetProduct.value) {
    router.push({ name: `index___${locale.value}` });
}
const { data: productHot, pending: loadingProductHot } = await useLazyAsyncData(
    'product-hot',
    async () =>
        useOriginalFetch('/api/v1/products', {
            params: {
                sort: {
                    'desc[0]': 'id',
                },
                is_hot: 1,
                limit: 20,
            },
        }),
    {
        default: () => [],
        watch: [refreshData],
    },
);
const { data: reviewProduct, pending: loadingReviewProduct } = await useLazyAsyncData(
    'product-review',
    async () =>
        useOriginalFetch(`/api/v1/products/${router.currentRoute.value.params.slug}/reviews`, {
            params: {
                page: page.value,
                limit: pageCount.value,
                order: sort.value.direction,
            },
        }),
    {
        default: () => [],
        watch: [refreshData, page],
    },
);

function selectVariant(group, attribute) {
    // let findProduct = product.variants.find((item) => JSON.stringify(item.options.sort()) == JSON.stringify(optionsFirst.sort()));
    let index = productVariants.value.findIndex((item) => item.attribute_group_id === group.id);

    if (index !== -1 && productVariants.value[index] !== undefined) {
        productVariants.value[index].attribute_id = attribute.attribute_id;
        productVariants.value[index].attribute_group_id = group.id;
    } else {
        productVariants.value.push({
            attribute_id: attribute.attribute_id,
            attribute_group_id: group.id,
        });
    }

    productVariantSlugs.value[group.slug] = attribute.attribute_slug;
    let checkProduct = getProductItem();
    if (checkProduct && (!productItemCurrent.value || checkProduct.code != productItemCurrent.value.code)) {
        loadingProductItem.value = true;
        productItemCurrent.value = checkProduct;
        selectedProductVariant.value[group.slug] = attribute.attribute_name;
        loadingProductItem.value = false;
        const query = JSON.parse(JSON.stringify(productVariantSlugs.value));
        // refreshData.value++;
        // router.push({
        //     name: `product-slug___${locale.value}`,
        //     params: { slug: router.currentRoute.value.params.slug },
        //     query: query
        // });
        if (productItemCurrent.value) {
            router.replace({
                query: { code: productItemCurrent.value.code },
            });
        }
    }
}

function arraysMatch(arr1, arr2) {
    arr2 = arr2.sort();
    arr1 = arr1.sort();
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
function getProductItem() {
    const attributeIDs = productVariants.value.map((item) => item.attribute_id);
    const attributeGroupIDs = productVariants.value.map((item) => item.attribute_group_id);

    const matchingVariant = productItem.value.data.variants.find((variant) => {
        // Chú ý rằng bạn cần phải so sánh với 'options' và 'option_group' từ dữ liệu của variant
        return arraysMatch(variant.options, attributeIDs) && arraysMatch(variant.option_group, attributeGroupIDs);
    });

    if (matchingVariant && matchingVariant.image_url && matchingVariant.thumb_image.length > 0) {
        return matchingVariant;
    } else if (matchingVariant) {
        toast.add({
            title: trans('Thông báo') + ' !',
            description: trans('Sản phẩm đang tạm ngưng'),
            timeout: 3000,
            icon: 'i-heroicons-check-badge',
            color: 'red',
        });
        return null;
    } else {
        return null;
    }

    // Hàm để chuyển đổi mảng option_all thành một string định dạng để so sánh
    /*const stringifyOptions = (options) =>
        options.map(o => `${o.attribute_id}:${o.attribute_group_id}`).sort().join(',');
    let stringifiedOptionAll = stringifyOptions(productVariants.value);


    console.log(productItem.value);

// Tìm item có option_all khớp với mảng cung cấp
    let matchingItem = productItem.value.data.variants.find(variant => stringifyOptions(variant.option_all) === stringifiedOptionAll);

    if (matchingItem) {
        // cấponsole.log("Mảng thuộc về item:", matchingItem);
        return matchingItem
    } else {
        // console.log("Không tìm thấy item nào có mảng 'option_all' phù hợp.");
        return null;
    }
    */

    // // Duyệt qua từng phần tử trong mảng variants
    // for (const variant of productItem.value.data.variants) {
    //     // Tạo mảng optionAll riêng từ option_all
    //     const optionAll = variant.option_all.map((item) => JSON.stringify(item));
    //     // Kiểm tra xem tất cả các phần tử của productVariants có nằm trong optionAll hay không
    //     if (productVariants.value.every((item) => optionAll.includes(JSON.stringify(item)))) {
    //         return variant; // Trả lại variant phù hợp
    //     }
    // }
    // return null;
}

function checkActive(attributeId) {
    if (productItemCurrent.value) {
        return productItemCurrent.value && productItemCurrent.value.options.findIndex((item) => item === attributeId) !== -1 ? true : false;
    }
    let index = productVariants.value.findIndex((item) => item.attribute_id === attributeId);
    return index != -1;
}

function checkEventNone(attributeId, attributeGroupId) {
    if (!productItemCurrent.value) {
        return true;
    }
    let items = [...productVariants.value];
    items = items.map((item) => {
        if (item.attribute_group_id === attributeGroupId) {
            return { ...item, attribute_id: attributeId };
        } else {
            return item;
        }
    });

    const attributeIDs = items.map((item) => item.attribute_id);
    const attributeGroupIDs = items.map((item) => item.attribute_group_id);

    const matchingVariant = productItem.value.data.variants.find((variant) => {
        // Chú ý rằng bạn cần phải so sánh với 'options' và 'option_group' từ dữ liệu của variant
        return arraysMatch(variant.options, attributeIDs) && arraysMatch(variant.option_group, attributeGroupIDs);
    });

    if (matchingVariant) {
        return matchingVariant.out_of_stock == false;
    } else {
        return false;
    }
}

function getAttributeName(attributeGroupId = null) {
    if (productItemCurrent.value) {
        let attributeItem = productItemCurrent.value.option_all.find((item) => item.attribute_group_id === attributeGroupId);

        const attribute = productItem.value.data.variantAttribute.reduce((foundAttr, group) => {
            return foundAttr || group.attributes.find((attr) => attr.attribute_id === attributeItem.attribute_id);
        }, null);

        if (attribute) {
            return attribute.attribute_name;
        } else {
            return null;
        }
    }
    if (attributeGroupId == null) {
        return false;
    }
}
const resetProductPage = (isRefresh = true) => {
    productItemCurrent.value = null;
    thumbsSwiper.value = null;
    loadingProductItem.value = loadingProduct.value;
    if (isRefresh == true) {
        refreshData.value++;
    }
};
let title = productItemCurrent.value ? productItemCurrent.value.meta_title : productItem.value.meta_title;
let description = productItemCurrent.value ? productItemCurrent.value.meta_description : productItem.value.meta_description;
let seoMeta = {
    description: description,
    ogDescription: description,
    ogTitle: productItemCurrent.value ? productItemCurrent.value.name : productItem.value.name,
    title: title,
    twitterTitle: title,
    twitterDescription: description,
    keywords: productItemCurrent.value ? productItemCurrent.value.meta_key : productItem.value.meta_key,
};

useSeoMeta(seoMeta);
useSchemaOrg([
    defineProduct({
        name: productItemCurrent.value ? productItemCurrent.value.name : productItem.value.name,
        image: productItemCurrent.value ? productItemCurrent.value.image_url : productItem.value.image_url,
        description: productItemCurrent.value ? productItemCurrent.value.meta_description : productItem.value.meta_description,
        offers: {
            offerCount: 5,
            lowPrice: productItemCurrent.value
                ? productItemCurrent.value.price - productItemCurrent.value.price_discount
                : productItem.value.price - productItem.value.price_discount,
            highPrice: productItemCurrent.value ? productItemCurrent.value.price : productItem.value.price,
            priceCurrency: 'VND',
        },
        aggregateRating: {
            ratingValue: productItemCurrent.value ? productItemCurrent.value.average_rate : productItem.value.average_rate,
            bestRating: 5,
            ratingCount: productItemCurrent.value ? productItemCurrent.value.rate_count : productItem.value.rate_count,
        },
        review: [...reviewJson.value],
    }),
]);
watch(
    () => [reviewProduct.value, loadingReviewProduct.value],
    () => {
        if (!loadingReviewProduct.value && reviewProduct.value && reviewProduct.value.data.length > 0) {
            pageTotal.value = reviewProduct.value.meta.total;
            reviewJson.value = [];
            reviewProduct.value.data.forEach((item) => {
                reviewJson.value.push({
                    name: item.description,
                    author: {
                        name: item.customer_name,
                    },
                    reviewRating: {
                        ratingValue: item.rate,
                    },
                });
            });
            useSchemaOrg([
                defineProduct({
                    name: productItemCurrent.value ? productItemCurrent.value.name : productItem.value.name,
                    image: productItemCurrent.value ? productItemCurrent.value.image_url : productItem.value.image_url,
                    description: productItemCurrent.value ? productItemCurrent.value.meta_description : productItem.value.meta_description,
                    offers: {
                        offerCount: 5,
                        lowPrice: productItemCurrent.value
                            ? productItemCurrent.value.price - productItemCurrent.value.price_discount
                            : productItem.value.price - productItem.value.price_discount,
                        highPrice: productItemCurrent.value ? productItemCurrent.value.price : productItem.value.price,
                        priceCurrency: 'VND',
                    },
                    aggregateRating: {
                        ratingValue: productItemCurrent.value ? productItemCurrent.value.average_rate : productItem.value.average_rate,
                        bestRating: 5,
                        ratingCount: productItemCurrent.value ? productItemCurrent.value.rate_count : productItem.value.rate_count,
                    },
                    review: reviewJson.value,
                }),
            ]);
        }
    },
    { immediate: true },
);
watch(
    () => productItem.value,
    async () => {
        if (Object.keys(productItem.value).length > 0 && productItem.value.data) {
            resetProductPage(false);
            let productCurrent = ref({ ...productItem.value.data });
            initialProduct(productCurrent.value);
        }
    },
    { immediate: true },
);
</script>
<style lang="scss" scoped>
.product-page {
    @apply w-full bg-white;
    .container {
        @media screen and (min-width: 1536px) {
            max-width: 1280px !important;
        }
    }
    .thumb-product-swiper {
        .swiper-slide {
            opacity: 0.6;
            &.swiper-slide-thumb-active {
                opacity: 1;
            }
        }
    }
    .product-image-swiper {
        .product-information {
            .product-size-list {
                .size-list {
                    .size-list-item {
                        position: relative;
                        overflow: hidden;
                        .check-mark {
                            position: absolute;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 10;
                            &::after,
                            &::before {
                                content: '';
                                position: absolute;
                                width: 100%;
                                height: 0;
                                border-bottom: 2px dashed grey;
                                left: 50%;
                                top: 50%;
                            }
                            &::before {
                                transform: translate(-50%, -50%) rotate(45deg);
                            }
                            &::after {
                                transform: translate(-50%, -50%) rotate(-45deg);
                            }
                        }
                    }
                }
            }
            .product-color-list {
                .color-list {
                    .color-list-item {
                        position: relative;
                        overflow: hidden;
                        .check-mark {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 10;
                            &::after,
                            &::before {
                                content: '';
                                position: absolute;
                                width: 100%;
                                height: 0;
                                border-bottom: 2px dashed grey;
                                left: 50%;
                                top: 50%;
                            }
                            &::before {
                                transform: translate(-50%, -50%) rotate(45deg);
                            }
                            &::after {
                                transform: translate(-50%, -50%) rotate(-45deg);
                            }
                        }
                    }
                }
            }
        }
    }
    .product-price {
        @apply font-bold;
        .discount-price {
            @apply flex items-center gap-3;
            .original-price {
                @apply font-bold;
                text-decoration: line-through;
                text-decoration-thickness: 2px;
                @apply text-gray-400/75;
            }
            .discount-tag {
                @apply font-semibold;
                font-size: 13px;
                color: red;
            }
        }
    }
}
</style>
