import { defineNuxtPlugin } from '#app';
export default defineNuxtPlugin(nuxtApp => {
    // Đảm bảo thư viện đã được tải
    if (typeof window !== 'undefined') {
        // Import và khởi tạo thư viện khi trang được tải
        import('lite-youtube-embed').then(() => {
            // window.LiteYTEmbed.init();
        });
    }
});