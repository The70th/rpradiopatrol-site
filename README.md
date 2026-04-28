# Rosedale Park Radio Patrol #23 — Website

This is the public website for Rosedale Park Radio Patrol #23, a volunteer neighborhood watch organization serving Rosedale Park in Detroit, MI (sanctioned by DPD). It is a static site — plain HTML, CSS, and JSX components served as-is, with no build step. It's hosted for free on GitHub Pages.

## Preview the site on your computer

You have two easy options:

1. **Just double-click `index.html`** — it will open in your browser. Everything works because the React libraries load from the internet (CDN).
2. **VS Code Live Server** — if you have VS Code with the "Live Server" extension installed, right-click `index.html` and choose "Open with Live Server". This auto-refreshes when you save changes.

## Editing text

Each section of the page is its own file. Open the file, find the text you want to change, edit it between the quotes or tags, and save. Then refresh your browser.

| Section on the page | File to edit |
|---|---|
| Top bar with logo and phone number | `Header.jsx` |
| Big hero photo and headline | `Hero.jsx` |
| Info strip under the hero | `InfoBar.jsx` |
| "How to Join" steps | `HowToJoin.jsx` |
| "Perks and Training" section | `PerksAndTraining.jsx` |
| Frequently Asked Questions | `FAQ.jsx` |
| Bottom of page | `Footer.jsx` |

The visual styling (colors, fonts, spacing) lives in `colors_and_type.css` and `styles.css`. You usually won't need to touch these.

## Swapping a photo

1. Drop your new image file into `assets/photos/`. Use a `.jpg` for photos, `.png` for graphics with transparency.
2. Open the `.jsx` file for the section that uses the photo.
3. Find the line that looks like `src="assets/photos/old-photo.jpg"` and change `old-photo.jpg` to your new filename.
4. Save and refresh the browser to confirm.

Tip: keep filenames lowercase with dashes (e.g. `summer-picnic.jpg`), no spaces.

## Publishing changes (going live)

This repo is wired up so that **any change pushed to the `main` branch automatically goes live** within about a minute. The workflow that does this lives at `.github/workflows/deploy.yml` — you don't need to run it manually.

To push changes:

```
git add .
git commit -m "Update FAQ wording"
git push
```

You can watch the deploy on GitHub under the **Actions** tab. Once it finishes, refresh the live site URL.

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
3. On GitHub, go to **Settings → Pages**, and under "Build and deployment" set the **Source** to **GitHub Actions**.
4. The first push will trigger the deploy. The site will be live at `https://YOUR-USERNAME.github.io/rpradiopatrol-site/`.

## Using a custom domain (e.g. rpradiopatrol.org)

1. In this folder, create a file named `CNAME` (no extension) containing just the bare domain on a single line, for example:
   ```
   rpradiopatrol.org
   ```
2. Commit and push. GitHub will pick it up automatically.
3. At your domain registrar, point the domain at GitHub Pages by adding these DNS records:
   - **A** records for `@` pointing to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`
4. Back on GitHub under **Settings → Pages**, enter the custom domain and check "Enforce HTTPS" once the certificate is ready.

## Questions?

Email **RPRadioPatrol@gmail.com**.
