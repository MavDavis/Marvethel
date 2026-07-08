<template>
  <header class="h-16 border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center px-6 gap-4 flex-shrink-0">
    <!-- Search -->
    <div class="flex-1 max-w-sm">
      <div class="relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          v-model="search"
          type="text"
          placeholder="Search..."
          class="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
        />
        <kbd class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-300 dark:text-white/20 bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded border border-gray-200 dark:border-white/10">
          ⌘K
        </kbd>
      </div>
    </div>

    <div class="flex items-center gap-2 ml-auto">
      <!-- Theme toggle -->
      <button
        @click="theme.toggle()"
        class="p-2 rounded-xl text-gray-400 dark:text-white/50 hover:text-gray-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        :aria-label="theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <svg v-if="theme.isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"/>
        </svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      </button>

      <!-- Notifications -->
      <button class="relative p-2 rounded-xl text-gray-400 dark:text-white/50 hover:text-gray-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
        </svg>
        <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
      </button>

      <!-- New tool quick action -->
      <RouterLink to="/dashboard/ai-tools">
        <MButton size="sm">
          <template #icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </template>
          New Tool
        </MButton>
      </RouterLink>

      <!-- Avatar -->
      <div class="w-9 h-9 rounded-full bg-accent/20 border border-accent/20 flex items-center justify-center cursor-pointer hover:border-accent transition-colors">
        <span class="text-lime-700 dark:text-accent text-sm font-display font-bold">
          {{ auth.user?.name?.[0]?.toUpperCase() || 'U' }}
        </span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import MButton from '@/components/ui/MButton.vue'

const auth = useAuthStore()
const theme = useThemeStore()
const search = ref('')
</script>
