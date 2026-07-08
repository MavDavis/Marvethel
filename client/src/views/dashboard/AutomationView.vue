<template>
  <div class="p-6 md:p-8 max-w-[1400px] mx-auto">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Automation</h1>
        <p class="text-gray-400 dark:text-white/40 text-sm mt-1">Build AI-powered workflows and triggers</p>
      </div>
      <MButton>
        <template #icon><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg></template>
        New Workflow
      </MButton>
    </div>

    <div class="grid lg:grid-cols-3 gap-5">
      <div v-for="flow in workflows" :key="flow.id"
        class="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all">
        <div class="flex items-start justify-between mb-4">
          <div class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-base">
            {{ flow.emoji }}
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" :checked="flow.active" class="sr-only peer" />
            <div class="w-9 h-5 rounded-full bg-gray-200 dark:bg-white/10 peer peer-checked:bg-accent transition-all relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-4" />
          </label>
        </div>
        <h3 class="font-display font-semibold text-gray-900 dark:text-white mb-1">{{ flow.name }}</h3>
        <p class="text-gray-400 dark:text-white/40 text-xs mb-4">{{ flow.description }}</p>
        <div class="flex items-center gap-2 flex-wrap">
          <div v-for="step in flow.steps" :key="step" class="flex items-center gap-1">
            <span class="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 text-xs">{{ step }}</span>
            <svg v-if="flow.steps[flow.steps.length-1] !== step" class="w-3 h-3 text-gray-300 dark:text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-white/10 text-xs text-gray-400 dark:text-white/30">
          <span>{{ flow.runs }} runs total</span>
          <span>Last: {{ flow.lastRun }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MButton from '@/components/ui/MButton.vue'

const workflows = [
  { id: 1, emoji: '📊', name: 'Weekly Report Generator', description: 'Generates and emails AI-powered weekly product reports', active: true, steps: ['Schedule', 'Fetch Data', 'AI Summary', 'Email'], runs: 48, lastRun: '2h ago' },
  { id: 2, emoji: '💬', name: 'Support Ticket Router', description: 'AI categorizes and routes incoming support tickets', active: true, steps: ['Webhook', 'AI Classify', 'Route', 'Notify'], runs: 1240, lastRun: '5 min ago' },
  { id: 3, emoji: '📧', name: 'Lead Nurture Sequence', description: 'Personalized follow-up emails based on user behavior', active: false, steps: ['Trigger', 'AI Write', 'Schedule', 'Send'], runs: 310, lastRun: '3d ago' },
]
</script>
