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

      <!-- Desktop nav links -->
      <ul class="hidden md:flex items-center gap-1">
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
        <!-- Theme toggle -->
        <button
          @click="theme.toggle()"
          class="p-2 rounded-lg text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          :aria-label="theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun icon: shown when in dark mode to switch to light -->
          <svg v-if="theme.isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"/>
          </svg>
          <!-- Moon icon: shown when in light mode to switch to dark -->
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
        <RouterLink to="/auth/login">
          <MButton variant="ghost" size="sm">Log in</MButton>
        </RouterLink>
        <RouterLink to="/auth/signup">
          <MButton size="sm">Get Started</MButton>
        </RouterLink>
      </div>

      <!-- Mobile hamburger -->
      <div class="md:hidden flex items-center gap-2">
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
        <ul class="flex flex-col gap-1 mb-4 pt-2">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block px-3 py-2.5 rounded-lg text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <div class="flex gap-3">
          <RouterLink to="/auth/login" class="flex-1" @click="mobileOpen = false">
            <MButton variant="outline" size="md" class="w-full">Log in</MButton>
          </RouterLink>
          <RouterLink to="/auth/signup" class="flex-1" @click="mobileOpen = false">
            <MButton size="md" class="w-full">Get Started</MButton>
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import MLogo from '@/components/ui/MLogo.vue'
import MButton from '@/components/ui/MButton.vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
