<template>
    <NuxtLayout name="main">
        <div v-if="ready" class="product-page py-6 w-full">
            <div class="container mx-auto flex flex-col gap-4">
                <!-- ========= IMAGE + INFO ========= -->
                <div class="product-image-swiper flex flex-col lg:grid lg:grid-cols-[600px,1fr] lg:items-start lg:justify-start gap-4 lg:gap-8 relative md:pt-12">
                    <UBreadcrumb
                        class="w-fit max-w-full md:absolute md:-top-2 md:left-2 lg:left-[96px]"
                        :ui="{ ol: 'gap-0 max-w-fit mt-0 pl-0 space-x-1', li: 'truncate' }"
                        divider="/"
                        :links="[
              { label: trans('Home'), to: localePath({ name: 'index' }) },
              { label: current?.name || '' }
            ]"
                    />

                    <!-- Thumbs -->
                    <div class="image-box relative w-full lg:w-auto lg:shrink-0 lg:pl-[76px]">
                    <Swiper
                            v-show="!loadingProductItem"
                            @swiper="setThumbsSwiper"
                            :spaceBetween="16"
                            :slidesPerView="4"
                            :freeMode="true"
                            :watchSlidesProgress="true"
                            :modules="modules"
                            :key="'thumb-mobile'"
                            :direction="'vertical'"
                            class="thumb-product-swiper !w-[30px] lg:!w-[60px] !mx-0 !shrink-0 !absolute top-6 left-0"
                        >
                            <!-- Ưu tiên ảnh variant đang chọn -->
                            <SwiperSlide
                                v-if="current?.thumb_image?.length"
                                v-for="(image, index) in current.thumb_image"
                                v-show="index < 4"
                                :key="'t1-' + index"
                                class="!h-[36px] lg:!h-[80px] w-full rounded-md relative"
                            >
                <span
                    v-if="current.thumb_image.length > 4 && index === 3"
                    class="absolute inset-0 flex items-center justify-center rounded-md bg-gray-500/50 text-white font-bold text-xs lg:text-lg"
                >
                  +{{ current.thumb_image.length - index - 1 }}
                </span>
                                <img :src="image" :alt="current.name" loading="lazy" class="w-full h-full object-cover rounded-md" />
                            </SwiperSlide>

                            <!-- Fallback ảnh từ product -->
                            <SwiperSlide
                                v-else-if="productItem?.data?.thumb_image?.length"
                                v-for="(image, index) in productItem.data.thumb_image"
                                v-show="index < 4"
                                :key="'t2-' + index"
                                class="!h-[36px] lg:!h-[80px] w-full rounded-md relative"
                            >
                <span
                    v-if="productItem.data.thumb_image.length > 4 && index === 3"
                    class="absolute inset-0 flex items-center justify-center rounded-md bg-gray-500/50 text-white font-bold text-xs lg:text-lg"
                >
                  +{{ productItem.data.thumb_image.length - index - 1 }}
                </span>
                                <img :src="image" :alt="productItem.data.name" loading="lazy" class="w-full h-full object-cover rounded-md" />
                            </SwiperSlide>
                        </Swiper>

                        <!-- Thumbs skeleton -->
                        <div v-show="loadingProductItem" class="hidden lg:flex loading-frame flex-col gap-4">
                            <USkeleton class="min-w-[60px] h-[80px] rounded-md" />
                            <USkeleton class="min-w-[60px] h-[80px] rounded-md" />
                            <USkeleton class="min-w-[60px] h-[80px] rounded-md" />
                            <USkeleton class="min-w-[60px] h-[80px] rounded-md" />
                        </div>

                        <!-- Main image -->
                        <div
                            v-show="!loadingProductItem"
                            class="main-product-swiper rounded-md w-full lg:w-[450px] xl:w-[540px] xl:min-w-[540px] lg:mx-0 lg:shrink-0 z-0 bg-[#f1f1f1]"
                        >
                            <Swiper
                                :spaceBetween="10"
                                :navigation="{ nextEl: '.main-product-swiper .next-product-btn', prevEl: '.main-product-swiper .prev-product-btn' }"
                                :thumbs="{ swiper: thumbsSwiper }"
                                :zoom="true"
                                :modules="modules"
                                @swiper="handleMainImageSwiper"
                                class="!mx-0"
                            >
                                <SwiperSlide
                                    v-if="current?.thumb_image?.length"
                                    v-for="(image, idx) in current.thumb_image"
                                    :key="'m1-' + idx"
                                    class="!flex justify-center !h-auto aspect-[3/4]"
                                >
                                    <img :src="image" :alt="current.name" loading="lazy" class="rounded-md object-contain" />
                                </SwiperSlide>

                                <SwiperSlide
                                    v-else-if="productItem?.data?.thumb_image?.length"
                                    v-for="(image, idx) in productItem.data.thumb_image"
                                    :key="'m2-' + idx"
                                    class="flex justify-center items-center !h-full aspect-[3/4] w-full rounded-md"
                                >
                                    <img :src="image" :alt="productItem.data.name" loading="lazy" class="w-full h-full rounded-md object-contain" />
                                </SwiperSlide>

                                <template #container-end>
                                    <UButton
                                        variant="ghost"
                                        color="none"
                                        class="prev-product-btn w-[40px] h-[40px] absolute bottom-4 right-6 -translate-x-full z-[99] !bg-white text-black rounded-full justify-center hover:!bg-black hover:!text-white"
                                        :padded="false"
                                    >
                                        <UIcon class="text-[22px]" name="i-heroicons-arrow-long-left" dynamic />
                                    </UButton>
                                    <UButton
                                        variant="ghost"
                                        color="none"
                                        class="next-product-btn w-[40px] h-[40px] absolute bottom-4 right-4 z-[99] !bg-white text-black rounded-full justify-center hover:!bg-black hover:!text-white"
                                        :padded="false"
                                    >
                                        <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                                    </UButton>
                                </template>
                            </Swiper>
                        </div>

                        <!-- Main skeleton -->
                        <div v-show="loadingProductItem" class="loading-frame flex flex-col gap-4 md:w-4/5">
                            <USkeleton class="min-w-[350px] w-full h-[500px] md:h-[700px] rounded-md" />
                        </div>
                    </div>

                    <!-- ========= RIGHT: INFO ========= -->
                    <div class="product-information min-w-0 flex flex-col gap-4 px-4">
                        <div class="product-name flex flex-col gap-2">
                            <h1 class="product-title">
                                {{ current?.name }}
                            </h1>
                        </div>

                        <div class="product-rate flex flex-col md:flex-row md:items-center gap-4 md:gap-2 text-black">
                            <NuxtRating
                                class="w-[220px]"
                                :read-only="true"
                                :ratingValue="productItem?.data?.average_rate || 0"
                                :active-color="'green'"
                                rating-content="⭐"
                            />
                            <div class="flex items-center gap-2">
                                <div class="fs-12">({{ productItem?.data?.rate_count || 0 }})</div>
                            </div>
                        </div>

                        <!-- Giá -->
                        <div class="product-price font-bold text-[19px] lg:text-[22px]">
                            <template v-if="productItemCurrent">
                                <div v-if="current?.percent === 0" class="original-price">
                                    {{ trans('price_name', { price: formatPrice(current?.price) }) }}
                                </div>
                                <div v-else class="discount-price">
                                    <div class="after-discount">
                                        {{ trans('price_name', { price: formatPrice(current?.price_discount) }) }}
                                    </div>
                                    <div class="original-price">
                                        {{ trans('price_name', { price: formatPrice(current?.price) }) }}
                                    </div>
                                    <div class="discount-tag">{{ current?.percent + '%' }}</div>
                                </div>
                            </template>

                            <template v-else>
                                <div v-if="productItem?.data?.percent === 0" class="original-price">
                                    {{ trans('price_name', { price: formatPrice(productItem?.data?.price) }) }}
                                </div>
                                <div v-else class="discount-price">
                                    <div class="after-discount">
                                        {{ trans('price_name', { price: formatPrice(productItem?.data?.price_discount) }) }}
                                    </div>
                                    <div class="original-price">
                                        {{ trans('price_name', { price: formatPrice(productItem?.data?.price) }) }}
                                    </div>
                                    <div class="discount-tag">{{ (productItem?.data?.percent || 0) + '%' }}</div>
                                </div>
                            </template>
                        </div>

                        <!-- Chiến dịch -->
                        <div
                            v-if="productItem?.data?.compaign_name"
                            class="product-compaign fs-14 text-blue-600 italic font-semibold"
                        >
                            {{ productItem?.data?.compaign_name }}
                        </div>

                        <!-- Thuộc tính variants (ĐÃ LỌC + ghost) -->
                        <div
                            v-if="hasVariants"
                            v-for="variantAttribute in filteredVariantAttributes"
                            :key="variantAttribute.id"
                            class="flex flex-col gap-2"
                            :class="{
                'product-color-list': variantAttribute.is_color,
                'product-size-list': !variantAttribute.is_color
              }"
                        >
             <span class="variant-row">
                      <span class="variant-row__label">{{ variantAttribute.name }}:</span>

                                     <!-- Giá trị đã chọn: truncate cố định khung -->
                      <b v-if="selectedName(variantAttribute.id)" class="variant-row__value">
                        {{ selectedName(variantAttribute.id) }}
                      </b>

                      <i v-else-if="variantAttribute.is_color"
                         class="variant-row__hint">
                        ({{ trans('Select a color to purchase') }})
                      </i>
                    </span>

                            <!-- Cảnh báo generic nếu nhóm có ghost -->
                            <div v-if="hasGhostForGroup(variantAttribute.id)" class="mt-1 text-xs text-orange-600 font-semibold">
                                {{ trans('Your previous selection is unavailable for this option. Please pick another {group}.', { group: (variantAttribute.name || '').toLowerCase() }) }}
                            </div>

                            <!-- Color -->
                            <!-- COLORS -->
                            <div v-if="variantAttribute.is_color" class="color-list flex items-center flex-wrap">
                                <!-- Lọc trước các màu không dimmed, rồi mới phân trang 4 cái -->
                                <template
                                    v-for="(attribute, index) in visibleColorAttrs(variantAttribute)"
                                    :key="'c-' + variantAttribute.id + '-' + attribute.attribute_id"
                                >
                                    <div v-if="index < 4 || showAllColor" class="mr-4">
                                        <button
                                            class="color-list-item w-12 h-8 rounded-3xl ring-2 ring-transparent"
                                            :class="{
          '!ring-green-500': isActive(attribute.attribute_id),
          'ring-2 ring-dashed ring-orange-500 cursor-not-allowed opacity-80':
            isGhostActive(attribute.attribute_id, variantAttribute.id)
        }"
                                            :style="{ backgroundColor: attribute.attribute_color }"
                                            @click="selectVariant(variantAttribute, attribute)"
                                        />
                                    </div>
                                </template>

                                <UButton
                                    v-if="productItemCurrent"
                                    :to="localePath({ name: 'product-slug', params: { slug: router.currentRoute.value.params.slug } })"
                                    variant="ghost"
                                    color="blue"
                                    icon="i-heroicons-arrow-path"
                                    @click="resetProductPage(true)"
                                >
                                    {{ trans('Reset') }}
                                </UButton>

                                <!-- Dựa vào số màu SAU khi lọc để quyết định hiện “Load more” -->
                                <UButton
                                    v-if="visibleColorAttrs(variantAttribute).length > 4"
                                    variant="ghost"
                                    color="none"
                                    class="text-blue-500"
                                    @click="showAllColor = !showAllColor"
                                >
                                    {{ showAllColor ? trans('Collapse') : trans('Load more') }}...
                                </UButton>
                            </div>


                            <!-- Các thuộc tính khác (size, chất liệu...) -->
                            <div v-else class="size-list flex items-center flex-wrap">
                                <div
                                    v-for="attribute in variantAttribute.attributes"
                                    :key="'s-' + variantAttribute.id + '-' + attribute.attribute_id"
                                    v-show="visibleAttr(attribute.attribute_id, variantAttribute.id)"
                                >
                                    <button
                                        :class="[
    'size-list-item bg-gray-200 flex items-center justify-center w-fit py-2 px-3 h-10 rounded-2xl font-bold fs-14 mr-4',
    { '!bg-black !text-white': isActive(attribute.attribute_id) },
    { 'ring-2 ring-dashed ring-orange-500 cursor-not-allowed opacity-80': isGhostActive(attribute.attribute_id, variantAttribute.id) },
    { 'hidden': isDimmed(attribute.attribute_id, variantAttribute) }
  ]"
                                        @click="selectVariant(variantAttribute, attribute)"
                                    >
                                        {{ attribute.attribute_name }}
                                        <span v-if="isGhostActive(attribute.attribute_id, variantAttribute.id)"
                                              class="ms-2 text-[10px] uppercase font-extrabold text-orange-600">
    {{ trans('Temporarily kept') }}
  </span>
                                    </button>

                                </div>
                            </div>


                            <UButton
                                v-if="variantAttribute.link"
                                :to="variantAttribute.link"
                                variant="ghost"
                                color="none"
                                class="text-blue-500"
                            >
                                {{ variantAttribute.slug === 'size' ? trans('Size Guide') : trans('Link') }}...
                            </UButton>
                        </div>

                        <!-- Tồn kho -->
                        <span class="fs-14">
              {{ trans('Quantity remaining') }}
              <b>
                {{
                      productItemCurrent?.qty
                          ? productItemCurrent.qty
                          : (!hasVariants && !(productItem?.data?.variantAttribute?.length)) ? (productItem?.data?.qty || 0) : 0
                  }}
              </b>
            </span>

                        <!-- Action giỏ hàng -->
                        <div
                            v-if="productItemCurrent"
                            class="product-add-to-cart mt-auto flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 w-full"
                        >
                            <div class="select-amount flex items-center justify-between md:w-1/4 min-w-[120px] max-w-[200px] border h-12 px-4 rounded-3xl border-black">
                                <UIcon name="i-heroicons-minus" @click="changeQty(-1, true)" />
                                {{ quantity }}
                                <UIcon name="i-heroicons-plus" @click="changeQty(1, true)" />
                            </div>
                            <NuxtLink
                                class="flex flex-1 h-12 rounded-full justify-center"
                                :class="current?.qty > 0 ? '' : 'pointer-events-none'"
                                @click="addCookie(current, true)"
                                :to="localePath({ name: 'cart' })"
                            >
                                <UButton :class="current?.qty > 0 ? '' : 'bg-gray-400'" class="flex-1 h-12 rounded-full justify-center">
                                    <UIcon name="i-heroicons-shopping-bag" class="text-xl" />
                                    <span>{{ trans('Add to cart') }}</span>
                                </UButton>
                            </NuxtLink>
                        </div>

                        <div
                            v-else-if="!hasVariants"
                            class="product-add-to-cart mt-auto flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 w-full"
                        >
                            <div class="select-amount flex items-center justify-between md:w-1/4 min-w-[120px] max-w-[200px] border h-12 px-4 rounded-3xl border-black">
                                <UIcon name="i-heroicons-minus" @click="changeQty(-1, false)" />
                                {{ quantity }}
                                <UIcon name="i-heroicons-plus" @click="changeQty(1, false)" />
                            </div>
                            <NuxtLink
                                class="flex flex-1 h-12 rounded-full justify-center"
                                :class="(productItem?.data?.qty || 0) > 0 ? '' : 'pointer-events-none'"
                                @click="addCookie(productItem?.data, false)"
                                :to="localePath({ name: 'cart' })"
                            >
                                <UButton :class="(productItem?.data?.qty || 0) > 0 ? '' : 'bg-gray-400'" class="flex-1 h-12 rounded-full justify-center">
                                    <UIcon name="i-heroicons-shopping-bag" class="text-xl" />
                                    <span>{{ trans('Add to cart') }}</span>
                                </UButton>
                            </NuxtLink>
                        </div>

                        <div
                            v-else
                            class="product-add-to-cart mt-auto flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 w-full"
                        >
                            <NuxtLink class="flex flex-1 h-12 rounded-full justify-center" @click="askSelectColor">
                                <UButton class="flex-1 h-12 rounded-full justify-center">
                                    <UIcon name="i-heroicons-shopping-bag" class="text-xl" />
                                    <span>{{ trans('Add to cart') }}</span>
                                </UButton>
                            </NuxtLink>
                        </div>

                        <UDivider />

                        <!-- Info GH -->
                        <div class="delivery-box flex flex-col gap-4">
                            <button class="flex items-center gap-2">
                                <img src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" class="h-8 w-8 object-contain" alt="zalo" />
                                <a href="https://zalo.me/0569133339" class="text-blue-700 fs-14 font-bold">
                                    {{ trans('Chat with GAK for instant support') }} ( 08:00 - 17:30)
                                </a>
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                            </button>

                            <div class="delivery-information p-6 bg-gray-200 rounded-lg flex flex-col gap-4 fs-14 font-medium">
                                <span class="font-bold">{{ trans('Fast and convenient nationwide delivery') }}</span>
                                <div class="flex items-center gap-2">
                                    <UIcon class="text-[24px] text-green-500" name="i-mdi-clock-fast" dynamic />
                                    <span>{{ trans('Delivery within 1–2 days in central Hanoi and Ho Chi Minh City') }}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <UIcon class="text-[24px] text-green-500" name="i-mdi-truck-delivery-outline" dynamic />
                                    <span>{{ trans('Delivery in other provinces takes 2–5 days') }}</span>
                                </div>
                            </div>
                        </div>

                        <UDivider />

                        <div class="grid sm:grid-cols-2 fs-14 gap-8">
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-mdi-phone-return" dynamic />
                                <span>{{ trans('Delivery within 1–2 days in central Hanoi and Ho Chi Minh City') }}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-game-icons-return-arrow" dynamic />
                                <span>{{ trans('30-day return policy (Unused plain items only)') }}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-fluent-phone-checkmark-20-regular" dynamic />
                                <span>
                  Hotline <a href="tel:0569133339">056.913.33.39</a> {{ trans('Support available daily from 8:00 AM to 5:30 PM') }}
                </span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-ph-clock-clockwise-bold" dynamic />
                                <span>{{ trans('Orders received and responded to within 1 hour') }}</span>
                            </div>
                        </div>

                        <UDivider />
                    </div>
                </div>

                <!-- ========= HIGHLIGHT ========= -->
                <div v-if="productItem?.data?.highlight" class="product-features p-4 md:p-6 bg-gray-200 rounded-md flex flex-col gap-6 mt-[80px]">
                    <h3 class="product-features__heading !text-2xl font-bold">{{ trans('Key features') }}</h3>
                    <div class="product-details flex flex-col-reverse md:flex-row gap-4 md:gap-2 justify-between w-full">
                        <div class="information flex flex-col gap-4">
                            <h3 class="font-bold !m-0">{{ trans('Product information') }}</h3>
                            <div v-html="productItem?.data?.highlight"></div>
                        </div>
                        <div v-if="productItem?.data?.highlight_image_url" class="image-example flex justify-center md:w-1/2 m-auto">
                            <img
                                :src="productItem.data.highlight_image_url"
                                class="max-h-[500px] md:max-h-full md:w-[300px] md:h-[300px] object-contain"
                                alt="highlight"
                            />
                        </div>
                    </div>
                </div>

                <!-- ========= DESCRIPTION ========= -->
                <div class="product-more-details prose prose-lg max-w-full">
                    <h3 class="!text-2xl font-extrabold">{{ trans('Product details') }}</h3>
                    <div v-html="productItem?.data?.description"></div>
                </div>

                <!-- ========= SIMILAR ========= -->
                <div v-if="productHot?.length" class="product-similar my-8">
                    <h3 class="w-full text-center !text-2xl md:!text-3xl !mb-8 font-extrabold uppercase">{{ trans('You may also like') }}</h3>
                    <Swiper
                        :spaceBetween="0"
                        :navigation="{ nextEl: '.similar-products-swiper .next-similar-btn', prevEl: '.similar-products-swiper .prev-similar-btn' }"
                        :modules="modulesSimilar"
                        :slidesPerView="1"
                        :slidesPerGroup="1"
                        :grabCursor="true"
                        :loop="true"
                        :breakpoints="{
              1280: { slidesPerView: 4, spaceBetween: 12 },
              992:  { slidesPerView: 3, spaceBetween: 14 },
              567:  { slidesPerView: 2, spaceBetween: 16 }
            }"
                        class="similar-products-swiper relative"
                    >
                        <SwiperSlide v-for="sp in productHot" :key="'sim-' + sp.id" class="!h-full p-2 rounded-lg">
                            <ProductCard :product="sp" />
                        </SwiperSlide>

                        <template #container-end>
                            <UButton variant="ghost" color="none" class="prev-similar-btn w-[40px] h-[40px] absolute top-1/2 left-0 -translate-y-1/2 z-[99] !bg-gray-300 text-black rounded-full justify-center" :padded="false">
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-left" dynamic />
                            </UButton>
                            <UButton variant="ghost" color="none" class="next-similar-btn w-[40px] h-[40px] absolute top-1/2 right-0 -translate-y-1/2 z-[99] !bg-gray-300 text-black rounded-full justify-center" :padded="false">
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                            </UButton>
                        </template>
                    </Swiper>
                </div>

                <!-- ========= REVIEWS ========= -->
                <div class="product-reviews flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-[48px] w-full">
                    <div class="product-rating flex flex-col gap-4 items-center bg-gray-100 rounded-md p-8 w-full md:w-max lg:sticky top-2">
                        <div class="uppercase font-bold">{{ trans('Product reviews') }}</div>
                        <div class="font-bold text-[4rem]">{{ productItem?.data?.average_rate || 0 }}</div>
                        <NuxtRating
                            class="w-[220px] justify-center"
                            :read-only="true"
                            :ratingValue="productItem?.data?.average_rate || 0"
                            :active-color="'green'"
                            rating-content="⭐"
                        />
                        <div v-if="(productItem?.data?.rate_count || 0) > 0" class="italic fs-14 leading-relaxed font-medium">
                            {{ (productItem?.data?.rate_count || 0) + ' ' + trans('Review') }}
                        </div>
                    </div>

                    <div v-if="!loadingReviewProduct" class="flex flex-col md:grid sm:grid-cols-2 flex-1 gap-8">
                        <div
                            v-if="reviewProduct?.data?.length"
                            v-for="rv in reviewProduct.data"
                            :key="'rv-' + rv.id"
                            class="review-item flex flex-col justify-start gap-4 py-4 fs-14 font-medium border-b"
                        >
                            <div class="flex flex-col gap-2">
                                <NuxtRating
                                    class="w-[220px]"
                                    :read-only="true"
                                    :ratingValue="rv.rate"
                                    :rating-size="'18px'"
                                    :active-color="'green'"
                                    rating-content="⭐"
                                />
                                <div class="review-name font-bold capitalize">{{ rv.customer_name }}</div>
                                <div v-if="rv.option_name" class="review-collection-product fs-12 italic">{{ rv.option_name }}</div>
                            </div>
                            <div class="review-content">{{ rv.description }}</div>
                            <div v-if="rv.reply" class="feedback-review bg-gray-300 p-4 rounded-lg font-semibold">{{ rv.reply }}</div>
                            <div class="review-date text-gray-500">{{ moment(rv.created_at).format('DD/MM/YYYY  HH:mm:ss') }}</div>
                        </div>

                        <div v-else class="empty-review h-[224px] px-4 col-span-2 flex items-center justify-center border border-dashed border-gray-200 rounded-lg font-medium text-gray-500">
                            {{ trans('No reviews yet for this product') }}
                        </div>

                        <div v-if="(reviewProduct?.data?.length || 0) > 0 && pageTotal > 0" class="flex flex-wrap justify-between items-center gap-2 w-full col-span-2">
                            <div class="flex items-center gap-1.5">
                                <span class="text-sm leading-5">{{ trans('Rows per page') }}:</span>
                                <USelect v-model="pageCount" :options="[8, 25, 50]" class="me-2 w-20" size="xs" />
                            </div>
                            <div class="hidden md:block">
                <span class="text-sm leading-5">
                  Hiển thị <span class="font-bold">{{ pageFrom }}</span>
                  đến <span class="font-bold">{{ pageTo }}</span>
                  trong <span class="font-bold">{{ pageTotal }}</span> tổng số
                </span>
                            </div>
                            <UPagination
                                v-model="page"
                                :page-count="pageCount"
                                :total="pageTotal"
                                :ui="{
                  wrapper: 'flex items-center gap-1',
                  rounded: '!rounded-full min-w-[32px] justify-center',
                  default: { activeButton: { variant: 'outline' } }
                }"
                            />
                        </div>
                    </div>

                    <div v-else class="grid grid-cols-1 sm:grid-cols-2 flex-1 gap-8">
                        <div v-for="i in 4" :key="'sk-' + i" class="skeleton-btn">
                            <div class="flex flex-col gap-2">
                                <USkeleton class="h-16" />
                                <div class="review-name font-bold capitalize">
                                    <USkeleton class="h-8 w-1/2" />
                                </div>
                                <div class="review-collection-product fs-12 italic">
                                    <USkeleton class="h-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /reviews -->
            </div>
        </div>

        <!-- Global loading -->
        <div v-else class="loading-wrapper !mt-[128px]">
            <div class="loading"></div>
            <div id="loading-text">Loading...</div>
        </div>
    </NuxtLayout>
