// ── STATE ─────────────────────────────────────────────────────
const STORAGE_KEY = 'ella_phonics_day';

function getCurrentDay() {
  return parseInt(localStorage.getItem(STORAGE_KEY) || '1', 10);
}

function setCurrentDay(day) {
  const clamped = Math.max(1, Math.min(day, CURRICULUM.length));
  localStorage.setItem(STORAGE_KEY, String(clamped));
  return clamped;
}

// ── GAME DESCRIPTIONS ─────────────────────────────────────────
const GAME_TITLES = {
  soundHunt:     'Sound Hunt',
  iSpy:          'I Spy',
  flashcardFlap: 'Flashcard Flap',
  clapAndCount:  'Clap & Count',
  wordBuilding:  'Word Building',
  drawAndLabel:  'Draw & Label',
  sillySentences:'Silly Sentences',
  beatTheClock:  'Beat the Clock'
};

function renderGameText(lesson) {
  const s = lesson.spelling;
  const snd = lesson.sound;
  const words = lesson.spellingList;
  const keys = lesson.keywords;

  switch (lesson.gameType) {
    case 'soundHunt':
      return `Go on a sound hunt together! Ask Ella to find 5 things around the house whose name contains the ${snd} sound. Suggested starting words to look for: <em>${keys.slice(0, 4).join(', ')}</em>. If she gets stuck, point to an object and ask "Does this have the ${snd} sound?"`;

    case 'iSpy':
      return `Play I Spy using today's sound! Say: "I spy with my little eye something that has the <strong>${snd}</strong> sound." Take turns — let Ella be the spy too. Suggested words to spy: <em>${keys.slice(0, 5).join(', ')}</em>.`;

    case 'flashcardFlap':
      return `Write the spelling "<strong>${s}</strong>" on a piece of card or paper. Flash it to Ella and ask her to say the sound. Then take turns — she picks a word with that sound, you write it, she reads it back. Work through these words: <em>${words.join(', ')}</em>.`;

    case 'clapAndCount':
      return `Say each word from today's spelling list slowly and clearly. For each word, clap once for every <em>sound</em> (phoneme) you hear — not every letter. For example, "rain" has 3 sounds: /r/ – /ai/ – /n/ = 3 claps. Let Ella lead the clapping once she has the hang of it! Words to use: <em>${words.join(', ')}</em>.`;

    case 'wordBuilding':
      return `Using letter tiles, magnetic letters, or small paper squares with letters written on them, build the words from today's spelling list one at a time. Say the word, ask Ella which letters you need, then lay them out together. Mix up the letters and ask her to rebuild it! Words to build: <em>${words.join(', ')}</em>.`;

    case 'drawAndLabel':
      return `Ask Ella to draw 3 things that have the ${snd} sound in their name. Suggested ideas: <em>${keys.slice(0, 4).join(', ')}</em>. Once she has drawn them, help her write or copy the word underneath each picture.`;

    case 'sillySentences':
      return `Make up silly sentences together using words from the spelling list. The sillier, the better! Try to use 2–3 of these words: <em>${words.join(', ')}</em>. Let Ella make one up too — the goal is just to have fun playing with the ${snd} sound!`;

    case 'beatTheClock':
      return `Set a 60-second timer on your phone and challenge Ella to say as many words as she can that have the ${snd} sound. You can join in too! Tally the words on a piece of paper. Try to beat your score next time!`;

    default:
      return '';
  }
}

// ── WORKSHEET DESCRIPTIONS ────────────────────────────────────
const WORKSHEET_TITLES = {
  traceAndCopy:    'Trace & Copy',
  fillInBlank:     'Fill in the Blank',
  sortIt:          'Sort It',
  pictureWordMatch:'Picture–Word Match',
  sentenceWriting: 'Sentence Writing',
  letterHunt:      'Letter Hunt'
};

