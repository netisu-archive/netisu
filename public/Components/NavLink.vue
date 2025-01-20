<script setup lang="ts">
import { current } from 'momentum-trail';

// Props
defineProps<{
    link?: string,
    active_link?: any,
}>();
</script>
<template>
    <li class="nzck2 u6xfc pf3kt tybmh">
        <div class="side-item">
            <Link class="t1n0h" :href="link" :class="[current(active_link) ? 'vuhhm' : '']" prefetch>
                <slot />
            </Link>
        </div>
    </li>
</template>
