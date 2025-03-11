<script lang="ts" setup>
import { usePaginator } from "momentum-paginator";
import {
    Button,
} from '@/Components/ui/button'

import {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
} from '@/Components/ui/pagination'

const props = defineProps<{ pagedata: Paginator<Array<any>> }>(); 

const { from, to, total, itemsPerPage, previous, next, pages } = usePaginator(props.pagedata);
</script>
<template>
    <Pagination :items-per-page="itemsPerPage" :total="total" :sibling-count="1" show-edges :default-page="1">
        <PaginationList class="flex items-center gap-1">
            <PaginationFirst />
            <PaginationPrev :href="previous.url" />

            <template v-for="page, index in pages">
                <PaginationListItem v-if="page.url" as-child>
                    <Button class="w-9 h-9 p-0" :variant="page.isActive ? 'outline' : 'default'">
                        {{ page.label }}
                    </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :index="index" />
            </template>

            <PaginationNext :href="next.url" />
            <PaginationLast />
        </PaginationList>
    </Pagination>
</template>