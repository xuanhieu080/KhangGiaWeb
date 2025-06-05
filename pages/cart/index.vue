<template>
    <NuxtLayout name="main">
        <div class="cart-page py-6" :class="isLoadingPage ? 'h-[90vh]' : ''">
            <div v-if="!isLoadingPage" class="container mx-auto flex flex-col-reverse lg:flex-row items-start w-full gap-4">
                <div class="cart-information-user flex flex-col gap-6 w-full lg:w-1/2 border-r border-gray-300 pr-4">
                    <div class="flex flex-col gap-2 font-medium">
                        <div class="text-3xl font-bold">{{ trans('Hello guests') }}</div>
                        <span>
                            {{ trans('totalAmount', { count: cartNumber }) }}
                            <b class="text-blue-600">{{ getPaidPrice() }}{{trans('price_name')}}</b>
                        </span>
                    </div>
                    <div class="flex flex-col gap-4 w-full">
                        <div class="flex items-center justify-between">
                            <div class="font-bold text-2xl">{{ trans('Shipping information') }}</div>
                        </div>
                        <UForm ref="form" :schema="schema" :state="state" class="flex flex-col gap-4 w-full">
                            <div class="flex items-center justify-between gap-4 w-full">
                                <UFormGroup label="" name="User name" class="w-full">
                                    <UInput
                                        v-model="state.name"
                                        size="xl"
                                        class="w-full custom-input"
                                        :placeholder="trans('Full name')"
                                        :ui="{ rounded: 'rounded-full' }" />
                                </UFormGroup>
                                <UFormGroup label="" name="User Phone" class="w-full">
                                    <UInput
                                        v-model="state.phone"
                                        size="xl"
                                        class="w-full custom-input"
                                        :placeholder="trans('Phone')"
                                        :ui="{ rounded: 'rounded-full' }" />
                                </UFormGroup>
                            </div>
                            <UFormGroup label="" name="User email" class="w-full">
                                <UInput
                                    v-model="state.email"
                                    size="xl"
                                    class="w-full custom-input"
                                    :placeholder="trans('Email')"
                                    :ui="{ rounded: 'rounded-full' }" />
                            </UFormGroup>
                            <UFormGroup label="" name="User address" class="w-full">
                                <UInput
                                    v-model="state.address"
                                    size="xl"
                                    class="w-full custom-input"
                                    :placeholder="trans('Address')"
                                    :ui="{ rounded: 'rounded-full' }" />
                            </UFormGroup>
                            <div class="flex items-center gap-2 w-full flex-wrap xl:flex-nowrap">
                                <UFormGroup v-if="!loadingCities" label="" :name="trans('Province/City')" class="w-full xl:w-1/3">
                                    <USelectMenu
                                        v-model="state.city"
                                        size="xl"
                                        :options="cities.data"
                                        searchable
                                        clear-search-on-close
                                        searchable-placeholder="Search a city..."
                                        class="w-full custom-input"
                                        :placeholder="trans('Province/City')"
                                        option-attribute="name"
                                        :uiMenu="{ container: 'max-w-full' }"
                                        value-attribute="id"
                                        :loading="loadingCities"
                                        :ui="{ rounded: 'rounded-full' }">
                                        <template #option="{ option: city }">
                                            <span class="truncate">{{ city.name }}</span>
                                        </template>
                                    </USelectMenu>
                                </UFormGroup>
                                <UFormGroup label="" :name="trans('District')" class="w-full xl:w-1/3">
                                    <USelectMenu
                                        v-model="state.district"
                                        size="xl"
                                        :options="districts"
                                        searchable
                                        clear-search-on-close
                                        searchable-placeholder="Search a district..."
                                        class="w-full custom-input"
                                        :placeholder="trans('District')"
                                        option-attribute="full_name"
                                        :uiMenu="{ container: ' max-w-full' }"
                                        value-attribute="id"
                                        :disabled="!state.city"
                                        :ui="{ rounded: 'rounded-full' }">
                                        <template #option="{ option: district }">
                                            <span class="truncate">{{ district.full_name }}</span>
                                        </template>
                                    </USelectMenu>
                                </UFormGroup>
                                <UFormGroup label="" :name="trans('Ward')" class="w-full xl:w-1/3">
                                    <USelectMenu
                                        v-model="state.ward"
                                        size="xl"
                                        :options="wards"
                                        searchable
                                        clear-search-on-close
                                        searchable-placeholder="Search a ward..."
                                        class="w-full custom-input"
                                        :placeholder="trans('Ward')"
                                        :uiMenu="{ container: 'max-w-full' }"
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
                                    :placeholder="trans('Additional notes (Example: Delivery during business hours,...)')"
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
                            <div class="font-bold text-2xl">{{ trans('Payment method') }}</div>
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
                                        <span class="text-xs">{{trans('Cash on Delivery')}}</span>
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
                                        <span>{{trans('Momo payment')}}</span>
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
                                        <span>{{trans('Payment Zalopay')}}</span>
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
                                        <span>{{trans('ShopeePay Wallet')}}</span>
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
                                        <span>{{trans('VNPAY/ VNPAY QR e-wallet')}}</span>
                                    </div>
                                </div>
                            </template>
                        </UCheckbox>
                    </div>
                    <div class="text-sm font-medium">
                        {{ trans('If you are not satisfied with our product? You can return it. Learn more') }}
                        <NuxtLink :to="localePath({ name: 'index' })">
                            <b>{{ trans('here') }}.</b>
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
                        {{trans('Pay') + '(COD)' }}
                    </UButton>
                </div>
                <div class="cart-product flex flex-col gap-4 w-full lg:w-1/2">
                    <div class="text-3xl font-bold">{{ trans('Shopping cart') }}</div>
                    <div
                        class="font-medium uppercase text-gray-400 text-sm pb-4 border-b border-gray-300 w-full flex items-center justify-between">
                        <span>{{ trans('Product description') }}</span>
                        <span>{{ trans('Price') }}</span>
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
                                    {{ trans('Quantity') + ': ' + findQuantity(item) }}
                                    <div class="product-price">
                                        <div v-if="item.percent == 0" class="original-price">
                                            {{ formatPriceProduct(item.price) + trans('price_name') }}
                                        </div>
                                        <div v-else class="discount-price">
                                            <div class="after-discount">
                                                {{ formatPriceProduct(item.price_discount) + trans('price_name') }}
                                            </div>
                                            <div class="original-price">{{ formatPriceProduct(item.price) + trans('price_name') }}</div>
                                            <div class="discount-tag">{{ item.percent + '%' }}</div>
                                        </div>
                                    </div>
                                </div>
                                <button class="delete-product flex items-center gap-2" @click="handleDeleteCartItem(item, index)">
                                    <UIcon name="i-material-symbols-delete-outline" class="text-xl" dynamic />
                                    {{ trans('Remove') }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-else class="product-list-empty h-24 border border-dashed rounded-lg flex items-center justify-center">
                        {{ trans('There are no products in the cart') }}
                    </div>
                    <UDivider />
                    <div class="flex justify-between w-full gap-2 mt-6 font-semibold">
                        <div>{{trans('Subtotal')}}</div>
                        <div class="total-price flex flex-col items-end gap-2">
                            {{ getFullTotalPrice() }}{{trans('price_name')}}
                            <span v-if="true" class="italic text-xs">
                                ({{ trans('Saving') }} <span class="text-blue-600">{{ getFullDiscountPrice() + trans('price_name') }} </span>)
                            </span>
                        </div>
                    </div>
                    <div class="flex justify-between w-full gap-2 mt-6 font-semibold">
                        <div>{{ trans('Discount') }}</div>
                        <div class="discount-price flex flex-col items-end gap-2">{{ getFullDiscountPrice(false) }}{{trans('price_name')}}</div>
                    </div>
                    <div class="flex justify-between w-full gap-2 mt-6 font-semibold">
                        <div>{{ trans('Shipping fee') }}</div>
                        <div class="discount-price flex flex-col items-end gap-2">{{ trans('Free') }}</div>
                    </div>
                    <UDivider />
                    <div class="flex justify-between w-full gap-2 mt-6 font-semibold">
                        <div>{{trans('Total')}}</div>
                        <div class="discount-price flex flex-col items-end gap-2 text-2xl">
                            {{ getPaidPrice() }}{{trans('price_name')}}
                            <span v-if="getFullDiscountPrice() > 0" class="italic text-xs text-red-500">
                                ({{ trans('discountLabel', { price: getFullDiscountPrice() }) }})
                            </span>
                        </div>
                    </div>

                    <div class="mt-8">
                        <b>{{trans('By clicking the payment button, you have understood the policies when purchasing at the website GAK.VN')}}</b>
                       <ul class="list-disc px-4">
                           <li>
                               <NuxtLink class="text-blue-600 dark:text-blue-500 hover:no-underline" :to="localePath({ name: 'privacy-policy' })">{{trans('Privacy policy')}}</NuxtLink>
                           </li>
                           <li>
                               <NuxtLink class="text-blue-600 dark:text-blue-500 hover:no-underline" :to="localePath({ name: 'delivery-policy' })">{{trans('Delivery policy')}}</NuxtLink>
                           </li>
                           <li>
                               <NuxtLink class="text-blue-600 dark:text-blue-500 hover:no-underline" :to="localePath({ name: 'retail-promotions-policy' })">{{trans('Promotion policy')}}</NuxtLink>
                           </li>
                           <li>
                               <NuxtLink class="text-blue-600 dark:text-blue-500 hover:no-underline" :to="localePath({ name: 'product-return-policy' })">{{trans('Product return policy')}}</NuxtLink>
                           </li>
                       </ul>
                        <p>{{trans('Thank you for choosing and purchasing products at GAK.VN')}}</p>
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
import { useLanguageLink } from '~/store/languageLink';
const useMainStore = useMain();
const { cartNumber } = storeToRefs(useMainStore);

let modules = ref([Navigation, Thumbs]);
let modulesSimilar = ref([Navigation]);
const localePath = useLocalePath();
const { t: trans, locale } = useI18n();

const toast = useToast();
const router = useRouter();

const useLanguageLinkStore = useLanguageLink();
const { link } = storeToRefs(useLanguageLinkStore);

if (locale.value == 'en') {
    link.value = `/vi/cart`;
} else {
    link.value = '/en/cart'
}

const isLoadingPage = ref(false);
const isOrdered = ref(false);
let districts = ref([]);
let wards = ref([]);
let listCart = ref([]);
let productLists = useCookie('products-cart', {
    default: () => [],
    maxAge: 60 * 60 * 24 * 7,
});
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
let userInformation = useCookie('user-information', { default: () => {}, maxAge: 60 * 60 * 24 * 365 });

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
    params.lang = locale.value

    const { data: response, error } = await useMyFetch('/api/v1/orders', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        params: params,
    });
    if (response.value) {
        toast.add({
            title: trans('Order successful') + ' !',
            description: trans('Your order has been placed successfully, Sales staff will contact you soon!'),
            timeout: 5000,
            icon: 'i-heroicons-check-badge',
            color: 'green',
        });
        isOrdered.value = true;
        productLists.value = null;
        setTimeout(() => {
           router.push({name: 'index'})
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
                description: trans('Oops, An error occurred! Please try again later'),
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



//Data

const getCheckCarts = async (items) => {
    listCart.value = [];
    let params = {
        lang: locale.value
    };
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
                item.variants.forEach((ele) => {
                    newCookie.value.push({
                        product_id: item.id,
                        variant_id: ele.id,
                    });
                })
                
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
            lang: locale.value
        },
    }),
);

const getDistrict = async (city) => {
    const { data: response, error } = await useMyFetch(`/api/v1/districts`, {
        params: {
            limit: 999,
            province_id: city,
            lang: locale.value
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
            lang: locale.value
        },
    });
    if (response.value) {
        wards.value = response.value.data;
    } else {
        return [];
    }
};
watch(
    () => productLists.value,
    async () => {
        if (productLists.value.length > 0) {
            isLoadingPage.value = true;
            getCheckCarts(productLists.value);
        }
    },
    { once: true, immediate: true },
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


let title = trans('Shopping cart');
let description = 'Complete your online shopping at GAK. Transparent delivery, returns and more.';
const config = useRuntimeConfig();

defineOgImageComponent('GAK', {
    title: title,
    description: description,
    theme: '#ff0000',
    colorMode: 'dark',
});
defineOgImage({
    url: config.public.logo,
});
let seoMeta = {
    description: description,
    ogDescription: description,
    ogTitle: title,
    title: title,
    twitterTitle: title,
    twitterDescription: description ,
    keywords: title,
};
useSeoMeta(seoMeta);
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