function renderWorksheetText(lesson) {
  const s = lesson.spelling;
  const snd = lesson.sound;
  const words = lesson.spellingList;

  switch (lesson.worksheetType) {
    case 'traceAndCopy':
      return `On a piece of paper, write "<strong>${s}</strong>" in large letters with a light dotted outline for Ella to trace. Ask her to trace it 3 times, then copy it 3 more times from memory without looking. Finish by having her write 2 words from the spelling list entirely on her own: <em>${words[0]}</em> and <em>${words[1]}</em>.`;

    case 'fillInBlank':
      return `Write 4 words from the spelling list on paper, but leave a blank line where the "<strong>${s}</strong>" spelling goes. Read each word aloud clearly while Ella writes in the missing letters. Suggested words to use: <em>${words.slice(0, 4).join(', ')}</em>.`;

    case 'sortIt':
      return `Write 8 words on paper: 4 that contain the ${snd} sound (from today's spelling list) and 4 that do not (using sounds Ella already knows). Read them together. Ask Ella to circle or tick the ones that have today's sound. Use these for the ${snd} column: <em>${words.join(', ')}</em>.`;

    case 'pictureWordMatch':
      return `Draw 4 simple pictures of words from the spelling list (stick figures are perfectly fine!). Underneath each picture, write the word with the "<strong>${s}</strong>" letters missing, like a blank. Ask Ella to fill in the gap. Suggested words to draw: <em>${words.slice(0, 4).join(', ')}</em>.`;

    case 'sentenceWriting':
      return `Ask Ella to think of a sentence using one of today's spelling list words. Dictate it slowly for her to write — one word at a time if needed. A simple sentence is perfect. Try starting with: "<em>The ${words[0]} …</em>" or "<em>I can see a ${words[1]} …</em>". Read the sentence back together when she is done!`;

    case 'letterHunt':
      return `Grab one of Ella's favourite picture books. Together, flip through the pages and find every word that contains the spelling "<strong>${s}</strong>". Point to or circle each one as you find it. Take turns spotting them — whoever finds the most wins! If her books don't have many, try a cereal box or a magazine.`;

    default:
      return '';
  }
}

// ── RENDER LESSON ─────────────────────────────────────────────
function renderLesson(dayNumber) {
  const lesson = CURRICULUM[dayNumber - 1];
  if (!lesson) return;

  // Day label
  document.getElementById('dayLabel').textContent =
    `Day ${dayNumber} · Group ${lesson.group}`;

  // Sound card
  document.getElementById('soundSpelling').textContent = lesson.spelling;
  document.getElementById('soundPhoneme').textContent = lesson.sound;
  document.getElementById('soundKeywords').textContent =
    lesson.keywords.slice(0, 4).map(w => '"' + w + '"').join('  ·  ');
  document.getElementById('soundAction').textContent = lesson.action;

  // Game card
  document.getElementById('gameTitle').textContent =
    GAME_TITLES[lesson.gameType] || 'Game';
  document.getElementById('gameBody').innerHTML = renderGameText(lesson);

  // Worksheet card
  document.getElementById('worksheetTitle').textContent =
    WORKSHEET_TITLES[lesson.worksheetType] || 'Worksheet';
  document.getElementById('worksheetBody').innerHTML = renderWorksheetText(lesson);

  // Spelling list
  const ul = document.getElementById('spellingList');
  ul.innerHTML = '';
  lesson.spellingList.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    ul.appendChild(li);
  });

  // Nav buttons
  document.getElementById('prevBtn').disabled = (dayNumber <= 1);
  document.getElementById('nextBtn').disabled = (dayNumber >= CURRICULUM.length);

  // Scroll to top on lesson change
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── NAV BUTTONS ───────────────────────────────────────────────
document.getElementById('prevBtn').addEventListener('click', () => {
  const day = setCurrentDay(getCurrentDay() - 1);
  renderLesson(day);
  updateCurriculumList();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const day = setCurrentDay(getCurrentDay() + 1);
  renderLesson(day);
  updateCurriculumList();
});

// ── MENU ──────────────────────────────────────────────────────
const menuOverlay = document.getElementById('menuOverlay');
const menuPanel   = document.getElementById('menuPanel');

function openMenu() {
  menuOverlay.classList.remove('hidden');
  menuPanel.classList.remove('hidden');
  updateProgressSummary();
}

function closeMenu() {
  menuOverlay.classList.add('hidden');
  menuPanel.classList.add('hidden');
}

