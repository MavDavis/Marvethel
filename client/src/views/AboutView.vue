<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide max-w-4xl">
        <MBadge variant="accent" class="mb-6">About Marvethel</MBadge>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Building the operating system<br />for AI product growth
        </h1>
        <p class="text-gray-500 dark:text-white/50 text-xl leading-relaxed max-w-2xl">
          Marvethel was founded on a simple belief: every product team should be able to build and deploy AI features without needing a dedicated ML team. We're building the infrastructure that makes that possible.
        </p>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide">
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
import MBadge from '@/components/ui/MBadge.vue'
import CtaSection from '@/components/marketing/CtaSection.vue'

const values = [
  { emoji: '⚡', title: 'Move fast', description: 'We ship constantly. Speed is a feature. Every decision we make optimizes for getting AI into products faster.' },
  { emoji: '🔑', title: 'Democratize AI', description: 'AI capabilities shouldn\'t require a $2M research budget. We make enterprise-grade AI accessible to any team.' },
  { emoji: '📐', title: 'Built for builders', description: 'Every feature we build comes from real conversations with founders and product teams. We dogfood everything.' },
]
</script>
