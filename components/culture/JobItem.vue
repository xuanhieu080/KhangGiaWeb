<template>
    <div class="job-item">
        <div class="job-grid__thumbnail" style="z-index: 9">
            <div class="job-grid__image"><img :src="image" alt="" /></div>
        </div>
        <div class="job-grid__content" style="position: relative; overflow: hidden">
            <h3 class="job-grid__title">
                <span v-if="isNew" class="menu-tag menu-tag--new" style="transform: translateY(-2px); display: inline-block">NEW</span>
                {{ title }}
            </h3>
            <ul class="!m-0 list-none p-0 text-left">
                <li>Location: <span style="margin-left: 5px">{{ location }}</span></li>
                <li class="!mt-2">Income: <span style="margin-left: 5px">{{ income }}</span></li>
            </ul>
            <div class="job-grid__footer">
                <div class="job-grid__time flex flex-wrap items-center gap-1 text-[12px]">
                    <svg width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 38" aria-hidden="true">
                        <title>Clock</title>
                        <g>
                            <path fill="currentColor" d="M24.38,0A18.68,18.68,0,0,0,8,10h.36A5.65,5.65,0,0,1,12,11.28,14.43,14.43,0,0,1,24.38,4.17,14.7,14.7,0,0,1,38.92,19,14.72,14.72,0,0,1,24.38,33.87a14.42,14.42,0,0,1-8.26-2.61l-1.93,3.67A18.5,18.5,0,0,0,24.38,38,18.84,18.84,0,0,0,43,19,18.83,18.83,0,0,0,24.38,0Z"></path>
                            <path fill="currentColor" d="M24.07,8A2.08,2.08,0,0,0,22,10.11v8.78A2.08,2.08,0,0,0,24.07,21h6.86a2.11,2.11,0,0,0,0-4.22H26.14V10.11A2.08,2.08,0,0,0,24.07,8Z"></path>
                            <path fill="currentColor" d="M13.15,21.94l-2.89.44a.56.56,0,0,1-.63-.53V15.57a1.59,1.59,0,0,0-3-.76L.2,26.79a1.56,1.56,0,0,0,1.62,2.27l2.89-.44a.56.56,0,0,1,.63.53v6.28a1.59,1.59,0,0,0,3,.76l6.5-12a1.57,1.57,0,0,0-1.67-2.27Z"></path>
                        </g>
                    </svg>
                    {{ type }}
                </div>
                <a rel-script="jobs-views" class="job-grid__link">
                    Details &amp; Apply
                    <UIcon name="i-heroicons-arrow-right" class="text-xs text-black ml-1 font-bold"></UIcon>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    location: { type: String, default: 'HCMC' },
    income: { type: String, default: 'Negotiate' },
    type: { type: String, default: 'Fulltime' },
    image: { type: String, default: '/images/recruitment-job-1.png' },
    isNew: { type: Boolean, default: true },
});
</script>
