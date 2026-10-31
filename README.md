# Patwa Wave
Calm, simple site to learn Jamaican Patois. Live: https://patois-learn.pages.dev
- Change the name: `SITE_NAME` in app.js. Words: data.js. Audio: `python3 gen_audio.py` (edge-tts) then commit `audio/`.

## Optional Google sign-in (free, Supabase)
1. supabase.com → New project (free) named `patwa-wave`. Do NOT use the Ember project.
2. SQL Editor → paste `supabase-setup.sql` → Run.
3. Google Cloud console → APIs & Services → Credentials → Create OAuth client ID → Web application.
   Authorized redirect URI: `https://<your-project-ref>.supabase.co/auth/v1/callback`
4. Supabase → Authentication → Providers → Google → turn on, paste Google Client ID + Client Secret (secret only goes here).
5. Supabase → Authentication → URL Configuration → Site URL `https://patois-learn.pages.dev`, add it to Redirect URLs.
6. Supabase → Project Settings → API → copy Project URL + anon public key into `config.js`. Commit and redeploy.
