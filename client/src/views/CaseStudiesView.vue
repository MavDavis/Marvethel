<template>
  <div class="pt-20">
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide max-w-4xl mb-16">
        <MBadge variant="accent" class="mb-6">Case Studies</MBadge>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Real results from real teams
        </h1>
      </div>
      <CaseStudiesSection />
    </section>
    <CtaSection />
  </div>
</template>

<script setup>
import MBadge from '@/components/ui/MBadge.vue'
import CaseStudiesSection from '@/components/marketing/CaseStudiesSection.vue'
import CtaSection from '@/components/marketing/CtaSection.vue'
</script>
