# Ella Phonics — Project Plan

## What this app is
A daily phonics lesson planner for Su Ann to use when teaching her daughter Ella (age 4) phonics. The app shows one lesson per day: the sound being learned, a game to play, a worksheet activity, and a spelling list. All content is based on the Jolly Phonics syllabus.

## Who uses it
**Su Ann** (the mother) — she opens the app before each lesson to see what to teach that day. Ella does not interact with the app directly.

## Ella's current level (as of 2026-04-23)
- Knows all English phonemes (sounds) — strong phonemic awareness
- Currently in Jolly Phonics **Groups 4–5** (digraphs: ai, j, oa, ie, ee, or, z, w, ng, v, oo)
- Has **not** yet learned alternative spellings (e.g. /eɪ/ can also be "ay", "a_e")
- Has **not** yet learned magic-e / silent-e rules

## Tech stack
| File | Purpose |
|------|---------|
| `index.html` | App shell — structure and all views |
| `style.css` | Mobile-first styles, card layout, menu |
| `app.js` | App logic — rendering, navigation, localStorage |
| `curriculum.js` | All 42 Jolly Phonics sounds with game/worksheet/spelling data |
| `sw.js` | Service Worker — caches app for full offline use |
| `manifest.json` | PWA manifest — enables "Add to Home Screen" |
| `icons/icon.svg` | App icon (SVG, works as PWA icon on modern browsers) |

## How to run / deploy

### Local testing (on your computer)
1. Open a terminal in `C:\Users\Su Ann\Ella Phonics\`
2. Run: `npx serve .` (requires Node.js) **or** use the VS Code Live Server extension
3. Open `http://localhost:3000` in your browser

### Live URL (already deployed)
**https://wongsuann1991-droid.github.io/ellaphonics/**

GitHub repo: https://github.com/wongsuann1991-droid/ellaphonics

The app is already live and installed on Su Ann's phone home screen.

