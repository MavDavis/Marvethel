<template>
  <div>
    <div class="mb-8">
      <h1 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2">Start building</h1>
      <p class="text-gray-500 dark:text-white/50">Create your Marvethel account — free forever</p>
    </div>

    <form @submit.prevent="handleSignup" class="flex flex-col gap-5">
      <MInput
        v-model="form.name"
        label="Full name"
        type="text"
        placeholder="Your name"
        required
        :error="errors.name"
      />
      <MInput
        v-model="form.email"
        label="Work email"
        type="email"
        placeholder="you@company.com"
        required
        :error="errors.email"
      />
      <MInput
        v-model="form.password"
        label="Password"
        type="password"
        placeholder="At least 8 characters"
        required
        :error="errors.password"
      />
      <MInput
        v-model="form.company"
        label="Company / product name"
        type="text"
        placeholder="Acme Corp"
        :error="errors.company"
      />

      <MButton type="submit" size="lg" class="w-full mt-2" :disabled="loading">
        <span v-if="loading" class="flex items-center gap-2">
          <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          Creating account...
        </span>
        <span v-else>Create free account</span>
      </MButton>

      <p v-if="errors.general" class="text-red-500 dark:text-red-400 text-sm text-center">{{ errors.general }}</p>

      <p class="text-gray-400 dark:text-white/30 text-xs text-center leading-relaxed">
        By signing up you agree to our
        <RouterLink to="/terms" class="underline hover:text-gray-700 dark:hover:text-white/60 transition-colors">Terms of Service</RouterLink>
        and
        <RouterLink to="/privacy" class="underline hover:text-gray-700 dark:hover:text-white/60 transition-colors">Privacy Policy</RouterLink>.
      </p>
    </form>

    <p class="text-center text-gray-400 dark:text-white/40 text-sm mt-8">
      Already have an account?
      <RouterLink to="/auth/login" class="text-lime-600 dark:text-accent hover:opacity-80 transition-opacity font-medium ml-1">
        Sign in
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
const form = reactive({ name: '', email: '', password: '', company: '' })
const errors = reactive({ name: '', email: '', password: '', company: '', general: '' })

async function handleSignup() {
  Object.keys(errors).forEach(k => errors[k] = '')
  if (!form.name) { errors.name = 'Name is required'; return }
  if (!form.email) { errors.email = 'Email is required'; return }
  if (form.password.length < 8) { errors.password = 'Password must be at least 8 characters'; return }

  loading.value = true
  try {
    await auth.signup(form)
    router.push('/onboarding')
  } catch (e) {
    errors.general = e.message || 'Signup failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
