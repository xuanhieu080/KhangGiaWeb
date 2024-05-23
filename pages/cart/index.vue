<template>
    <NuxtLayout name="main">
        <div class="cart-page py-6" :class="isLoadingPage ? 'h-[90vh]' : ''">
            <div v-if="!isLoadingPage" class="container mx-auto flex flex-col-reverse lg:flex-row items-start w-full gap-4">
                <div class="cart-information-user flex flex-col gap-6 w-full lg:w-1/2 border-r border-gray-300 pr-4">
                    <div class="flex flex-col gap-2 font-medium">
                        <div class="text-3xl font-bold">Chào {{ 'quý khách' }}</div>
                        <span>
                            {{ $t('Tổng tiền') }} ({{ cartNumber + ' ' + $t('sản phẩm') }})
                            <b class="text-blue-600">{{ getPaidPrice() }}đ</b>
                        </span>
                    </div>
                    <div class="flex flex-col gap-4 w-full">
                        <div class="flex items-center justify-between">
                            <div class="font-bold text-2xl">{{ $t('Thông tin vận chuyển') }}</div>
                        </div>
                        <UForm ref="form" :schema="schema" :state="state" class="flex flex-col gap-4 w-full">
                            <div class="flex items-center justify-between gap-4 w-full">
                                <UFormGroup label="" name="User name" class="w-full">
                                    <UInput
                                        v-model="state.name"
                                        size="xl"
                                        class="w-full custom-input"
                                        :placeholder="$t('Họ tên')"
                                        :ui="{ rounded: 'rounded-full' }" />
                                </UFormGroup>
                                <UFormGroup label="" name="User Phone" class="w-full">
                                    <UInput
                                        v-model="state.phone"
                                        size="xl"
                                        class="w-full custom-input"
                                        :placeholder="$t('Số điện thoại')"
                                        :ui="{ rounded: 'rounded-full' }" />
                                </UFormGroup>
                            </div>
                            <UFormGroup label="" name="User email" class="w-full">
                                <UInput
                                    v-model="state.email"
                                    size="xl"
                                    class="w-full custom-input"
                                    :placeholder="$t('Email')"
                                    :ui="{ rounded: 'rounded-full' }" />
                            </UFormGroup>
                            <UFormGroup label="" name="User address" class="w-full">
                                <UInput
                                    v-model="state.address"
                                    size="xl"
                                    class="w-full custom-input"
                                    :placeholder="$t('Địa chỉ')"
                                    :ui="{ rounded: 'rounded-full' }" />
                            </UFormGroup>
                            <div class="flex items-center gap-2 w-full flex-wrap xl:flex-nowrap">
                                <UFormGroup v-if="!loadingCities" label="" name="Tỉnh/Thành phố" class="w-full xl:w-1/3">
                                    <USelectMenu
                                        v-model="state.city"
                                        size="xl"
                                        :options="cities.data"
                                        searchable
                                        clear-search-on-close
                                        searchable-placeholder="Search a city..."
                                        class="w-full custom-input"
                                        :placeholder="$t('Tỉnh/Thành phố')"
                                        option-attribute="name"
                                        :uiMenu="{ container: '!fixed max-w-max' }"
                                        value-attribute="id"
                                        :loading="loadingCities"
                                        :ui="{ rounded: 'rounded-full' }">
                                        <template #option="{ option: city }">
                                            <span class="truncate">{{ city.name }}</span>
                                        </template>
                                    </USelectMenu>
                                </UFormGroup>
                                <UFormGroup label="" name="Quận/Huyện" class="w-full xl:w-1/3">
                                    <USelectMenu
                                        v-model="state.district"
                                        size="xl"
                                        :options="districts"
                                        searchable
                                        clear-search-on-close
                                        searchable-placeholder="Search a district..."
                                        class="w-full custom-input"
                                        :placeholder="$t('Quận/Huyện')"
                                        option-attribute="full_name"
                                        :uiMenu="{ container: '!fixed max-w-max' }"
                                        value-attribute="id"
                                        :disabled="!state.city"
                                        :ui="{ rounded: 'rounded-full' }">
                                        <template #option="{ option: district }">
                                            <span class="truncate">{{ district.full_name }}</span>
                                        </template>
                                    </USelectMenu>
                                </UFormGroup>
                                <UFormGroup label="" name="Phường/Xã" class="w-full xl:w-1/3">
                                    <USelectMenu
                                        v-model="state.ward"
                                        size="xl"
                                        :options="wards"
                                        searchable
                                        clear-search-on-close
                                        searchable-placeholder="Search a ward..."
                                        class="w-full custom-input"
                                        :placeholder="$t('Phường/Xã')"
                                        :uiMenu="{ container: '!fixed max-w-max' }"
                                        option-attribute="full_name"
                                        value-attribute="id"
                                        :disabled="!state.city || !state.district"
                                        :ui="{ rounded: 'rounded-full' }">
                                        <template #option="{ option: ward }">
                                            <span class="truncate">{{ ward.full_name }}</span>
                                        </template>
                                    </USelectMenu>
                                </UFormGroup>
                            </div>
                            <UFormGroup label="" name="User address" class="w-full">
                                <UInput
                                    v-model="state.note"
                                    size="xl"
                                    class="w-full custom-input"
                                    :placeholder="$t('Ghi chú thêm(Ví dụ: Giao hàng giờ hành chính,...)')"
                                    :ui="{ rounded: 'rounded-full' }" />
                            </UFormGroup>
                        </UForm>
                        <div class="list-error w-full bg-gray-100 prose-lg max-w-full rounded-lg" v-if="errors">
                            <ul>
                                <li class="list-disc text-red-500" v-for="error in errors">{{ error[0] }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 w-full">
                        <div class="flex items-center justify-between">
                            <div class="font-bold text-2xl">{{ $t('Hình thức thanh toán') }}</div>
                        </div>
                        <UCheckbox
                            @click="setCheckBox(1)"
                            color="blue"
                            :disabled="true"
                            :model-value="selectedPaidOption == 1"
                            :class="selectedPaidOption == 1 ? 'border-blue-500' : 'hover:border-blue-500'"
                            :ui="{
                                rounded: 'rounded-full',
                                inner: 'flex-1',
                                wrapper: 'w-full items-center p-6 border border-gray-200 rounded-2xl',
                            }">
                            <template #label>
                                <div class="flex items-center gap-4 w-full">
                                    <UIcon name="i-eva-car-fill" class="text-4xl text-gray-500" dynamic></UIcon>
                                    <div class="flex flex-col gap-2">
                                        <span>COD</span>
                                        <span class="text-xs">Thanh toán khi nhận hàng</span>
                                    </div>
                                </div>
                            </template>
                        </UCheckbox>
                        <UCheckbox
                            @click="setCheckBox(2)"
                            color="blue"
                            :model-value="selectedPaidOption == 2"
                            :disabled="true"
                            :class="selectedPaidOption == 2 ? 'border-blue-500' : 'hover:border-blue-500'"
                            :ui="{
                                rounded: 'rounded-full',
                                inner: 'flex-1',
                                wrapper: 'opacity-60 w-full items-center p-6 border border-gray-200 rounded-2xl',
                            }">
                            <template #label>
                                <div class="flex items-center gap-4">
                                    <img src="/images/momo-icon.webp" class="h-8 w-8 object-contain" />
                                    <div class="flex flex-col gap-2">
                                        <span>Thanh toán Momo</span>
                                    </div>
                                </div>
                            </template>
                        </UCheckbox>
                        <UCheckbox
                            @click="setCheckBox(3)"
                            color="blue"
                            :model-value="selectedPaidOption == 3"
                            :disabled="true"
                            :class="selectedPaidOption == 3 ? 'border-blue-500' : 'hover:border-blue-500'"
                            :ui="{
                                rounded: 'rounded-full',
                                inner: 'flex-1',
                                wrapper: 'opacity-60 w-full items-center p-6 border border-gray-200 rounded-2xl',
                            }">
                            <template #label>
                                <div class="flex items-center gap-4">
                                    <img src="/images/zalo-icon.svg" class="h-12 w-12 object-contain" />
                                    <div class="flex flex-col gap-2">
                                        <span>Thanh toán Zalopay</span>
                                    </div>
                                </div>
                            </template>
                        </UCheckbox>
                        <UCheckbox
                            @click="setCheckBox(4)"
                            color="blue"
                            :model-value="selectedPaidOption == 4"
                            :disabled="true"
                            :class="selectedPaidOption == 4 ? 'border-blue-500' : 'hover:border-blue-500'"
                            :ui="{
                                rounded: 'rounded-full',
                                inner: 'flex-1',
                                wrapper: 'opacity-60 w-full items-center p-6 border border-gray-200 rounded-2xl',
                            }">
                            <template #label>
                                <div class="flex items-center gap-4">
                                    <img src="/images/shopee-pay-logo.png" class="h-8 w-8 object-contain" />
                                    <div class="flex flex-col gap-2">
                                        <span>Ví ShopeePay</span>
                                    </div>
                                </div>
                            </template>
                        </UCheckbox>
                        <UCheckbox
                            @click="setCheckBox(5)"
                            color="blue"
                            :model-value="selectedPaidOption == 5"
                            :disabled="true"
                            :class="selectedPaidOption == 5 ? 'border-blue-500' : 'hover:border-blue-500'"
                            :ui="{
                                rounded: 'rounded-full',
                                inner: 'flex-1',
                                wrapper: 'opacity-60 w-full items-center p-6 border border-gray-200 rounded-2xl',
                            }">
                            <template #label>
                                <div class="flex items-center gap-4">
                                    <img src="/images/vnpay-logo.webp" class="h-8 w-8 object-contain" />
                                    <div class="flex flex-col gap-2">
                                        <span>Ví điện tử VNPAY/ VNPAY QR</span>
                                    </div>
                                </div>
                            </template>
                        </UCheckbox>
                    </div>
                    <div class="text-sm font-medium">
                        {{ $t('Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm') }}
                        <NuxtLink :to="localePath({ name: 'index' })">
                            <b>{{ $t('tại đây.') }}</b>
                        </NuxtLink>
                    </div>
                    <UButton
                        v-if="listCart.length > 0"
                        class="bg-black text-white hover:bg-gray-400 transition duration-200 rounded-2xl h-12"
                        :class="
                            state.name && state.email && state.phone && state.address && state.city ? '' : 'pointer-events-none bg-gray-400'
                        "
                        variant="ghost"
                        size="xl"
                        color="none"
                        type="submit"
                        :loading="false"
                        @click="handleProcessOrder"
                        block>
                        {{ $t('Thanh toán') + '(COD)' }}
                    </UButton>
                </div>
                <div class="cart-product flex flex-col gap-4 w-full lg:w-1/2">
                    <div class="text-3xl font-bold">{{ $t('Giỏ hàng') }}</div>
                    <div
                        class="font-medium uppercase text-gray-400 text-sm pb-4 border-b border-gray-300 w-full flex items-center justify-between">
                        <span>{{ $t('Mô tả sản phẩm') }}</span>
                        <span>{{ $t('Giá') }}</span>
                    </div>
                    <div v-if="listCart.length > 0" class="product-list flex flex-col gap-4 divide-y divide-gray-300">
                        <div class="product-list-item w-full flex gap-4 pt-4" v-for="(item, index) in listCart">
                            <div class="product-image flex-grow-0 flex-shrink-0 w-[126px]">
                                <img :src="item.image" class="h-full w-full object-contain" alt="" />
                            </div>
                            <div class="product-information flex flex-col justify-between gap-4 w-full">
                                <NuxtLink
                                    :to="
                                        item.product_id
                                            ? localePath({ name: 'product-slug', params: { slug: item.slug }, query: { code: item.code } })
                                            : localePath({ name: 'product-slug', params: { slug: item.slug } })
                                    "
                                    class="flex flex-col gap-2">
                                    <div class="product-name font-semibold">{{ item.name }}</div>
                                </NuxtLink>
                                <div
                                    class="flex flex-col md:flex-wrap md:flex-row items-start gap-4 md:items-center justify-between w-full h-full md:gap-2">
                                    {{ $t('Số Lượng') + ': ' + findQuantity(item) }}
                                    <div class="product-price">
                                        <div v-if="item.percent == 0" class="original-price">
                                            {{ formatPriceProduct(item.price) + 'đ' }}
                                        </div>
                                        <div v-else class="discount-price">
                                            <div class="after-discount">
                                                {{ formatPriceProduct(item.price_discount) + 'đ' }}
                                            </div>
                                            <div class="original-price">{{ formatPriceProduct(item.price) + 'đ' }}</div>
                                            <div class="discount-tag">{{ item.percent + '%' }}</div>
                                        </div>
                                    </div>
                                </div>
                                <button class="delete-product flex items-center gap-2" @click="handleDeleteCartItem(item, index)">
                                    <UIcon name="i-material-symbols-delete-outline" class="text-xl" dynamic />
                                    {{ $t('Xóa') }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-else class="product-list-empty h-24 border border-dashed rounded-lg flex items-center justify-center">
                        {{ $t('Không có sản phẩm nào trong giỏ hàng') }}
                    </div>
                    <UDivider />
                    <div class="flex justify-between w-full gap-2 mt-6 font-semibold">
                        <div>{{ $t('Tạm tính') }}</div>
                        <div class="total-price flex flex-col items-end gap-2">
                            {{ getFullTotalPrice() }}đ
                            <span v-if="true" class="italic text-xs">
                                ({{ $t('Tiết kiệm') }} <span class="text-blue-600">{{ getFullDiscountPrice() + 'k' }} </span>)
                            </span>
                        </div>
                    </div>
                    <div class="flex justify-between w-full gap-2 mt-6 font-semibold">
                        <div>{{ $t('Giảm giá') }}</div>
                        <div class="discount-price flex flex-col items-end gap-2">{{ getFullDiscountPrice(false) }}đ</div>
                    </div>
                    <div class="flex justify-between w-full gap-2 mt-6 font-semibold">
                        <div>{{ $t('Phí giao hàng') }}</div>
                        <div class="discount-price flex flex-col items-end gap-2">{{ 'Miễn phí' }}</div>
                    </div>
                    <UDivider />
                    <div class="flex justify-between w-full gap-2 mt-6 font-semibold">
                        <div>{{ $t('Tổng') }}</div>
                        <div class="discount-price flex flex-col items-end gap-2 text-2xl">
                            {{ getPaidPrice() }}đ
                            <span v-if="getFullDiscountPrice() > 0" class="italic text-xs text-red-500">
                                ({{ $t('Đã giảm') + ' ' + getFullDiscountPrice() + 'k' + ' ' + $t('trên giá gốc') }})
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="loading-wrapper !mt-[128px]">
                <div class="loading"></div>
                <div id="loading-text">Loading...</div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Navigation, Autoplay, Thumbs } from 'swiper/modules';
