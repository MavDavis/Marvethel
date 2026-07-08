<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black">
    <!-- Background grid -->
    <div class="absolute inset-0 bg-grid-light dark:bg-grid opacity-100 pointer-events-none" />
    <!-- Radial glow top-center -->
    <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
      style="background: radial-gradient(ellipse, rgba(214,255,1,0.06) 0%, transparent 70%)" />
    <!-- Glow bottom-right -->
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
      style="background: radial-gradient(ellipse at bottom right, rgba(214,255,1,0.04) 0%, transparent 70%)" />

    <div class="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 lg:pt-0 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

        <!-- Left: Copy -->
        <div>
          <!-- Pill badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/5 text-xs text-gray-500 dark:text-white/60 font-medium mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            AI-Powered Product Growth Platform
          </div>

          <h1 class="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-gray-900 dark:text-white mb-6">
            The AI Control<br />
            Center for<br />
            <span class="text-lime-600 dark:text-accent">Modern Products</span>
          </h1>

          <p class="text-gray-500 dark:text-white/50 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Build AI tools, automate workflows, and track product growth — all in one command center built for ambitious founders and product teams.
          </p>

          <div class="flex flex-wrap gap-4 mb-14">
            <RouterLink to="/auth/signup">
              <MButton size="lg">Start Building Free</MButton>
            </RouterLink>
            <MButton variant="outline" size="lg" @click="scrollToFeatures">
              <template #icon>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </template>
              Watch Demo
            </MButton>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-8 md:gap-12">
            <div v-for="stat in stats" :key="stat.label">
              <div class="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{{ stat.value }}</div>
              <div class="text-gray-400 dark:text-white/40 text-sm mt-0.5">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Dashboard mockup -->
        <div class="hidden lg:flex justify-center items-center">
          <div class="relative w-full max-w-[580px]">
            <!-- Glow behind card -->
            <div class="absolute inset-0 rounded-3xl blur-3xl opacity-30"
              style="background: radial-gradient(ellipse, rgba(214,255,1,0.2) 0%, transparent 70%)" />

            <!-- Dashboard shell -->
            <div class="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#080808] overflow-hidden shadow-2xl">
              <!-- Window chrome -->
              <div class="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-white/[0.02]">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span class="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <div class="flex-1 flex justify-center">
                  <div class="px-3 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-400 dark:text-white/30 text-xs font-mono">
                    dashboard.marvethel.ai
                  </div>
                </div>
              </div>

              <!-- Dashboard layout -->
              <div class="flex" style="height: 420px;">
                <!-- Sidebar -->
                <div class="w-14 flex flex-col items-center gap-4 py-4 border-r border-gray-200 dark:border-white/10 bg-gray-100/30 dark:bg-white/[0.01]">
                  <div class="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
                    <div class="w-3 h-3 rounded-sm bg-accent" />
                  </div>
                  <div v-for="i in 5" :key="i" class="w-6 h-6 rounded-md bg-black/[0.06] dark:bg-white/5" />
                </div>

                <!-- Main content -->
                <div class="flex-1 p-5 overflow-hidden">
                  <!-- Header row -->
                  <div class="flex items-center justify-between mb-5">
                    <div>
                      <div class="h-3.5 w-28 rounded bg-black/10 dark:bg-white/20 mb-2" />
                      <div class="h-2.5 w-40 rounded bg-black/[0.06] dark:bg-white/10" />
                    </div>
                    <div class="px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
                      <div class="h-2.5 w-16 rounded bg-accent/60" />
                    </div>
                  </div>

                  <!-- Stats row -->
                  <div class="grid grid-cols-3 gap-3 mb-5">
                    <div v-for="(s, i) in mockStats" :key="i"
                      class="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-3">
                      <div class="h-2 w-12 rounded bg-black/10 dark:bg-white/20 mb-2" />
                      <div :class="['font-display font-bold text-sm', s.accent ? 'text-lime-600 dark:text-accent' : 'text-gray-900 dark:text-white']">
                        {{ s.val }}
                      </div>
                      <div class="flex items-center gap-1 mt-1">
                        <div class="h-1.5 w-1.5 rounded-full bg-green-400" />
                        <div class="h-1.5 w-8 rounded bg-green-400/30" />
                      </div>
                    </div>
                  </div>

                  <!-- Chart area -->
                  <div class="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-4 mb-4">
                    <div class="h-2 w-20 rounded bg-black/10 dark:bg-white/20 mb-4" />
                    <svg viewBox="0 0 300 80" class="w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#D6FF01" stop-opacity="0.3" />
                          <stop offset="100%" stop-color="#D6FF01" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 70 L40 55 L80 45 L120 30 L160 35 L200 20 L240 15 L300 5 L300 80 L0 80 Z"
                        fill="url(#chartGrad)" />
                      <path d="M0 70 L40 55 L80 45 L120 30 L160 35 L200 20 L240 15 L300 5"
                        stroke="#D6FF01" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                      <circle cx="200" cy="20" r="3" fill="#D6FF01" />
                      <circle cx="300" cy="5" r="3" fill="#D6FF01" />
                    </svg>
                  </div>

                  <!-- Activity rows -->
                  <div class="flex flex-col gap-2">
                    <div v-for="i in 3" :key="i" class="flex items-center gap-3">
                      <div class="w-6 h-6 rounded-full flex-shrink-0" :style="{ background: `rgba(214,255,1,${0.1 + i * 0.05})` }" />
                      <div class="flex-1 h-2 rounded bg-black/[0.06] dark:bg-white/10" />
                      <div class="h-2 w-10 rounded" :class="i === 1 ? 'bg-accent/40' : 'bg-black/[0.06] dark:bg-white/10'" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating stat cards -->
            <div class="absolute -top-4 -right-8 px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/90 backdrop-blur shadow-xl">
              <div class="text-xs text-gray-400 dark:text-white/40 mb-1">AI calls today</div>
              <div class="font-display font-bold text-lime-600 dark:text-accent text-xl">142,840</div>
            </div>
            <div class="absolute -bottom-4 -left-8 px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/90 backdrop-blur shadow-xl">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div class="text-xs text-gray-400 dark:text-white/40">All systems operational</div>
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

const stats = [
  { value: '500+', label: 'Teams building' },
  { value: '10M+', label: 'API calls / month' },
  { value: '99.9%', label: 'Uptime SLA' },
]

const mockStats = [
  { val: '98.2%', accent: true },
  { val: '2.4k', accent: false },
  { val: '+31%', accent: true },
]

function scrollToFeatures() {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
