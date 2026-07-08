<template>
  <div class="p-6 md:p-8 max-w-3xl mx-auto">
    <div class="mb-8">
      <h1 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
      <p class="text-gray-400 dark:text-white/40 text-sm mt-1">Manage your account, team, and billing</p>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 border-b border-gray-200 dark:border-white/10 mb-8">
      <button v-for="tab in tabs" :key="tab"
        @click="activeTab = tab"
        class="px-4 py-2.5 text-sm font-medium border-b-2 transition-all -mb-px"
        :class="activeTab === tab
          ? 'border-accent text-lime-700 dark:text-accent'
          : 'border-transparent text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white'">
        {{ tab }}
      </button>
    </div>

    <!-- Profile tab -->
    <div v-if="activeTab === 'Profile'" class="flex flex-col gap-6">
      <MCard padding="lg">
        <h2 class="font-display font-semibold text-gray-900 dark:text-white mb-5">Personal Information</h2>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-5 pb-5 border-b border-gray-200 dark:border-white/10">
            <div class="w-16 h-16 rounded-2xl bg-lime-100 dark:bg-accent/20 border border-lime-200 dark:border-accent/30 flex items-center justify-center flex-shrink-0">
              <span class="text-lime-700 dark:text-accent text-2xl font-display font-bold">{{ auth.user?.name?.[0] || 'U' }}</span>
            </div>
            <div>
              <MButton variant="outline" size="sm">Change avatar</MButton>
              <p class="text-gray-400 dark:text-white/30 text-xs mt-1.5">JPG, PNG up to 2MB</p>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <MInput label="Full name" :modelValue="auth.user?.name || ''" placeholder="Your name" />
            <MInput label="Email" :modelValue="auth.user?.email || ''" placeholder="your@email.com" type="email" />
          </div>
          <MInput label="Company" modelValue="" placeholder="Your company" />
          <div class="flex justify-end">
            <MButton>Save changes</MButton>
          </div>
        </div>
      </MCard>

      <MCard padding="lg">
        <h2 class="font-display font-semibold text-gray-900 dark:text-white mb-2">Danger Zone</h2>
        <p class="text-gray-400 dark:text-white/40 text-sm mb-4">Permanently delete your account and all associated data.</p>
        <MButton variant="danger" size="sm">Delete account</MButton>
      </MCard>
    </div>

    <!-- API Keys tab -->
    <div v-if="activeTab === 'API Keys'" class="flex flex-col gap-5">
      <div class="flex items-center justify-between">
        <p class="text-gray-500 dark:text-white/50 text-sm">API keys allow external applications to authenticate with Marvethel.</p>
        <MButton size="sm">Generate key</MButton>
      </div>
      <MCard padding="none">
        <div class="divide-y divide-gray-100 dark:divide-white/5">
          <div v-for="key in apiKeys" :key="key.id" class="flex items-center gap-4 px-5 py-4">
            <div class="flex-1 min-w-0">
              <div class="text-gray-900 dark:text-white text-sm font-medium">{{ key.name }}</div>
              <div class="font-mono text-gray-400 dark:text-white/30 text-xs mt-0.5">{{ key.preview }}</div>
            </div>
            <div class="text-gray-400 dark:text-white/30 text-xs">Created {{ key.created }}</div>
            <MBadge :variant="key.active ? 'success' : 'default'">{{ key.active ? 'Active' : 'Revoked' }}</MBadge>
            <button class="text-gray-400 dark:text-white/30 hover:text-red-500 dark:hover:text-red-400 transition-colors text-xs">Revoke</button>
          </div>
        </div>
      </MCard>
    </div>

    <!-- Billing tab -->
    <div v-if="activeTab === 'Billing'" class="flex flex-col gap-5">
      <div class="rounded-2xl border border-accent/20 bg-lime-50 dark:bg-accent/5 p-6">
        <div class="flex items-center justify-between mb-2">
          <span class="font-display font-semibold text-gray-900 dark:text-white">Pro Plan</span>
          <MBadge variant="accent">Current</MBadge>
        </div>
        <div class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-1">$49<span class="text-gray-400 dark:text-white/40 text-base font-normal">/mo</span></div>
        <p class="text-gray-500 dark:text-white/50 text-sm">200,000 API calls · 10 AI tools · 25 automations</p>
        <div class="flex gap-3 mt-5">
          <MButton size="sm">Upgrade to Enterprise</MButton>
          <MButton variant="outline" size="sm">Manage billing</MButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import MCard from '@/components/ui/MCard.vue'
import MInput from '@/components/ui/MInput.vue'
import MButton from '@/components/ui/MButton.vue'
import MBadge from '@/components/ui/MBadge.vue'

const auth = useAuthStore()
const tabs = ['Profile', 'Team', 'API Keys', 'Billing', 'Security']
const activeTab = ref('Profile')

const apiKeys = [
  { id: 1, name: 'Production Key', preview: 'mv_live_••••••••••••3kF2', created: 'Jun 2025', active: true },
  { id: 2, name: 'Development Key', preview: 'mv_test_••••••••••••9pR1', created: 'May 2025', active: true },
]
</script>