### Updating the app (for future changes)
1. Edit the relevant file(s) in `C:\Users\Su Ann\Ella Phonics\`
2. Open Command Prompt in that folder and run:
   ```
   git add -A
   git commit -m "describe what you changed"
   git push
   ```
3. GitHub Pages will update automatically within ~1 minute

## Curriculum structure
- **42 sounds** across 7 groups (full Jolly Phonics sequence)
- Each sound has: spelling, IPA phoneme, Jolly action, 8 keywords, 6 spelling words, game type, worksheet type
- **8 game types** rotating across sounds: Sound Hunt, I Spy, Flashcard Flap, Clap & Count, Word Building, Draw & Label, Silly Sentences, Beat the Clock
- **6 worksheet types** rotating: Trace & Copy, Fill in the Blank, Sort It, Picture–Word Match, Sentence Writing, Letter Hunt

## App features
- Daily lesson view with 4 cards: Sound, Game, Worksheet, Spelling List
- "Next Day / Back" navigation — advances through the 42-sound curriculum
- Progress saved in `localStorage` — phone remembers which day you're on
- Menu with full curriculum overview (click any sound to jump to it)
- Manual day-jump selector (useful for starting at Group 4, Day 19)
- Reset button
- Works fully offline after first load (Service Worker)

---

## Session Log

### Session 1 — 2026-04-23
**Status: Complete and tested ✓**

Built and visually tested all core files:
- `curriculum.js` — all 42 sounds with full data
- `index.html` — app shell
- `style.css` — mobile-first card UI
- `app.js` — rendering + navigation + menu logic
- `sw.js` — offline service worker
- `manifest.json` + `icons/icon.svg` — PWA support

**Tested and confirmed working:**
- All 4 cards render correctly (Sound, Game, Worksheet, Spelling List)
- Next Day / Back navigation advances through curriculum
- Menu opens with progress tracker and full curriculum list
- Completed days show a checkmark (✓) in the menu
- Current day is highlighted in the menu
- "Jump to Day" selector works — tested jumping to Day 19 (Group 4, "ai")
- Day counter and group label update correctly

**Deployed to GitHub Pages ✓**
- Git repo initialised and pushed to: https://github.com/wongsuann1991-droid/ellaphonics
- GitHub Pages enabled — live at: https://wongsuann1991-droid.github.io/ellaphonics/
- App installed on Su Ann's phone home screen
- Su Ann set starting day to Day 19 (Group 4, "ai") — where Ella currently is

**Next steps for next session:**
- [ ] Consider adding a "Done today ✓" button to mark a lesson as completed with a date stamp (so Su Ann can track which days she has actually taught vs just visited)
- [ ] Consider adding a simple notes field per lesson (e.g. "Ella struggled with 'snail'")
- [ ] Test offline behaviour — open the app on phone with WiFi off to confirm service worker is caching correctly

---

### Session 2 — 2026-04-24
**Status: Worksheet library added ✓**

Added worksheet library feature:
- `worksheets/` folder — 19 processed JPEG images (14 rotated 180° from upside-down originals)
- `worksheets.js` — catalog of all 19 worksheets with title and description
- `index.html` — already had library view + lightbox HTML structure added
- `style.css` — added library grid, card, and lightbox styles
- `app.js` — library view, grid rendering, and lightbox logic already wired up
- `sw.js` bumped to v2 — all 19 images now cached for offline use

**Worksheet content:**
- Alternative spellings intro page
- Magic-e worksheets: a_e, e_e, i_e, o_e, u_e
- Alternative digraph worksheets: ay, ea, y(fly), igh, ow(snow), ow(owl), ir, ur
- Word strip cut-out sheets (3 sets)
- Alternative spellings full reference chart

**How the library works:**
- Tap the 📚 book icon in the app header
- All 19 worksheets shown as a 2-column thumbnail grid
- Tap any thumbnail to open it full-screen in a lightbox
- Tap × or outside the image to close
- All images cached offline via service worker

**Pushed to GitHub ✓** — live at https://wongsuann1991-droid.github.io/ellaphonics/

**Next steps for next session:**
- [ ] Consider adding a "Done today ✓" button with a date stamp
- [ ] Consider a notes field per lesson
- [ ] Test offline behaviour on phone with WiFi off
- [ ] Note: there are additional untracked files in `worksheets/` and a `Timetable/` folder — clarify with Su Ann what these are for

---

### Session 3 — 2026-04-23
**Status: 36-Week Teacher Dashboard added ✓**

Implemented the full Jolly Phonics Teacher Dashboard from the design handoff:
- `dashboard.html` — standalone page, vanilla HTML/CSS/JS (no React), matches hi-fi prototype
- `jp-data.js` — copied from design handoff to project root (36 weeks, 3 terms, ~60 sounds)
- `index.html` — added 📅 calendar icon in header linking to `dashboard.html`
- `sw.js` bumped to v3 — `dashboard.html` and `jp-data.js` now cached for offline use

**Dashboard features:**
- Fixed top bar: Jolly Phonics branding + Teaching/Student toggle + "← Daily Planner" back link
- 220px sidebar: 3 collapsible term sections (Term 1 blue, Term 2 green, Term 3 amber), 36 week rows
- Week header card showing week number, term name, optional Capitals/Review badges, theme title
- 5-column Monday–Friday day grid per week, each card showing: sound badge (72×72px), emoji, action (teaching mode only), blending word chips, tricky word (Monday only)
- Review weeks (9–12) show a special consolidation view instead of day cards
- Tricky words banner below day grid
- Teaching Notes panel (teaching mode only, hidden in student mode)
- localStorage persistence (key `jp_dash_v2`) — remembers selected week between visits

**Tested and confirmed working:**
- All 36 week buttons render and select correctly
- Review weeks (e.g. week 9) show the review view (no day cards)
- Teaching/Student toggle hides/shows action boxes and teaching notes
- Back link returns to daily planner (`index.html`)

**Pushed to GitHub ✓** — live at https://wongsuann1991-droid.github.io/ellaphonics/

---

## Possible future features (not yet built)
- "Done today" button to mark a lesson as completed (with a date stamp)
- Notes field per lesson (e.g. "Ella struggled with 'snail'")
- A review mode that shows the last 5 sounds for quick revision
- Sound pronunciation audio clips (requires audio files)
