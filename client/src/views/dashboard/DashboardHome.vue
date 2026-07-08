<template>
  <div class="p-6 md:p-8 max-w-[1400px] mx-auto">
    <!-- Page header -->
    <div class="flex items-start justify-between mb-8">
      <div>
        <h1 class="font-display text-2xl font-bold text-gray-900 dark:text-white mb-1">
          Good {{ timeOfDay }}, {{ auth.user?.name?.split(' ')[0] || 'there' }} 👋
        </h1>
        <p class="text-gray-400 dark:text-white/40 text-sm">Here's what's happening with your AI products today.</p>
      </div>
      <MBadge variant="success" dot>Live</MBadge>
    </div>

    <!-- Stats grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatsCard
        v-for="stat in stats"
        :key="stat.label"
        v-bind="stat"
      />
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <!-- Main area -->
      <div class="lg:col-span-2 flex flex-col gap-6">

        <!-- Chart card -->
        <MCard padding="lg">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="font-display font-semibold text-gray-900 dark:text-white">AI Calls Over Time</h2>
              <p class="text-gray-400 dark:text-white/40 text-xs mt-0.5">Last 30 days</p>
            </div>
            <div class="flex gap-2">
              <button v-for="range in ['7d', '30d', '90d']" :key="range"
                @click="chartRange = range"
                class="px-3 py-1 rounded-lg text-xs font-medium transition-all"
                :class="chartRange === range
                  ? 'bg-lime-100 dark:bg-accent/10 text-lime-700 dark:text-accent border border-lime-200 dark:border-accent/20'
                  : 'text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white'">
                {{ range }}
              </button>
            </div>
          </div>
          <!-- Chart -->
          <div class="relative">
            <svg viewBox="0 0 600 160" class="w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#D6FF01" stop-opacity="0.2" />
                  <stop offset="100%" stop-color="#D6FF01" stop-opacity="0" />
                </linearGradient>
              </defs>
              <!-- Grid lines -->
              <line v-for="i in 4" :key="i" :x1="0" :y1="i * 40" :x2="600" :y2="i * 40"
                stroke="currentColor" stroke-width="1" class="text-black/5 dark:text-white/5" />
              <!-- Area -->
              <path :d="areaPath" fill="url(#areaGrad)" />
              <!-- Line -->
              <path :d="linePath" stroke="#D6FF01" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round" />
              <!-- Data points -->
              <circle v-for="(pt, i) in chartPoints" :key="i"
                :cx="pt.x" :cy="pt.y" r="3.5"
                fill="#D6FF01" class="opacity-0 hover:opacity-100 transition-opacity" />
            </svg>
            <!-- Y axis labels -->
            <div class="absolute top-0 right-0 flex flex-col justify-between h-full text-right pr-1">
              <span v-for="label in ['140k', '105k', '70k', '35k', '0']" :key="label"
                class="text-[10px] text-gray-300 dark:text-white/20">{{ label }}</span>
            </div>
          </div>
        </MCard>

        <!-- Recent activity -->
        <MCard padding="none">
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10">
            <h2 class="font-display font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
            <RouterLink to="/dashboard/analytics" class="text-xs text-gray-400 dark:text-white/40 hover:text-lime-600 dark:hover:text-accent transition-colors">View all</RouterLink>
          </div>
          <div class="divide-y divide-gray-100 dark:divide-white/5">
            <div v-for="event in recentActivity" :key="event.id"
              class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-white/10"
                :style="{ background: event.iconBg }">
                <component :is="event.icon" class="w-4 h-4" :class="event.iconColor" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-900 dark:text-white font-medium truncate">{{ event.title }}</p>
                <p class="text-xs text-gray-400 dark:text-white/40">{{ event.time }}</p>
              </div>
              <MBadge :variant="event.badgeVariant">{{ event.badge }}</MBadge>
            </div>
          </div>
        </MCard>

        <!-- Quick actions -->
        <div class="grid sm:grid-cols-3 gap-4">
          <RouterLink v-for="action in quickActions" :key="action.label" :to="action.to"
            class="group flex flex-col gap-3 p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-all">
            <div class="w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center"
              style="background: rgba(214,255,1,0.06)">
              <component :is="action.icon" class="w-5 h-5 text-lime-600 dark:text-accent" />
            </div>
            <div>
              <div class="font-display font-semibold text-gray-900 dark:text-white text-sm">{{ action.label }}</div>
              <div class="text-gray-400 dark:text-white/40 text-xs mt-0.5">{{ action.sub }}</div>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- Right panel -->
      <div class="flex flex-col gap-6">
        <!-- AI Insight card -->
        <div class="rounded-2xl border border-accent/20 bg-lime-50 dark:bg-accent/5 p-5">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-6 h-6 rounded-md bg-accent/20 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-lime-700 dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zm4.657 2.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm3 6v-1h4v1a2 2 0 11-4 0zm4-2a4 4 0 10-4 0h4z"/>
              </svg>
            </div>
            <span class="text-lime-700 dark:text-accent text-xs font-display font-semibold uppercase tracking-wide">AI Insight</span>
          </div>
          <p class="text-gray-700 dark:text-white text-sm leading-relaxed mb-4">
            Your <span class="text-lime-600 dark:text-accent font-medium">Content Generator</span> tool has a 94% satisfaction score — 12% above average. Consider deploying it to more touchpoints.
          </p>
          <MButton variant="outline" size="sm" class="w-full">
            View recommendation
          </MButton>
        </div>

        <!-- Active tools -->
        <MCard padding="none">
          <div class="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-white/10">
            <h3 class="font-display font-semibold text-gray-900 dark:text-white text-sm">Active AI Tools</h3>
            <RouterLink to="/dashboard/ai-tools" class="text-xs text-gray-400 dark:text-white/40 hover:text-lime-600 dark:hover:text-accent transition-colors">Manage</RouterLink>
          </div>
          <div class="divide-y divide-gray-100 dark:divide-white/5">
            <div v-for="tool in activeTools" :key="tool.name"
              class="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 bg-gray-100 dark:bg-white/5">
                {{ tool.emoji }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-gray-900 dark:text-white text-xs font-medium truncate">{{ tool.name }}</div>
                <div class="text-gray-400 dark:text-white/30 text-xs">{{ tool.calls }} calls today</div>
              </div>
              <div class="w-2 h-2 rounded-full" :class="tool.active ? 'bg-green-400' : 'bg-gray-300 dark:bg-white/20'" />
            </div>
          </div>
        </MCard>

        <!-- Usage meter -->
        <MCard padding="md">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-display font-semibold text-gray-900 dark:text-white text-sm">Monthly Usage</h3>
            <MBadge variant="accent">Pro</MBadge>
          </div>
          <div class="flex flex-col gap-3">
            <div v-for="usage in usageMetrics" :key="usage.label">
              <div class="flex justify-between text-xs mb-1.5">
                <span class="text-gray-500 dark:text-white/60">{{ usage.label }}</span>
                <span class="text-gray-700 dark:text-white/80 font-medium">{{ usage.used }} / {{ usage.total }}</span>
              </div>
              <div class="h-1.5 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                <div class="h-full rounded-full transition-all duration-500"
                  :class="usage.pct > 80 ? 'bg-yellow-400' : 'bg-accent'"
                  :style="{ width: usage.pct + '%' }" />
              </div>
            </div>
          </div>
        </MCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import MCard from '@/components/ui/MCard.vue'
import MBadge from '@/components/ui/MBadge.vue'
import MButton from '@/components/ui/MButton.vue'
import StatsCard from '@/components/dashboard/StatsCard.vue'

const auth = useAuthStore()
const chartRange = ref('30d')

const hour = new Date().getHours()
const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'

const BrainIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>` }
const BoltIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>` }
const ChartIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm9.75-9.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V3.375zm-4.5 7.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9a1.125 1.125 0 01-1.125 1.125h-2.25A1.125 1.125 0 018.25 19.875v-9z"/></svg>` }
const PlugIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>` }
const FolderIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/></svg>` }

