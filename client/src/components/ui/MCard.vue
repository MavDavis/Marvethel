<template>
  <div :class="[baseClass, variantClass, paddingClass, { 'hover:border-gray-300 dark:hover:border-white/20 cursor-pointer': hoverable }]">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'elevated', 'highlight'].includes(v)
  },
  padding: {
    type: String,
    default: 'md',
    validator: (v) => ['none', 'sm', 'md', 'lg'].includes(v)
  },
  hoverable: { type: Boolean, default: false }
})

const baseClass = 'rounded-2xl border transition-all duration-200'

const variantClass = computed(() => ({
  default: 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10',
  elevated: 'bg-gray-50 dark:bg-[#0a0a0a] border-gray-200 dark:border-white/10',
  highlight: 'bg-gray-50 dark:bg-white/5 border-accent/30',
}[props.variant]))

const paddingClass = computed(() => ({
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}[props.padding]))
</script>
