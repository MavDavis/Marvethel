<template>
  <div class="pt-20">
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide max-w-4xl">
        <MBadge variant="accent" class="mb-6">Digital Marketing</MBadge>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Grow faster with strategy<br />backed by real data
        </h1>
        <p class="text-gray-500 dark:text-white/50 text-xl leading-relaxed max-w-2xl mb-10">
          From SEO and paid media to content, social, and brand — we build and run marketing systems that compound over time, not just campaigns that spike and disappear.
        </p>
        <div class="flex gap-4">
          <RouterLink to="/contact"><MButton size="lg">Get a Free Audit</MButton></RouterLink>
          <RouterLink to="/case-studies"><MButton variant="outline" size="lg">See Results</MButton></RouterLink>
        </div>
      </div>
    </section>

    <!-- Services grid -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black">
      <div class="container-wide">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="service in services" :key="service.title"
            class="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-7 hover:border-gray-300 dark:hover:border-white/20 transition-all">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-xl"
              style="background:rgba(214,255,1,0.08)">
              {{ service.emoji }}
            </div>
            <h3 class="font-display font-semibold text-gray-900 dark:text-white text-lg mb-2">{{ service.title }}</h3>
            <p class="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-4">{{ service.description }}</p>
            <ul class="flex flex-col gap-1.5">
              <li v-for="point in service.points" :key="point" class="flex items-center gap-2 text-xs text-gray-400 dark:text-white/40">
                <svg class="w-3.5 h-3.5 text-lime-600 dark:text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Results strip -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="font-display text-4xl font-bold text-lime-600 dark:text-accent mb-2">{{ stat.value }}</div>
            <div class="text-gray-500 dark:text-white/50 text-sm">{{ stat.label }}</div>
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
import MButton from '@/components/ui/MButton.vue'
import CtaSection from '@/components/marketing/CtaSection.vue'

const services = [
  { emoji: '🔍', title: 'SEO & Organic Growth', description: 'Technical SEO, keyword strategy, and content that ranks — built to grow your organic traffic month over month.', points: ['Technical SEO audit & fixes', 'Keyword & competitor research', 'On-page & content optimisation', 'Link building strategy'] },
  { emoji: '📈', title: 'Paid Media', description: 'Performance campaigns across Google, Meta, LinkedIn, and beyond — managed for ROAS, not vanity metrics.', points: ['Google Search & Shopping ads', 'Meta & Instagram campaigns', 'LinkedIn B2B advertising', 'Retargeting & funnel optimisation'] },
  { emoji: '✍️', title: 'Content & Social', description: 'Content that attracts the right audience and social strategy that builds community and drives conversions.', points: ['Content calendar & production', 'Blog, long-form & thought leadership', 'Social media management', 'Email marketing & newsletters'] },
  { emoji: '🎯', title: 'Brand Strategy', description: 'Positioning, messaging, and visual identity that makes your brand instantly recognisable and worth choosing.', points: ['Brand audit & positioning', 'Messaging framework', 'Visual identity direction', 'Brand guidelines'] },
  { emoji: '📊', title: 'Growth Analytics', description: 'Full-funnel tracking, attribution, and reporting — so you know exactly what\'s driving growth and what to cut.', points: ['GA4 & conversion tracking setup', 'Custom dashboards & reports', 'A/B testing & CRO', 'Monthly performance reviews'] },
  { emoji: '🤖', title: 'AI-Powered Marketing', description: 'Use our AI tools to automate personalisation, content generation, and campaign optimisation at scale.', points: ['AI content generation', 'Automated email personalisation', 'Predictive audience targeting', 'AI campaign reporting'] },
]

const stats = [
  { value: '312%', label: 'Average ROI for paid campaigns' },
  { value: '8.4x', label: 'Organic traffic growth (12 months)' },
  { value: '50+', label: 'Brands grown' },
  { value: '< 30d', label: 'Time to first results' },
]
</script>
