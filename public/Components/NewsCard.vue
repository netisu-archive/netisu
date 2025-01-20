<script setup lang="ts">
import VLazyImage from "v-lazy-image";

// Props
defineProps<{
    link?: string,
    title?: string,
    desc?: string,
    creator?: string,
    date?: string,
    image?: string,

}>();
</script>
<template>
    <div class="jol0p">
        <a :href="link" class="nn1dg fhjfg">
            <v-lazy-image style="
    max-height: 100%; max-width: 100%; display: block;" :src="image" class="ryur2 hcu8a" />
            <div style="line-height: 18px">
                <div class="nn1dg umlu3 jtcwt">
                    {{ title }}
                </div>
                <div class="ut8sj iniww umlu3 ctx1u">
                    {{ desc }}
                </div>
                <div class="m8bhg ut8sj umlu3 iniww">
                    {{ creator }}<span class="lj0fs">&bullet;</span>{{ date }}
                </div>
            </div>
        </a>
    </div>
</template>
