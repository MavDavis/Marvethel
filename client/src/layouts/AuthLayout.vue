<template>
  <div class="min-h-screen bg-white dark:bg-black flex">
    <!-- Left: Form area -->
    <div class="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16">
      <!-- Logo -->
      <RouterLink to="/" class="mb-12">
        <MLogo size="md" />
      </RouterLink>
      <div class="max-w-sm w-full">
        <RouterView />
      </div>
    </div>

    <!-- Right: Decorative panel (stays dark for contrast) -->
    <div class="hidden lg:flex flex-1 relative bg-[#040404] border-l border-white/10 overflow-hidden">
      <!-- Grid background -->
      <div class="absolute inset-0 bg-grid opacity-100" />
      <!-- Glow -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse at 60% 50%, rgba(214,255,1,0.06) 0%, transparent 60%)" />

      <div class="relative z-10 flex flex-col justify-center px-16 py-12">
        <MBadge variant="accent" class="mb-6 self-start">AI-Powered Platform</MBadge>
        <blockquote class="text-2xl font-display font-semibold text-white leading-relaxed mb-8">
          "Marvethel cut our time-to-AI-feature from 3 months to 3 days. It's the infrastructure layer we never knew we needed."
        </blockquote>
        <div class="flex items-center gap-3">
          <img
            src="/images/avatar-jordan.jpg"
            alt="Jordan Kim"
            class="w-10 h-10 rounded-full object-cover border border-white/20"
          />
          <div>
            <div class="text-white font-medium text-sm">Jordan Kim</div>
            <div class="text-white/40 text-xs">CTO, Orbix</div>
          </div>
        </div>

        <!-- Dashboard preview mini -->
        <div class="mt-12 rounded-2xl border border-white/10 bg-black/60 overflow-hidden">
          <div class="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span class="w-2 h-2 rounded-full bg-red-500/50" />
            <span class="w-2 h-2 rounded-full bg-yellow-500/50" />
            <span class="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div class="p-4">
            <div class="grid grid-cols-3 gap-2 mb-3">
              <div v-for="i in 3" :key="i" class="rounded-lg bg-white/5 border border-white/10 p-3">
                <div class="h-1.5 w-8 rounded bg-white/20 mb-2" />
                <div class="h-3 w-10 rounded font-display font-bold text-accent text-xs flex items-center">
                  {{ ['98%', '2.4k', '+31%'][i-1] }}
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-white/5 border border-white/10 p-3">
              <svg viewBox="0 0 240 50" class="w-full" preserveAspectRatio="none">
                <path d="M0 45 L40 35 L80 28 L120 18 L160 22 L200 10 L240 3"
                  stroke="#D6FF01" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M0 45 L40 35 L80 28 L120 18 L160 22 L200 10 L240 3 L240 50 L0 50 Z"
                  fill="rgba(214,255,1,0.05)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MLogo from '@/components/ui/MLogo.vue'
import MBadge from '@/components/ui/MBadge.vue'
</script>
