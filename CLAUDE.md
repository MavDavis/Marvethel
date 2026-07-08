# CLAUDE.md — Marvethel Project Instructions

This file is read automatically by Claude Code at the start of every session in this repo. It exists so you don't need to re-explain the project each time. Follow it by default; only ask me when something below doesn't cover the situation.

---

## Project Overview

**Marvethel** — an AI-powered product growth platform. Dark-mode-first, futuristic SaaS dashboard (think Vercel/Linear/Framer/OpenAI Playground). See `/docs/marvethel-build-prompt.md` in this repo for the full design & product brief — read it before starting work if it's your first time in this codebase.

## Tech Stack

- **Frontend:** Vue 3 (Composition API, `<script setup>`), Vue Router, Pinia, Tailwind CSS
- **Backend:** Node.js + Express, MongoDB + Mongoose
- **Auth:** JWT (access + refresh tokens)
- **Package manager:** npm (unless a lockfile says otherwise — check before assuming)

## Brand Tokens (don't redefine these — reuse them)

```
--color-bg:      #000000   (black, primary background)
--color-accent:  #D6FF01   (neon lime, CTAs/focus/active states only — use sparingly)
--color-text:    #FFFFFF   (white)
--color-border:  #808080   (grey, borders/secondary text)

Font display: Space Grotesk
Font body:    Inter
Spacing grid: 8px
Breakpoints:  375 / 768 / 1200 / 1440
```

## How I want you to work

- **Default to autonomous execution.** If a task is reasonably well-specified, just do it end-to-end — scaffold, write, test, run — rather than stopping to ask "should I proceed?" at each step.
- **Batch your questions.** If you genuinely need input, ask everything you need in one go, not one question per message.
- **Make and state assumptions.** When something is ambiguous, pick the sensible default, note the assumption in your summary, and keep moving. Don't block on it.
- **Always verify your own work before reporting done:** run the app/tests, check for lint/type errors, and fix them yourself rather than handing me a broken build.
- **Commit-sized chunks.** Do meaningful units of work per turn (e.g. "full auth flow" not "one line of a login form"), so I'm not babysitting individual file edits.
- **Don't ask permission for:** creating files, installing npm packages we already depend on the ecosystem for, running the dev server, running tests, refactoring within a file you're already editing.
- **Do ask permission for:** deleting files/branches, changing the tech stack or major architecture, adding a new paid/external service or API key requirement, force-pushing, anything destructive to data.

## Project Conventions

- **Folder structure:**
  ```
  /client        → Vue 3 app
    /src
      /components
      /views
      /stores      (Pinia)
      /router
      /assets
  /server        → Express API
    /routes
    /models
    /controllers
    /middleware
  /docs          → design brief, this file, any specs
  ```
- **Components:** PascalCase filenames, one component per file, co-locate small helper components in the same folder as their parent view if not reused elsewhere.
- **API routes:** RESTful, versioned under `/api/v1/...`.
- **Styling:** Tailwind utility classes in-template; extract to a component only when a pattern repeats 3+ times.
- **Images:** since there's no real product photography yet, use realistic placeholder imagery (Unsplash-style or AI-generated photorealistic — not illustrations/cartoons) and mark them clearly with a `// TODO: replace with real asset` comment so they're easy to find later.
- **Env vars:** never hardcode secrets. Add new required vars to `.env.example` immediately when you introduce them.

## Definition of "Done" for a task

A task isn't done until:
1. It runs without errors (`npm run dev` / `npm run build` both succeed)
2. It's responsive at all four breakpoints
3. It matches the brand tokens above (no off-palette colors, no wrong fonts)
4. You've given me a short summary: what changed, what I should test, and any assumptions you made

## Current Priorities (edit this section as the project evolves)

1. Design system + reusable base components (buttons, cards, inputs, nav)
2. Marketing homepage
3. Auth flow (signup/login/onboarding)
4. Dashboard shell + Dashboard Home
5. AI Tool Builder
6. Remaining dashboard pages (Projects, Automation, Integrations, Analytics, Settings)

---

*Keep this file up to date as decisions change — it's cheaper to fix instructions here than to repeat corrections every session.*
