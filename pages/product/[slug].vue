<template>
    <NuxtLayout name="main">
        <div class="product-page py-6">
            <div class="container mx-auto flex flex-col gap-4">
                <div class="product-image-swiper flex flex-col lg:flex-row justify-center items-start  gap-4 relative pt-12">
                    <UBreadcrumb
                        class="w-max absolute -top-2 left-2 lg:left-[96px]"
                        divider="/"
                        :links="[{ label: $t('Home'), to: '/' }, { label: product.product_name }]" />
                    <swiper
                        v-show="thumbsSwiper"
                        @swiper="setThumbsSwiper"
                        :spaceBetween="16"
                        :slidesPerView="4"
                        :freeMode="true"
                        :watchSlidesProgress="true"
                        :modules="modules"
                        :direction="'vertical'"
                        class="!hidden lg:!block !w-[80px] !mx-0 !shrink-0 thumb-product-swiper !sticky top-2.5">
                        <SwiperSlide v-for="image in imageList.list" class="!h-[120px] w-full rounded-md">
                            <img :src="image" alt="" class="w-full h-full object-cover rounded-md" />
                        </SwiperSlide>
                    </swiper>
                    <div v-show="!thumbsSwiper" class="loading-frame flex flex-col gap-4">
                        <USkeleton class="min-w-[80px] h-[120px] rounded-md"></USkeleton>
                        <USkeleton class="min-w-[80px] h-[120px] rounded-md"></USkeleton>
                    </div>
                    <div v-show="thumbsSwiper" class="main-product-swiper w-full lg:min-w-[350px] lg:w-[350px] lg:sticky top-2">
                        <Swiper
                            :spaceBetween="10"
                            :navigation="{
                                nextEl: '.main-product-swiper .next-product-btn',
                                prevEl: '.main-product-swiper .prev-product-btn',
                            }"
                            :thumbs="{ swiper: thumbsSwiper }"
                            :modules="modules"
                            class="!mx-0">
                            <SwiperSlide v-for="image in imageList.list" class="!flex justify-center">
                                <img :src="image" alt="" class="rounded-md" />
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
                            <span class="font-bold text-[28px] lg:text-[32px]">{{ product.product_name }}</span>
                            <span class="text-gray-500 fs-18 font-medium">{{ product.product_introduction }}</span>
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
                            <div v-if="product.product_sold > 0" class="fs-12">{{ $t('Sold') + ' (web): ' + product.product_sold }}</div>
                        </div>
                        <div class="product-price font-bold text-[22px]">{{ product.product_price.toLocaleString() }}đ</div>
                        <div class="product-compaign fs-14 text-blue-600 italic font-semibold">
                            {{ product.product_compaign_name }}
                        </div>
                        <div class="product-color-list flex flex-col gap-2">
                            <span class="text-[15px]"
                                >Màu sắc: <b>{{ imageList.color }}</b></span
                            >
                            <div class="color-list flex items-center gap-4">
                                <div
                                    v-for="(listColor, index) in product.product_images"
                                    class="color-list-item w-12 h-8 rounded-3xl"
                                    :class="colorProductActive == index ? 'ring-2 ring-inset ring-green-500' : 'border border-slate-700'"
                                    :style="{ backgroundColor: listColor.code }"
                                    @click="colorProductActive = index"></div>
                            </div>
                        </div>
                        <div class="product-size-list flex flex-col gap-3">
                            <span class="text-[15px] font-medium"
                                >Kích thước: <b>{{ productSize ? productSize.name : '' }}</b>
                                {{ productSize ? productSize.description : '' }}</span
                            >
                            <div class="size-list flex items-center gap-4">
                                <button
                                    v-for="(size, index) in product.product_sizes"
                                    :class="[
                                        productSizeIndex == index ? '!bg-black !text-white' : '',
                                        size.quantity == 0 ? 'opacity-30 pointer-events-none' : '',
                                    ]"
                                    class="size-list-item bg-gray-200 flex items-center justify-center w-16 h-10 rounded-2xl font-bold"
                                    @click="setProductSize(size, index)">
                                    {{ size.name }}
                                    <div v-if="size.quantity == 0" class="check-mark"></div>
                                </button>
                                <span v-if="productSizeIndex !== null" class="fs-14">{{ $t('Số lượng còn') }} <b>{{ product.product_sizes[productSizeIndex].quantity }}</b></span>
                            </div>
                        </div>
                        <div class="product-add-to-cart mt-auto flex items-center gap-4">
                            <div
                                class="select-amount flex items-center justify-between w-1/4 max-w-[200px] border h-12 px-4 rounded-3xl border-black">
                                <UIcon name="i-heroicons-minus" @click="handleQuantity(-1)"></UIcon>
                                {{ quantity }}
                                <UIcon name="i-heroicons-plus" @click="handleQuantity(1)"></UIcon>
                            </div>
                            <NuxtLink class="flex flex-1 h-12 rounded-full justify-center" :to="localePath({ name: 'cart' })">
                                <UButton class="flex-1 h-12 rounded-full justify-center">
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
                                <span>Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày</span>
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
                            <img :src="product.product_for_example" class="w-[300px] h-[300px] object-contain" alt="" />
                        </div>
                    </div>
                </div>
                <div class="product-more-details">
                    <h3 class="!text-2xl font-extrabold">Chi tiết sản phẩm</h3>
                    <div>Trống</div>
                </div>
                <div class="product-similar my-8">
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
                        <SwiperSlide v-for="similarProduct in similarList">
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

