<template>
  <div>
    <div class="mb-8">
      <h1 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h1>
      <p class="text-gray-500 dark:text-white/50">Sign in to your Marvethel workspace</p>
    </div>

    <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
      <MInput
        v-model="form.email"
        label="Email address"
        type="email"
        placeholder="you@company.com"
        required
        :error="errors.email"
      />
      <div>
        <MInput
          v-model="form.password"
          label="Password"
          type="password"
          placeholder="Your password"
          required
          :error="errors.password"
        />
        <RouterLink to="/auth/forgot" class="text-xs text-gray-400 dark:text-white/40 hover:text-lime-600 dark:hover:text-accent transition-colors mt-1.5 block text-right">
          Forgot password?
        </RouterLink>
      </div>

      <MButton type="submit" size="lg" class="w-full mt-2" :disabled="loading">
        <span v-if="loading" class="flex items-center gap-2">
          <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          Signing in...
        </span>
        <span v-else>Sign in</span>
      </MButton>

      <p v-if="errors.general" class="text-red-500 dark:text-red-400 text-sm text-center">{{ errors.general }}</p>
    </form>

    <div class="my-8 flex items-center gap-4">
      <div class="flex-1 h-px bg-gray-200 dark:bg-white/10" />
      <span class="text-gray-400 dark:text-white/30 text-xs">OR</span>
      <div class="flex-1 h-px bg-gray-200 dark:bg-white/10" />
    </div>

    <!-- OAuth placeholders -->
    <div class="flex flex-col gap-3">
      <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white transition-all text-sm font-medium">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>
      <button class="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white transition-all text-sm font-medium">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        Continue with GitHub
      </button>
    </div>

    <p class="text-center text-gray-400 dark:text-white/40 text-sm mt-8">
      Don't have an account?
      <RouterLink to="/auth/signup" class="text-lime-600 dark:text-accent hover:opacity-80 transition-opacity font-medium ml-1">
        Sign up for free
      </RouterLink>
    </p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import MInput from '@/components/ui/MInput.vue'
import MButton from '@/components/ui/MButton.vue'

const router = useRouter()
const auth = useAuthStore()

const loading = ref(false)
const form = reactive({ email: '', password: '' })
const errors = reactive({ email: '', password: '', general: '' })

async function handleLogin() {
  Object.keys(errors).forEach(k => errors[k] = '')
  if (!form.email) { errors.email = 'Email is required'; return }
  if (!form.password) { errors.password = 'Password is required'; return }

  loading.value = true
  try {
    await auth.login(form)
    router.push('/dashboard')
  } catch (e) {
    errors.general = e.message || 'Login failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
