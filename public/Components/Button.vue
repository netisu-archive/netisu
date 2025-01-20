<script setup lang="ts">
// Props
defineProps({
    link: { type: String },
    IsBlock: { type: Boolean },
    ColorClass: { type: String },
});
</script>
<template>
    <Link v-if="link" :href="link">
        <div class="of1zd" :class="[IsBlock ? 'uzvus qeh80 cwlxp' : '', ColorClass]">
            <slot />
        </div>
    </Link>
</template>