</template>

<script setup>
// libs
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, Zoom } from 'swiper/modules'
import ProductCard from '@/components/products/ProductCard'
import moment from 'moment'

// nuxt composables (Nuxt 3 auto-import ref/computed/reactive/watch)
const route = useRoute()
const router = useRouter()
const toast = useToast()
const { locale, t: trans } = useI18n()
const localePath = useLocalePath()

// store link đổi ngôn ngữ
import { useLanguageLink } from '~/store/languageLink'
import { storeToRefs } from 'pinia'
const useLanguageLinkStore = useLanguageLink()
const { link } = storeToRefs(useLanguageLinkStore)
link.value = null

// Swiper modules
const modules = [Navigation, Thumbs, Zoom]
const modulesSimilar = [Navigation]

// —— STATE
const productItemCurrent   = ref(null)           // variant đang chọn (valid)
const productVariants      = ref([])             // [{attribute_id, attribute_group_id}]
const productVariantSlugs  = ref({})             // {group_slug: attr_slug}
const attributeAll         = ref([])             // cache attr is_main
const showAllColor         = ref(false)
const quantity             = ref(1)

// “ý định” người dùng: tập attribute_id đã bấm (để ghost-active)
const requestedAttrs       = reactive(new Set())
const requestedHas         = (id) => requestedAttrs.has(id)

