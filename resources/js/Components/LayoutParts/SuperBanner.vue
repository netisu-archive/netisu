<script setup lang="ts">
import { usePage } from "@inertiajs/vue3";
import VLazyImage from "v-lazy-image";

interface Props {
    bannerType?: string,
    bannerAsset?: string,

}

const props = defineProps<Props>();
</script>

<template>
    <main
        :class="{
            'container-navbar': !usePage<any>().props.site.frontend.sidebar_menu,
            container: usePage<any>().props.site.frontend.sidebar_menu,
        }"
    >
        <div
            class="gap-4 align-middle flex-container"
            style="z-index: 1; position: relative"
        >
        <portal-target name="bannerAsset" />

            <v-lazy-image
                v-if="props.bannerType == 'image'"
                :src="props.bannerAsset"
                width="100"
                class="space-image"
                alt="Space Thumbnail"
                src-placeholder="assets/img/space-error.png"
            />
            <i
                v-else-if="props.bannerType == 'icon'"
                class="text-5xl text-muted"
                :class="props.bannerAsset"
            ></i>
            <template v-else />
            <div class="text-start">
                <div class="text-2xl fw-semibold">
                    <portal-target name="bannerName" />
                </div>
                <div class="text-sm text-truncate fw-semibold text-muted">
                    <portal-target name="bannerDescription" />
                </div>
                <div class="gap-2 align-middle flex-container">
                    <portal-target name="bannerButtons" />
                </div>
            </div>
        </div>
    </main>
</template>
