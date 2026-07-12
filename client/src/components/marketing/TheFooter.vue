<template>
  <footer class="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10">
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <!-- Top row -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
        <!-- Brand -->
        <div class="col-span-2">
          <MLogo size="md" class="mb-4" />
          <p class="text-gray-500 dark:text-white/50 text-sm leading-relaxed max-w-xs">
            The AI control center for modern products. Build, automate, and grow — all in one place.
          </p>
          <!-- Social links -->
          <div class="flex gap-3 mt-6">
            <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener"
              class="w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 dark:text-white/50 hover:border-accent hover:text-lime-600 dark:hover:text-accent transition-all"
              :aria-label="s.label">
              <span class="w-4 h-4 [&>svg]:w-4 [&>svg]:h-4" v-html="s.svg"></span>
            </a>
          </div>
        </div>

        <!-- Link columns -->
        <div v-for="col in footerLinks" :key="col.heading">
          <h4 class="text-xs font-display font-semibold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-4">{{ col.heading }}</h4>
          <ul class="flex flex-col gap-2.5">
            <li v-for="link in col.links" :key="link.label">
              <RouterLink :to="link.to" class="text-sm text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom row -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-white/10">
        <p class="text-gray-400 dark:text-white/30 text-sm">
          &copy; {{ year }} Marvethel. All rights reserved.
        </p>
        <div class="flex gap-6">
          <RouterLink to="/privacy" class="text-sm text-gray-400 dark:text-white/30 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</RouterLink>
          <RouterLink to="/terms" class="text-sm text-gray-400 dark:text-white/30 hover:text-gray-900 dark:hover:text-white transition-colors">Terms</RouterLink>
          <RouterLink to="/security" class="text-sm text-gray-400 dark:text-white/30 hover:text-gray-900 dark:hover:text-white transition-colors">Security</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import MLogo from '@/components/ui/MLogo.vue'

const year = computed(() => new Date().getFullYear())

const footerLinks = [
  {
    heading: 'Product',
    links: [
      { label: 'AI Solutions', to: '/solutions' },
      { label: 'Services', to: '/services' },
      { label: 'Integrations', to: '/integrations' },
      { label: 'Changelog', to: '/resources' },
    ]
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Contact', to: '/contact' },
      { label: 'Blog', to: '/resources' },
    ]
  },
  {
    heading: 'Developers',
    links: [
      { label: 'Docs', to: '/resources' },
      { label: 'API Reference', to: '/resources' },
      { label: 'Status', to: '/' },
      { label: 'GitHub', to: '/' },
    ]
  },
]

const socials = [
  {
    label: 'Twitter / X',
    href: '#',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>`
  },
  {
    label: 'LinkedIn',
    href: '#',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
  {
    label: 'GitHub',
    href: '#',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`
  },
]
</script>