const thumbsSwiper         = ref(null)
const setThumbsSwiper      = (swiper) => (thumbsSwiper.value = swiper)
const loadingProductItem   = ref(true)           // loading khối ảnh
const ready                = ref(false)          // render toàn trang

// —— PAGINATION REVIEWS
const sort      = ref({ direction: 'desc' })
const page      = ref(1)
const pageCount = ref(8)
const pageTotal = ref(0)
const pageFrom  = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo    = computed(() => Math.min(page.value * pageCount.value, pageTotal.value))

// —— FETCH PRODUCT
const refreshData = ref(0)
const {
    data: productItem,
    status,
    error: errorGetProduct
} = await useLazyAsyncData(
    'product-detail-' + route.params.slug,
    () => useOriginalFetch(`/api/v1/products/${route.params.slug}`, {
        query: { code: route.query?.code, lang: locale.value }
    }),
    { default: () => ({}), watch: [refreshData] }
)

if (errorGetProduct.value) {
    navigateTo({ path: `/${locale.value}/404` }, { redirectCode: 301, replace: true })
}

// —— CURRENT SNAPSHOT
const current = computed(() => productItemCurrent.value || productItem.value?.data || null)
const hasVariants     = computed(() => (productItem.value?.data?.variants?.length || 0) > 0)
const initialNoCode   = computed(() => hasVariants.value && !route.query?.code)

// —— HELPERS
const formatPrice = (n) => new Intl.NumberFormat('en-US').format(Number(n || 0))

const arraysEqual = (a = [], b = []) => {
    const x = [...a].sort()
    const y = [...b].sort()
    if (x.length !== y.length) return false
    for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return false
    return true
}

// ========= VALIDATION (ẩn biến thể không có ảnh hoặc qty <= 0) =========
const isVariantValid = (v) => {
    const hasImages = Array.isArray(v.thumb_image) ? v.thumb_image.length > 0 : !!v.image_url
    const hasQty = Number(v.qty || 0) > 0
    return hasImages && hasQty
}

const baseVariants = computed(() => {
    const all = productItem.value?.data?.variants || []
    const valids = all.filter(isVariantValid)
    return valids.length ? valids : all
})

const validVariants = computed(() => {
    const vs = productItem.value?.data?.variants || []
    return vs.filter(isVariantValid)
})

const visibleColorAttrs = (group) => {
    const attrs = group?.attributes || []
    return attrs.filter(a => !isDimmed(a?.attribute_id, group))
}

// Map groupId -> Set(attributeId) hợp lệ (tồn tại trong ít nhất một valid variant)
const allowedByGroup = computed(() => {
    const map = new Map()
    for (const v of baseVariants.value) {
        const pairs = Array.isArray(v.option_all) && v.option_all.length
            ? v.option_all
            : (v.options || []).map((attrId, i) => ({
                attribute_id: attrId,
                attribute_group_id: (v.option_group || [])[i]
            }))
        for (const p of pairs) {
            if (!p?.attribute_group_id || !p?.attribute_id) continue
            if (!map.has(p.attribute_group_id)) map.set(p.attribute_group_id, new Set())
            map.get(p.attribute_group_id).add(p.attribute_id)
        }
    }
    return map
})

const visibleAttr = (attributeId, groupId) => {
    const allowed = allowedByGroup.value.get(groupId) || new Set()
    return allowed.has(attributeId) || isGhostActive(attributeId, groupId)
}

// Lọc lại cấu trúc variantAttribute để render (ẩn nhóm/attr không hợp lệ; giữ attr ghost)
const filteredVariantAttributes = computed(() => {
    const groups = productItem.value?.data?.variantAttribute || []
    return groups.map(g => {
        const allowed = allowedByGroup.value.get(g.id) || new Set()
        const attrs = g.attributes || []
        const filtered = initialNoCode.value && g.is_color
            ? attrs
            : attrs.filter(a => allowed.has(a.attribute_id) || requestedHas(a.attribute_id))
        return { ...g, attributes: filtered }
    }).filter(g => g.attributes.length > 0)
})

const totalColors = computed(() => {
    return (filteredVariantAttributes.value || [])
        .filter(g => g.is_color)
        .reduce((sum, g) => sum + (g.attributes?.length || 0), 0)
})

// —— GHOST-ACTIVE HELPERS
const isGhostActive = (attributeId, groupId) => {
    const allowed = allowedByGroup.value.get(groupId) || new Set()
    return requestedHas(attributeId) && !allowed.has(attributeId)
}

const hasGhostForGroup = (groupId) => {
    const allowed = allowedByGroup.value.get(groupId) || new Set()
    const group = (productItem.value?.data?.variantAttribute || []).find(g => g.id === groupId)
    if (!group) return false
    return (group.attributes || []).some(a => requestedHas(a.attribute_id) && !allowed.has(a.attribute_id))
}

