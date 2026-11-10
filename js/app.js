/* ===================== NVS English Quest — App (Version 3D) =====================
   Application logic only. All learning content lives in the data/ folder and is
   registered in window.NVS_CONTENT. Progress storage lives in js/progress.js and
   the Reading Library lives in js/reading.js. Teachers never need to edit this file. */
(function () {
"use strict";
const C = window.NVS_CONTENT;
const APP_VERSION = "3E";

/* ---------- Icons ---------- */
const ICONS = {
  book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/><path d="M8 7h7M8 11h5"/>',
  flask:'<path d="M9 3h6"/><path d="M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/>',
  dumbbell:'<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>',
  headphones:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/>',
  pen:'<path d="M15 4l5 5L9 20H4v-5z"/><path d="M13 6l5 5"/>',
  trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4"/><path d="M12 13v4M8 21h8M9 17h6"/>',
  route:'<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7"/>',
  medal:'<circle cx="12" cy="15" r="5"/><path d="M8.5 11 6 3h4l2 5 2-5h4l-2.5 8"/>',
  home:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
  star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  speaker:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',
  play:'<path d="M7 5v14l11-7z"/>',
  pause:'<path d="M8 5v14M16 5v14"/>',
  stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  chart:'<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
  search:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bolt:'<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>',
  calendar:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  up:'<path d="M12 19V5M6 11l6-6 6 6"/>',
  down:'<path d="M12 5v14M6 13l6 6 6-6"/>',
  undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  layers:'<path d="M12 3 3 8l9 5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  scale:'<path d="M12 4v16M5 20h14M6 8h12"/><path d="M6 8l-3 6a3 3 0 0 0 6 0zM18 8l-3 6a3 3 0 0 0 6 0z"/>',
  doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>'
};
const icon = (n, cls) => `<svg class="ic ${cls || ""}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[n] || ""}</svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const $ = s => document.querySelector(s);
const fmtDate = iso => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

/* ---------- Areas ---------- */
const AREAS = {
  reading:   { name: "Reading Academy",  route: "#reading",   icon: "book",       short: "reading",    desc: "Read short texts and answer questions. Build your reading skills level by level." },
  vocab:     { name: "Vocabulary Lab",   route: "#vocab",     icon: "flask",      short: "vocabulary", desc: "Learn useful everyday and academic words: meanings, synonyms, and opposites." },
  grammar:   { name: "Grammar Gym",      route: "#grammar",   icon: "dumbbell",   short: "grammar",    desc: "Practice the grammar rules you need to write and speak correctly." },
  listening: { name: "Listening Corner", route: "#listening", icon: "headphones", short: "listening",  desc: "Listen to conversations, announcements, and talks. Answer questions about what you hear." },
  writing:   { name: "Writing Workshop", route: "#writing",   icon: "pen",        short: "writing",    desc: "Build sentences and paragraphs step by step, then write on your own with support." },
  challenge: { name: "Challenge Arena",  route: "#challenge", icon: "trophy",     short: "challenge",  desc: "Review what you have learned with mixed-skill challenges. Beat your own best score." }
};
const LEARN_AREAS = ["reading", "vocab", "grammar", "listening", "writing"];
const WTYPE = { order: "Sentence Ordering", correct: "Sentence Correction", choose: "Choose the Best Sentence", para: "Paragraph Organization", guided: "Guided Writing" };

/* ---------- Build activities from content ---------- */
const hash = s => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
const PATTERN = [0, 2, 1, 3, 2];
const baseSkill = s => s.replace(/\s*\(.*\)\s*$/, "");
const ACTIVITIES = {}, ORDER = [], ALLQ = [];
function mcqOptions(aid, i, opts) {   /* same fixed ordering as Version 1 (keeps saved data meaningful) */
  const pos = (hash(aid) % 4 + PATTERN[i % 5]) % 4; const wrong = opts.slice(1); let w = 0; const out = [];
  for (let k = 0; k < 4; k++) { if (k === pos) out.push({ t: opts[0][0], correct: true }); else { const o = wrong[w++]; out.push({ t: o[0], why: o[1], correct: false }); } }
  return out;
}
function makeQ(area, aid, i, src, kind, extra) {
  const q = Object.assign({ id: `${aid}-${area === "writing" ? "i" : "q"}${i + 1}`, n: i + 1, area, aid, kind,
    skill: src.skill, skillKey: area + ":" + baseSkill(src.skill), skillName: baseSkill(src.skill),
    q: src.q || "", hint: src.hint, exp: src.exp, ev: src.ev || null }, extra || {});
  ALLQ.push(q); return q;
}
function addActivity(a, area, extra, buildQs) {
  const act = Object.assign({ id: a.id, area, title: a.title }, extra);
  act.questions = buildQs ? buildQs(a) : a.questions.map((src, i) => makeQ(area, a.id, i, src, "mcq", { options: mcqOptions(a.id, i, src.opts) }));
  ACTIVITIES[a.id] = act; ORDER.push(a.id); return act;
}
const wc = t => t.split(/\s+/).filter(Boolean).length;
C.reading.passages.forEach(p => addActivity(p, "reading", { level: p.level, topic: p.topic, category: p.category, text: p.text, before: p.before || null, words: wc(p.text.join(" ")), route: `#reading/${p.id}` }));
const PRACTICE_LEVELS = C.practiceLevels || [{ n: 1, name: "Foundation" }, { n: 2, name: "Developing" }, { n: 3, name: "Building" }, { n: 4, name: "Advancing" }];
const plName = n => (PRACTICE_LEVELS.find(l => l.n === n) || { name: "" }).name;
const bySetOrder = (a, b) => (a.order || 0) - (b.order || 0);
C.checkSets(C.vocab || [], "vocabulary").sort(bySetOrder).forEach(s => addActivity(s, "vocab", { desc: s.desc, order: s.order, plevel: s.level, topic: s.topic, learn: s.learn, extra: !!s.extra, route: `#vocab/${s.id}` }));
C.checkSets(C.grammar || [], "grammar").sort(bySetOrder).forEach(s => addActivity(s, "grammar", { desc: s.desc, order: s.order, plevel: s.level, topic: s.topic, learn: s.learn, extra: !!s.extra, route: `#grammar/${s.id}` }));
const setLabel = a => a.extra ? "Extra practice" : `Set ${a.order}`;
C.listening.activities.forEach(l => addActivity(l, "listening", { level: l.level, topic: l.topic, format: l.format, intro: l.intro, vocab: l.vocab || [], script: l.script, speakers: l.speakers, voices: l.voices || {},
  words: wc(l.script.map(x => x.t).join(" ")), route: `#listening/${l.id}` }));
function shuffledOrder(n, seed) {   /* deterministic shuffle that never equals the correct order */
  const idx = [...Array(n).keys()]; let h = seed;
  for (let i = n - 1; i > 0; i--) { h = (h * 1103515245 + 12345) >>> 0; const j = h % (i + 1); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  const bad = a => a[0] === 0 || a[n - 1] === n - 1 || a.every((v, i) => v === i);
  for (let r = 0; r < n && bad(idx); r++) idx.push(idx.shift());
  if (bad(idx)) { idx.reverse(); }
  return idx;
}
C.writing.activities.forEach(w => addActivity(w, "writing", { level: w.level, wtype: w.type, desc: w.desc, route: `#writing/${w.id}`, guided: w.type === "guided",
  prompt: w.prompt, minSentences: w.minSentences, wordBank: w.wordBank, starters: w.starters, model: w.model, checklist: w.checklist,
  learn: w.learn || null, plan: w.plan || [], criteria: w.criteria || [], revise: w.revise || [] }, a => {
  if (a.type === "guided") return [];
  return a.items.map((it, i) => {
    if (a.type === "choose") return makeQ("writing", a.id, i, it, "mcq", { options: mcqOptions(a.id, i, it.opts) });
    if (a.type === "order") return makeQ("writing", a.id, i, it, "order", { q: it.task || "Build the sentence. Tap the words in the correct order.", tiles: it.tiles, accept: it.accept });
    if (a.type === "correct") return makeQ("writing", a.id, i, it, "correct", { q: it.task || "Find the mistake and rewrite the sentence correctly.", wrong: it.wrong, accept: it.accept, checks: it.checks || [] });
    return makeQ("writing", a.id, i, it, "para", { q: "Put the sentences in the best order to make a paragraph.", sentences: it.sentences, roles: it.roles, accept: it.accept, start: shuffledOrder(it.sentences.length, hash(i ? a.id + "-" + i : a.id)) });
  });
}));
const SKILLS = {};
ALLQ.forEach(q => { (SKILLS[q.skillKey] = SKILLS[q.skillKey] || { key: q.skillKey, area: q.area, name: q.skillName, total: 0 }).total++; });
const PASSAGES = C.reading.passages, LISTEN = C.listening.activities;
const actsIn = area => ORDER.filter(id => ACTIVITIES[id].area === area);
const LEVELSETS = { reading: C.reading.levels, listening: C.listening.levels, writing: C.writing.levels };

/* ---------- Storage: see js/progress.js (same key and format as Versions 1 and 2) ---------- */
let S = NVSProgress.load();
function save() { NVSProgress.save(S); }
/* Version 3E: optional anonymous analytics (js/analytics.js). Does nothing unless the school turns it on, and never throws. */
const track = (e, key) => { try { if (window.NVSAnalytics) window.NVSAnalytics.track(e, key); } catch (x) {} };
let practiceRounds = 0;
/* Version 3E compatibility: the Version 3D supplementary set g21 was merged into g3. Its questions 2–4 are now
   g3 questions 6–8, word for word, so earlier answers are copied across once. The g21 records themselves are kept
   (never deleted), but they no longer count toward totals because g21 is no longer an activity. */
(function migrate3E() {
  const map = { "g21-q2": "g3-q6", "g21-q3": "g3-q7", "g21-q4": "g3-q8" }; let changed = false;
  Object.entries(map).forEach(([from, to]) => { if (S.q[from] && !S.q[to]) { S.q[to] = Object.assign({}, S.q[from]); changed = true; } });
  if (changed) save();
})();
const started = () => Object.values(S.q).some(r => r.a > 0) || Object.values(S.w).some(d => d.text && d.text.trim()) || S.ch.runs.length > 0;

/* ---------- Statistics ---------- */
function statsFor(qs) {
  let solved = 0, att = 0, first = 0;
  qs.forEach(q => { const r = S.q[q.id]; if (!r) return; if (r.a > 0) att++; if (r.s) solved++; if (r.f) first++; });
  return { total: qs.length, solved, att, first, completion: pct(solved, qs.length), mastery: pct(first, qs.length), accuracy: att ? pct(first, att) : null };
}
const areaStats = area => statsFor(ALLQ.filter(q => q.area === area));
const actStats = id => statsFor(ACTIVITIES[id].questions);
const isDone = id => !!S.done[id];
const doneIn = area => actsIn(area).filter(isDone);
const structured = () => actsIn("writing").filter(id => !ACTIVITIES[id].guided);
const guidedActs = () => actsIn("writing").filter(id => ACTIVITIES[id].guided);
function skillStatus(sk) {
  const s = statsFor(ALLQ.filter(q => q.skillKey === sk.key));
  const need = Math.min(3, sk.total);
  s.mastered = s.att >= need && s.accuracy !== null && s.accuracy >= 80;
  s.label = s.att === 0 ? "Not started" : s.mastered ? "Mastered" : s.att < need ? "Practicing" : "Keep practicing";
  return s;
}
const masteredSkills = () => Object.values(SKILLS).filter(sk => skillStatus(sk).mastered).length;
function actState(id) {
  const a = ACTIVITIES[id]; const done = S.done[id];
  if (a.guided) { const d = S.w[id]; return { st: null, done, inProgress: !done && !!(d && d.text && d.text.trim()) }; }
  const st = actStats(id); return { st, done, inProgress: !done && st.att > 0 };
}
function levelFor(area) {
  let lvl = 1;
  if (area === "writing") {
    [1, 2, 3, 4, 5].forEach(L => { const ds = structured().filter(id => ACTIVITIES[id].level === L && isDone(id));
      if (ds.length >= 3 && ds.reduce((t, id) => t + S.done[id].firstAcc, 0) / ds.length >= 70) lvl = Math.max(lvl, Math.min(L + 1, 5)); });
    return lvl;
  }
  actsIn(area).forEach(id => { const d = S.done[id]; if (d && d.firstAcc >= 80) lvl = Math.max(lvl, Math.min(ACTIVITIES[id].level + 1, 5)); });
  return lvl;
}
const readingLevel = () => Math.max((S.sc && S.sc.suggested) || 1, levelFor("reading"));
const levelLabel = (n, area) => `Level ${n} — ${LEVELSETS[area || "reading"][n - 1].name}`;
const totalActs = () => ORDER.length;
const overallDone = () => ORDER.filter(isDone).length;

/* ---------- Weekly key & seeded random ---------- */
function isoWeek(d) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = t.getUTCFullYear(); const w = Math.ceil(((t - Date.UTC(y, 0, 1)) / 86400000 + 1) / 7);
  return { key: `${y}-W${String(w).padStart(2, "0")}`, label: `Week ${w}, ${y}` };
}
const thisWeek = () => isoWeek(new Date());
function rngFrom(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function sample(arr, n, rnd) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); }
const runsOf = mode => S.ch.runs.filter(r => r.mode === mode);

/* ---------- Badges ---------- */
const BADGES = [
  { id: "first-steps", name: "First Steps", icon: "star", desc: "Complete your first activity in any learning area.",
    prog() { return { cur: Math.min(overallDone(), 1), goal: 1 }; } },
  { id: "word-explorer", name: "Word Explorer", icon: "flask", desc: "Complete 10 vocabulary questions.",
    prog() { return { cur: Math.min(areaStats("vocab").solved, 10), goal: 10 }; } },
  { id: "grammar-builder", name: "Grammar Builder", icon: "dumbbell", desc: "Complete 10 grammar questions.",
    prog() { return { cur: Math.min(areaStats("grammar").solved, 10), goal: 10 }; } },
  { id: "reading-detective", name: "Reading Detective", icon: "search", desc: "Complete 3 reading passages.",
    prog() { return { cur: Math.min(doneIn("reading").length, 3), goal: 3 }; } },
  { id: "careful-reader", name: "Careful Reader", icon: "eye", desc: "Get at least 80% first-try accuracy on a reading passage.",
    prog() { const best = Math.max(0, ...doneIn("reading").map(id => S.done[id].firstAcc)); return { cur: best >= 80 ? 1 : 0, goal: 1, note: best ? `Best so far: ${best}%` : "" }; } },
  { id: "english-champion", name: "English Champion", icon: "trophy", desc: "Show mastery in Reading, Vocabulary, and Grammar: at least 10 questions answered and 80% first-try accuracy in each.",
    prog() { const n = ["reading", "vocab", "grammar"].filter(a => { const s = areaStats(a); return s.att >= 10 && s.accuracy >= 80; }).length; return { cur: n, goal: 3, note: `${n} of 3 skill areas mastered` }; } },
  { id: "active-listener", name: "Active Listener", icon: "headphones", desc: "Complete three listening activities.",
    prog() { return { cur: Math.min(doneIn("listening").length, 3), goal: 3 }; } },
  { id: "listening-detective", name: "Listening Detective", icon: "speaker", desc: "Get at least 80% first-try accuracy on one listening activity.",
    prog() { const best = Math.max(0, ...doneIn("listening").map(id => S.done[id].firstAcc)); return { cur: best >= 80 ? 1 : 0, goal: 1, note: best ? `Best so far: ${best}%` : "" }; } },
  { id: "sentence-builder", name: "Sentence Builder", icon: "pen", desc: "Complete five structured writing activities (not guided writing).",
    prog() { return { cur: Math.min(structured().filter(isDone).length, 5), goal: 5 }; } },
  { id: "paragraph-organizer", name: "Paragraph Organizer", icon: "layers", desc: "Successfully complete three paragraph organization activities.",
    prog() { return { cur: Math.min(structured().filter(id => ACTIVITIES[id].wtype === "para" && isDone(id)).length, 3), goal: 3 }; } },
  { id: "quick-quest-explorer", name: "Quick Quest Explorer", icon: "bolt", desc: "Complete your first Quick Quest in the Challenge Arena.",
    prog() { return { cur: Math.min(runsOf("quick").length, 1), goal: 1 }; } },
  { id: "weekly-challenger", name: "Weekly Challenger", icon: "calendar", desc: "Complete a Weekly English Quest. Each week you finish is also recorded below.",
    prog() { return { cur: Math.min(Object.keys(S.ch.weekly).length, 1), goal: 1 }; } },
  { id: "balanced-learner", name: "Balanced Learner", icon: "scale", desc: "Complete at least one activity in Reading, Vocabulary, Grammar, Listening, and Writing.",
    prog() { const n = LEARN_AREAS.filter(a => doneIn(a).length > 0).length; return { cur: n, goal: 5, note: `${n} of 5 areas` }; } }
];
function checkBadges() {
  const newly = [];
  BADGES.forEach(b => { const p = b.prog(); if (!S.badges[b.id] && p.cur >= p.goal) { S.badges[b.id] = new Date().toISOString(); newly.push(b); } });
  return newly;
}
const badgeCount = () => Object.keys(S.badges).filter(k => BADGES.some(b => b.id === k)).length;

/* ---------- Recommendations ---------- */
function nextInArea(area) {
  const ids = actsIn(area).filter(id => !isDone(id));
  if (!ids.length) return null;
  if (area === "vocab" || area === "grammar") return ids[0];
  const L = levelFor(area);
  return ids.slice().sort((a, b) => Math.abs(ACTIVITIES[a].level - L) - Math.abs(ACTIVITIES[b].level - L) || ACTIVITIES[a].level - ACTIVITIES[b].level)[0];
}
function recommend() {
  const inProg = id => id && ACTIVITIES[id] && actState(id).inProgress;
  if (inProg(S.last)) return { id: S.last, why: "You started this activity. Pick up where you stopped.", cta: "Continue" };
  const any = ORDER.find(inProg);
  if (any) return { id: any, why: "You started this activity. Pick up where you stopped.", cta: "Continue" };
  const cands = LEARN_AREAS.map(a => ({ a, id: nextInArea(a), score: doneIn(a).length / actsIn(a).length - (a === "reading" ? 0.15 : 0) })).filter(c => c.id);
  if (!cands.length) return null;
  cands.sort((x, y) => x.score - y.score);
  const c = cands[0]; const act = ACTIVITIES[c.id];
  const why = act.level ? `Recommended for your level in ${AREAS[c.a].name} (${levelLabel(levelFor(c.a), c.a)}).` : `Keep your skills balanced. Practice in ${AREAS[c.a].name}.`;
  return { id: c.id, why, cta: "Start" };
}
function activityWithSkill(skillKey) {
  const ids = [...new Set(ALLQ.filter(q => q.skillKey === skillKey).map(q => q.aid))];
  return ids.find(id => !isDone(id)) || ids[0];
}
function journeyRecs() {
  const recs = [];
  if (window.NVSReading) NVSReading.recommendations().forEach(r => recs.push(r));
  const weak = Object.values(SKILLS).filter(sk => sk.area !== "reading" || !window.NVSReading).map(sk => ({ sk, st: skillStatus(sk) })).filter(x => x.st.att >= 2 && x.st.accuracy < 70).sort((a, b) => a.st.accuracy - b.st.accuracy);
  weak.slice(0, 2).forEach(({ sk, st }) => recs.push({ icon: "target", text: `Your ${AREAS[sk.area].short} “${sk.name.toLowerCase()}” accuracy is ${st.accuracy}%, which is below 70%. Try another ${sk.name.toLowerCase()} activity.`, id: activityWithSkill(sk.key) }));
  /* grammar: doing well → next topic */
  const gGood = doneIn("grammar").filter(id => S.done[id].firstAcc >= 80).sort((a, b) => String(S.done[b].at).localeCompare(String(S.done[a].at)))[0];
  if (gGood) { const cur = ACTIVITIES[gGood]; const nx = actsIn("grammar").find(id => !isDone(id) && ACTIVITIES[id].order > cur.order) || actsIn("grammar").find(id => !isDone(id));
    if (nx) recs.push({ icon: "dumbbell", text: `You are doing well with ${cur.topic.toLowerCase()} (${S.done[gGood].firstAcc}% on the first try). Try ${ACTIVITIES[nx].topic.toLowerCase()} next.`, id: nx }); }
  /* vocabulary: improving trend, or a set to review */
  const vt = ALLQ.filter(q => q.area === "vocab" && S.q[q.id] && S.q[q.id].t).map(q => ({ t: S.q[q.id].t, f: S.q[q.id].f, topic: ACTIVITIES[q.aid].topic })).sort((a, b) => a.t - b.t);
  if (vt.length >= 10) { const h = Math.floor(vt.length / 2); const early = pct(vt.slice(0, h).filter(x => x.f).length, h), late = pct(vt.slice(h).filter(x => x.f).length, vt.length - h);
    const nx = actsIn("vocab").find(id => !isDone(id));
    if (late - early >= 15 && nx) recs.push({ icon: "flask", text: `Your vocabulary accuracy is improving (from ${early}% to ${late}% on the first try, most recently in ${vt[vt.length - 1].topic.toLowerCase()}). Continue with another topic: ${ACTIVITIES[nx].topic}.`, id: nx }); }
  const vWeak = doneIn("vocab").filter(id => S.done[id].firstAcc < 60)[0];
  if (vWeak) recs.push({ icon: "flask", text: `Your first-try score in “${ACTIVITIES[vWeak].title}” was ${S.done[vWeak].firstAcc}%. Review the words, then try a practice round.`, id: vWeak });
  const gDone = doneIn("grammar").length;
  if (gDone > 0) {
    const shown = weak.slice(0, 2).map(w => w.sk.key);
    const gs = Object.values(SKILLS).filter(s => s.area === "grammar" && !shown.includes(s.key)).map(sk => ({ sk, st: skillStatus(sk) })).filter(x => x.st.att > 0).sort((a, b) => a.st.accuracy - b.st.accuracy)[0];
    const setWord = `You have completed ${gDone} grammar ${gDone === 1 ? "set" : "sets"}.`;
    const nextG = nextInArea("grammar");
    if (gs && gs.st.accuracy >= 80 && !nextG) recs.push({ icon: "dumbbell", text: `${setWord} Your grammar accuracy is strong. Keep it sharp with a Skill Sprint.`, route: "#challenge/sprint" });
    else if (gs) recs.push({ icon: "dumbbell", text: `${setWord} Continue practicing ${gs.sk.name.toLowerCase()} (${gs.st.accuracy}% first-try accuracy so far).`, id: nextG || activityWithSkill(gs.sk.key) });
    else recs.push({ icon: "dumbbell", text: nextG ? `${setWord} Continue with “${ACTIVITIES[nextG].title}”.` : `${setWord} You have finished every grammar set. Review them in the Challenge Arena.`, id: nextG, route: nextG ? null : "#challenge/sprint" });
  }
  const ld = doneIn("listening").sort((a, b) => S.done[a].at.localeCompare(S.done[b].at));
  if (ld.length) {
    const L = levelFor("listening"); const nxt = nextInArea("listening");
    if (ld.length >= 2 && S.done[ld[ld.length - 1]].firstAcc > S.done[ld[ld.length - 2]].firstAcc)
      recs.push({ icon: "headphones", text: `Your listening practice is improving (from ${S.done[ld[ld.length - 2]].firstAcc}% to ${S.done[ld[ld.length - 1]].firstAcc}% on the first try). ${nxt ? `Try a Level ${ACTIVITIES[nxt].level} ${ACTIVITIES[nxt].format.toLowerCase()}.` : ""}`, id: nxt });
    else if (nxt) recs.push({ icon: "headphones", text: `Keep building your listening. Your listening level is ${levelLabel(L, "listening")}. Try “${ACTIVITIES[nxt].title}”.`, id: nxt });
  }
  const sDone = structured().filter(isDone).length, gDrafts = guidedActs().filter(isDone).length;
  if (sDone >= 2 && gDrafts === 0) recs.push({ icon: "pen", text: `You have completed ${sDone} structured writing activities. Now try a guided writing task to practice writing on your own.`, id: guidedActs().find(id => ACTIVITIES[id].level <= levelFor("writing")) || guidedActs()[0] });
  LEARN_AREAS.forEach(a => { if (started() && !ALLQ.some(q => q.area === a && S.q[q.id]) && !doneIn(a).length) { const id = nextInArea(a); if (id) recs.push({ icon: AREAS[a].icon, text: `You have not tried ${AREAS[a].name} yet. Start with “${ACTIVITIES[id].title}”.`, id }); } });
  if (started() && !S.ch.weekly[thisWeek().key]) recs.push({ icon: "calendar", text: `This week’s Weekly English Quest (${thisWeek().label}) is ready. It reviews reading, vocabulary, grammar, and listening.`, route: "#challenge/weekly" });
  if (!started()) { const id = nextInArea("reading"); recs.push({ icon: "book", text: "Start your journey with a Level 1 reading passage.", id }); }
  return recs.slice(0, 6);
}

/* ---------- UI helpers ---------- */
function bar(p, cls, label) {
  return `<div class="bar ${cls || ""}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${p}" aria-label="${esc(label || "Progress")}"><span style="width:${p}%"></span></div>`;
}
function barRow(label, p, cls, right) {
  return `<div class="bar-row"><div class="bar-label"><span>${label}</span><strong>${right !== undefined ? right : p + "%"}</strong></div>${bar(p, cls, label)}</div>`;
}
function announce(msg) { const el = $("#srLive"); el.textContent = ""; setTimeout(() => { el.textContent = msg; }, 60); }
let toastTimer;
function toast(html) { const t = $("#toast"); t.innerHTML = html; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 4200); }
function celebrate(newly) { if (newly.length) toast(`${icon("medal")}<span>Badge earned: ${newly.map(b => esc(b.name)).join(", ")}</span>`); }
function statusHTML(id) {
  const a = ACTIVITIES[id]; const { st, done, inProgress } = actState(id);
  if (a.guided) {
    if (done) return `<span class="status done">${icon("check")} Draft completed (self-checked)</span>`;
    if (inProgress) return `<span class="status prog">${icon("pen")} Draft saved</span>`;
    return `<span class="status new">Not started · open writing</span>`;
  }
  if (done) return `<span class="status done">${icon("check")} Completed · ${done.firstAcc}% first try</span>`;
  if (inProgress) return `<span class="status prog">${icon("refresh")} In progress · ${st.solved} of ${st.total}</span>`;
  return `<span class="status new">Not started · ${st.total} ${st.total === 1 ? "task" : "questions"}</span>`;
}
const accText = a => (a === null ? "—" : a + "%");

