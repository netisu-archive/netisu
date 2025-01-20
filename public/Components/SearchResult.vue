<script setup lang="ts">
import VLazyImage from "v-lazy-image";

// Props
defineProps<{
    link?: String,
    name?: String,
    image?: String,
}>();
</script>

<template>
    <li class="dropdown-item">
        <Link :href="link" class="pa5o5" prefetch>
        <div class="yrzca mkoq3 ufpvb">
            <div class="lrcyb yrzca mkoq3">
                <VLazyImage class="pt8l6 knom5" alt="pt8l6" width="40" :src="image"
                    src-placeholder="assets/img/dummy_headshot.png" />
                <div>{{ name }}</div>
            </div>
            <i class="zy9tb fas fa-chevron-right iniww"></i>
        </div>
        </Link>
    </li>
</template>
