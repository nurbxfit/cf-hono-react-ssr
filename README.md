# ⚡ Hono + React SSR Starter (Cloudflare Workers)

A minimal, fast SSR starter template for building modern web apps with:

- **Hono** – Lightning-fast routing for Cloudflare Workers
- **React** – Powerful component-based UI
- **Vite** – Instant dev server & HMR
- **TailwindCSS** – Utility-first styling
- **Cloudflare Workers** – Edge deployment

Enjoy SSR (server-rendered HTML), seamless client hydration, and hot reload for rapid development.

Disclaimer: This is a simple starter for learning and experimentation, not a full-fledged framework meant for production.

---

## 🚀 Features

- ⚡ **Edge-ready SSR** with Hono
- 🎨 **React + TailwindCSS** for modern UI
- 🔥 **Hot reload** via Vite dev server
- 🌀 **SSR + hydration** (Next.js-like, but tiny)
- 🌍 **Deploy directly** to Cloudflare Workers

---



---

## 🛠️ Development

```bash
# Install dependencies
bun install

# Start dev server (with HMR)
bun dev
```

Open:

- [http://localhost:5173](http://localhost:5173) – Vite dev server (HMR)
- [http://localhost:8787](http://localhost:8787) – Cloudflare Worker SSR server

---

## 🏗️ Build

```bash
bun run build
```

Creates a production build ready for deployment.

---

## 🌍 Deploy

1. Configure your Cloudflare account in `wrangler.toml`.
2. Deploy with:

    ```bash
    bun run deploy
    ```

Your SSR app will be live on Cloudflare Workers 🚀

---

## 🧪 Example: Counter App

```tsx
// src/App.tsx
import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-4">
      <h1 className="text-3xl font-bold">Hello Hono + React SSR</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Count: {count}
      </button>
    </div>
  )
}

```

---

## 📖 Resources

- [Hono Documentation](https://hono.dev/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)

---

## ⚠️ Disclaimer  
This is just me experimenting with **Hono + React SSR** on Cloudflare Workers.  
It’s not a production-ready framework — just a lightweight starter for simple  
landing pages or portfolio sites where you want **SEO-friendly SSR** without the  
complexity of Next.js. For larger apps with data fetching, authentication, or  
nested layouts, you’re probably better off using Next.js, Remix, or Inertia.js.  
