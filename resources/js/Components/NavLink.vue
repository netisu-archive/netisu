<script setup lang="ts">
import { current } from 'momentum-trail';
import {
  NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@/Components/ui/navigation-menu'
// Props
defineProps<{
    landing?: Boolean,
    link?: string,
    ActiveLink?: any,
}>();
</script>
<template>
    <Link :href="link" prefetch>
    <NavigationMenuLink
        :class="[landing ? 'bg-blue-500 text-white hover:bg-blue-400 hover:text-white' : '',navigationMenuTriggerStyle(), current(ActiveLink) ? 'bg-blue-500 hover:bg-blue-600' : '']">
        <slot />
    </NavigationMenuLink>
    </Link>
</template>
