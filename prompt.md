# Marvethel — Web App Build Prompt

Copy everything below into Claude (or your dev tool of choice) to build the site.

---

## PROMPT

Build a web application called **Marvethel** — an AI-powered product growth platform. It should feel like an "AI control center" for founders, product teams, marketers, and developers to build AI tools, automate workflows, and track growth — in the spirit of Vercel, Linear, Framer, OpenAI Playground, and Notion AI.

### Tech Stack
- **Frontend:** Vue.js 3 (Composition API), Vue Router, Pinia for state management
- **Backend:** MERN-style — Node.js + Express, MongoDB (Mongoose), REST API (or GraphQL if you recommend it)
- **Auth:** JWT-based auth with refresh tokens
- **Styling:** Tailwind CSS (dark-mode-first design system, see below)

### Brand Identity
- **Name:** Marvethel
- **Logo:** Wordmark "MARV" in white + "ETHEL" in neon lime, with an abstract "M" mark above it (organic blob shapes forming an M, with lime droplet accents)
- **Personality:** Futuristic, bold, energetic, tech-forward, AI-driven, startup-grade ambition
- **Tone:** Intelligent, confident, technical-but-approachable. Not playful, not corporate — "future-tech productivity."
- **Tagline direction:** "High-performance AI infrastructure for modern digital products" / "Operating system for AI product growth"

### Color System (dark-mode-first)
| Role | Color | Hex |
|---|---|---|
| Primary background / UI canvas | Black | `#000000` |
| Primary accent (CTAs, focus states, active states) | Neon Lime | `#D6FF01` |
| Text contrast / cards / light surfaces | White | `#FFFFFF` |
| Borders / secondary text / neutral UI | Grey | `#808080` |

### Typography
- **Display / Headlines:** Space Grotesk (or Eurostile-style geometric font)
- **Body:** Inter (or Satoshi / Neue Haas Grotesk)
- Wide, geometric, futuristic letterforms for headings; clean modern sans-serif for body text

### Design Language
- Dark mode primary, high contrast
- Rounded, slightly organic shapes echoing the logo's blob forms
- Neon lime used sparingly for emphasis (CTAs, active states, chart highlights, focus borders) — not as a dominant fill color
- Minimal but powerful — sharp typography, generous spacing, bold visual hierarchy
- 8px spacing grid
- Breakpoints: Desktop 1440+, Laptop 1200, Tablet 768, Mobile 375

### Images
I don't have my own photography or product screenshots. Use **realistic, professional stock-style imagery** (people in modern tech/office settings, abstract AI/data visuals, dashboard mockup screenshots) rather than illustrations or cartoon graphics — sourced from a royalty-free provider (e.g., Unsplash) or AI-generated to look photorealistic. Avoid generic "stock photo" clichés (forced smiles, obvious staged shots). Favor moody, high-contrast photography that fits the dark futuristic palette.
A logo folder is added for logo images though.
---

### Site Structure

**Marketing pages** (public, for lead generation)
- Homepage — Hero (headline, subheadline, primary CTA) → Feature section (AI development, AI integrations, growth analytics) → Use cases (startups, SaaS, digital businesses) → Case studies (results-driven proof) → CTA section ("Start building")
- About
- AI Solutions
- Services
- Case Studies
- Resources
- Contact

**Auth / onboarding**
- Login
- Signup
- Onboarding flow: Signup → Product intro → Create first project → Connect product → Build first AI tool
- Product Tour

**Dashboard** (authenticated app, left-sidebar nav)
- **Dashboard Home** — header with search/notifications/user menu; main area with usage overview, recent activity, quick actions; right panel with AI recommendations/tips
- **AI Tools / AI Tool Builder** — left panel (tool library), main canvas (prompt builder, model selection, testing area), right panel (output preview, settings)
- **Projects / Project Workspace** — header (project name, team members, status), main content (active AI tools, automation flows), side panel (project analytics)
- **Automation** — visual workflow builder with AI triggers
- **Integrations** — connect APIs, CMS, databases, marketing tools
- **Analytics** — top: metrics overview; middle: growth graphs + AI performance charts; bottom: insight recommendations
- **Settings** — Profile, Team Management, Billing, API Keys, Security

### Core UX Flows to Implement
1. **Onboarding:** Signup → intro → create first project → connect product → build first AI tool
2. **AI Feature Creation:** select project → open AI builder → define prompt → test output → deploy
3. **Integration:** choose platform → connect API → configure automation → activate
4. **Performance Tracking:** open analytics → view metrics → receive AI insights → optimize

### Component System
- Buttons: Primary (lime fill, black text), Secondary (outline, lime or grey border)
- Cards: dark background, rounded corners
- Sidebar navigation (left, persistent in dashboard)
- Input fields: dark fill, lime focus border
- Large prompt/editor fields for AI tool building
- Charts: dark background, lime highlight lines/bars
- Tables: minimal styling, grey borders
- Floating notification/toast alerts
- Modals: dark overlay, lime primary action button

### UX Philosophy
- Clarity over complexity
- Power without confusion
- AI assistance surfaced contextually throughout (tips, recommendations, suggestions)
- Target complexity: intermediate — advanced capabilities, but guided workflows

---

### What I need from you
1. Set up the project scaffold (Vue 3 frontend + Express/MongoDB backend) with a clear folder structure.
2. Build out the design system first (colors, typography, base components) as reusable Tailwind config + Vue components.
3. Build the marketing homepage fully as the first deliverable, then the auth flow, then the dashboard shell + Dashboard Home.
4. Use realistic placeholder imagery per the guidance above.
5. Keep the API RESTful and documented so I can plug in real data later (auth, projects, AI tools, analytics endpoints as needed).
6. Make everything responsive down to mobile (375px).

Ask me clarifying questions only if something above is ambiguous — otherwise proceed with your best judgment and flag any assumptions you make.

---
