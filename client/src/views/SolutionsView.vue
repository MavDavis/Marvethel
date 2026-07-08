<template>
  <div class="pt-20">
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide max-w-4xl">
        <MBadge variant="accent" class="mb-6">AI Solutions</MBadge>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          AI infrastructure for every product layer
        </h1>
        <p class="text-gray-500 dark:text-white/50 text-xl leading-relaxed max-w-2xl">
          From AI feature development to intelligent automation — Marvethel provides the full stack for embedding AI into your product.
        </p>
      </div>
    </section>
    <FeaturesSection />
    <CtaSection />
  </div>
</template>

<script setup>
import MBadge from '@/components/ui/MBadge.vue'
import FeaturesSection from '@/components/marketing/FeaturesSection.vue'
import CtaSection from '@/components/marketing/CtaSection.vue'
</script>
