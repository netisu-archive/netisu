<script setup lang="ts">
import { current } from "momentum-trail";
import { cn } from '@/lib/utils'


// Props
defineProps<{
    link?: string,
    ActiveLink?: any,
}>();
</script>
<template>
    <Link :href="link"
        :class="cn('group flex h-8 w-full items-center gap-4 rounded-lg px-2 font-normal text-foreground underline-offset-2 hover:bg-accent hover:text-accent-foreground', current(ActiveLink) && 'bg-blue-500 font-medium text-white hover:bg-blue-600')"
         prefetch>
    <slot />
    </Link>
</template>
