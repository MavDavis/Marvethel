<template>
  <span :class="[baseClass, variantClass]">
    <span v-if="dot" class="w-1.5 h-1.5 rounded-full" :class="dotClass" />
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'accent', 'success', 'warning', 'danger'].includes(v)
  },
  dot: { type: Boolean, default: false }
})

const baseClass = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-display'

const variantClass = computed(() => ({
  default: 'bg-black/8 dark:bg-white/10 text-gray-700 dark:text-white',
  accent: 'bg-lime-100 dark:bg-accent/10 text-lime-700 dark:text-accent border border-lime-300 dark:border-accent/20',
  success: 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20',
  warning: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border border-yellow-500/20',
  danger: 'bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20',
}[props.variant]))

const dotClass = computed(() => ({
  default: 'bg-gray-600 dark:bg-white',
  accent: 'bg-lime-500 dark:bg-accent',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
}[props.variant]))
</script>
