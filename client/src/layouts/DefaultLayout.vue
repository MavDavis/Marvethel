<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <TheNavbar />
    <main>
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/marketing/TheNavbar.vue'
import TheFooter from '@/components/marketing/TheFooter.vue'
</script>
