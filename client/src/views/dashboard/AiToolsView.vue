<template>
  <div class="flex h-full overflow-hidden">
    <!-- Left panel: Tool library -->
    <div class="w-72 flex-shrink-0 border-r border-gray-200 dark:border-white/10 flex flex-col bg-gray-50 dark:bg-black">
      <div class="p-4 border-b border-gray-200 dark:border-white/10">
        <div class="flex items-center justify-between mb-3">
          <h2 class="font-display font-semibold text-gray-900 dark:text-white text-sm">AI Tools</h2>
          <button @click="showNewTool = true"
            class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-lime-100 dark:bg-accent/10 text-lime-700 dark:text-accent border border-lime-200 dark:border-accent/20 text-xs font-medium hover:bg-lime-200 dark:hover:bg-accent/20 transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            New
          </button>
        </div>
        <div class="relative">
          <svg class="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 dark:text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input v-model="search" placeholder="Search tools..." class="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg pl-8 pr-3 py-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent" />
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-2">
        <button
          v-for="tool in filteredTools"
          :key="tool.id"
          @click="activeTool = tool"
          class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all mb-1"
          :class="activeTool?.id === tool.id
            ? 'bg-lime-100 dark:bg-accent/10 border border-lime-200 dark:border-accent/20'
            : 'hover:bg-gray-100 dark:hover:bg-white/5 border border-transparent'">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 bg-gray-100 dark:bg-white/5">
            {{ tool.emoji }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-gray-900 dark:text-white text-xs font-medium truncate">{{ tool.name }}</div>
            <div class="flex items-center gap-1.5 mt-0.5">
              <div class="w-1.5 h-1.5 rounded-full" :class="tool.active ? 'bg-green-400' : 'bg-gray-300 dark:bg-white/20'" />
              <span class="text-gray-400 dark:text-white/30 text-xs">{{ tool.active ? 'Active' : 'Draft' }}</span>
            </div>
          </div>
        </button>
      </div>
    </div>

    <!-- Center: Builder canvas -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <div v-if="activeTool" class="flex-1 flex flex-col">
        <!-- Tool header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-transparent">
          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ activeTool.emoji }}</span>
            <div>
              <h1 class="font-display font-semibold text-gray-900 dark:text-white">{{ activeTool.name }}</h1>
              <p class="text-gray-400 dark:text-white/40 text-xs">{{ activeTool.model }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <MBadge :variant="activeTool.active ? 'success' : 'default'" :dot="activeTool.active">
              {{ activeTool.active ? 'Active' : 'Draft' }}
            </MBadge>
            <MButton size="sm" variant="outline" @click="testOutput = ''">Reset</MButton>
            <MButton size="sm">Deploy</MButton>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          <!-- Model selection -->
          <div>
            <label class="text-xs font-medium text-gray-400 dark:text-white/60 uppercase tracking-wider block mb-2">Model</label>
            <div class="flex flex-wrap gap-2">
              <button v-for="model in models" :key="model"
                @click="activeTool.model = model"
                class="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
                :class="activeTool.model === model
                  ? 'border-accent bg-lime-50 dark:bg-accent/10 text-lime-700 dark:text-accent'
                  : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white'">
                {{ model }}
              </button>
            </div>
          </div>

          <!-- System prompt -->
          <div>
            <label class="text-xs font-medium text-gray-400 dark:text-white/60 uppercase tracking-wider block mb-2">System Prompt</label>
            <textarea
              v-model="activeTool.systemPrompt"
              rows="5"
              placeholder="You are a helpful AI assistant..."
              class="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent resize-none font-mono transition-all"
            />
          </div>

          <!-- User prompt template -->
          <div>
            <label class="text-xs font-medium text-gray-400 dark:text-white/60 uppercase tracking-wider block mb-2">
              User Prompt Template
              <span class="text-gray-300 dark:text-white/30 normal-case ml-1">(use &#123;&#123;variable&#125;&#125; for dynamic inputs)</span>
            </label>
            <textarea
              v-model="activeTool.promptTemplate"
              rows="4"
              placeholder="Write a blog post about {{topic}} in the style of {{style}}..."
              class="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent resize-none font-mono transition-all"
            />
          </div>

          <!-- Test input -->
          <div>
            <label class="text-xs font-medium text-gray-400 dark:text-white/60 uppercase tracking-wider block mb-2">Test Input</label>
            <textarea
              v-model="testInput"
              rows="3"
              placeholder="Enter a test prompt to try your tool..."
              class="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent resize-none transition-all"
            />
            <MButton @click="runTest" :disabled="testing || !testInput" class="mt-3">
              <span v-if="testing" class="flex items-center gap-2">
                <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Running...
              </span>
              <span v-else>▶ Run Test</span>
            </MButton>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="flex-1 flex items-center justify-center text-center px-8">
        <div>
          <div class="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7 text-gray-300 dark:text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 dark:text-white mb-2">Select an AI tool</h3>
          <p class="text-gray-400 dark:text-white/40 text-sm">Choose a tool from the left or create a new one.</p>
        </div>
      </div>
    </div>

    <!-- Right panel: Output preview -->
    <div class="w-80 flex-shrink-0 border-l border-gray-200 dark:border-white/10 flex flex-col bg-gray-50 dark:bg-black">
      <div class="px-4 py-4 border-b border-gray-200 dark:border-white/10">
        <h3 class="font-display font-semibold text-gray-900 dark:text-white text-sm">Output Preview</h3>
      </div>
      <div class="flex-1 p-4 overflow-y-auto">
        <div v-if="testOutput"
          class="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-sm text-gray-700 dark:text-white/80 leading-relaxed whitespace-pre-wrap font-mono">
          {{ testOutput }}
        </div>
        <div v-else class="h-full flex items-center justify-center text-center">
          <p class="text-gray-300 dark:text-white/20 text-sm">Output will appear here after running a test.</p>
        </div>
      </div>

      <!-- Settings panel -->
      <div class="border-t border-gray-200 dark:border-white/10 p-4">
        <h4 class="text-xs font-medium text-gray-400 dark:text-white/40 uppercase tracking-wider mb-3">Parameters</h4>
        <div class="flex flex-col gap-3">
          <div>
            <div class="flex justify-between text-xs mb-1">
              <span class="text-gray-500 dark:text-white/60">Temperature</span>
              <span class="text-gray-900 dark:text-white font-medium">{{ temperature }}</span>
            </div>
            <input type="range" v-model.number="temperature" min="0" max="2" step="0.1" class="w-full accent-accent" />
          </div>
          <div>
            <div class="flex justify-between text-xs mb-1">
              <span class="text-gray-500 dark:text-white/60">Max tokens</span>
              <span class="text-gray-900 dark:text-white font-medium">{{ maxTokens }}</span>
            </div>
            <input type="range" v-model.number="maxTokens" min="100" max="4096" step="100" class="w-full accent-accent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MBadge from '@/components/ui/MBadge.vue'
import MButton from '@/components/ui/MButton.vue'

const search = ref('')
const testing = ref(false)
const testInput = ref('')
const testOutput = ref('')
const temperature = ref(0.7)
const maxTokens = ref(1024)
const showNewTool = ref(false)

const models = ['GPT-4o', 'Claude 3.5', 'Gemini 1.5 Pro', 'GPT-3.5 Turbo']

const tools = ref([
  { id: 1, emoji: '✍️', name: 'Content Generator', active: true, model: 'GPT-4o', systemPrompt: 'You are an expert content writer who creates engaging, SEO-optimized content.', promptTemplate: 'Write a {{type}} about {{topic}} targeting {{audience}}.' },
  { id: 2, emoji: '💬', name: 'Support Assistant', active: true, model: 'Claude 3.5', systemPrompt: 'You are a helpful customer support agent. Be concise, friendly, and solution-focused.', promptTemplate: 'Help the customer with: {{issue}}' },
  { id: 3, emoji: '📊', name: 'Data Analyst', active: false, model: 'GPT-4o', systemPrompt: 'You are a data analyst who extracts insights from raw data.', promptTemplate: 'Analyze this data and provide key insights: {{data}}' },
])

const activeTool = ref(tools.value[0])

const filteredTools = computed(() =>
  tools.value.filter(t => t.name.toLowerCase().includes(search.value.toLowerCase()))
)

async function runTest() {
  if (!testInput.value || testing.value) return
  testing.value = true
  testOutput.value = ''
  await new Promise(r => setTimeout(r, 1500))
  testOutput.value = `[Simulated output for: "${testInput.value}"]\n\nThis is a placeholder response. Connect your API endpoint in server/routes/tools.js to get real AI responses.\n\nModel: ${activeTool.value?.model}\nTemperature: ${temperature.value}\nMax tokens: ${maxTokens.value}`
  testing.value = false
}
</script>
