<template>
    <NuxtLayout name="main">
        <div class="prose prose-lg container max-w-screen-xl mx-auto p-6">
            <template v-if="error?.statusCode === 404">
                <div class="flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 w-full">
                    <div class="max-w-md">
                        <div class="text-5xl font-dark font-bold">404</div>
                        <p class="text-2xl md:text-3xl font-light leading-normal">
                            Xin lỗi, Chúng tôi không tìm thấy trang này ngay lúc này
                        </p>
                        <p class="mb-8">Nhưng đừng lo lắng, bạn có thể tìm thấy nhiều thứ khác tại trang chủ của chúng tôi.</p>
                        <p>Quay trở lại trang chính sau {{ timeout }} giây</p>
                        <p>
                            Hoặc bấm vào đây
                            <UButton size="lg" variant="outline" class="ml-4" @click="handleError"> Quay trở lại trang chính </UButton>
                        </p>ß
                    </div>
                    <div class="max-w-lg">
                        <img src="/images/404-image.svg" />
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 w-full">
                    <div class="max-w-md">
                        <h1>Oops...</h1>
                        <p>
                            <strong>{{ error?.message }}</strong>
                        </p>
                        <p>Có vấn đề xảy ra.</p>
                        <p>Xin lỗi về sự bất tiện này.</p>
                        <p>Quay trở lại trang chính sau {{ timeout }} giây</p>
                        <p>
                            Hoặc bấm vào đây
                            <UButton size="lg" variant="outline" class="ml-4" @click="handleError"> Quay trở lại Homepage </UButton>
                        </p>
                    </div>
                    <div class="max-w-lg">
                        <img src="/images/404-image.svg" />
                    </div>
                </div>
            </template>
        </div>
    </NuxtLayout>
</template>

<script setup>
const error = useError();
const router = useRouter();
const localePath = useLocalePath();
const timeout = ref(10);

const backHomepage = setInterval(() => {
    if (timeout.value == 0) {
        clearInterval(backHomepage);
        router.push(localePath({ name: 'index' }));
    } else {
        timeout.value--;
    }
}, 1000);

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>

<style lang="scss" scoped></style>
