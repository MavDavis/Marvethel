# Marvethel — Pending Work

Everything listed here is either missing, not wired up, or a placeholder. Checked items are done.

---

## 🔐 Auth & Security

- [ ] **Route guards** — anyone can visit `/dashboard` without being logged in
- [ ] **API client** — Bearer token is never attached to protected API requests
- [ ] **JWT refresh** — access token expires in 15min with no refresh flow; user gets silently logged out
- [ ] **Google OAuth** — button exists in UI, does nothing
- [ ] **GitHub OAuth** — button exists in UI, does nothing
- [ ] **Forgot password** — link on login page, page does not exist
- [ ] **Terms of Service** — linked in signup form, page does not exist
- [ ] **Privacy Policy** — linked in signup form, page does not exist

---

## 📊 Dashboard — Data & Actions

### Home
- [ ] Stats cards (AI calls, revenue, users) — hardcoded fake numbers
- [ ] Revenue chart — static SVG, not real data
- [ ] AI insight banner — hardcoded text
- [ ] Quick actions — no handlers

### Projects
- [ ] Project list — hardcoded array, not loaded from DB
- [ ] New Project button/modal — does nothing
- [ ] Project delete/edit — not implemented

### AI Tools
- [ ] Tool list — hardcoded, not loaded from DB
- [ ] Save tool changes — not wired to backend
- [ ] Deploy button — does nothing
- [ ] Run Test — fake `setTimeout` simulation, not a real API call

### Automation
- [ ] Workflow list — hardcoded, not loaded from DB
- [ ] Toggle active/inactive — does not persist
- [ ] New Workflow button — does nothing

### Integrations
- [ ] Connect buttons — all do nothing
- [ ] Connected state — never saved

### Analytics
- [ ] Metrics — hardcoded numbers
- [ ] Charts — static SVG paths, no real data

### Settings
- [ ] Profile → Save changes — does nothing
- [ ] Profile → Change avatar — no upload handler
- [ ] Team tab — completely empty
- [ ] Security tab — completely empty
- [ ] API Keys → Generate key — does nothing
- [ ] API Keys → Revoke — does nothing
- [ ] Billing → Manage billing — does nothing (needs Paystack integration)
- [ ] Danger Zone → Delete account — does nothing

---

## 🚀 Onboarding

- [ ] Project created in onboarding is never saved to the database
- [ ] Selected AI tool template is never saved

---

## 📄 Missing Pages

- [ ] `/auth/forgot` — Forgot Password page
- [ ] `/terms` — Terms of Service page
- [ ] `/privacy` — Privacy Policy page

---

## 🖥 Backend

- [ ] Password reset flow (generate token, send email, verify, update password)
- [ ] Email service — no transactional emails sent anywhere
- [ ] Avatar upload — no file storage (need Cloudinary or S3)
- [ ] Analytics endpoint — returns mock data, needs real DB aggregation
- [ ] Account deletion endpoint — not implemented
- [ ] Paystack webhook handler — not implemented

---

## 🎨 UX & Polish

- [ ] Loading states — no spinners when fetching real data from API
- [ ] Empty states — no UI for "you have no projects yet"
- [ ] Error handling — no user-facing message if an API call fails
- [ ] Render cold start warning — free tier takes ~50s to wake; no indicator shown to user
- [ ] Icons — `lucide-vue-next` was planned but emoji icons still used throughout
- [ ] Mobile responsiveness audit — dashboard not fully tested on small screens

---

## 💳 Payments (Paystack)

- [ ] Paystack checkout not wired to any button
- [ ] No plan upgrade flow
- [ ] No webhook to update user plan in DB after payment
- [ ] Billing tab in Settings shows static plan info only