const stats = [
  { label: 'Total AI Calls', value: '142,840', change: '+18.2%', icon: BrainIcon, highlight: true },
  { label: 'Active Projects', value: '12', change: '+2', icon: FolderIcon },
  { label: 'Automations Run', value: '3,412', change: '+24.1%', icon: BoltIcon },
  { label: 'Avg. Response Time', value: '48ms', change: '-12ms', icon: ChartIcon },
]

const chartPoints = [
  {x: 0, y: 130}, {x: 60, y: 110}, {x: 120, y: 95}, {x: 180, y: 80},
  {x: 240, y: 90}, {x: 300, y: 60}, {x: 360, y: 50}, {x: 420, y: 35},
  {x: 480, y: 45}, {x: 540, y: 20}, {x: 600, y: 10}
]

const linePath = computed(() => {
  return chartPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ')
})

const areaPath = computed(() => {
  return linePath.value + ` L600 160 L0 160 Z`
})

const recentActivity = [
  { id: 1, title: 'Content Generator processed 840 requests', time: '2 min ago', icon: BrainIcon, iconBg: 'rgba(214,255,1,0.05)', iconColor: 'text-lime-600 dark:text-accent', badge: 'AI Tool', badgeVariant: 'accent' },
  { id: 2, title: 'Automation "Weekly Report" completed', time: '18 min ago', icon: BoltIcon, iconBg: 'rgba(0,0,0,0.03)', iconColor: 'text-gray-400 dark:text-white/50', badge: 'Success', badgeVariant: 'success' },
  { id: 3, title: 'Stripe integration connected', time: '1 hour ago', icon: PlugIcon, iconBg: 'rgba(0,0,0,0.03)', iconColor: 'text-gray-400 dark:text-white/50', badge: 'Integration', badgeVariant: 'default' },
  { id: 4, title: 'Support Assistant deployed to staging', time: '3 hours ago', icon: BrainIcon, iconBg: 'rgba(214,255,1,0.05)', iconColor: 'text-lime-600 dark:text-accent', badge: 'AI Tool', badgeVariant: 'accent' },
]

const quickActions = [
  { label: 'New AI Tool', sub: 'Build with AI Builder', to: '/dashboard/ai-tools', icon: BrainIcon },
  { label: 'New Automation', sub: 'Create a workflow', to: '/dashboard/automation', icon: BoltIcon },
  { label: 'Add Integration', sub: 'Connect your stack', to: '/dashboard/integrations', icon: PlugIcon },
]

const activeTools = [
  { emoji: '✍️', name: 'Content Generator', calls: '840', active: true },
  { emoji: '💬', name: 'Support Assistant', calls: '312', active: true },
  { emoji: '📊', name: 'Data Analyst', calls: '98', active: false },
]

const usageMetrics = [
  { label: 'API Calls', used: '142,840', total: '200,000', pct: 71 },
  { label: 'AI Tools', used: '3', total: '10', pct: 30 },
  { label: 'Automations', used: '7', total: '25', pct: 28 },
]
</script>