import ProductCard from '@/components/products/ProductCard';
import { ArraySchema, object, string } from 'yup';
import { storeToRefs } from 'pinia';
import { useMain } from '@@/store/index';
const useMainStore = useMain();
const { cartNumber } = storeToRefs(useMainStore);

let modules = ref([Navigation, Thumbs]);
let modulesSimilar = ref([Navigation]);
const localePath = useLocalePath();
const { t: trans, locale } = useI18n();

const toast = useToast();
const router = useRouter();

const isLoadingPage = ref(false);
const isOrdered = ref(false);

const state = ref({
    email: null,
    name: null,
    phone: null,
    address: null,
    city: null,
    district: null,
    ward: null,
    note: null,
});

const form = ref({
    errors: [],
});

const errors = ref(null);

const schema = object({
    email: string().required(trans('required')),
    name: string().required(trans('required')),
    phone: string().required(trans('required')),
    address: string().required(trans('required')),
    city: string().required(trans('required')),
    ward: string().required(trans('required')),
    district: string().required(trans('required')),
});
const payment_method = [
    {
        id: 1,
        name: 'COD',
    },
    {
        id: 2,
        name: 'Zalopay',
    },
    {
        id: 3,
        name: 'Momo',
    },
    {
        id: 4,
        name: 'ShopeePay',
    },
    {
        id: 5,
        name: 'VNPAY',
    },
];
const selectedPaidOption = ref(1);
const selectedColorProduct = ref(null);
const selectedSizeProduct = ref(null);

