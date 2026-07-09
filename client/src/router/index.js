import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    // Marketing
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        { path: '', name: 'home', component: () => import('@/views/HomeView.vue') },
        { path: 'about', name: 'about', component: () => import('@/views/AboutView.vue') },
        { path: 'case-studies', name: 'case-studies', component: () => import('@/views/CaseStudiesView.vue') },
        { path: 'resources', name: 'resources', component: () => import('@/views/ResourcesView.vue') },
        { path: 'contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
        // Service pillars
        { path: 'services/digital-marketing', name: 'digital-marketing', component: () => import('@/views/services/DigitalMarketingView.vue') },
        { path: 'services/web-development', name: 'web-development', component: () => import('@/views/services/WebDevView.vue') },
        { path: 'services/ai-solutions', name: 'ai-solutions', component: () => import('@/views/services/AiSolutionsView.vue') },
        // Legacy redirects
        { path: 'solutions', redirect: '/services/ai-solutions' },
        { path: 'services', redirect: '/services/ai-solutions' },
      ]
    },

    // Auth
    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        { path: 'login', name: 'login', component: () => import('@/views/auth/LoginView.vue') },
        { path: 'signup', name: 'signup', component: () => import('@/views/auth/SignupView.vue') },
      ]
    },

    // Onboarding
    {
      path: '/onboarding',
      name: 'onboarding',
      component: () => import('@/views/onboarding/OnboardingView.vue'),
      meta: { requiresAuth: true }
    },

    // Dashboard
    {
      path: '/dashboard',
      component: () => import('@/layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        { path: '', name: 'dashboard', component: () => import('@/views/dashboard/DashboardHome.vue') },
        { path: 'ai-tools', name: 'ai-tools', component: () => import('@/views/dashboard/AiToolsView.vue') },
        { path: 'projects', name: 'projects', component: () => import('@/views/dashboard/ProjectsView.vue') },
        { path: 'automation', name: 'automation', component: () => import('@/views/dashboard/AutomationView.vue') },
        { path: 'integrations', name: 'integrations', component: () => import('@/views/dashboard/IntegrationsView.vue') },
        { path: 'analytics', name: 'analytics', component: () => import('@/views/dashboard/AnalyticsView.vue') },
        { path: 'settings', name: 'settings', component: () => import('@/views/dashboard/SettingsView.vue') },
      ]
    },

    // Catch-all
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router