/* ===================== LISTENING PLAYER (SpeechSynthesis) ===================== */
const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
const Player = { act: null, chunks: [], i: 0, state: "idle", rate: 1, token: 0, root: null, audio: null, mode: "speech" };
/* Recorded audio: one MP3 per listening activity (audio/listening/<id>.mp3), made from the exact script with
   natural voices matched to each speaker. If a file cannot load or play, the player falls back to browser speech. */
const LISTEN_AUDIO_DIR = "audio/listening/";
/* Joke voices that some Apple devices list as English; never use them to read an activity. */
const NOVELTY_VOICES = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox)\b/i;
function englishVoices() {
  if (!canSpeak) return [];
  const v = speechSynthesis.getVoices().filter(x => /^en[-_]/i.test(x.lang) && !NOVELTY_VOICES.test(x.name || ""));
  return v.sort((a, b) => (/en[-_](US|GB)/i.test(b.lang) ? 1 : 0) - (/en[-_](US|GB)/i.test(a.lang) ? 1 : 0));
}
function stopSpeech() { Player.token++; Player.state = "idle"; if (Player.audio) { try { Player.audio.pause(); } catch (e) {} } if (canSpeak) { try { speechSynthesis.cancel(); } catch (e) {} } }
function playerHTML(act) {
  const sp = Object.entries(act.speakers).map(([n, r]) => `<strong>${esc(n)}</strong> (${esc(r)})`).join(", ");
  const transcript = act.script.map(l => `<p><strong>${esc(l.sp)}:</strong> ${esc(l.t)}</p>`).join("");
  return `
    <p class="small"><span class="muted">Speakers:</span> ${sp}</p>
    ${canSpeak ? `<div class="player" id="player">
      <div class="btn-row">
        <button class="btn primary" type="button" data-pa="play">${icon("play")} Play</button>
        <button class="btn ghost" type="button" data-pa="pause" disabled>${icon("pause")} Pause</button>
        <button class="btn ghost" type="button" data-pa="resume" disabled>${icon("play")} Resume</button>
        <button class="btn ghost" type="button" data-pa="replay" disabled>${icon("refresh")} Replay</button>
      </div>
      <fieldset class="speed"><legend>Speed</legend>
        ${[0.75, 1, 1.25].map(r => `<label><input type="radio" name="speed" value="${r}" ${r === Player.rate ? "checked" : ""}><span>${r}×</span></label>`).join("")}
      </fieldset>
      <p class="player-status" id="playerStatus" role="status">Ready. Press Play to listen.</p>
      <div class="bar gold" aria-hidden="true"><span id="playerProg" style="width:0%"></span></div>
    </div>`
    : `<div class="notice sample" role="note">${icon("info")}<p><strong>Audio is not available in this browser.</strong> Your browser does not support speech playback. Please use the <strong>Show Transcript</strong> button to read the script instead, or try a different browser (for example, Chrome, Edge, or Safari).</p></div>`}
    <div class="btn-row" style="margin-top:.8rem"><button class="btn ghost" type="button" id="trBtn" aria-expanded="false" aria-controls="transcript" aria-describedby="trNote">${icon("doc")} Show Transcript</button></div>
    <p class="small muted" id="trNote"></p>
    <div class="transcript" id="transcript" hidden><p class="eyebrow">Transcript</p>${transcript}</div>`;
}
/* The transcript opens only after the first listening attempt: when the student has answered every question once
   (the activity is complete). It is always available if this browser cannot play audio, or if playback fails. */
