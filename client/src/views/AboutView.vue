<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide max-w-4xl">
        <MBadge variant="accent" class="mb-6">About Marvethel</MBadge>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          The agency that doesn't<br />make you choose
        </h1>
        <p class="text-gray-500 dark:text-white/50 text-xl leading-relaxed max-w-2xl">
          Most agencies are either marketing-only, dev-only, or AI-hype-only. Marvethel was built because ambitious brands need all three working together — strategy, execution, and technology under one roof, with one team that understands the full picture.
        </p>
      </div>
    </section>

    <!-- What we do -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black">
      <div class="container-wide">
        <div class="grid md:grid-cols-3 gap-8">
          <RouterLink v-for="pillar in pillars" :key="pillar.title" :to="pillar.to"
            class="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-accent/30 hover:bg-white dark:hover:bg-white/5 transition-all">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style="background:rgba(214,255,1,0.08)">
              {{ pillar.emoji }}
            </div>
            <div>
              <h3 class="font-display font-semibold text-gray-900 dark:text-white text-lg mb-2">{{ pillar.title }}</h3>
              <p class="text-gray-500 dark:text-white/50 text-sm leading-relaxed">{{ pillar.description }}</p>
            </div>
            <span class="text-lime-600 dark:text-accent text-sm font-medium group-hover:underline">Learn more →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide max-w-4xl">
        <MBadge variant="accent" class="mb-6">How we work</MBadge>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title" class="flex flex-col gap-3">
            <div class="w-10 h-10 rounded-xl border border-accent/20 bg-lime-50 dark:bg-accent/5 flex items-center justify-center">
              <span class="text-lime-600 dark:text-accent text-lg">{{ value.emoji }}</span>
            </div>
            <h3 class="font-display font-semibold text-gray-900 dark:text-white text-lg">{{ value.title }}</h3>
            <p class="text-gray-500 dark:text-white/50 text-sm leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MBadge from '@/components/ui/MBadge.vue'
import CtaSection from '@/components/marketing/CtaSection.vue'

const pillars = [
  { emoji: '📣', title: 'Digital Marketing', description: 'SEO, paid media, content strategy, social, and brand — built to grow your audience and convert them into customers.', to: '/services/digital-marketing' },
  { emoji: '💻', title: 'Web Development', description: 'Fast, beautiful websites and web apps built for performance, accessibility, and conversion — not just aesthetics.', to: '/services/web-development' },
  { emoji: '🤖', title: 'AI Solutions', description: 'AI tools, automation workflows, and analytics that give your product a genuine edge without needing an ML team.', to: '/services/ai-solutions' },
]

const values = [
  { emoji: '⚡', title: 'Move fast', description: 'Speed is a competitive advantage. We run lean, iterate quickly, and ship work that performs from Day 1.' },
  { emoji: '🔗', title: 'Everything connected', description: 'We design marketing, development, and AI to work together — not as three separate projects handed off across agencies.' },
  { emoji: '📐', title: 'Built for builders', description: 'Every decision we make is grounded in what actually moves the needle for real businesses. No vanity deliverables.' },
]
</script>
