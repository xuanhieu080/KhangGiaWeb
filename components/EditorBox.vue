<template>
    <div class="container mx-auto">
        <ckeditor :editor="ClassicEditor" v-model="editorHtml" :config="editorConfig" />
        <div class="content">
            Content is:
            <div v-html="editorHtml"></div>
        </div>
    </div>
</template>
<script setup>
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/vi';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { ListProperties } from '@ckeditor/ckeditor5-list';
import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar } from '@ckeditor/ckeditor5-image';
import { LinkImage } from '@ckeditor/ckeditor5-link';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Clipboard } from '@ckeditor/ckeditor5-clipboard';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const editorConfig = ref({
    lang: 'vi',
    plugins: [
        Table,
        TableToolbar,
        Essentials,
        Bold,
        Italic,
        Link,
        Paragraph,
        ImagePlugin,
        ImageCaptionPlugin,
        ImageStylePlugin,
        ImageToolbarPlugin,
        ImageUploadPlugin,
        SimpleUploadAdapter,
        ListProperties,
        Image,
        ImageToolbar,
        ImageCaption,
        ImageStyle,
        ImageResize,
        LinkImage,
        Heading,
        Highlight,
        Clipboard,
        BlockQuote,
        Indent,
        IndentBlock,
    ],
    toolbar: {
        items: [
            'undo',
            'redo',
            '|',
            'Essentials',
            'heading',
            '|',
            'bold',
            'italic',
            '|',
            'link',
            'Paragraph',
            'bulletedList',
            'numberedList',
            '|',
            'highlight',
            'blockQuote',
            '|',
            'insertTable',
            '|',
            'insertImage',
            'outdent',
            'indent',
        ],
    },
    image: {
        toolbar: ['imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative', '|', 'linkImage'],
        insert: {
            // If this setting is omitted, the editor defaults to 'block'.
            // See explanation below.
            type: 'auto',
        },
    },
    simpleUpload: {
        // The URL that the images are uploaded to.
        uploadUrl: 'https://static.hegka.com/',

        // Enable the XMLHttpRequest.withCredentials property.
        withCredentials: true,

        // Headers sent along with the XMLHttpRequest to the upload server.
        headers: {
            'X-CSRF-TOKEN': 'CSRF-Token',
            Authorization: 'Bearer <JSON Web Token>',
        },
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        ],
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
});
const editorHtml = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});
</script>
<style lang="scss"></style>
