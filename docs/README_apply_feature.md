# Digital Membership Application — README

**Feature:** Online application form for new Radio Patrol members  
**Live URL:** `/apply.html` (same domain as the main site)  
**Repo:** `github.com/The70th/rpradiopatrol-site`  
**Last updated:** April 2026

---

## What this does

Prospective members fill out an application form on the website, draw their
signature, and click Submit. The system automatically:

1. Fills in the official DPD application PDF with the applicant's information
2. Embeds their digital signature in the signature block
3. Emails the completed PDF to RPRadioPatrol@gmail.com as an attachment

You receive a ready-to-forward email in your inbox. Print it, sign it as
President, and mail/fax/hand-deliver to DPD as you normally would.

The applicant sees a confirmation message. They do not receive a copy by email
(this matches the existing process — DPD results go to you, not the applicant).

---

## Files in this feature

```
/apply.html                        The form page (what applicants see)
/api/submit-application.js         Serverless function — generates PDF + sends email
/api/template.pdf                  The official DPD application PDF (blank)
/api/package.json                  Node.js dependencies for the serverless function
/api/field-coords.js               Field coordinate map (where text lands on the PDF)
/vercel.json                       Hosting configuration
```

---

## How to run it locally (for testing)

You need Node.js installed. If you don't have it:
https://nodejs.org → download the "LTS" version → install it.

Then open a terminal in the project folder and run:

```bash
npm install
vercel dev
```

This starts a local server at `http://localhost:3000`. Open that in your
browser to test the form. Submissions in local mode will still try to send
email, so set up environment variables first (see below).

---

## Environment variables (required)

These are secret values the serverless function needs to send email. They are
**never stored in the code** — only in the Vercel dashboard.

| Variable | Value | Where to get it |
|---|---|---|
| `GMAIL_APP_PASSWORD` | A 16-character app password | See instructions below |
| `FROM_EMAIL` | `RPRadioPatrol@gmail.com` | Already known |
| `TO_EMAIL` | `RPRadioPatrol@gmail.com` | Already known |

### How to create a Gmail App Password

This is a special password just for this app. It is not your regular Gmail
password. You can revoke it at any time without changing anything else.

