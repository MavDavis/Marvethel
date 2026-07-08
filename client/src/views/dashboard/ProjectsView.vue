<template>
  <div class="p-6 md:p-8 max-w-[1400px] mx-auto">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
        <p class="text-gray-400 dark:text-white/40 text-sm mt-1">Manage your AI product workspaces</p>
      </div>
      <MButton>
        <template #icon><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></template>
        New Project
      </MButton>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="project in projects" :key="project.id"
        class="group rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-6 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all cursor-pointer">
        <div class="flex items-start justify-between mb-5">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            :style="{ background: project.color + '15', border: '1px solid ' + project.color + '30' }">
            {{ project.emoji }}
          </div>
          <MBadge :variant="project.status === 'Active' ? 'success' : 'default'" :dot="project.status === 'Active'">
            {{ project.status }}
          </MBadge>
        </div>
        <h3 class="font-display font-semibold text-gray-900 dark:text-white mb-1">{{ project.name }}</h3>
        <p class="text-gray-400 dark:text-white/40 text-xs mb-5 leading-relaxed">{{ project.description }}</p>
        <div class="flex items-center justify-between text-xs text-gray-400 dark:text-white/30">
          <span>{{ project.tools }} AI tools</span>
          <span>{{ project.updated }}</span>
        </div>
      </div>

      <!-- New project card -->
      <button class="rounded-2xl border border-dashed border-gray-200 dark:border-white/10 p-6 flex flex-col items-center justify-center gap-3 hover:border-accent/30 hover:bg-lime-50 dark:hover:bg-accent/5 transition-all group">
        <div class="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-accent/30 transition-colors">
          <svg class="w-5 h-5 text-gray-300 dark:text-white/30 group-hover:text-lime-600 dark:group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
        </div>
        <span class="text-gray-400 dark:text-white/30 group-hover:text-lime-600 dark:group-hover:text-accent text-sm font-medium transition-colors">New Project</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import MBadge from '@/components/ui/MBadge.vue'
import MButton from '@/components/ui/MButton.vue'

const projects = [
  { id: 1, emoji: '🚀', color: '#D6FF01', name: 'Main Product', description: 'Core AI features for the primary SaaS product', tools: 3, status: 'Active', updated: '2h ago' },
  { id: 2, emoji: '🛍️', color: '#60a5fa', name: 'E-commerce Bot', description: 'AI-powered product recommendations and support', tools: 2, status: 'Active', updated: '1d ago' },
  { id: 3, emoji: '📧', color: '#f472b6', name: 'Email Automation', description: 'Personalized outreach and follow-up sequences', tools: 1, status: 'Draft', updated: '3d ago' },
]
</script>
