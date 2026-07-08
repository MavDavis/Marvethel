<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" :for="id" class="text-sm font-medium text-gray-700 dark:text-white/80">
      {{ label }}
      <span v-if="required" class="text-lime-600 dark:text-accent ml-0.5">*</span>
    </label>
    <div class="relative">
      <div v-if="$slots.prefix" class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400 dark:text-muted">
        <slot name="prefix" />
      </div>
      <input
        :id="id"
        v-bind="$attrs"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="[
          'w-full bg-gray-100 dark:bg-white/5 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          sizeClass,
          $slots.prefix ? 'pl-10' : '',
          $slots.suffix ? 'pr-10' : '',
        ]"
        :style="{ borderColor: 'var(--input-border, rgba(0,0,0,0.12))' }"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div v-if="$slots.suffix" class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 dark:text-muted">
        <slot name="suffix" />
      </div>
    </div>
    <p v-if="hint" class="text-xs text-gray-400 dark:text-muted">{{ hint }}</p>
    <p v-if="error" class="text-xs text-red-500 dark:text-red-400">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: { type: String, default: '' },
  id: { type: String, default: () => `input-${Math.random().toString(36).slice(2, 8)}` },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  hint: { type: String, default: '' },
  error: { type: String, default: '' },
  size: { type: String, default: 'md', validator: (v) => ['sm', 'md', 'lg'].includes(v) },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false }
})

defineEmits(['update:modelValue'])

const sizeClass = computed(() => ({
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-4 py-3.5 text-base',
}[props.size]))
</script>
