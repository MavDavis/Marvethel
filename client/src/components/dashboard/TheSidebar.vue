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
          <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
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
          <component :is="item.icon" class="w-5 h-5 flex-shrink-0" />
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

const HomeIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>` }
const BrainIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg>` }
const FolderIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/></svg>` }
const ChartIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm9.75-9.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V3.375zm-4.5 7.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9a1.125 1.125 0 01-1.125 1.125h-2.25A1.125 1.125 0 018.25 19.875v-9z"/></svg>` }
const BoltIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>` }
const PlugIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>` }
const CogIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>` }

const mainNav = [
  { label: 'Dashboard', to: '/dashboard', icon: HomeIcon },
  { label: 'AI Tools', to: '/dashboard/ai-tools', icon: BrainIcon, badge: 'New' },
  { label: 'Analytics', to: '/dashboard/analytics', icon: ChartIcon },
]

const workspaceNav = [
  { label: 'Projects', to: '/dashboard/projects', icon: FolderIcon },
  { label: 'Automation', to: '/dashboard/automation', icon: BoltIcon },
  { label: 'Integrations', to: '/dashboard/integrations', icon: PlugIcon },
  { label: 'Settings', to: '/dashboard/settings', icon: CogIcon },
]
</script>
