<template>
    <div class="flex flex-col w-full gap-6">
        "HÊLLLO"
        <NuxtLink :to="localePath({ name: 'articles' })" class="button">
            <UButton variant="soft" color="gray" size="lg"> Go to Articles</UButton>
        </NuxtLink>
    </div>
</template>
<script setup>

const localePath = useLocalePath();
</script>
<style lang="scss" scoped></style>