// —— SELECT / CHECK
function isActive(attributeId) {
    if (productItemCurrent.value?.options) return productItemCurrent.value.options.includes(attributeId)
    return productVariants.value.some(it => it.attribute_id === attributeId)
}

function showIfSelectable(attributeId, groupId, isMain, variantAttribute, attribute) {
    // cache is_main lần đầu
    if (isMain) {
        const existed = attributeAll.value.find(i => i.attribute_id === attributeId && i.attribute_group_id === groupId)
        if (!existed) attributeAll.value.push({ attribute_id: attributeId, attribute_group_id: groupId, is_main: true, variantAttribute, attribute })
    }

    // Nếu chưa chọn gì ⇒ thuộc allowed là đủ
    if (!productItemCurrent.value && productVariants.value.length === 0) {
        const allowed = allowedByGroup.value.get(groupId) || new Set()
        return allowed.has(attributeId)
    }

    // Giả lập thay để xem còn match valid variant không
    const items = productVariants.value.map(it => it.attribute_group_id === groupId ? { ...it, attribute_id: attributeId } : it)
    const ids = items.map(i => i.attribute_id)
    const gids = items.map(i => i.attribute_group_id)
    const found = validVariants.value.find(v => arraysEqual(v.options, ids) && arraysEqual(v.option_group, gids))
    return !!found
}

function selectedName(attributeGroupId) {
    if (!attributeGroupId) return ''
    if (productItemCurrent.value?.option_all?.length) {
        const picked = productItemCurrent.value.option_all.find(x => x.attribute_group_id === attributeGroupId)
        if (!picked) return ''
        for (const group of productItem.value.data.variantAttribute) {
            const found = group.attributes.find(a => a.attribute_id === picked.attribute_id)
            if (found) return found.attribute_name
        }
    }
    return ''
}
function selectVariant(group, attribute) {
    requestedAttrs.add(attribute.attribute_id)

    if (initialNoCode.value) {
        const idx = productVariants.value.findIndex(it => it.attribute_group_id === group.id)

        if (group.is_color) {
            // chỉ cho chọn màu nếu có trong allowedColorsForCurrent (tương thích với non-color đã chọn)
            if (!allowedColorsForCurrent.value.has(attribute.attribute_id)) {
                notifyAttrUnavailable(group, attribute)
                return
            }
        }

        // cập nhật selection ngay
        if (idx !== -1) productVariants.value[idx].attribute_id = attribute.attribute_id
        else productVariants.value.push({ attribute_id: attribute.attribute_id, attribute_group_id: group.id })
        productVariantSlugs.value[group.slug] = attribute.attribute_slug

        // nếu là màu hợp lệ, thử resolve variant (đủ tổ hợp -> có code)
        if (group.is_color) {
            const match = getMatchingVariant()
            if (match && (!productItemCurrent.value || match.code !== productItemCurrent.value.code)) {
                loadingProductItem.value = true
                productItemCurrent.value = match
                loadingProductItem.value = false
                router.replace({ query: { code: productItemCurrent.value.code } })
            }
        }
        return
    }

    // ===== phần còn lại giữ nguyên (flow cũ) =====
    const selectable = showIfSelectable(attribute.attribute_id, group.id, attribute.is_main, group, attribute)
    const ghost      = isGhostActive(attribute.attribute_id, group.id)
    if (!selectable && !ghost) { notifyAttrUnavailable(group, attribute); return }
    if (ghost) { notifyAttrUnavailable(group, attribute); return }

    const idx = productVariants.value.findIndex(it => it.attribute_group_id === group.id)
    if (idx !== -1) productVariants.value[idx].attribute_id = attribute.attribute_id
    else productVariants.value.push({ attribute_id: attribute.attribute_id, attribute_group_id: group.id })
    productVariantSlugs.value[group.slug] = attribute.attribute_slug

    const check = getMatchingVariant()
    if (check && (!productItemCurrent.value || check.code !== productItemCurrent.value.code)) {
        loadingProductItem.value = true
        productItemCurrent.value = check
        loadingProductItem.value = false
        router.replace({ query: { code: productItemCurrent.value.code } })
    }
}

function variantMatchesNonColorSelection(variant, pairs) {
    // lấy cặp option_all của variant
    const pairsV = Array.isArray(variant.option_all) && variant.option_all.length
        ? variant.option_all
        : (variant.options || []).map((attrId, i) => ({
            attribute_id: attrId,
            attribute_group_id: (variant.option_group || [])[i]
        }))
    // mọi cặp non-color đã chọn đều phải nằm trong variant
    return pairs.every(sel =>
        pairsV.some(vp => vp.attribute_group_id === sel.attribute_group_id && vp.attribute_id === sel.attribute_id)
    )
}

// chỉ gom màu từ những biến thể HỢP LỆ (có ảnh + còn hàng) và KHỚP non-color đang chọn
const allowedColorsForCurrent = computed(() => {
    const pairs = pickedNonColorPairs.value
    const colorGroup = (productItem.value?.data?.variantAttribute || []).find(g => g.is_color)
    if (!colorGroup) return new Set()

    const set = new Set()
    for (const v of validVariants.value) {         // validVariants = variants có ảnh & qty > 0
        if (!variantMatchesNonColorSelection(v, pairs)) continue
        const pairsV = Array.isArray(v.option_all) && v.option_all.length
            ? v.option_all
            : (v.options || []).map((attrId, i) => ({
                attribute_id: attrId,
                attribute_group_id: (v.option_group || [])[i]
            }))
        // lấy attribute_id thuộc group màu
        const colorPair = pairsV.find(x => x.attribute_group_id === colorGroup.id)
        if (colorPair) set.add(colorPair.attribute_id)
    }
    return set
})


// các cặp {attribute_id, attribute_group_id} đã chọn ở nhóm KHÔNG phải màu
const pickedNonColorPairs = computed(() => {
    const groups = productItem.value?.data?.variantAttribute || []
    const nonColorIds = new Set(groups.filter(g => !g.is_color).map(g => g.id))
    return productVariants.value.filter(p => nonColorIds.has(p.attribute_group_id))
})

function getMatchingVariant() {
    const ids  = productVariants.value.map(i => i.attribute_id)
    const gids = productVariants.value.map(i => i.attribute_group_id)
    const v = validVariants.value.find(variant => arraysEqual(variant.options, ids) && arraysEqual(variant.option_group, gids))
    return v || null
}

// —— CART
const productLists = useCookie('products-cart', { default: () => [], maxAge: 60 * 60 * 24 * 7 })

function askSelectColor() {
    toast.add({
        title: trans('Notification') + ' !',
        description: trans("You haven't selected a color"),
        timeout: 4500,
        icon: 'i-heroicons-check-badge',
        color: 'red'
    })
}

function addCookie(item, isVariant) {
    if (!item?.id) return
    const pid = productItem.value.data.id
    const vid = isVariant ? item.id : null

    const i = productLists.value.findIndex(e => (e.product_id === pid && e.variant_id === vid))
    if (i === -1) {
        productLists.value.push({ variant_id: vid, product_id: isVariant ? pid : item.id, quantity: quantity.value })
    } else {
        productLists.value[i].quantity += quantity.value
    }
    toast.add({
        title: trans('Congratulations') + ' !',
        description: trans('The product has been added to your cart'),
        timeout: 4500,
        icon: 'i-heroicons-check-badge',
        color: 'green'
    })
}

// số lượng
function changeQty(delta, isVariant) {
    const limit = isVariant ? (productItemCurrent.value?.qty || 0) : (productItem.value?.data?.qty || 0)
    if (delta > 0) {
        if (quantity.value < Math.max(1, limit)) quantity.value += 1
    } else {
        if (quantity.value > 1) quantity.value -= 1
    }
}

// —— SIMILAR (cùng category)
const productHot = ref([])
async function getProductCategory() {
    const { data: response } = await useMyFetch(`/api/v1/products`, {
        params: {
            sort: { 'desc[0]': 'id' },
            category_id: productItem.value?.data?.category_id,
            limit: 20,
            lang: locale.value
        }
    })
    productHot.value = response.value?.data || []
}

// —— SEO
const title       = ref('')
const description = ref('')
const ogImage     = ref('')
const seoMeta     = ref({})

function applySeo() {
    title.value       = current.value?.meta_title       || current.value?.name || ''
    description.value = current.value?.meta_description || ''
    ogImage.value     = current.value?.image_url        || ''

    // link đổi ngôn ngữ (slug_other)
    const other = current.value?.slug_other
    if (other) link.value = locale.value === 'vi' ? `/en/product/${other}` : `/vi/product/${other}`

    seoMeta.value = {
        title: title.value,
        description: description.value,
        ogTitle: title.value,
        ogDescription: description.value,
        image: ogImage.value,
        ogImage: ogImage.value,
        ogImageAlt: title.value,
        twitterTitle: title.value,
        twitterDescription: description.value,
        twitterImage: ogImage.value,
        twitterImageAlt: title.value,
        keywords: current.value?.meta_key || ''
    }
    useSeoMeta(seoMeta.value)
}

// —— Schema.org
function applyProductSchema(reviews = []) {
    const lowPrice  = current.value?.price_discount ?? productItem.value?.data?.price_discount
    const highPrice = current.value?.price          ?? productItem.value?.data?.price
    const aggRating = {
        ratingValue: current.value?.average_rate ?? productItem.value?.data?.average_rate ?? 0,
        bestRating: 5,
        ratingCount: current.value?.rate_count ?? productItem.value?.data?.rate_count ?? 0
    }

    useSchemaOrg([
        defineProduct({
            name: current.value?.name,
            image: {
                "@type": "ImageObject",
                caption: current.value?.name,
                contentUrl: ogImage.value,
                inLanguage: "vi",
                url: ogImage.value
            },
            images: current.value?.thumb_image || productItem.value?.data?.thumb_image || [],
            description: description.value,
            offers: {
                url: 'https://gak.vn/vi/chinh-sach-hoan-tra-san-pham',
                itemCondition: 'https://schema.org/NewCondition',
                availability: 'https://schema.org/InStock',
                offerCount: 1,
                lowPrice,
                highPrice,
                price: highPrice,
                priceCurrency: 'VND',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: lowPrice,
                    priceCurrency: 'VND'
                }
            },
            hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'VN',
                returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                merchantReturnDays: 30,
                returnMethod: 'https://schema.org/ReturnInStore',
                returnFees: 'https://schema.org/FreeReturn'
            },
            aggregateRating: aggRating,
            review: reviews
        })
    ])
}

