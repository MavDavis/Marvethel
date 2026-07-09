<template>
  <section id="features" class="bg-white dark:bg-black section-padding">
    <div class="container-wide">
      <div class="max-w-2xl mb-16 md:mb-20">
        <MBadge variant="accent" class="mb-4">What We Do</MBadge>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          Three disciplines.<br />One focused team.
        </h2>
        <p class="text-gray-500 dark:text-white/50 text-lg leading-relaxed">
          Most agencies make you choose between marketing, design, and technology. Marvethel brings all three together — so your strategy, your site, and your AI tools are built to work as one.
        </p>
      </div>

      <!-- Three pillar cards -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <RouterLink
          v-for="pillar in pillars"
          :key="pillar.title"
          :to="pillar.to"
          class="group rounded-2xl border p-8 flex flex-col gap-5 hover:shadow-lg transition-all duration-300"
          :class="pillar.featured
            ? 'border-accent/30 bg-lime-50 dark:bg-accent/5 hover:border-accent/50'
            : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] hover:border-gray-300 dark:hover:border-white/20'"
        >
          <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
            :style="{ background: pillar.iconBg }">
            <component :is="pillar.icon" class="w-6 h-6" :class="pillar.iconColor" />
          </div>
          <div>
            <h3 class="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">{{ pillar.title }}</h3>
            <p class="text-gray-500 dark:text-white/50 text-sm leading-relaxed">{{ pillar.description }}</p>
          </div>
          <ul class="flex flex-col gap-2 flex-1">
            <li v-for="point in pillar.points" :key="point" class="flex items-center gap-2.5 text-sm text-gray-500 dark:text-white/60">
              <svg class="w-4 h-4 text-lime-600 dark:text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ point }}
            </li>
          </ul>
          <div class="flex items-center gap-1.5 text-sm font-medium mt-2"
            :class="pillar.featured ? 'text-lime-700 dark:text-accent' : 'text-gray-500 dark:text-white/50 group-hover:text-gray-900 dark:group-hover:text-white'">
            Learn more
            <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </RouterLink>
      </div>

      <!-- Bottom strip -->
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
import { RouterLink } from 'vue-router'
import MBadge from '@/components/ui/MBadge.vue'

const MegaphoneIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/></svg>` }
const CodeIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>` }
const BrainIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>` }
const LockIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>` }
const BoltIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>` }
const ChartIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm9.75-9.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V3.375zm-4.5 7.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9a1.125 1.125 0 01-1.125 1.125h-2.25A1.125 1.125 0 018.25 19.875v-9z"/></svg>` }
const UsersIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>` }

const pillars = [
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that grow your audience, strengthen your brand, and turn traffic into revenue.',
    to: '/services/digital-marketing',
    icon: MegaphoneIcon,
    iconBg: 'rgba(214,255,1,0.08)',
    iconColor: 'text-lime-600 dark:text-accent',
    featured: false,
    points: ['SEO & organic growth', 'Paid media (Meta, Google, LinkedIn)', 'Content strategy & social', 'Brand identity & positioning'],
  },
  {
    title: 'Web Development',
    description: 'Fast, beautiful, and conversion-optimised websites and web apps — built to perform and easy to manage.',
    to: '/services/web-development',
    icon: CodeIcon,
    iconBg: 'rgba(0,0,0,0.04)',
    iconColor: 'text-gray-600 dark:text-white',
    featured: false,
    points: ['Marketing websites & landing pages', 'Web app & SaaS UI development', 'E-commerce builds (Shopify, custom)', 'CMS setup & ongoing support'],
  },
  {
    title: 'AI Solutions',
    description: 'Ship AI-powered features into your product without a dedicated ML team — faster, cheaper, and production-ready.',
    to: '/services/ai-solutions',
    icon: BrainIcon,
    iconBg: 'rgba(214,255,1,0.08)',
    iconColor: 'text-lime-600 dark:text-accent',
    featured: true,
    points: ['Custom AI tool builder', 'Workflow automation', '50+ native integrations', 'Real-time analytics & insights'],
  },
]

const stripFeatures = [
  { label: 'Proven Track Record', sub: '50+ brands grown', icon: ChartIcon },
  { label: 'Fast Delivery', sub: '2–4 week turnarounds', icon: BoltIcon },
  { label: 'Dedicated Team', sub: 'One point of contact', icon: UsersIcon },
  { label: 'NDA & IP Protection', sub: 'Your work stays yours', icon: LockIcon },
]
</script>