const setCheckBox = (index) => {
    selectedPaidOption.value = index;
};
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
            quantity: 2,
        },

        {
            name: 'XL',
            description: '(1m72-1m77 | 69kg-75kg)',
            quantity: 2,
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
const productList = ref([product.value, product.value, product.value]);
const imageList = computed(() => product.value.product_images[colorProductActive.value]);
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const setProductSize = (size, index) => {
    productSize.value = size;
    productSizeIndex.value = index;
};
const handleQuantity = (index) => {
    if (index == 1) {
        quantity.value += index;
    } else {
        if (quantity.value > 1) {
            quantity.value += index;
        }
    }
};

const handleProcessOrder = async () => {
    let params = {
        customer_name: state.value.name,
        customer_email: state.value.email,
        customer_phone: state.value.phone,
        address: state.value.address,
        province_id: state.value.city,
        district_id: state.value.district,
        ward_id: state.value.ward,
    };
    let userInformation = useCookie('user-information', { default: () => [], maxAge: 60 * 60 * 24 * 365 });
    userInformation.value = params;
    if (productLists.value.length > 0) {
        productLists.value.forEach((ele, index) => {
            params[`items[${index}][product_id]`] = ele.product_id;
            params[`items[${index}][product_variant_id]`] = ele.variant_id;
            params[`items[${index}][qty]`] = ele.quantity;
        });
    }
    let methodForPay = payment_method.find((item) => item.id == selectedPaidOption.value);
    if (methodForPay) {
        params.payment_method = methodForPay.name;
    }
    if (state.value.note) {
        params.note = state.value.note;
    }
    const { data: response, error } = await useMyFetch('/api/v1/orders', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        params: params,
    });
    if (response.value) {
        toast.add({
            title: trans('Đặt hàng thành công') + ' !',
            description: trans('Đơn hàng của bạn đã đặt thành công, Nhân viên kinh doanh sẽ sớm liên hệ tới bạn!'),
            timeout: 5000,
            icon: 'i-heroicons-check-badge',
            color: 'green',
        });
        isOrdered.value = true;
        productLists.value = null;
        setTimeout(() => {
            router.push({ name: `index___${locale.value}` });
        }, 3000);
    } else {
        if (error.value.statusCode === 422) {
            errors.value = error.value.data.errors;
            toast.add({
                title: `<p class="text-red-500"> ${trans('Warning')} </p>`,
                description: errors.value,
                timeout: 10000,
                icon: 'i-heroicons-check-badge',
                color: 'red',
            });
        } else {
            toast.add({
                title: `<p class="text-red-500"> ${trans('Warning')} </p>`,
                description: trans('Oops, Xảy ra lỗi!. Vui lòng thử lại sau'),
                timeout: 10000,
                icon: 'i-heroicons-check-badge',
                color: 'red',
            });
        }
    }
};

