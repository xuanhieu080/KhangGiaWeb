<script setup lang='ts'>
const props = defineProps({
    url: String,
    label: String,
});

const id = ref();

function embedUrl() {
    const videoIdMatch = props.url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : '';
    id.value = `https://www.youtube.com/embed/${videoId}`;
}

embedUrl();


</script>

<template>
    <div v-if="id" class="youtube">
<!--        <lite-youtube-->
<!--            :videoid="id"-->
<!--            :playlabel="label"-->
<!--        />-->
    </div>
</template>

<style scoped lang='scss'>
//@import 'lite-youtube-embed/src/lite-yt-embed.css';
</style>