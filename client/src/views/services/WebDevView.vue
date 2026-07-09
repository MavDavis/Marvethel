<template>
  <div class="pt-20">
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide max-w-4xl">
        <MBadge variant="accent" class="mb-6">Web Development</MBadge>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Websites and apps built<br />to perform, not just impress
        </h1>
        <p class="text-gray-500 dark:text-white/50 text-xl leading-relaxed max-w-2xl mb-10">
          Fast, accessible, and conversion-optimised — we design and build digital products that work hard for your business, whether it's a marketing site, a web app, or a full e-commerce store.
        </p>
        <div class="flex gap-4">
          <RouterLink to="/contact"><MButton size="lg">Start a Project</MButton></RouterLink>
          <RouterLink to="/case-studies"><MButton variant="outline" size="lg">View Our Work</MButton></RouterLink>
        </div>
      </div>
    </section>

    <!-- Services grid -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black">
      <div class="container-wide">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="service in services" :key="service.title"
            class="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-7 hover:border-gray-300 dark:hover:border-white/20 transition-all">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-xl bg-gray-100 dark:bg-white/5">
              {{ service.emoji }}
            </div>
            <h3 class="font-display font-semibold text-gray-900 dark:text-white text-lg mb-2">{{ service.title }}</h3>
            <p class="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-4">{{ service.description }}</p>
            <ul class="flex flex-col gap-1.5">
              <li v-for="point in service.points" :key="point" class="flex items-center gap-2 text-xs text-gray-400 dark:text-white/40">
                <svg class="w-3.5 h-3.5 text-lime-600 dark:text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech stack strip -->
    <section class="section-padding border-b border-gray-200 dark:border-white/10">
      <div class="container-wide">
        <p class="text-xs font-semibold text-gray-400 dark:text-white/30 uppercase tracking-wider text-center mb-8">Technologies we work with</p>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tech in techStack" :key="tech"
            class="px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/60 text-sm font-medium">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MBadge from '@/components/ui/MBadge.vue'
import MButton from '@/components/ui/MButton.vue'
import CtaSection from '@/components/marketing/CtaSection.vue'

const services = [
  { emoji: '🌐', title: 'Marketing Websites', description: 'High-converting marketing sites and landing pages built for speed, SEO, and lead generation.', points: ['Custom design (no templates)', 'Core Web Vitals optimised', 'CMS integration (Sanity, Contentful)', 'A/B testing ready'] },
  { emoji: '⚙️', title: 'Web App Development', description: 'Full-stack web applications and SaaS product UIs built with modern frameworks.', points: ['Vue, React, or Next.js frontend', 'Node.js / Express backend', 'REST API & database design', 'Auth, roles & subscriptions'] },
  { emoji: '🛍️', title: 'E-commerce', description: 'Online stores built to sell — from Shopify customisation to fully bespoke commerce platforms.', points: ['Shopify development & themes', 'Custom e-commerce builds', 'Payment gateway integration', 'Inventory & order management'] },
  { emoji: '📱', title: 'Responsive & Mobile-First', description: 'Every build is tested across devices and screen sizes — pixel-perfect on mobile, tablet, and desktop.', points: ['Mobile-first approach', 'Cross-browser compatibility', 'Accessibility (WCAG 2.1)', 'Progressive Web App support'] },
  { emoji: '🔧', title: 'CMS & Integrations', description: 'Connect your site or app to the tools you already use — CRMs, email platforms, analytics, and more.', points: ['Headless CMS setup', 'HubSpot, Salesforce, Stripe', 'Third-party API integrations', 'Zapier / Make automation'] },
  { emoji: '🚀', title: 'Performance & Support', description: 'After launch we don\'t disappear. Ongoing performance monitoring, updates, and technical support.', points: ['Lighthouse score optimisation', 'Uptime monitoring', 'Monthly maintenance retainers', 'Dedicated Slack channel'] },
]

const techStack = ['Vue 3', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Shopify', 'Sanity', 'Vercel', 'AWS']
</script>
