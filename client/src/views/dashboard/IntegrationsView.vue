<template>
  <div class="p-6 md:p-8 max-w-[1400px] mx-auto">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Integrations</h1>
        <p class="text-gray-400 dark:text-white/40 text-sm mt-1">Connect your tools, APIs, and data sources</p>
      </div>
    </div>

    <div class="mb-8">
      <div class="flex gap-2 flex-wrap">
        <button v-for="cat in categories" :key="cat"
          @click="activeCategory = cat"
          class="px-4 py-1.5 rounded-xl text-sm font-medium border transition-all"
          :class="activeCategory === cat
            ? 'bg-lime-100 dark:bg-accent/10 text-lime-700 dark:text-accent border-lime-300 dark:border-accent/20'
            : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20'">
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div v-for="integration in filteredIntegrations" :key="integration.name"
        class="group rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-5 hover:border-gray-300 dark:hover:border-white/20 transition-all">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            :style="{ background: integration.color + '15' }">
            {{ integration.emoji }}
          </div>
          <div>
            <div class="font-display font-semibold text-gray-900 dark:text-white text-sm">{{ integration.name }}</div>
            <MBadge v-if="integration.connected" variant="success" dot class="mt-0.5">Connected</MBadge>
            <div v-else class="text-gray-400 dark:text-white/30 text-xs mt-0.5">{{ integration.category }}</div>
          </div>
        </div>
        <p class="text-gray-400 dark:text-white/40 text-xs mb-4">{{ integration.description }}</p>
        <MButton :variant="integration.connected ? 'outline' : 'primary'" size="sm" class="w-full">
          {{ integration.connected ? 'Manage' : 'Connect' }}
        </MButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MBadge from '@/components/ui/MBadge.vue'
import MButton from '@/components/ui/MButton.vue'

const categories = ['All', 'CRM', 'Analytics', 'Marketing', 'Database', 'Communication']
const activeCategory = ref('All')

const integrations = [
  { emoji: '🔷', name: 'Stripe', category: 'Payments', color: '#635bff', description: 'Connect billing and subscription data to your AI tools', connected: true },
  { emoji: '🟢', name: 'Slack', category: 'Communication', color: '#4a154b', description: 'Send AI-generated notifications and reports to Slack', connected: true },
  { emoji: '🔴', name: 'HubSpot', category: 'CRM', color: '#ff7a59', description: 'Sync contacts and automate CRM workflows with AI', connected: false },
  { emoji: '🔵', name: 'Notion', category: 'Database', color: '#000', description: 'Use Notion as a data source for AI tools', connected: false },
  { emoji: '🟣', name: 'Mixpanel', category: 'Analytics', color: '#7856ff', description: 'Feed product analytics into your AI growth models', connected: false },
  { emoji: '🟡', name: 'Mailchimp', category: 'Marketing', color: '#ffd84a', description: 'AI-powered email personalization and automation', connected: false },
  { emoji: '⚫', name: 'Airtable', category: 'Database', color: '#fcb400', description: 'Use Airtable as a dynamic data source', connected: false },
  { emoji: '🔶', name: 'Intercom', category: 'CRM', color: '#1f8ded', description: 'Power your support widget with AI', connected: false },
]

const filteredIntegrations = computed(() =>
  activeCategory.value === 'All'
    ? integrations
    : integrations.filter(i => i.category === activeCategory.value)
)
</script>
