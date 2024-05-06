<template>
    <NuxtLayout name="main">
        <div v-if="!loadingProduct" class="product-page py-6">
            <div class="container mx-auto flex flex-col gap-4">
                <div class="product-image-swiper flex flex-col lg:flex-row justify-center items-start gap-4 relative pt-12">
                    <UBreadcrumb
                        class="w-max absolute -top-2 left-2 lg:left-[96px]"
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
                        class="!hidden lg:!block !w-[80px] !mx-0 !shrink-0 thumb-product-swiper !sticky top-2.5">
                        <SwiperSlide v-if="productItem.data.video_link" class="!h-[80px] w-full rounded-md relative">
                            <video class="pointer-events-none">
                                <source :src="productItem.data.video_link" />
                            </video>
                        </SwiperSlide>
                        <SwiperSlide
                            v-if="productItemCurrent && productItemCurrent.thumb_image.length > 0"
                            v-for="(image, index) in productItemCurrent.thumb_image"
                            v-show="!productItem.data.video_link ? index < 4 : index < 3"
                            class="!h-[120px] w-full rounded-md relative">
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
                            v-if="productItemCurrent && productItemCurrent.thumb_image.length <= 0"
                            class="!h-[120px] w-full rounded-md">
                            <img
                                :src="productItemCurrent ? productItemCurrent.image : ''"
                                alt="No image"
                                class="w-full h-full object-cover rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide
                            v-else-if="!productItemCurrent && productItem.data.thumb_image.length > 0"
                            v-for="(image, index) in productItem.data.thumb_image"
                            v-show="!productItem.data.video_link ? index < 4 : index < 3"
                            class="!h-[120px] w-full rounded-md relative">
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
                        <SwiperSlide v-else class="!h-[120px] w-full rounded-md">
                            <img
                                :src="productItem.data ? productItem.data.image : ''"
                                alt="No image"
                                class="w-full h-full object-cover rounded-md" />
                        </SwiperSlide>
                    </Swiper>
                    <div v-show="!thumbsSwiper" class="loading-frame flex flex-col gap-4">
                        <USkeleton class="min-w-[80px] h-[120px] rounded-md"></USkeleton>
                        <USkeleton class="min-w-[80px] h-[120px] rounded-md"></USkeleton>
                    </div>
                    <div v-show="thumbsSwiper" class="main-product-swiper w-full lg:min-w-[350px] lg:w-[350px] lg:sticky top-2">
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
                                class="!flex justify-center !h-auto max-h-[500px]">
                                <img :src="image" loading="lazy" alt="" class="rounded-md object-contain" />
                            </SwiperSlide>
                            <SwiperSlide
                                v-else-if="productItemCurrent && productItemCurrent.thumb_image.length <= 0"
                                class="!h-[120px] w-full rounded-md">
                                <img
                                    :src="productItemCurrent ? productItemCurrent.image : ''"
                                    alt="No image"
                                    class="w-full h-full object-cover rounded-md" />
                            </SwiperSlide>
                            <SwiperSlide
                                v-else-if="!productItemCurrent && productItem.data.thumb_image.length > 0"
                                v-for="image in productItem.data.thumb_image"
                                class="!flex justify-center !h-auto max-h-[500px]">
                                <img :src="image" loading="lazy" alt="" class="rounded-md object-contain" />
                            </SwiperSlide>

                            <SwiperSlide v-else class="!h-[120px] w-full rounded-md">
                                <img
                                    :src="productItem.data ? productItem.data.image : ''"
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
                                :ratingValue="product.product_rating.number"
                                :active-color="'green'"
                                rating-content="⭐" />
                            <div class="fs-12">({{ product.product_rating.reviews.length }})</div>
                            <div>|</div>
                            <div class="fs-12">{{ $t('Sold') + ' (web): ' + productItem.data.qty_sold }}</div>
                        </div>

                        <div class="product-price font-bold text-[22px]">
                            <div v-if="productItem.data.price_discount == 0" class="original-price">
                                {{ formatPriceProduct(productItem.data.price) + 'đ' }}
                            </div>
                            <div v-else class="discount-price">
                                <div class="after-discount">
                                    {{ formatPriceProduct((productItem.data.price * (100 - productItem.data.price_discount)) / 100) + 'đ' }}
                                </div>
                                <div class="original-price">{{ formatPriceProduct(productItem.data.price) + 'đ' }}</div>
                                <div class="discount-tag">{{ productItem.data.price_discount + '%' }}</div>
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
                            <div v-if="variantAttribute.is_color" class="color-list flex items-center gap-4">
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
                            <b>{{ productItemCurrent && productItemCurrent.qty ? productItemCurrent.qty : 0 }}</b></span
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
                                @click="handleAddToCookie(productItemCurrent)"
                                :to="localePath({ name: 'cart' })">
                                <UButton
                                    :class="productItemCurrent.qty > 0 ? '' : 'bg-gray-400'"
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
                                <span class="text-blue-700 fs-14 font-bold">Chat để được GAK tư vấn ngay (8:30 - 22:00)</span>
                                <UIcon class="text-[22px]" name="i-heroicons-arrow-long-right" dynamic />
                            </button>
                            <div class="delivery-information p-6 bg-gray-200 rounded-lg flex flex-col gap-4 fs-14 font-medium">
                                <span class="font-bold">Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên 200.000đ</span>
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
                                <span>Đổi trả cực dễ chỉ cần số điện thoại</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-game-icons-return-arrow" dynamic />
                                <span>60 ngày đổi trả vì bất kỳ lý do gì</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-fluent-phone-checkmark-20-regular" dynamic />
                                <span>Hotline 056.913.33.39 hoặc 094.763.65.69 hỗ trợ từ 8h00 - 17h30 mỗi ngày</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <UIcon class="text-[32px] shrink-0" name="i-ph-clock-clockwise-bold" dynamic />
                                <span>Đến tận nơi nhận hàng trả, hoàn tiền trong 24h</span>
                            </div>
                        </div>
                        <UDivider />
                    </div>
                </div>
                <div class="product-features p-4 md:p-6 bg-gray-200 rounded-md flex flex-col gap-6 mt-[80px]">
                    <h3 class="product-features__heading !text-2xl font-bold">Đặc điểm nổi bật</h3>
                    <div class="product-details flex justify-between w-full">
                        <div class="information flex flex-col gap-4">
                            <h3 class="font-bold !m-0">Thông tin sản phẩm</h3>
                            <ul class="product-details-list !list-['-'] !mt-0 fs-14 font-semibold">
                                <li v-for="feature in product.product_information" class="product-details__item pl-3">
                                    {{ feature }}
                                </li>
                            </ul>
                        </div>
                        <div class="image-example w-1/2 max-w-[300px] m-auto">
                            <img :src="productItem.data.thumb_image" class="w-[300px] h-[300px] object-contain" alt="" />
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
                        <div class="font-bold text-[4rem]">{{ product.product_rating.number }}</div>
                        <NuxtRating
                            class="w-[220px]"
                            :read-only="true"
                            :ratingValue="product.product_rating.number"
                            :active-color="'green'"
                            rating-content="⭐" />
                        <div v-if="product.product_rating.reviews.length > 0" class="italic fs-14 leading-relaxed font-medium">
                            {{ product.product_rating.reviews.length + ' ' + $t('Review') }}
                        </div>
                    </div>
                    <div v-if="product.product_rating.reviews.length > 0" class="grid grid-cols-1 sm:grid-cols-2 flex-1 gap-8">
                        <div
                            v-for="review in product.product_rating.reviews"
                            class="review-item flex flex-col justify-start gap-4 py-4 fs-14 font-medium border-b">
                            <div class="flex flex-col gap-2">
                                <NuxtRating
                                    class="w-[220px]"
                                    :read-only="true"
                                    :ratingValue="review.rating"
                                    :rating-size="'18px'"
                                    :active-color="'green'"
                                    rating-content="⭐" />
                                <div class="review-name font-bold capitalize">
                                    {{ review.name }}
                                </div>
                                <div v-if="review.product_selected" class="review-collection-product fs-12 italic">
                                    {{ review.product_selected + (review.product_size ? ' / ' + review.product_size : '') }}
                                </div>
                            </div>
                            <div class="review-content">
                                {{ review.description }}
                            </div>
                            <div v-if="review.feedback" class="feedback-review bg-gray-300 p-4 rounded-lg font-semibold">
                                {{ review.feedback }}
                            </div>
                            <div class="review-date text-gray-500">
                                {{ review.review_date }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation, Autoplay, Thumbs } from 'swiper/modules';
