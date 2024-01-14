<template>
    <NuxtLayout name="main">
        <div>
            "Articles"
            <ClientOnly>
                <EditorBox v-model="content" />
            </ClientOnly>
        </div>
    </NuxtLayout>
</template>
<script setup>
definePageMeta({layout: false});
import EditorBox from '@@/components/EditorBox.vue';
const content = ref();
</script>
<style lang="scss" scoped></style>
