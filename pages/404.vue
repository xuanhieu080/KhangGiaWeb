<template>
    <NuxtLayout name="error">
        <div class="prose prose-lg container max-w-screen-xl mx-auto p-6">
            <template>
                <div class="flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 w-full">
                    <div class="max-w-md">
                        <h1>404</h1>
                        <p>

                        </p>
                        <p>{{trans("Sorry, we can't find this page right now")}}</p>
                        <p>{{trans('return_in_seconds', {timeout: timeout})}}</p>
                        <p>
                            {{trans('Or click here')}}
                            <UButton size="lg" variant="outline" class="ml-4" @click="handleError"> {{trans('Back to homepage')}} </UButton>
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

const { locale, t: trans } = useI18n();

onMounted(() => {
    const backHomepage = setInterval(() => {
        if (timeout.value == 1) {
            clearInterval(backHomepage);
            router.push(localePath({ name: 'index' }));
        } else {
            timeout.value--;
        }
    }, 1000);
})

const handleError = () => {
    clearError({
        redirect: `/${locale.value}`,
    });
};

let seoMeta = {
    title: trans('Not found'),
    robots: 'nofollow, noindex',
    bingbot: 'nofollow, noindex',
    googlebot: 'nofollow, noindex',
};
useSeoMeta(seoMeta);
</script>

<style lang="scss" scoped></style>
