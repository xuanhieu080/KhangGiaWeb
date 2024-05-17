<template>
    <NuxtLayout name="main">
        <div v-if="!loadingArticle && !error" class="article-details">
            <div class="container mx-auto prose prose-lg max-w-screen-xl py-8">
                <UBreadcrumb :ui="{ol: 'gap-0 w-fit mt-0 pl-0'}" :links="links" />
                <h1 class="article-title">
                    {{ content.data.title }}
                </h1>
                <div v-html="content.data.content"></div>
                <div class="author-name text-end font-bold">
                    - {{ content.data.author_name }}
                </div>
            </div>
        </div>
        <div
            class="container mx-auto prose prose-lg max-w-screen-xl mt-[128px] text-center flex flex-col items-center gap-8"
            v-else-if="!loadingArticle && error">
            {{ 'Không tìm thấy bài viết' }}
            <UButton size="lg" :to="localePath({ name: 'index' })" class="no-underline">Quay về trang chủ</UButton>
        </div>
    </NuxtLayout>
</template>

<script setup>
const localePath = useLocalePath();
const router = useRouter();


const titleArticle = ref(null);
const links = ref([
    {
        label: 'Trang chủ',
        icon: 'i-heroicons-home',
        to: localePath({name: 'index'}),
    },
    {
        label: titleArticle,
    },
]);

const {
    data: content,
    pending: loadingArticle,
    error,
} = await useLazyAsyncData('articles-details', () => useOriginalFetch(`/api/v1/posts/${router.currentRoute.value.params.slug}`));


