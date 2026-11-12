# Surge deploy (Fiesta homepage)

**Status check:** https://fiesta-cleaning-san-antonio.surge.sh returns **404 / project not found** until a successful publish. That is expected if deploy never finished.

Your PC must show a logged-in email:

```powershell
cd "c:\Users\lashk\OneDrive\Desktop\Fiesta Project\client"
npx surge@0.24.6 whoami
```

`Not Authenticated` = **nothing can go live** until you log in below.

---

## Easiest: run the deploy script (from repo root)

```powershell
cd "c:\Users\lashk\OneDrive\Desktop\Fiesta Project"
.\scripts\deploy-surge.ps1
```

It will open login if needed, build, then run `surge ./out`.

When you see:

```text
domain: fiesta-cleaning-san-antonio.surge.sh
```

**Press Enter.** Wait for `Success! Published to ...`.

---

## Manual steps

```powershell
cd "c:\Users\lashk\OneDrive\Desktop\Fiesta Project\client"
npx surge@0.24.6 login
npx surge@0.24.6 whoami
npm run deploy:surge
```

---

## Option B: GitHub Actions (no local deploy)

After you have a Surge account:

```powershell
npx surge@0.24.6 login
npx surge@0.24.6 token
```

In GitHub → **fiesta-cleaning-website** → **Settings** → **Secrets and variables** → **Actions**, add:

| Name | Value |
|------|--------|
| `SURGE_LOGIN` | your Surge email |
| `SURGE_TOKEN` | token from `surge token` |

Push to `development` or run workflow **Deploy to Surge** manually under Actions.

---

## Rules

- Publish **`client/out`** only (must contain `index.html`).
- Domain is set in `public/CNAME` → copied to `out/CNAME` on build.
