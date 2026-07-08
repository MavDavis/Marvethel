<template>
  <div class="pt-20 section-padding">
    <div class="container-wide max-w-4xl">
      <MBadge variant="accent" class="mb-6">Resources</MBadge>
      <h1 class="font-display text-5xl font-bold text-gray-900 dark:text-white mb-4">Learn &amp; build faster</h1>
      <p class="text-gray-500 dark:text-white/50 text-xl mb-12">Docs, guides, and tutorials to help you get the most out of Marvethel.</p>
      <div class="grid md:grid-cols-3 gap-5">
        <div v-for="resource in resources" :key="resource.title"
          class="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all cursor-pointer">
          <div class="text-3xl mb-4">{{ resource.emoji }}</div>
          <h3 class="font-display font-semibold text-gray-900 dark:text-white mb-2">{{ resource.title }}</h3>
          <p class="text-gray-400 dark:text-white/40 text-sm">{{ resource.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MBadge from '@/components/ui/MBadge.vue'

const resources = [
  { emoji: '📖', title: 'Documentation', description: 'Full API reference, guides, and integration docs' },
  { emoji: '🎓', title: 'Tutorials', description: 'Step-by-step walkthroughs for building AI features' },
  { emoji: '📰', title: 'Blog', description: 'AI product strategy, case studies, and engineering posts' },
  { emoji: '🎙️', title: 'Webinars', description: 'Live and recorded sessions with product and AI experts' },
  { emoji: '💬', title: 'Community', description: 'Connect with other builders using Marvethel' },
  { emoji: '🔧', title: 'Changelog', description: 'What\'s new — every update, every week' },
]
</script>
