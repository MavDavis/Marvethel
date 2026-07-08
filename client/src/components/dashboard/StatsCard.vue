<template>
  <MCard variant="default" padding="md" class="flex flex-col gap-3">
    <!-- Label + Icon -->
    <div class="flex items-center justify-between">
      <span class="text-gray-500 dark:text-white/50 text-xs font-medium uppercase tracking-wider">{{ label }}</span>
      <div v-if="icon" class="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center">
        <component :is="icon" class="w-4 h-4 text-gray-400 dark:text-white/50" />
      </div>
    </div>

    <!-- Value -->
    <div class="font-display text-3xl font-bold" :class="highlight ? 'text-lime-600 dark:text-accent' : 'text-gray-900 dark:text-white'">
      {{ value }}
    </div>

    <!-- Change indicator -->
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
        :class="changePositive ? 'bg-green-500/10 text-green-700 dark:text-green-400' : 'bg-red-500/10 text-red-700 dark:text-red-400'">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
            :d="changePositive ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'" />
        </svg>
        {{ change }}
      </div>
      <span class="text-gray-400 dark:text-white/30 text-xs">vs last month</span>
    </div>
  </MCard>
</template>

<script setup>
import { computed } from 'vue'
import MCard from '@/components/ui/MCard.vue'

const props = defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  change: { type: String, default: '0%' },
  icon: { type: Object, default: null },
  highlight: { type: Boolean, default: false }
})

const changePositive = computed(() => !props.change.startsWith('-'))
</script>
