<!-- Banner / Logo -->
<p align="center">
  🚀
</p>

<h1 align="center"> Career Catalyst — Landing & UI Boilerplate</h1>

<p align="center">
  A modern, responsive landing page + UI system built with <b>React + TypeScript + Vite</b> and powered by <b>shadcn/ui</b> + <b>Radix</b> primitives.
</p>

<p align="center">
  <a href="https://career-catalyst-x.vercel.app" target="_blank">🌐 Live Demo</a> ·
  <a href="#✨-highlights">✨ Highlights</a> ·
  <a href="#🗂️-repo-structure">📂 Structure</a> ·
  <a href="#▶️-quick-start-local">⚡ Quick Start</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.0.0-blue.svg?style=for-the-badge" />
  <img src="https://img.shields.io/badge/build-vite-green?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/license-MIT-lightgrey?style=for-the-badge" />
</p>

---

## ✨ Highlights

✅ Component-driven layout with `src/components/*`  
🎨 TailwindCSS utility-first styling + animation presets  
🧩 Ready-to-use UI primitives (dialogs, toasts, tooltips, forms)  
⚡ Data fetching patterns with TanStack Query  
🛣️ Routing powered by React Router v6  
📦 Production-ready static build (Vercel, Netlify)

---

## 🗂️ Repo Structure

```bash
/src
  /components    # UI + sections (Hero, Features, Dashboard)
  /hooks         # reusable hooks (use-mobile, use-toast)
  /pages         # Index, NotFound
  /assets        # images & static assets
  main.tsx
  App.tsx

package.json
tailwind.config.ts
postcss.config.js
vite.config.ts
README.md
````

---

## 💻 Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,typescript,vite,tailwind,vercel,github" />
</p>

* **Framework:** React 18 + TypeScript
* **Build Tool:** Vite
* **Styling:** TailwindCSS, `tailwind-merge`, animation presets
* **UI System:** shadcn/ui + Radix primitives
* **Routing:** React Router v6
* **Data Layer:** TanStack Query v5
* **Forms:** React Hook Form + Zod
* **Notifications:** Sonner + custom toasts

---

## ▶️ Quick Start (Local)

```bash
# 1. Clone
git clone https://github.com/Harshsfd/career-catalyst-x.git
cd career-catalyst

# 2. Install dependencies
npm install
# or
npm ci

# 3. Start dev server
npm run dev
# App will run on http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview   # preview production build locally
```

---

## 🔧 Environment & Deployment

This is a **static SPA**, so hosting on **Vercel** or **Netlify** works instantly.

For API integrations, define environment variables:

```bash
VITE_API_URL=https://api.example.com
VITE_SENTRY_DSN=your_sentry_dsn
```

* On **Vercel**, simply connect the repo → add env vars in *Settings → Environment Variables* → Deploy 🚀
* Default build command: `npm run build`

🔗 Live Demo: [career-catalyst-x.vercel.app](https://career-catalyst-x.vercel.app)

---

## ✅ What’s Inside

* Organized components: `layout`, `sections`, `ui` primitives
* Consistent + accessible UI with shadcn patterns
* No server-side code → safe for open-source distribution
* Production-ready out of the box

---

## ⚠️ Recommended Improvements

1. Add **Vitest + React Testing Library** for testing
2. CI/CD via **GitHub Actions** (lint, typecheck, build)
3. Enable **Dependabot / Renovate** to keep dependencies fresh
4. Run **axe / Lighthouse** audits for accessibility & SEO
5. Provide `.env.example` with documented vars
6. Enable **strict mode** in TypeScript
7. Add **Storybook** or a component playground for QA

---

## 📈 Advanced Improvements

* Upgrade to **Next.js** for SEO + SSR if needed
* Add analytics + feature flag system
* Implement auth flows with `VITE_API_URL`

---

## 🤝 Contributing

1. Fork this repo
2. Create a new branch: `feature/*`, `fix/*`, or `chore/*`
3. Run Prettier + ESLint before committing
4. Open a PR 🚀

---

## 🧾 License

MIT © \Harsh Bhardwaj 
See [LICENSE](LICENSE) for details.

---

<p align="center">✨ Designed with React + Tailwind + shadcn/ui ✨</p>