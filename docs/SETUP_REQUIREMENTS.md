# Marvethel — External Setup Requirements

Everything here is a third-party service or credential that needs to be created and configured before the corresponding feature can be built. Work through this list before or alongside development.

---

## ✅ Already Done

| Service | Purpose | Status |
|---|---|---|
| MongoDB Atlas | Database (free M0 cluster) | ✅ Connected |
| Render | Express API hosting | ✅ Live at marvethel.onrender.com |
| Netlify | Frontend hosting | ✅ Live at marvethel.netlify.app |
| GitHub | Source control + Render/Netlify auto-deploy | ✅ Connected |

---

## 🔐 Google OAuth (Login with Google)

**Where:** Google Cloud Console → [console.cloud.google.com](https://console.cloud.google.com)

**Steps:**
1. Create a new project (or use existing)
2. APIs & Services → OAuth consent screen → configure app name, logo, domain
3. APIs & Services → Credentials → Create OAuth 2.0 Client ID
4. Authorized JavaScript origins:
   - `https://marvethel.netlify.app`
   - `http://localhost:3000`
5. Authorized redirect URIs:
   - `https://marvethel.onrender.com/api/v1/auth/google/callback`
   - `http://localhost:5000/api/v1/auth/google/callback`

**Credentials needed:**
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Add to: `server/.env` and Render environment variables

---

## 🐱 GitHub OAuth (Login with GitHub)

**Where:** GitHub → Settings → Developer Settings → OAuth Apps → [github.com/settings/developers](https://github.com/settings/developers)

**Steps:**
1. New OAuth App
2. Homepage URL: `https://marvethel.netlify.app`
3. Authorization callback URL: `https://marvethel.onrender.com/api/v1/auth/github/callback`

**Credentials needed:**
```
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Add to: `server/.env` and Render environment variables

---

## 💳 Paystack (Payments & Subscriptions)

**Where:** [dashboard.paystack.com](https://dashboard.paystack.com)

**Steps:**
1. Create a Paystack account
2. Complete business verification
3. Dashboard → Settings → API Keys → copy keys
4. Set up Plans (Free, Pro $49/mo, Enterprise) under Products → Plans
5. Set up webhook URL: `https://marvethel.onrender.com/api/v1/billing/webhook`
6. Add webhook secret to Render env vars

**Credentials needed:**
```
PAYSTACK_SECRET_KEY=sk_live_xxxx        (or sk_test_xxxx for testing)
PAYSTACK_PUBLIC_KEY=pk_live_xxxx
PAYSTACK_WEBHOOK_SECRET=
```

Add to: `server/.env` and Render environment variables
Also add `VITE_PAYSTACK_PUBLIC_KEY` to Netlify environment variables (client needs the public key)

---

## 📧 Email Service (Transactional Emails)

Needed for: password reset, signup confirmation, weekly reports

**Recommended: Resend** (free 3,000 emails/month) — [resend.com](https://resend.com)

**Steps:**
1. Create account
2. Add & verify your domain (or use their test domain for now)
3. API Keys → Create API key

**Alternative: SendGrid** (free 100/day) — [sendgrid.com](https://sendgrid.com)

**Credentials needed:**
```
RESEND_API_KEY=re_xxxx
EMAIL_FROM=noreply@marvethel.ai
```

Add to: `server/.env` and Render environment variables

---

## 🖼 File Storage (Avatar Uploads)

Needed for: user profile picture uploads

**Recommended: Cloudinary** (free 25GB storage) — [cloudinary.com](https://cloudinary.com)

**Steps:**
1. Create account
2. Dashboard → copy Cloud Name, API Key, API Secret

**Credentials needed:**
```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Add to: `server/.env` and Render environment variables

---

## 🌐 Custom Domain (Optional but recommended)

**Where:** You already have Namecheap open in your browser

**Steps:**
1. In Netlify → Domain management → Add custom domain → `marvethel.ai` (or whatever you own)
2. Netlify gives you nameservers → update in Namecheap DNS
3. In Render → Custom domain → `api.marvethel.ai`
4. Update CORS in `server.js` and Netlify proxy to use `api.marvethel.ai`
5. Update Google & GitHub OAuth redirect URIs to use new domain

---

## 📋 Environment Variables Master List

### Render (server)
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=
JWT_REFRESH_EXPIRES_IN=7d
NODE_ENV=production
CLIENT_URL=https://marvethel.netlify.app
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
PAYSTACK_SECRET_KEY=
PAYSTACK_WEBHOOK_SECRET=
RESEND_API_KEY=
EMAIL_FROM=noreply@marvethel.ai
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Netlify (client build)
```
VITE_PAYSTACK_PUBLIC_KEY=
```
