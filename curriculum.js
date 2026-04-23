// Jolly Phonics curriculum — all 42 sounds
// gameType cycles through 8 types; worksheetType cycles through 6 types.

const CURRICULUM = [
  // ── GROUP 1 ──────────────────────────────────────────────────
  {
    id: 1, group: 1,
    spelling: "s", sound: "/s/",
    action: "Weave your hand in an 's' shape, like a slithering snake, and say 'sssss'.",
    keywords: ["sun", "sock", "sand", "sea", "six", "sad", "star", "spin"],
    spellingList: ["sat", "sit", "sip", "sun", "sin", "set"],
    gameType: "soundHunt",
    worksheetType: "traceAndCopy"
  },
  {
    id: 2, group: 1,
    spelling: "a", sound: "/a/",
    action: "Wiggle your fingers up your arm, as if ants are crawling on you, and say 'a, a, a'.",
    keywords: ["ant", "apple", "bag", "cap", "man", "pan", "tap", "van"],
    spellingList: ["at", "an", "can", "man", "pan", "cap"],
    gameType: "iSpy",
    worksheetType: "fillInBlank"
  },
  {
    id: 3, group: 1,
    spelling: "t", sound: "/t/",
    action: "Turn your head from side to side like a ticking clock and say 't, t, t'.",
    keywords: ["tap", "top", "ten", "tin", "tip", "tan", "net", "sit"],
    spellingList: ["tap", "tip", "tan", "top", "tin", "ten"],
    gameType: "flashcardFlap",
    worksheetType: "sortIt"
  },
  {
    id: 4, group: 1,
    spelling: "i", sound: "/i/",
    action: "Scratch your head as if something is itchy and say 'i, i, i'.",
    keywords: ["in", "it", "pin", "tin", "six", "sit", "big", "bin"],
    spellingList: ["it", "in", "pin", "tin", "sit", "bit"],
    gameType: "clapAndCount",
    worksheetType: "pictureWordMatch"
  },
  {
    id: 5, group: 1,
    spelling: "p", sound: "/p/",
    action: "Puff your cheeks and pop them with your finger, saying 'p, p, p'.",
    keywords: ["pin", "pan", "pet", "pig", "cap", "top", "tap", "pit"],
    spellingList: ["pan", "pin", "pat", "pet", "pit", "cap"],
    gameType: "wordBuilding",
    worksheetType: "sentenceWriting"
  },
  {
    id: 6, group: 1,
    spelling: "n", sound: "/n/",
    action: "Place your hand on your nose and hum 'n, n, n'.",
    keywords: ["net", "nap", "nip", "nun", "pin", "tin", "tan", "pan"],
    spellingList: ["net", "nap", "nit", "nan", "pan", "pin"],
    gameType: "drawAndLabel",
    worksheetType: "letterHunt"
  },

  // ── GROUP 2 ──────────────────────────────────────────────────
  {
    id: 7, group: 2,
    spelling: "c / k", sound: "/k/",
    action: "Click your fingers like castanets and say 'k, k, k'. Use 'c' before a, o, u and 'k' before e, i.",
    keywords: ["cat", "kit", "cap", "cot", "kid", "kip", "cab", "Ken"],
    spellingList: ["cat", "can", "cap", "kit", "kid", "kip"],
    gameType: "sillySentences",
    worksheetType: "traceAndCopy"
  },
  {
    id: 8, group: 2,
    spelling: "e", sound: "/e/",
    action: "Pretend to tap the top of an egg and say 'e, e, e'.",
    keywords: ["egg", "end", "men", "ten", "pet", "net", "set", "hen"],
    spellingList: ["egg", "men", "ten", "pet", "net", "hen"],
    gameType: "beatTheClock",
    worksheetType: "fillInBlank"
  },
  {
    id: 9, group: 2,
    spelling: "h", sound: "/h/",
    action: "Hold your hand in front of your mouth and pant like a dog, saying 'h, h, h'.",
    keywords: ["hot", "hat", "hit", "hop", "hen", "him", "his", "had"],
    spellingList: ["hot", "hat", "hit", "hop", "hen", "him"],
    gameType: "soundHunt",
    worksheetType: "sortIt"
  },
  {
    id: 10, group: 2,
    spelling: "r", sound: "/r/",
    action: "Pretend to be a dog and growl, moving your hands like paws, saying 'rr, rr, rr'.",
    keywords: ["red", "run", "rip", "rat", "rim", "rob", "rag", "ram"],
    spellingList: ["red", "run", "rip", "rat", "rim", "rob"],
    gameType: "iSpy",
    worksheetType: "pictureWordMatch"
  },
  {
    id: 11, group: 2,
    spelling: "m", sound: "/m/",
    action: "Rub your tummy and say 'mmmm' as if tasting something delicious.",
    keywords: ["map", "man", "met", "mop", "mud", "mat", "mug", "men"],
    spellingList: ["map", "man", "met", "mop", "mud", "mat"],
    gameType: "flashcardFlap",
    worksheetType: "sentenceWriting"
  },
  {
    id: 12, group: 2,
    spelling: "d", sound: "/d/",
    action: "Pretend to beat a drum and say 'd, d, d'.",
    keywords: ["dog", "din", "dip", "dot", "dam", "dug", "den", "dim"],
    spellingList: ["dog", "dig", "dip", "dot", "dam", "den"],
    gameType: "clapAndCount",
    worksheetType: "letterHunt"
  },

  // ── GROUP 3 ──────────────────────────────────────────────────
  {
    id: 13, group: 3,
    spelling: "g", sound: "/g/",
    action: "Pretend to strum a guitar and say 'g, g, g'.",
    keywords: ["got", "gap", "get", "gig", "gun", "gut", "gum", "gas"],
    spellingList: ["got", "gap", "get", "gig", "gun", "gum"],
    gameType: "wordBuilding",
    worksheetType: "traceAndCopy"
  },
  {
    id: 14, group: 3,
    spelling: "o", sound: "/o/",
    action: "Pretend to hold a hot potato in your hands, tossing it between them, and say 'o, o, o'.",
    keywords: ["on", "off", "hot", "top", "pot", "got", "cot", "nod"],
    spellingList: ["on", "hot", "top", "pot", "got", "cot"],
    gameType: "drawAndLabel",
    worksheetType: "fillInBlank"
  },
  {
    id: 15, group: 3,
    spelling: "u", sound: "/u/",
    action: "Pretend to open an umbrella above your head and say 'u, u, u'.",
    keywords: ["up", "mug", "cup", "run", "sun", "fun", "gun", "mud"],
    spellingList: ["up", "mug", "cup", "run", "sun", "mud"],
    gameType: "sillySentences",
    worksheetType: "sortIt"
  },
  {
    id: 16, group: 3,
    spelling: "l", sound: "/l/",
    action: "Pretend to lick a lollipop and say 'l, l, l'.",
    keywords: ["log", "leg", "lip", "lap", "lit", "let", "lug", "lid"],
    spellingList: ["log", "leg", "lip", "lap", "let", "lid"],
    gameType: "beatTheClock",
    worksheetType: "pictureWordMatch"
  },
  {
    id: 17, group: 3,
    spelling: "f", sound: "/f/",
    action: "Fan your hand in front of your face, as if cooling yourself, and say 'fff'.",
    keywords: ["fig", "fat", "fit", "fun", "fog", "fan", "fin", "fed"],
    spellingList: ["fig", "fat", "fit", "fun", "fog", "fan"],
    gameType: "soundHunt",
    worksheetType: "sentenceWriting"
  },
  {
    id: 18, group: 3,
    spelling: "b", sound: "/b/",
    action: "Pretend to hit a ball with a bat and say 'b, b, b'.",
    keywords: ["bag", "bat", "big", "bin", "bun", "bed", "bug", "bad"],
    spellingList: ["bag", "bat", "big", "bin", "bun", "bed"],
    gameType: "iSpy",
    worksheetType: "letterHunt"
  },

  // ── GROUP 4 ──────────────────────────────────────────────────
  {
    id: 19, group: 4,
    spelling: "ai", sound: "/ai/",
    action: "Hold your hand out, palm up, and look up at the sky as if feeling raindrops, saying 'ai, ai'.",
    keywords: ["rain", "snail", "train", "tail", "sail", "nail", "mail", "pain"],
    spellingList: ["rain", "tail", "sail", "nail", "snail", "train"],
    gameType: "flashcardFlap",
    worksheetType: "traceAndCopy"
  },
  {
    id: 20, group: 4,
    spelling: "j", sound: "/j/",
    action: "Pretend your arms are wobbly like jelly and say 'j, j, j'.",
    keywords: ["jam", "jet", "jig", "jot", "jug", "jab", "job", "jar"],
    spellingList: ["jam", "jet", "jig", "jot", "jug", "jab"],
    gameType: "clapAndCount",
    worksheetType: "fillInBlank"
  },
  {
    id: 21, group: 4,
    spelling: "oa", sound: "/oa/",
    action: "Put both hands on your cheeks with a surprised face and say 'Oh no, a toad!' — 'oa, oa'.",
    keywords: ["boat", "coat", "road", "toad", "soak", "goal", "loaf", "foam"],
    spellingList: ["boat", "coat", "road", "toad", "soak", "foam"],
    gameType: "wordBuilding",
    worksheetType: "sortIt"
  },
  {
    id: 22, group: 4,
    spelling: "ie", sound: "/ie/",
    action: "Pretend to tie a bow or ribbon in front of you and say 'ie, ie'.",
    keywords: ["pie", "tie", "lie", "die", "cried", "tried", "flies", "dried"],
    spellingList: ["pie", "tie", "lie", "die", "cried", "tried"],
    gameType: "drawAndLabel",
    worksheetType: "pictureWordMatch"
  },
  {
    id: 23, group: 4,
    spelling: "ee", sound: "/ee/",
    action: "Make a donkey face and say 'ee-aw, ee-aw' — then just the 'ee' part.",
    keywords: ["tree", "bee", "feet", "meet", "seed", "feed", "keen", "seen"],
    spellingList: ["tree", "bee", "feet", "seed", "feed", "seen"],
    gameType: "sillySentences",
    worksheetType: "sentenceWriting"
  },
  {
    id: 24, group: 4,
    spelling: "or", sound: "/or/",
    action: "Pretend to row a boat with two oars and say 'or, or, or'.",
    keywords: ["for", "corn", "born", "horn", "fort", "sort", "port", "storm"],
    spellingList: ["for", "corn", "horn", "fort", "sort", "storm"],
    gameType: "beatTheClock",
    worksheetType: "letterHunt"
  },

  // ── GROUP 5 ──────────────────────────────────────────────────
  {
    id: 25, group: 5,
    spelling: "z", sound: "/z/",
    action: "Pretend to zip up a zipper from bottom to top and say 'zzzzz'.",
    keywords: ["zip", "zap", "zero", "zoo", "buzz", "fizz", "jazz", "zig"],
    spellingList: ["zip", "zap", "zoo", "buzz", "fizz", "jazz"],
    gameType: "soundHunt",
    worksheetType: "traceAndCopy"
  },
  {
    id: 26, group: 5,
    spelling: "w", sound: "/w/",
    action: "Wave both hands back and forth like the wind blowing and say 'w, w, w'.",
    keywords: ["wet", "win", "web", "wag", "wig", "wax", "was", "with"],
    spellingList: ["wet", "win", "web", "wag", "wig", "wax"],
    gameType: "iSpy",
    worksheetType: "fillInBlank"
  },
  {
    id: 27, group: 5,
    spelling: "ng", sound: "/ng/",
    action: "Pretend to lift heavy weights, grunt and say 'ng, ng, ng'.",
    keywords: ["sing", "ring", "king", "wing", "gang", "hang", "long", "song"],
    spellingList: ["sing", "ring", "king", "wing", "long", "song"],
    gameType: "flashcardFlap",
    worksheetType: "sortIt"
  },
  {
    id: 28, group: 5,
    spelling: "v", sound: "/v/",
    action: "Pretend to rev a motorbike, twisting the handle, and say 'vvvv'.",
    keywords: ["van", "vet", "vat", "vim", "vast", "vest", "veg", "vow"],
    spellingList: ["van", "vet", "vat", "vast", "vest", "veg"],
    gameType: "clapAndCount",
    worksheetType: "pictureWordMatch"
  },
  {
    id: 29, group: 5,
    spelling: "oo", sound: "/oo/ (short)",
    action: "Hold up a book and look at it, pointing at the page and saying 'oo' (short, as in 'book').",
    keywords: ["book", "cook", "hook", "look", "took", "foot", "good", "wood"],
    spellingList: ["book", "cook", "hook", "look", "foot", "wood"],
    gameType: "wordBuilding",
    worksheetType: "sentenceWriting"
  },
  {
    id: 30, group: 5,
    spelling: "oo", sound: "/oo/ (long)",
    action: "Point up to the moon and zoom your hand up like a rocket, saying 'oooo' (long, as in 'moon').",
    keywords: ["moon", "food", "soon", "tool", "room", "cool", "pool", "noon"],
    spellingList: ["moon", "food", "soon", "tool", "room", "cool"],
    gameType: "drawAndLabel",
    worksheetType: "letterHunt"
  },

  // ── GROUP 6 ──────────────────────────────────────────────────
  {
    id: 31, group: 6,
    spelling: "y", sound: "/y/",
    action: "Hold a yo-yo and move it up and down, saying 'y, y, y'.",
    keywords: ["yet", "yam", "yak", "yes", "yell", "yap", "yarn", "yip"],
    spellingList: ["yet", "yam", "yes", "yell", "yap", "yarn"],
    gameType: "sillySentences",
    worksheetType: "traceAndCopy"
  },
  {
    id: 32, group: 6,
    spelling: "x", sound: "/ks/",
    action: "Pretend to take an X-ray picture, framing the image with your hands, and say 'ks, ks, ks'.",
    keywords: ["fox", "box", "wax", "mix", "six", "tax", "fix", "ox"],
    spellingList: ["fox", "box", "wax", "mix", "six", "fix"],
    gameType: "beatTheClock",
    worksheetType: "fillInBlank"
  },
  {
    id: 33, group: 6,
    spelling: "ch", sound: "/ch/",
    action: "Pump your arms like a choo-choo train and say 'ch, ch, ch'.",
    keywords: ["chin", "chip", "chat", "rich", "much", "such", "each", "arch"],
    spellingList: ["chin", "chip", "chat", "rich", "much", "each"],
    gameType: "soundHunt",
    worksheetType: "sortIt"
  },
  {
    id: 34, group: 6,
    spelling: "sh", sound: "/sh/",
    action: "Put your finger to your lips and say 'shhhh' like asking someone to be quiet.",
    keywords: ["ship", "shop", "fish", "dish", "wish", "cash", "rush", "gush"],
    spellingList: ["ship", "shop", "fish", "dish", "wish", "rush"],
    gameType: "iSpy",
    worksheetType: "pictureWordMatch"
  },
  {
    id: 35, group: 6,
    spelling: "th", sound: "/th/ (voiced)",
    action: "Gently stick your tongue between your teeth and say 'th' — feel the vibration. Used in: this, that, the, them.",
    keywords: ["this", "that", "the", "them", "then", "with", "bathe", "soothe"],
    spellingList: ["this", "that", "them", "then", "with", "those"],
    gameType: "flashcardFlap",
    worksheetType: "sentenceWriting"
  },
  {
    id: 36, group: 6,
    spelling: "th", sound: "/th/ (unvoiced)",
    action: "Gently stick your tongue between your teeth and blow air — no voice. Used in: think, three, thin, bath.",
    keywords: ["thin", "thick", "moth", "bath", "math", "cloth", "three", "think"],
    spellingList: ["thin", "thick", "bath", "moth", "three", "think"],
    gameType: "clapAndCount",
    worksheetType: "letterHunt"
  },

  // ── GROUP 7 ──────────────────────────────────────────────────
  {
    id: 37, group: 7,
    spelling: "qu", sound: "/kw/",
    action: "Wave your hand like a queen greeting her subjects and say 'kw, kw, kw'.",
    keywords: ["quiz", "quit", "quip", "quick", "queen", "quill", "quad", "quest"],
    spellingList: ["quiz", "quit", "quick", "queen", "quill", "quest"],
    gameType: "wordBuilding",
    worksheetType: "traceAndCopy"
  },
  {
    id: 38, group: 7,
    spelling: "ou", sound: "/ou/",
    action: "Shake your hand as if you have touched something hot and say 'ou, ou, ouch!'.",
    keywords: ["out", "our", "loud", "cloud", "shout", "round", "found", "sound"],
    spellingList: ["out", "loud", "shout", "round", "found", "sound"],
    gameType: "drawAndLabel",
    worksheetType: "fillInBlank"
  },
  {
    id: 39, group: 7,
    spelling: "oi", sound: "/oi/",
    action: "Jingle imaginary coins in your pocket and say 'oi, oi, oi'.",
    keywords: ["oil", "toil", "coil", "foil", "boil", "coin", "join", "soil"],
    spellingList: ["oil", "coil", "foil", "boil", "coin", "soil"],
    gameType: "sillySentences",
    worksheetType: "sortIt"
  },
  {
    id: 40, group: 7,
    spelling: "ue", sound: "/ue/",
    action: "Pretend to blow a flute or trumpet and say 'ue, ue, ue'.",
    keywords: ["clue", "blue", "true", "glue", "flue", "due", "hue", "cue"],
    spellingList: ["clue", "blue", "true", "glue", "due", "cue"],
    gameType: "beatTheClock",
    worksheetType: "pictureWordMatch"
  },
  {
    id: 41, group: 7,
    spelling: "er", sound: "/er/",
    action: "Pretend you are nervous and stutter a little, saying 'er... er... er...'.",
    keywords: ["her", "fern", "verb", "term", "jerk", "perk", "herd", "stern"],
    spellingList: ["her", "fern", "verb", "term", "herd", "stern"],
    gameType: "soundHunt",
    worksheetType: "sentenceWriting"
  },
  {
    id: 42, group: 7,
    spelling: "ar", sound: "/ar/",
    action: "Open your mouth wide like you are at the doctor saying 'ahhh' and say 'ar, ar, ar'.",
    keywords: ["car", "bar", "jar", "tar", "far", "star", "farm", "harm"],
    spellingList: ["car", "bar", "jar", "far", "star", "farm"],
    gameType: "iSpy",
    worksheetType: "letterHunt"
  }
];