watchEffect(() => {
    if(!loadingArticle.value) {
        links.value[1].label = content.value.data.title
    }
})
const contectTest = ref(
    '<p><a href="https://hegka.com/articles/nen-chon-hang-may-bay-uy-tin-nao-cho-dip-tet-quy-mao-2023" rel="dofollow"><strong>Nên chọn hãng máy bay uy tín nào cho dịp Tết Quý Mão 2023? </strong></a>Hãy cùng <a href="https://hegka.com/" rel="dofollow"><strong>chúng tôi</strong></a> theo dõi bài viết sau đây để có thể lựa chọn được hãng máy bay uy tín cho dịp Tết Qúy Mão nhé!</p>\n<p>Mỗi mùa Tết đến cũng là lúc hoạt động vận tải hành khách nhộn nhịp hơn bao giờ hết. Đặc biệt, đối với ngành hàng không, khách hàng cần đặt vé trước Tết vài tháng để tránh tình trạng hết vé.</p>\n<p>Tình trạng này đã xảy ra khá thường xuyên, khách hàng phải bỏ ra số tiền rất lớn mới có vé về quê ăn Tết. Vậy nên chọn hãng máy bay uy tín nào cho dịp Tết Quý Mão 2023 luôn là vấn đề nan giải</p>\n<p>Bài viết dưới đây sẽ giúp bạn giải quyết những điều này, chỉ mất 3 phút để tham khảo.</p>\n<h2>\n<strong>1. Tại sao nên chọn hãng máy bay uy tín </strong><a href="https://hegka.com/redirects/fbf2b11e-356e-47ad-914e-1fd49c8631a9" rel="dofollow"><strong>Vietravel Airlines</strong></a><strong> cho dịp Tết</strong>\n</h2>\n<p><a href="https://hegka.com/redirects/d093d978-783e-48c9-909e-83e81511ca56" rel="dofollow">Vietravel Airlines</a> là hãng hàng không trực thuộc Công ty Cổ phần Vietravel, một công ty lữ hành và du lịch hàng đầu trong nước và quốc tế.</p>\n<p>Dù là tân bình mới xuất hiện trong vài năm trở lại đây; nhưng Vietravel Airlines luôn được đánh là hãng máy bay uy tín, chất lượng.</p>\n<p>Hãng luôn bảo vệ chất lượng dịch vụ trên từng chuyến bay với mong muốn mang đến cho hành khách những chuyến bay êm ái; yêu thương và đẳng cấp.</p>\n<p><img src="https://lh3.googleusercontent.com/J4-ZX1mf3QiCuwPjS90r1GrEXn9qXlc-sqcwCj3iwH_F2XmxrT3rbWUo4HmIQDQjB3YKAfUSt_5k-BCL_oS-STKwA4l8m1N-5WzUh1dRm_5Hhk74A06GGmBvZ41ywkj2Zxi-zPJz2iLgyhYsFzrtPMdi0NKMFgVeluVClgM-ZvkO6UdWc6wsh6ySucfarQ" alt=""></p>\n<p>Mạng đường bay của Vietravel Airlines được đánh giá là khá đa dạng từ Bắc đến Nam; với các điểm đến tại 6 thành phố lớn: Hà Nội; Nha Trang; Huế; Đà Nẵng, Kiên Giang và Hồ Chí Minh.</p>\n<p>Tần suất bay dự kiến ​​của Vietravel Airlines là từ 1 đến 2 chuyến cho mỗi chặng bay diễn ra trong ngày.</p>\n<p>Theo đánh giá của khách hàng; giá vé Vietravel Airlines dịp Tết thường khá rẻ so với nhiều hãng khác như: Vietnam Airlines; Bamboo Airways; Pacific Airlines.</p>\n<p>Theo thông báo về chính sách bán vé của hãng; hành khách có thể lựa chọn mua vé ngày hoặc giữ chỗ để mua sau. Bạn có thể chọn mua vé không hoàn lại hoặc có thể hoàn lại.</p>\n<h2><strong>2. Nên mua vé Tết Quý Mão Vietravel Airlines khi nào thì rẻ nhất?</strong></h2>\n<p>Dưới đây là một số bí quyết để săn vé giá rẻ của hãng máy bay uy tín Vietravel Airlines dịp Tết Quý Mão 2023.</p>\n<h3><strong>2.1 Mua sớm giá vé rẻ</strong></h3>\n<p>Vé máy bay giá rẻ nhất dịp Tết Âm lịch thường được tung ra trước 4-5 tháng. Do đó; thời điểm săn vé máy bay Tết giá rẻ tại Vietravel Airlines là từ tháng 9 đến tháng 11 hàng năm.</p>\n<p>Nếu mua vé vào tháng 12; bạn nên mua vào đầu tháng; vì càng cận ngày Tết giá vé càng cao.</p>\n<p><img src="https://lh4.googleusercontent.com/oBV7QXgz2_m7jzr9A0ghqD-zr2uZHyCnRvLct7o0B115N28W-rDeaiWfZqUnLTTLp0IozuWlOH4ARbzKWv-bnM9SM4uOG1Ikbh_Cb9mqYEZpUnEiUOhTc4lMs54koR-IozXpVi0kA1pZzIiSGRebPo-dxzMEyZ77QnWrH5E5ifrluIGYDPkb2U8cAkx4Jw" alt="máy bay uy tín Vietravel Airlines"></p>\n<h3><strong>2.2 Chốt ngay khi thấy giá vé hợp lý</strong></h3>\n<p>Như một quy luật bất thành văn, đường bay nhộn nhịp nhất thời gian qua thường là đường bay TP.HCM – Hà Nội.</p>\n<p>Vé Tết có thể đắt gấp 2-3 lần ngày thường. Vì vậy nếu có cơ hội nhận ưu đãi hãy chớp ngay thời cơ! Bạn nên đặt trước và giữ vé ngay khi thấy giá hợp lý.</p>\n<h3><strong>2.3 Săn khuyến mãi trên website của Vietravel Airlines</strong></h3>\n<p>Tìm kiếm vé giá rẻ và ưu đãi trên website Vietravel Airlines là cách thức được nhiều hành khách áp dụng để tìm vé giá rẻ.</p>\n<p>Vietravel Airlines cung cấp công cụ lọc thông minh; giúp người dùng chọn vé nhanh chóng để tra cứu các chương trình khuyến mãi giảm giá đang được áp dụng. </p>\n<p><img src="https://lh4.googleusercontent.com/TC2lFYKUO1Ds6Af5iLyZ5bS_cFIYd3knBfHaHHHcLYLdsc3j4BenF-v3SV26YYuiTzTDpOOdFkT1csGhkiduRaGMTDEKINMh6VwMi0IDYkJPdHfP20cQHXYmr4SFOlT95hPGmfVUcPBpSmHAVs1cn_6f5dN0ULSvMwg2nbjXbY-JvF0TgTQtu3D9RMbnxQ" alt="máy bay uy tín Vietravel Airlines"></p>\n<p><a href="https://hegka.com/redirects/06a04f91-aecd-4b55-b7f0-bd14d7b62032" rel="dofollow">Vietravel Airline</a> thường xuyên có những ưu đãi đặc biệt flash sale hàng tuần và nhiều sự kiện khuyến mại khác để bạn “lùng” vé rẻ. </p>\n<h3><strong>2.4 Mua ngay tại thời điểm này</strong></h3>\n<p>Đây là thời điểm thích hợp để bạn đặt vé Tết nếu không muốn bỏ lỡ những cơ hội săn vé rẻ. Nếu chờ lâu hơn; lượng vé giá rẻ sẽ hết; bạn có thể phải mua vé hạng cao hơn và giá vé cao hơn.</p>\n<p>Một kinh nghiệm mua vé Tết Vietravel giá rẻ khác; đólà bạn nên chọn giờ bay lệch ngày cao điểm và chọn giờ bay vắng vẻ.</p>\n<p>Các chuyến bay sáng sớm hoặc tối muộn luôn rẻ hơn các chuyến bay trong giờ hành chính. Đặt vé trước hoặc sau lễ 2 ngày cũng là bí quyết để có giá tốt nhất.</p>\n<h2><strong>Tạm kết</strong></h2>\n<p>Mong rằng những chia sẻ trên đây đã giúp bạn lựa chọn được hãng máy bay uy tín để đồng hành trong dịp Tết Quý Mão 2023. Hiện tại, Vietravel đang có <a href="https://hegka.com/redirects/c41dd0b0-b12a-493c-acea-8324a2d8f317" rel="dofollow">chương trình flash sale</a> giá vé cực kỳ ưu đãi với số lượng có hạn. Hãy nhanh tay truy cập website của Vietravel Airlines để tận hưởng ưu đãi ngay thôi nào.</p>\n',
);
</script>

<style lang="scss" scoped></style>