import ProductCard from '@/components/products/ProductCard';

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

const productColor = ref(null);
const productSize = ref(null);
const productSilk = ref(null);
const indexActive = ref(0);
const indexActiveColor = ref(0);
const product1 = ref({});
const product = ref({
    id: 1,
    product_name: 'Áo polo nam dài tay thể thao',
    product_slug: 'ao-polo-nam-dai-tay-the-thao',
    product_category_id: 1,
    product_category_name: 'Áo thun',
    product_category_slug: 'ao-thun',
    product_introduction: 'Co giãn',
    product_price: 159000,
    product_discount: 0,
    product_sold: 32,
    product_compaign_id: 1,
    product_rating: {
        number: 4,
        reviews: [
            {
                name: 'Hoàng Lâm',
                product_selected: 'Đen',
                product_size: 'S',
                review_date: '04/02/2024',
                rating: 3,
                feedback:
                    'Coolmate xin cảm ơn anh đã tin tưởng, ủng hộ, đặt hàng và đánh giá sản phẩm khách quan. Coolmate biết tất cả sản phẩm và dịch vụ của mình chưa phải là hoàn hảo và tốt nhất. Nhưng Cool sẽ luôn cố gắng và cải thiện mỗi ngày để hoàn thiện hơn. Nên hơn hết, Coolmate rất trân trọng những phản hồi và góp ý thẳng thắn của các anh để nâng cao trải nghiệm khách hàng. Có rất nhiều sự lựa chọn, một lần nữa, xin cảm ơn anh đã tin tưởng chọn Coolmate ạ!',
                description:
                    'Quần bị nhỏ hơn 1 size, dù mua theo hướng dẫn. 2 túi bên dưới vô dụng khi co gối lên, dễ rớt điện thoại. Chất liệu ổn, trượt nước nhẹ, sẽ cân nhắc mua thêm.',
            },
            {
                name: 'Bùi Quang',
                product_selected: null,
                product_size: 'M',
                review_date: '04/02/2024',
                rating: 5,
                feedback: null,
                description: 'Tốt',
            },
            {
                name: 'Khải kiện lao',
                product_selected: 'Trắng',
                product_size: 'XL',
                review_date: '04/02/2024',
                feedback: null,
                rating: 4,
                description:
                    'Chất liệu vải khá tốt. Túi ngang gối chỉ phù hợp chứa vật nhỏ nhẹ, đồ mà to xíu thì nó khá vướng khi ngồi / co gối',
            },
            {
                name: 'Điền Quân',
                product_selected: 'Xanh Navi',
                product_size: 'XL',
                review_date: '04/02/2024',
                feedback: null,
                rating: 5,
                description: 'Xuất sắc, đẹp hết chê!',
            },
        ],
    },
    product_compaign_name: 'Mua 2 bất kỳ giảm thêm 10%',
    product_sizes: [
        {
            name: 'S',
            description: '(1m55-1m59 | 48kg-54kg)',
            quantity: 2,
        },
        {
            name: 'M',
            description: '(1m60-1m65 | 55kg-61kg)',
            quantity: 0,
        },
        {
            name: 'L',
            description: '(1m66-1m72 | 62kg-68kg)',
            quantity: 19,
        },

        {
            name: 'XL',
            description: '(1m72-1m77 | 69kg-75kg)',
            quantity: 5,
        },
    ],
    product_images: [
        {
            color: 'Đen',
            code: '#000',
            list: [
                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-5_17.jpg',
                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/October2023/ao-khoac-mu-daily-wear-den-7_87.jpg',
            ],
        },
        {
            color: 'Trắng',
            code: '#f3f3f3',
            list: [
                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/sCM006.thumb1.2.jpg',
                'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg',
            ],
        },
    ],
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

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const setProductSize = (size, index) => {
    productSize.value = size;
    productSizeIndex.value = index;
    quantity.value = 1;
};
const handleQuantity = (index) => {
    if (index == 1) {
        if (quantity.value < productItemCurrent.value.qty) {
            quantity.value += index;
        }
    } else {
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
            router.push({ path: router.currentRoute.value.path });
        }
    } else {
        // let attributeIds = product.variantAttribute.map((item) =>
        //     item.attributes && item.attributes.length > 0 ? item.attributes[0].attribute_id : undefined,
        // );
        // findProduct = product.variants.find((item) => JSON.stringify(item.options.sort()) == JSON.stringify(attributeIds.sort()));
    }

    loadingProductItem.value = false;
};
const formatPriceProduct = (item) => {
    return new Intl.NumberFormat('en-US').format(item);
};

const handleAddToCookie = (item) => {
    let productLists = useCookie('products-cart', {
        default: () => [],
        maxAge: 60 * 60 * 24 * 7,
    });
    if (productLists.value.length == 0) {
        if (item.id) {
            productLists.value.push({
                variant_id: item.id,
                product_id: productItem.value.data.id,
                quantity: quantity.value,
            });
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
            productLists.value.push({
                variant_id: item.id,
                product_id: productItem.value.data.id,
                quantity: quantity.value,
            });
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
    () =>
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
const { data: productHot, pending: loadingProductHot } = await useLazyAsyncData('product-hot', async () =>
    useOriginalFetch('/api/v1/products', {
        params: {
            sort: {
                'desc[0]': 'id',
            },
            is_hot: 1,
            limit: 20,
        },
    }),
);

watch(
    loadingProduct,
    async (newValue, oldValue) => {
        if (!newValue) {
            let productCurrent = ref({ ...productItem.value.data });
            initialProduct(productCurrent.value);
        }
    },
    { immediate: true },
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

    if (matchingVariant && matchingVariant.image_url && matchingVariant.thumb_image) {
        return matchingVariant;
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

function getAttributeName(attributeGroupId) {
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
}
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
        offers: [{ price: 50 }],
        aggregateRating: {
            ratingValue: 88,
            bestRating: 100,
            ratingCount: 20,
        },
        review: [
            {
                name: 'Awesome product!',
                author: {
                    name: 'Harlan Wilton',
                },
                reviewRating: {
                    ratingValue: 5,
                },
            },
        ],
    }),
]);
</script>
<style lang="scss" scoped>
.product-page {
    @apply w-full bg-white;
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
}
</style>
