<script setup lang="ts">
import { MinusIcon } from '@radix-icons/vue'
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui'

const props = defineProps<PrimitiveProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <MinusIcon class="w-2" />
    </slot>
  </primitive>
</template>
