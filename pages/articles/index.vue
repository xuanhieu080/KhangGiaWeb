<template>
    <NuxtLayout name="default">
        <div>
            "Articles"
            <ClientOnly>
                <EditorBox v-model="content" />
            </ClientOnly>
        </div>
    </NuxtLayout>
</template>
<script setup>
import EditorBox from '@@/components/EditorBox.vue';
const content = ref();
</script>
<style lang="scss" scoped></style>