const findQuantity = (item) => {
    let indexProd = productLists.value.findIndex((ele) => item.id == ele.product_id || item.id == ele.variant_id);
    if (indexProd != -1) {
        return productLists.value[indexProd].quantity;
    }
    return 0;
};

const formatPriceProduct = (item) => {
    return new Intl.NumberFormat('en-US').format(item);
};
const getFullTotalPrice = () => {
    if (listCart.value.length > 0) {
        let totalPrice = 0;
        listCart.value.forEach((ele) => {
            let quantityIndex = productLists.value.findIndex(
                (item) => (item.variant_id == ele.id && item.product_id) || (item.product_id == ele.id && !item.variant_id),
            );
            if (quantityIndex != -1) {
                totalPrice += ele.price * productLists.value[quantityIndex].quantity;
            }
        });
        return totalPrice.toLocaleString();
    } else {
        return 0;
    }
};
const getFullDiscountPrice = (divide = true) => {
    if (listCart.value.length > 0) {
        let discountTotal = 0;
        listCart.value.forEach((ele) => {
            let quantityIndex = productLists.value.findIndex(
                (item) => (item.variant_id == ele.id && item.product_id) || (item.product_id == ele.id && !item.variant_id),
            );
            if (quantityIndex != -1) {
                discountTotal += (ele.price - ele.price_discount) * productLists.value[quantityIndex].quantity;
            }
        });
        if (divide == true) {
            return Math.round(discountTotal / 1000).toLocaleString();
        } else {
            return Math.round(discountTotal).toLocaleString();
        }
    } else {
        return 0;
    }
};
const getPaidPrice = (divide = false) => {
    if (listCart.value.length > 0) {
        let totalPrice = 0;
        listCart.value.forEach((ele) => {
            let quantityIndex = productLists.value.findIndex(
                (item) => (item.variant_id == ele.id && item.product_id) || (item.product_id == ele.id && !item.variant_id),
            );
            if (quantityIndex != -1) {
                totalPrice += ele.price_discount * productLists.value[quantityIndex].quantity;
            }
        });
        if (divide == true) {
            return Math.round(totalPrice / 1000).toLocaleString();
        } else {
            return Math.round(totalPrice).toLocaleString();
        }
    } else {
        return 0;
    }
};

