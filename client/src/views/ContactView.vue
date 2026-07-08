<template>
  <div class="pt-20 section-padding">
    <div class="container-wide max-w-2xl">
      <MBadge variant="accent" class="mb-6">Contact</MBadge>
      <h1 class="font-display text-5xl font-bold text-gray-900 dark:text-white mb-4">Get in touch</h1>
      <p class="text-gray-500 dark:text-white/50 text-lg mb-12">Talk to sales, ask a question, or just say hi. We'll get back to you within one business day.</p>

      <form @submit.prevent class="flex flex-col gap-5">
        <div class="grid sm:grid-cols-2 gap-5">
          <MInput v-model="form.name" label="Name" placeholder="Your name" />
          <MInput v-model="form.email" label="Email" type="email" placeholder="you@company.com" />
        </div>
        <MInput v-model="form.company" label="Company" placeholder="Your company" />
        <div>
          <label class="text-sm font-medium text-gray-700 dark:text-white/80 block mb-1.5">Message</label>
          <textarea v-model="form.message" rows="5" placeholder="Tell us about your project and what you'd like to discuss..."
            class="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent resize-none transition-all" />
        </div>
        <MButton size="lg" type="submit">Send message</MButton>
      </form>

      <div class="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-200 dark:border-white/10">
        <div v-for="contact in contactInfo" :key="contact.label">
          <div class="text-xs text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1">{{ contact.label }}</div>
          <div class="text-gray-900 dark:text-white text-sm">{{ contact.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import MBadge from '@/components/ui/MBadge.vue'
import MButton from '@/components/ui/MButton.vue'
import MInput from '@/components/ui/MInput.vue'

const form = reactive({ name: '', email: '', company: '', message: '' })

const contactInfo = [
  { label: 'Email', value: 'hello@marvethel.ai' },
  { label: 'Location', value: 'Remote-first' },
  { label: 'Response', value: '< 24 hours' },
]
</script>
