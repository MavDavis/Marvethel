<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm'
      : 'bg-transparent'"
  >
    <nav class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between gap-8">
      <!-- Logo -->
      <RouterLink to="/" class="flex-shrink-0">
        <MLogo size="md" />
      </RouterLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-1">
        <!-- Services dropdown -->
        <li class="relative" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
          <button
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1.5"
            :class="isServicesActive
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white'"
          >
            Services
            <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="servicesOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Dropdown panel -->
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div v-if="servicesOpen"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] rounded-2xl border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-xl p-3">
              <div class="grid grid-cols-3 gap-2">
                <RouterLink
                  v-for="svc in services"
                  :key="svc.to"
                  :to="svc.to"
                  @click="servicesOpen = false"
                  class="group flex flex-col gap-2 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                >
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    :style="{ background: svc.iconBg }">
                    <component :is="svc.icon" class="w-4.5 h-4.5" :class="svc.iconColor" />
                  </div>
                  <div>
                    <div class="font-display font-semibold text-sm text-gray-900 dark:text-white">{{ svc.label }}</div>
                    <div class="text-gray-400 dark:text-white/40 text-xs mt-0.5 leading-relaxed">{{ svc.sub }}</div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </Transition>
        </li>

        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-4 py-2 rounded-lg text-sm text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            active-class="text-gray-900 dark:text-white"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- CTA + theme toggle -->
      <div class="hidden md:flex items-center gap-3">
        <button
          @click="theme.toggle()"
          class="p-2 rounded-lg text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          :aria-label="theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="theme.isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"/>
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
        <RouterLink to="/auth/login">
          <MButton variant="ghost" size="sm">Log in</MButton>
        </RouterLink>
        <RouterLink to="/contact">
          <MButton size="sm">Work With Us</MButton>
        </RouterLink>
      </div>

      <!-- Mobile hamburger -->
      <div class="md:hidden flex items-center gap-2">
        <button
          @click="theme.toggle()"
          class="p-2 rounded-lg text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
        >
          <svg v-if="theme.isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"/>
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
        <button
          class="p-2 rounded-lg text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-white/10 px-6 pb-6">
        <!-- Services section -->
        <div class="pt-4 pb-2">
          <div class="text-xs font-semibold text-gray-400 dark:text-white/30 uppercase tracking-wider px-3 mb-2">Services</div>
          <RouterLink
            v-for="svc in services"
            :key="svc.to"
            :to="svc.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium text-sm"
            @click="mobileOpen = false"
          >
            <component :is="svc.icon" class="w-4 h-4 flex-shrink-0" :class="svc.iconColor" />
            {{ svc.label }}
          </RouterLink>
        </div>
        <!-- Other links -->
        <div class="border-t border-gray-100 dark:border-white/5 pt-2 mb-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-3 py-2.5 rounded-lg text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium text-sm"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </div>
        <div class="flex gap-3">
          <RouterLink to="/auth/login" class="flex-1" @click="mobileOpen = false">
            <MButton variant="outline" size="md" class="w-full">Log in</MButton>
          </RouterLink>
          <RouterLink to="/contact" class="flex-1" @click="mobileOpen = false">
            <MButton size="md" class="w-full">Work With Us</MButton>
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import MLogo from '@/components/ui/MLogo.vue'
import MButton from '@/components/ui/MButton.vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)
const servicesOpen = ref(false)

const MegaphoneIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/></svg>` }
const CodeIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>` }
const BrainIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>` }

const services = [
  {
    label: 'Digital Marketing',
    sub: 'SEO, paid ads, content & social',
    to: '/services/digital-marketing',
    icon: MegaphoneIcon,
    iconBg: 'rgba(214,255,1,0.08)',
    iconColor: 'text-lime-600 dark:text-accent',
  },
  {
    label: 'Web Development',
    sub: 'Websites, apps & e-commerce',
    to: '/services/web-development',
    icon: CodeIcon,
    iconBg: 'rgba(0,0,0,0.04)',
    iconColor: 'text-gray-600 dark:text-white',
  },
  {
    label: 'AI Solutions',
    sub: 'AI tools, automation & analytics',
    to: '/services/ai-solutions',
    icon: BrainIcon,
    iconBg: 'rgba(214,255,1,0.08)',
    iconColor: 'text-lime-600 dark:text-accent',
  },
]

const navLinks = [
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
]

const isServicesActive = computed(() => route.path.startsWith('/services'))

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