const handleDeleteCartItem = (product, index) => {
    let productIndex = productLists.value.findIndex(
        (item) => (item.variant_id == product.id && item.product_id) || (item.product_id == product.id && !item.variant_id),
    );
    listCart.value.splice(index, 1);
    productLists.value.splice(productIndex, 1);
    cartNumber.value--;
};

let districts = ref([]);
let wards = ref([]);
let listCart = ref([]);
let productLists = useCookie('products-cart', {
    default: () => [],
    maxAge: 60 * 60 * 24 * 7,
});

//Data

const getCheckCarts = async (items) => {
    listCart.value = [];
    let params = {};
    if (items.length > 0) {
        items.forEach((ele, index) => {
            params[`items[${index}][product_id]`] = ele.product_id;
            params[`items[${index}][product_variant_id]`] = ele.variant_id;
        });
    }
    const { data: response, error } = await useMyFetch('/api/v1/check-stock', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        params: params,
    });
    if (response.value) {
        let newCookie = ref([]);
        response.value.data.forEach((item) => {
            if (item.variants.length > 0) {
                listCart.value.push(...item.variants);
                newCookie.value.push({
                    product_id: item.id,
                    variant_id: item.variants[0].id,
                });
            } else {
                listCart.value.push(item);
                newCookie.value.push({
                    product_id: item.id,
                    variant_id: null,
                });
            }
        });
        let combinedArray = newCookie.value.map((itemA) => {
            let itemB = productLists.value.find((itemB) => itemB.product_id === itemA.product_id && itemB.variant_id === itemA.variant_id);
            if (itemB) {
                return { ...itemB, quantity: itemB.quantity };
            } else {
                return {...itemA, quantity: 0};
            }
        });
        console.log(combinedArray);
        console.log(productLists.value);
        cartNumber.value = listCart.value.length;
        if (cartNumber.value == 0) {
            productLists.value = null;
        } else {
            productLists.value = combinedArray;
        }
        isLoadingPage.value = false;
    }
};