document.getElementById('menuBtn').addEventListener('click', openMenu);
document.getElementById('closeMenuBtn').addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// ── DAY PICKER ────────────────────────────────────────────────
function populateDayPicker() {
  const select = document.getElementById('dayPicker');
  select.innerHTML = '';
  CURRICULUM.forEach(lesson => {
    const opt = document.createElement('option');
    opt.value = lesson.id;
    opt.textContent = `Day ${lesson.id} — ${lesson.spelling} (${lesson.sound}) — Group ${lesson.group}`;
    select.appendChild(opt);
  });
  select.value = getCurrentDay();
}

document.getElementById('goToDay').addEventListener('click', () => {
  const val = parseInt(document.getElementById('dayPicker').value, 10);
  const day = setCurrentDay(val);
  renderLesson(day);
  updateCurriculumList();
  closeMenu();
});

// ── PROGRESS SUMMARY ──────────────────────────────────────────
function updateProgressSummary() {
  const day = getCurrentDay();
  const total = CURRICULUM.length;
  const pct = Math.round(((day - 1) / total) * 100);
  document.getElementById('progressSummary').textContent =
    `Day ${day} of ${total} (${pct}% through the syllabus)`;
}

// ── CURRICULUM LIST IN MENU ───────────────────────────────────
function updateCurriculumList() {
  const container = document.getElementById('curriculumList');
  const currentDay = getCurrentDay();
  container.innerHTML = '';

  let lastGroup = null;
  CURRICULUM.forEach(lesson => {
    if (lesson.group !== lastGroup) {
      lastGroup = lesson.group;
      const gh = document.createElement('div');
      gh.className = 'group-header';
      gh.textContent = `Group ${lesson.group}`;
      container.appendChild(gh);
    }

    const item = document.createElement('div');
    item.className = 'curriculum-item' +
      (lesson.id === currentDay ? ' current' : '') +
      (lesson.id < currentDay ? ' done' : '');

    item.innerHTML =
      `<span class="ci-day">Day ${lesson.id}</span>` +
      `<span class="ci-spelling">${lesson.spelling}</span>` +
      `<span class="ci-sound">${lesson.sound}</span>` +
      (lesson.id < currentDay ? `<span class="ci-check">&#10003;</span>` : '');

    item.addEventListener('click', () => {
      const day = setCurrentDay(lesson.id);
      document.getElementById('dayPicker').value = day;
      renderLesson(day);
      updateCurriculumList();
      closeMenu();
    });

    container.appendChild(item);
  });
}

// ── RESET ─────────────────────────────────────────────────────
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset progress back to Day 1?')) {
    const day = setCurrentDay(1);
    document.getElementById('dayPicker').value = day;
    renderLesson(day);
    updateCurriculumList();
    closeMenu();
  }
});

// ── WORKSHEET LIBRARY ─────────────────────────────────────────
const lessonView       = document.getElementById('lessonView');
const worksheetLibView = document.getElementById('worksheetLibView');
const lightboxOverlay  = document.getElementById('lightboxOverlay');
const lightboxImg      = document.getElementById('lightboxImg');
const lightboxLabel    = document.getElementById('lightboxLabel');

function showLibrary() {
  lessonView.classList.remove('active');
  worksheetLibView.classList.add('active');
  renderWorksheetGrid();
}

function hideLibrary() {
  worksheetLibView.classList.remove('active');
  lessonView.classList.add('active');
}

function renderWorksheetGrid() {
  const grid = document.getElementById('worksheetGrid');
  if (grid.childElementCount > 0) return; // already rendered
  WORKSHEETS.forEach(ws => {
    const card = document.createElement('div');
    card.className = 'ws-card';
    card.innerHTML =
      `<img class="ws-thumb" src="${ws.file}" alt="${ws.title}" loading="lazy" />` +
      `<div class="ws-info"><div class="ws-title">${ws.title}</div><div class="ws-desc">${ws.desc}</div></div>`;
    card.addEventListener('click', () => openLightbox(ws));
    grid.appendChild(card);
  });
}

function openLightbox(ws) {
  lightboxImg.src = ws.file;
  lightboxLabel.textContent = ws.title;
  lightboxOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('worksheetLibBtn').addEventListener('click', showLibrary);
document.getElementById('libBackBtn').addEventListener('click', hideLibrary);
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', e => { if (e.target === lightboxOverlay) closeLightbox(); });

// ── INIT ──────────────────────────────────────────────────────
(function init() {
  populateDayPicker();
  updateCurriculumList();
  renderLesson(getCurrentDay());
})();
