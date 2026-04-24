# Frankel Phonics — Project Plan

## What this app is
A daily Jolly Phonics lesson planner for Su Ann to use when teaching her daughter Ella (age 4). The app shows one lesson per day: the sound being learned, a game to play, a worksheet activity, and a spelling list. There is also a full 36-week timetable view for planning ahead.

## Who uses it
**Su Ann** (the mother) — she opens the app before each lesson to see what to teach that day. Ella does not interact with the app directly.

## Ella's current level (as of 2026-04-23)
- Knows all English phonemes (sounds) — strong phonemic awareness
- Currently in Jolly Phonics **Groups 4–5** (digraphs: ai, j, oa, ie, ee, or, z, w, ng, v, oo)
- Has **not** yet learned alternative spellings (e.g. /eɪ/ can also be "ay", "a_e")
- Has **not** yet learned magic-e / silent-e rules

## Live URL
**https://wongsuann1991-droid.github.io/ellaphonics/**

GitHub repo: https://github.com/wongsuann1991-droid/ellaphonics

## Tech stack
| File | Purpose |
|------|---------|
| `index.html` | Home page — playground sketch, quote carousel, Enter button |
| `dashboard.html` | 36-week timetable — collapsible week rows, teaching notes |
| `planner.html` | Daily planner — sound hero, game/worksheet/spelling cards, swipe nav |
| `curriculum.js` | All 42 Jolly Phonics sounds with game/worksheet/spelling data |
| `worksheets.js` | Catalogue of 19 worksheet images with titles and descriptions |
| `jp-data.js` | 36-week curriculum data (terms, weeks, sounds, tricky words) |
| `sw.js` | Service Worker — caches app for full offline use (v3) |
| `manifest.json` | PWA manifest — enables "Add to Home Screen" |
| `icons/icon.svg` | App icon (SVG) |
| `icons/icon-180.png` | App icon (180×180 PNG for iOS home screen) |
| `worksheets/01–19` | 19 worksheet JPEG images |

## Design system
- **Name:** Frankel Phonics
- **Palette:** parchment (--p0 to --p4) + ink (--ink to --ink-5)
- **Fonts:** IM Fell English (display), Lora (body), Caveat (spelling words)
- **Style:** sharp corners, no box-shadows, no gradients, subtle SVG borders

## App screens and navigation

### Home (`index.html`)
- Animated playground sketch that draws itself on load
- Rotating quote carousel (8 quotes, 4.2s interval)
- "Enter →" button navigates to the timetable (`dashboard.html`)
- **Does not auto-advance** — stays until the user taps Enter

### Timetable (`dashboard.html`)
- `← Home` link (top-left) and `Daily Planner →` link (top-right)
- 36 weeks grouped into 3 terms, each week collapsible
- Each week shows 5 day cells (Mon–Fri) with the sound, day number, and 2 keywords
- Teaching notes shown below each expanded week
- Click any day cell → saves that day to localStorage and opens `planner.html`
- Hover tooltip (desktop) shows phoneme, action, and full keyword list

### Daily Planner (`planner.html`)
- `← Home` link in header
- **Sound hero:** large letter box with the spelling, phoneme, and keywords
- **3 activity cards:** Game (personalised instruction), Worksheet (hands-on activity), Spelling (6-word list in Caveat script)
- **Navigation:** ← Prev / Next → buttons + touch swipe + keyboard arrow keys
- **Worksheet library:** "Library" button in header opens a full-screen overlay with all 19 worksheets; tap any to open in lightbox
- Day position saved in localStorage (`ella_phonics_day`)

## How to update the app

1. Edit files in `C:\Users\Su Ann\Ella Phonics\`
2. Open Command Prompt in that folder and run:
   ```
   git add -A
   git commit -m "describe what you changed"
   git push
   ```
3. GitHub Pages updates automatically within ~1 minute

## How to install on iPhone
1. Open **Safari** and go to https://wongsuann1991-droid.github.io/ellaphonics/
2. Tap the **Share** button → **Add to Home Screen**
3. Must be Safari (not Chrome) for PWA install to work

---

## Session Log

### Sessions 1–2 — 2026-04-23
Built and deployed the original app (old design):
- `curriculum.js`, `index.html`, `style.css`, `app.js`, `sw.js`, `manifest.json`
- Added 19-image worksheet library
- Deployed to GitHub Pages

### Session 3 — 2026-04-24
Added 36-week Teacher Dashboard (`dashboard.html`, `jp-data.js`)

### Session 4 — 2026-04-24 to 2026-04-25
**Full redesign as "Frankel Phonics" ✓**

Implemented the Canva design handoff (from `Greenfield Phonics.zip`):
- New design system: parchment/ink palette, IM Fell English + Lora fonts, sharp corners
- `index.html` (new): splash/home page with animated playground SVG sketch, quote carousel
- `dashboard.html` (rebuilt): 36-week timetable, Teaching mode only, collapsible weeks
- `planner.html` (rebuilt, was `index.html`): daily planner with sound hero, 3 cards, swipe nav
- `sw.js`: bumped to v3, updated asset list
- `manifest.json`: updated name, start_url, colours
- `icons/icon-180.png`: generated 180×180 PNG for iOS home screen

**Refinements in this session:**
- Dashboard: removed progress bar, filter dropdown, "36-Week Timetable" subtitle
- Dashboard: removed Student tab — teaching notes always visible
- Dashboard: removed done/grey-out/tick indicators from all day cells
- Home page: removed auto-advance timer — stays until user taps "Enter →"
- All pages: added `← Home` navigation
- Planner: removed spelling word tap-to-tick / strikethrough feature
- Planner: `← Dashboard` changed to `← Home`
- iOS PWA: added `apple-mobile-web-app-capable` meta tags, `apple-touch-icon`, `-webkit-fill-available` height fallback

**Current live version:** https://wongsuann1991-droid.github.io/ellaphonics/

---

## Possible future features
- Notes field per lesson (e.g. "Ella struggled with 'snail'")
- Sound pronunciation audio clips
- A review mode showing the last 5 sounds for quick revision
