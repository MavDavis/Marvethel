<template>
  <div class="min-h-screen bg-white dark:bg-black flex flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between px-8 py-5 border-b border-gray-200 dark:border-white/10">
      <MLogo size="md" />
      <button @click="router.push('/dashboard')" class="text-sm text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors">
        Skip for now →
      </button>
    </div>

    <div class="flex-1 flex items-center justify-center px-6 py-12">
      <div class="w-full max-w-2xl">
        <!-- Progress -->
        <div class="flex items-center gap-2 mb-10">
          <div v-for="i in totalSteps" :key="i"
            class="h-1 rounded-full transition-all duration-300 flex-1"
            :class="i <= step ? 'bg-accent' : 'bg-gray-200 dark:bg-white/10'" />
        </div>

        <!-- Step content -->
        <Transition name="slide" mode="out-in">
          <div :key="step">
            <!-- Step 1: Welcome -->
            <div v-if="step === 1" class="text-center">
              <div class="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-lime-600 dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                </svg>
              </div>
              <MBadge variant="accent" class="mb-4">Welcome to Marvethel</MBadge>
              <h1 class="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">Your AI control center is ready</h1>
              <p class="text-gray-500 dark:text-white/50 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                Let's get you set up in 3 quick steps. You'll have your first AI tool running in under 5 minutes.
              </p>
              <MButton size="lg" @click="step++">Let's go →</MButton>
            </div>

            <!-- Step 2: Create project -->
            <div v-else-if="step === 2">
              <MBadge variant="accent" class="mb-4">Step 1 of 3</MBadge>
              <h2 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-3">Name your first project</h2>
              <p class="text-gray-500 dark:text-white/50 mb-8">A project groups your AI tools, automations, and analytics together.</p>
              <div class="flex flex-col gap-5 mb-8">
                <MInput v-model="project.name" label="Project name" placeholder="e.g. My SaaS Product" size="lg" />
                <MInput v-model="project.description" label="Short description (optional)" placeholder="What does this product do?" size="lg" />
                <div>
                  <label class="text-sm font-medium text-gray-700 dark:text-white/80 block mb-2">Project type</label>
                  <div class="grid grid-cols-3 gap-3">
                    <button v-for="type in projectTypes" :key="type.value"
                      @click="project.type = type.value"
                      class="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all text-sm font-medium"
                      :class="project.type === type.value
                        ? 'border-accent bg-lime-50 dark:bg-accent/10 text-lime-700 dark:text-accent'
                        : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-white/60 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white'">
                      <span class="text-xl">{{ type.emoji }}</span>
                      {{ type.label }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex gap-3">
                <MButton variant="outline" @click="step--">Back</MButton>
                <MButton @click="step++" :disabled="!project.name">Continue →</MButton>
              </div>
            </div>

            <!-- Step 3: Build first AI tool -->
            <div v-else-if="step === 3">
              <MBadge variant="accent" class="mb-4">Step 2 of 3</MBadge>
              <h2 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-3">Choose your first AI tool</h2>
              <p class="text-gray-500 dark:text-white/50 mb-8">Pick a template to get started — you can customize or build from scratch later.</p>
              <div class="grid sm:grid-cols-2 gap-4 mb-8">
                <button v-for="tpl in toolTemplates" :key="tpl.id"
                  @click="selectedTemplate = tpl.id"
                  class="flex gap-4 p-5 rounded-xl border text-left transition-all"
                  :class="selectedTemplate === tpl.id
                    ? 'border-accent bg-lime-50 dark:bg-accent/10'
                    : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:border-gray-300 dark:hover:border-white/20'">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                    :class="selectedTemplate === tpl.id ? 'bg-accent/20' : 'bg-gray-100 dark:bg-white/5'">
                    {{ tpl.emoji }}
                  </div>
                  <div>
                    <div class="font-display font-semibold text-gray-900 dark:text-white text-sm mb-1">{{ tpl.name }}</div>
                    <div class="text-gray-400 dark:text-white/40 text-xs">{{ tpl.description }}</div>
                  </div>
                </button>
              </div>
              <div class="flex gap-3">
                <MButton variant="outline" @click="step--">Back</MButton>
                <MButton @click="step++">Continue →</MButton>
              </div>
            </div>

            <!-- Step 4: Done -->
            <div v-else-if="step === 4" class="text-center">
              <div class="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h2 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">You're all set!</h2>
              <p class="text-gray-500 dark:text-white/50 text-lg mb-10 max-w-sm mx-auto">
                Your workspace is ready. Let's start building AI into <strong class="text-gray-900 dark:text-white">{{ project.name || 'your product' }}</strong>.
              </p>
              <MButton size="lg" @click="router.push('/dashboard/ai-tools')">Open AI Builder →</MButton>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import MLogo from '@/components/ui/MLogo.vue'
import MBadge from '@/components/ui/MBadge.vue'
import MButton from '@/components/ui/MButton.vue'
import MInput from '@/components/ui/MInput.vue'

const router = useRouter()
const step = ref(1)
const totalSteps = 4

const project = reactive({ name: '', description: '', type: 'saas' })
const selectedTemplate = ref('content')

const projectTypes = [
  { value: 'saas', label: 'SaaS', emoji: '☁️' },
  { value: 'startup', label: 'Startup', emoji: '🚀' },
  { value: 'ecommerce', label: 'E-commerce', emoji: '🛍️' },
]

const toolTemplates = [
  { id: 'content', emoji: '✍️', name: 'Content Generator', description: 'Generate blog posts, copy, and product descriptions' },
  { id: 'support', emoji: '💬', name: 'Support Assistant', description: 'Answer customer questions automatically' },
  { id: 'analyst', emoji: '📊', name: 'Data Analyst', description: 'Extract insights from your business data' },
  { id: 'custom', emoji: '⚡', name: 'Custom Tool', description: 'Build from scratch with full control' },
]
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from { opacity: 0; transform: translateX(20px); }
.slide-leave-to { opacity: 0; transform: translateX(-20px); }
</style>
