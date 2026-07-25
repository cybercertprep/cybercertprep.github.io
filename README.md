# CertPrep — IT Exam Study Hub

A clean, static study site for IT certification candidates. Hosts study guides, videos, and interactive quizzes. Starts with an AAISM track.

## Files
- `index.html` — the page
- `style.css` — styling
- `quiz.js` — quiz questions + logic (edit `QUESTIONS` to add more)
- `site.js` — footer year + live visitor count

## Deploy to GitHub Pages
1. Create a public repo (e.g. `certprep`) and upload all files to the root.
2. Repo → **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / `/root` → Save.
3. Your site goes live at `https://<username>.github.io/<repo>/` in a minute or two.

## Turn on visitor tracking (5 min)
GitHub Pages is static, so it can't count visitors by itself. This site uses **GoatCounter** (free, privacy-friendly, cookieless — good fit for the security posture).
1. Sign up at https://www.goatcounter.com and pick a code (e.g. `certprep`).
2. In `index.html`, replace **`MYCODE`** (appears once) with your code.
3. In `site.js`, set `GOATCOUNTER_CODE` to the same code.
4. Full stats — how many, which pages, referrers, countries — live at `https://<yourcode>.goatcounter.com`. The footer shows a live total.

> Note: a public static site cannot see *who* individual visitors are (that would need their consent and a backend). GoatCounter gives you counts, sources, and locations without collecting personal data.

## Add AAISM study guides & videos
In `index.html`, find the `PLACEHOLDER FOR YOUR UPLOADS` block in the AAISM section and replace it, e.g.:
```html
<a class="btn btn-primary" href="guides/aaism-domain1.pdf">Domain 1 (PDF)</a>
<iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID"
        title="AAISM walkthrough" frameborder="0" allowfullscreen></iframe>
```
Put PDFs in a `guides/` folder. For videos, embedding from YouTube/Vimeo keeps your repo small and your CSP simple (add the embed domain to `frame-src` in the CSP meta tag if you embed).

## Add quiz questions
Edit the `QUESTIONS` array in `quiz.js`. Each entry needs `q`, `options`, `answer` (0-based index), and `explain`.

## Security notes
- Strict **Content-Security-Policy** and `X-Content-Type-Options` are set in `index.html`.
- GitHub Pages enforces **HTTPS** — keep "Enforce HTTPS" ticked in Pages settings.
- The quiz runs entirely in the browser; no answer data leaves the device.
- If you embed video, add only the specific provider to the CSP.
