<template>
    <Teleport to="body">
        <slot name="header">
            <header class="header"></header>
        </slot>
        <main class="wrapper-desktop relative w-full">
            <div class="w-full relative main">
                <slot />
            </div>
        </main>
        <div class="dmca-container">
            <a
                href="//www.dmca.com/Protection/Status.aspx?ID=96e6318b-dec0-4669-9c13-a488589c8416"
                title="DMCA.com Protection Status"
                class="dmca-badge">
                <NuxtImg
                    format="webp"
                    src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=96e6318b-dec0-4669-9c13-a488589c8416"
                    alt="DMCA.com Protection Status"
                    class="w-full h-full object-contain"
            /></a>
        </div>
    </Teleport>
    <UNotifications class="z-99999" />
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import '@vueform/multiselect/themes/default.css';
const router = useRouter();
const { locale } = useI18n();
</script>
<style lang="scss" scoped>
header {
    background-color: #f5f5f7;
    @media screen and (min-width: 768px) {
        position: sticky;
        top: 0;
        z-index: 20;
    }
}
.dmca-container {
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    opacity: 0;
    width: max-content;
    .dmca-badge {
        display: block;
        width: 182px;
        height: 36px;
        @media screen and (min-width: 768px) {
            width: 121px;
            height: 24px;
        }
    }
}
</style>