function transcriptOpen(act) { return !canSpeak || Player.state === "error" || !!S.done[act.id]; }
function updateTranscriptLock() {
  const r = Player.root, act = Player.act; if (!r || !act || !r.isConnected) return;
  const b = r.querySelector("#trBtn"), note = r.querySelector("#trNote"); if (!b) return;
  const open = transcriptOpen(act);
  b.disabled = !open;
  if (note) note.textContent = open ? (S.done[act.id] ? "Use the transcript to check what you heard." : "Audio is not available, so you can read the transcript.") : "The transcript opens after you answer all the questions. Listen first.";
  if (!open) { const box = r.querySelector("#transcript"); if (box) box.hidden = true; }
}
function listenPreviewHTML(act) {
  const words = (act.vocab || []).map(([w, m]) => `<li><strong>${esc(w)}</strong>: ${esc(m)}</li>`).join("");
  return `${act.intro ? `<p class="listen-intro">${esc(act.intro)}</p>` : ""}${words ? `<div class="listen-words"><p class="eyebrow">Useful words</p><ul>${words}</ul></div>` : ""}`;
}
function bindPlayer(act, root) {
  stopSpeech(); Player.act = act; Player.i = 0; Player.root = root;
  Player.chunks = [];
  act.script.forEach(l => (l.t.match(/[^.!?]+[.!?]+["”’]?|[^.!?]+$/g) || [l.t]).forEach(s => Player.chunks.push({ sp: l.sp, t: s.trim() })));
  const tr = root.querySelector("#trBtn");
  if (tr) tr.addEventListener("click", () => { if (!transcriptOpen(act)) return; const box = root.querySelector("#transcript"); const open = box.hidden; box.hidden = !open; tr.setAttribute("aria-expanded", String(open)); tr.innerHTML = `${icon("doc")} ${open ? "Hide Transcript" : "Show Transcript"}`; });
  updateTranscriptLock();
  if (!canSpeak) return;
  root.querySelectorAll("[data-pa]").forEach(b => b.addEventListener("click", () => playerAction(b.dataset.pa)));
  root.querySelectorAll('input[name="speed"]').forEach(r => r.addEventListener("change", () => { Player.rate = Number(r.value);
    if (Player.mode === "file" && Player.audio) Player.audio.playbackRate = Player.rate;
    else if (Player.state === "playing") { Player.token++; speechSynthesis.cancel(); speakChunk(); }
    updatePlayerUI(); }));
  Player.audio = null; Player.mode = "speech";
  if (typeof Audio !== "undefined") {
    const au = new Audio(); au.preload = "auto"; Player.audio = au; Player.mode = "file";
    au.addEventListener("ended", () => { if (Player.audio !== au) return; Player.state = "done"; updatePlayerUI(); });
    au.addEventListener("timeupdate", () => { if (Player.audio === au) updatePlayerUI(); });
    au.addEventListener("error", () => { if (Player.audio === au) audioFailed(); });
    au.src = LISTEN_AUDIO_DIR + act.id + ".mp3";
  }
  updatePlayerUI();
}
/* The recording could not load or play: switch to browser speech (and keep playing if the student pressed Play). */
function audioFailed() {
  if (Player.audio) { try { Player.audio.pause(); } catch (e) {} }
  Player.audio = null; Player.mode = "speech";
  if (Player.state === "playing") { Player.i = 0; speakChunk(); } else updatePlayerUI();
}
function startFile(au) {
  Player.state = "playing"; au.playbackRate = Player.rate;
  let p; try { p = au.play(); } catch (e) { audioFailed(); return; }
  if (p && p.catch) p.catch(err => { if (Player.audio !== au || (err && err.name === "AbortError")) return; audioFailed(); });
}
function speakChunk() {
  const my = ++Player.token;
  if (Player.i >= Player.chunks.length) { Player.state = "done"; updatePlayerUI(); return; }
  const c = Player.chunks[Player.i];
  const u = new SpeechSynthesisUtterance(c.t);
  const style = (Player.act.voices || {})[c.sp] || "a";
  const voices = englishVoices();
  const vi = { a: 0, b: 1, c: 2 }[style] || 0;
  if (voices.length) { try { u.voice = voices[Math.min(vi, voices.length - 1)]; } catch (e) {} }
  u.lang = u.voice ? u.voice.lang : "en-US";
  u.pitch = { a: 1.05, b: 0.85, c: 1.25 }[style] || 1;
  u.rate = Player.rate;
  u.onend = () => { if (my !== Player.token || Player.state !== "playing") return; Player.i++; speakChunk(); };
  u.onerror = e => { if (my !== Player.token || Player.state !== "playing") return;
    if (e && (e.error === "interrupted" || e.error === "canceled")) return;
    Player.state = "error"; updatePlayerUI(); };
  speechSynthesis.speak(u); updatePlayerUI();
}
function playerAction(a) {
  const au = Player.mode === "file" ? Player.audio : null;
  if (au) {
    if (a === "play" || a === "replay") { try { au.currentTime = 0; } catch (e) {} startFile(au); }
    else if (a === "pause") { Player.state = "paused"; au.pause(); }
    else if (a === "resume") startFile(au);
    updatePlayerUI(); return;
  }
  if (a === "play" || a === "replay") { Player.token++; speechSynthesis.cancel(); Player.i = 0; Player.state = "playing"; speakChunk(); }
  else if (a === "pause") { Player.state = "paused"; Player.token++; speechSynthesis.cancel(); updatePlayerUI(); }
  else if (a === "resume") { Player.state = "playing"; speakChunk(); }
  updatePlayerUI();
}
function updatePlayerUI() {
  const r = Player.root; if (!r || !r.isConnected) return;
  const st = Player.state; const q = s => r.querySelector(`[data-pa="${s}"]`);
  if (!q("play")) return;
  q("play").disabled = st === "playing" || st === "paused";
  q("play").innerHTML = st === "error" ? `${icon("play")} Try again` : `${icon("play")} Play`;
  q("pause").disabled = st !== "playing";
  q("resume").disabled = st !== "paused";
  q("replay").disabled = st === "idle" || st === "error";
  const msg = { idle: "Ready. Press Play to listen.", playing: `Playing at ${Player.rate}× speed…`, paused: "Paused. Press Resume to continue.", done: "Finished. Press Replay to listen again.",
    error: "The audio could not play on this device. Try again, or use Show Transcript to read the script." }[st];
  const sEl = r.querySelector("#playerStatus"); if (sEl && sEl.textContent !== msg) sEl.textContent = msg;
  const p = r.querySelector("#playerProg"); const au = Player.mode === "file" ? Player.audio : null;
  if (p) p.style.width = (st === "done" ? 100 : au && au.duration ? Math.round(100 * au.currentTime / au.duration) : pct(Player.i, Player.chunks.length)) + "%";
  updateTranscriptLock();
}

/* ---------- Navigation ---------- */
const NAV = [
  ["home", "Home", "home"], ["start", "Start Here", "target"], ["reading", "Reading Academy", "book", true], ["vocab", "Vocabulary Lab", "flask"],
  ["grammar", "Grammar Gym", "dumbbell"], ["listening", "Listening Corner", "headphones"], ["writing", "Writing Workshop", "pen"],
  ["challenge", "Challenge Arena", "trophy"], ["journey", "My English Journey", "route"], ["achievements", "My Achievements", "medal"]
];
function buildNav() {
  $("#navList").innerHTML = NAV.map(([r, l, i, f]) => `<li class="${f ? "feature" : ""}"><a href="#${r}" data-r="${r}">${icon(i)}${l}</a></li>`).join("");
  $("#menuIcon").innerHTML = icon("menu");
  $("#menuBtn").addEventListener("click", () => {
    const nav = $("#mainNav"); const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open); $("#menuBtn").setAttribute("aria-expanded", String(open));
  });
}
function setActiveNav(r) {
  document.querySelectorAll("#navList a").forEach(a => { if (a.dataset.r === r) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  $("#mainNav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false");
}
const main = () => $("#main");
let session = null, timerId = null, routerReady = false;
function clearTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

let lastArea = null;
function router() {
  stopSpeech(); clearTimer();
  const h = (location.hash || "#home").replace(/^#\/?/, "");
  const [r, sub, extra] = h.split("/");
  const views = { home: viewHome, reading: () => (window.NVSReading ? NVSReading.viewLibrary(main()) : viewReading()), vocab: () => viewPracticeHub("vocab"), grammar: () => viewPracticeHub("grammar"),
    listening: viewListening, writing: viewWriting, challenge: viewChallenge, journey: viewJourney, achievements: viewAchievements, start: viewStart, check: viewCheck, privacy: viewPrivacy, about: viewAbout, accessibility: viewAccessibility, help: viewHelp };
  const navKey = views[r] ? r : "home";
  /* Analytics: count a learning area as "opened" when the student moves into it from somewhere else. */
  const areaNow = ["reading", "vocab", "grammar", "listening", "writing", "challenge"].includes(r) ? r : null;
  if (areaNow && areaNow !== lastArea) track({ t: "area_open", area: areaNow });
  lastArea = areaNow;
  if (sub && ["reading", "vocab", "grammar", "listening", "writing"].includes(r) && ACTIVITIES[sub] && ACTIVITIES[sub].area === r) {
    if (ACTIVITIES[sub].guided) { session = null; viewGuided(sub); }
    else { if (extra === "practice") session = null; viewActivity(sub); if (extra === "practice" && S.done[sub]) startPractice(); }
  } else if (sub && r === "challenge" && CHALLENGES[sub]) {
    session = null; viewChallengeStart(sub);
  } else { session = null; (views[r] || viewHome)(); }
  setActiveNav(navKey);
  window.scrollTo(0, 0);
  const h1 = main().querySelector("h1");
  if (h1) { h1.setAttribute("tabindex", "-1"); if (routerReady) h1.focus({ preventScroll: true }); }
  document.title = navKey === "home" ? "NVS English Quest | New Vision Schools" : (h1 ? h1.textContent.trim() + " | " : "") + "NVS English Quest";
}

/* ===================== VIEWS ===================== */
function viewHome() {
  const real = started(); const lvl = readingLevel();
  const vals = { overall: pct(overallDone(), totalActs()), level: levelLabel(lvl), skills: masteredSkills(), badges: badgeCount() };
  const rec = recommend(); const totalSkills = Object.keys(SKILLS).length;
  const stat = (ic, cls, label, value, extra, small) => `
    <div class="card stat"><div class="stat-top"><span class="stat-icon ${cls}">${icon(ic)}</span></div>
      <span class="stat-label">${label}</span><span class="stat-value ${small ? "sm" : ""}">${value}</span>${extra || ""}</div>`;
  const areaCard = key => {
    const a = AREAS[key]; const featured = key === "reading";
    let foot;
    if (key === "challenge") { const n = S.ch.runs.length; foot = `<span>${n} ${n === 1 ? "challenge" : "challenges"} completed${S.ch.weekly[thisWeek().key] ? " · Weekly ✓" : ""}</span><span>${icon("arrow")}</span>`; }
    else { const ids = actsIn(key); foot = `<span>${doneIn(key).length} of ${ids.length} activities completed</span><span>${icon("arrow")}</span>`; }
    return `<a class="card area-card ${featured ? "featured" : ""}" href="${a.route}">
      <div class="btn-row" style="justify-content:space-between"><span class="a-icon">${icon(a.icon)}</span>${featured ? `<span class="tag navy">Main feature · 5 levels · ${PASSAGES.length} passages</span>` : ""}</div>
      <h3>${a.name}</h3><p>${a.desc}</p>
      ${featured ? `<p class="small"><strong>Start here.</strong> Reading is the most important skill in NVS English Quest.</p>` : ""}
      <div class="a-foot">${foot}</div></a>`;
  };
  main().innerHTML = `
    <section class="hero">
      <span class="tag">${icon("route")} New Vision Schools · National Track · Grades 7–12</span>
      <h1 style="margin-top:.7rem">Welcome to NVS English Quest</h1>
      <p>Independent English Learning for National Track Students in Grades 7–12. Learn at your own level and your own pace, one step at a time.</p>
      <div class="btn-row" style="margin-top:1rem">
        <a class="btn gold" href="${rec ? ACTIVITIES[rec.id].route : "#challenge"}">${icon("arrow")} ${rec ? rec.cta + " learning" : "Try a challenge"}</a>
        <a class="btn ghost" href="#journey">${icon("chart")} See my progress</a>
      </div>
    </section>
    ${real && S.sc ? "" : `<section class="section card start-card" aria-labelledby="newH">
      <div><p class="eyebrow">${icon("target")} New here?</p><h2 id="newH" style="margin:.2rem 0">Start in two steps</h2>
        <p style="margin:0">1. Read <strong>Start Here</strong> to see how the website works. 2. Take the <strong>Starting-Point Check</strong> to find a good reading level.${S.sc ? ` Your Suggested Starting Level is <strong>Level ${S.sc.suggested}</strong>.` : ""}</p>
        </div>
      <div class="btn-row"><a class="btn primary" href="#start">${icon("info")} Start Here</a><a class="btn ghost" href="#check">${icon("target")} Starting-Point Check</a></div></section>`}
    <section class="section" aria-labelledby="dashH">
      <div class="section-head"><h2 id="dashH">My dashboard</h2></div>
      ${real ? "" : `<div class="notice" role="note">${icon("info")}<p><strong>You have not started yet.</strong> Your numbers will appear here after you answer your first questions. Every number comes from your own answers.</p></div>`}
      <div class="grid g4" style="margin-top:.8rem">
        ${stat("chart", "", "Overall Progress", vals.overall + "%", bar(vals.overall, "", "Overall progress") + `<span class="small muted">${overallDone()} of ${totalActs()} activities completed</span>`)}
        ${stat("book", "y", "Reading Level", vals.level, "", true)}
        ${stat("target", "g", "Skills Mastered", `${vals.skills} <span class="small muted">of ${totalSkills}</span>`)}
        ${stat("medal", "y", "Badges Earned", `${vals.badges} <span class="small muted">of ${BADGES.length}</span>`)}
      </div>
    </section>
    <section class="section" aria-labelledby="contH">
      <h2 id="contH">Continue Learning</h2>
      ${rec ? (() => { const a = ACTIVITIES[rec.id]; const st = actState(rec.id).st; return `
        <div class="card continue">
          <span class="stat-icon" style="width:56px;height:56px;border-radius:14px;display:grid;place-items:center;background:var(--blue-l);color:var(--navy)">${icon(AREAS[a.area].icon)}</span>
          <div class="c-body">
            <p class="eyebrow">${AREAS[a.area].name}${a.level ? " · " + levelLabel(a.level, a.area) : ""}</p>
            <h3>${esc(a.title)}</h3>
            <p class="muted small" style="margin:0">${rec.why}</p>
            ${st && st.solved ? `<div style="max-width:320px;margin-top:.5rem">${barRow("Progress", pct(st.solved, st.total), "gold", `${st.solved} of ${st.total}`)}</div>` : ""}
          </div>
          <a class="btn primary" href="${a.route}">${rec.cta} ${icon("arrow")}</a>
        </div>`; })()
        : `<div class="card continue"><div class="c-body"><h3>You have completed every activity.</h3><p class="muted" style="margin:0">Keep your skills strong with the Challenge Arena, or practice any activity again.</p></div><a class="btn primary" href="#challenge">Go to Challenge Arena</a></div>`}
    </section>
    <section class="section" aria-labelledby="areasH">
      <h2 id="areasH">Learning areas</h2>
      <div class="grid g3">${["reading", "vocab", "grammar", "listening", "writing", "challenge"].map(areaCard).join("")}</div>
    </section>`;
}

/* ===================== HOW-IT-WORKS GUIDES, START HERE, STARTING-POINT CHECK ===================== */
/* The optional Arabic help feature was removed in the Final Updated Launch: the interface is English only.
   Its separate preference key (never part of progress) is cleared once so no unused data is left behind. */
try { localStorage.removeItem("nvs-english-quest-prefs"); } catch (e) {}

/* Five questions every independent learner needs answered, for each area. */
const HOW = {
  reading: [
    ["What will I learn?", "You will practice understanding English texts: finding details, the main idea, word meanings, and what the writer suggests."],
    ["What do I do first?", "Choose a passage at your level. Not sure? Take the Starting-Point Check. Then open “Before You Read” to learn the key words."],
    ["What if I do not understand?", "Tap an underlined word to see its meaning. Press Listen to hear the passage. Press Hint for a clue. You can always look back at the passage."],
    ["How do I know if I am right?", "Press Check. You see at once if your answer is correct, with an explanation and the sentence from the text that proves it. If it is not correct, you get a clue and can try again."],
    ["What do I do after I finish?", "Read your results and the “Next step” advice. Practice again, or open the next passage that is recommended for you."]
  ],
  vocab: [
    ["What will I learn?", "You will learn useful English words by topic, from everyday words to academic words."],
    ["What do I do first?", "Choose a set by level or topic. Read “Learn the Words” first. Then press Start Practice."],
    ["What if I do not understand?", "Press Hint for a clue. Read the example sentence in the question carefully. After the set, you can review all the words again."],
    ["How do I know if I am right?", "Press Check. The feedback tells you if you are right and explains the word. If you are not right, read the clue and try again."],
    ["What do I do after I finish?", "Review the words, then try the next set that is recommended."]
  ],
  grammar: [
    ["What will I learn?", "Each set teaches one grammar point, from simple sentences to more advanced structures."],
    ["What do I do first?", "Choose a grammar skill. Read “Learn the Rule”: the rule, two examples, and one common mistake. Then press Start Practice."],
    ["What if I do not understand?", "Press Hint. Think about the rule you just read. When an answer is wrong, the feedback explains the exact mistake."],
    ["How do I know if I am right?", "Press Check. The feedback tells you if you are right and explains the rule. If you are not right, try again."],
    ["What do I do after I finish?", "If you made mistakes, review the rule. Then try the next set."]
  ],
  listening: [
    ["What will I learn?", "You will practice understanding spoken English: conversations, announcements, and short talks."],
    ["What do I do first?", "Choose an activity at your level. Read the questions first, so you know what to listen for. Then press Play."],
    ["What if I do not understand?", "Press Replay as many times as you need, or choose the slower speed (0.75×). Use the hint. After you answer all the questions, you can read the transcript."],
    ["How do I know if I am right?", "Press Check. The feedback explains the answer and shows the line you heard."],
    ["What do I do after I finish?", "Read your results. Then try another activity at the same level or the next level."]
  ],
  writing: [
    ["What will I learn?", "You will build correct sentences and organized paragraphs, and then write on your own."],
    ["What do I do first?", "Start with the sentence activities at your level. Do the Guided Writing task last. In Guided Writing, read the task and study the model answer for ideas."],
    ["What if I do not understand?", "Use the hints, the sentence starters, and the word bank."],
    ["How do I know if I am right?", "Sentence activities are checked at once. Guided Writing is not graded by the website: use the checklist and the model answer, and show your writing to your teacher."],
    ["What do I do after I finish?", "Improve one sentence to make it clearer. Then try the next activity."]
  ],
  challenge: [
    ["What will I learn?", "You will review reading, vocabulary, grammar, and listening with mixed questions."],
    ["What do I do first?", "Choose a challenge and read its rules. Quick Quest is a good first choice. Skill Sprint can be timed or untimed."],
    ["What if I do not understand?", "Quick Quest, Reading Detective, and the Weekly Quest give hints and feedback after each question. Reading questions always show the passage."],
    ["How do I know if I am right?", "You see feedback after each question (in Skill Sprint, at the end). The results show your score by skill."],
    ["What do I do after I finish?", "Look at the skill with the lowest score and practice it in Reading, Vocabulary, or Grammar. Challenges are for review; they do not change your mastery."]
  ]
};
function howItWorks(area) {
  const rows = HOW[area]; if (!rows) return "";
  const fresh = area === "challenge" ? !S.ch.runs.length : !doneIn(area).length && !actsIn(area).some(id => actState(id).inProgress);
  return `<details class="card how-box section"${fresh ? " open" : ""}><summary>${icon("info")} How this works <span class="small muted">(${fresh ? "read this first" : "tap to open"})</span></summary>
    <dl class="how-list">${rows.map(([q, a], i) => `<div><dt><span class="how-n" aria-hidden="true">${i + 1}</span>${esc(q)}</dt><dd>${esc(a)}</dd></div>`).join("")}</dl>
  </details>`;
}

/* ---------- Institutional pages: About, Privacy Notice, Accessibility, Help ---------- */
const LOGO_SRC = "assets/brand/nvs-logo.jpg";   /* the exact official New Vision Schools logo file */
const logoFigure = (px, eager) => `<figure class="logo-figure"><img src="${LOGO_SRC}" alt="New Vision Schools logo: a tree growing from an open book, with the school name in Arabic and English" width="${px}" height="${px}" style="width:${px}px" ${eager ? "" : 'loading="lazy"'} decoding="async"></figure>`;

function viewAbout() {
  main().innerHTML = `
    <div class="page-head about-head">
      ${logoFigure(176, true)}
      <div><p class="eyebrow">${icon("info")} About</p><h1>About NVS English Quest</h1>
        <p class="lead">New Vision Schools · Riyadh, Saudi Arabia</p></div>
    </div>
    <div class="card section prose">
      <p>NVS English Quest is a school-approved independent English-learning initiative by New Vision Schools, Riyadh, designed specifically for National Track students in Grades 7–12.</p>
      <p>The platform provides opportunities to strengthen reading, vocabulary, grammar, listening, and writing skills through interactive, self-paced practice.</p>
      <p>Students can explore activities at their own proficiency levels, receive immediate feedback, and monitor their learning progress.</p>
      <p>The platform encourages independent learning, confidence, and continuous language development.</p>
    </div>
    <section class="section" aria-labelledby="howH">
      <h2 id="howH">How It Works</h2>
      <ol class="start-steps compact">
        <li class="card"><h3><span class="how-n" aria-hidden="true">1</span>Explore the learning areas</h3><p>Reading Academy, Vocabulary Lab, Grammar Gym, Listening Corner, Writing Workshop, and Challenge Arena.</p></li>
        <li class="card"><h3><span class="how-n" aria-hidden="true">2</span>Take the optional Starting-Point Check</h3><p>Five short texts suggest a reading level to start from. You can skip it and choose your own level.</p></li>
        <li class="card"><h3><span class="how-n" aria-hidden="true">3</span>Choose activities at your level</h3><p>Levels are based on English proficiency, not school grade.</p></li>
        <li class="card"><h3><span class="how-n" aria-hidden="true">4</span>Practice independently and get feedback</h3><p>Every answer is checked straight away, with an explanation and a clue when you need one.</p></li>
        <li class="card"><h3><span class="how-n" aria-hidden="true">5</span>Follow your progress</h3><p>See what you have finished and what to practice next in <a href="#journey">My English Journey</a>.</p></li>
      </ol>
      <div class="notice" role="note">${icon("info")}<p><strong>Participation is voluntary.</strong> Students choose what to practice and when. Nobody is required to complete every activity.</p></div>
    </section>
    <section class="section grid g2" aria-label="Platform details">
      <div class="card"><h2>What is included</h2>
        <ul class="feature-list">
          <li>${PASSAGES.length} reading passages in five levels</li>
          <li>${actsIn("vocab").length} vocabulary sets and ${actsIn("grammar").length} grammar sets</li>
          <li>${actsIn("listening").length} listening activities and ${actsIn("writing").length} writing activities</li>
          <li>Four types of review challenge</li></ul></div>
      <div class="card"><h2>School identity</h2>
        <dl class="facts">
          <div><dt>School</dt><dd>New Vision Schools</dd></div>
          <div><dt>Location</dt><dd>Riyadh, Saudi Arabia</dd></div>
          <div><dt>Students</dt><dd>National Track, Grades 7–12</dd></div>
          <div><dt>Status</dt><dd>A school-approved educational initiative, free to use</dd></div></dl>
        <p class="small muted">Read the <a href="#privacy">Privacy Notice</a>, the <a href="#accessibility">Accessibility</a> statement, or <a href="#help">Help</a>.</p></div>
    </section>`;
}

/* Privacy Notice: reflects the real configuration (analytics-config.js) at the moment the page is opened. */
function viewPrivacy() {
  const st = window.NVSAnalytics ? window.NVSAnalytics.status() : { enabled: false, learning: false, traffic: false };
  const on = st.learning || st.traffic;
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("info")} Privacy Notice</p><h1>Your Privacy Matters</h1>
      <p>NVS English Quest respects student privacy and aims to provide a safe and supportive learning environment.</p>
      </div>
    <div class="card section"><h2>Your progress</h2>
      <p>Your learning progress is saved on your device, allowing you to continue practicing and track your achievements. You do not need an account, and the website never asks for your name or student ID.</p>
      <p>Your saved progress stays in this browser. Clearing your browser data, or pressing <strong>Reset My Progress</strong>, deletes it.</p>
      </div>
    <div class="card section"><h2>Usage statistics</h2>
      <p>${on ? "General platform usage statistics help the English Department understand engagement and improve learning activities. They record, for example, which activities are opened and finished and how many answers are correct, but never your name or anything you write." : "General platform usage statistics can help the English Department understand engagement and improve learning activities. They are currently switched off, so nothing about how you use the website leaves this device."}</p>
      </div>
    <div class="card section"><h2>Services we use</h2>
      <p>The website is hosted by GitHub${st.learning ? ", and general usage statistics are stored with Supabase" : ""}.${st.traffic ? " Website visits are counted by Cloudflare Web Analytics." : ""} Like any website service, ${st.learning || st.traffic ? "these providers receive" : "GitHub receives"} basic technical information, such as your internet address, when your browser connects. NVS English Quest does not store internet addresses in its statistics and does not use cookies.</p>
      <p>Questions? Ask your English teacher or the English Department.</p>
      </div>`;
}

function viewAccessibility() {
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("info")} Accessibility</p><h1>Accessibility</h1>
      <p>NVS English Quest aims to provide an accessible and user-friendly learning experience across computers, tablets, and smartphones.</p></div>
    <div class="card section"><h2>Good to know</h2>
      <ul class="feature-list">
        <li>The website has not yet been tested with screen readers (such as NVDA or VoiceOver).</li>
        <li>Read-aloud for reading passages uses your device's built-in voice, so it may sound different on different devices.</li></ul>
      <h2 style="margin-top:1.2rem">Need help?</h2>
      <p>If you experience difficulty accessing an activity or using a feature, please inform your English teacher or the English Department. Please say which page and which device you were using.</p></div>`;
}

function viewHelp() {
  const faq = [
    ["Who is NVS English Quest for?", "National Track students in Grades 7–12 at New Vision Schools. Activities are organized by English level (Level 1 to Level 5), not by school grade. Choose the level that suits your English, whatever grade you are in."],
    ["Do I need an account?", "No. You can use every learning activity without registering, signing in, or giving your name."],
    ["Do I have to complete every activity?", "No. NVS English Quest is for independent, voluntary learning. Choose the activities that help you most."],
    ["Where should I start?", `Take the optional <a href="#check">Starting-Point Check</a> to get a suggested reading level, or choose a learning area that interests you. <a href="#start">Start Here</a> explains how the website works.`],
    ["How can I check my progress?", `Open <a href="#journey">My English Journey</a>. It shows the progress saved in this browser: what you finished, your first-try accuracy, and what to practice next.`],
    ["Will my progress appear on another device?", "Not automatically. Progress is saved only in the browser you are using. Use the same device and browser each time."],
    ["Why does only my first try count?", "Your first try shows what you already know. You can try again to learn from your mistake, but the retry does not change your accuracy."],
    ["Can I repeat activities?", "Yes. You can practice any activity again. Practice rounds help you review, and your first result is kept."],
    ["The audio does not play. What can I do?", "Check that your device's sound is on. Each listening activity plays a recording; if the recording cannot load, your device's built-in voice reads the script instead. If no sound plays, try another browser (for example Chrome or Safari). If your browser cannot play the audio, the transcript opens straight away."],
    ["What if an activity does not load?", "Refresh the page and check your internet connection. If the problem continues, contact the school through its official communication channels."],
    ["How do I start again from zero?", "Press <strong>Reset My Progress</strong> at the bottom of any page. This deletes all progress in this browser and cannot be undone."]
  ];
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("info")} Help</p><h1>Help</h1>
      <p>Answers to common questions about using NVS English Quest.</p></div>
    <div class="faq">${faq.map(([q, a]) => `<section class="card faq-item"><h2>${esc(q)}</h2><p>${a}</p></section>`).join("")}</div>
    <div class="notice section" role="note">${icon("info")}<p>More questions? Ask your English teacher, or read <a href="#about">About NVS English Quest</a> and the <a href="#privacy">Privacy Notice</a>.</p></div>`;
}

/* ---------- Start Here ---------- */
function viewStart() {
  const sc = S.sc;
  main().innerHTML = `
    <div class="page-head start-head">${logoFigure(88, true)}<div><p class="eyebrow">${icon("target")} Start Here</p><h1>How to Use NVS English Quest</h1>
      <p>Welcome to NVS English Quest, an independent English-learning platform designed for National Track students in Grades 7–12 at New Vision Schools. Explore activities at your own level, practice at your own pace, and develop your English skills with confidence.</p>
      <p>Read these four steps once. They take about two minutes.</p>
      </div></div>
    <ol class="start-steps">
      <li class="card"><h2><span class="how-n" aria-hidden="true">1</span>Find your reading level</h2>
        <p>Your English level is not the same as your school grade. A student in any grade can start at any level. The <strong>Starting-Point Check</strong> has five short texts and 15 questions. It gives you a <strong>Suggested Starting Level</strong>. It is not a test, and you can change your level at any time.</p>
        ${sc ? `<p class="small"><strong>Your last check (${fmtDate(sc.at)}):</strong> Suggested Starting Level ${sc.suggested}.</p>` : ""}
        <div class="btn-row"><a class="btn primary" href="#check">${icon("target")} ${sc ? "Take the check again" : "Take the Starting-Point Check"}</a><a class="btn ghost" href="#reading">I will choose my own level</a></div></li>
      <li class="card"><h2><span class="how-n" aria-hidden="true">2</span>Follow the same steps in every activity</h2>
        <ul class="feature-list">
          <li><strong>Learn:</strong> read the key words or the rule first.</li>
          <li><strong>Practice:</strong> choose an answer and press <strong>Check</strong>. Use <strong>Hint</strong> if you need help.</li>
          <li><strong>Review:</strong> read the explanation, especially when your answer was wrong.</li></ul>
        <p class="small">Only your <strong>first try</strong> counts toward your accuracy and mastery. Trying again helps you learn, but guessing does not raise your score.</p>
        </li>
      <li class="card"><h2><span class="how-n" aria-hidden="true">3</span>Choose what to practice</h2>
        <ul class="area-mini">${["reading", "vocab", "grammar", "listening", "writing", "challenge"].map(k => `<li><a href="${AREAS[k].route}">${icon(AREAS[k].icon)}<span><strong>${AREAS[k].name}</strong><br><span class="small muted">${AREAS[k].desc}</span></span></a></li>`).join("")}</ul>
        <p class="small"><strong>Tip:</strong> Reading is the most important skill. Try to spend about half of your practice time in the Reading Academy. Each area has a “How this works” box at the top.</p>
        </li>
      <li class="card"><h2><span class="how-n" aria-hidden="true">4</span>Check your progress</h2>
        <p>Open <a href="#journey">My English Journey</a> to see what you finished, your first-try accuracy, and what to practice next. Your progress is saved <strong>only in this browser on this device</strong>. (Read the <a href="#privacy">Privacy Notice</a>.) It does not move to other devices, and there is no account. Do not clear your browser data if you want to keep your progress.</p>
        </li>
    </ol>
    `;
}

/* ---------- Starting-Point Check ---------- */
const CHECK = (C.startCheck && C.startCheck.samples) || [];
let CK = null;   /* in-memory state for one attempt */
function suggestLevel(scores) {
  /* Transparent rule (also shown to the student):
     1. A level is "read well" when at least 2 of its 3 questions are correct.
     2. Start at Level 1 and move up one level at a time while each level is read well.
     3. Stop at the first level that is not read well. The suggestion is the last level read well (never higher).
     4. If Level 1 is not read well, the suggestion is Level 1 with extra support.
     Good answers at a higher level after a missed level do not raise the suggestion (inconsistent results are treated carefully). */
  let lvl = 0;
  for (let i = 0; i < 5; i++) { if (scores[i] >= 2) lvl = i + 1; else break; }
  const stop = lvl < 5 ? lvl + 1 : null;
  const higherGood = stop ? scores.slice(stop).some(s => s >= 2) : false;
  return { level: Math.max(1, lvl), passedAny: lvl > 0, stoppedAt: stop, higherGood };
}
function checkWhy(res, scores) {
  const L = res.level, parts = [];
  if (!res.passedAny) parts.push(`At Level 1 you answered ${scores[0]} of 3 questions correctly. Level 1 texts use short sentences and everyday words, so they are the best place to start. Use “Before You Read”, Listen, and Hint. They are there to help you.`);
  else {
    parts.push(`You answered at least 2 of 3 questions correctly at ${L === 1 ? "Level 1" : `every level from 1 to ${L}`}.`);
    if (res.stoppedAt) parts.push(`At Level ${res.stoppedAt} you answered ${scores[res.stoppedAt - 1]} of 3 correctly, so Level ${res.stoppedAt} texts may still be difficult for now.`);
    else parts.push("You read all five levels well, so Level 5 is a good place to continue.");
    parts.push(`Level ${L} texts should feel comfortable, with a little challenge.`);
  }
  if (res.higherGood) parts.push(`You also did well on a higher text. This can happen when a topic is familiar. Read two or three Level ${L} passages first; if they feel easy, move up one level.`);
  return parts.join(" ");
}
function viewCheck() {
  stopSpeech();
  const sc = S.sc;
  CK = null;
  main().innerHTML = `
    <div class="practice-wrap"><div class="card">
      <p class="eyebrow">${icon("target")} Reading Starting-Point Check</p><h1>Find a Good Place to Start Reading</h1>
      <p>This short check helps you choose a reading level. You will read <strong>five short texts</strong>, from easy to more difficult, and answer <strong>three questions</strong> about each one (15 questions in total).</p>
      <ul class="feature-list">
        <li>There is <strong>no time limit</strong>. Most students need 10 to 15 minutes.</li>
        <li>You can press <strong>Listen</strong> to hear each text, and you can read it as many times as you want. Listening does not change your result.</li>
        <li>If a text is too difficult, you can press <strong>“This is too difficult. Finish now.”</strong> That is fine. It helps the check suggest the right level.</li>
        <li>At the end, you will see your score, the correct answers with short explanations, and a <strong>Suggested Starting Level</strong>.</li></ul>
      <div class="notice" role="note">${icon("info")}<p>This is an <strong>informal check</strong>, not an official test or certificate. The suggestion is a starting point only. You can always choose a different level.</p></div>
      ${sc ? `<p class="small"><strong>Your last check (${fmtDate(sc.at)}):</strong> ${sc.total} of 15 correct · Suggested Starting Level ${sc.suggested}. Taking the check again will replace this result.</p>` : ""}
      <div class="btn-row" style="margin-top:1rem">
        <button class="btn primary" type="button" id="ckStart">${icon("arrow")} Start the check</button>
        ${sc ? `<button class="btn ghost" type="button" id="ckLast">${icon("eye")} See my last result</button>` : ""}
        <a class="btn ghost" href="#reading" id="ckSkip">Skip the check and choose a level myself</a>
      </div></div></div>`;
  $("#ckStart").addEventListener("click", startCheck);
  if (sc) $("#ckLast").addEventListener("click", () => renderCheckResults(sc, true));
}
function shuffleIdx(n) { const a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function startCheck() {
  /* New random option order for every attempt. The correct answer is tracked by its original index (0 in the data file). */
  CK = { i: 0, ans: {}, order: {} };
  CHECK.forEach(s => s.questions.forEach(q => { CK.order[q.id] = shuffleIdx(q.opts.length); }));
  renderCheckSample();
}
function renderCheckSample(msg) {
  stopSpeech();
  const s = CHECK[CK.i], n = CHECK.length;
  main().innerHTML = `
    <div class="practice-wrap">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="#check" class="ck-home">Starting-Point Check</a> <span aria-hidden="true">›</span> Text ${CK.i + 1} of ${n}</nav>
      <div class="card">
        <div class="btn-row" style="justify-content:space-between;align-items:center"><p class="eyebrow" style="margin:0">Text ${CK.i + 1} of ${n} · Level ${s.level}</p><span class="small muted">${esc(s.focus)}</span></div>
        <div class="bar" aria-hidden="true" style="margin:.5rem 0 1rem"><span style="width:${pct(CK.i, n)}%"></span></div>
        <h1 style="font-size:1.5rem">${esc(s.title)}</h1>
        <p class="read-instr">${icon("info")} Read the text. Then answer the three questions. You can look at the text while you answer.</p>
        ${canSpeak ? `<div class="btn-row"><button class="btn ghost" type="button" id="ckListen" aria-pressed="false">${icon("speaker")} Listen</button><span class="small muted" id="ckAudio" role="status"></span></div>` : `<p class="small muted">${icon("info")} Read-aloud is not available in this browser.</p>`}
        <div class="passage-text ck-text">${s.text.map(p => `<p>${esc(p)}</p>`).join("")}</div>
      </div>
      <form class="card" id="ckForm" style="margin-top:1rem" novalidate>
        ${s.questions.map((q, qi) => `<fieldset class="ck-q"><legend><span class="q-num">${qi + 1}</span> ${esc(q.q)}</legend>
          <div class="opts">${CK.order[q.id].map(oi => `<label class="opt${CK.ans[q.id] === oi ? " selected" : ""}"><input type="radio" name="${q.id}" value="${oi}" ${CK.ans[q.id] === oi ? "checked" : ""}><span class="otext">${esc(q.opts[oi][0])}</span></label>`).join("")}</div></fieldset>`).join("")}
        <div id="ckMsg" role="alert">${msg ? `<div class="fb no"><p>${msg}</p></div>` : ""}</div>
        <div class="btn-row" style="margin-top:1rem">
          ${CK.i > 0 ? `<button class="btn ghost" type="button" id="ckBack">← Back</button>` : ""}
          <button class="btn primary" type="submit" id="ckNext">${CK.i < n - 1 ? "Next text" : "See my results"} ${icon("arrow")}</button>
        </div>
        ${CK.i > 0 ? `<div class="btn-row" style="margin-top:.6rem"><button class="btn ghost small-btn" type="button" id="ckStop">This is too difficult. Finish now.</button></div>
          ` : ""}
      </form>
    </div>`;
  document.querySelectorAll("#ckForm input[type=radio]").forEach(r => r.addEventListener("change", () => {
    CK.ans[r.name] = Number(r.value);
    r.closest(".opts").querySelectorAll(".opt").forEach(l => l.classList.toggle("selected", l.querySelector("input").checked));
  }));
  $("#ckForm").addEventListener("submit", e => {
    e.preventDefault();
    const missing = s.questions.map((q, qi) => CK.ans[q.id] === undefined ? qi + 1 : null).filter(Boolean);
    if (missing.length) { $("#ckMsg").innerHTML = `<div class="fb no"><p>Please answer question${missing.length > 1 ? "s" : ""} ${missing.join(" and ")} before you continue. If you are not sure, choose the answer you think is best.</p></div>`; $("#ckMsg").scrollIntoView({ block: "center" }); return; }
    if (CK.i < n - 1) { CK.i++; renderCheckSample(); focusTop(); } else finishCheck(false);
  });
  bindCheckHome();
  const back = $("#ckBack"); if (back) back.addEventListener("click", () => { CK.i--; renderCheckSample(); focusTop(); });
  const stop = $("#ckStop"); if (stop) stop.addEventListener("click", () => finishCheck(true));
  const lb = $("#ckListen");
  if (lb) lb.addEventListener("click", () => {
    if (lb.getAttribute("aria-pressed") === "true") { stopSpeech(); lb.setAttribute("aria-pressed", "false"); lb.innerHTML = `${icon("speaker")} Listen`; $("#ckAudio").textContent = "Stopped."; return; }
    stopSpeech(); const my = ++Player.token;
    const u = new SpeechSynthesisUtterance(s.text.join(" ")); const v = englishVoices(); if (v.length) { try { u.voice = v[0]; } catch (e) {} }
    u.lang = u.voice ? u.voice.lang : "en-US"; u.rate = 0.9;
    u.onend = () => { if (my !== Player.token) return; lb.setAttribute("aria-pressed", "false"); lb.innerHTML = `${icon("speaker")} Listen`; $("#ckAudio").textContent = "Finished."; };
    u.onerror = e => { if (my !== Player.token || (e && (e.error === "interrupted" || e.error === "canceled"))) return; lb.setAttribute("aria-pressed", "false"); lb.innerHTML = `${icon("speaker")} Listen`; $("#ckAudio").textContent = "The audio could not play on this device. Please read the text."; };
    try { speechSynthesis.speak(u); lb.setAttribute("aria-pressed", "true"); lb.innerHTML = `${icon("stop")} Stop`; $("#ckAudio").textContent = "Reading aloud…"; } catch (e) { $("#ckAudio").textContent = "The audio could not play on this device. Please read the text."; }
  });
}
function bindCheckHome() { document.querySelectorAll(".ck-home").forEach(l => l.addEventListener("click", e => { if (location.hash === "#check") { e.preventDefault(); viewCheck(); focusTop(); } })); }
function focusTop() { window.scrollTo(0, 0); const h = main().querySelector("h1"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); } }
function finishCheck(early) {
  stopSpeech();
  const scores = CHECK.map(s => s.questions.filter(q => CK.ans[q.id] === 0).length);
  const res = suggestLevel(scores);
  const answers = {}; CHECK.forEach(s => s.questions.forEach(q => { answers[q.id] = CK.ans[q.id] === undefined ? -1 : CK.ans[q.id]; }));
  S.sc = { v: 1, at: new Date().toISOString(), scores, total: scores.reduce((a, b) => a + b, 0), suggested: res.level, early: !!early, answers, takes: ((S.sc && S.sc.takes) || 0) + 1 };
  save();
  track({ t: "check_complete", rec: res.level }, "check:" + S.sc.at);   /* analytics: only the suggested level, never the answers */
  if (window.NVSReading && NVSReading.setLevel) NVSReading.setLevel(res.level);
  renderCheckResults(S.sc, false);
}
function renderCheckResults(sc, old) {
  const res = suggestLevel(sc.scores), L = res.level;
  const Lname = (C.reading.levels[L - 1] || {}).name || "";
  main().innerHTML = `
    <div class="practice-wrap">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="#check" class="ck-home">Starting-Point Check</a> <span aria-hidden="true">›</span> Results</nav>
      <div class="card">
        <p class="eyebrow">${icon("target")} ${old ? `Your last result · ${fmtDate(sc.at)}` : "Your result"}</p>
        <h1>Suggested Starting Level: Level ${L}</h1>
        <p class="lead"><strong>Level ${L} — ${esc(Lname)}</strong></p>
        <p>${esc(checkWhy(res, sc.scores))}</p>
        <div class="btn-row" style="margin-top:1rem">
          <a class="btn primary" href="#reading" id="ckGoLevel">${icon("book")} Show Level ${L} passages</a>
          <a class="btn ghost" href="#reading" id="ckOther">Choose a different level</a>
          <button class="btn ghost" type="button" id="ckAgain">${icon("refresh")} Take the check again</button>
        </div>
        <p class="small muted" style="margin-top:.8rem">${icon("info")} This is an informal starting-point check, not an official English level or certificate. It is saved only on this device.${sc.early ? " You finished the check early, which is fine: the texts you did not answer count as not read yet." : ""}</p>
      </div>
      <div class="card" style="margin-top:1rem">
        <h2>Your score: ${sc.total} of 15</h2>
        <div class="table-wrap"><table class="skills-table"><thead><tr><th scope="col">Text</th><th scope="col">Level</th><th scope="col">Correct</th><th scope="col">Result</th></tr></thead><tbody>
          ${CHECK.map((s, i) => { const v = sc.scores[i]; const skipped = s.questions.every(q => sc.answers[q.id] === -1);
            return `<tr><td>${esc(s.title)}</td><td>${s.level}</td><td>${skipped ? "—" : v + " of 3"}</td><td>${skipped ? `<span class="tag">Not answered</span>` : v >= 2 ? `<span class="tag green">${icon("check")} Read well</span>` : `<span class="tag gold">Not yet</span>`}</td></tr>`; }).join("")}
        </tbody></table></div>
        <details class="support" style="margin-top:1rem"><summary>${icon("info")} How the suggestion works</summary>
          <ol class="small" style="margin:.5rem 0 0 1.2rem">
            <li>A level is <strong>read well</strong> when at least 2 of its 3 questions are correct.</li>
            <li>The check starts at Level 1 and moves up one level at a time, as long as each level is read well.</li>
            <li>It stops at the first level that is not read well. Your suggestion is the last level you read well. It is never higher.</li>
            <li>If Level 1 is not read well yet, the suggestion is Level 1, with extra support.</li>
            <li>Three questions are not enough to prove you have mastered a level, so the check never suggests a level above the ones you read well.</li></ol></details>
      </div>
      <div class="card" style="margin-top:1rem">
        <h2>Review the answers</h2>
        <p class="small muted">Read the explanations, especially for the questions you missed. This is a good way to learn.</p>
        ${CHECK.map(s => `<h3 style="margin-top:1rem">Text ${s.level}: ${esc(s.title)}</h3><ol class="ck-review">${s.questions.map(q => { const a = sc.answers[q.id]; const ok = a === 0;
          return `<li class="${ok ? "ok" : "no"}"><p><strong>${esc(q.q)}</strong></p>
            <p>${icon(ok ? "check" : "x")} Your answer: ${a === -1 || a === undefined ? "<em>not answered</em>" : esc(q.opts[a][0])}</p>
            ${ok ? "" : `<p>${icon("check")} Correct answer: <strong>${esc(q.opts[0][0])}</strong></p>`}
            <p class="small muted">${esc(q.exp)}</p></li>`; }).join("")}</ol>`).join("")}
      </div>
    </div>`;
  $("#ckGoLevel").addEventListener("click", () => { if (window.NVSReading && NVSReading.setLevel) NVSReading.setLevel(L); });
  $("#ckOther").addEventListener("click", () => { if (window.NVSReading && NVSReading.setLevel) NVSReading.setLevel("all"); });
  $("#ckAgain").addEventListener("click", startCheck);
  bindCheckHome();
  focusTop();
}

/* ---------- Instructional next step after an activity (from the student's real first-try answers) ---------- */
function nextStepAdvice(act, firstOkFn) {
  const qs = act.questions || []; if (!qs.length) return "";
  const ok = qs.filter((q, i) => firstOkFn(i)), miss = qs.filter((q, i) => !firstOkFn(i));
  const accP = pct(ok.length, qs.length); const low = s => s.charAt(0).toLowerCase() + s.slice(1);
  let msg;
  if (!miss.length) msg = act.area === "reading" && act.level < 5 ? `You answered every question correctly on the first try. You are ready to try a Level ${act.level + 1} passage.` : "You answered every question correctly on the first try.";
  else {
    const strong = ok.length ? ok[0].skillName : null, weak = miss[0].skillName;
    if (isSetAct(act)) msg = accP >= 60 ? `${strong ? `You are doing well with ${low(strong)}. ` : ""}Review the question you missed, then try the next set.` : `Review the ${act.area === "grammar" ? "rule" : "words"} for “${act.title}” before you try another set. You can open them below.`;
    else if (act.area === "reading") msg = (strong && strong !== weak ? `You did well with ${low(strong)}. Now practice ${low(weak)}.` : `Practice ${low(weak)} again.`) + (accP < 60 ? ` Try another Level ${act.level} passage to build confidence.` : "");
    else msg = strong && strong !== weak ? `You did well with ${low(strong)}. Now practice ${low(weak)}.` : `Practice ${low(weak)} again, and use the hints.`;
  }
  return `<div class="next-step">${icon("bulb")}<p><strong>Next step:</strong> ${esc(msg)}</p></div>`;
}

function levelHub(area, intro, card) {
  const lvl = levelFor(area); const levels = LEVELSETS[area];
  return levels.map(L => `
    <section class="level-block ${L.n === lvl ? "current" : ""}" aria-labelledby="lv${L.n}">
      <div class="level-head"><span class="level-num" aria-hidden="true">${L.n}</span>
        <div><h2 id="lv${L.n}">Level ${L.n} — ${L.name}${L.n === lvl ? ' <span class="tag gold">Recommended</span>' : ""}</h2><p>${L.range ? L.range + " · " : ""}${L.focus}</p></div></div>
      <div class="grid ${area === "writing" ? "g3" : "g2"}">${actsIn(area).filter(id => ACTIVITIES[id].level === L.n).map(card).join("")}</div>
    </section>`).join("");
}

function viewReading() {
  const lvl = readingLevel(); const s = areaStats("reading");
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("book")} Main feature</p><h1>Reading Academy</h1>
      <p>Read a passage, then answer five questions. Use the hint if you need help. You can try again if your answer is not correct.</p></div>
    <div class="grid g2">
      <div class="card"><p class="eyebrow">Your recommended level</p><h2 style="margin-bottom:.2rem">${levelLabel(lvl)}</h2>
        <p class="muted small">${s.att ? "Finish a passage with 80% or more on the first try to move up a level." : "Everyone starts at Level 1. Score 80% or more on the first try to move up."}</p>
        ${barRow("Reading questions completed", s.completion, "", `${s.solved} of ${s.total}`)}
        ${barRow("Reading mastery (correct on first try)", s.mastery, "green", s.att ? s.mastery + "%" : "Not started")}</div>
      <div class="notice" role="note">${icon("info")}<div>
        <p><strong>About the levels:</strong> These five levels are NVS learning levels for practice. They are not official CEFR certificates.</p>
        <p style="margin-top:.5rem">You can open any passage. Questions you answer correctly on the <strong>first try</strong> count toward mastery.${canSpeak ? " Use <strong>Listen</strong> to hear a passage read aloud." : ""}</p></div></div>
    </div>
    ${levelHub("reading", "", id => { const a = ACTIVITIES[id]; return `<a class="card p-card" href="${a.route}"><div class="p-meta"><span class="tag">${esc(a.topic)}</span><span class="tag gold">${a.words} words</span></div><h3>${esc(a.title)}</h3>${statusHTML(id)}</a>`; })}`;
}

const hubFilters = { vocab: { level: "all", topic: "all", status: "all" }, grammar: { level: "all", topic: "all", status: "all" } };
function setStage(id) { const st = actState(id); return st.done ? "review" : st.inProgress ? "practice" : "learn"; }
function stagePath(stage) {
  const steps = [["learn", "Learn"], ["practice", "Practice"], ["review", "Review"]]; const cur = steps.findIndex(x => x[0] === stage);
  return `<ol class="stage-path" aria-label="Learn, then practice, then review">${steps.map(([k, l], i) => `<li class="${i < cur ? "done" : i === cur ? "current" : ""}">${i < cur ? icon("check") : ""}${l}${i === cur ? '<span class="sr-only"> (current step)</span>' : ""}</li>`).join("")}</ol>`;
}
function setCard(id) {
  const a = ACTIVITIES[id]; const st = actState(id); const stage = setStage(id);
  const btn = stage === "review" ? { t: "Review", cls: "ghost" } : stage === "practice" ? { t: "Continue Practice", cls: "gold" } : { t: a.area === "vocab" ? "Learn the Words" : "Learn the Rule", cls: "primary" };
  const status = st.done ? `<span class="status done">${icon("check")} Completed</span><span class="tag green">First-try accuracy: ${st.done.firstAcc}%</span>`
    : st.inProgress ? `<span class="status prog">${icon("refresh")} In progress · ${st.st.solved} of ${st.st.total}</span>` : `<span class="status new">Not started</span>`;
  return `<article class="card lib-card set-card" data-id="${id}">
    <div class="p-meta"><span class="tag navy">${setLabel(a)}</span><span class="tag">${esc(plName(a.plevel))}</span></div>
    <h3><a class="lib-title" href="${a.route}">${esc(a.title)}</a></h3>
    <p class="small muted lib-facts">${a.area === "vocab" ? "Topic" : "Grammar skill"}: ${esc(a.topic)} · ${a.questions.length} questions</p>
    ${stagePath(stage)}
    <div class="lib-status">${status}</div>
    <a class="btn ${btn.cls} lib-btn" href="${a.route}" aria-label="${btn.t}: ${esc(a.title)}">${btn.t} ${icon("arrow")}</a></article>`;
}
function viewPracticeHub(area) {
  const A = AREAS[area]; const s = areaStats(area); const F = hubFilters[area]; const ids = actsIn(area);
  const topics = [...new Set(ids.map(id => ACTIVITIES[id].topic))];
  const opt = (v, l) => `<option value="${esc(v)}">${esc(l)}</option>`;
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon(A.icon)} Practice area</p><h1>${A.name}</h1>
      <p>${A.desc} Each set has three steps: <strong>Learn</strong> ${area === "vocab" ? "the words" : "the rule"}, <strong>Practice</strong> with 5 questions, then <strong>Review</strong> your results.</p></div>
    ${howItWorks(area)}
    <div class="card"><p class="eyebrow">Your progress</p>
      ${barRow("Sets completed", pct(doneIn(area).length, ids.length), "", `${doneIn(area).length} of ${ids.length}`)}
      ${barRow("First-try accuracy", s.accuracy || 0, "green", accText(s.accuracy))}
      <p class="small muted" style="margin:.3rem 0 0">Mastery counts only questions answered correctly on the first try${s.att ? ` (now ${s.mastery}% of all ${s.total} questions)` : ""}.</p></div>
    <section class="card lib-filters section" aria-label="Filter sets">
      <div class="level-pills" role="group" aria-label="Filter by level">${[["all", "All Levels"]].concat(PRACTICE_LEVELS.map(l => [String(l.n), l.name])).map(([v, l]) => `<button type="button" class="pill" data-level="${v}" aria-pressed="${F.level === v}">${l}</button>`).join("")}</div>
      <div class="filter-grid">
        <label>${area === "vocab" ? "Topic" : "Grammar skill"}<select id="hubTopic">${opt("all", area === "vocab" ? "All Topics" : "All Grammar Skills")}${topics.map(t => opt(t, t)).join("")}</select></label>
        <label>Progress<select id="hubStatus">${opt("all", "All Sets")}${opt("new", "Not Started")}${opt("progress", "In Progress")}${opt("completed", "Completed")}</select></label>
      </div>
      <div class="results-bar"><p id="hubCount" role="status" aria-live="polite"></p><button type="button" class="btn ghost" id="hubReset">${icon("refresh")} Reset Filters</button></div>
    </section>
    <div id="hubResults" class="grid g3 section"></div>`;
  main().querySelector("#hubTopic").value = F.topic; main().querySelector("#hubStatus").value = F.status;
  const render = () => {
    const list = ids.filter(id => { const a = ACTIVITIES[id]; const st = setStage(id);
      if (F.level !== "all" && String(a.plevel) !== F.level) return false;
      if (F.topic !== "all" && a.topic !== F.topic) return false;
      if (F.status !== "all" && ({ new: "learn", progress: "practice", completed: "review" })[F.status] !== st) return false;
      return true; });
    main().querySelector("#hubCount").textContent = `Showing ${list.length} of ${ids.length} sets`;
    main().querySelector("#hubResults").innerHTML = list.length ? list.map(setCard).join("") : `<div class="card empty-state"><h2>No sets match these filters</h2><p>Choose “All Levels” or reset the filters.</p><button type="button" class="btn primary" id="hubEmptyReset">${icon("refresh")} Reset Filters</button></div>`;
    const er = main().querySelector("#hubEmptyReset"); if (er) er.addEventListener("click", reset);
    main().querySelectorAll(".pill").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.level === F.level)));
  };
  const reset = () => { Object.assign(F, { level: "all", topic: "all", status: "all" }); main().querySelector("#hubTopic").value = "all"; main().querySelector("#hubStatus").value = "all"; render(); };
  main().querySelectorAll(".pill").forEach(b => b.addEventListener("click", () => { F.level = b.dataset.level; render(); }));
  main().querySelector("#hubTopic").addEventListener("change", e => { F.topic = e.target.value; render(); });
  main().querySelector("#hubStatus").addEventListener("change", e => { F.status = e.target.value; render(); });
  main().querySelector("#hubReset").addEventListener("click", reset);
  render();
}

function viewListening() {
  const lvl = levelFor("listening"); const s = areaStats("listening");
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("headphones")} Listening practice</p><h1>Listening Corner</h1>
      <p>Read the useful words, listen, then answer five questions. You can pause, replay, and slow down the audio. The transcript opens after you answer, so you can check what you heard.</p></div>
    ${howItWorks("listening")}
    <div class="grid g2">
      <div class="card"><p class="eyebrow">Your recommended level</p><h2 style="margin-bottom:.2rem">${levelLabel(lvl, "listening")}</h2>
        <p class="muted small">Finish an activity with 80% or more on the first try to move up a level.</p>
        ${barRow("Listening questions completed", s.completion, "", `${s.solved} of ${s.total}`)}
        ${barRow("Listening mastery (correct on first try)", s.mastery, "green", s.att ? s.mastery + "%" : "Not started")}</div>
      <div class="notice" role="note">${icon("info")}<div>
        <p><strong>How the audio works:</strong> Each activity plays a recording of the script, made with natural-sounding computer-generated voices, with a different voice for each speaker. If the recording cannot load, your device reads the script aloud with its built-in English voice instead.</p>
        ${canSpeak ? `<p style="margin-top:.5rem">Tip: Use headphones in class, and try the <strong>0.75×</strong> speed if the speakers are fast.</p>` : `<p style="margin-top:.5rem"><strong>Your browser cannot play audio.</strong> You can still practice by reading the transcript in each activity.</p>`}</div></div>
    </div>
    ${levelHub("listening", "", id => { const a = ACTIVITIES[id]; return `<a class="card p-card" href="${a.route}"><div class="p-meta"><span class="tag">${esc(a.format)}</span><span class="tag gold">${esc(a.topic)}</span></div><h3>${esc(a.title)}</h3>${statusHTML(id)}</a>`; })}`;
}

function viewWriting() {
  const lvl = levelFor("writing"); const s = areaStats("writing");
  const sDone = structured().filter(isDone).length, gDone = guidedActs().filter(isDone).length;
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("pen")} Writing practice</p><h1>Writing Workshop</h1>
      <p>Start with words and sentences, then build paragraphs. Each level has four checked activities and one guided writing task.</p></div>
    ${howItWorks("writing")}
    <div class="grid g2">
      <div class="card"><p class="eyebrow">Your recommended level</p><h2 style="margin-bottom:.2rem">${levelLabel(lvl, "writing")}</h2>
        <p class="muted small">Complete three checked activities in a level with an average of 70% or more on the first try to move up.</p>
        ${barRow("Checked activities completed", pct(sDone, structured().length), "", `${sDone} of ${structured().length}`)}
        ${barRow("First-try accuracy (checked tasks)", s.accuracy || 0, "green", accText(s.accuracy))}
        ${barRow("Guided writing drafts completed", pct(gDone, guidedActs().length), "gold", `${gDone} of ${guidedActs().length}`)}</div>
      <div class="notice" role="note">${icon("info")}<div>
        <p><strong>Two kinds of activities:</strong> Sentence ordering, sentence correction, choose the best sentence, and paragraph organization are <strong>checked automatically</strong>.</p>
        <p style="margin-top:.5rem"><strong>Guided writing</strong> is open writing. The website does not grade your ideas. You check your own work with a checklist and a model answer, then share it with your teacher.</p></div></div>
    </div>
    ${levelHub("writing", "", id => { const a = ACTIVITIES[id]; return `<a class="card p-card" href="${a.route}"><div class="p-meta"><span class="tag ${a.guided ? "gold" : ""}">${WTYPE[a.wtype]}</span></div><h3>${esc(a.title)}</h3><p class="muted small" style="margin:0">${esc(a.desc)}</p>${statusHTML(id)}</a>`; })}`;
}

function viewJourney() {
  const real = started(); const lvl = readingLevel(); const rec = recommend();
  const areaBlock = key => {
    if (key === "reading" && real && window.NVSReading) return NVSReading.journeyCard();
    const A = AREAS[key]; const s = areaStats(key); const ids = actsIn(key);
    if (key === "writing") {
      const sDone = structured().filter(isDone).length, gDone = guidedActs().filter(isDone).length;
      return `<div class="card area-prog"><h3>${icon(A.icon)} ${A.name}</h3>
        ${barRow("Completion (checked activities)", pct(sDone, structured().length), "", `${sDone} of ${structured().length}`)}
        ${s.att ? barRow("Mastery (checked tasks only)", s.mastery, "green") : `<p class="small muted">Mastery: not started yet.</p>`}
        <div class="mini-stats"><span>First-try accuracy: <b>${accText(s.accuracy)}</b></span><span>Guided drafts: <b>${gDone} of ${guidedActs().length}</b></span><span>Level: <b>${levelFor("writing")}</b></span></div>
        <p class="small muted" style="margin:.5rem 0 0">Guided drafts show practice. They are self-checked and do not count as mastery.</p></div>`;
    }
    return `<div class="card area-prog"><h3>${icon(A.icon)} ${key === "reading" ? "Reading comprehension" : A.name}</h3>
      ${barRow("Completion", pct(doneIn(key).length, ids.length), "", `${doneIn(key).length} of ${ids.length} ${key === "vocab" || key === "grammar" ? "sets" : "activities"}`)}
      ${s.att ? barRow("Mastery", s.mastery, "green") : `<p class="small muted">Mastery: not started yet.</p>`}
      <div class="mini-stats"><span>First-try accuracy: <b>${accText(s.accuracy)}</b></span><span>Questions tried: <b>${s.att} of ${s.total}</b></span>${ACTIVITIES[ids[0]].level ? `<span>Level: <b>${levelFor(key)}</b></span>` : ""}</div></div>`;
  };
  const chBlock = () => {
    const runs = S.ch.runs; const avg = runs.length ? Math.round(runs.reduce((t, r) => t + pct(r.first, r.total), 0) / runs.length) : null;
    return `<div class="card area-prog"><h3>${icon("trophy")} Challenge Arena</h3>
      <div class="mini-stats" style="font-size:.95rem"><span>Challenges completed: <b>${runs.length}</b></span><span>Average first-try accuracy: <b>${accText(avg)}</b></span></div>
      <ul class="plain-list">${Object.entries(CHALLENGES).map(([k, c]) => { const r = runsOf(k); const best = r.length ? Math.max(...r.map(x => pct(x.first, x.total))) : null; return `<li><span>${c.name}</span><b>${r.length ? `${r.length}× · best ${best}%` : "Not tried"}</b></li>`; }).join("")}</ul>
      <p class="small muted" style="margin:.4rem 0 0">This week’s quest: <strong>${S.ch.weekly[thisWeek().key] ? "completed ✓" : "not completed yet"}</strong>. Challenges are for review; they do not change mastery.</p></div>`;
  };
  const skillsByArea = LEARN_AREAS.map(a => {
    const rows = Object.values(SKILLS).filter(s => s.area === a).map(sk => {
      const st = skillStatus(sk);
      const b = st.mastered ? `<span class="tag green">${icon("check")} Mastered</span>` : st.att ? `<span class="tag gold">${st.label}</span>` : `<span class="tag">Not started</span>`;
      return `<tr><td>${esc(sk.name)}</td><td>${st.att} of ${sk.total}</td><td>${accText(st.accuracy)}</td><td>${b}</td></tr>`;
    }).join("");
    return `<h3 style="margin-top:1rem">${AREAS[a].name}</h3><div class="table-wrap"><table class="skills-table"><thead><tr><th scope="col">Skill</th><th scope="col">Questions tried</th><th scope="col">First-try accuracy</th><th scope="col">Status</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }).join("");
  const recs = journeyRecs();
  const levelTrack = area => { const L = levelFor(area); return `<h3 style="margin-top:1rem">${AREAS[area].name}</h3><div class="level-track">${LEVELSETS[area].map(x => { const ids = actsIn(area).filter(id => ACTIVITIES[id].level === x.n); const d = ids.filter(isDone).length; return `<div class="level-step ${x.n < L ? "reached" : ""} ${x.n === L ? "current" : ""}"><b>${x.n}</b>${x.name}<br><span>${d} of ${ids.length} done</span></div>`; }).join("")}</div>`; };
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("route")} Progress dashboard</p><h1>My English Journey</h1>
      <p>See how you are growing. <strong>Completion</strong> shows what you finished. <strong>Accuracy</strong> shows how often your first answer was right. <strong>Mastery</strong> counts only questions answered correctly on the first try, so guessing does not raise it.</p></div>
    ${real ? "" : `<div class="notice" role="note">${icon("info")}<p><strong>You have not started yet.</strong> This page shows only your real results. Answer some questions, and your progress will appear here.</p></div>`}
    <div class="grid g4" style="margin-top:1rem">
      <div class="card stat"><div class="stat-top"><span class="stat-label">Overall learning progress</span></div><span class="stat-value">${pct(overallDone(), totalActs())}%</span>${bar(pct(overallDone(), totalActs()), "", "Overall learning progress")}<span class="small muted">${overallDone()} of ${totalActs()} activities</span></div>
      <div class="card stat"><div class="stat-top"><span class="stat-label">Reading level</span></div><span class="stat-value sm">${levelLabel(lvl)}</span></div>
      <div class="card stat"><div class="stat-top"><span class="stat-label">Skills mastered</span></div><span class="stat-value">${masteredSkills()} <span class="small muted">of ${Object.keys(SKILLS).length}</span></span></div>
      <div class="card stat"><div class="stat-top"><span class="stat-label">Achievements unlocked</span></div><span class="stat-value">${badgeCount()} <span class="small muted">of ${BADGES.length}</span></span></div>
    </div>
    <section class="section card" aria-labelledby="recH"><h2 id="recH">Recommendations for you</h2>
      <p class="small muted">These suggestions are based on your saved answers.</p>
      <ul class="rec-list">${recs.map(r => `<li>${icon(r.icon)}<div><p>${esc(r.text)}</p>${r.id || r.route ? `<a class="btn ghost" href="${r.route || ACTIVITIES[r.id].route}">${r.route ? "Open challenge" : "Open “" + esc(ACTIVITIES[r.id].title) + "”"} ${icon("arrow")}</a>` : ""}</div></li>`).join("")}</ul>
    </section>
    ${real && window.NVSReading ? NVSReading.journeySection() : ""}
    <section class="section" aria-labelledby="skH"><h2 id="skH">Progress by learning area</h2>
      <div class="grid g3">${LEARN_AREAS.map(areaBlock).join("")}${chBlock()}</div></section>
    <section class="section card" aria-labelledby="lvH"><h2 id="lvH">My levels</h2>
      <p class="muted small">Levels go up when you finish activities with strong first-try accuracy.</p>
      ${levelTrack("reading")}${levelTrack("listening")}${levelTrack("writing")}</section>
    <section class="section card" aria-labelledby="sk2H"><h2 id="sk2H">Skills mastered <span class="tag green">From your answers</span></h2>
      <p class="muted small">A skill is mastered when you answer at least 3 of its questions (or all of them, if it has fewer) with 80% or more correct on the first try.</p>${skillsByArea}</section>
    <section class="section card" aria-labelledby="nxH"><h2 id="nxH">Recommended next activity</h2>
      ${rec ? `<p><strong>${esc(ACTIVITIES[rec.id].title)}</strong> · ${AREAS[ACTIVITIES[rec.id].area].name}</p><p class="muted small">${rec.why}</p><a class="btn primary" href="${ACTIVITIES[rec.id].route}">${rec.cta} ${icon("arrow")}</a>` : `<p>You have completed every activity. Keep reviewing in the Challenge Arena.</p>`}
    </section>
    <section class="section notice" aria-labelledby="dataH">${icon("info")}<div>
      <h2 id="dataH" style="font-size:1.05rem">About your data</h2>
      <p>Progress is saved in this browser on this device only. It does not move to other devices, and teachers cannot see your individual progress. ${NVSProgress.ok() ? "" : "<strong>Warning: this browser is blocking storage, so progress may not be saved.</strong>"}</p>
      <div class="btn-row" style="margin-top:.7rem"><button class="btn danger" type="button" data-reset>Reset My Progress</button></div></div></section>`;
}

function viewAchievements() {
  const n = badgeCount(); const wk = Object.entries(S.ch.weekly).sort((a, b) => b[0].localeCompare(a[0]));
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("medal")} Badges</p><h1>My Achievements</h1>
      <p>Badges are earned from your real practice. There are no leaderboards: you only compare yourself with your own progress.</p></div>
    <div class="card" style="margin-bottom:1rem">${barRow("Badges earned", pct(n, BADGES.length), "gold", `${n} of ${BADGES.length}`)}</div>
    <div class="grid g2">${BADGES.map(b => { const p = b.prog(); const got = S.badges[b.id];
      return `<div class="card badge ${got ? "earned" : ""}"><span class="b-icon">${icon(got ? b.icon : "lock")}</span><div style="flex:1">
        <h3>${b.name} ${got ? '<span class="tag green">' + icon("check") + " Earned</span>" : '<span class="tag">Locked</span>'}</h3><p>${b.desc}</p>
        ${got ? `<p class="small" style="color:var(--green-d)"><strong>Earned on ${fmtDate(got)}</strong></p>` : `${bar(pct(p.cur, p.goal), "gold", b.name + " progress")}<p class="small" style="margin-top:.3rem">${p.note || `${p.cur} of ${p.goal}`}</p>`}
      </div></div>`; }).join("")}</div>
    <section class="section card" aria-labelledby="wkH"><h2 id="wkH">${icon("calendar")} Weekly English Quest record</h2>
      <p class="small muted">Each calendar week you complete the Weekly English Quest is recorded once. This week: <strong>${thisWeek().label}</strong> — ${S.ch.weekly[thisWeek().key] ? "completed ✓" : "not completed yet"}.</p>
      ${wk.length ? `<ul class="plain-list">${wk.map(([k, r]) => `<li><span>${k.replace("-W", " · Week ")}</span><b>${r.first} of ${r.total} first try · ${fmtDate(r.at)}</b></li>`).join("")}</ul>` : `<p>No weekly quests completed yet. <a href="#challenge/weekly">Start this week’s quest</a>.</p>`}
    </section>`;
}

