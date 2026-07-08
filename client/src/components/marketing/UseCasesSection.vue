<template>
  <section class="bg-gray-50 dark:bg-black section-padding border-t border-gray-200 dark:border-white/10">
    <div class="container-wide">
      <div class="flex flex-col lg:flex-row gap-16 items-start">

        <!-- Left: Heading + tabs -->
        <div class="lg:w-96 flex-shrink-0">
          <MBadge variant="accent" class="mb-4">Use Cases</MBadge>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
            Built for<br />teams that<br />move fast
          </h2>
          <div class="flex flex-row lg:flex-col gap-2">
            <button
              v-for="(tab, i) in tabs"
              :key="tab.label"
              @click="activeTab = i"
              class="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 font-medium text-sm"
              :class="activeTab === i
                ? 'bg-accent text-black'
                : 'text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'"
            >
              <component :is="tab.icon" class="w-4 h-4 flex-shrink-0" />
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Right: Active case panel -->
        <Transition name="fade" mode="out-in">
          <div :key="activeTab" class="flex-1">
            <div class="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8 md:p-10">
              <!-- Case header -->
              <div class="flex items-start justify-between mb-8">
                <div>
                  <h3 class="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {{ tabs[activeTab].case.title }}
                  </h3>
                  <p class="text-gray-500 dark:text-white/50 leading-relaxed">
                    {{ tabs[activeTab].case.description }}
                  </p>
                </div>
                <div class="flex-shrink-0 ml-6 w-12 h-12 rounded-xl flex items-center justify-center"
                  style="background: rgba(214,255,1,0.08)">
                  <component :is="tabs[activeTab].icon" class="w-6 h-6 text-lime-600 dark:text-accent" />
                </div>
              </div>

              <!-- Metrics -->
              <div class="grid grid-cols-3 gap-4 mb-8">
                <div v-for="metric in tabs[activeTab].case.metrics" :key="metric.label"
                  class="rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4">
                  <div class="font-display text-2xl font-bold text-lime-600 dark:text-accent mb-1">{{ metric.value }}</div>
                  <div class="text-gray-400 dark:text-white/40 text-xs">{{ metric.label }}</div>
                </div>
              </div>

              <!-- Steps -->
              <div class="flex flex-col gap-3">
                <div v-for="(step, i) in tabs[activeTab].case.steps" :key="step"
                  class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <div class="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <span class="text-lime-700 dark:text-accent text-xs font-display font-bold">{{ i + 1 }}</span>
                  </div>
                  <span class="text-gray-600 dark:text-white/70 text-sm">{{ step }}</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import MBadge from '@/components/ui/MBadge.vue'

const RocketIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>` }
const CloudIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/></svg>` }
const BuildingIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/></svg>` }

const tabs = [
  {
    label: 'Startups',
    icon: RocketIcon,
    case: {
      title: 'Launch AI features before your competitors',
      description: 'Early-stage teams use Marvethel to ship AI-powered features in days instead of months — no ML team required. Go from idea to production with our visual AI builder.',
      metrics: [
        { value: '8x', label: 'Faster feature delivery' },
        { value: '$0', label: 'Infrastructure cost to start' },
        { value: '3 days', label: 'Avg. time to first AI feature' },
      ],
      steps: [
        'Create your AI tool in the visual builder',
        'Test with real data using the built-in playground',
        'Deploy and track performance from Day 1',
      ]
    }
  },
  {
    label: 'SaaS Products',
    icon: CloudIcon,
    case: {
      title: 'Embed AI deeply into your product',
      description: 'SaaS teams embed Marvethel\'s AI capabilities into their core product loops — personalization engines, smart automation, and contextual recommendations.',
      metrics: [
        { value: '+47%', label: 'User retention uplift' },
        { value: '10M+', label: 'Monthly AI interactions' },
        { value: '< 50ms', label: 'Inference latency' },
      ],
      steps: [
        'Connect your product data via REST API or webhooks',
        'Configure AI automation rules and triggers',
        'Monitor AI performance with built-in analytics',
      ]
    }
  },
  {
    label: 'Digital Businesses',
    icon: BuildingIcon,
    case: {
      title: 'Automate growth at every touchpoint',
      description: 'Digital businesses use Marvethel to automate content, personalization, and customer workflows — freeing up teams to focus on strategy over execution.',
      metrics: [
        { value: '60%', label: 'Reduction in manual work' },
        { value: '3.2x', label: 'Growth in conversion rate' },
        { value: '24/7', label: 'AI-powered operations' },
      ],
      steps: [
        'Map your growth workflows to AI automation triggers',
        'Integrate with your CRM, CMS, and marketing stack',
        'Let AI optimize and iterate based on performance data',
      ]
    }
  },
]

const activeTab = ref(0)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from { opacity: 0; transform: translateY(8px); }
.fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
