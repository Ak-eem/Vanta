# Phone sync (about 5 minutes, free)

VANTA keeps your people, claims and notes in sync between your laptop and phone. Everything is locked on the
device with a passphrase before it leaves; the cloud only stores scrambled data. Activity history, screen data and
program logs never sync.

## 1. Create the free sync service (Supabase)
1. Make a project at supabase.com. Open **SQL editor**, paste `vanta_sync/supabase.sql`, run it.
2. **Authentication > Users > Add user**: pick an email + password (this is only the key to the box, not your vault passphrase).
   Then **Authentication > Providers > Email**: turn off "Allow new users to sign up".
3. **Project settings > API**: copy the Project URL and the `anon` public key.

## 2. Laptop
Add to `.env` (the passphrase line is optional; leave it out to type it in Settings > Phone sync):
```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_KEY=<anon key>
SUPABASE_EMAIL=<the user you added>
SUPABASE_PASSWORD=<its password>
```
Restart VANTA, open Settings > Phone sync, choose a vault passphrase (8+ characters) and press Unlock.

## 3. Phone
Host `ui/dist` (built with `VANTA_BASE=./ npm run build`) on any static host (Vercel, GitHub Pages), or open
`http://<laptop-ip>:5000/app/phone.html` on the same Wi-Fi. Open it, enter the same four values plus the same vault
passphrase, then "Add to Home Screen". It reopens without asking again.

Notes you write with **Ask laptop** show up as a nudge on the laptop. Lose the passphrase and the data cannot be recovered.
Prefer no cloud at all? Set `VANTA_SYNC_FOLDER` to a folder kept in sync by Syncthing instead.
