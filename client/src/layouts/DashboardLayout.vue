<template>
  <div class="flex h-screen overflow-hidden bg-white dark:bg-black">
    <TheSidebar />
    <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
      <TheDashboardHeader />
      <main class="flex-1 overflow-y-auto bg-gray-50/50 dark:bg-black">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/dashboard/TheSidebar.vue'
import TheDashboardHeader from '@/components/dashboard/TheDashboardHeader.vue'
</script>
