<template>
    <NuxtLayout name="main">
        <!-- Page -->
        <div v-if="pageReady" class="product-page py-6 w-full">
            <div class="container mx-auto flex flex-col gap-4">
                <!-- =============== IMAGE + INFO =============== -->
                <div ref="rootRef" class="product-image-swiper flex flex-col lg:flex-row justify-center items-start gap-4 relative md:pt-12">
                    <div ref="bcRef" class="breadcrumb-wrap">
                        <UBreadcrumb
                            class="w-fit max-w-full md:absolute md:-top-2 md:left-2 lg:left-[96px] breadcrumb"
                            :ui="{
                          ol: 'flex flex-wrap items-center gap-1 mt-0 pl-0 list-none',
                          li: 'flex items-center text-sm leading-6 text-gray-500 dark:text-gray-400 whitespace-normal break-words overflow-visible',
                          label: 'block truncate whitespace-pre-wrap'
                        }"
                            divider="/"
                            :links="breadcrumbLinks"
                        >
                        </UBreadcrumb>
                    </div>

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
                        class="!w-[30px] lg:!w-[60px] !mx-0 !shrink-0 thumb-product-swiper lg:!sticky lg:top-2.5 !absolute left-2 !top-20"
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
                            <!-- [OPT] thêm width/height để ổn định layout -->
                            <img
                                :src="image"
                                loading="lazy"
                                decoding="async"
                                width="60" height="80"
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
                        <!-- [OPT] khung cố định để không đổi kích thước khi ảnh load -->
                        <div class="relative w-full aspect-[3/4] rounded-md overflow-hidden">
                            <Swiper
                                :spaceBetween="10"
                                :lazy="true"
                                :navigation="{ nextEl: '.main-product-swiper .next-product-btn', prevEl: '.main-product-swiper .prev-product-btn' }"
                                :thumbs="{ swiper: thumbsSwiper }"
                                :zoom="true"
                                :modules="modules"
                                @swiper="handleMainImageSwiper"
                                class="!mx-0 h-full"
                                aria-label="Product images"
                            >
                                <SwiperSlide
                                    v-for="(image, idx) in currentImages"
                                    :key="'main-'+idx"
                                    class="!flex justify-center items-center !h-full"
                                >
                                    <!-- [OPT] eager + fetchpriority cho ảnh đầu, width/height để tránh CLS -->
                                    <img
                                        :src="image"
                                        :loading="idx===0 ? 'eager' : 'lazy'"
                                        :fetchpriority="idx===0 ? 'high' : 'auto'"
                                        decoding="async"
                                        width="540" height="720"
                                        :alt="currentName"
                                        class="max-h-full max-w-full object-contain"
                                    />
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
                    </div>

                    <div v-show="imageLoading" class="loading-frame flex flex-col gap-4 md:w-4/5">
                        <!-- [OPT] skeleton cùng tỷ lệ khung chính -->
                        <USkeleton class="min-w-[350px] w-full rounded-md" style="aspect-ratio: 3 / 4;" />
                    </div>

                    <!-- Info -->
                    <div class="product-information flex flex-col gap-4 px-4">
                        <!-- ... GIỮ NGUYÊN PHẦN INFO CỦA BẠN ... -->
                        <div class="product-name flex flex-col gap-2">
                            <h1 class="font-bold text-[20px] lg:text-[32px]">{{ currentName }}</h1>
                        </div>
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

const bcRef = ref(null)        // wrapper của breadcrumb
const rootRef = ref(null)

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

/** Helper: format số tiền */
const formatVnd = (num) => new Intl.NumberFormat('vi-VN').format(Number(num || 0))

/** Helper: so sánh mảng (dùng cho match variant) */
const arraysEqual = (a, b) => {
    if (!a || !b) return false
    const aa = [...a].sort()
    const bb = [...b].sort()
    if (aa.length !== bb.length) return false
    for (let i = 0; i < aa.length; i++) if (aa[i] !== bb[i]) return false
    return true
}

/** ============== Derivations từ productItem ============== */
const base = computed(() => productItem.value?.data || null)
const noVariant = computed(() =>
    !!base.value &&
    (base.value.variants?.length === 0) &&
    (base.value.variantAttribute?.length === 0)
)
const hasVariantsAndColor = computed(() =>
    (base.value?.variants?.length || 0) > 0 &&
    !!(base.value?.variantAttribute?.some(g => g.is_color))
)

const current = computed(() => productItemCurrent.value || base.value || null)
const currentName = computed(() => current.value?.name || '')