/* ===================== ACTIVITY VIEW ===================== */
/* Passage text with (1) tap-to-see glossary words and (2) optional evidence highlight. */
function glossRanges(act) {
  const words = (act.before && act.before.words) || []; const found = [];
  words.forEach((w, wi) => {
    const m = (w.match || w.word); const re = new RegExp("(^|[^A-Za-z])(" + m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?=[^A-Za-z]|$)", "i");
    for (let pi = 0; pi < act.text.length; pi++) { const r = re.exec(act.text[pi]); if (r) { const s0 = r.index + r[1].length; found.push({ pi, s: s0, e: s0 + r[2].length, wi }); break; } }
  });
  return found;
}
function passageHTML(act, ev) {
  const gl = act.before ? glossRanges(act) : [];
  return act.text.map((par, pi) => {
    let evS = -1, evE = -1;
    if (ev) { const i = par.indexOf(ev); if (i >= 0) { evS = i; evE = i + ev.length; } }
    const gs = gl.filter(g => g.pi === pi && !(evS >= 0 && ((g.s < evS && g.e > evS) || (g.s < evE && g.e > evE)))).sort((a, b) => a.s - b.s);
    const cuts = new Set([0, par.length]); if (evS >= 0) { cuts.add(evS); cuts.add(evE); } gs.forEach(g => { cuts.add(g.s); cuts.add(g.e); });
    const pts = [...cuts].sort((a, b) => a - b); let out = "", inEv = false;
    for (let k = 0; k < pts.length - 1; k++) {
      const a = pts[k], b = pts[k + 1]; const nowEv = evS >= 0 && a >= evS && b <= evE;
      if (nowEv && !inEv) { out += `<mark id="evMark">`; inEv = true; }
      if (!nowEv && inEv) { out += `</mark>`; inEv = false; }
      const g = gs.find(x => x.s === a); const seg = esc(par.slice(a, b));
      if (g) { const w = act.before.words[g.wi]; out += `<button type="button" class="gloss" data-word="${esc(w.word)}" data-def="${esc(w.def)}" aria-expanded="false" title="Tap to see the meaning">${seg}</button>`; }
      else out += seg;
    }
    if (inEv) out += `</mark>`;
    return `<p>${out}</p>`; }).join("");
}
function readingSupportHTML(act) {
  const L = C.reading.levels[act.level - 1] || {}; const b = act.before;
  return `<p class="read-instr">${icon("info")} Read the passage. Then answer the questions. You can look at the passage while answering.</p>
    ${b ? `<details class="support byr"><summary>${icon("bulb")} Before You Read</summary>
      <p class="small muted" style="margin:.4rem 0 .6rem">Learn these words first. They are also <span class="gloss-demo">underlined</span> in the passage. Tap a word to see its meaning.</p>
      <ul class="word-list">${b.words.map(w => `<li><strong>${esc(w.word)}</strong> — ${esc(w.def)}<br><span class="small muted">Example: “${esc(w.ex)}”</span></li>`).join("")}</ul>
      <p class="predict"><strong>Think before you read:</strong> ${esc(b.predict)} <span class="small muted">(This is for thinking only. It is not scored.)</span></p></details>` : ""}
    ${L.example && act.level <= 2 ? `<details class="support example"><summary>${icon("eye")} See an Example</summary>
      <p class="small muted" style="margin:.4rem 0">This example shows how to answer. It is not scored.</p>
      <p><strong>Text:</strong> “${esc(L.example.text)}”</p><p><strong>Question:</strong> ${esc(L.example.q)}</p>
      <p><strong>Answer:</strong> ${esc(L.example.a)}</p><p class="small"><strong>Why:</strong> ${esc(L.example.exp)}</p></details>` : ""}`;
}
function newQState() { return { phase: "answering", sel: null, tried: [], wrong: 0, hint: false, hintUsed: false, revealed: false, lastWhy: "", orderAns: [], text: null, paraOrder: null }; }
function resetQ() { Object.assign(session, newQState()); const q = curQ(); if (q && q.kind === "correct") session.text = q.wrong; if (q && q.kind === "para") session.paraOrder = q.start.slice(); }
const curQ = () => session.list[session.idx];