// —— REVIEWS
const { data: reviewProduct, pending: loadingReviewProduct } = await useLazyAsyncData(
    'product-review-' + route.params.slug,
    () => useOriginalFetch(`/api/v1/products/${route.params.slug}/reviews`, {
        params: { page: page.value, limit: pageCount.value, order: sort.value.direction, lang: locale.value }
    }),
    { default: () => ({ data: [], meta: {} }), watch: [refreshData, page] }
)


function notifyAttrUnavailable(group, attribute) {
    const description = trans('attr_unavailable', { group: group.name, value: attribute.attribute_name })

    toast.add({
        title: trans('Notification') + ' !',
        // Gộp 2 ngôn ngữ cho rõ ràng
        description: description,
        timeout: 4500,
        icon: 'i-heroicons-exclamation-triangle',
        color: 'red'
    })
}

function isDimmed(attributeId, group) {
    if (!hasVariants.value) return false

    if (initialNoCode.value) {
        if (group.is_color) {
            // màu bị mờ nếu KHÔNG nằm trong allowedColorsForCurrent
            return !allowedColorsForCurrent.value.has(attributeId)
        }
        // nhóm khác: không mờ
        return false
    }

    // flow cũ
    if (isGhostActive(attributeId, group.id)) return false
    return !showIfSelectable(attributeId, group.id, false, group, { attribute_id: attributeId })
}




// —— INIT VARIANT (dựa trên validVariants)
function initProduct(p) {
    if (route.query?.code) {
        const found = (validVariants.value).find(v => String(v.code) === String(route.query.code))
        if (found) {
            productItemCurrent.value = { ...found }
            productVariants.value = [...(found.option_all || [])]
        } else {
            productItemCurrent.value = null
            productVariants.value = []
            router.replace({ query: {} })
        }
    } else {
        // pick attr đầu tiên hợp lệ cho các group KHÔNG phải màu
        productVariants.value = (p.variantAttribute || [])
            .filter(g => !g.is_color)
            .map(g => {
                const allowed = allowedByGroup.value.get(g.id) || new Set()
                const first = (g.attributes || []).find(a => allowed.has(a.attribute_id))
                return first ? { attribute_id: first.attribute_id, attribute_group_id: g.id } : null
            })
            .filter(Boolean)
    }

    loadingProductItem.value = false
    ready.value = true

    getProductCategory()
    applySeo()
}


// —— WATCHERS
watch(
    () => productItem.value,
    (val) => {
        if (router.currentRoute.value.name === `product-slug___${locale.value}` && val?.data) {
            productItemCurrent.value = null
            initProduct(val.data)
        }
    },
    { immediate: true }
)

watch(
    () => [productItemCurrent.value, locale.value],
    () => { if (current.value) applySeo() }
)

watch(
    () => [reviewProduct.value, loadingReviewProduct.value],
    () => {
        if (!loadingReviewProduct.value && reviewProduct.value?.data) {
            pageTotal.value = reviewProduct.value?.meta?.total || 0
            const reviews = (reviewProduct.value?.data || []).map(r => ({
                name: r.description,
                author: { name: r.customer_name },
                reviewRating: { ratingValue: r.rate }
            }))
            applyProductSchema(reviews)
        }
    },
    { immediate: true }
)

watch(
    () => router.currentRoute.value.params.slug,
    () => { ready.value = false; loadingProductItem.value = true }
)

function handleMainImageSwiper() { loadingProductItem.value = false }
function resetProductPage(refresh = true) {
    productItemCurrent.value = null
    thumbsSwiper.value = null
    showAllColor.value = false
    quantity.value = 1
    requestedAttrs.clear() // xoá mọi ghost
    if (refresh) refreshData.value++
}
</script>

<style lang="scss" scoped>
.product-page {
    @apply w-full bg-white;

    .container {
        @media (min-width: 1536px) { max-width: 1280px !important; }
    }

    .thumb-product-swiper {
        .swiper-slide {
            opacity: 0.6;
            @media (max-width: 991px) { opacity: 0.4; }
            &.swiper-slide-thumb-active { opacity: 1; }
        }
    }

    .product-image-swiper {
        .product-information {
            .product-size-list .size-list .size-list-item { position: relative; overflow: hidden; }
            .product-color-list .color-list .color-list-item { position: relative; overflow: hidden; }
        }
        .main-product-swiper {
            .swiper { @media (max-width: 991px) { height: 450px; } }
        }
    }

    .product-price {
        @apply font-bold;
        .discount-price {
            @apply flex items-center gap-3;
            .original-price {
                @apply font-bold text-gray-400/75;
                text-decoration: line-through;
                text-decoration-thickness: 2px;
            }
            .discount-tag { @apply font-semibold; font-size: 13px; color: red; }
        }
    }
}
.product-title { /* bạn đã có */
    @apply font-bold text-[20px] lg:text-[32px] leading-snug line-clamp-2 min-h-[48px] lg:min-h-[80px];
}

.variant-row { @apply flex items-baseline gap-2 min-h-[24px]; }
.variant-row__label { @apply shrink-0; }
.variant-row__value {
    @apply inline-block flex-1 truncate align-baseline;
    /* cố định “khung” hiển thị để thay đổi nội dung không đổi bề ngang hàng */
    @apply max-w-[360px] lg:max-w-[420px];
}
.variant-row__hint { @apply opacity-70; }

