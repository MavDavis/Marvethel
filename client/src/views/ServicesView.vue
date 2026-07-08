<template>
  <div class="pt-20">
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide max-w-4xl">
        <MBadge variant="accent" class="mb-6">Services</MBadge>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">Services & Support</h1>
        <p class="text-gray-500 dark:text-white/50 text-xl leading-relaxed max-w-2xl mb-12">
          From self-serve to fully managed deployments — we meet you where you are.
        </p>
        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="tier in tiers" :key="tier.name"
            class="rounded-2xl border p-7 flex flex-col gap-4"
            :class="tier.featured ? 'border-accent/30 bg-lime-50 dark:bg-accent/5' : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02]'">
            <div>
              <MBadge v-if="tier.featured" variant="accent" class="mb-3">Most popular</MBadge>
              <h3 class="font-display text-xl font-bold text-gray-900 dark:text-white">{{ tier.name }}</h3>
              <div class="font-display text-3xl font-bold mt-2" :class="tier.featured ? 'text-lime-600 dark:text-accent' : 'text-gray-900 dark:text-white'">
                {{ tier.price }}<span class="text-gray-400 dark:text-white/40 text-base font-normal">/mo</span>
              </div>
            </div>
            <ul class="flex flex-col gap-2 flex-1">
              <li v-for="feat in tier.features" :key="feat" class="flex items-center gap-2 text-sm text-gray-500 dark:text-white/60">
                <svg class="w-4 h-4 text-lime-600 dark:text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ feat }}
              </li>
            </ul>
            <RouterLink :to="tier.name === 'Enterprise' ? '/contact' : '/auth/signup'">
              <MButton :variant="tier.featured ? 'primary' : 'outline'" class="w-full">{{ tier.cta }}</MButton>
            </RouterLink>
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

const tiers = [
  { name: 'Free', price: '$0', featured: false, cta: 'Get started', features: ['5 AI tools', '10,000 API calls/mo', '3 automations', 'Community support'] },
  { name: 'Pro', price: '$49', featured: true, cta: 'Start free trial', features: ['10 AI tools', '200,000 API calls/mo', '25 automations', 'Priority support', 'Advanced analytics'] },
  { name: 'Enterprise', price: 'Custom', featured: false, cta: 'Talk to sales', features: ['Unlimited AI tools', 'Unlimited API calls', 'Custom SLA', 'Dedicated CSM', 'SSO & compliance'] },
]
</script>
