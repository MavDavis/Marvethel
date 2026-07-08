import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('mv_token') || null)
  const user = ref(JSON.parse(localStorage.getItem('mv_user') || 'null'))

  const isAuthenticated = computed(() => !!token.value)

  async function login(credentials) {
    const res = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || 'Login failed')
    }
    const data = await res.json()
    _setSession(data.token, data.user)
    return data
  }

  async function signup(payload) {
    const res = await fetch('/api/v1/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || 'Signup failed')
    }
    const data = await res.json()
    _setSession(data.token, data.user)
    return data
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('mv_token')
    localStorage.removeItem('mv_user')
  }

  function _setSession(t, u) {
    token.value = t
    user.value = u
    localStorage.setItem('mv_token', t)
    localStorage.setItem('mv_user', JSON.stringify(u))
  }

  return { token, user, isAuthenticated, login, signup, logout }
})
