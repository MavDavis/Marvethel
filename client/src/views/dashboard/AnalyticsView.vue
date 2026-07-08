<template>
  <div class="p-6 md:p-8 max-w-[1400px] mx-auto">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p class="text-gray-400 dark:text-white/40 text-sm mt-1">Track AI performance and product growth metrics</p>
      </div>
      <div class="flex gap-3">
        <div class="flex items-center gap-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-1">
          <button v-for="r in ranges" :key="r" @click="range = r"
            class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            :class="range === r ? 'bg-accent text-black' : 'text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white'">
            {{ r }}
          </button>
        </div>
        <MButton variant="outline" size="sm">Export</MButton>
      </div>
    </div>

    <!-- Top metrics -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="metric in topMetrics" :key="metric.label"
        class="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-5">
        <div class="text-gray-400 dark:text-white/40 text-xs mb-2 uppercase tracking-wider">{{ metric.label }}</div>
        <div class="font-display text-3xl font-bold mb-1" :class="metric.highlight ? 'text-lime-600 dark:text-accent' : 'text-gray-900 dark:text-white'">
          {{ metric.value }}
        </div>
        <div class="flex items-center gap-1.5 text-xs" :class="metric.up ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              :d="metric.up ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'" />
          </svg>
          {{ metric.change }}
        </div>
      </div>
    </div>

    <!-- Charts row -->
    <div class="grid lg:grid-cols-2 gap-6 mb-6">
      <!-- AI Calls chart -->
      <MCard padding="lg">
        <h2 class="font-display font-semibold text-gray-900 dark:text-white mb-1">AI Call Volume</h2>
        <p class="text-gray-400 dark:text-white/30 text-xs mb-6">Total API calls processed per day</p>
        <svg viewBox="0 0 400 140" class="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#D6FF01" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#D6FF01" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0 120 L35 100 L70 85 L105 70 L140 80 L175 55 L210 45 L245 30 L280 40 L315 20 L350 15 L400 5 L400 140 L0 140 Z" fill="url(#g1)"/>
          <path d="M0 120 L35 100 L70 85 L105 70 L140 80 L175 55 L210 45 L245 30 L280 40 L315 20 L350 15 L400 5" stroke="#D6FF01" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="0" y1="35" x2="400" y2="35" stroke="currentColor" stroke-width="1" class="text-black/5 dark:text-white/5"/>
          <line x1="0" y1="70" x2="400" y2="70" stroke="currentColor" stroke-width="1" class="text-black/5 dark:text-white/5"/>
          <line x1="0" y1="105" x2="400" y2="105" stroke="currentColor" stroke-width="1" class="text-black/5 dark:text-white/5"/>
        </svg>
      </MCard>

      <!-- Tool performance -->
      <MCard padding="lg">
        <h2 class="font-display font-semibold text-gray-900 dark:text-white mb-1">Tool Performance</h2>
        <p class="text-gray-400 dark:text-white/30 text-xs mb-6">Success rate by AI tool</p>
        <div class="flex flex-col gap-4">
          <div v-for="tool in toolPerf" :key="tool.name">
            <div class="flex justify-between text-xs mb-1.5">
              <div class="flex items-center gap-2">
                <span>{{ tool.emoji }}</span>
                <span class="text-gray-600 dark:text-white/70">{{ tool.name }}</span>
              </div>
              <span class="text-gray-900 dark:text-white font-display font-bold">{{ tool.rate }}%</span>
            </div>
            <div class="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
              <div class="h-full rounded-full bg-accent transition-all duration-700"
                :style="{ width: tool.rate + '%' }" />
            </div>
          </div>
        </div>
      </MCard>
    </div>

    <!-- AI Insight banner -->
    <div class="rounded-2xl border border-accent/20 bg-lime-50 dark:bg-accent/5 p-6 mb-6 flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-lime-100 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-lime-700 dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zm4.657 2.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm3 6v-1h4v1a2 2 0 11-4 0zm4-2a4 4 0 10-4 0h4z"/>
        </svg>
      </div>
      <div>
        <div class="text-lime-700 dark:text-accent font-display font-semibold text-sm mb-1">AI Insight</div>
        <p class="text-gray-600 dark:text-white/70 text-sm leading-relaxed">
          Your <strong class="text-gray-900 dark:text-white">Content Generator</strong> is driving 67% of all AI calls this week. Peak usage is between <strong class="text-gray-900 dark:text-white">9–11am UTC</strong>. Consider increasing rate limits during this window to improve response times.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MCard from '@/components/ui/MCard.vue'
import MButton from '@/components/ui/MButton.vue'

const ranges = ['7D', '30D', '90D', '1Y']
const range = ref('30D')

const topMetrics = [
  { label: 'Total AI Calls', value: '142.8K', change: '+18.2%', up: true, highlight: true },
  { label: 'Avg Latency', value: '48ms', change: '-12ms', up: true },
  { label: 'Success Rate', value: '99.2%', change: '+0.4%', up: true },
  { label: 'Active Users', value: '3,241', change: '+8.1%', up: true },
]

const toolPerf = [
  { emoji: '✍️', name: 'Content Generator', rate: 94 },
  { emoji: '💬', name: 'Support Assistant', rate: 98 },
  { emoji: '📊', name: 'Data Analyst', rate: 87 },
]
</script>
