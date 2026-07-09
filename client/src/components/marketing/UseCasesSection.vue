<template>
  <section class="bg-gray-50 dark:bg-black section-padding border-t border-gray-200 dark:border-white/10">
    <div class="container-wide">
      <div class="flex flex-col lg:flex-row gap-16 items-start">

        <!-- Left: Heading + tabs -->
        <div class="lg:w-96 flex-shrink-0">
          <MBadge variant="accent" class="mb-4">Use Cases</MBadge>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
            Built for<br />ambitious<br />businesses
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
              <div class="flex items-start justify-between mb-8">
                <div>
                  <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-medium mb-3"
                    :class="tabs[activeTab].pillBg">
                    {{ tabs[activeTab].pill }}
                  </div>
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

const MegaphoneIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/></svg>` }
const CodeIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>` }
const BrainIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>` }

const tabs = [
  {
    label: 'E-commerce Brands',
    pill: 'Marketing + Web',
    pillBg: 'bg-lime-100 dark:bg-accent/10 text-lime-700 dark:text-accent',
    icon: MegaphoneIcon,
    case: {
      title: 'Double your store revenue without doubling your ad spend',
      description: 'We rebuild the full acquisition funnel — better site performance, sharper paid campaigns, and automated email flows that recover lost revenue automatically.',
      metrics: [
        { value: '3.2x', label: 'ROAS on paid campaigns' },
        { value: '+68%', label: 'Organic traffic growth' },
        { value: '23%', label: 'Cart abandonment recovered' },
      ],
      steps: [
        'Audit site speed, UX, and conversion bottlenecks',
        'Rebuild paid campaigns with tighter targeting and creative',
        'Set up SEO content engine and automated email flows',
      ]
    }
  },
  {
    label: 'SaaS Products',
    pill: 'AI + Web Dev',
    pillBg: 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/60',
    icon: BrainIcon,
    case: {
      title: 'Ship AI features your users actually want to use',
      description: 'SaaS teams use Marvethel to embed AI into their core product — personalisation engines, smart automation, and contextual insights — without hiring an ML team.',
      metrics: [
        { value: '+47%', label: 'User retention uplift' },
        { value: '8x', label: 'Faster AI feature delivery' },
        { value: '< 50ms', label: 'Inference latency' },
      ],
      steps: [
        'Map which product moments AI can improve most',
        'Build and test AI tools in the visual builder',
        'Deploy to production and track adoption in analytics',
      ]
    }
  },
  {
    label: 'Service Businesses',
    pill: 'Marketing + Web',
    pillBg: 'bg-lime-100 dark:bg-accent/10 text-lime-700 dark:text-accent',
    icon: CodeIcon,
    case: {
      title: 'Build a website that generates leads while you sleep',
      description: 'Professional services firms — agencies, consultancies, law firms — use us to build credibility online and fill their pipeline with inbound enquiries.',
      metrics: [
        { value: '5.4x', label: 'Increase in inbound leads' },
        { value: '#1', label: 'Google ranking for key terms' },
        { value: '2 wks', label: 'Avg time to launch' },
      ],
      steps: [
        'Design and build a high-converting website',
        'Set up local SEO and Google Business profile',
        'Launch lead capture funnels and review automation',
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
