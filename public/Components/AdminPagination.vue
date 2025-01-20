<script lang="ts" setup>
import { usePaginator } from "momentum-paginator";

const props  = defineProps<{
    pagedata: Paginator<Array<any>>
}>();

const { previous, next, pages } = usePaginator(props.pagedata);
</script>

<template>
    <nav class="vt7rj is-centered" role="navigation" aria-label="vt7rj">
        <component is="Link" as="a" :href="previous.url" :class="{
            'pagination-previous is-hidden-mobile': previous.isActive,
            'pagination-previous is-hidden-mobile av4ey': !previous.isActive,
        }">
            <i class="fa-regular fa-chevron-left"></i>
        </component>
        <component is="Link" as="a" :href="next.url" :class="{
            'pagination-next is-hidden-mobile': next.isActive,
            'pagination-next is-hidden-mobile av4ey': !next.isActive,
        }">
            <i class="fa-regular fa-chevron-right"></i>
        </component>
        <ul class="pagination-list">
            <li v-for="page in pages">
                <component is="Link" as="pw3az" :href="page.url" :class="{
                'ec6xr n102d': page.isCurrent,
                'ec6xr': page.isActive,
            }">
                    {{ page.label }}
                </component>
            </li>
        </ul>
    </nav>
</template>