.main-product-swiper .swiper {
    @apply min-h-[420px] lg:min-h-[540px];
}
</style><template>
    <NuxtLayout name="main">
        <!-- Page -->
        <div v-if="pageReady" class="product-page py-6 w-full">
            <div class="container mx-auto flex flex-col gap-4">
                <!-- =============== IMAGE + INFO =============== -->
                <div class="product-image-swiper flex flex-col lg:flex-row justify-center items-start gap-4 relative md:pt-12">
                    <UBreadcrumb
                        class="w-fit max-w-full md:absolute md:-top-2 md:left-2 lg:left-[96px]"
                        :ui="{ ol: 'gap-0 max-w-fit mt-0 pl-0 space-x-1', li: 'truncate' }"
                        divider="/"
                        :links="[
              { label: trans('Home'), to: localePath({ name: 'index' }) },
              { label: currentName || '' }
            ]"
                    />

                    <!-- Thumbs -->
                    <Swiper
                        v-show="!imageLoading"
                        @swiper="setThumbsSwiper"
                        :spaceBetween="16"
                        :slidesPerView="4"
                        :freeMode="true"
                        :watchSlidesProgress="true"
                        :modules="modules"
                        :lazy="true"
                        direction="vertical"
                        class="!w-[30px] lg:!w-[60px] !mx-0 !shrink-0 thumb-product-swiper lg:!sticky lg:top-2.5 !absolute left-2 top-6"
                        :key="'thumbs'"
                        aria-label="Product thumbnails"
                    >
                        <SwiperSlide
                            v-for="(image, index) in limitedThumbs"
                            :key="'thumb-'+index"
                            class="!h-[36px] lg:!h-[80px] w-full rounded-md relative"
                        >
              <span
                  v-if="showMoreThumbBadge(index)"
                  class="absolute inset-0 flex items-center justify-center rounded-md bg-gray-500/50 text-white font-bold text-xs lg:text-lg"
              >
                +{{ extraThumbCount(index) }}
              </span>
                            <img
                                :src="image"
                                loading="lazy"
                                :alt="currentName"
                                class="w-full h-full object-cover rounded-md"
                            />
                        </SwiperSlide>
                    </Swiper>

                    <div v-show="imageLoading" class="hidden lg:flex loading-frame flex-col gap-4">
                        <USkeleton class="min-w-[60px] h-[80px] rounded-md" v-for="i in 4" :key="'sk-thumb-'+i" />
                    </div>

                    <!-- Main image -->
                    <div
                        v-show="!imageLoading"
                        class="main-product-swiper rounded-md w-full xl:min-w-[540px] lg:w-[450px] xl:w-[540px] z-0 bg-[#f1f1f1]"
                    >
                        <Swiper
                            :spaceBetween="10"
                            :lazy="true"
                            :navigation="{ nextEl: '.main-product-swiper .next-product-btn', prevEl: '.main-product-swiper .prev-product-btn' }"
                            :thumbs="{ swiper: thumbsSwiper }"
                            :zoom="true"
                            :modules="modules"
                            @swiper="handleMainImageSwiper"
                            class="!mx-0"
                            aria-label="Product images"
                        >
                            <SwiperSlide
                                v-for="(image, idx) in currentImages"
                                :key="'main-'+idx"
                                class="!flex justify-center !h-auto aspect-[3/4]"
                            >
                                <img :src="image" loading="lazy" :alt="currentName" class="rounded-md object-contain" />
                            </SwiperSlide>

                            <template #container-end>
                                <UButton
                                    variant="ghost"
                                    color="none"
                                    class="prev-product-btn w-[40px] h-[40px] absolute bottom-4 right-6 -translate-x-full z-[99] !bg-white text-black rounded-full justify-center hover:!bg-black hover:!text-white"
                                    :padded="false"
                                    aria-label="Prev"
                                >
                                    <UIcon class="text-[22px]" name="i-heroicons-arrow-long-left" dynamic />
                                </UButton>
                                <UButton
                                    variant="ghost"
                                    color="none"
                                    class="next-product-btn w-[40px] h-[40px] absolute bottom-4 right-4 z-[99] !bg-white text-black rounded-full justify-center hover:!bg-black hover:!text-white"
                                    :padded="false"
                                    aria-label="Next"
                                >
                                    <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                                </UButton>
                            </template>
                        </Swiper>
                    </div>

                    <div v-show="imageLoading" class="loading-frame flex flex-col gap-4 md:w-4/5">
                        <USkeleton class="min-w-[350px] w-full h-[500px] md:h-[700px] rounded-md" />
                    </div>

                    <!-- Info -->
                    <div class="product-information flex flex-col gap-4 px-4">
                        <div class="product-name flex flex-col gap-2">
                            <h1 class="font-bold text-[20px] lg:text-[32px]">{{ currentName }}</h1>
                        </div>

                        <!-- Rate -->
                        <div class="product-rate flex flex-col md:flex-row md:items-center gap-4 md:gap-2 text-black">
                            <NuxtRating
                                class="w-[220px]"
                                :read-only="true"
                                :ratingValue="productItem.data?.average_rate"
                                :active-color="'green'"
                                rating-content="⭐"
                            />
                            <div class="flex items-center gap-2">
                                <div class="fs-12">({{ productItem.data?.rate_count || 0 }})</div>
                            </div>
                        </div>

                        <!-- Price -->
                        <div class="product-price font-bold text-[19px] lg:text-[22px]">
                            <template v-if="hasDiscount">
                                <div class="discount-price">
                                    <div class="after-discount">
                                        {{ trans('price_name', { price: formatVnd(currentPriceDiscount) }) }}
                                    </div>
                                    <div class="original-price">
                                        {{ trans('price_name', { price: formatVnd(currentPrice) }) }}
                                    </div>
                                    <div class="discount-tag">{{ currentPercent + '%' }}</div>
                                </div>
                            </template>
                            <template v-else>
                                <div class="original-price">
                                    {{ trans('price_name', { price: formatVnd(currentPrice) }) }}
                                </div>
                            </template>
                        </div>

                        <div v-if="productItem.data?.compaign_name" class="product-compaign fs-14 text-blue-600 italic font-semibold">
                            {{ product.product_compaign_name }}
                        </div>

                        <!-- Variant groups -->
                        <div
                            v-for="variantAttribute in productItem.data?.variantAttribute || []"
                            :key="'group-'+variantAttribute.id"
                            class="flex flex-col gap-2"
                            :class="{
                'product-color-list': variantAttribute.is_color,
                'product-size-list': !variantAttribute.is_color,
              }"
                        >
              <span class="text-[15px] flex gap-2 items-baseline">
                {{ variantAttribute.name }}:
                <b>{{ getSelectedAttrName(variantAttribute.id) || '' }}</b>
                <i v-if="!getSelectedAttrName(variantAttribute.id) && variantAttribute.is_color">
                  ({{ trans('Select a color to purchase') }})
                </i>
              </span>

                            <!-- Colors -->
                            <div v-if="variantAttribute.is_color" class="color-list flex items-center flex-wrap gap-4">
                                <div
                                    v-for="(attribute, index) in variantAttribute.attributes"
                                    :key="'c-'+variantAttribute.id+'-'+attribute.attribute_id"
                                    v-show="index < 4 || showAllColor"
                                >
                                    <button
                                        class="color-list-item w-12 h-8 rounded-3xl ring-2 ring-transparent"
                                        :class="{ '!ring-green-500': isAttrActive(attribute.attribute_id) }"
                                        :style="{ backgroundColor: attribute.attribute_color }"
                                        aria-pressed="isAttrActive(attribute.attribute_id)"
                                        @click="selectVariant(variantAttribute, attribute)"
                                    />
                                </div>

                                <UButton
                                    v-if="productItemCurrent"
                                    :to="localePath({ name: 'product-slug', params: { slug: route.params.slug } })"
                                    variant="ghost"
                                    color="blue"
                                    icon="i-heroicons-arrow-path"
                                    @click="resetProductPage(true)"
                                >
                                    {{ trans('Reset') }}
                                </UButton>

                                <UButton
                                    v-if="variantAttribute.attributes.length > 3"
                                    :to="localePath({ name: 'product-slug', params: { slug: route.params.slug } })"
                                    variant="ghost"
                                    color="none"
                                    class="text-blue-500"
                                    @click="showAllColor = !showAllColor"
                                >
                                    {{ showAllColor ? trans('Collapse') : trans('Load more') }}...
                                </UButton>
                            </div>

                            <!-- Sizes / others -->
                            <div v-else class="size-list flex items-center flex-wrap gap-4">
                                <div
                                    v-for="attribute in variantAttribute.attributes"
                                    :key="'s-'+variantAttribute.id+'-'+attribute.attribute_id"
                                    v-show="sizeDisplayGuard(attribute, variantAttribute)"
                                >
                                    <button
                                        class="size-list-item bg-gray-200 flex items-center justify-center w-fit py-2 px-3 h-10 rounded-2xl font-bold fs-14"
                                        :class="{ '!bg-black !text-white': isAttrActive(attribute.attribute_id) }"
                                        @click="selectVariant(variantAttribute, attribute)"
                                    >
                                        {{ attribute.attribute_name }}
                                    </button>
                                </div>
                            </div>

                            <UButton
                                v-if="variantAttribute.link"
                                :to="variantAttribute.link"
                                variant="ghost"
                                color="none"
                                class="text-blue-500"
                            >
                                {{ variantAttribute.slug === 'size' ? trans('Size Guide') : trans('Link') }}...
                            </UButton>
                        </div>

                        <!-- Qty remain -->
                        <span class="fs-14">
              {{ trans('Quantity remaining') }}
              <b>{{ currentQty }}</b>
            </span>

                        <!-- Add to cart -->
                        <div
                            v-if="productItemCurrent"
                            class="product-add-to-cart mt-auto flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 w-full"
                        >
                            <div
                                class="select-amount flex items-center justify-between md:w-1/4 min-w-[120px] max-w-[200px] border h-12 px-4 rounded-3xl border-black"
                            >
                                <UIcon name="i-heroicons-minus" role="button" tabindex="0" @click="handleQuantity(-1, true)" />
                                {{ quantity }}
                                <UIcon name="i-heroicons-plus" role="button" tabindex="0" @click="handleQuantity(1, true)" />
                            </div>

                            <NuxtLink
                                class="flex flex-1 h-12 rounded-full justify-center"
                                :class="productItemCurrent.qty > 0 ? '' : 'pointer-events-none'"
                                @click="handleAddToCookie(productItemCurrent, true)"
                                :to="localePath({ name: 'cart' })"
                            >
                                <UButton :class="productItemCurrent.qty > 0 ? '' : 'bg-gray-400'" class="flex-1 h-12 rounded-full justify-center">
                                    <UIcon name="i-heroicons-shopping-bag" class="text-xl" />
                                    <span>{{ trans('Add to cart') }}</span>
                                </UButton>
                            </NuxtLink>
                        </div>

                        <div
                            v-else-if="noVariant"
                            class="product-add-to-cart mt-auto flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 w-full"
                        >
                            <div
                                class="select-amount flex items-center justify-between md:w-1/4 min-w-[120px] max-w-[200px] border h-12 px-4 rounded-3xl border-black"
                            >
                                <UIcon name="i-heroicons-minus" role="button" tabindex="0" @click="handleQuantity(-1, false)" />
                                {{ quantity }}
                                <UIcon name="i-heroicons-plus" role="button" tabindex="0" @click="handleQuantity(1, false)" />
                            </div>

                            <NuxtLink
                                class="flex flex-1 h-12 rounded-full justify-center"
                                :class="(productItem.data?.qty || 0) > 0 ? '' : 'pointer-events-none'"
                                @click="handleAddToCookie(productItem.data, false)"
                                :to="localePath({ name: 'cart' })"
                            >
                                <UButton :class="(productItem.data?.qty || 0) > 0 ? '' : 'bg-gray-400'" class="flex-1 h-12 rounded-full justify-center">
                                    <UIcon name="i-heroicons-shopping-bag" class="text-xl" />
                                    <span>{{ trans('Add to cart') }}</span>
                                </UButton>
                            </NuxtLink>
                        </div>

                        <div
                            v-else-if="hasVariantsAndColor"
                            class="product-add-to-cart mt-auto flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 w-full"
                        >
                            <NuxtLink class="flex flex-1 h-12 rounded-full justify-center" @click="needSelectColor()">
                                <UButton class="flex-1 h-12 rounded-full justify-center">
                                    <UIcon name="i-heroicons-shopping-bag" class="text-xl" />
                                    <span>{{ trans('Add to cart') }}</span>
                                </UButton>
                            </NuxtLink>
                        </div>

                        <UDivider />

                        <!-- Service/Delivery quick info -->
                        <div class="delivery-box flex flex-col gap-4">
                            <button class="flex items-center gap-2">
                                <img src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" class="h-8 w-8 object-contain" alt="Zalo" />
                                <a href="https://zalo.me/0569133339" class="text-blue-700 fs-14 font-bold">
                                    {{ trans('Chat with GAK for instant support') }} ( 08:00 - 17:30)
                                </a>
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                            </button>

                            <div class="delivery-information p-6 bg-gray-200 rounded-lg flex flex-col gap-4 fs-14 font-medium">
                                <span class="font-bold">{{ trans('Fast and convenient nationwide delivery') }}</span>
                                <div class="flex items-center gap-2">
                                    <UIcon class="text-[24px] text-green-500" name="i-mdi-clock-fast" dynamic />
                                    <span>{{ trans('Delivery within 1–2 days in central Hanoi and Ho Chi Minh City') }}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <UIcon class="text-[24px] text-green-500" name="i-mdi-truck-delivery-outline" dynamic />
                                    <span>{{ trans('Delivery in other provinces takes 2–5 days') }}</span>
                                </div>
                            </div>
                        </div>

                        <UDivider />

                        <div class="grid sm:grid-cols-2 fs-14 gap-8">
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-mdi-phone-return" dynamic />
                                <span>{{ trans('Delivery within 1–2 days in central Hanoi and Ho Chi Minh City') }}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-game-icons-return-arrow" dynamic />
                                <span>{{ trans('30-day return policy (Unused plain items only)') }}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-fluent-phone-checkmark-20-regular" dynamic />
                                <span>Hotline <a href="tel:0569133339">056.913.33.39</a> {{ trans('Support available daily from 8:00 AM to 5:30 PM') }}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-ph-clock-clockwise-bold" dynamic />
                                <span>{{ trans('Orders received and responded to within 1 hour') }}</span>
                            </div>
                        </div>

                        <UDivider />
                    </div>
                </div>

                <!-- =============== FEATURES =============== -->
                <div
                    v-if="productItem.data?.highlight"
                    class="product-features p-4 md:p-6 bg-gray-200 rounded-md flex flex-col gap-6 mt-[80px]"
                >
                    <h3 class="product-features__heading !text-2xl font-bold">{{ trans('Key features') }}</h3>
                    <div class="product-details flex flex-col-reverse md:flex-row gap-4 md:gap-2 justify-between w-full">
                        <div class="information flex flex-col gap-4">
                            <h3 class="font-bold !m-0">{{ trans('Product information') }}</h3>
                            <div v-html="productItem.data?.highlight" />
                        </div>
                        <div v-if="productItem.data?.highlight_image_url" class="image-example flex justify-center md:w-1/2 m-auto">
                            <img
                                :src="productItem.data?.highlight_image_url"
                                class="max-h-[500px] md:max-h-full md:w-[300px] md:h-[300px] object-contain"
                                :alt="currentName"
                            />
                        </div>
                    </div>
                </div>

                <!-- =============== DESCRIPTION =============== -->
                <div class="product-more-details prose prose-lg max-w-full">
                    <h3 class="!text-2xl font-extrabold">{{ trans('Product details') }}</h3>
                    <div v-html="productItem.data?.description" />
                </div>

                <!-- =============== SIMILAR =============== -->
                <div v-if="productHot.length" class="product-similar my-8">
                    <h3 class="w-full text-center !text-2xl md:!text-3xl !mb-8 font-extrabold uppercase">{{ trans('You may also like') }}</h3>
                    <Swiper
                        :spaceBetween="0"
                        :navigation="{ nextEl: '.similar-products-swiper .next-similar-btn', prevEl: '.similar-products-swiper .prev-similar-btn' }"
                        :modules="modulesSimilar"
                        :slidesPerView="1"
                        :slidesPerGroup="1"
                        :grabCursor="true"
                        :loop="true"
                        :breakpoints="{
              1280: { slidesPerView: 4, spaceBetween: 12 },
              992: { slidesPerView: 3, spaceBetween: 14 },
              567: { slidesPerView: 2, spaceBetween: 16 }
            }"
                        class="similar-products-swiper relative"
                        aria-label="Similar products"
                    >
                        <SwiperSlide v-for="(similarProduct, i) in productHot" :key="'p-'+i" class="!h-full p-2 rounded-lg">
                            <ProductCard :product="similarProduct" />
                        </SwiperSlide>

                        <template #container-end>
                            <UButton
                                variant="ghost"
                                color="none"
                                class="prev-similar-btn w-[40px] h-[40px] absolute top-1/2 left-0 -translate-y-1/2 z-[99] !bg-gray-300 text-black rounded-full justify-center"
                                :padded="false"
                                aria-label="Prev similar"
                            >
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-left" dynamic />
                            </UButton>
                            <UButton
                                variant="ghost"
                                color="none"
                                class="next-similar-btn w-[40px] h-[40px] absolute top-1/2 right-0 -translate-y-1/2 z-[99] !bg-gray-300 text-black rounded-full justify-center"
                                :padded="false"
                                aria-label="Next similar"
                            >
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                            </UButton>
                        </template>
                    </Swiper>
                </div>

                <!-- =============== REVIEWS =============== -->
                <div class="product-reviews flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-[48px] w-full">
                    <div class="product-rating flex flex-col gap-4 items-center bg-gray-100 rounded-md p-8 w-full md:w-max lg:sticky top-2">
                        <div class="uppercase font-bold">{{ trans('Product reviews') }}</div>
                        <div class="font-bold text-[4rem]">{{ productItem.data?.average_rate || 0 }}</div>
                        <NuxtRating
                            class="w-[220px] justify-center"
                            :read-only="true"
                            :ratingValue="productItem.data?.average_rate"
                            :active-color="'green'"
                            rating-content="⭐"
                        />
                        <div v-if="(productItem.data?.rate_count || 0) > 0" class="italic fs-14 leading-relaxed font-medium">
                            {{ productItem.data?.rate_count + ' ' + trans('Review') }}
                        </div>
                    </div>

                    <div v-if="!loadingReviewProduct" class="flex flex-col md:grid sm:grid-cols-2 flex-1 gap-8">
                        <div
                            v-if="reviewProduct.data.length > 0"
                            v-for="(review, i) in reviewProduct.data"
                            :key="'rv-'+i"
                            class="review-item flex flex-col justify-start gap-4 py-4 fs-14 font-medium border-b"
                        >
                            <div class="flex flex-col gap-2">
                                <NuxtRating
                                    class="w-[220px]"
                                    :read-only="true"
                                    :ratingValue="review.rate"
                                    :rating-size="'18px'"
                                    :active-color="'green'"
                                    rating-content="⭐"
                                />
                                <div class="review-name font-bold capitalize">{{ review.customer_name }}</div>
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

                        <div v-else class="empty-review h-[224px] px-4 col-span-2 flex items-center justify-center border border-dashed border-gray-200 rounded-lg font-medium text-gray-500">
                            {{ trans('No reviews yet for this product') }}
                        </div>

                        <div v-if="reviewProduct.data.length > 0 && pageTotal > 0" class="flex flex-wrap justify-between items-center gap-2 w-full col-span-2">
                            <div class="flex items-center gap-1.5">
                                <span class="text-sm leading-5">{{ trans('Rows per page') }}:</span>
                                <USelect v-model="pageCount" :options="[8, 25, 50]" class="me-2 w-20" size="xs" />
                            </div>
                            <div class="hidden md:block">
                <span class="text-sm leading-5">
                  Hiển thị
                  <span class="font-bold">{{ pageFrom }}</span>
                  đến
                  <span class="font-bold">{{ pageTo }}</span>
                  trong
                  <span class="font-bold">{{ pageTotal }}</span>
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
                  default: { activeButton: { variant: 'outline' } }
                }"
                            />
                        </div>
                    </div>

                    <div v-else class="grid grid-cols-1 sm:grid-cols-2 flex-1 gap-8">
                        <div v-for="i in 4" :key="'sk-rv-'+i" class="skeleton-btn">
                            <div class="flex flex-col gap-2">
                                <USkeleton class="h-16" />
                                <div class="review-name font-bold capitalize">
                                    <USkeleton class="h-8 w-1/2" />
                                </div>
                                <div class="review-collection-product fs-12 italic">
                                    <USkeleton class="h-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /REVIEWS -->
            </div>
        </div>

        <!-- Global loading fallback -->
        <div v-else class="loading-wrapper !mt-[128px]">
            <div class="loading"></div>
            <div id="loading-text">Loading...</div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, Zoom } from 'swiper/modules'
