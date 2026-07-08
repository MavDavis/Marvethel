<template>
  <section class="bg-white dark:bg-black section-padding border-t border-gray-200 dark:border-white/10">
    <div class="container-wide">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <MBadge variant="accent" class="mb-4">Case Studies</MBadge>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Real results.<br />Real teams.
          </h2>
        </div>
        <RouterLink to="/case-studies">
          <MButton variant="outline">View all case studies</MButton>
        </RouterLink>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="study in caseStudies"
          :key="study.company"
          class="group rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 flex flex-col"
        >
          <!-- Case study photo -->
          <div class="relative h-48 overflow-hidden bg-gray-200 dark:bg-black">
            <img
              :src="study.image"
              :alt="study.company + ' case study'"
              class="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div class="absolute top-4 left-4">
              <MBadge variant="default">{{ study.category }}</MBadge>
            </div>
          </div>

          <div class="p-7 flex flex-col flex-1">
            <!-- Company -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                <span class="font-display font-bold text-sm text-gray-700 dark:text-white">{{ study.company[0] }}</span>
              </div>
              <div>
                <div class="font-display font-semibold text-gray-900 dark:text-white text-sm">{{ study.company }}</div>
                <div class="text-gray-400 dark:text-white/40 text-xs">{{ study.industry }}</div>
              </div>
            </div>

            <h3 class="font-display font-semibold text-gray-900 dark:text-white text-lg mb-3 leading-snug flex-1">
              {{ study.headline }}
            </h3>

            <!-- Metrics strip -->
            <div class="flex gap-4 py-4 border-t border-gray-200 dark:border-white/10">
              <div v-for="metric in study.metrics" :key="metric.label">
                <div class="font-display font-bold text-lime-600 dark:text-accent text-xl">{{ metric.value }}</div>
                <div class="text-gray-400 dark:text-white/40 text-xs">{{ metric.label }}</div>
              </div>
            </div>

            <!-- CTA -->
            <RouterLink to="/case-studies" class="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors font-medium mt-2">
              Read case study
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </RouterLink>
          </div>
        </article>
      </div>

      <!-- Trust logos -->
      <div class="mt-16 pt-12 border-t border-gray-200 dark:border-white/10">
        <p class="text-center text-gray-400 dark:text-white/30 text-sm mb-8 font-medium tracking-wider uppercase">Trusted by teams at</p>
        <div class="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          <div v-for="logo in trustLogos" :key="logo"
            class="font-display font-bold text-gray-200 dark:text-white/20 text-lg md:text-xl tracking-wide hover:text-gray-400 dark:hover:text-white/40 transition-colors cursor-default select-none">
            {{ logo }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MBadge from '@/components/ui/MBadge.vue'
import MButton from '@/components/ui/MButton.vue'

const caseStudies = [
  {
    company: 'Orbix',
    industry: 'B2B SaaS',
    category: 'AI Automation',
    image: '/images/case-orbix.jpg',
    headline: 'How Orbix automated 80% of their customer onboarding with AI — without hiring a single engineer',
    metrics: [
      { value: '80%', label: 'Onboarding automated' },
      { value: '3.1x', label: 'Activation rate' },
    ]
  },
  {
    company: 'Tessera',
    industry: 'E-commerce',
    category: 'Growth Analytics',
    image: '/images/case-tessera.jpg',
    headline: 'Tessera grew GMV by $2.4M in 90 days using Marvethel\'s AI-powered personalization engine',
    metrics: [
      { value: '$2.4M', label: 'GMV uplift' },
      { value: '90 days', label: 'Time to result' },
    ]
  },
  {
    company: 'Vaultline',
    industry: 'Fintech',
    category: 'AI Integration',
    image: '/images/case-vaultline.jpg',
    headline: 'Vaultline cut support ticket volume by 62% by deploying Marvethel AI across their product',
    metrics: [
      { value: '62%', label: 'Ticket reduction' },
      { value: '4.8/5', label: 'CSAT score' },
    ]
  },
]

const trustLogos = ['Orbix', 'Tessera', 'Vaultline', 'Nexloom', 'Arcade', 'Phenix']
</script>
