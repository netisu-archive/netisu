<script setup lang="ts">
import { current } from "momentum-trail";

// Props
defineProps<{
    link: string,
    ActiveLink?: any,
}>();
</script>
<template>
    <li class="side-item">
        <Link class="mz057" :href="link" :class="[current(ActiveLink) ? 'vuhhm' : '']" prefetch>
        <slot />
        </Link>
    </li>
</template>
