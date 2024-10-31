<script setup lang="ts">
import { current } from 'momentum-trail';

// Props
defineProps<{
    link?: string,
    active_link?: string,
}>();
</script>
<template>
    <li class="nav-item cell shrink show-for-large">
        <div class="side-item">
            <Link class="nav-link" :href="link" :class="[current(active_link) ? 'active' : '']">
                <slot />
            </Link>
        </div>
    </li>
</template>
