<script setup lang="ts">
import { usePage } from "@inertiajs/vue3";
import VLazyImage from "v-lazy-image";
const { props } = usePage<any>();
</script>

<template>
    <main
        :class="{
            'container-navbar': !props.site.frontend.sidebar_menu,
            container: props.site.frontend.sidebar_menu,
        }"
    >
        <div
            class="gap-4 align-middle flex-container"
            style="z-index: 1; position: relative"
        >
        <portal-target name="bannerAsset" />

            <v-lazy-image
                v-if="bannerType == 'image'"
                :src="bannerAsset"
                width="100"
                class="space-image"
                alt="Space Thumbnail"
                src-placeholder="assets/img/space-error.png"
            />
            <i
                v-else-if="bannerType == 'icon'"
                class="text-5xl text-muted"
                :class="bannerAsset"
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
