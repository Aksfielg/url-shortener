# URL Shortener

A lightweight URL shortener built with React, Vite and Supabase. This project provides user authentication, creation of short links (with optional custom slugs), QR code storage, and analytics (clicks by device and location).

## Tech stack
- Frontend: React 18, Vite
- UI: Tailwind CSS (project contains Tailwind config and styles)
- Backend / Auth / Storage / DB: Supabase (Postgres + storage + auth)
- Charts: Recharts
# URL Shortener

A lightweight URL shortener built with React, Vite and Supabase. The app supports user signup/login, creating short links (custom or auto-generated), storing QR codes, and viewing analytics (clicks by device and location).

---

## Quick start

Prerequisites:
- Node.js 18+ (or current LTS)
- npm (or use pnpm/yarn)

Install and run from the project folder:

```bash
cd "url-shortener"
npm install
npm run dev
# then open http://localhost:5173
```

If you prefer starting from the repository root, you can run the delegated script added to the root package.json:

```bash
# from repository root
npm run dev
```

Build & preview production bundle:

```bash
npm run build
npm run preview
```

---

## Tech stack
- React 18 + Vite
- Tailwind CSS for styling
- Supabase for Auth, Postgres, and Storage
- Recharts for charts
- Framer Motion for animations

## Features
- User signup / login via Supabase
- Create short links with optional custom slugs
- Generate and store QR codes in Supabase Storage
- Record clicks (city, country, device) and display analytics
- Dashboard for managing links and viewing stats

---

## Environment / Supabase setup

1. Create a Supabase project at https://app.supabase.com/ and copy your project URL and anon key.
2. Create the required tables (example SQL):

```sql
create extension if not exists "uuid-ossp";

create table if not exists urls (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid,
  title text,
  original_url text not null,
  custom_url text,
  short_url text,
  qr text,
  created_at timestamptz default now()
);

create table if not exists clicks (
  id uuid default uuid_generate_v4() primary key,
  url_id uuid references urls(id) on delete cascade,
  city text,
  country text,
  device text,
  created_at timestamptz default now()
);
```

3. Create storage buckets used by the app (via Supabase UI):
- `qrs` (public) — stores QR images
- `profile_pic` (public) — stores user avatars

4. Add environment variables in `url-shortener/.env` or in your host provider:

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_KEY=your-anon-key
```

Note: Use the anon/public key for client-side operations. Keep service role keys secret and only use them server-side.

---

## Scripts
- `npm run dev` — runs Vite dev server (inside `url-shortener` folder)
- `npm run build` — builds production bundle
- `npm run preview` — serves the built output for verification

From the repository root we've added delegated scripts so `npm run dev` will run the app in `url-shortener`.

---

## Project structure (high level)

- `src/main.jsx` — app entry
- `src/App.jsx` — routes and router
- `src/context.jsx` — app context & auth state
- `src/layouts/` — `app-layout.jsx` (shared layout)
- `src/pages/` — `landing.jsx`, `auth.jsx`, `dashboard.jsx`, `link.jsx`, `redirect-link.jsx`
- `src/components/` — reusable components (forms, header, link-card, UI primitives in `ui/`)
- `src/db/` — Supabase wrappers (`supabase.js`, `apiAuth.js`, `apiUrls.js`, `apiClicks.js`)
- `src/hooks/` — `use-fetch.js` and other hooks
- `src/lib/` — `utils.js` and helpers

Refer to the source for implementation details; the code is organized for small components and simple API wrappers around Supabase.

---

## Redirect & click recording flow

1. Visitor opens a short link handled by `redirect-link.jsx`.
2. App resolves the long URL via `apiUrls.getLongUrl`.
3. The client records click data via `apiClicks.storeClicks` (device via `ua-parser-js`, geo via `ipapi.co`), then redirects.

Tip: For reliability and to avoid exposing keys, consider moving click recording to a serverless function that records the click and issues a 302 redirect.

---

## Troubleshooting
- If `npm run dev` fails at the repository root, run the commands inside `url-shortener`:

```bash
cd url-shortener
npm install
npm run dev
```

- Common issues:
  - Missing `.env` variables — check `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY`.
  - Port in use — Vite defaults to 5173; set `PORT` env var or close conflicting process.

---

## Deployment
- Static frontend: Vercel, Netlify, Cloudflare Pages (set env vars in provider settings).
- For server-side click recording: use Vercel Serverless Functions, Netlify Functions, or an edge function and call Supabase using a service role key kept in server secrets.

---

## Contributing
- Fork the repo, create a feature branch, push, and open a PR. Keep changes focused and follow the existing style.

## License
- No license included. Add a `LICENSE` file if you plan to publish.

---

If you'd like, I can also:
- Add an example `.env.example` file.
- Add SQL migration files under a `db/` folder.
- Add a serverless redirect endpoint to record clicks server-side.

Tell me which of these you'd like next.
