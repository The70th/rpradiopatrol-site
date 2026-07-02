# Rosedale Park Radio Patrol #23 — Website

This is the public website for Rosedale Park Radio Patrol #23, a volunteer neighborhood watch organization serving Rosedale Park in Detroit, MI (sanctioned by DPD). It is a static site — plain HTML, CSS, and JSX components served as-is, with no build step. It's hosted for free on Vercel and lives at **rpradiopatrol.org**.

The site has two pages:

- **`index.html`** — the main page. Everything described below is about this page.
- **`apply.html`** — the membership application form. Its body text is written directly in that file (not in `content.js`), but it shares the exact same header (`Header.jsx`) as the main page, so header changes show up on both pages automatically.

## Preview the site on your computer

You have two easy options:

1. **Just double-click `index.html`** — it will open in your browser. Everything works because the React libraries load from the internet (CDN).
2. **VS Code Live Server** — if you have VS Code with the "Live Server" extension installed, right-click `index.html` and choose "Open with Live Server". This auto-refreshes when you save changes.

## Editing text

All of the wording on the main page lives in one file, **`content.js`** — see `EDITING_COPY.md` for the simple how-to. The table below shows which file *builds* each section, for when you need to change a photo or the layout rather than the words.

| Section on the page | File to edit |
|---|---|
| Header — logo, menu links, and the gold "Apply Now" button (shared by both pages; collapses to a hamburger menu on phones) | `Header.jsx` |
| Big hero photo and headline | `Hero.jsx` |
| Info strip under the hero | `InfoBar.jsx` |
| "How to Join" steps | `HowToJoin.jsx` |
| "Perks and Training" section | `PerksAndTraining.jsx` |
| Frequently Asked Questions | `FAQ.jsx` |
| Bottom of page | `Footer.jsx` |

A note about the footer: it no longer shows the **Emergency · 911** line or the **RPRadioPatrol@gmail.com** link. That column was removed on purpose — a comment in `Footer.jsx` marks the spot where a "Contact Us" form is planned in a future update.

The visual styling (colors, fonts, spacing) lives in `colors_and_type.css` and `styles.css`. You usually won't need to touch these.

## Swapping a photo

1. Drop your new image file into `assets/photos/`. Use a `.jpg` for photos, `.png` for graphics with transparency.
2. Open the `.jsx` file for the section that uses the photo.
3. Find the line that looks like `src="assets/photos/old-photo.jpg"` and change `old-photo.jpg` to your new filename.
4. Save and refresh the browser to confirm.

Tip: keep filenames lowercase with dashes (e.g. `summer-picnic.jpg`), no spaces.

## Publishing changes (going live)

The live site is hosted on **Vercel** at **rpradiopatrol.org**. Vercel watches this GitHub repository, so **any change pushed to the `main` branch automatically goes live** within about a minute. There is nothing to run manually (the small `vercel.json` file holds the hosting settings — leave it alone).

To push changes:

```
git add .
git commit -m "Update FAQ wording"
git push
```

You can watch the deploy at **vercel.com** — log in, open the project, and look at the **Deployments** tab. Once it shows "Ready", refresh rpradiopatrol.org.

Heads-up: the repo also contains an older GitHub Pages workflow at `.github/workflows/deploy.yml`. It publishes a legacy/mirror copy of the site on GitHub Pages, but that is **not** the real site — Vercel + rpradiopatrol.org is the one that matters. The workflow file is left in place on purpose; you can ignore it.

## First-time setup (only once)

If this folder hasn't been pushed to GitHub yet:

1. Create a new empty repository on github.com (e.g. named `rpradiopatrol-site`).
2. From this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/rpradiopatrol-site.git
   git push -u origin main
   ```
3. At **vercel.com**, log in (signing in with the GitHub account is easiest), choose **Add New → Project**, and import the `rpradiopatrol-site` repository. Accept the defaults — there is no build step.
4. From then on, every push to `main` deploys automatically.

## Using a custom domain (e.g. rpradiopatrol.org)

The domain is managed in **Vercel**, not GitHub. `rpradiopatrol.org` is already set up this way — you only need these steps if the domain or the registrar ever changes:

1. In the Vercel dashboard, open the project and go to **Settings → Domains**, then add the domain (e.g. `rpradiopatrol.org`).
2. Vercel will show the exact DNS records to add at the domain registrar (typically one **A** record for the bare domain and a **CNAME** for `www`). Copy them into the registrar's DNS settings.
3. Wait for the check next to the domain in Vercel to turn green. HTTPS is set up automatically — nothing extra to do.

## Questions?

Email **RPRadioPatrol@gmail.com**.