import ProductCard from '@/components/products/ProductCard'
import moment from 'moment'
import { storeToRefs } from 'pinia'
import { useLanguageLink } from '~/store/languageLink'

const route = useRoute()
const router = useRouter()
const toast = useToast()

/** Swiper modules */
const modules = ref([Navigation, Thumbs, Zoom])
const modulesSimilar = ref([Navigation])

/** Lang link store */
const useLanguageLinkStore = useLanguageLink()
const { link } = storeToRefs(useLanguageLinkStore)
link.value = null

/** i18n */
const { locale, t: trans } = useI18n()
const localePath = useLocalePath()

/** ======= Reactive state ======= */
const quantity = ref(1)
const productVariants = ref([])          // [{ attribute_id, attribute_group_id }]
const productVariantSlugs = ref({})      // { slug: attribute_slug }
const productItemCurrent = ref(null)     // current selected variant (object)
const attributeAll = ref([])             // cache attributes (for color-first apply)
const selectColor = ref(false)
const showAllColor = ref(false)

const thumbsSwiper = ref(null)
const imageLoading = ref(true)
const pageReady = ref(false)

const sort = ref({ direction: 'desc' })
const page = ref(1)
const pageCount = ref(8)
const pageTotal = ref(0)
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() => Math.min(page.value * pageCount.value, pageTotal.value))

/** ============== Fetch product ============== */
const refreshData = ref(0)
const {
    data: productItem,
    status: loadingProduct,
    error: errorGetProduct
} = await useLazyAsyncData(
    'product-show',
    () => useOriginalFetch(`/api/v1/products/${route.params.slug}`, {
        query: { code: route.query?.code, lang: locale.value }
    }),
    { default: () => ({ data: null }), watch: [refreshData] }
)

if (errorGetProduct.value) {
    navigateTo({ path: `/${locale.value}/404` }, { redirectCode: 301, replace: true })
}

/** ============== Helpers ============== */
const formatVnd = (num) => new Intl.NumberFormat('vi-VN').format(Number(num || 0))
const arraysEqual = (a, b) => {
    if (!a || !b) return false
    const aa = [...a].sort()
    const bb = [...b].sort()
    if (aa.length !== bb.length) return false
    for (let i = 0; i < aa.length; i++) if (aa[i] !== bb[i]) return false
    return true
}

/** ============== Derivations ============== */
const base = computed(() => productItem.value?.data || null)
const noVariant = computed(() => !!base.value && (base.value.variants?.length === 0) && (base.value.variantAttribute?.length === 0))
const hasVariantsAndColor = computed(() => (base.value?.variants?.length || 0) > 0 && !!(base.value?.variantAttribute?.some(g => g.is_color)))

const current = computed(() => productItemCurrent.value || base.value || null)
const currentName = computed(() => current.value?.name || '')
const currentImages = computed(() => (productItemCurrent.value?.thumb_image?.length ? productItemCurrent.value.thumb_image : (base.value?.thumb_image || [])))
const currentQty = computed(() => {
    if (productItemCurrent.value) return productItemCurrent.value.qty || 0
    if (noVariant.value) return base.value?.qty || 0
    return 0
})

const currentPrice = computed(() => {
    if (productItemCurrent.value) return productItemCurrent.value.price
    return base.value?.price
})
const currentPriceDiscount = computed(() => {
    if (productItemCurrent.value) return productItemCurrent.value.price_discount ?? productItemCurrent.value.price
    return base.value?.price_discount ?? base.value?.price
})
const currentPercent = computed(() => {
    if (productItemCurrent.value) return productItemCurrent.value.percent || 0
    return base.value?.percent || 0
})
const hasDiscount = computed(() => Number(currentPercent.value) > 0)

/** Thumbs limit and badges */
const limitedThumbs = computed(() => {
    const arr = [...currentImages.value]
    return arr.slice(0, 4)
})
const showMoreThumbBadge = (index) => {
    const total = currentImages.value?.length || 0
    return total > 4 && index === 3
}
const extraThumbCount = (index) => {
    const total = currentImages.value?.length || 0
    return index === 3 ? (total - 4) : 0
}

/** ============== Swiper handlers ============== */
const setThumbsSwiper = (swiper) => { thumbsSwiper.value = swiper }
const handleMainImageSwiper = () => { imageLoading.value = false }

/** ============== Build default non-color selection ============== */
const buildDefaultNonColorSelections = (product) => {
    const acc = []
    for (const variant of (product.variantAttribute || [])) {
        if (!variant.is_color && variant.attributes?.length) {
            const first = variant.attributes[0]
            acc.push({ attribute_id: first.attribute_id, attribute_group_id: variant.id })
        }
    }
    return acc
}

/** ============== Variant matching ============== */
const findVariantBySelections = (product, selections) => {
    const attrIds = selections.map(x => x.attribute_id)
    const groupIds = selections.map(x => x.attribute_group_id)
    return product.variants?.find(v => arraysEqual(v.options, attrIds) && arraysEqual(v.option_group, groupIds)) || null
}

