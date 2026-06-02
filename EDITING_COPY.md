# Editing the Website's Words

All of the text on the Rosedale Park Radio Patrol website now lives in **one file: `content.js`**.
You never have to touch the design, the layout, or any of the component files to change wording.

## How to change any text on the site

1. Open **`content.js`**.
2. The file is organized top-to-bottom in the **same order as the website**:
   `header` → `hero` → `infoBar` → `howToJoin` → `perks` → `faq` → `patrolMap` → `footer`.
   Each section has a comment line (the `/* ---- ... ---- */` lines) telling you what it is.
3. Find the words you want to change and edit **only the text between the quotation marks**.
4. Save, then publish the way you normally do (commit/push to GitHub; Vercel redeploys automatically).

### Example

To change the big headline at the top of the site, find this in the `hero` section:

```js
headlineTop: "Neighbors looking",
headlineBottom: "out for neighbors.",
```

Change it to whatever you like:

```js
headlineTop: "Looking out for",
headlineBottom: "Rosedale Park.",
```

That's the whole job.

## Three rules that keep things from breaking

1. **Keep both quotation marks** around your text: `title: "Your words here",`
2. **Keep the comma** at the end of the line.
3. **Apostrophes are fine** — just type them normally (`it's`, `you'll`).
   Do **not** type a plain double-quote `"` inside your words. If you need a quote mark
   inside a sentence, use single quotes instead.

If you only edit the words between the quotes and follow those three rules, you **cannot**
break the layout from this file. The worst case is a typo in the wording, which you just fix
the same way.

## Lists (FAQ questions, the "how it works" steps, training sessions)

A few sections are lists, written like this (the FAQ is the clearest example):

```js
items: [
  { q: "What's the time commitment?", a: "Two hours per month..." },
  { q: "Who can join?",               a: "Any Rosedale Park resident..." },
],
```

- To **edit** an entry, change the words between the quotes.
- To **add** an entry, copy a whole `{ ... },` line and paste it as a new line, then edit it.
  Keep the curly braces `{ }` and the comma at the end.
- To **remove** an entry, delete its whole `{ ... },` line.

The same pattern applies to the `infoBar.steps`, the `perks.training.sessions`, the
`patrolMap.boundaries`, and the `footer.neighbors` lists.

## What is NOT in this file

- **Colors, fonts, and spacing** — those live in `colors_and_type.css` and `styles.css`.
- **The application form** (`apply.html`) — that's a separate page with its own text, including
  the legally-required Privacy Act notice. Ask before changing that page's wording.
- **Photos and the logo** — those are image files in the `assets/` folder.

## How it works under the hood (for a future maintainer)

`index.html` loads `content.js` *before* it loads the component files. `content.js` defines a
single global object, `window.RP`, that holds every piece of text. Each component
(`Header.jsx`, `Hero.jsx`, etc.) reads its words from `RP` instead of having them written
inline. So there is exactly one source of truth for copy, and the components only handle layout.

To add a brand-new piece of editable text: add a key in the right section of `content.js`
(e.g. `newLine: "Some words",`) and reference it in the matching component as `{RP.section.newLine}`.