const { data: cities, pending: loadingCities } = await useLazyAsyncData('cities-list', async () =>
    useOriginalFetch('/api/v1/provinces', {
        params: {
            limit: 999,
        },
    }),
);

const getDistrict = async (city) => {
    const { data: response, error } = await useMyFetch(`/api/v1/districts`, {
        params: {
            limit: 999,
            province_id: city,
        },
    });
    if (response.value) {
        districts.value = response.value.data;
    } else {
        return [];
    }
};
const getWard = async (district) => {
    const { data: response, error } = await useMyFetch(`/api/v1/wards`, {
        params: {
            limit: 999,
            district_id: district,
        },
    });
    if (response.value) {
        wards.value = response.value.data;
    } else {
        return [];
    }
};
watch(
    productLists.value,
    async (newList) => {
        if (newList.length > 0) {
            isLoadingPage.value = true;
            getCheckCarts(newList);
        }
    },
    { immediate: true },
);
watch(
    () => state.value.city,
    (value) => {
        if (value) {
            state.value.district = null;
            state.value.ward = null;
            getDistrict(value);
        }
    },
    { immediate: true },
);
watch(
    () => state.value.district,
    (value) => {
        if (value) {
            state.value.ward = null;
            getWard(value);
        }
    },
    { immediate: true },
);
</script>
<style lang="scss" scoped>
.cart-page {
    @apply w-full bg-white;
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