/** ============== Init logic ============== */
const initializeProduct = (product) => {
    // Preselect by code (if present)
    const code = route.query?.code
    if (code) {
        const found = product.variants?.find(v => v.code === code)
        if (found) {
            productItemCurrent.value = { ...found }
            productVariants.value = [...(found.option_all || [])]
            selectColor.value = true
        } else {
            productVariants.value = buildDefaultNonColorSelections(product)
            router.replace({ query: undefined })
        }
    } else {
        productVariants.value = buildDefaultNonColorSelections(product)
    }

    // Ready flags
    pageReady.value = true
}

/** ============== SEO ============== */
const title = ref('')
const description = ref('')
const key = ref('')
const image = ref('')
const seoMeta = ref({})

watchEffect(() => {
    const prod = productItemCurrent.value || base.value
    if (!prod) return

    title.value = prod.meta_title || prod.name || ''
    description.value = prod.meta_description || ''
    key.value = prod.meta_key || ''
    image.value = prod.image_url || (prod.thumb_image?.[0] || '')

    // Switch language link if slug_other present
    const slugOther = prod.slug_other
    if (slugOther) {
        link.value = locale.value === 'vi' ? `/en/product/${slugOther}` : `/vi/product/${slugOther}`
    } else {
        link.value = null
    }

    seoMeta.value = {
        description: description.value,
        ogDescription: description.value,
        ogTitle: title.value,
        title: title.value,
        twitterTitle: title.value,
        twitterImage: image.value,
        twitterImageAlt: title.value,
        twitterDescription: description.value,
        keywords: key.value,
        image: image.value,
        ogImage: image.value,
        ogImageAlt: title.value
    }

    useSeoMeta(seoMeta.value)
})

/** ============== Similar products ============== */
const productHot = ref([])
async function getProductCategory () {
    if (!base.value) return
    const { data: response } = await useMyFetch(`/api/v1/products`, {
        params: {
            sort: { 'desc[0]': 'id' },
            category_id: base.value.category_id,
            limit: 20,
            lang: locale.value
        }
    })
    productHot.value = response.value?.data || []
}

/** ============== Reviews ============== */
const { data: reviewProduct, pending: loadingReviewProduct } = await useLazyAsyncData(
    'product-review',
    () => useOriginalFetch(`/api/v1/products/${route.params.slug}/reviews`, {
        params: { page: page.value, limit: pageCount.value, order: sort.value.direction, lang: locale.value }
    }),
    { default: () => ({ data: [], meta: { total: 0 } }), watch: [refreshData, page] }
)

watch(
    () => reviewProduct.value,
    (val) => { pageTotal.value = val?.meta?.total || 0 },
    { immediate: true }
)

/** ============== Variant select ============== */
function selectVariant (group, attribute, showToast = true) {
    const prevSelections = JSON.parse(JSON.stringify(productVariants.value))
    const idx = productVariants.value.findIndex(x => x.attribute_group_id === group.id)

    if (idx !== -1) {
        productVariants.value[idx].attribute_id = attribute.attribute_id
    } else {
        productVariants.value.push({ attribute_id: attribute.attribute_id, attribute_group_id: group.id })
    }

    productVariantSlugs.value[group.slug] = attribute.attribute_slug
    if (!selectColor.value) selectColor.value = !!group.is_color

    const matched = findVariantBySelections(base.value, productVariants.value)

    if (matched && matched.image_url && (matched.thumb_image?.length || 0) > 0) {
        imageLoading.value = true
        productItemCurrent.value = matched
        // push code into query for shareable URL
        router.replace({ query: { code: matched.code } })
        imageLoading.value = false
    } else if (group.is_color) {
        // khi chọn màu trước → auto apply các is_main đã lưu
        attributeAll.value.forEach((it) => selectVariant(it.variant_attribute, it.attribute, false))
    } else if (selectColor.value) {
        // rollback nếu đang ở trạng thái buộc chọn màu trước
        selectColor.value = false
        productVariants.value = prevSelections
        if (showToast) {
            toast.add({
                title: trans('Notification') + ' !',
                description: trans('Variant combination not available'),
                timeout: 2500,
                icon: 'i-heroicons-exclamation-triangle',
                color: 'red'
            })
        }
    }
}

function isAttrActive (attributeId) {
    if (productItemCurrent.value?.options) {
        return productItemCurrent.value.options.includes(attributeId)
    }
    return productVariants.value.some(x => x.attribute_id === attributeId)
}

/** Guard hiển thị cho size/others trước khi có variant hợp lệ */
function sizeDisplayGuard (attribute, variantAttribute) {
    // Đánh dấu các attr is_main để lần chọn màu có thể auto-apply
    if (attribute.is_main) {
        const existed = attributeAll.value.find(
            (i) => i.attribute_id === attribute.attribute_id && i.attribute_group_id === variantAttribute.id
        )
        if (!existed) {
            attributeAll.value.push({
                attribute_id: attribute.attribute_id,
                attribute_group_id: variantAttribute.id,
                is_main: true,
                variant_attribute: variantAttribute,
                attribute
            })
        }
    }

    if (!productItemCurrent.value) return true

    // giả lập selections nếu chọn thuộc tính này
    const hypothetic = productVariants.value.map((it) =>
        it.attribute_group_id === variantAttribute.id
            ? { ...it, attribute_id: attribute.attribute_id }
            : it
    )

    const matched = findVariantBySelections(base.value, hypothetic)
    const ok = !!(matched && (matched.thumb_image?.length || 0) > 0)

    // nếu hợp lệ và is_main ⇒ ghi nhận để auto-apply khi chọn màu
    if (ok && attribute.is_main) {
        const exists = attributeAll.value.find(
            (i) => i.attribute_id === attribute.attribute_id && i.attribute_group_id === variantAttribute.id
        )
        if (!exists) {
            attributeAll.value.push({
                attribute_id: attribute.attribute_id,
                attribute_group_id: variantAttribute.id,
                is_main: true,
                variant_attribute: variantAttribute,
                attribute
            })
        }
    }
    return ok
}

/** Hiển thị tên thuộc tính đã chọn theo group id */
function getSelectedAttrName (attributeGroupId = null) {
    const source = productItemCurrent.value ? productItemCurrent.value.option_all : null
    if (!source || !attributeGroupId) return null

    const item = source.find((x) => x.attribute_group_id === attributeGroupId)
    if (!item) return null

    for (const group of (base.value?.variantAttribute || [])) {
        const found = group.attributes.find((a) => a.attribute_id === item.attribute_id)
        if (found) return found.attribute_name
    }
    return null
}

/** Qty handlers */
function handleQuantity (delta, forVariant) {
    if (delta === 1) {
        if (forVariant) {
            if (quantity.value < (productItemCurrent.value?.qty || 0)) quantity.value += 1
        } else if (quantity.value < (base.value?.qty || 0)) {
            quantity.value += 1
        }
    } else {
        if (quantity.value > 1) quantity.value -= 1
    }
}

/** Add to cart */
let productLists = useCookie('products-cart', { default: () => [], maxAge: 60 * 60 * 24 * 7 })

function needSelectColor () {
    toast.add({
        title: trans('Notification') + ' !',
        description: trans("You haven't selected a color"),
        timeout: 2500,
        icon: 'i-heroicons-exclamation-triangle',
        color: 'red'
    })
}

function handleAddToCookie (item, isVariant) {
    if (!item?.id) return

    const pid = base.value.id
    const record = isVariant
        ? { variant_id: item.id, product_id: pid, quantity: quantity.value }
        : { variant_id: null, product_id: item.id, quantity: quantity.value }

    const idx = productLists.value.findIndex(
        (e) => (e.product_id === pid && e.variant_id === null) || e.variant_id === item.id
    )

    if (idx === -1) {
        productLists.value.push(record)
    } else {
        productLists.value[idx].quantity += quantity.value
    }

    toast.add({
        title: trans('Congratulations') + ' !',
        description: trans('The product has been added to your cart'),
        timeout: 2500,
        icon: 'i-heroicons-check-badge',
        color: 'green'
    })
}

/** Reset */
function resetProductPage (refresh = true) {
    productItemCurrent.value = null
    thumbsSwiper.value = null
    showAllColor.value = false
    quantity.value = 1
    if (refresh) refreshData.value++
    router.replace({ query: undefined })
}

/** ============== Bootstrapping ============== */
watch(
    () => productItem.value,
    (val) => {
        if (route.name === `product-slug___${locale.value}` && val?.data) {
            initializeProduct(val.data)
            getProductCategory()
        }
    },
    { immediate: true }
)

/** Loading guard for first render */
watch(
    () => [base.value, currentImages.value],
    () => { if (base.value) imageLoading.value = false },
    { immediate: true }
)

/** Simple OG image */
const titleRef = ref('')
const descriptionRef = ref('')
const imageRef = ref('')
watchEffect(() => {
    titleRef.value = currentName.value
    descriptionRef.value = base.value?.meta_description || ''
    imageRef.value = image.value || currentImages.value?.[0] || ''
})

defineOgImageComponent('GAK', {
    title: titleRef.value,
    description: descriptionRef.value,
    theme: '#ff0000',
    colorMode: 'dark',
    url: imageRef.value,
    image: imageRef.value
})
defineOgImage({ url: imageRef.value, image: imageRef.value })
</script>

<style lang="scss" scoped>
.product-page {
    @apply w-full bg-white;

    .container {
        @media screen and (min-width: 1536px) { max-width: 1280px !important; }
    }

    .thumb-product-swiper {
        .swiper-slide {
            opacity: .6;
            @media (max-width: 991px) { opacity: .4; }
            &.swiper-slide-thumb-active { opacity: 1; }
        }
    }

    .product-image-swiper {
        .product-information {
            .product-size-list .size-list .size-list-item {
                position: relative; overflow: hidden;
            }
            .product-color-list .color-list .color-list-item {
                position: relative; overflow: hidden;
            }
        }

        .main-product-swiper {
            .swiper { @media (max-width: 991px) { height: 450px; } }
        }
    }

    .product-price {
        @apply font-bold;

        .discount-price {
            @apply flex items-center gap-3;

            .original-price {
                @apply font-bold text-gray-400/75;
                text-decoration: line-through;
                text-decoration-thickness: 2px;
            }
            .discount-tag {
                @apply font-semibold;
                font-size: 13px; color: red;
            }
        }
    }
}
</style>

