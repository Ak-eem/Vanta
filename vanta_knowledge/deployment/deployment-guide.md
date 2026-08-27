# Deployment Guide — Vercel + Supabase Stack

## Why this stack
Free tier covers real production traffic for a small-to-medium site.
Vercel handles frontend hosting + automatic SSL. Supabase handles
database + auth without running your own server.

## Step 1 — Push code to GitHub
Vercel deploys from a Git repo, not a local folder directly.
```
git init
git add .
git commit -m "initial commit"
gh repo create my-project --private --source=. --push
```
(Or push manually to a repo created on github.com.)

## Step 2 — Deploy frontend to Vercel
1. Go to vercel.com, sign in with GitHub
2. Import the repo
3. Vercel auto-detects the framework (Next.js, plain HTML, etc.) — confirm and deploy
4. Every push to `main` auto-redeploys — no manual redeploy step needed

CLI alternative:
```
npm i -g vercel
vercel login
vercel --prod
```

## Step 3 — Set up Supabase (database + auth)
1. Go to supabase.com, create a new project (free tier: 500MB DB, 50k monthly active users)
2. Copy the Project URL and anon/public API key from Settings → API
3. Never commit these to git — put them in environment variables

## Step 4 — Environment variables
Add secrets in Vercel dashboard (Project → Settings → Environment Variables),
not in code:
```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=your-key-here
```
Vercel injects these at build/runtime — never hardcode them in the repo.

## Step 5 — Connect a custom domain
1. Buy a domain (Namecheap, Porkbun — both cheap, no upsells)
2. In Vercel: Project → Settings → Domains → add domain
3. Vercel gives you DNS records (usually an A record or CNAME) to add at your registrar
4. SSL certificate is issued automatically once DNS propagates — no manual cert setup needed

## Step 6 — Monitoring (optional but recommended before real users)
- Sentry (sentry.io) — free tier catches JS errors and backend exceptions, alerts on new error types
- Vercel Analytics — built-in, basic traffic/performance data, no extra setup

## Step 7 — Final pre-launch check
- Test the live URL, not just localhost — some bugs only show up in production (env vars, CORS, absolute vs relative paths)
- Confirm HTTPS is active (padlock in browser, no mixed-content warnings)
- Confirm environment variables are set in Vercel, not just local `.env`
- Check mobile responsiveness on the live URL

## Common gotchas
- Forgetting to add env vars in Vercel (works locally, breaks live) — this is the #1 cause of "works on my machine" bugs after deploy
- CORS errors if Supabase URL isn't whitelisted for the new domain
- DNS propagation can take up to 24-48h, though usually much faster