1. Go to https://myaccount.google.com and sign in as `RPRadioPatrol@gmail.com`
2. Click **Security** in the left sidebar
3. Under "How you sign in to Google," click **2-Step Verification**
   (you must have 2-Step Verification turned on — if it's off, turn it on first)
4. Scroll to the bottom of that page and click **App passwords**
5. In the "App name" box, type: `Radio Patrol Website`
6. Click **Create**
7. Google will show you a 16-character password (e.g. `abcd efgh ijkl mnop`)
8. Copy it immediately — Google will never show it again
9. Go to the Vercel dashboard → your project → Settings → Environment Variables
10. Add a variable named `GMAIL_APP_PASSWORD` and paste the password as the value

### How to set environment variables in Vercel

1. Go to https://vercel.com and sign in
2. Click on the `rpradiopatrol-site` project
3. Click **Settings** → **Environment Variables**
4. Add each variable from the table above
5. After adding all three, go to **Deployments** and click **Redeploy** on
   the most recent deployment to pick up the new variables

---

## How to deploy updates

Any time you push a change to the `main` branch on GitHub, Vercel
automatically rebuilds and deploys the site within about 60 seconds. You don't
need to do anything else.

To push a change:

```bash
git add .
git commit -m "Brief description of what you changed"
git push
```

---

## Testing a submission without sending email

Add `?debug=1` to the form URL:

```
http://localhost:3000/apply.html?debug=1
```

In debug mode, submitting the form skips the email step and instead downloads
the filled PDF directly to your browser. Use this to check that all the fields
land in the right place on the PDF before going live. This also works on the
live site if you need to verify a fix without spamming the inbox:

```
https://rpradiopatrol.org/apply.html?debug=1
```

---

## What to do when you receive an application

The email subject will be: **New Patrol Application — [Applicant Name]**

The body will include the applicant's name, phone number, and submission date.
The completed PDF is attached.

Your process from there:

1. Open the attached PDF and review it for completeness
2. Sign the form as President
3. Forward to DPD using one of these methods:
   - Mail to: Detroit Police Department, Chief's Neighborhood Liaison Office,
     1301 Third St., Suite 7 South, Detroit, MI 48226
   - Fax to: (313) 595-5818
   - Hand-deliver to a Neighborhood Police Officer (NPO)
4. Save the PDF to Google Drive → `New Patroller Applications / [YEAR]`
5. Wait for DPD's thumbs-up or thumbs-down result, then follow up with the
   applicant directly

---

## Annual maintenance: mileage rate

The mileage reimbursement rate (used elsewhere in the patrol tools, not on
this form directly) is stored in:

```
/api/field-coords.js → MILEAGE_RATE = 0.725
```

Update this value each January when the IRS announces the new rate.
Check: https://www.irs.gov/tax-professionals/standard-mileage-rates

---

## If the PDF form ever changes

DPD occasionally issues a revised application form. If that happens, the
field coordinate map will need to be updated to match the new form layout.

Steps:

1. Replace `/api/template.pdf` with the new blank form
2. Run the coordinate extraction script (see `DEVELOPER_NOTES.md`) to get
   the pixel positions of each field on the new form
3. Update the values in `/api/field-coords.js`
4. Test using `?debug=1` mode until all fields land correctly
5. Commit and push

The form is a scanned image, not a fillable PDF, so this process is manual.
It should take about an hour. The field layout rarely changes — as of April
2026, the current form is Rev. 04/2018.

---

## If submissions stop arriving

Check these things in order:

1. **Check the Vercel dashboard** for error logs:
   vercel.com → project → Deployments → click latest → Functions → `submit-application`

2. **Check the Gmail App Password** — Google occasionally revokes these if the
   account has unusual activity. Generate a new one (same steps as above) and
   update the environment variable in Vercel.

3. **Check the spam folder** in RPRadioPatrol@gmail.com — the emails come from
   the same address they're sent to, which can occasionally trigger spam filters.
   Mark as "Not spam" if found there.

4. **Test with debug mode** (`?debug=1`) — if the PDF downloads successfully
   but email doesn't arrive, the problem is in the email config. If the form
   errors before the PDF downloads, the problem is in the PDF generation code.

---

## Fields pre-filled automatically

These fields are always the same for Patrol #23 and are pre-filled on the form.
Applicants cannot change them:

| Field | Value |
|---|---|
| Name of Radio Patrol | Rosedale Park |
| Name of Radio Patrol President | Trajan Centers |

If there is ever a new President, update these defaults in `apply.html`
(search for `PATROL_NAME` and `PATROL_PRESIDENT`).

---

## Privacy Act Notice

The DPD application form includes a legally required Privacy Act Notice
explaining that the applicant's Driver's License Number will be used for a
criminal history check. This notice appears at the bottom of `apply.html`
and is also reproduced on the generated PDF (it is part of the original DPD
template).

**Do not remove or abbreviate this notice.** It is required by DPD policy.

---

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| `pdf-lib` | ^1.17.1 | Overlays text and signature onto the PDF |
| `nodemailer` | ^6.9.x | Sends the email with PDF attachment |

These are installed automatically by Vercel when the project deploys. You do
not need to manage them manually unless a security update is released, in which
case run `npm update` in the project folder and push the updated `package-lock.json`.

---

## Tech overview (for future maintainers)

The form page (`apply.html`) is plain HTML, CSS, and JavaScript — no build
step, no frameworks, nothing to compile. You can open it in a text editor and
read it directly.

The serverless function (`api/submit-application.js`) runs on Vercel's free
tier. It is triggered by a POST request from the form page, runs for a few
seconds, and exits. Vercel spins it up on demand — there is no server running
24/7, which means no hosting cost.

The PDF template is the original DPD form stored as a file in the repo. The
function loads it, stamps text at fixed coordinates over the scan, and
produces a new PDF in memory. The filled PDF is never stored anywhere — it is
generated fresh for each submission and sent immediately via email.

All applicant PII (name, address, DOB, driver's license number) passes through
the serverless function transiently and is not logged or persisted anywhere
other than the email itself and whatever Google's servers retain per their
standard email retention policy.

---

*Questions or issues: contact Trajan Centers, President, Rosedale Park Radio Patrol #23*  
*RPRadioPatrol@gmail.com · (269) 352-9200*
