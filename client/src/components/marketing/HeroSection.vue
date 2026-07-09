<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black">
    <!-- Background grid -->
    <div class="absolute inset-0 bg-grid-light dark:bg-grid opacity-100 pointer-events-none" />
    <!-- Radial glow -->
    <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
      style="background: radial-gradient(ellipse, rgba(214,255,1,0.06) 0%, transparent 70%)" />
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
      style="background: radial-gradient(ellipse at bottom right, rgba(214,255,1,0.04) 0%, transparent 70%)" />

    <div class="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 lg:pt-0 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

        <!-- Left: Copy -->
        <div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/5 text-xs text-gray-500 dark:text-white/60 font-medium mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Full-Service Digital Agency
          </div>

          <h1 class="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-gray-900 dark:text-white mb-6">
            Marketing, web<br />
            development &<br />
            <span class="text-lime-600 dark:text-accent">AI — one team.</span>
          </h1>

          <p class="text-gray-500 dark:text-white/50 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Marvethel combines digital marketing strategy, web & app development, and AI-powered growth tooling under one roof — so your brand moves faster than the competition.
          </p>

          <div class="flex flex-wrap gap-4 mb-14">
            <RouterLink to="/contact">
              <MButton size="lg">Work With Us</MButton>
            </RouterLink>
            <RouterLink to="/case-studies">
              <MButton variant="outline" size="lg">See Our Work</MButton>
            </RouterLink>
          </div>

          <!-- Three pillars -->
          <div class="flex flex-wrap gap-3">
            <RouterLink v-for="pillar in pillars" :key="pillar.to" :to="pillar.to"
              class="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/10 hover:border-accent/40 hover:bg-lime-50 dark:hover:bg-accent/5 transition-all group text-sm">
              <span class="text-base">{{ pillar.emoji }}</span>
              <span class="text-gray-600 dark:text-white/60 group-hover:text-lime-700 dark:group-hover:text-accent font-medium transition-colors">{{ pillar.label }}</span>
            </RouterLink>
          </div>
        </div>

        <!-- Right: Service cards mockup -->
        <div class="hidden lg:flex justify-center items-center">
          <div class="relative w-full max-w-[520px]">
            <div class="absolute inset-0 rounded-3xl blur-3xl opacity-20"
              style="background: radial-gradient(ellipse, rgba(214,255,1,0.3) 0%, transparent 70%)" />

            <div class="relative flex flex-col gap-4">
              <!-- Card 1: Digital Marketing -->
              <div class="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#080808] p-6 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(214,255,1,0.1)">
                  <svg class="w-5 h-5 text-lime-600 dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-display font-semibold text-gray-900 dark:text-white text-sm mb-1">Digital Marketing</div>
                  <div class="text-gray-400 dark:text-white/40 text-xs leading-relaxed">SEO · Paid Ads · Content · Social Strategy · Brand</div>
                  <div class="mt-3 flex gap-2">
                    <div class="h-1.5 flex-1 rounded-full bg-accent/30 overflow-hidden"><div class="h-full w-4/5 bg-accent rounded-full"/></div>
                    <span class="text-lime-600 dark:text-accent text-xs font-display font-bold">+312% ROI</span>
                  </div>
                </div>
              </div>

              <!-- Card 2: Web Dev -->
              <div class="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#080808] p-6 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(0,0,0,0.05)">
                  <svg class="w-5 h-5 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-display font-semibold text-gray-900 dark:text-white text-sm mb-1">Web Development</div>
                  <div class="text-gray-400 dark:text-white/40 text-xs leading-relaxed">Websites · Apps · E-commerce · Custom Software</div>
                  <div class="mt-3 flex items-center gap-2">
                    <div class="flex -space-x-1.5">
                      <div v-for="i in 4" :key="i" class="w-5 h-5 rounded-full border-2 border-white dark:border-[#080808]"
                        :style="{background: ['#D6FF01','#60a5fa','#f472b6','#34d399'][i-1]}"/>
                    </div>
                    <span class="text-gray-400 dark:text-white/40 text-xs">12 projects shipped</span>
                  </div>
                </div>
              </div>

              <!-- Card 3: AI -->
              <div class="rounded-2xl border border-accent/20 bg-lime-50 dark:bg-accent/5 p-6 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(214,255,1,0.15)">
                  <svg class="w-5 h-5 text-lime-600 dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-display font-semibold text-gray-900 dark:text-white text-sm mb-1">AI Growth Platform</div>
                  <div class="text-gray-400 dark:text-white/40 text-xs leading-relaxed">AI Tools · Automation · Integrations · Analytics</div>
                  <div class="mt-3 flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                    <span class="text-lime-600 dark:text-accent text-xs font-medium">142,840 AI calls today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 dark:text-white/20 animate-bounce">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MButton from '@/components/ui/MButton.vue'

const pillars = [
  { emoji: '📣', label: 'Digital Marketing', to: '/services/digital-marketing' },
  { emoji: '💻', label: 'Web Development', to: '/services/web-development' },
  { emoji: '🤖', label: 'AI Solutions', to: '/services/ai-solutions' },
]
</script>
