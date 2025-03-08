<script setup lang="ts">
import { cn } from '@/lib/utils'
import { route } from 'momentum-trail';

interface ImageProps {
    item: Object
    aspectRatio?: 'portrait' | 'square'
    width?: number
    height?: number
}
withDefaults(defineProps<ImageProps>(), {
    aspectRatio: 'portrait',
})
</script>

<template>
    <div :class="cn('space-y-3', $attrs.class ?? '')">
        <div class="overflow-hidden rounded-md">
            <img :src="item.thumbnail" :alt="item.name" :width="width" :height="height" :class="cn(
                'h-auto w-auto border border-blue-500 object-cover transition-all',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
            )">
        </div>

        <div class="space-y-1 text-sm">
            <Link :href="route(`store.item`, { id: item.id })">
            <h3 class="font-medium leading-none">
                {{ item.name }}
            </h3>
            </Link>
            <Link :href="route(`user.profile`, {
                username:
                    item.creator.username,
            })">
            <p class=" text-xs text-muted-foreground">
                By: {{ '@' + item.creator.username }}
            </p>
            </Link>
        </div>
    </div>
</template>