let modules = ref([Navigation, Thumbs]);
let modulesSimilar = ref([Navigation]);
const localePath = useLocalePath();
const colorProductActive = ref(0);
const productSize = ref(null);
const productSizeIndex = ref(null);
const quantity = ref(1);
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
        number: 4.5,
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
const similarList = ref([
    {
        id: 1,
        product_name: 'Áo polo nam dài tay thể thao',
        product_slug: 'ao-polo-nam-dai-tay-the-thao',
        product_category_id: 1,
        product_category_name: 'Áo thun',
        product_category_slug: 'ao-thun',
        product_introduction: 'Co giãn',
        product_price: 159000,
        product_discount: 0,
        product_compaign_id: 1,
        product_compaign_name: 'Mua 2 bất kỳ giảm thêm 10%',
        product_images: [
            {
                color: 'Đen',
                code: '#000',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/aoexcuwwebjoggerut_copy_2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2023/joggerut.10.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/23CMCW.QD006.s.1_71.jpg',
                ],
            },
        ],
    },
    {
        id: 2,
        product_name: 'Quần jeans nam Basics',
        product_slug: 'quan-jeans-nam-basics',
        product_category_id: 2,
        product_category_name: 'Quần dài',
        product_category_slug: 'quan-dai',
        product_introduction: 'Dáng Straight',
        product_price: 299000,
        product_discount: 10,
        product_compaign_id: null,
        product_compaign_name: null,
        product_images: [
            {
                color: 'Xanh wash',
                code: 'blue',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.11_15.jpg',
                ],
            },
            {
                color: 'Xanh navi',
                code: 'green',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/February2024/joggerutdanang1.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/February2024/joggerutdanang3.jpg',
                ],
            },
        ],
    },
    {
        id: 3,
        product_name: 'Áo bảo hộ thi công',
        product_slug: 'ao-bao-ho-thi-cong',
        product_category_id: 22,
        product_category_name: 'Áo bảo hộ',
        product_category_slug: 'ao-bao-ho',
        product_introduction: 'Thoáng mát / Nhanh khô',
        product_price: 199000,
        product_discount: 10,
        product_compaign_id: 2,
        product_compaign_name: 'Giảm 10% cho thành viên mới',
        product_images: [
            {
                color: 'Vàng',
                code: 'yellow',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.JE002.7_72.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.JE002.9_33.jpg',
                ],
            },
        ],
    },
    {
        id: 1,
        product_name: 'Áo polo nam dài tay thể thao',
        product_slug: 'ao-polo-nam-dai-tay-the-thao',
        product_category_id: 1,
        product_category_name: 'Áo thun',
        product_category_slug: 'ao-thun',
        product_introduction: 'Co giãn',
        product_price: 159000,
        product_discount: 0,
        product_compaign_id: 1,
        product_compaign_name: 'Mua 2 bất kỳ giảm thêm 10%',
        product_images: [
            {
                color: 'Đen',
                code: '#000',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/aoexcuwwebjoggerut_copy_2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2023/joggerut.10.jpg',
                ],
            },
            {
                color: 'Trắng',
                code: '#fff',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/23CMCW.QD006.s.1_71.jpg',
                ],
            },
        ],
    },
    {
        id: 2,
        product_name: 'Quần jeans nam Basics',
        product_slug: 'quan-jeans-nam-basics',
        product_category_id: 2,
        product_category_name: 'Quần dài',
        product_category_slug: 'quan-dai',
        product_introduction: 'Dáng Straight',
        product_price: 299000,
        product_discount: 10,
        product_compaign_id: null,
        product_compaign_name: null,
        product_images: [
            {
                color: 'Xanh wash',
                code: 'blue',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.14_2.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.QD006.s.11_15.jpg',
                ],
            },
            {
                color: 'Xanh navi',
                code: 'green',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/February2024/joggerutdanang1.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/February2024/joggerutdanang3.jpg',
                ],
            },
        ],
    },
    {
        id: 3,
        product_name: 'Áo bảo hộ thi công',
        product_slug: 'ao-bao-ho-thi-cong',
        product_category_id: 22,
        product_category_name: 'Áo bảo hộ',
        product_category_slug: 'ao-bao-ho',
        product_introduction: 'Thoáng mát / Nhanh khô',
        product_price: 199000,
        product_discount: 10,
        product_compaign_id: 2,
        product_compaign_name: 'Giảm 10% cho thành viên mới',
        product_images: [
            {
                color: 'Vàng',
                code: 'yellow',
                list: [
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.JE002.7_72.jpg',
                    'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/uploads/November2023/23CMCW.JE002.9_33.jpg',
                ],
            },
        ],
    },
]);
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
        if(quantity.value < product.value.product_sizes[productSizeIndex.value].quantity) {
            quantity.value += index;
        }
    } else {
        if (quantity.value > 1) {
            quantity.value += index;
        }
    }
};


useSchemaOrg([
    defineProduct({
        name: 'test',
        image: '/product.png',
        offers: [
            { price: 50 },
        ],
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
    })
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
                                width: 80%;
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
