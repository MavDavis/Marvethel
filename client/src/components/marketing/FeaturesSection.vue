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
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 duration-300"
            :style="{ background: pillar.iconBg }">
            {{ pillar.emoji }}
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
          <div class="w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-lg">
            {{ strip.emoji }}
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

const pillars = [
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that grow your audience, strengthen your brand, and turn traffic into revenue.',
    to: '/services/digital-marketing',
    emoji: '📣',
    iconBg: 'rgba(214,255,1,0.08)',
    featured: false,
    points: ['SEO & organic growth', 'Paid media (Meta, Google, LinkedIn)', 'Content strategy & social', 'Brand identity & positioning'],
  },
  {
    title: 'Web Development',
    description: 'Fast, beautiful, and conversion-optimised websites and web apps — built to perform and easy to manage.',
    to: '/services/web-development',
    emoji: '💻',
    iconBg: 'rgba(0,0,0,0.04)',
    featured: false,
    points: ['Marketing websites & landing pages', 'Web app & SaaS UI development', 'E-commerce builds (Shopify, custom)', 'CMS setup & ongoing support'],
  },
  {
    title: 'AI Solutions',
    description: 'Ship AI-powered features into your product without a dedicated ML team — faster, cheaper, and production-ready.',
    to: '/services/ai-solutions',
    emoji: '🤖',
    iconBg: 'rgba(214,255,1,0.08)',
    featured: true,
    points: ['Custom AI tool builder', 'Workflow automation', '50+ native integrations', 'Real-time analytics & insights'],
  },
]

const stripFeatures = [
  { label: 'Proven Track Record', sub: '50+ brands grown', emoji: '📊' },
  { label: 'Fast Delivery', sub: '2–4 week turnarounds', emoji: '⚡' },
  { label: 'Dedicated Team', sub: 'One point of contact', emoji: '👥' },
  { label: 'NDA & IP Protection', sub: 'Your work stays yours', emoji: '🔒' },
]
</script>
