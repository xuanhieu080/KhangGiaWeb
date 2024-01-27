<template>
    <div class="container mx-auto">
        <div class="content">
            <div v-html="editorHtml"></div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    content: String,
});
const emit = defineEmits(['update:content']);

const editorHtml = computed({
    get: () => props.content,
    set: (value) => emit('update:content', value),
});
</script>
<style lang="scss"></style>
