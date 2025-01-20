<script setup lang="ts">
import { current } from 'momentum-trail';

// Props
defineProps<{
    link?: string,
    active_link?: any,
}>();
</script>
<template>
            <Link :href="link" :class="[current(active_link) ? 'h2cgi' : 'has-text-white']" class="pha9h" prefetch>
                <slot />
            </Link>

</template>
