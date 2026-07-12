<template>
  <aside
    class="flex flex-col h-full border-r border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black transition-all duration-300"
    :class="collapsed ? 'w-16' : 'w-60'"
  >
    <!-- Logo area -->
    <div class="flex items-center px-4 h-16 border-b border-gray-200 dark:border-white/10 flex-shrink-0" :class="collapsed ? 'justify-center' : 'justify-between'">
      <RouterLink to="/" class="flex items-center gap-2.5 overflow-hidden">
        <!-- Dark mode: white mark -->
        <img src="/logos/mark-white.png" class="flex-shrink-0 object-contain hidden dark:block" style="height:28px;width:auto" alt="Marvethel" />
        <!-- Light mode: black mark -->
        <img src="/logos/mark-black.png" class="flex-shrink-0 object-contain block dark:hidden" style="height:28px;width:auto" alt="Marvethel" />
        <span v-if="!collapsed" class="font-display font-bold text-base leading-none">
          <span class="text-gray-900 dark:text-white">MARV</span><span class="text-lime-600 dark:text-accent">ETHEL</span>
        </span>
      </RouterLink>
      <button v-if="!collapsed" @click="collapsed = true"
        class="p-1.5 rounded-lg text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex-shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
        </svg>
      </button>
    </div>

    <!-- Nav -->
    <nav class="flex-1 py-4 overflow-y-auto scrollbar-hide">
      <!-- Expand button when collapsed -->
      <button v-if="collapsed" @click="collapsed = false"
        class="w-full flex justify-center py-2 text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white transition-colors mb-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
        </svg>
      </button>

      <div class="px-3 flex flex-col gap-0.5">
        <p v-if="!collapsed" class="text-gray-400 dark:text-white/25 text-[10px] font-display font-semibold uppercase tracking-widest px-3 py-2">
          Main
        </p>

        <RouterLink
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 font-medium text-sm"
          :class="[
            collapsed ? 'justify-center' : '',
            isActive(item.to)
              ? 'bg-lime-100 dark:bg-accent/10 text-lime-700 dark:text-accent'
              : 'text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
          ]"
          :title="collapsed ? item.label : ''"
        >
          <span class="text-base flex-shrink-0 leading-none">{{ item.emoji }}</span>
          <span v-if="!collapsed">{{ item.label }}</span>
          <MBadge v-if="!collapsed && item.badge" variant="accent" class="ml-auto text-[10px] !px-1.5 !py-0.5">
            {{ item.badge }}
          </MBadge>
        </RouterLink>

        <div v-if="!collapsed" class="border-t border-gray-200 dark:border-white/10 my-3" />
        <div v-else class="border-t border-gray-200 dark:border-white/10 my-3 mx-3" />

        <p v-if="!collapsed" class="text-gray-400 dark:text-white/25 text-[10px] font-display font-semibold uppercase tracking-widest px-3 py-2">
          Workspace
        </p>

        <RouterLink
          v-for="item in workspaceNav"
          :key="item.to"
          :to="item.to"
          class="group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 font-medium text-sm"
          :class="[
            collapsed ? 'justify-center' : '',
            isActive(item.to)
              ? 'bg-lime-100 dark:bg-accent/10 text-lime-700 dark:text-accent'
              : 'text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
          ]"
          :title="collapsed ? item.label : ''"
        >
          <span class="text-base flex-shrink-0 leading-none">{{ item.emoji }}</span>
          <span v-if="!collapsed">{{ item.label }}</span>
        </RouterLink>
      </div>
    </nav>

    <!-- User area -->
    <div class="border-t border-gray-200 dark:border-white/10 p-3 flex-shrink-0">
      <div class="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
        :class="collapsed ? 'justify-center' : ''">
        <div class="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
          <span class="text-lime-700 dark:text-accent text-xs font-display font-bold">
            {{ auth.user?.name?.[0]?.toUpperCase() || 'U' }}
          </span>
        </div>
        <div v-if="!collapsed" class="flex-1 min-w-0">
          <div class="text-gray-900 dark:text-white text-xs font-medium truncate">{{ auth.user?.name || 'User' }}</div>
          <div class="text-gray-400 dark:text-white/40 text-xs truncate">{{ auth.user?.email || '' }}</div>
        </div>
        <RouterLink v-if="!collapsed" to="/dashboard/settings" class="text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import MBadge from '@/components/ui/MBadge.vue'

const auth = useAuthStore()
const route = useRoute()
const collapsed = ref(false)

function isActive(to) {
  if (to === '/dashboard') return route.path === '/dashboard'
  return route.path.startsWith(to)
}

const mainNav = [
  { label: 'Dashboard', to: '/dashboard', emoji: '🏠' },
  { label: 'AI Tools', to: '/dashboard/ai-tools', emoji: '🤖', badge: 'New' },
  { label: 'Analytics', to: '/dashboard/analytics', emoji: '📊' },
]

const workspaceNav = [
  { label: 'Projects', to: '/dashboard/projects', emoji: '📁' },
  { label: 'Automation', to: '/dashboard/automation', emoji: '⚡' },
  { label: 'Integrations', to: '/dashboard/integrations', emoji: '🔌' },
  { label: 'Settings', to: '/dashboard/settings', emoji: '⚙️' },
]
</script>
