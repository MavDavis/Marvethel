<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
useThemeStore()
</script>
