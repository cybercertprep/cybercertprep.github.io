# IT Exam Prep — Study Hub

A simple, static study site. A landing page lists the exams; each exam has its own page with study guides, videos, and a practice quiz. Starts with AAISM.

## Files
- `index.html` — landing page (lists exams; AAISM is a clickable card)
- `aaism.html` — AAISM materials page (guides, videos, quiz)
- `questions.js` — the AAISM question bank (add questions here)
- `quiz.js` — quiz engine (shuffles and scores)
- `style.css` — styling
- `site.js` — footer year + visitor count
- `README.md` — this file

## Deploy on GitHub Pages
1. Put all these files in the **root** of your repo (not inside a zip, not in a subfolder).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `/root` → Save.
3. Wait 1–2 minutes; the live URL appears at the top of that page.

## The quiz
The bank in `questions.js` currently holds **40 concept questions** on AI security management. The quiz serves a **random 20 per attempt** and shuffles the answer order each time, so no two attempts are identical and there's no positional pattern to memorise.

To add more, copy the template at the top of `questions.js`. Each question needs `q`, `options`, `answer` (0-based index of the correct option), and `explain`. The quiz counts however many you add automatically. To serve every question instead of a random 20, open `quiz.js` and change `perAttempt: 20` to `perAttempt: 'all'`.

Note: these are general concept questions, not the official AAISM exam. Review them against your official materials before relying on them.

## Add guides and videos
In `aaism.html`, replace the two `placeholder` blocks:
- **Guides:** link to PDFs you put in a `guides/` folder.
- **Videos:** paste a YouTube/Vimeo embed `<iframe>` inside the provided `video-embed` wrapper.

## Visitor counter (optional, 5 min)
GitHub Pages can't count visitors on its own. This uses **GoatCounter** (free, cookieless):
1. Sign up at https://www.goatcounter.com and choose a code.
2. Replace `MYCODE` in `index.html`, `aaism.html`, and `site.js` with your code.
3. Your dashboard (counts, pages, referrers, countries) lives at `https://<yourcode>.goatcounter.com`.

## A note on the quiz questions
The starter questions are written to be accurate to core AI-security-management concepts, but you should review them against your official AAISM materials before publishing, and trust the official syllabus over anything here.
