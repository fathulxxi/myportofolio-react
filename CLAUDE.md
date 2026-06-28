# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # start dev server
bun build        # production build
bun lint         # ESLint
bun format       # Prettier (write)
```

No test suite is configured.

## Architecture

**Stack:** TanStack Start (SSR React framework) + TanStack Router (file-based) + TanStack Query + Tailwind CSS v4 + shadcn/ui (Radix primitives).

**Entry points:**
- `src/start.ts` — TanStack Start app instance with SSR error middleware
- `src/server.ts` — Cloudflare Worker/Nitro fetch handler; wraps the start entry and normalizes h3's swallowed 500s into a proper error HTML page

**Routing (`src/routes/`):** File-based, auto-generates `src/routeTree.gen.ts` — never edit that file by hand. `__root.tsx` is the only app shell; it wires `QueryClientProvider` and global `<head>` meta. The single route `index.tsx` composes all portfolio sections.

**Portfolio sections (`src/components/portfolio/`):** Each section is its own component (`Hero`, `About`, `Skills`, `Experience`, `Projects`, `Education`, `Navbar`, `Footer`). All are assembled in `src/routes/index.tsx`.

**UI primitives (`src/components/ui/`):** shadcn/ui components — extend, don't replace.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite`. Design tokens live in `src/styles.css`. Font is Plus Jakarta Sans (loaded from Google Fonts in `__root.tsx`).

**Vite config:** Managed by `@lovable.dev/vite-tanstack-config`. Do **not** manually add plugins it already includes (tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger). Pass any extra config through `defineConfig({ vite: { ... } })`.

**Path alias:** `@/` maps to `src/`.

## Lovable integration

This project is connected to [Lovable](https://lovable.dev). **Do not force-push, rebase, amend, or squash already-pushed commits** — rewriting published history breaks Lovable's project history on their side. Keep the main branch in a working state at all times.
