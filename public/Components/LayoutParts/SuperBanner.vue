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
            'blqyi': !usePage<any>().props.site.frontend.sidebar_menu,
            container: usePage<any>().props.site.frontend.sidebar_menu,
        }"
    >
        <div
            class="fotjp yrzca mkoq3"
            style="z-index: 1; position: relative"
        >
        <portal-target name="bannerAsset" />

            <v-lazy-image
                v-if="props.bannerType == 'image'"
                :src="props.bannerAsset"
                width="100"
                class="vvo5o"
                alt="Space Thumbnail"
                src-placeholder="assets/img/space-error.png"
            />
            <i
                v-else-if="props.bannerType == 'icon'"
                class="ku9nu iniww"
                :class="props.bannerAsset"
            ></i>
            <template v-else />
            <div class="aszip">
                <div class="ja9zv umlu3">
                    <portal-target name="bannerName" />
                </div>
                <div class="n91zp ctx1u umlu3 iniww">
                    <portal-target name="bannerDescription" />
                </div>
                <div class="lrcyb yrzca mkoq3">
                    <portal-target name="bannerButtons" />
                </div>
            </div>
        </div>
    </main>
</template>
