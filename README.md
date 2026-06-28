# M. Fathul Ilham — Portfolio

Personal portfolio website built with React, TanStack Router, Tailwind CSS, and shadcn/ui. Deployed on Firebase Hosting.

**Live:** https://fathul-portofolio.web.app

## Tech Stack

- [React 19](https://react.dev)
- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Development

```bash
npm install
npm run dev
```

## Deploy to Firebase

```bash
npm run build:firebase
firebase deploy --only hosting
```

The `build:firebase` script uses a CSR-only Vite config (`vite.firebase.config.ts`) that outputs to `dist/`, which Firebase serves as a static SPA.
