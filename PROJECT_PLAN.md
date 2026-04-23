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

### To put it on your phone (GitHub Pages — recommended)
1. Create a free account at https://github.com
2. Create a new repository called `ella-phonics` (set it to **Public**)
3. Upload all files from `C:\Users\Su Ann\Ella Phonics\` to the repository
4. Go to the repo → Settings → Pages → Source: **Deploy from branch** → branch: **main** → folder: **/ (root)**
5. After ~2 minutes, your app will be live at: `https://YOUR-USERNAME.github.io/ella-phonics/`
6. Open that URL on your phone in Chrome/Safari
7. Tap the share/menu button → "Add to Home Screen"
8. The app icon will appear on your home screen and work offline!

### Updating the app
- Edit files on your computer
- Re-upload the changed files to GitHub
- The phone app will update automatically next time you open it with internet

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

**Next steps for next session:**
- [ ] Set up GitHub Pages deployment so Su Ann can access it on her phone
- [ ] Test offline behaviour once deployed (service worker caching after first load)
- [ ] Consider adding a "Done today ✓" button to mark a lesson as completed with a date stamp (so Su Ann can track which days she has actually taught)
- [ ] Consider adding a simple notes field per lesson (e.g. "Ella struggled with 'snail'")

---

## Possible future features (not yet built)
- "Done today" button to mark a lesson as completed (with a date stamp)
- Notes field per lesson (e.g. "Ella struggled with 'snail'")
- A review mode that shows the last 5 sounds for quick revision
- Sound pronunciation audio clips (requires audio files)
