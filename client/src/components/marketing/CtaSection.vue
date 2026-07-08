<template>
  <section class="bg-gray-50 dark:bg-black section-padding border-t border-gray-200 dark:border-white/10 relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
        style="background: radial-gradient(ellipse, rgba(214,255,1,0.07) 0%, transparent 70%)" />
    </div>

    <div class="container-wide relative z-10 text-center max-w-3xl mx-auto">
      <MBadge variant="accent" class="mb-6">Ready to build?</MBadge>
      <h2 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
        Start building the<br />products of tomorrow
      </h2>
      <p class="text-gray-500 dark:text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
        Join 500+ product teams already using Marvethel to build AI features, automate workflows, and grow faster.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <RouterLink to="/auth/signup">
          <MButton size="lg" class="min-w-[200px]">Get Started for Free</MButton>
        </RouterLink>
        <RouterLink to="/contact">
          <MButton variant="outline" size="lg" class="min-w-[200px]">Talk to Sales</MButton>
        </RouterLink>
      </div>

      <p class="text-gray-400 dark:text-white/30 text-sm">
        No credit card required &nbsp;·&nbsp; Free plan available &nbsp;·&nbsp; 14-day pro trial
      </p>

      <!-- Features list -->
      <div class="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12">
        <div v-for="feat in included" :key="feat" class="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50">
          <svg class="w-4 h-4 text-lime-600 dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          {{ feat }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MButton from '@/components/ui/MButton.vue'
import MBadge from '@/components/ui/MBadge.vue'

const included = [
  'AI Tool Builder',
  '5 integrations',
  '10,000 API calls/mo',
  'Analytics dashboard',
  'Community support',
]
</script>
