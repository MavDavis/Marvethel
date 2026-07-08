<template>
  <component :is="tag" class="inline-flex items-center gap-2.5 select-none" :class="sizeClass">
    <!-- Dark mode: white mark on transparent -->
    <img
      src="/logos/mark-white.png"
      :style="{ height: markPx + 'px', width: 'auto' }"
      alt=""
      aria-hidden="true"
      class="flex-shrink-0 object-contain hidden dark:block"
    />
    <!-- Light mode: black mark on transparent -->
    <img
      src="/logos/mark-black.png"
      :style="{ height: markPx + 'px', width: 'auto' }"
      alt=""
      aria-hidden="true"
      class="flex-shrink-0 object-contain block dark:hidden"
    />
    <span v-if="showWordmark" class="font-display font-bold tracking-tight leading-none">
      <span class="text-gray-900 dark:text-white">MARV</span><span class="text-lime-600 dark:text-accent">ETHEL</span>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v)
  },
  tag: {
    type: String,
    default: 'div'
  },
  showWordmark: {
    type: Boolean,
    default: true
  }
})

const markPx = computed(() => ({ sm: 24, md: 32, lg: 42, xl: 52 }[props.size]))

const sizeClass = computed(() => ({
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
}[props.size]))
</script>
