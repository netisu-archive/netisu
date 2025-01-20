<script lang="ts" setup>
import { usePaginator } from "momentum-paginator";

const props  = defineProps<{
    pagedata: Paginator<Array<any>>
}>();

const { previous, next, pages } = usePaginator(props.pagedata);
</script>

<template>
  <div class="jol0p">
      <ul class="vt7rj mkoq3 hg4an">
    <component
    is="Link"
    as="pw3az"
      :href="previous.url"
      :class="{
        'pl4dv': previous.isActive,
        'pl4dv qnlzm': !previous.isActive,
      }"
    >
     <i class="fa-regular fa-chevron-left"></i>
    </component>

    <component
      v-for="page in pages"
      is="Link"
      as="pw3az"
      :href="page.url"
      :class="{
        'pl4dv irkba': page.isCurrent,
        'pl4dv': page.isActive,
      }"
    >
      {{ page.label }}
    </component>

    <component
      is="Link"
      as="pw3az"
      :href="next.url"
      :class="{
        'pl4dv': next.isActive,
        'pl4dv qnlzm': !next.isActive,
      }"
    >
      <i class="fa-regular fa-chevron-right"></i>
    </component>
          </ul>
  </div>
</template>
