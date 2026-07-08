import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('mv_theme') !== 'light'
      : true
  )

  watch(isDark, (dark) => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('mv_theme', dark ? 'dark' : 'light')
  }, { immediate: true })

  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
})