const currentImages = computed(() => {
    if (productItemCurrent.value?.thumb_image?.length) {
        return productItemCurrent.value.thumb_image
    }
    return base.value?.thumb_image || []
})

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
    if (productItemCurrent.value) {
        return productItemCurrent.value.price_discount ?? productItemCurrent.value.price
    }
    return base.value?.price_discount ?? base.value?.price
})
const currentPercent = computed(() => {
    if (productItemCurrent.value) return productItemCurrent.value.percent || 0
    return base.value?.percent || 0
})
const hasDiscount = computed(() => Number(currentPercent.value) > 0)

/** Thumbs và badge "more" */
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

/** ============== Breadcrumb builder ============== */
const routeCategory = (slug) => localePath({ name: 'collection-slug', params: { slug } })

const breadcrumbLinks = computed(() => {
    const links = []
    links.push({ label: trans('Home'), to: localePath({ name: 'index' }) })

    const cats = base.value?.categories || []
    cats.forEach((cat) => {
        links.push({ label: cat.name || '', to: routeCategory(cat.slug) })
    })
    if (currentName.value) links.push({ label: currentName.value, to: undefined })
    return links
})
/** ============== Breadcrumb DONE ============== */

/** ============== Default chọn variant khi load ============== */
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
const findVariantBySelections = (product, selections) => {
    const attrIds = selections.map(x => x.attribute_id)
    const groupIds = selections.map(x => x.attribute_group_id)
    return product.variants?.find(
        v => arraysEqual(v.options, attrIds) && arraysEqual(v.option_group, groupIds)
    ) || null
}

/** Init logic */
const initializeProduct = (product) => {
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

    pageReady.value = true
}

/** ============== SEO head/meta + hreflang + preload LCP ============== */
const title = ref('')
const description = ref('')
const key = ref('')
const image = ref('')
const seoMeta = ref({})
const firstImage = computed(() => currentImages.value?.[0] || '')

