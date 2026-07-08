<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    v-bind="$attrs"
    :class="[baseClass, variantClass, sizeClass, { 'opacity-50 cursor-not-allowed': disabled }]"
    :disabled="tag === 'button' ? disabled : undefined"
  >
    <span v-if="$slots.icon" class="flex-shrink-0">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline', 'ghost', 'danger'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  tag: { type: String, default: 'button' },
  href: { type: String, default: undefined },
  to: { type: [String, Object], default: undefined },
  disabled: { type: Boolean, default: false }
})

const baseClass = 'inline-flex items-center justify-center gap-2 font-display font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black'

const variantClass = computed(() => ({
  primary: 'bg-accent text-black hover:bg-accent/90 active:scale-[0.98]',
  outline: 'border border-black/20 dark:border-white/20 text-gray-700 dark:text-white hover:border-accent hover:text-lime-600 dark:hover:text-accent active:scale-[0.98]',
  ghost: 'text-gray-700 dark:text-white hover:text-lime-600 dark:hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]',
  danger: 'bg-red-600 text-white hover:bg-red-500 active:scale-[0.98]',
}[props.variant]))

const sizeClass = computed(() => ({
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}[props.size]))
</script>
