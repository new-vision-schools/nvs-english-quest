/* =====================================================================
   NVS English Quest — READING LIBRARY (Version 3D)
   Searchable, filterable library of all reading passages, plus reading
   insights for My English Journey. Uses only real saved answers.
   The quiz engine itself lives in js/app.js; passages live in data/.
   ===================================================================== */
(function () {
  "use strict";
  let A = null;                         /* API from app.js, set by install() */
  const FKEY = "nvs-reading-filters";   /* filters are kept for this browser tab only */
  const DEFAULTS = { q: "", level: "all", cat: "all", skill: "all", status: "all" };
  let F = Object.assign({}, DEFAULTS);

  /* Filter groups are built from the ACTUAL skill labels used in the questions.
     Any skill that does not belong to a group below gets its own filter option. */
  const GROUPS = [
    ["Main Idea", ["main idea", "central idea"]],
    ["Supporting Details", ["supporting details", "finding details"]],
    ["Inference", ["inference", "simple inference", "character motivation"]],
    ["Vocabulary in Context", ["vocabulary in context", "context clues"]],
    ["Cause and Effect", ["cause and effect"]],
    ["Sequencing", ["sequencing"]],
    ["Author's Purpose", ["author's purpose", "author's perspective"]],
    ["Evaluating Evidence", ["evaluating evidence", "supporting evidence", "text evidence"]],
    ["Problem and Solution", ["problem and solution"]],
    ["Text Structure", ["text structure"]],
    ["Tone", ["tone"]],
    ["Comparing Ideas and Viewpoints", ["comparison and contrast", "comparing ideas", "comparing viewpoints"]],
    ["Evaluating Arguments", ["evaluating arguments"]],
    ["Drawing Conclusions", ["drawing conclusions"]],
    ["Critical Reading", ["critical reading", "critical comprehension"]]
  ];
  const norm = s => String(s).toLowerCase().replace(/[‘’]/g, "'").trim();
  function groupOf(skillName) {
    const k = norm(skillName);
    const g = GROUPS.find(x => x[1].includes(k));
    return g ? g[0] : skillName.replace(/(^|\s)\S/g, c => c.toUpperCase());
  }
  const groupsOf = act => [...new Set(act.questions.map(q => groupOf(q.skillName)))];

  function install(api) {
    A = api;
    try { const saved = JSON.parse(sessionStorage.getItem(FKEY) || "null"); if (saved) F = Object.assign({}, DEFAULTS, saved); } catch (e) {}
  }
  function saveFilters() { try { sessionStorage.setItem(FKEY, JSON.stringify(F)); } catch (e) {} }

  const readingActs = () => A.PASSAGES.map(p => A.ACTIVITIES[p.id]);
  function statusOf(act) { const s = A.actState(act.id); return s.done ? "completed" : s.inProgress ? "progress" : "new"; }
  function presentGroups() {
    const present = new Set(); readingActs().forEach(a => groupsOf(a).forEach(g => present.add(g)));
    const ordered = GROUPS.map(g => g[0]).filter(g => present.has(g));
    return ordered.concat([...present].filter(g => !ordered.includes(g)).sort());
  }
  function presentCategories() {
    const present = new Set(readingActs().map(a => a.category).filter(Boolean));
    const ordered = A.CATEGORIES.filter(c => present.has(c));
    return ordered.concat([...present].filter(c => !ordered.includes(c)).sort());
  }
  function matches(act) {
    if (F.level !== "all" && String(act.level) !== F.level) return false;
    if (F.cat !== "all" && act.category !== F.cat) return false;
    if (F.skill !== "all" && !groupsOf(act).includes(F.skill)) return false;
    if (F.status !== "all" && statusOf(act) !== F.status) return false;
    if (F.q.trim()) {
      const hay = norm([act.title, act.topic, act.category].join(" "));
      if (!norm(F.q).split(/\s+/).every(w => hay.includes(w))) return false;
    }
    return true;
  }

  /* ---------- Passage card ---------- */
  function card(act) {
    const st = A.actState(act.id); const { icon, esc, pct, bar } = A;
    const status = statusOf(act);
    const groups = groupsOf(act);
    const btn = status === "completed" ? { t: "Practice Again", href: `${act.route}/practice`, cls: "ghost" }
      : status === "progress" ? { t: "Continue Reading", href: act.route, cls: "gold" } : { t: "Start Reading", href: act.route, cls: "primary" };
    const statusLine = status === "completed" ? `<span class="status done">${icon("check")} Completed</span><span class="tag green">First-try accuracy: ${st.done.firstAcc}%</span>`
      : status === "progress" ? `<span class="status prog">${icon("refresh")} In progress · ${st.st.solved} of ${st.st.total} questions</span>` : `<span class="status new">Not started</span>`;
    return `<article class="card lib-card" data-id="${act.id}">
      <div class="p-meta"><span class="tag navy">Level ${act.level}</span><span class="tag">${esc(act.category || act.topic)}</span></div>
      <h3><a href="${btn.href}" class="lib-title">${esc(act.title)}</a></h3>
      <p class="small muted lib-facts">${act.words} words · ${act.questions.length} questions · ${esc(act.topic)}</p>
      <div class="skill-chips" aria-label="Reading skills">${groups.slice(0, 4).map(g => `<span class="chip-s">${esc(g)}</span>`).join("")}${groups.length > 4 ? `<span class="chip-s more">+${groups.length - 4} more</span>` : ""}</div>
      <div class="lib-status">${statusLine}</div>
      ${status === "progress" ? bar(pct(st.st.solved, st.st.total), "gold", "Questions completed") : ""}
      <a class="btn ${btn.cls} lib-btn" href="${btn.href}" aria-label="${btn.t}: ${esc(act.title)}">${btn.t} ${icon("arrow")}</a>
    </article>`;
  }

  /* ---------- Library view ---------- */
  function viewLibrary(main) {
    const { icon, esc, pct, barRow, levelFor, levelLabel, statsFor } = A;
    const lvl = (A.readingLevel ? A.readingLevel() : A.levelFor("reading")); const acts = readingActs();
    const done = acts.filter(a => A.isDone(a.id)).length;
    const s = statsFor(A.ALLQ.filter(q => q.area === "reading"));
    const opt = (v, label, cur) => `<option value="${esc(v)}" ${cur === v ? "selected" : ""}>${esc(label)}</option>`;
    main.innerHTML = `
      <div class="page-head"><p class="eyebrow">${icon("book")} Main feature</p><h1>Reading Academy</h1>
        <p>Browse ${acts.length} reading passages across five levels. Choose a passage, read it, and answer the questions. You can look back at the text at any time.</p></div>
      ${A.howItWorks ? A.howItWorks("reading") : ""}
      <div class="grid g2">
        <div class="card"><p class="eyebrow">Your reading progress</p>
          <h2 style="margin-bottom:.2rem">${levelLabel(lvl)}</h2>
          <p class="muted small">${(() => { const sc = A.checkResult ? A.checkResult() : null;
            if (sc && !s.att) return `Your Starting-Point Check suggested Level ${sc.suggested}. This is a starting point, not a final level. If the texts feel too hard, choose a lower level.`;
            if (sc) return `Your check suggested Level ${sc.suggested}. Finishing a passage with 80% or more on the first try can raise your recommended level. You can read at any level.`;
            return s.att ? "This is your recommended level, based on your first-try scores. You can read at any level." : "Not sure where to start? Take the Starting-Point Check, or start at Level 1. Finish a passage with 80% or more on the first try to raise your recommended level."; })()}</p>
          ${A.checkResult && !A.checkResult() ? `<p style="margin:.4rem 0"><a class="btn ghost" href="#check">${icon("target")} Take the Starting-Point Check</a></p>` : ""}
          ${barRow("Passages completed", pct(done, acts.length), "", `${done} of ${acts.length}`)}
          <p class="small muted" style="margin:.3rem 0 0">First-try accuracy: <strong>${A.accText(s.accuracy)}</strong> · Completion shows what you finished; accuracy shows how often your first answer was right.</p>
          <div class="btn-row" style="margin-top:.8rem"><button class="btn ghost" type="button" id="showMyLevel">${icon("target")} Show Level ${lvl} passages</button></div>
        </div>
        <div class="card level-guide"><p class="eyebrow">Choose by reading comfort, not by grade</p>
          <p class="small">Every reader is different. A student in any grade can start at any level. Pick the level that feels comfortable, then move up when you are ready.</p>
          <details><summary>Which level is right for me?</summary>
            <ul class="plain-list">${A.LEVELS.map(L => `<li><span><strong>Level ${L.n} — ${esc(L.name)}</strong><br><span class="small muted">${esc(L.who || L.focus)} (${esc(L.range)})</span></span></li>`).join("")}</ul>
            <p class="small muted">These are NVS practice levels, not official CEFR certificates.</p></details>
        </div>
      </div>
      <section class="card lib-filters section" aria-label="Search and filter passages">
        <div class="filter-row">
          <label class="search-box"><span class="sr-only">Search passages</span>${icon("search")}<input type="search" id="libSearch" placeholder="Search passages by title or topic..." value="${esc(F.q)}" autocomplete="off"></label>
        </div>
        <div class="level-pills" role="group" aria-label="Filter by level">
          ${["all", "1", "2", "3", "4", "5"].map(v => `<button type="button" class="pill" data-level="${v}" aria-pressed="${F.level === v}">${v === "all" ? "All Levels" : "Level " + v}</button>`).join("")}
        </div>
        <div class="filter-grid">
          <label>Topic<select id="libCat">${opt("all", "All Topics", F.cat)}${presentCategories().map(c => opt(c, c, F.cat)).join("")}</select></label>
          <label>Reading skill<select id="libSkill">${opt("all", "All Skills", F.skill)}${presentGroups().map(g => opt(g, g, F.skill)).join("")}</select></label>
          <label>Progress<select id="libStatus">${opt("all", "All Passages", F.status)}${opt("new", "Not Started", F.status)}${opt("progress", "In Progress", F.status)}${opt("completed", "Completed", F.status)}</select></label>
        </div>
        <div class="results-bar"><p id="libCount" role="status" aria-live="polite"></p><button type="button" class="btn ghost" id="libReset">${icon("refresh")} Reset Filters</button></div>
      </section>
      <div id="libResults" class="grid g3 section"></div>`;
    const render = () => {
      const list = acts.filter(matches);
      main.querySelector("#libCount").textContent = `Showing ${list.length} of ${acts.length} passages`;
      main.querySelector("#libResults").innerHTML = list.length ? list.map(card).join("")
        : `<div class="card empty-state"><h2>No passages match your search</h2><p>Try a different word, choose “All Levels”, or reset the filters to see every passage.</p><button type="button" class="btn primary" id="emptyReset">${icon("refresh")} Reset Filters</button></div>`;
      const er = main.querySelector("#emptyReset"); if (er) er.addEventListener("click", resetAll);
      main.querySelectorAll(".pill").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.level === F.level)));
      saveFilters();
    };
    const resetAll = () => { F = Object.assign({}, DEFAULTS); main.querySelector("#libSearch").value = ""; ["libCat", "libSkill", "libStatus"].forEach(id => { main.querySelector("#" + id).value = "all"; }); render(); main.querySelector("#libSearch").focus(); };
    main.querySelector("#libSearch").addEventListener("input", e => { F.q = e.target.value; render(); });
    main.querySelectorAll(".pill").forEach(b => b.addEventListener("click", () => { F.level = b.dataset.level; render(); }));
    main.querySelector("#libCat").addEventListener("change", e => { F.cat = e.target.value; render(); });
    main.querySelector("#libSkill").addEventListener("change", e => { F.skill = e.target.value; render(); });
    main.querySelector("#libStatus").addEventListener("change", e => { F.status = e.target.value; render(); });
    main.querySelector("#libReset").addEventListener("click", resetAll);
    main.querySelector("#showMyLevel").addEventListener("click", () => { F.level = String(lvl); render(); main.querySelector("#libResults").scrollIntoView({ behavior: "smooth", block: "start" }); });
    render();
  }

  /* ---------- Reading insights (real data only) ---------- */
  function groupStats() {
    const S = A.state(); const out = {};
    A.ALLQ.filter(q => q.area === "reading").forEach(q => {
      const g = groupOf(q.skillName); const o = (out[g] = out[g] || { name: g, att: 0, first: 0, timed: [] });
      const r = S.q[q.id]; if (!r || !r.a) return;
      o.att++; if (r.f) o.first++; if (r.t) o.timed.push({ t: r.t, f: !!r.f });
    });
    Object.values(out).forEach(o => { o.acc = o.att ? Math.round((o.first / o.att) * 100) : null; });
    return out;
  }
  function strengthsAndNeeds() {
    const gs = Object.values(groupStats());
    return { strong: gs.filter(g => g.att >= 3 && g.acc >= 80).sort((a, b) => b.acc - a.acc || b.att - a.att).slice(0, 3),
             weak: gs.filter(g => g.att >= 2 && g.acc < 70).sort((a, b) => a.acc - b.acc).slice(0, 3) };
  }
  function passageForGroup(group, lvl) {
    const pool = readingActs().filter(a => !A.isDone(a.id) && groupsOf(a).includes(group));
    pool.sort((a, b) => Math.abs(a.level - lvl) - Math.abs(b.level - lvl) || a.level - b.level);
    return pool[0] || null;
  }
  function recommendations() {
    const recs = []; const lvl = (A.readingLevel ? A.readingLevel() : A.levelFor("reading"));
    const { weak } = strengthsAndNeeds();
    weak.slice(0, 2).forEach(g => { if (g.att < 3) return;
      if (g.name === "Supporting Details") { const p1 = readingActs().find(a => a.level === 1 && !A.isDone(a.id)) || passageForGroup(g.name, 1);
        recs.push({ icon: "target", text: `Your supporting details accuracy is ${g.acc}%. Try a Level 1 reading passage to strengthen your understanding of details.`, id: p1 ? p1.id : null }); return; }
      const p = passageForGroup(g.name, lvl);
      recs.push({ icon: "target", text: `Your ${g.name.toLowerCase()} accuracy is ${g.acc}%. Try another passage with ${g.name.toLowerCase()} questions.`, id: p ? p.id : null }); });
    const atLvl = readingActs().filter(a => a.level === lvl); const d = atLvl.filter(a => A.isDone(a.id)).length;
    if (d > 0 && d < atLvl.length) { const nx = atLvl.find(a => !A.isDone(a.id));
      recs.push({ icon: "book", text: `You have completed ${d} of ${atLvl.length} Level ${lvl} passages. Continue practicing Level ${lvl} reading.`, id: nx.id }); }
    const gs = Object.values(groupStats()).filter(g => g.timed.length >= 4).map(g => {
      const t = g.timed.slice().sort((a, b) => a.t - b.t); const h = Math.floor(t.length / 2);
      const early = Math.round(t.slice(0, h).filter(x => x.f).length / h * 100), late = Math.round(t.slice(h).filter(x => x.f).length / (t.length - h) * 100);
      return { g, early, late };
    }).filter(x => x.late - x.early >= 20 && x.late >= 70).sort((a, b) => (b.late - b.early) - (a.late - a.early));
    if (gs.length) { const x = gs[0]; const target = Math.min(lvl + 1, 5);
      const p = readingActs().find(a => a.level === target && !A.isDone(a.id) && groupsOf(a).includes(x.g.name)) || readingActs().find(a => a.level === target && !A.isDone(a.id));
      recs.push({ icon: "chart", text: `Your ${x.g.name.toLowerCase()} accuracy is improving (from ${x.early}% to ${x.late}%). Try a more challenging passage.`, id: p ? p.id : null }); }
    return recs.filter(r => r.id).slice(0, 3);
  }
  function journeyCard() {
    const { icon, pct, barRow, accText, statsFor, levelFor } = A;
    const acts = readingActs(); const done = acts.filter(a => A.isDone(a.id)).length;
    const s = statsFor(A.ALLQ.filter(q => q.area === "reading"));
    return `<div class="card area-prog"><h3>${icon("book")} Reading comprehension</h3>
      ${barRow("Completion", pct(done, acts.length), "", `${done} of ${acts.length} passages`)}
      ${s.att ? barRow("Mastery", s.mastery, "green") : `<p class="small muted">Mastery: not started yet.</p>`}
      <div class="mini-stats"><span>First-try accuracy: <b>${accText(s.accuracy)}</b></span><span>Questions tried: <b>${s.att} of ${s.total}</b></span><span>Level: <b>${(A.readingLevel ? A.readingLevel() : A.levelFor("reading"))}</b></span></div></div>`;
  }
  function journeySection() {
    const { icon, esc, pct, barRow, accText, statsFor, levelFor, levelLabel } = A;
    const acts = readingActs(); const done = acts.filter(a => A.isDone(a.id)).length; const lvl = (A.readingLevel ? A.readingLevel() : A.levelFor("reading"));
    const s = statsFor(A.ALLQ.filter(q => q.area === "reading"));
    const { strong, weak } = strengthsAndNeeds();
    const list = (arr, empty) => arr.length ? `<ul class="plain-list">${arr.map(g => `<li><span>${esc(g.name)}</span><b>${g.acc}% first try · ${g.att} questions</b></li>`).join("")}</ul>` : `<p class="small muted">${empty}</p>`;
    return `<section class="section card" aria-labelledby="rdH"><h2 id="rdH">${icon("book")} Reading Academy in detail</h2>
      <div class="grid g4" style="margin:.6rem 0 1rem">
        <div class="mini-card"><span class="stat-label">Passages completed</span><b>${done}</b><span class="small muted">of ${acts.length} available</span></div>
        <div class="mini-card"><span class="stat-label">Completion</span><b>${pct(done, acts.length)}%</b><span class="small muted">passages finished</span></div>
        <div class="mini-card"><span class="stat-label">First-try accuracy</span><b>${accText(s.accuracy)}</b><span class="small muted">${s.att ? `${s.first} of ${s.att} questions` : "no answers yet"}</span></div>
        <div class="mini-card"><span class="stat-label">Current reading level</span><b>Level ${lvl}</b><span class="small muted">${esc(levelLabel(lvl).split("— ")[1])}</span></div>
      </div>
      <p class="small muted">Completing a passage is not the same as mastering it. Mastery counts only questions answered correctly on the first try.</p>
      <div class="grid g2">
        <div><h3 style="font-size:1rem">Reading skill strengths</h3>${list(strong, "Not enough data yet. Answer at least 3 questions in a skill with 80% or more correct on the first try.")}</div>
        <div><h3 style="font-size:1rem">Skills needing improvement</h3>${list(weak, s.att ? "No reading skill is below 70% right now." : "Not enough data yet.")}</div>
      </div>
      <h3 style="font-size:1rem;margin-top:1rem">Passages completed by level</h3>
      ${A.LEVELS.map(L => { const at = acts.filter(a => a.level === L.n); const d = at.filter(a => A.isDone(a.id)).length; return barRow(`Level ${L.n} — ${esc(L.name)}`, pct(d, at.length), L.n === lvl ? "gold" : "", `${d} of ${at.length}`); }).join("")}
    </section>`;
  }

    /* Version 3D: the Starting-Point Check results page can open the library at the suggested level. */
  function setLevel(n) { F = Object.assign({}, DEFAULTS, { level: String(n) }); saveFilters(); }
  window.NVSReading = { install, viewLibrary, recommendations, journeyCard, journeySection, groupOf, groupsOf, setLevel };
})();
