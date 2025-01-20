<script setup lang="ts">
import { route } from 'momentum-trail';
import VLazyImage from "v-lazy-image";

// Props
defineProps<{
    name?: string,
    DisplayName?: string,
    date?: string,
    message?: string,
    Thumbnail?: string,

}>();
</script>
<template>
    <div class="doh7b jol0p mkoq3 wj42a">
        <div class="eb64e knom5" style="width: 100px">
            <Link :href="route(`user.profile`, { username: name})" class="n91zp wruu4 nn1dg fhjfg">
                <v-lazy-image :src="Thumbnail" width="60" class="pt8l6" alt="Avatar"
                    src-placeholder="/assets/img/dummy_headshot.png" />
                <div style="line-height: 16px">
                    <div class="ctx1u">{{ DisplayName }}</div>
                    <div class="ut8sj iniww ctx1u">
                        {{ '@' + name }}
                    </div>
                </div>
            </Link>
        </div>
        <div class="bbztw pfmvb ni21t sd6c8">
            <div class="yrzca mkoq3 ufpvb">
                <div class="sd6c8">
                    <div class="ut8sj iniww">
                        <i class="far fa-clock x4jyd" style="vertical-align: middle;margin-top: -2.5px;font-size: 10px;"></i>
                        Posted {{ date }}
                    </div>
                    <div>
                        {{ o9hmy }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