function viewActivity(id) {
  const act = ACTIVITIES[id]; const A = AREAS[act.area];
  if (!session || session.aid !== id) {
    const firstOpen = act.questions.findIndex(q => !(S.q[q.id] && S.q[q.id].s));
    const isSet = act.area === "vocab" || act.area === "grammar";
    session = { type: "activity", aid: id, list: act.questions, mode: S.done[id] ? "summary" : (isSet && actStats(id).att === 0 ? "learn" : "normal"), idx: Math.max(0, firstOpen), log: [],
      cfg: { record: true, retry: true, hints: true, immediate: true } };
    resetQ();
  }
  let left = "";
  if (act.area === "reading") left = `<article class="card passage-panel" aria-labelledby="pTitle">
      <p class="eyebrow">${levelLabel(act.level)} · ${esc(act.topic)} · ${act.words} words</p><h1 id="pTitle">${esc(act.title)}</h1>
      ${readingSupportHTML(act)}
      <div class="passage-tools">${canSpeak ? `<button class="btn ghost" type="button" id="speakBtn" aria-pressed="false">${icon("speaker")} Listen</button>` : ""}<span class="small muted">You can listen, read, or both.</span></div>
      <div class="passage-text" id="passageText">${passageHTML(act)}</div>
      <button class="btn ghost mobile-only" type="button" id="toQuestions">Go to the question ↓</button></article>`;
  else if (act.area === "listening") left = `<article class="card passage-panel listen-panel" aria-labelledby="pTitle">
      <p class="eyebrow">${levelLabel(act.level, "listening")} · ${esc(act.format)} · ${esc(act.topic)}</p><h1 id="pTitle">${esc(act.title)}</h1>
      ${listenPreviewHTML(act)}
      <ol class="steps small"><li>Read the useful words, then press <strong>Play</strong> and listen carefully.</li><li>Read each question. Replay the audio or choose a slower speed if you need to.</li><li>Choose your answer. The transcript opens after you answer all the questions.</li></ol>
      <div id="playerBox">${playerHTML(act)}</div></article>`;
  const isPanel = !!left;
  main().innerHTML = `
    ${act.area === "reading" ? `<nav class="crumbs" aria-label="Breadcrumb"><a class="back-link" href="#reading">← Back to Reading Library</a> <span class="small muted">Your progress is saved automatically.</span></nav>`
      : `<nav class="crumbs" aria-label="Breadcrumb"><a href="${A.route}">${A.name}</a> <span aria-hidden="true">›</span> ${esc(act.title)}</nav>`}
    <div class="${isPanel ? "reader-grid" : "practice-wrap"}">
      ${isPanel ? left : `<div class="page-head"><p class="eyebrow">${icon(A.icon)} ${A.name}${act.level ? " · " + levelLabel(act.level, act.area) : ""}${act.wtype ? " · " + WTYPE[act.wtype] : ""}${isSetAct(act) ? ` · ${setLabel(act)} · ${esc(plName(act.plevel))} · ${esc(act.topic)}` : ""}</p><h1>${esc(act.title)}</h1><p>${esc(act.desc)}</p></div>${act.area === "writing" && act.learn ? writingLessonHTML(act) : ""}`}
      <section class="card quiz" id="quiz" aria-label="Questions"></section>
    </div>`;
  if (act.area === "reading" && canSpeak) $("#speakBtn").addEventListener("click", toggleReadAloud);
  if (act.area === "reading") $("#toQuestions").addEventListener("click", () => { $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" }); const q = $("#qText"); if (q) { q.setAttribute("tabindex", "-1"); q.focus({ preventScroll: true }); } });
  if (act.area === "listening") bindPlayer(act, $("#playerBox"));
  S.last = id; save();
  renderQuiz();
}
function toggleReadAloud() {
  const act = ACTIVITIES[session.aid];
  const set = on => { const b = $("#speakBtn"); if (!b) return; b.setAttribute("aria-pressed", String(on)); b.innerHTML = on ? `${icon("stop")} Stop` : `${icon("speaker")} Listen`; };
  if (speechSynthesis.speaking) { stopSpeech(); set(false); return; }
  const u = new SpeechSynthesisUtterance(act.title + ". " + act.text.join(" "));
  const v = englishVoices()[0]; if (v) { try { u.voice = v; } catch (e) {} } u.lang = v ? v.lang : "en-US"; u.rate = 0.9;
  u.onend = u.onerror = () => set(false);
  speechSynthesis.speak(u); set(true);
}
function setPassageHighlight(ev) {
  const el = $("#passageText"); if (!el) return;
  const q = curQ(); const act = q && q.area === "reading" ? ACTIVITIES[q.aid] : (session.aid ? ACTIVITIES[session.aid] : null);
  if (act && act.text) el.innerHTML = passageHTML(act, ev);
}

/* ---------- Answer checking ---------- */
const normText = s => String(s).replace(/[‘’ʼ`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").trim();
const stripEnd = s => s.replace(/[.!?]+$/, "");
const isPunct = t => /^[.,!?;:]$/.test(t);
function joinTokens(toks) { return toks.join(" ").replace(/\s+([,.!?;:])/g, "$1"); }
function checkCurrent() {
  const q = curQ();
  if (q.kind === "mcq") {
    if (session.sel === null || session.tried.includes(session.sel)) return { ready: false, msg: "Please choose an answer first." };
    const o = q.options[session.sel]; return { ready: true, ok: o.correct, why: o.why };
  }
  if (q.kind === "order") {
    if (!session.orderAns.length) return { ready: false, msg: "Tap the words to build your sentence first." };
    const toks = session.orderAns.map(i => q.tiles[i]);
    if (q.accept.some(a => a.length === toks.length && a.every((t, i) => t === toks[i]))) return { ready: true, ok: true };
    const sortJ = a => a.slice().sort().join("|");
    const minLen = Math.min(...q.accept.map(a => a.length));
    const want = q.accept[0]; const wantP = want[want.length - 1];
    let why;
    const usedP = toks.filter(isPunct), needP = want.filter(isPunct);
    if (usedP.some(p => !needP.includes(p)) && /[.?!]/.test(usedP.join(""))) why = "Check the end mark. Is this sentence a statement (.) or a question (?)";
    else if (toks.length < minLen && toks.filter(t => !isPunct(t)).length === want.filter(t => !isPunct(t)).length) why = "All the words are there. Don’t forget the punctuation.";
    else if (toks.length < minLen) why = "Some words are missing. Use all the words you need to make a complete sentence.";
    else if (!isPunct(toks[toks.length - 1])) why = `A sentence needs punctuation at the end. Put “${wantP}” last.`;
    else if (q.accept.some(a => sortJ(a) === sortJ(toks))) why = toks[0] !== want[0] && /^[A-Z]/.test(want[0]) ? "All the right words are there, but the order is not correct. Hint: the first word of a sentence has a capital letter." : "All the right words are there, but the order is not correct. Read your sentence aloud. Does it sound right?";
    else why = "Not quite. Read your sentence aloud. Does it sound right?";
    return { ready: true, ok: false, why };
  }
  if (q.kind === "correct") {
    const ans = normText(session.text || "");
    if (!ans) return { ready: false, msg: "Please type your corrected sentence first." };
    if (ans === normText(q.wrong)) return { ready: false, msg: "You have not changed the sentence yet. Find the mistake and fix it." };
    const acc = q.accept.map(normText);
    if (acc.includes(ans)) return { ready: true, ok: true };
    let why = null;
    if (acc.some(a => a.toLowerCase() === ans.toLowerCase())) why = "Your words are correct. Now check your capital letters.";
    else if (acc.some(a => stripEnd(a) === stripEnd(ans))) why = "Your words are correct. Now check the punctuation at the end of the sentence.";
    else if (acc.some(a => stripEnd(a).toLowerCase() === stripEnd(ans).toLowerCase())) why = "Your words are correct. Check your capital letters and end punctuation.";
    else { const hit = (q.checks || []).find(c => new RegExp(c[0]).test(ans)); if (hit) why = hit[1]; }
    if (!why) why = "Your sentence does not match the answers this activity can check automatically. Read the hint, then try again.";
    return { ready: true, ok: false, why };
  }
  if (q.kind === "para") {
    const ord = session.paraOrder;
    if (q.accept.some(a => a.every((v, i) => v === ord[i]))) return { ready: true, ok: true };
    const n = ord.length; let why;
    if (ord[0] !== 0) why = "The first sentence should be the topic sentence. It tells the main idea of the whole paragraph.";
    else if (ord[n - 1] !== n - 1) why = "Your topic sentence is in the right place. The last sentence should be the concluding sentence. Look for words like “In conclusion”, “For these reasons”, or “Clearly”.";
    else why = "The topic sentence and concluding sentence are in the right place. Now check the order of the details. Look at words like First, Next, Then, Another, For example, and Finally.";
    return { ready: true, ok: false, why };
  }
}

/* ---------- Quiz rendering ---------- */
function answerAreaHTML(q, locked) {
  const letters = "ABCD";
  if (q.kind === "mcq") return `<div class="options" id="opts">${q.options.map((o, i) => {
    const tried = session.tried.includes(i); const right = session.phase === "resolved" && o.correct && (session.revealed || session.lastOk);
    const sel = session.sel === i && !tried && !right;
    const cls = ["opt", tried ? "tried" : "", right ? "right" : "", sel ? "selected" : "", (locked || tried) ? "locked" : ""].join(" ");
    const status = tried ? `<span class="ostatus">${icon("x")} Not correct</span>` : right ? `<span class="ostatus">${icon("check")} Correct answer</span>` : "";
    return `<label class="${cls}"><input type="radio" name="opt" value="${i}" ${session.sel === i ? "checked" : ""} ${(locked || tried) ? "disabled" : ""}>
      <span class="letter" aria-hidden="true">${letters[i]}</span><span class="otext"><span class="sr-only">Option ${letters[i]}: </span>${esc(o.t)}</span>${status}</label>`; }).join("")}</div>`;
  if (q.kind === "order") {
    const used = session.orderAns;
    return `<div class="tile-zone">
      <p class="small muted" id="ordHelp">Tap a word to add it. Tap a word in your sentence to remove it.${q.tiles.length > q.accept[0].length ? " You may not need every tile." : ""}</p>
      <div class="tile-line ${locked ? "locked" : ""}" aria-label="Your sentence" role="group">${used.length ? used.map((ti, k) => `<button type="button" class="tile placed" data-rm="${k}" ${locked ? "disabled" : ""} aria-label="Remove ${esc(q.tiles[ti])}">${esc(q.tiles[ti])}</button>`).join("") : `<span class="muted small">Your sentence will appear here.</span>`}</div>
      <p class="preview" aria-live="polite"><span class="muted small">Your sentence:</span> <strong>${used.length ? esc(joinTokens(used.map(i => q.tiles[i]))) : "—"}</strong></p>
      <div class="tile-bank" role="group" aria-label="Word tiles">${q.tiles.map((t, i) => used.includes(i) ? "" : `<button type="button" class="tile" data-add="${i}" ${locked ? "disabled" : ""}>${esc(t)}</button>`).join("")}</div>
      <div class="btn-row small-btns"><button type="button" class="btn ghost" id="undoBtn" ${locked || !used.length ? "disabled" : ""}>${icon("undo")} Undo</button><button type="button" class="btn ghost" id="clearBtn" ${locked || !used.length ? "disabled" : ""}>${icon("x")} Clear</button></div>
      ${session.phase === "resolved" && session.revealed ? `<p class="evidence">${esc(joinTokens(q.accept[0]))}</p>` : ""}</div>`;
  }
  if (q.kind === "correct") return `<div class="correct-zone">
      <p class="small muted" style="margin-bottom:.3rem">Sentence with a mistake:</p><p class="wrong-sent">${esc(q.wrong)}</p>
      <label for="corrInput" class="small"><strong>Your corrected sentence:</strong></label>
      <textarea id="corrInput" rows="2" ${locked ? "disabled" : ""} spellcheck="false" autocomplete="off">${esc(session.text || "")}</textarea>
      <div class="btn-row small-btns"><button type="button" class="btn ghost" id="resetText" ${locked ? "disabled" : ""}>${icon("undo")} Start again from the original</button></div></div>`;
  if (q.kind === "para") {
    const showRoles = session.phase === "resolved";
    const order = showRoles && session.revealed ? q.accept[0] : session.paraOrder;
    return `<p class="small muted">Use the arrow buttons to move each sentence up or down.</p><ol class="para-list" id="paraList">${order.map((si, k) => `
      <li class="${showRoles ? "ok" : ""}"><span class="pnum" aria-hidden="true">${k + 1}</span><span class="ptext">${esc(q.sentences[si])}${showRoles ? `<span class="tag green">${esc(q.roles[si])}</span>` : ""}</span>
        <span class="pbtns"><button type="button" class="iconbtn" data-up="${k}" ${locked || k === 0 ? "disabled" : ""} aria-label="Move sentence ${k + 1} up">${icon("up")}</button><button type="button" class="iconbtn" data-down="${k}" ${locked || k === order.length - 1 ? "disabled" : ""} aria-label="Move sentence ${k + 1} down">${icon("down")}</button></span></li>`).join("")}</ol>`;
  }
  return "";
}
function learnHTML(act) {
  if (act.area === "vocab") return `<ul class="learn-words">${(act.learn || []).map(w => `<li><span class="lw-word">${esc(w.word)}</span><span class="lw-def">${esc(w.def)}</span><span class="lw-ex">Example: “${esc(w.ex)}”</span></li>`).join("")}</ul>`;
  const L = act.learn || {};
  return `<div class="rule-box"><p class="eyebrow">The rule</p><p>${esc(L.rule || "")}</p></div>
    <div class="grid g2" style="gap:.6rem;margin-top:.6rem">
      <div class="ex-box ok"><p class="eyebrow">${icon("check")} Correct examples</p>${(L.examples || []).map(x => `<p>“${esc(x)}”</p>`).join("")}</div>
      <div class="ex-box no"><p class="eyebrow">${icon("x")} Common mistake</p><p class="mistake">“${esc(L.mistake || "")}”</p><p class="eyebrow" style="margin-top:.5rem">${icon("check")} Correction</p><p>“${esc(L.correction || "")}”</p></div>
    </div>`;
}
const isSetAct = act => act && (act.area === "vocab" || act.area === "grammar");
/* Writing Workshop lesson: Learn → See an Example → Remember. Open until the student starts answering. */
function writingLessonBody(act, withCheck) {
  const L = act.learn;
  return `<div class="lesson-body">
      <h3>${icon("book")} Learn</h3><p>${esc(L.explain)}</p>
      <div class="lesson-example"><p class="eyebrow">See an example</p><p class="model-line">${esc(L.example)}</p>
        ${L.notes && L.notes.length ? `<ul class="feature-list small">${L.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}</div>
      ${L.tips && L.tips.length ? `<h3>${icon("target")} Remember</h3><ul class="feature-list">${L.tips.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      ${withCheck && L.check && L.check.length ? `<h3>${icon("check")} Check and improve</h3><ul class="feature-list">${L.check.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
    </div>`;
}
function writingLessonHTML(act) {
  const started = act.questions.some(q => S.q[q.id]) || !!S.done[act.id];
  return `<details class="card lesson" id="lesson" ${started ? "" : "open"}><summary>${icon("book")} Lesson: ${esc(act.learn.skill)} <span class="small muted">${started ? "(tap to review)" : "(read this first)"}</span></summary>${writingLessonBody(act, false)}</details>`;
}
function reviewLearnHTML(act) {
  if (act.area === "writing" && act.learn) return `<div class="card lesson-check">${icon("check")} <strong>Check and improve</strong><ul class="feature-list">${(act.learn.check || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
    <details class="support review-learn"><summary>${icon("book")} Review the lesson</summary>${writingLessonBody(act, false)}</details></div>`;
  return isSetAct(act) ? `<details class="support review-learn"><summary>${icon("book")} Review ${act.area === "vocab" ? "the words" : "the rule"}</summary>${learnHTML(act)}</details>` : "";
}
function renderLearn(box) {
  const act = ACTIVITIES[session.aid]; const v = act.area === "vocab";
  box.innerHTML = `${stagePath("learn")}
    <h2>${v ? "Learn the Words" : "Learn the Rule"}</h2>
    <p class="muted">${v ? "Read each word, its meaning, and the example. Say the words aloud." : "Read the rule and the examples. Look carefully at the common mistake."} When you are ready, start the practice. ${v ? "The words" : "The rule"} will be hidden during practice, and you can review ${v ? "them" : "it"} afterwards.</p>
    ${learnHTML(act)}
    <div class="btn-row" style="margin-top:1rem"><button class="btn primary" type="button" id="startPractice">Start Practice ${icon("arrow")}</button></div>`;
  box.querySelector("#startPractice").addEventListener("click", () => { session.mode = "normal"; renderQuiz(); const qt = $("#qText"); if (qt) { qt.setAttribute("tabindex", "-1"); qt.focus(); } });
}
function renderQuiz() {
  setTimeout(updateTranscriptLock, 0);
  const box = $("#quiz"); if (!box) return;
  if (session.mode === "learn") return renderLearn(box);
  if (session.mode === "summary") return renderSummary(box);
  if (session.mode === "results") return session.type === "challenge" ? renderChallengeResults(box) : renderResults(box);
  const q = curQ(); const total = session.list.length; const cfg = session.cfg;
  const locked = session.phase !== "answering";
  let progN;
  if (session.type === "activity" && session.mode === "normal") progN = session.list.filter(x => S.q[x.id] && S.q[x.id].s).length;
  else progN = session.idx + (session.phase === "resolved" ? 1 : 0);
  const label = session.type === "challenge" ? `Question ${session.idx + 1} of ${total}` : `${q.area === "writing" && q.kind !== "mcq" ? "Task" : "Question"} ${q.n} of ${total}`;
  const reread = q.area === "reading" && $("#passageText") ? `<button class="btn ghost mobile-only reread-btn" type="button" id="rereadBtn">${icon("book")} Reread the passage</button>` : "";
  const setSteps = session.type === "activity" && isSetAct(ACTIVITIES[session.aid]) ? stagePath("practice") : "";
  box.innerHTML = `${reread}${setSteps}
    <div class="quiz-top">
      <div class="row"><p class="eyebrow" style="margin:0">${label}${session.mode === "practice" ? " · Practice round" : ""}</p><span class="btn-row" style="gap:.3rem">${isSetAct(ACTIVITIES[q.aid]) ? `<span class="tag gold">Level: ${esc(plName(ACTIVITIES[q.aid].plevel))}</span>` : ""}<span class="tag">Skill: ${esc(q.skillName)}</span></span></div>
      ${bar(pct(progN, total), "", "Progress")}
    </div>
    ${session.type === "challenge" ? `<p class="small muted" style="margin:-.4rem 0 .6rem">${AREAS[q.area].name}${q.kind === "mcq" ? "" : " · " + WTYPE[ACTIVITIES[q.aid].wtype]}</p>` : ""}
    <fieldset class="q-fieldset"><legend class="q-text" id="qText">${esc(q.q)}</legend>${answerAreaHTML(q, locked)}</fieldset>
    ${session.hint ? `<div class="hint-box">${icon("bulb")}<p style="margin:0"><strong>Hint:</strong> ${esc(q.hint)}</p></div>` : ""}
    <div class="btn-row">
      ${session.phase === "answering" ? `${cfg.hints ? `<button class="btn ghost" type="button" id="hintBtn" ${session.hint ? "disabled" : ""}>${icon("bulb")} ${session.hint ? "Hint shown" : "Hint"}</button>` : ""}
        <button class="btn primary" type="button" id="checkBtn">${icon("check")} ${cfg.immediate ? "Check Answer" : "Save Answer"}</button>` : ""}
      ${session.phase === "wrong" ? `<button class="btn secondary" type="button" id="retryBtn">${icon("refresh")} Try Again</button>` : ""}
      ${session.phase === "resolved" ? `<button class="btn primary" type="button" id="nextBtn">${session.idx < total - 1 ? "Next Question" : "See My Results"} ${icon("arrow")}</button>` : ""}
    </div>
    <div class="feedback" id="feedback" tabindex="-1">${feedbackHTML(q)}</div>`;
  bindQuiz(box, q);
}
function bindQuiz(box, q) {
  const on = (sel, fn) => { const el = box.querySelector(sel); if (el) el.addEventListener("click", fn); };
  box.querySelectorAll('input[name="opt"]').forEach(inp => inp.addEventListener("change", () => {
    session.sel = Number(inp.value);
    box.querySelectorAll(".opt").forEach(l => l.classList.toggle("selected", l.querySelector("input") === inp));
    const fb = $("#feedback"); if (fb && fb.querySelector(".warn")) fb.innerHTML = "";
  }));
  const rerenderFocus = sel => { renderQuiz(); const el = box.querySelector(sel); if (el) el.focus(); };
  box.querySelectorAll("[data-add]").forEach(b => b.addEventListener("click", () => { session.orderAns.push(Number(b.dataset.add)); rerenderFocus(".tile-bank .tile") || 0; }));
  box.querySelectorAll("[data-rm]").forEach(b => b.addEventListener("click", () => { session.orderAns.splice(Number(b.dataset.rm), 1); rerenderFocus(".tile-line .tile, .tile-bank .tile"); }));
  on("#undoBtn", () => { session.orderAns.pop(); rerenderFocus(".tile-bank .tile"); });
  on("#clearBtn", () => { session.orderAns = []; rerenderFocus(".tile-bank .tile"); });
  const ta = box.querySelector("#corrInput"); if (ta) ta.addEventListener("input", () => { session.text = ta.value; });
  on("#resetText", () => { session.text = q.wrong; rerenderFocus("#corrInput"); });
  box.querySelectorAll("[data-up],[data-down]").forEach(b => b.addEventListener("click", () => {
    const k = Number(b.dataset.up !== undefined ? b.dataset.up : b.dataset.down); const d = b.dataset.up !== undefined ? -1 : 1; const o = session.paraOrder;
    [o[k], o[k + d]] = [o[k + d], o[k]]; renderQuiz();
    const target = box.querySelector(`[data-${d < 0 ? "up" : "down"}="${k + d}"]`) || box.querySelector(`[data-${d < 0 ? "down" : "up"}="${k + d}"]`);
    if (target) target.focus(); announce(`Moved to position ${k + d + 1}.`);
  }));
  on("#hintBtn", () => { session.hint = true; session.hintUsed = true; renderQuiz(); announce("Hint: " + q.hint); const c = $("#checkBtn"); if (c) c.focus(); });
  on("#checkBtn", checkAnswer);
  on("#retryBtn", () => { session.phase = "answering"; if (q.kind === "mcq") session.sel = null; renderQuiz();
    const first = box.querySelector('input[name="opt"]:not([disabled]), .tile-bank .tile, .tile-line .tile, #corrInput, .para-list .iconbtn:not([disabled])'); if (first) first.focus(); announce("Try again."); });
  on("#nextBtn", nextQuestion);
  on("#rereadBtn", () => { const p = $("#passageText"); if (p) { p.scrollIntoView({ behavior: "smooth", block: "start" }); } });
  on("#showEv", () => { const m = $("#evMark"); if (m) m.scrollIntoView({ behavior: "smooth", block: "center" }); });
}

function feedbackHTML(q) {
  const area = q.area;
  const evBlock = q.ev && area === "reading" ? `<p class="evidence">“${esc(q.ev)}”</p><button class="linkbtn" type="button" id="showEv">${icon("eye")} Show this in the passage</button>` : "";
  if (session.phase === "wrong") {
    let guide = "";
    if (session.wrong >= 2) {
      let extra = "";
      if (area === "reading" && q.ev) extra = `<p>Read this part of the text again:</p>${evBlock}`;
      else if (area === "listening") extra = `<p>${icon("headphones")} Replay the audio. Try the <strong>0.75×</strong> speed and listen for the key words in the hint.</p>`;
      else if (q.kind === "order") extra = `<p>Your sentence should begin with “<strong>${esc(q.accept[0][0])}</strong>”.</p>`;
      else if (q.kind === "para") extra = `<p>The topic sentence is: “<strong>${esc(q.sentences[0])}</strong>”</p>`;
      else if (q.kind === "correct") extra = q.q.startsWith("Find the mistake") ? `<p>Change only the part with the mistake. Keep the rest of the sentence the same.</p>` : `<p>Follow the instruction above the sentence. Keep the meaning the same, and check your capital letters and punctuation.</p>`;
      else extra = `<p>Think about the rule, then remove the answers that do not fit.</p>`;
      guide = `<div class="guide"><p><strong>Extra help:</strong> ${esc(q.hint)}</p>${extra}</div>`;
    }
    return `<div class="fb no"><h3>${icon("x")} Not quite yet</h3><p>${esc(session.lastWhy)}</p>
      ${session.wrong === 1 ? `<p>${q.kind === "mcq" ? "Try another answer." : "Change your answer and check again."} You can use the hint.</p>` : ""}${guide}</div>`;
  }
  if (session.phase === "resolved") {
    if (!session.cfg.immediate) return `<div class="fb shown"><h3>${icon("check")} Answer saved</h3><p>You will see your results and explanations at the end.</p></div>`;
    const heard = area === "listening" && q.ev && !session.revealed ? `<p><strong>What you heard:</strong></p><p class="evidence">“${esc(q.ev)}”</p>` : "";
    if (session.revealed) {
      let ans = "";
      if (q.kind === "mcq") ans = `<p>The correct answer is <strong>${esc(q.options.find(o => o.correct).t)}</strong>.</p>`;
      if (q.kind === "correct") ans = `<p>A correct version is: <strong>${esc(q.accept[0])}</strong></p>${q.accept.length > 1 ? `<p class="small">Other correct versions: ${q.accept.slice(1).map(esc).join(" · ")}</p>` : ""}`;
      if (q.kind === "order") ans = `<p>The correct sentence is shown above.</p>`;
      if (q.kind === "para") ans = `<p>The correct order is shown above, with the job of each sentence.</p>`;
      return `<div class="fb shown"><h3>${icon("info")} Let’s look at the answer together</h3>${ans}<p>${esc(q.exp)}</p>${area === "reading" && q.ev ? `<p><strong>Evidence from the text:</strong></p>${evBlock}` : ""}
        ${q.kind === "correct" ? `<p class="small muted">If you wrote a different sentence that you think is also correct, ask your teacher to check it.</p>` : ""}
        <p class="small muted">This question is now complete, but it does not count toward mastery.</p></div>`;
    }
    const first = session.wrong === 0;
    const praise = first ? ["Correct. Well done.", "Correct on the first try.", "Correct. Good work.", "That’s right."][q.n % 4] : "Correct. Trying again helped you find the answer.";
    return `<div class="fb ok"><h3>${icon("check")} ${praise}</h3><p>${esc(q.exp)}</p>
      ${area === "reading" && q.ev ? `<p><strong>Evidence from the text:</strong></p>${evBlock}` : ""}${heard}
      ${first ? "" : `<p class="small muted">You found the answer after ${session.wrong + 1} tries. This counts as completed. Mastery counts only first-try answers.</p>`}</div>`;
  }
  return "";
}

function checkAnswer() {
  const q = curQ(); const res = checkCurrent();
  if (!res.ready) { $("#feedback").innerHTML = `<div class="fb warn"><p style="margin:0">${icon("info")} ${esc(res.msg)}</p></div>`; announce(res.msg); return; }
  const firstInSession = !session.log[session.idx];
  if (firstInSession) session.log[session.idx] = { first: res.ok, ok: false, revealed: false, q, answer: describeAnswer(q) };
  if (session.cfg.record && session.mode === "normal") recordAttempt(q, res.ok);
  if (!session.cfg.immediate) {   /* Skill Sprint: one attempt, results at the end */
    session.log[session.idx].ok = res.ok; session.phase = "resolved"; session.lastOk = false;
    renderQuiz(); announce("Answer saved."); const nb = $("#nextBtn"); if (nb) nb.focus(); return;
  }
  if (res.ok) {
    session.phase = "resolved"; session.lastOk = true; session.log[session.idx].ok = true;
    if (q.ev && q.area === "reading") setPassageHighlight(q.ev);
    afterSolved(q); announce("Correct. " + q.exp);
  } else {
    session.wrong++; session.lastWhy = res.why; session.lastOk = false;
    if (q.kind === "mcq") { session.tried.push(session.sel); session.sel = null; }
    if (session.wrong >= 3) {
      session.revealed = true; session.phase = "resolved"; session.log[session.idx].revealed = true;
      if (session.cfg.record && session.mode === "normal") { const r = S.q[q.id]; r.s = true; r.rev = true; save(); }
      if (q.ev && q.area === "reading") setPassageHighlight(q.ev);
      afterSolved(q); announce("Let’s look at the answer together. " + q.exp);
    } else {
      session.phase = "wrong";
      if (session.wrong >= 2 && q.ev && q.area === "reading") setPassageHighlight(q.ev);
      announce("Not quite yet. " + res.why);
    }
  }
  renderQuiz();
  const fb = $("#feedback"); if (fb) fb.focus({ preventScroll: false });
}
function describeAnswer(q) {
  if (q.kind === "mcq") return session.sel !== null ? q.options[session.sel].t : "";
  if (q.kind === "order") return joinTokens(session.orderAns.map(i => q.tiles[i]));
  if (q.kind === "correct") return normText(session.text || "");
  if (q.kind === "para") return session.paraOrder.map(i => i + 1).join(", ");
  return "";
}
function recordAttempt(q, correct) {
  let r = S.q[q.id]; if (!r) r = S.q[q.id] = { a: 0, f: false, s: false, h: false };
  const firstEver = r.a === 0; r.a++;
  if (firstEver) { r.f = correct; r.h = session.hintUsed; r.t = Date.now(); }
  if (correct) r.s = true;
  save();
}
function afterSolved() {
  if (session.type !== "activity" || session.mode !== "normal") return;
  const act = ACTIVITIES[session.aid];
  if (!S.done[act.id] && act.questions.every(x => S.q[x.id] && S.q[x.id].s)) {
    S.done[act.id] = { firstAcc: actStats(act.id).mastery, at: new Date().toISOString() };
    /* Analytics: a genuine first completion (happens once per activity in this browser). first = first-try correct answers. */
    track({ t: "activity_complete", area: act.area, id: act.id, attempt: "first", scored: act.questions.length,
      first: act.questions.filter(x => S.q[x.id] && S.q[x.id].f).length }, "first:" + act.id);
  }
  const newly = checkBadges(); save(); celebrate(newly);
}
function nextQuestion() {
  const list = session.list; let next = session.idx + 1;
  if (session.type === "activity" && session.mode === "normal") { while (next < list.length && S.q[list[next].id] && S.q[list[next].id].s) next++; }
  setPassageHighlight(null);
  if (next >= list.length) {
    if (session.type === "activity" && session.mode === "normal" && !S.done[session.aid]) { const f = list.findIndex(x => !(S.q[x.id] && S.q[x.id].s)); if (f >= 0) { session.idx = f; resetQ(); renderQuiz(); return; } }
    finishSession(); return;
  }
  session.idx = next; resetQ();
  if (session.type === "challenge") renderChallengeContext();
  renderQuiz();
  const qt = $("#qText"); if (qt) { qt.setAttribute("tabindex", "-1"); qt.focus({ preventScroll: true }); }
  $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}
function finishSession() {
  if (session.type === "challenge") { completeChallenge(false); return; }
  if (session.type === "activity" && session.mode === "practice" && !session.reported) {
    /* Analytics: a submitted practice round on an already completed activity ("repeat"; kept out of accuracy figures). */
    session.reported = true; const answered = session.log.filter(Boolean);
    track({ t: "activity_complete", area: ACTIVITIES[session.aid].area, id: session.aid, attempt: "repeat", scored: answered.length,
      first: answered.filter(l => l.first).length }, "repeat:" + session.aid + ":" + (++practiceRounds));
  }
  session.mode = "results"; renderQuiz();
  window.scrollTo({ top: $("#quiz").getBoundingClientRect().top + window.scrollY - 20 });
  const h = $("#quiz h2"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
}
function startPractice() { session.mode = "practice"; session.wasPractice = true; session.idx = 0; session.log = []; resetQ(); setPassageHighlight(null); renderQuiz(); const qt = $("#qText"); if (qt) { qt.setAttribute("tabindex", "-1"); qt.focus(); } }

/* ---------- Activity results ---------- */
function nextRecommendationFor(act) {
  if (act.level && act.area !== "writing") {
    const d = S.done[act.id]; const acc = d ? d.firstAcc : 0;
    const target = acc >= 80 ? Math.min(act.level + 1, 5) : act.level;
    const pool = actsIn(act.area).filter(id => !isDone(id) && id !== act.id);
    const cand = pool.find(id => ACTIVITIES[id].level === target) || pool.find(id => ACTIVITIES[id].level === act.level) || pool[0];
    const word = act.area === "reading" ? "passage" : "activity";
    const why = acc >= 80 ? (target > act.level ? `Strong score. You are ready to try ${levelLabel(target, act.area)}.` : "Strong score. Keep practicing at this level.")
      : acc >= 60 ? `Good effort. Try another ${word} at the same level to build your skills.` : `Try another ${word} at this level. Take your time and use the hints.`;
    if (cand) return { id: cand, why };
  }
  if (act.area === "writing") {
    const pool = actsIn("writing").filter(id => !isDone(id) && id !== act.id);
    const cand = pool.find(id => ACTIVITIES[id].level === act.level) || pool.find(id => ACTIVITIES[id].level === levelFor("writing")) || pool[0];
    if (cand) return { id: cand, why: ACTIVITIES[cand].level === act.level ? "Continue with the next activity at this level." : "Continue building your writing skills." };
  }
  if (isSetAct(act)) { const nx = actsIn(act.area).find(id => !isDone(id) && id !== act.id && ACTIVITIES[id].order > act.order) || actsIn(act.area).find(id => !isDone(id) && id !== act.id);
    if (nx) { const d = S.done[act.id]; return { id: nx, why: d && d.firstAcc >= 80 ? `Good result. Move on to ${ACTIVITIES[nx].topic}.` : `Continue with ${ACTIVITIES[nx].topic}. You can also review this set again later.` }; } }
  const same = actsIn(act.area).find(id => !isDone(id) && id !== act.id);
  if (same) return { id: same, why: `Keep going in ${AREAS[act.area].name}.` };
  const r = recommend(); if (r && r.id !== act.id) return { id: r.id, why: r.why };
  return null;
}
function skillLines(list, firstOk, extraFn) {
  return list.map((q, i) => { const ok = firstOk(i);
    return `<li class="${ok ? "ok" : "no"}">${icon(ok ? "check" : "refresh")}<span><strong>Q${i + 1} · ${esc(q.skillName)}</strong> — ${ok ? "Correct on the first try" : "Needed more tries" + (extraFn ? extraFn(i) : "")}</span></li>`; }).join("");
}
function recCard(rec) {
  return rec ? `<div class="card" style="background:var(--bg);box-shadow:none;margin:1rem 0"><p class="eyebrow">Recommended next</p><h3 style="margin:0">${esc(ACTIVITIES[rec.id].title)}</h3><p class="small muted">${AREAS[ACTIVITIES[rec.id].area].name} · ${rec.why}</p><a class="btn primary" href="${ACTIVITIES[rec.id].route}">Start ${icon("arrow")}</a></div>` : `<p><strong>You have completed every activity in this area.</strong></p>`;
}
function scoreRing(firstCount, total, label) {
  const p = pct(firstCount, total);
  const msg = p >= 80 ? "You understood this very well." : p >= 60 ? "Good work. A little more practice will help." : "You finished. Read the explanations, then practice again.";
  return `<div class="result-score"><div class="ring" style="--p:${p}" role="img" aria-label="${p}% first-try accuracy"><div>${firstCount}/${total}<small>${label || "FIRST TRY"}</small></div></div>
    <div><p class="stat-value" style="margin:0">${p}%</p><p class="muted" style="margin:0">first-try accuracy</p><p style="margin:.4rem 0 0">${msg}</p></div></div>`;
}
function resultsCore(act, firstCount, total, lines, weak, firstOkFn) {
  const A = AREAS[act.area];
  return `${scoreRing(firstCount, total)}
    ${firstOkFn ? nextStepAdvice(act, firstOkFn) : ""}
    <h3>Skills practiced</h3><ul class="skill-list">${lines}</ul>
    <h3>Areas to improve</h3>
    ${weak.length ? `<p>Practice these skills more: <strong>${weak.map(esc).join(", ")}</strong>.</p>` : `<p>No weak areas in this activity.</p>`}
    ${recCard(nextRecommendationFor(act))}
    <div class="btn-row"><button class="btn ghost" type="button" id="practiceBtn">${icon("refresh")} Practice again</button><a class="btn ghost" href="${A.route}">Back to ${A.name}</a></div>
    <p class="small muted" style="margin-top:.8rem">Practice rounds help you review. They do not change your first-try score.</p>`;
}
function renderResults(box) {
  const act = ACTIVITIES[session.aid]; let html;
  if (session.wasPractice) {
    const firstMap = i => !!(session.log[i] && session.log[i].first);
    const fc = act.questions.filter((q, i) => firstMap(i)).length;
    const weak = [...new Set(act.questions.filter((q, i) => !firstMap(i)).map(q => q.skillName))];
    html = `<h2>Practice round complete</h2><p class="muted">Your recorded first-try score stays at <strong>${S.done[act.id] ? S.done[act.id].firstAcc : 0}%</strong>.</p>` + resultsCore(act, fc, act.questions.length, skillLines(act.questions, firstMap), weak, firstMap);
  } else {
    const st = actStats(act.id);
    const weak = [...new Set(act.questions.filter(q => !(S.q[q.id] && S.q[q.id].f)).map(q => q.skillName))];
    html = (isSetAct(act) ? stagePath("review") : "") + `<h2>${act.area === "reading" ? "Passage complete" : act.area === "listening" ? "Listening activity complete" : isSetAct(act) ? "Set complete: review your results" : "Activity complete"}</h2>` +
      resultsCore(act, st.first, st.total, skillLines(act.questions, i => !!(S.q[act.questions[i].id] && S.q[act.questions[i].id].f), i => (S.q[act.questions[i].id] && S.q[act.questions[i].id].rev ? " (answer shown)" : "")), weak, i => !!(S.q[act.questions[i].id] && S.q[act.questions[i].id].f));
  }
  box.innerHTML = html + reviewLearnHTML(act);
  const pb = box.querySelector("#practiceBtn"); if (pb) pb.addEventListener("click", startPractice);
}
function renderSummary(box) {
  const act = ACTIVITIES[session.aid]; const st = actStats(act.id);
  const weak = [...new Set(act.questions.filter(q => !(S.q[q.id] && S.q[q.id].f)).map(q => q.skillName))];
  const unsolved = act.questions.filter(q => !(S.q[q.id] && S.q[q.id].s));
  const newQs = unsolved.length ? `<div class="notice" role="note">${icon("info")}<p><strong>This ${isSetAct(act) ? "set" : "activity"} has ${unsolved.length} new question${unsolved.length > 1 ? "s" : ""}.</strong> ${unsolved.length > 1 ? "They were" : "It was"} added in an update after you finished the ${isSetAct(act) ? "set" : "activity"}. Your earlier results are kept.</p></div>
    <div class="btn-row" style="margin-bottom:1rem"><button class="btn primary" type="button" id="newQsBtn">${icon("arrow")} Answer the new question${unsolved.length > 1 ? "s" : ""}</button></div>` : "";
  box.innerHTML = (isSetAct(act) ? stagePath("review") : "") + `<p class="tag green">${icon("check")} You completed this activity</p>${newQs}<h2 style="margin-top:.6rem">Your results</h2>` +
    resultsCore(act, st.first, st.total, skillLines(act.questions, i => !!(S.q[act.questions[i].id] && S.q[act.questions[i].id].f)), weak, i => !!(S.q[act.questions[i].id] && S.q[act.questions[i].id].f)) + reviewLearnHTML(act);
  box.querySelector("#practiceBtn").addEventListener("click", startPractice);
  const nb = box.querySelector("#newQsBtn");
  if (nb) nb.addEventListener("click", () => { session.mode = "normal"; session.idx = act.questions.indexOf(unsolved[0]); resetQ(); renderQuiz(); });
}

/* ===================== GUIDED WRITING ===================== */
function sentencesOf(t) { return (t.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || []).map(s => s.trim()).filter(s => /[A-Za-z]/.test(s)); }
function simpleChecks(act, text) {
  const sents = sentencesOf(text); const words = wc(text);
  const capOK = sents.filter(s => /^["“(]?[A-Z]/.test(s)).length;
  const endOK = sents.filter(s => /[.!?]["”’)]?$/.test(s)).length;
  const lowerI = (text.match(/(^|\s)i(\s|'|’|$)/g) || []).length;
  const used = act.wordBank.filter(w => new RegExp("\\b" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i").test(text));
  return [
    { ok: sents.length >= act.minSentences, text: `Sentences: ${sents.length} (goal: at least ${act.minSentences})` },
    { ok: words >= act.minSentences * 5, text: `Words: ${words}` },
    { ok: sents.length > 0 && capOK === sents.length, text: `Sentences that start with a capital letter: ${capOK} of ${sents.length}` },
    { ok: sents.length > 0 && endOK === sents.length, text: `Sentences that end with . ? or !: ${endOK} of ${sents.length}` },
    { ok: lowerI === 0, text: lowerI ? `Write “I” as a capital letter (found ${lowerI} small “i”)` : "The word “I” is written as a capital letter" },
    { ok: used.length >= 2, text: `Word bank words used: ${used.length}${used.length ? " (" + used.map(esc).join(", ") + ")" : ""}` }
  ].map(c => ({ ...c, sentences: sents.length }));
}
function viewGuided(id) {
  const act = ACTIVITIES[id]; const d = S.w[id] || { text: "", checks: [] };
  main().innerHTML = `
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#writing">Writing Workshop</a> <span aria-hidden="true">›</span> ${esc(act.title)}</nav>
    <div class="page-head"><p class="eyebrow">${icon("pen")} ${levelLabel(act.level, "writing")} · Guided Writing</p><h1>${esc(act.title)}</h1></div>
    <div class="card how-steps"><p class="eyebrow">${icon("info")} How to do this task</p>
      <ol class="steps-inline"><li><strong>Learn</strong> the skill and study the example.</li><li><strong>Plan</strong> your ideas in the organizer.</li><li><strong>Write</strong> your own sentences. Use the starters and word bank if you need them.</li><li><strong>Check</strong> your writing against the success criteria and your checklist.</li><li><strong>Compare</strong> with the model answer, then improve your writing.</li></ol>
      </div>
    <div class="guided-grid">
      <div>
        ${act.learn ? `<details class="card lesson" ${d.text && d.text.trim() ? "" : "open"}><summary>${icon("book")} Lesson: ${esc(act.learn.skill)}</summary>${writingLessonBody(act, false)}</details>` : ""}
        <div class="card" style="margin-top:1rem"><p class="eyebrow">Your task</p><p class="prompt">${esc(act.prompt)}</p>
          ${act.criteria.length ? `<h2 style="font-size:1.05rem;margin-top:.8rem">Success criteria</h2><ul class="feature-list small">${act.criteria.map(c => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
          <p class="small muted" style="margin:0">${icon("info")} Do not write your name or any personal information.</p></div>
        ${act.plan.length ? `<div class="card" style="margin-top:1rem"><h2 style="font-size:1.1rem">Plan your ideas</h2><p class="small muted">Write short notes. You do not need full sentences here. Your notes save on this device.</p>
          <div class="plan-grid">${act.plan.map((pl, i) => `<div><label for="plan${i}">${esc(pl)}</label><input id="plan${i}" type="text" data-plan="${i}" maxlength="200" value="${esc((d.plan || [])[i] || "")}"></div>`).join("")}</div></div>` : ""}
        <div class="card" style="margin-top:1rem">
          <h2 style="font-size:1.1rem">Sentence starters</h2><p class="small muted">Tap a starter to add it to your writing.</p>
          <div class="chip-row">${act.starters.map((s, i) => `<button type="button" class="chip" data-starter="${i}">${esc(s)}</button>`).join("")}</div>
          <h2 style="font-size:1.1rem;margin-top:1rem">Word bank</h2>
          <div class="chip-row">${act.wordBank.map((w, i) => `<button type="button" class="chip word" data-word="${i}">${esc(w)}</button>`).join("")}</div>
        </div>
        <div class="card" style="margin-top:1rem">
          <label for="gText"><h2 style="font-size:1.1rem;margin-bottom:.3rem">My writing</h2></label>
          <textarea id="gText" rows="9" aria-describedby="saveState">${esc(d.text || "")}</textarea>
          <p class="small muted" id="saveState" role="status">${d.at ? "Draft saved on this device." : "Your draft saves automatically on this device."}</p>
        </div>
      </div>
      <div>
        <div class="card"><h2 style="font-size:1.1rem">Simple checks</h2>
          <p class="small muted">These automatic checks only count sentences, capital letters, and punctuation. They <strong>cannot</strong> judge your ideas.</p>
          <ul class="check-list" id="autoChecks"></ul></div>
        <div class="card" style="margin-top:1rem"><h2 style="font-size:1.1rem">My checklist</h2><p class="small muted">Read your writing. Tick each item only when it is true.</p>
          <div id="selfChecks">${act.checklist.map((c, i) => `<label class="check-item"><input type="checkbox" data-ci="${i}" ${d.checks && d.checks[i] ? "checked" : ""}> <span>${esc(c)}</span></label>`).join("")}</div></div>
        <div class="card" style="margin-top:1rem">
          <div class="btn-row"><button class="btn ghost" type="button" id="modelBtn" aria-expanded="false" aria-controls="modelBox" aria-describedby="modelNote">${icon("eye")} Show Model Answer</button>
            <button class="btn secondary" type="button" id="completeBtn">${icon("check")} Mark Draft as Complete</button></div>
          <div id="modelBox" hidden><p class="eyebrow" style="margin-top:1rem">Model answer</p><p class="evidence" style="font-style:normal">${esc(act.model)}</p>
            <h3 style="font-size:1rem">Compare and revise</h3><ul class="feature-list small">
              <li>Does your first sentence tell the main idea, like the model?</li><li>Did you include every part listed in the success criteria?</li>
              ${act.revise.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
            <p class="small muted">Use the model for ideas. Do not copy it. Your writing should be your own.</p></div>
          <p class="small muted" id="modelNote"></p>
          <div id="completeMsg" role="status"></div>
          ${S.done[id] ? `<p class="small" style="color:var(--green-d)"><strong>${icon("check")} Draft completed on ${fmtDate(S.done[id].at)}.</strong> You can keep revising.</p>` : ""}
        </div>
        <div class="notice" style="margin-top:1rem">${icon("info")}<p>This is <strong>self-assessment practice</strong>. NVS English Quest does not grade your writing. Show your draft to your teacher for feedback. Completing a draft shows practice, not mastery.</p></div>
        <div class="btn-row" style="margin-top:1rem">${(() => { const r = nextRecommendationFor(act); return r ? `<a class="btn ghost" href="${ACTIVITIES[r.id].route}">Next: ${esc(ACTIVITIES[r.id].title)} ${icon("arrow")}</a>` : ""; })()}<a class="btn ghost" href="#writing">Back to Writing Workshop</a></div>
      </div>
    </div>`;
  const ta = $("#gText"); let tmr;
  const persist = () => { const cur = S.w[id] || {}; S.w[id] = { text: ta.value, checks: act.checklist.map((c, i) => !!document.querySelector(`[data-ci="${i}"]`).checked), plan: act.plan.map((p, i) => { const el = document.querySelector(`[data-plan="${i}"]`); return el ? el.value : ""; }), at: new Date().toISOString(), done: cur.done || false }; S.last = id; save(); $("#saveState").textContent = "Draft saved on this device."; };
  /* The model answer is for comparison AFTER the student has written a draft of the required length. */
  const modelOpen = () => !!S.done[id] || sentencesOf(ta.value).length >= act.minSentences;
  const lockModel = () => { const b = $("#modelBtn"), open = modelOpen(); b.disabled = !open;
    $("#modelNote").textContent = open ? "Compare your draft with the model, then improve one or two sentences." : `The model answer opens after you write at least ${act.minSentences} sentences. Try on your own first.`;
    if (!open) { $("#modelBox").hidden = true; b.setAttribute("aria-expanded", "false"); b.innerHTML = `${icon("eye")} Show Model Answer`; } };
  const refresh = () => { lockModel(); if (!ta.value.trim()) { $("#autoChecks").innerHTML = `<li class="no">${icon("info")}<span>Start writing to see the checks.</span></li>`; return; }
    $("#autoChecks").innerHTML = simpleChecks(act, ta.value).map(c => `<li class="${c.ok ? "ok" : "no"}">${icon(c.ok ? "check" : "info")}<span>${c.text}</span></li>`).join(""); };
  ta.addEventListener("input", () => { refresh(); lockModel(); clearTimeout(tmr); $("#saveState").textContent = "Saving…"; tmr = setTimeout(persist, 500); });
  const insert = txt => { const s = ta.selectionStart ?? ta.value.length, e = ta.selectionEnd ?? ta.value.length; const before = ta.value.slice(0, s);
    const pre = before && !/\s$/.test(before) ? " " : ""; ta.value = before + pre + txt + ta.value.slice(e); const pos = (before + pre + txt).length; ta.focus(); ta.setSelectionRange(pos, pos); refresh(); persist(); };
  document.querySelectorAll("[data-starter]").forEach(b => b.addEventListener("click", () => insert(act.starters[Number(b.dataset.starter)].replace(/…/g, "").replace(/\s*\/\s*/g, " / ").replace(/\s+$/, "") + " ")));
  document.querySelectorAll("[data-word]").forEach(b => b.addEventListener("click", () => insert(act.wordBank[Number(b.dataset.word)] + " ")));
  document.querySelectorAll("[data-ci]").forEach(c => c.addEventListener("change", persist));
  document.querySelectorAll("[data-plan]").forEach(c => c.addEventListener("input", () => { clearTimeout(tmr); tmr = setTimeout(persist, 500); }));
  $("#modelBtn").addEventListener("click", () => { if (!modelOpen()) return; const box = $("#modelBox"); const open = box.hidden; box.hidden = !open; $("#modelBtn").setAttribute("aria-expanded", String(open)); $("#modelBtn").innerHTML = `${icon("eye")} ${open ? "Hide Model Answer" : "Show Model Answer"}`; });
  $("#completeBtn").addEventListener("click", () => {
    persist(); const sents = sentencesOf(ta.value).length; const allTicked = act.checklist.every((c, i) => document.querySelector(`[data-ci="${i}"]`).checked);
    const missing = [];
    if (sents < act.minSentences) missing.push(`write at least ${act.minSentences} sentences (you have ${sents})`);
    if (!allTicked) missing.push("check your writing and tick every item in your checklist");
    const box = $("#completeMsg");
    if (missing.length) { box.innerHTML = `<div class="fb no" style="margin-top:1rem"><h3>${icon("info")} Almost there</h3><p>Before you finish, ${missing.join(", and ")}.</p></div>`; return; }
    const firstTime = !S.done[id];
    S.done[id] = { draft: true, at: new Date().toISOString(), sentences: sents, words: wc(ta.value) }; S.w[id].done = true;
    /* Analytics: guided writing is self-assessed, so it is sent with 0 scored questions (never counted as correct). The text is never sent. */
    if (firstTime) track({ t: "activity_complete", area: "writing", id, attempt: "first", scored: 0, first: 0 }, "first:" + id);
    const newly = checkBadges(); save(); celebrate(newly);
    box.innerHTML = `<div class="fb ok" style="margin-top:1rem"><h3>${icon("check")} Draft ${firstTime ? "completed" : "updated"}</h3><p>Well done for finishing your draft. Remember: this is self-checked practice. Ask your teacher to read it.</p></div>`;
    announce("Draft completed.");
  });
  refresh(); lockModel();
}

/* ===================== CHALLENGE ARENA ===================== */
const CHALLENGES = {
  quick: { name: "Quick Quest", icon: "bolt", n: 10, desc: "10 mixed questions from reading, vocabulary, and grammar. No timer. You get feedback after each question.", tags: ["10 questions", "No timer", "Instant feedback"] },
  sprint: { name: "Skill Sprint", icon: "clock", n: 10, desc: "10 vocabulary and grammar questions. Choose a 5-minute timer or no timer. One try per question; results at the end.", tags: ["10 questions", "Optional timer", "Results at the end"] },
  detective: { name: "Reading Detective", icon: "search", n: 5, desc: "One full reading passage with five questions about evidence, main idea, and inference. Detailed explanations.", tags: ["1 passage", "5 questions", "Detailed feedback"] },
  weekly: { name: "Weekly English Quest", icon: "calendar", n: 15, desc: "15 questions: reading, vocabulary, grammar, and listening. The same quest for everyone this week. Earn a weekly completion record.", tags: ["15 questions", "Changes weekly", "Skill breakdown"] }
};
const mcqBank = area => ALLQ.filter(q => q.area === area && q.kind === "mcq");
function buildChallenge(mode) {
  const rl = readingLevel();
  if (mode === "quick") {
    const rnd = Math.random;
    const lvMax = Math.max(2, Math.min(rl, 3));
    const p = sample(PASSAGES.filter(x => x.level <= lvMax && x.level >= Math.max(1, lvMax - 1)), 1, rnd)[0];
    const rq = sample(ACTIVITIES[p.id].questions, 4, rnd).sort((a, b) => a.n - b.n);
    const v = sample(mcqBank("vocab"), 3, rnd), g = sample(mcqBank("grammar"), 3, rnd);
    return [v[0], g[0], ...rq, v[1], g[1], v[2], g[2]];
  }
  if (mode === "sprint") return sample(sample(mcqBank("vocab"), 5, Math.random).concat(sample(mcqBank("grammar"), 5, Math.random)), 10, Math.random);
  if (mode === "detective") {
    const pool = PASSAGES.filter(x => x.level >= 3 && x.id !== S.ch.lastDetective);
    const pref = pool.filter(x => x.level <= Math.max(3, rl));
    const p = sample(pref.length ? pref : pool, 1, Math.random)[0];
    S.ch.lastDetective = p.id; save();
    const qs = ACTIVITIES[p.id].questions;
    const focus = q => /evidence|main idea|central idea|inference|conclusion/i.test(q.skillName) ? 0 : 1;
    const ranked = sample(qs, qs.length, Math.random).sort((a, b) => focus(a) - focus(b));
    return ranked.slice(0, 5).sort((a, b) => a.n - b.n);
  }
  if (mode === "weekly") {
    const rnd = rngFrom(hash("weekly-" + thisWeek().key));
    const p = sample(PASSAGES.filter(x => x.level >= 2 && x.level <= 4), 1, rnd)[0];
    const rq = sample(ACTIVITIES[p.id].questions, 4, rnd).sort((a, b) => a.n - b.n);
    const v = sample(mcqBank("vocab"), 4, rnd), g = sample(mcqBank("grammar"), 4, rnd);
    const l = sample(LISTEN.filter(x => x.level <= 3), 1, rnd)[0];
    const lq = sample(ACTIVITIES[l.id].questions, 3, rnd).sort((a, b) => a.n - b.n);
    return [v[0], g[0], v[1], g[1], v[2], g[2], v[3], g[3], ...rq, ...lq];
  }
}
function viewChallenge() {
  const wk = thisWeek(); const wDone = S.ch.weekly[wk.key];
  main().innerHTML = `
    <div class="page-head"><p class="eyebrow">${icon("trophy")} Mixed-skills review</p><h1>Challenge Arena</h1>
      <p>Review the skills you have practiced. Try to beat your own best score — there are no leaderboards.</p></div>
    ${howItWorks("challenge")}
    <div class="notice" role="note">${icon("info")}<p><strong>Practice, not a test.</strong> These are browser-based practice challenges, not school assessments. Challenge answers do not change your mastery scores, so you can retry as often as you like.</p></div>
    <div class="grid g2 section">${Object.entries(CHALLENGES).map(([k, c]) => { const r = runsOf(k); const best = r.length ? Math.max(...r.map(x => pct(x.first, x.total))) : null;
      return `<div class="card ch-card"><div class="btn-row" style="justify-content:space-between"><span class="a-icon">${icon(c.icon)}</span>${k === "weekly" ? `<span class="tag ${wDone ? "green" : "gold"}">${wk.label}${wDone ? " · Completed ✓" : ""}</span>` : ""}</div>
        <h2>${c.name}</h2><p class="muted">${c.desc}</p><div class="p-meta">${c.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <p class="small" style="margin:.6rem 0">${r.length ? `Completed ${r.length}× · Best first-try score: <strong>${best}%</strong>` : "Not tried yet"}</p>
        <a class="btn primary" href="#challenge/${k}">${r.length ? "Play again" : "Start"} ${icon("arrow")}</a></div>`; }).join("")}</div>`;
}
function viewChallengeStart(mode) {
  const c = CHALLENGES[mode];
  if (mode === "sprint") {
    main().innerHTML = `<nav class="crumbs" aria-label="Breadcrumb"><a href="#challenge">Challenge Arena</a> <span aria-hidden="true">›</span> ${c.name}</nav>
      <div class="practice-wrap"><div class="card"><p class="eyebrow">${icon("clock")} Challenge</p><h1>${c.name}</h1><p>${c.desc}</p>
        <fieldset class="mode-pick"><legend><strong>Choose how you want to play</strong></legend>
          <label class="opt"><input type="radio" name="sprintMode" value="timed"><span class="otext"><strong>Timed — 5 minutes</strong><br><span class="small muted">Try to answer all 10 before time runs out.</span></span></label>
          <label class="opt"><input type="radio" name="sprintMode" value="untimed" checked><span class="otext"><strong>Untimed</strong><br><span class="small muted">Take your time. There is no penalty for choosing this.</span></span></label></fieldset>
        <div class="btn-row" style="margin-top:1rem"><button class="btn primary" type="button" id="goSprint">Start ${icon("arrow")}</button><a class="btn ghost" href="#challenge">Back</a></div></div></div>`;
    $("#goSprint").addEventListener("click", () => startChallenge("sprint", { timed: document.querySelector('input[name="sprintMode"]:checked').value === "timed" }));
    document.querySelectorAll('input[name="sprintMode"]').forEach(r => r.addEventListener("change", () => document.querySelectorAll(".mode-pick .opt").forEach(l => l.classList.toggle("selected", l.querySelector("input").checked))));
    document.querySelectorAll(".mode-pick .opt")[1].classList.add("selected");
    return;
  }
  startChallenge(mode, {});
}
function startChallenge(mode, opts) {
  clearTimer(); stopSpeech();
  const c = CHALLENGES[mode]; const list = buildChallenge(mode);
  const sprint = mode === "sprint";
  session = { type: "challenge", mode: "challenge", chMode: mode, list, idx: 0, log: [], ctxKey: null, timed: !!opts.timed,
    endAt: opts.timed ? Date.now() + 5 * 60 * 1000 : null, week: mode === "weekly" ? thisWeek() : null,
    cfg: { record: false, retry: !sprint, hints: !sprint, immediate: !sprint } };
  resetQ();
  main().innerHTML = `<nav class="crumbs" aria-label="Breadcrumb"><a href="#challenge">Challenge Arena</a> <span aria-hidden="true">›</span> ${c.name}</nav>
    <div class="reader-grid">
      <div class="ch-left"><div class="card ch-head"><p class="eyebrow">${icon(c.icon)} Challenge${session.week ? " · " + session.week.label : ""}</p><h1>${c.name}</h1>
        ${session.timed ? `<p class="timer" id="timer" aria-live="off">${icon("clock")} <span id="timeLeft">5:00</span> left</p>` : sprint ? `<p class="small muted">Untimed mode</p>` : ""}
        <div class="dots" id="dots" aria-hidden="true"></div></div>
        <div id="ctxPanel"></div></div>
      <section class="card quiz" id="quiz" aria-label="Questions"></section>
    </div>`;
  if (session.timed) {
    const tick = () => { const left = Math.max(0, session.endAt - Date.now()); const s = Math.ceil(left / 1000); const el = $("#timeLeft");
      if (el) el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
      if (s === 60) announce("One minute left.");
      if (left <= 0) { clearTimer(); completeChallenge(true); } };
    timerId = setInterval(tick, 1000); tick();
  }
  renderChallengeContext(); renderQuiz();
  const h1 = main().querySelector("h1"); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
}
function renderDots() {
  const d = $("#dots"); if (!d) return;
  d.innerHTML = session.list.map((q, i) => { const l = session.log[i]; const cls = i === session.idx ? "cur" : l ? (session.cfg.immediate ? (l.first ? "ok" : "no") : "ans") : ""; return `<span class="dot ${cls}"></span>`; }).join("");
}
function renderChallengeContext() {
  renderDots();
  const q = curQ(); const box = $("#ctxPanel"); if (!box || !q) return;
  const key = (q.area === "reading" || q.area === "listening") ? q.aid : q.area;
  if (key === session.ctxKey) return;
  session.ctxKey = key; stopSpeech();
  if (q.area === "reading") {
    const a = ACTIVITIES[q.aid];
    box.innerHTML = `<article class="card passage-panel" aria-label="Reading passage"><p class="eyebrow">${levelLabel(a.level)} · ${a.words} words</p><h2>${esc(a.title)}</h2>
      <p class="small muted">Read the passage. You can look back at it for every question.</p><div class="passage-text" id="passageText">${passageHTML(a)}</div></article>`;
  } else if (q.area === "listening") {
    const a = ACTIVITIES[q.aid];
    box.innerHTML = `<article class="card passage-panel listen-panel" aria-label="Listening"><p class="eyebrow">${levelLabel(a.level, "listening")} · ${esc(a.format)}</p><h2>${esc(a.title)}</h2>
      <p class="small muted">Press Play and listen. Replay if you need to.</p><div id="playerBox">${playerHTML(a)}</div></article>`;
    bindPlayer(a, $("#playerBox"));
  } else {
    const A = AREAS[q.area];
    box.innerHTML = `<div class="card"><p class="eyebrow">${icon(A.icon)} ${A.name}</p><p class="small" style="margin:0">${q.area === "vocab" ? "Think about the meaning of the word and how it is used in the sentence." : "Think about the grammar rule. Read every choice carefully before you answer."}</p></div>`;
  }
}
function completeChallenge(timeUp) {
  clearTimer(); stopSpeech();
  const list = session.list; const log = session.log;
  const answered = log.filter(Boolean).length;
  const first = log.filter(l => l && l.first).length;
  const score = session.cfg.immediate ? log.filter(l => l && l.ok && !l.revealed).length : log.filter(l => l && l.ok).length;
  const run = { mode: session.chMode, at: new Date().toISOString(), total: list.length, first, score, answered, timed: session.timed || undefined, timeUp: timeUp || undefined };
  if (session.week) run.week = session.week.key;
  S.ch.runs.push(run); if (S.ch.runs.length > 200) S.ch.runs = S.ch.runs.slice(-200);
  let weeklyNew = false;
  if (session.week && !S.ch.weekly[session.week.key]) { S.ch.weekly[session.week.key] = { at: run.at, first, total: list.length }; weeklyNew = true; }
  const newly = checkBadges(); save(); celebrate(newly);
  /* Analytics: one event per finished challenge; correct = first-try correct answers among the questions answered. */
  track({ t: "challenge_complete", mode: run.mode, correct: first, scored: answered }, "ch:" + run.at + ":" + run.mode);
  session.mode = "results"; session.result = { run, timeUp, weeklyNew };
  renderDots(); renderQuiz();
  const h = $("#quiz h2"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderChallengeResults(box) {
  const { run, timeUp, weeklyNew } = session.result; const list = session.list; const log = session.log;
  const by = {};
  list.forEach((q, i) => { const k = AREAS[q.area].short + ": " + q.skillName; const b = (by[k] = by[k] || { name: k, n: 0, ok: 0, key: q.skillKey }); b.n++; if (log[i] && (session.cfg.immediate ? log[i].first : log[i].ok)) b.ok++; });
  const skills = Object.values(by).map(s => ({ ...s, acc: pct(s.ok, s.n) }));
  const strong = skills.slice().sort((a, b) => b.acc - a.acc || b.n - a.n)[0];
  const weak = skills.slice().sort((a, b) => a.acc - b.acc || b.n - a.n)[0];
  const needs = weak && weak.acc < 100 ? weak : null;
  const recId = needs ? activityWithSkill(needs.key) : recommend() && recommend().id;
  const c = CHALLENGES[run.mode];
  const review = list.map((q, i) => { const l = log[i]; const ok = l && (session.cfg.immediate ? l.first : l.ok);
    const correct = q.kind === "mcq" ? q.options.find(o => o.correct).t : "";
    return `<li class="${ok ? "ok" : "no"}">${icon(ok ? "check" : l ? "x" : "info")}<div><strong>Q${i + 1} · ${esc(AREAS[q.area].short)} · ${esc(q.skillName)}</strong><br><span>${esc(q.q)}</span>
      ${!session.cfg.immediate ? `<br><span class="small">Your answer: <strong>${l ? esc(l.answer) : "Not answered"}</strong>${ok ? "" : ` · Correct answer: <strong>${esc(correct)}</strong>`}</span><br><span class="small muted">${esc(q.exp)}</span>`
        : `<br><span class="small">${ok ? "Correct on the first try" : l && l.revealed ? "Answer shown after three tries" : "Correct after more tries"}</span>`}</div></li>`; }).join("");
  box.innerHTML = `
    <h2>${c.name} complete</h2>
    ${timeUp ? `<div class="notice sample" role="note">${icon("clock")}<p>Time is up. You answered ${run.answered} of ${run.total} questions. Unanswered questions are shown below.</p></div>` : ""}
    ${weeklyNew ? `<div class="notice" role="note" style="margin-top:.6rem">${icon("calendar")}<p><strong>Weekly quest recorded for ${session.week.label}.</strong> You can practice it again this week, but the weekly record is saved only once.</p></div>` : session.week ? `<p class="small muted">You already completed this week’s quest. This round is extra practice.</p>` : ""}
    ${scoreRing(run.first, run.total, session.cfg.immediate ? "FIRST TRY" : "CORRECT")}
    <div class="grid g2" style="gap:.6rem">
      <div class="mini-card"><span class="stat-label">Score</span><b>${run.score} of ${run.total}</b><span class="small muted">${session.cfg.immediate ? "answered correctly (without the answer being shown)" : "correct answers"}</span></div>
      <div class="mini-card"><span class="stat-label">First-attempt accuracy</span><b>${pct(run.first, session.cfg.immediate ? run.total : Math.max(run.answered, 1))}%</b><span class="small muted">${session.cfg.immediate ? "of all questions" : `of the ${run.answered} questions answered`}</span></div>
      <div class="mini-card"><span class="stat-label">Strongest skill</span><b>${strong ? esc(strong.name) : "—"}</b><span class="small muted">${strong ? strong.acc + "% first try" : ""}</span></div>
      <div class="mini-card"><span class="stat-label">Skill needing more practice</span><b>${needs ? esc(needs.name) : "None"}</b><span class="small muted">${needs ? needs.acc + "% first try" : ""}</span></div>
    </div>
    <h3 style="margin-top:1rem">Skills practiced</h3>
    <ul class="skill-list">${skills.map(s => `<li class="${s.acc >= 80 ? "ok" : "no"}">${icon(s.acc >= 80 ? "check" : "refresh")}<span><strong>${esc(s.name)}</strong> — ${s.ok} of ${s.n} (${s.acc}%)</span></li>`).join("")}</ul>
    ${recId ? `<div class="card" style="background:var(--bg);box-shadow:none;margin:1rem 0"><p class="eyebrow">Recommended next activity</p><h3 style="margin:0">${esc(ACTIVITIES[recId].title)}</h3><p class="small muted">${AREAS[ACTIVITIES[recId].area].name}${needs ? ` · Practice ${esc(needs.name.split(": ")[1].toLowerCase())}.` : ""}</p><a class="btn primary" href="${ACTIVITIES[recId].route}">Start ${icon("arrow")}</a></div>` : ""}
    <details class="review"><summary>Review every question</summary><ul class="skill-list">${review}</ul></details>
    <div class="btn-row" style="margin-top:1rem"><button class="btn primary" type="button" id="retryCh">${icon("refresh")} ${run.mode === "weekly" ? "Practice this quest again" : "Try a new round"}</button><a class="btn ghost" href="#challenge">Back to Challenge Arena</a></div>
    <p class="small muted" style="margin-top:.8rem">Challenges are practice. They do not change your mastery scores.</p>`;
  if (!session.cfg.immediate) box.querySelector("details.review").open = true;
  $("#retryCh").addEventListener("click", () => { if (run.mode === "sprint") viewChallengeStart("sprint"); else startChallenge(run.mode, {}); window.scrollTo(0, 0); });
}

/* ===================== RESET ===================== */
function openReset() {
  const d = $("#resetDialog");
  if (d && typeof d.showModal === "function") { d.showModal(); $("#cancelReset").focus(); }
  else if (window.confirm("Reset all progress? This will delete all saved answers, scores, drafts, and badges in this browser.")) doReset();
}
function doReset() {
  S = NVSProgress.clear(); session = null;
  const d = $("#resetDialog"); if (d && d.open) d.close();
  toast(`${icon("refresh")}<span>Progress has been reset.</span>`);
  if (location.hash === "#home" || !location.hash) router(); else location.hash = "#home";
}

/* ===================== GLOSSARY POPUP ===================== */
function closeGloss() { const p = document.getElementById("glossPop"); if (p) { p.remove(); } document.querySelectorAll(".gloss[aria-expanded='true']").forEach(b => b.setAttribute("aria-expanded", "false")); }
function openGloss(btn) {
  const already = btn.getAttribute("aria-expanded") === "true"; closeGloss(); if (already) return;
  const host = btn.closest(".passage-text"); if (!host) return;
  const pop = document.createElement("div"); pop.id = "glossPop"; pop.className = "gloss-pop"; pop.setAttribute("role", "status");
  pop.innerHTML = `<strong>${esc(btn.dataset.word)}</strong>: ${esc(btn.dataset.def)} <button type="button" class="gloss-close" aria-label="Close meaning">×</button>`;
  host.appendChild(pop); btn.setAttribute("aria-expanded", "true");
  const hb = host.getBoundingClientRect(), bb = btn.getBoundingClientRect();
  const left = Math.max(0, Math.min(bb.left - hb.left, hb.width - pop.offsetWidth));
  pop.style.left = left + "px"; pop.style.top = (bb.bottom - hb.top + 6) + "px";
  pop.querySelector(".gloss-close").addEventListener("click", () => { closeGloss(); btn.focus(); });
}

/* ===================== INIT ===================== */
function init() {
  buildNav();
  document.addEventListener("click", e => { if (e.target.closest("[data-reset]")) openReset();
    const g = e.target.closest(".gloss"); if (g) { openGloss(g); return; }
    if (!e.target.closest("#glossPop")) closeGloss(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && document.getElementById("glossPop")) { const b = document.querySelector(".gloss[aria-expanded='true']"); closeGloss(); if (b) b.focus(); } });
  $("#footerReset").addEventListener("click", openReset);
  $("#confirmReset").addEventListener("click", doReset);
  $("#cancelReset").addEventListener("click", () => $("#resetDialog").close());
  window.addEventListener("hashchange", router);
  if (canSpeak) { try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => {}; } catch (e) {} }
  router(); routerReady = true;
}
const API = { ACTIVITIES, ALLQ, PASSAGES, AREAS, LEVELS: C.reading.levels, CATEGORIES: C.reading.categories || [], state: () => S,
  icon, esc, pct, bar, barRow, actState, actStats, statsFor, isDone, levelFor, levelLabel, accText, started, canSpeak,
  howItWorks, readingLevel, checkResult: () => S.sc || null };
if (window.NVSReading) NVSReading.install(API);
window.NVSQ = { ACTIVITIES, ALLQ, BADGES, SKILLS, CHALLENGES, state: () => S, session: () => session, buildChallenge, isoWeek, version: APP_VERSION };
init();
})();