watchEffect(() => {
    const prod = productItemCurrent.value || base.value
    if (!prod) return

    title.value = prod.meta_title || prod.name || ''
    description.value = prod.meta_description || ''
    key.value = prod.meta_key || ''
    image.value = prod.image_url || (prod.thumb_image?.[0] || '')

    const slugOther = prod.slug_other
    if (slugOther) {
        link.value = locale.value === 'vi'
            ? `/en/product/${slugOther}`
            : `/vi/product/${slugOther}`
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

    // [OPT] Preload ảnh LCP để paint sớm
    if (process.client && firstImage.value) {
        useHead({
            link: [{ rel: 'preload', as: 'image', href: firstImage.value, fetchpriority: 'high' }]
        })
    }
})

/** ============== Schema.org Product ============== */
const stripHtml = (html) => typeof html === 'string'
    ? html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
    : ''

const requestURL = useRequestURL()
watchEffect(() => {
    const prod = current.value
    if (!prod) return

    const url = `${requestURL.origin}${localePath({ name: 'product-slug', params: { slug: route.params.slug } })}`

    const images = currentImages.value || []
    const sku = prod.code || prod.sku || undefined
    const price = Number((currentPriceDiscount.value ?? currentPrice.value) || 0)

    const availability = (currentQty.value || 0) > 0
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock'

    // ===== AggregateRating safe build =====
    const reviewCount = Number(base.value?.rate_count || 0)
    const avgRaw = Number(base.value?.average_rate || 0)

    // Chỉ set rating khi:
    // - có reviewCount > 0
    // - avgRaw là số hợp lệ
    // - avgRaw nằm trong 1..5 (hoặc bạn đổi range)
    const aggregateRating =
        reviewCount > 0 && Number.isFinite(avgRaw) && avgRaw >= 1 && avgRaw <= 5
            ? defineAggregateRating({
                ratingValue: Number(avgRaw.toFixed(1)),
                reviewCount,
                bestRating: 5,
                worstRating: 1,
            })
            : undefined

    useSchemaOrg([
        defineProduct({
            '@id': `${url}#product`,
            name: prod.meta_title || prod.name || '',
            description: stripHtml(prod.meta_description || base.value?.description || ''),
            image: images,
            sku,
            url,
            brand: {
                '@type': 'Brand',
                name: process.env.NUXT_SITE_NAME || 'Brand',
            },
            offers: [
                defineOffer({
                    priceCurrency: 'VND',
                    price,
                    availability,
                    url,
                }),
            ],
            aggregateRating,
        }),
    ])
})


/** ============== Sản phẩm tương tự ============== */
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
        router.replace({ query: { code: matched.code } })
        // [OPT] giảm flicker
        nextTick(() => { imageLoading.value = false })
    } else if (group.is_color) {
        attributeAll.value.forEach((it) => selectVariant(it.variant_attribute, it.attribute, false))
    } else if (selectColor.value) {
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

/** Kiểm tra attr đang active */
function isAttrActive (attributeId) {
    if (productItemCurrent.value?.options) {
        return productItemCurrent.value.options.includes(attributeId)
    }
    return productVariants.value.some(x => x.attribute_id === attributeId)
}

/** Guard hiển thị size/others */
function sizeDisplayGuard (attribute, variantAttribute) {
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

    const hypothetic = productVariants.value.map((it) =>
        it.attribute_group_id === variantAttribute.id
            ? { ...it, attribute_id: attribute.attribute_id }
            : it
    )

    const matched = findVariantBySelections(base.value, hypothetic)
    const ok = !!(matched && (matched.thumb_image?.length || 0) > 0)

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

/** Tên thuộc tính đã chọn theo group */
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

/** Số lượng mua */
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

/** Add to cart (cookie) */
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

/** Reset all variant selection */
function resetProductPage (refresh = true) {
    productItemCurrent.value = null
    thumbsSwiper.value = null
    showAllColor.value = false
    quantity.value = 1
    if (refresh) refreshData.value++
    router.replace({ query: undefined })
}

/** Bootstrapping sau khi fetch xong */
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

onMounted(async () => {
    await nextTick()
    initBreadcrumbHeightObserver()
})

onBeforeUnmount(() => {
    if (ro) ro.disconnect()
    window.removeEventListener('resize', onResize)
})

let ro = null
function setBcVar (h) {
    h = h + 20
    const host = rootRef.value || document.querySelector('.product-image-swiper')
    if (host) host.style.setProperty('--bc-h', `${Math.ceil(h)}px`)
}

function updateBcHeight () {
    const el = bcRef.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    setBcVar(rect.height || 0)
}

const onResize = (() => {
    let t
    return () => {
        clearTimeout(t)
        t = setTimeout(updateBcHeight, 120)
    }
})()

function initBreadcrumbHeightObserver () {
    updateBcHeight() // lần đầu
    if ('ResizeObserver' in window) {
        ro = new ResizeObserver(() => updateBcHeight())
        if (bcRef.value) ro.observe(bcRef.value)
    }
    window.addEventListener('resize', onResize)
}

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

    .product-image-swiper {
        /* [OPT] giá trị mặc định tránh top nhảy 0 -> N trên mobile */
        //--bc-h: 24px; /* fallback an toàn ~ 1 dòng breadcrumb */

        li { margin: 0; }
    }

    .container {
        @media screen and (min-width: 1536px) { max-width: 1280px !important; }
    }

    .thumb-product-swiper {
        .swiper-slide {
            opacity: .6;
            @media (max-width: 991px) { opacity: .4; }
            &.swiper-slide-thumb-active { opacity: 1; }
        }
        /* [OPT] cô lập layout để thumb di chuyển không ảnh hưởng bố cục xung quanh */
        contain: layout paint style;
    }

    .product-image-swiper {
        .product-information {
            .product-size-list .size-list .size-list-item,
            .product-color-list .color-list .color-list-item {
                position: relative; overflow: hidden;
            }
        }

        .main-product-swiper {
            /* [OPT] .swiper full-height theo khung aspect để tránh đổi chiều cao */
            .swiper { height: 100%; }
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

<style>
:root {
    --bc-h: 100px;
}
@media screen and (max-width: 991px) {
    .product-page .product-image-swiper li { margin: 0; }
}

@media (max-width: 768px) {
    .product-image-swiper .main-product-swiper { position: relative; }

    .product-image-swiper .thumb-product-swiper {
        position: absolute !important;
        left: .5rem !important;                 /* = left-2 */
        top: calc(var(--bc-h, 24px) + .5rem) !important; /* [OPT] fallback 24px */
        width: 36px !important;                 /* = w-9 */
        z-index: 10;
    }

    .product-image-swiper .thumb-product-swiper .swiper-slide {
        height: 36px !important; /* h-9 */
    }
}

/* Desktop: giữ sticky như cũ */
@media (min-width: 1024px) {
    .product-image-swiper .thumb-product-swiper {
        position: sticky !important;
        top: .625rem;  /* ~ top-2.5 */
        width: 60px !important;
        left: auto !important;
    }
}
</style>
