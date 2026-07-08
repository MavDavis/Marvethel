<template>
  <section id="features" class="bg-white dark:bg-black section-padding">
    <div class="container-wide">
      <!-- Section header -->
      <div class="max-w-2xl mb-16 md:mb-20">
        <MBadge variant="accent" class="mb-4">Platform Capabilities</MBadge>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          Everything your AI product<br />needs in one place
        </h2>
        <p class="text-gray-500 dark:text-white/50 text-lg leading-relaxed">
          From building AI tools to automating growth workflows — Marvethel gives your team the infrastructure to move fast without breaking things.
        </p>
      </div>

      <!-- Feature cards grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          class="group rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-7 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-all duration-300"
          :class="i === 0 ? 'md:col-span-2 lg:col-span-1' : ''"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
            :style="{ background: feature.iconBg }">
            <component :is="feature.icon" class="w-6 h-6" :class="feature.iconColor" />
          </div>
          <h3 class="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3">{{ feature.title }}</h3>
          <p class="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-6">{{ feature.description }}</p>
          <!-- Sub-points -->
          <ul class="flex flex-col gap-2">
            <li v-for="point in feature.points" :key="point" class="flex items-center gap-2.5 text-sm text-gray-500 dark:text-white/60">
              <svg class="w-4 h-4 text-lime-600 dark:text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Secondary feature strip -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden bg-gray-200 dark:bg-white/10">
        <div
          v-for="strip in stripFeatures"
          :key="strip.label"
          class="flex items-center gap-4 p-6 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors duration-200"
        >
          <div class="w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0">
            <component :is="strip.icon" class="w-5 h-5 text-lime-600 dark:text-accent" />
          </div>
          <div>
            <div class="font-display font-semibold text-sm text-gray-900 dark:text-white">{{ strip.label }}</div>
            <div class="text-gray-400 dark:text-white/40 text-xs mt-0.5">{{ strip.sub }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MBadge from '@/components/ui/MBadge.vue'

const BrainIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/><path stroke-linecap="round" stroke-linejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg>` }
const PlugIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>` }
const ChartIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm9.75-9.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V3.375zm-4.5 7.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9a1.125 1.125 0 01-1.125 1.125h-2.25A1.125 1.125 0 018.25 19.875v-9z"/></svg>` }
const LockIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>` }
const BoltIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>` }
const CodeIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>` }
const UsersIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>` }

const features = [
  {
    title: 'AI Tool Builder',
    description: 'Design, test, and deploy custom AI tools without writing infrastructure. Define prompts, select models, and ship AI features directly from the builder.',
    icon: BrainIcon,
    iconBg: 'rgba(214,255,1,0.08)',
    iconColor: 'text-lime-600 dark:text-accent',
    points: ['Prompt engineering interface', 'Multi-model support (GPT-4, Claude, Gemini)', 'One-click deploy to production'],
  },
  {
    title: 'AI Integrations',
    description: 'Connect your existing stack — CMS, databases, marketing tools, and APIs — and let Marvethel orchestrate AI workflows across them automatically.',
    icon: PlugIcon,
    iconBg: 'rgba(0,0,0,0.04)',
    iconColor: 'text-gray-600 dark:text-white',
    points: ['50+ native integrations', 'REST & webhook triggers', 'No-code automation flows'],
  },
  {
    title: 'Growth Analytics',
    description: 'Track AI feature performance, user adoption, and product growth metrics. Get AI-generated insights that actually tell you what to do next.',
    icon: ChartIcon,
    iconBg: 'rgba(0,0,0,0.04)',
    iconColor: 'text-gray-600 dark:text-white',
    points: ['Real-time dashboards', 'AI insight recommendations', 'Custom metric tracking'],
  },
]

const stripFeatures = [
  { label: 'Enterprise Security', sub: 'SOC 2 Type II', icon: LockIcon },
  { label: 'Edge Performance', sub: '< 50ms latency', icon: BoltIcon },
  { label: 'Developer API', sub: 'REST & GraphQL', icon: CodeIcon },
  { label: 'Team Collaboration', sub: 'Roles & permissions', icon: UsersIcon },
]
</script>
