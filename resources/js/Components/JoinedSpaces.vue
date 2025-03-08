<script setup lang="ts">
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/Components/ui/sidebar'
import { ChevronsUpDown, Plus } from 'lucide-vue-next'
import { ref } from 'vue'
const props = defineProps<{
    spaces: {
        name: string
        thumbnail: string
        rank: string
    }[]
}>()
const activeSpace = ref(props.spaces[0])
</script>
<template>
    <SidebarMenu>
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <SidebarMenuButton size="lg"
                        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                        <div
                            class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <img :src="activeSpace.thumbnail" class="size-4" />
                        </div>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold">
                                {{ activeSpace.name }}
                            </span>
                            <span class="truncate text-xs">{{ activeSpace.rank }}</span>
                        </div>
                        <ChevronsUpDown class="ml-auto" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg" align="start"
                    :side="isMobile ? 'bottom' : 'right'" :side-offset="4">
                    <DropdownMenuLabel class="text-xs text-muted-foreground">
                        Joined Spaces
                    </DropdownMenuLabel>
                    <DropdownMenuItem v-for="(Space, index) in spaces" :key="Space.name" class="gap-2 p-2"
                        @click="activeSpace = Space">
                        <div class="flex size-6 items-center justify-center rounded-sm border">
                            <img :src="Space.thumbnail" class="size-4 shrink-0" />
                        </div>
                        {{ Space.name }}
                        <DropdownMenuShortcut>⌘{{ index + 1 }}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem class="gap-2 p-2">
                        <div class="flex size-6 items-center justify-center rounded-md border bg-background">
                            <Plus class="size-4" />
                        </div>
                        <div class="font-medium text-muted-foreground">
                            Join a Space
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
</template>
