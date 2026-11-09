/* =====================================================================
   NVS English Quest — CONTENT REGISTRY (Version 3D)
   This file must load BEFORE all other data files (see index.html).
   It creates the shared NVS_CONTENT object and the reading-level settings.
   Teachers normally do not need to edit this file, except to add a new
   reading category to the "categories" list.
   ===================================================================== */
window.NVS_CONTENT = window.NVS_CONTENT || {};

NVS_CONTENT.reading = {
  /* Reading levels are based on reading comfort, not school grade. */
  levels: [
    { n: 1, name: "Foundation Reader", range: "40–70 words", focus: "Finding information: who, what, where, when",
      who: "Choose this level if short, simple sentences feel comfortable and longer texts feel difficult.",
      example: { text: "Ali drinks water after football.", q: "What does Ali drink?", a: "Water.", exp: "The sentence says Ali drinks water. The answer is in the text, so look for the word “drinks”." } },
    { n: 2, name: "Developing Reader", range: "80–120 words", focus: "Main idea, details, sequence, words in context",
      who: "Choose this level if you can read short paragraphs and want to practice finding the main idea.",
      example: { text: "Noor wanted to be healthier. She started walking to school. She also drank more water. After a month, she had more energy.", q: "What is the main idea?", a: "Noor made healthy changes, and they helped her.", exp: "Every sentence is about Noor’s healthy changes and the result. The main idea covers ALL the sentences, not just one detail." } },
    { n: 3, name: "Building Reader", range: "130–200 words", focus: "Context clues, cause and effect, inference, problem and solution",
      who: "Choose this level if you can read several paragraphs and want to think beyond the facts." },
    { n: 4, name: "Advancing Reader", range: "200–300 words", focus: "Inference, author’s purpose, text structure, tone, evaluating arguments",
      who: "Choose this level if you can read longer articles and want to analyze how and why they are written." },
    { n: 5, name: "Independent Reader", range: "300–450 words", focus: "Central idea, evaluating evidence, comparing viewpoints, critical reading",
      who: "Choose this level if you can read long, complex texts and want to judge arguments and evidence." }
  ],
  /* Topic categories used by the Reading Library filter. Add a new one here if needed. */
  categories: ["School Life", "Technology", "Science", "Health", "Environment", "Sports", "Personal Development", "Society", "Critical Thinking"],
  passages: [],
  problems: []
};

/* Each reading-level file calls this function with its list of passages. */
NVS_CONTENT.addReadingPassages = function (list) {
  var R = NVS_CONTENT.reading;
  (list || []).forEach(function (p) {
    var why = [];
    if (!p || !p.id) why.push("missing id");
    else if (R.passages.some(function (x) { return x.id === p.id; })) why.push("duplicate id " + p.id);
    if (p && !(p.level >= 1 && p.level <= 5)) why.push("level must be 1–5");
    if (p && (!Array.isArray(p.text) || !p.text.length)) why.push("missing text");
    if (p && (!Array.isArray(p.questions) || !p.questions.length)) why.push("missing questions");
    if (p && p.before && p.before.words && Array.isArray(p.text)) p.before.words.forEach(function (w) {
      var m = (w.match || w.word).toLowerCase();
      if (p.text.join(" ").toLowerCase().indexOf(m) < 0) why.push("Before You Read word “" + (w.match || w.word) + "” is not in the text");
    });
    if (p && Array.isArray(p.questions)) p.questions.forEach(function (q, i) {
      if (!q.opts || q.opts.length !== 4) why.push("question " + (i + 1) + " needs exactly 4 options");
      if (q.ev && Array.isArray(p.text) && p.text.join(" ").indexOf(q.ev) < 0) why.push("question " + (i + 1) + " evidence is not in the text");
    });
    if (why.length) { R.problems.push((p && p.id ? p.id : "unknown passage") + ": " + why.join("; ")); if (window.console) console.warn("[NVS content] Skipped passage", p && p.id, why); return; }
    R.passages.push(p);
  });
};

/* Version 3D: checks Vocabulary Lab and Grammar Gym sets. A set with a mistake is
   skipped (and explained in the browser console) so the other sets still work. */
NVS_CONTENT.checkSets = function (list, label) {
  var ok = [], seen = {};
  (list || []).forEach(function (s, n) {
    var why = [];
    if (!s || !s.id) why.push("missing id");
    else if (seen[s.id]) why.push("duplicate id " + s.id);
    if (s && !(s.level >= 1 && s.level <= 4)) why.push("level must be 1–4");
    if (s && !s.title) why.push("missing title");
    if (s && !s.learn) why.push("missing learn section");
    if (s && (!Array.isArray(s.questions) || !s.questions.length)) why.push("missing questions");
    if (s && Array.isArray(s.questions)) s.questions.forEach(function (q, i) {
      if (!q || !q.q) why.push("question " + (i + 1) + " has no question text");
      if (!q || !q.opts || q.opts.length !== 4) why.push("question " + (i + 1) + " needs exactly 4 options");
      else if (q.opts[0][1] !== null) why.push("question " + (i + 1) + ": the first option must be the correct one (followed by null)");
    });
    if (why.length) { NVS_CONTENT.reading.problems.push(label + " " + (s && s.id ? s.id : "set " + (n + 1)) + ": " + why.join("; ")); if (window.console) console.warn("[NVS content] Skipped " + label + " set", s && s.id, why); return; }
    seen[s.id] = 1; ok.push(s);
  });
  return ok;
};
