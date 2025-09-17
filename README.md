# 🚀 Career Catalyst — Landing & UI Boilerplate

[Live demo 🔗](https://career-catalyst-x.vercel.app)

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg) ![Build](https://img.shields.io/badge/build-vite-green) ![License](https://img.shields.io/badge/license-MIT-lightgrey)

A modern, responsive landing page and UI system built with **React + TypeScript + Vite** and a component-first design using **shadcn/ui** + **Radix** primitives. This repo provides a polished starter with a hero, features, dashboard mock, and accessible UI primitives.

---

## ✨ Highlights

- Clean, component-driven layout with `src/components/*`
- TailwindCSS utility-first styling and animation presets
- Ready-to-use UI primitives (dialogs, toasts, tooltips, forms)
- TanStack Query for data fetching patterns
- React Router for routing and page scaffolding
- Opinionated structure that’s production-ready for static hosting (Vercel, Netlify)

---

## 🗂️ Repo Structure (important files)

```

/src
/components    # UI + sections (Hero, Features, Dashboard)
/hooks         # small reusable hooks (use-mobile, use-toast)
/pages         # Index, NotFound
/assets        # images used by landing
main.tsx
App.tsx

package.json
tailwind.config.ts
postcss.config.js
vite.config.ts
README.md (this file)

````

---

## 💻 Tech Stack

- React 18 + TypeScript  
- Vite (dev server + build)  
- TailwindCSS + tailwind-merge + animations  
- shadcn/ui + Radix primitives  
- React Router (v6)  
- TanStack Query (v5)  
- React Hook Form + Zod  
- Sonner / custom toast system  

---

## ▶️ Quick Start (local)

```bash
# 1. clone
git clone <repo-url>
cd <repo>

# 2. install
npm ci
# or
npm install

# 3. run dev server
npm run dev
# Open http://localhost:5173
````

### Build for production

```bash
npm run build
npm run preview   # local preview of production build
```

---

## 🔧 Environment & Deployment

This is a static SPA suitable for Vercel or Netlify. If you add API backends, use environment variables like:

```
VITE_API_URL=https://api.example.com
VITE_SENTRY_DSN=your_sentry_dsn
```

On Vercel, point the project to this repo and the default `npm run build` is supported.
Demo link: [https://career-catalyst-x.vercel.app](https://career-catalyst-x.vercel.app)

---

## ✅ What’s inside

* **Organized** components split into `layout`, `sections`, and `ui` primitives
* **Polished UI** built with shadcn patterns — consistent and accessible
* **No server code** — purely frontend, safe for open source
* **Production-ready** — already works as a hosted static SPA

---

## ⚠️ Recommended improvements

1. **Add tests:** Vitest + React Testing Library
2. **CI/CD:** GitHub Actions for lint, typecheck, and build preview
3. **Dependabot / Renovate:** keep dependencies updated
4. **Accessibility:** axe/lighthouse checks for contrast & keyboard navigation
5. **Add an `.env.example`:** document environment variables
6. **Enable strict mode in TypeScript**
7. **Storybook or playground** for component QA

---

## 📈 Advanced improvements

* Add SSR (Next.js) if SEO is critical
* Add analytics & feature flags for experiments
* Integrate authentication flows with `VITE_API_URL`

---

## 🤝 Contributing

* Prettier/ESLint are already present — keep commits small and atomic
* Branch naming: `feature/*`, `fix/*`, `chore/*`
* Use PRs and require CI checks before merge

---

## 🧾 License

MIT — see LICENSE file (or add one if missing).

---

> Generated README with ✨ polish & improvements