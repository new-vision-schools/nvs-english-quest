/* =====================================================================
   NVS English Quest — Administrator analytics dashboard (Version 3E)
   ---------------------------------------------------------------------
   • Sign-in: Supabase Authentication (email + password). Public sign-up is
     switched off; administrator accounts are created by hand.
   • Data: ONLY aggregates, from public.admin_report(), which refuses anyone
     who is not listed in analytics.admin_users (checked on the server).
   • Hiding this page is NOT the security. The database is.
   • No figures are ever invented: empty data shows an empty state.
   ===================================================================== */
(function () {
  "use strict";
  const CFG = window.NVS_ADMIN_CONFIG || {};
  const $ = s => document.querySelector(s);
  const app = $("#app");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const say = t => { const s = $("#status"); if (s) s.textContent = t; };
  const fmt = n => Number(n || 0).toLocaleString("en-US");
  const AREA_NAMES = { reading: "Reading Academy", vocab: "Vocabulary Lab", grammar: "Grammar Gym", listening: "Listening Corner", writing: "Writing Workshop", challenge: "Challenge Arena" };
  const LEARN = ["reading", "vocab", "grammar", "listening", "writing"];
  const PRACTICE_LEVELS = { 1: "Foundation", 2: "Developing", 3: "Building", 4: "Advancing" };
  const MODE_NAMES = { quick: "Quick Quest", sprint: "Skill Sprint", detective: "Reading Detective", weekly: "Weekly English Quest" };
  const levelName = (area, l) => (area === "vocab" || area === "grammar") ? `Set level ${l} — ${PRACTICE_LEVELS[l] || ""}` : `Level ${l}`;
  const pl = (n, one, many) => `${fmt(n)} ${Number(n) === 1 ? one : many}`;
  const accText = (c, s) => s > 0 ? `${Math.round((c / s) * 100)}%` : "—";

  /* ---------- Riyadh dates ---------- */
  function riyadhToday() {
    const p = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Riyadh", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    return p; /* YYYY-MM-DD */
  }
  function addDays(iso, n) { const d = new Date(iso + "T00:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function daysBetween(a, b) { return Math.round((new Date(b + "T00:00:00Z") - new Date(a + "T00:00:00Z")) / 86400000); }
  const isISO = s => /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + "T00:00:00Z"));

  /* ---------- Setup check ---------- */
  const configured = typeof CFG.supabaseUrl === "string" && /^https:\/\/[a-z0-9.-]+$/i.test(CFG.supabaseUrl.replace(/\/$/, "")) &&
    typeof CFG.supabasePublishableKey === "string" && CFG.supabasePublishableKey.length > 20 && !/^sb_secret_/.test(CFG.supabasePublishableKey);
  if (CFG.supabasePublishableKey && /^sb_secret_/.test(CFG.supabasePublishableKey)) {
    app.innerHTML = `<div class="card login-card"><h1>Security warning</h1><p class="err">A <strong>secret</strong> key was pasted into admin-config.js. Remove it immediately, then rotate (replace) that key in Supabase. Only the publishable key belongs in this file.</p></div>`;
    return;
  }
  if (!configured || !window.supabase || !window.supabase.createClient) {
    app.innerHTML = `<div class="card login-card"><p class="eyebrow">Analytics dashboard</p><h1>Not set up yet</h1>
      <p>The analytics dashboard has not been connected to Supabase. Follow <strong>DEPLOYMENT_GUIDE.md</strong>, step 11: enter the Project URL and the publishable key in <code>admin/admin-config.js</code>.</p>
      <p class="caveat">No analytics data available yet.</p></div>`;
    return;
  }

  /* Session is kept only for this browser tab (sessionStorage), so a shared school computer does not stay signed in. */
  const sb = window.supabase.createClient(CFG.supabaseUrl.replace(/\/$/, ""), CFG.supabasePublishableKey, {
    auth: { persistSession: true, storage: window.sessionStorage, autoRefreshToken: true, detectSessionInUrl: false }
  });

  let range = { preset: 30, from: addDays(riyadhToday(), -29), to: riyadhToday() };
  let lastReport = null;

  /* ---------- Sign-in ---------- */
  function viewLogin(msg) {
    $("#signOut").hidden = true;
    app.innerHTML = `<div class="card login-card">
      <p class="eyebrow">Administrators only</p><h1>Sign in</h1>
      <p class="small muted">This page is for the English Coordinator and approved administrators. Students never need to sign in.</p>
      <form id="loginForm" novalidate>
        <div class="field"><label for="email">Email</label><input id="email" type="email" autocomplete="username" required></div>
        <div class="field"><label for="password">Password</label><input id="password" type="password" autocomplete="current-password" required></div>
        <p id="loginMsg" class="err" role="alert">${msg ? esc(msg) : ""}</p>
        <button class="btn primary" type="submit" id="loginBtn">Sign in</button>
      </form></div>`;
    $("#loginForm").addEventListener("submit", async e => {
      e.preventDefault();
      const email = $("#email").value.trim(), password = $("#password").value;
      if (!email || !password) { $("#loginMsg").textContent = "Enter your email and password."; return; }
      $("#loginBtn").disabled = true; $("#loginMsg").textContent = ""; say("Signing in…");
      try {
        const { error } = await sb.auth.signInWithPassword({ email, password });
        if (error) { $("#loginBtn").disabled = false; $("#loginMsg").textContent = "Sign-in failed. Check the email and password."; say("Sign-in failed."); return; }
        await afterSignIn();
      } catch (err) { $("#loginBtn").disabled = false; $("#loginMsg").textContent = "Could not reach the analytics service. Check the internet connection and try again."; }
    });
    $("#email").focus();
  }

  async function afterSignIn() {
    $("#signOut").hidden = false;
    let isAdmin = false;
    try { const { data, error } = await sb.rpc("admin_whoami"); isAdmin = !error && data === true; } catch (e) { isAdmin = false; }
    if (!isAdmin) {
      app.innerHTML = `<div class="card login-card"><h1>Access denied</h1><p>This account is signed in, but it is not on the list of analytics administrators. Ask the person who set up the dashboard to add you (DEPLOYMENT_GUIDE.md, step 10).</p></div>`;
      say("Access denied."); return;
    }
    await loadReport();
  }

  /* ---------- Report ---------- */
  async function loadReport() {
    app.innerHTML = `${filtersHTML()}<p class="muted" id="loading">Loading statistics…</p>`;
    bindFilters();
    say("Loading statistics…");
    try {
      const { data, error } = await sb.rpc("admin_report", { p_from: range.from, p_to: range.to });
      if (error) {
        const denied = /not authorized/i.test(error.message || "") || error.code === "42501";
        app.innerHTML = denied ? `<div class="card login-card"><h1>Access denied</h1><p>Your account is not an analytics administrator.</p></div>`
          : `${filtersHTML()}<div class="notice" role="alert"><p>The statistics could not be loaded (${esc(error.message || "error")}). Try again later.</p></div>`;
        if (!denied) bindFilters(); return;
      }
      lastReport = data; render(data);
    } catch (e) {
      app.innerHTML = `${filtersHTML()}<div class="notice" role="alert"><p>Could not reach the analytics service. Check the internet connection and try again.</p></div>`; bindFilters();
    }
  }

  function filtersHTML() {
    const p = n => `<button class="pill" type="button" data-preset="${n}" aria-pressed="${range.preset === n}">Last ${n} days</button>`;
    return `<div class="page-head"><p class="eyebrow">Analytics dashboard</p><h1>Learning Activity Overview</h1>
      <p>Anonymous, school-wide totals. ${range.from} to ${range.to} (Riyadh time).</p></div>
      <form class="filters card" id="filters" aria-label="Date range" novalidate>
        ${p(7)}${p(30)}${p(90)}
        <div class="field"><label for="fromDate">From</label><input type="date" id="fromDate" value="${range.from}"></div>
        <div class="field"><label for="toDate">To</label><input type="date" id="toDate" value="${range.to}"></div>
        <button class="btn ghost" type="submit" id="applyRange">Apply custom range</button>
        <button class="btn ghost" type="button" id="csvBtn" ${lastReport ? "" : "disabled"}>Download CSV (aggregates only)</button>
        <p id="rangeMsg" class="err" role="alert" style="flex-basis:100%;margin:0"></p>
      </form>`;
  }
  function bindFilters() {
    document.querySelectorAll("[data-preset]").forEach(b => b.addEventListener("click", () => {
      const n = Number(b.dataset.preset); range = { preset: n, from: addDays(riyadhToday(), -(n - 1)), to: riyadhToday() }; loadReport();
    }));
    $("#filters").addEventListener("submit", e => {
      e.preventDefault();
      const f = $("#fromDate").value, t = $("#toDate").value;
      if (!isISO(f) || !isISO(t)) { $("#rangeMsg").textContent = "Choose both dates."; return; }
      if (t < f) { $("#rangeMsg").textContent = "The end date must be on or after the start date."; return; }
      if (daysBetween(f, t) > 400) { $("#rangeMsg").textContent = "Choose a range of 400 days or less."; return; }
      range = { preset: null, from: f, to: t }; loadReport();
    });
    const csv = $("#csvBtn"); if (csv) csv.addEventListener("click", downloadCSV);
  }

  /* ---------- Charts (single series; hover/focus tooltip; table view) ---------- */
  function barChart(id, title, sub, points, labelFn) {
    const W = 720, H = 220, L = 34, B = 26, T = 8, plotW = W - L - 6, plotH = H - B - T;
    const max = Math.max(1, ...points.map(p => p.v));
    const step = Math.ceil(max / 4) || 1; const top = step * 4;
    const n = points.length, band = plotW / Math.max(1, n), bw = Math.min(24, Math.max(2, band - 2));
    const every = Math.ceil(n / 10);
    let g = "";
    for (let i = 0; i <= 4; i++) { const y = T + plotH - (plotH * i * step) / top; g += `<line class="grid-line" x1="${L}" x2="${W - 6}" y1="${y}" y2="${y}"/><text class="axis-text" x="${L - 6}" y="${y + 4}" text-anchor="end">${fmt(i * step)}</text>`; }
    const bars = points.map((p, i) => {
      const h = (plotH * p.v) / top, x = L + i * band + (band - bw) / 2, y = T + plotH - h, r = Math.min(4, bw / 2, h);
      const path = h <= 0 ? "" : `M${x},${T + plotH} V${y + r} Q${x},${y} ${x + r},${y} H${x + bw - r} Q${x + bw},${y} ${x + bw},${y + r} V${T + plotH} Z`;
      const lab = labelFn(p);
      return `<rect class="bar-hit" x="${L + i * band}" y="${T}" width="${band}" height="${plotH}" tabindex="0" role="img" aria-label="${esc(lab + ": " + fmt(p.v))}" data-tip="${esc(lab + ": " + fmt(p.v))}"></rect>` +
        (path ? `<path class="bar" d="${path}"/>` : "") +
        (i % every === 0 ? `<text class="axis-text" x="${L + i * band + band / 2}" y="${H - 8}" text-anchor="middle">${esc(p.short)}</text>` : "");
    }).join("");
    return `<div class="card chart-card"><h3 id="${id}-t">${esc(title)}</h3><p class="chart-sub">${esc(sub)}</p>
      <div class="chart" id="${id}"><svg viewBox="0 0 ${W} ${H}" role="group" aria-labelledby="${id}-t">${g}${bars}</svg><div class="tip" hidden></div></div>
      <details class="table-view"><summary>Show as a table</summary><div class="table-wrap"><table class="skills-table"><caption class="sr-only">${esc(title)}</caption>
        <thead><tr><th scope="col">Period</th><th scope="col" class="num">Count</th></tr></thead>
        <tbody>${points.map(p => `<tr><td>${esc(labelFn(p))}</td><td class="num">${fmt(p.v)}</td></tr>`).join("")}</tbody></table></div></details></div>`;
  }
  function bindTips() {
    document.querySelectorAll(".chart").forEach(ch => {
      const tip = ch.querySelector(".tip");
      const show = (el) => { const r = el.getBoundingClientRect(), c = ch.getBoundingClientRect(); tip.textContent = el.dataset.tip; tip.hidden = false; tip.style.left = (r.left - c.left + r.width / 2) + "px"; tip.style.top = "24px"; };
      ch.querySelectorAll(".bar-hit").forEach(el => { el.addEventListener("mouseenter", () => show(el)); el.addEventListener("focus", () => show(el)); el.addEventListener("mouseleave", () => { tip.hidden = true; }); el.addEventListener("blur", () => { tip.hidden = true; }); });
    });
  }
  function hbars(rows) {
    const max = Math.max(1, ...rows.map(r => r.v));
    return rows.map(r => `<div class="hbar"><span class="lab">${esc(r.label)}</span><span class="track" aria-hidden="true"><span class="fill" style="width:${r.v ? Math.max(1, (r.v / max) * 100) : 0}%"></span></span><span class="val">${fmt(r.v)}</span></div>`).join("");
  }

  function render(d) {
    const T = d.totals, A = d.completions_by_area, acc = d.accuracy;
    const head = filtersHTML();
    const traffic = `<section class="admin-section" aria-labelledby="trafH"><h2 id="trafH">Website traffic</h2>
      <div class="card"><p>Website visits, page views, countries, and device types are shown in <strong>Cloudflare Web Analytics</strong>. They are not copied into this dashboard, because that would require storing a Cloudflare access token on a server. Cloudflare counts <strong>visits</strong> and <strong>page views</strong>. <strong>Estimated unique visitors are not available:</strong> Cloudflare Web Analytics does not report them, and this platform deliberately uses no identifier that could count individual people.</p>
      <p><a class="btn ghost" href="${esc(CFG.cloudflareDashboardUrl || "https://dash.cloudflare.com/")}" target="_blank" rel="noopener noreferrer">Open Cloudflare Web Analytics (official console)</a></p></div></section>
      <details class="card admin-section glossary"><summary>Terms used on this dashboard</summary>
        <dl class="gloss-list">
          <div><dt>Website visits</dt><dd>Counted by Cloudflare (shown in its console): a page load that arrived from another site or a direct link. One person can make many visits.</dd></div>
          <div><dt>Estimated unique visitors</dt><dd>Not available. No identifier is collected, so the number of different people cannot be estimated.</dd></div>
          <div><dt>Learning-area openings</dt><dd>Each time a student moved into a learning area (for example from Home into the Reading Academy). Moving between pages inside an area is not counted again.</dd></div>
          <div><dt>Activity completions</dt><dd>Finished activities: the first completion in a browser, plus later practice rounds. <strong>A completion is not a student</strong>; one student can complete many activities.</dd></div>
          <div><dt>Scored attempts</dt><dd>Objectively marked first-try answers from first completions. Practice rounds and self-assessed guided writing are not scored.</dd></div>
          <div><dt>Aggregate accuracy</dt><dd>First-try correct answers ÷ scored attempts, added up across everyone in the date range. It describes the group, not any individual, and cannot show improvement over time.</dd></div>
        </dl></details>`;
    if (!d.has_data) {
      app.innerHTML = head + `<div class="card empty-state" role="status"><p><strong>No analytics data available yet.</strong></p><p class="caveat">No anonymous events were recorded between ${esc(d.range.from)} and ${esc(d.range.to)}. Analytics may still be switched off on the student website (analytics-config.js), or no one has used the website in this period.</p></div>` + traffic;
      bindFilters(); say("No analytics data available yet."); return;
    }
    const kpi = (label, v, sub) => `<div class="card kpi"><p class="k-label">${esc(label)}</p><p class="k-value">${fmt(v)}</p><p class="k-sub">${sub}</p></div>`;
    const areaSub = a => `${pl(A[a].first, "first completion", "first completions")} · ${pl(A[a].repeat, "practice round", "practice rounds")}`;
    const daily = d.daily.map(x => ({ v: x.completions, day: x.day, short: x.day.slice(5) }));
    const opensDaily = d.daily.map(x => ({ v: x.opens, day: x.day, short: x.day.slice(5) }));
    const weekly = d.weekly.map(x => ({ v: x.completions, day: x.week_start, short: x.week_start.slice(5) }));
    const accRow = (label, o) => `<tr><th scope="row">${esc(label)}</th><td class="num"><strong>${accText(o.correct, o.scored)}</strong></td><td class="num">${fmt(o.correct)} / ${fmt(o.scored)}</td><td class="num">${fmt(o.completions)}</td></tr>`;
    app.innerHTML = head + `
      <p class="caveat">${"Indicative engagement data from anonymous events. Totals count completions, not students: one student can complete many activities, and nobody can be identified. Public events cannot be verified, so treat unusual spikes with caution."}</p>
      <section class="admin-section" aria-labelledby="ovH"><h2 id="ovH">Overview</h2>
        <div class="kpis">
          ${kpi("Total learning completions", T.completions + T.challenge_completions, `${pl(T.completions, "activity", "activities")} + ${pl(T.challenge_completions, "challenge", "challenges")}`)}
          ${LEARN.map(a => kpi(AREA_NAMES[a], A[a].completions, areaSub(a))).join("")}
          ${kpi("Challenge Arena", A.challenge.completions, "finished challenges")}
          ${kpi("Starting-Point Checks", T.checks_completed, "completed checks")}
        </div></section>
      ${traffic}
      <section class="admin-section" aria-labelledby="engH"><h2 id="engH">Engagement</h2>
        <div class="grid g2">
          ${barChart("chDaily", "Daily completions", "Activities and challenges finished per day", daily, p => p.day)}
          ${barChart("chWeekly", "Weekly completions", "Weeks start on Monday", weekly, p => "Week of " + p.day)}
        </div>
        <div class="grid g2" style="margin-top:1rem">
          ${barChart("chOpens", "Learning areas opened per day", "Each time a student moved into a learning area", opensDaily, p => p.day)}
          <div class="card chart-card"><h3>Most popular learning areas</h3><p class="chart-sub">Times each area was opened</p>
            ${hbars(Object.keys(AREA_NAMES).map(a => ({ label: AREA_NAMES[a], v: A[a].opens })).sort((x, y) => y.v - x.v))}</div>
        </div>
        <div class="grid g2" style="margin-top:1rem">
          <div class="card"><h3>Most completed activities</h3>
            ${d.top_activities.length ? `<div class="table-wrap"><table class="skills-table"><caption class="sr-only">Top 10 activities by completions</caption><thead><tr><th scope="col">Activity</th><th scope="col">Area</th><th scope="col" class="num">Completions</th></tr></thead>
            <tbody>${d.top_activities.map(t => `<tr><td>${esc(t.title || t.activity_id)} <span class="small muted">(${esc(t.activity_id)})</span></td><td>${esc(AREA_NAMES[t.area] || t.area)}</td><td class="num">${fmt(t.completions)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">No activity completions in this period.</p>`}</div>
          <div class="card chart-card"><h3>Starting-Point Check: suggested levels</h3><p class="chart-sub">${fmt(T.checks_completed)} completed checks</p>
            ${hbars([1, 2, 3, 4, 5].map(l => ({ label: "Level " + l, v: d.check_distribution[String(l)] || 0 })))}</div>
        </div>
        <div class="card" style="margin-top:1rem"><h3>Completions by proficiency level</h3>
          ${d.by_level.length ? `<div class="table-wrap"><table class="skills-table"><caption class="sr-only">Completions by area and level</caption><thead><tr><th scope="col">Area</th><th scope="col">Level</th><th scope="col" class="num">Completions</th></tr></thead>
          <tbody>${d.by_level.map(r => `<tr><td>${esc(AREA_NAMES[r.area])}</td><td>${esc(levelName(r.area, r.level))}</td><td class="num">${fmt(r.completions)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">No activity completions in this period.</p>`}
          <p class="caveat">Reading, Listening, and Writing use Levels 1–5. Vocabulary and Grammar sets use four set levels (Foundation to Advancing).</p></div>
      </section>
      <section class="admin-section" aria-labelledby="perfH"><h2 id="perfH">Learning performance</h2>
        <p class="caveat">First-try accuracy = first-try correct answers ÷ objectively scored first-try answers, from <strong>first completions only</strong>. Practice rounds are excluded (students have already seen the answers). Guided writing is self-assessed and never scored. “—” means no scored attempts.</p>
        <div class="card"><div class="table-wrap"><table class="skills-table"><caption>First-try accuracy by learning area</caption>
          <thead><tr><th scope="col">Area</th><th scope="col" class="num">Accuracy</th><th scope="col" class="num">Correct / scored attempts</th><th scope="col" class="num">Completions</th></tr></thead>
          <tbody>${accRow("All learning areas", acc.overall)}${LEARN.map(a => accRow(AREA_NAMES[a] + (a === "writing" ? " (checked activities only)" : ""), acc.by_area[a])).join("")}${accRow("Challenge Arena (first tries in challenges)", acc.challenge)}</tbody></table></div></div>
        <div class="grid g2" style="margin-top:1rem">
          <div class="card"><div class="table-wrap"><table class="skills-table"><caption>Accuracy by proficiency level</caption>
            <thead><tr><th scope="col">Area and level</th><th scope="col" class="num">Accuracy</th><th scope="col" class="num">Correct / scored</th></tr></thead>
            <tbody>${acc.by_level.length ? acc.by_level.map(r => `<tr><td>${esc(AREA_NAMES[r.area])} · ${esc(levelName(r.area, r.level))}</td><td class="num">${accText(r.correct, r.scored)}</td><td class="num">${fmt(r.correct)} / ${fmt(r.scored)}</td></tr>`).join("") : `<tr><td colspan="3">No scored attempts in this period.</td></tr>`}</tbody></table></div></div>
          <div class="card"><div class="table-wrap"><table class="skills-table"><caption>Challenge Arena by mode</caption>
            <thead><tr><th scope="col">Mode</th><th scope="col" class="num">Completions</th><th scope="col" class="num">Accuracy</th><th scope="col" class="num">Correct / scored</th></tr></thead>
            <tbody>${Object.keys(MODE_NAMES).map(m => { const x = acc.challenge_by_mode[m]; return `<tr><td>${MODE_NAMES[m]}</td><td class="num">${fmt(x.completions)}</td><td class="num">${accText(x.correct, x.scored)}</td><td class="num">${fmt(x.correct)} / ${fmt(x.scored)}</td></tr>`; }).join("")}</tbody></table></div></div>
        </div>
        <p class="caveat">These are anonymous school-wide totals. They cannot show whether any individual student improved.</p>
      </section>`;
    bindFilters(); bindTips(); say("Statistics loaded.");
  }

  /* ---------- CSV export: aggregate rows only ---------- */
  function downloadCSV() {
    const d = lastReport; if (!d) return;
    const rows = [["section", "item", "level", "count", "correct", "scored", "accuracy_percent", "from", "to"]];
    const add = (sec, item, level, count, c, s) => rows.push([sec, item, level == null ? "" : level, count == null ? "" : count, c == null ? "" : c, s == null ? "" : s, s ? Math.round((c / s) * 1000) / 10 : "", d.range.from, d.range.to]);
    add("totals", "learning completions (activities)", null, d.totals.completions);
    add("totals", "first completions", null, d.totals.first_completions);
    add("totals", "practice-round completions", null, d.totals.repeat_completions);
    add("totals", "challenge completions", null, d.totals.challenge_completions);
    add("totals", "starting-point checks", null, d.totals.checks_completed);
    add("totals", "learning areas opened", null, d.totals.area_opens);
    Object.keys(AREA_NAMES).forEach(a => { const x = d.completions_by_area[a]; add("completions_by_area", a, null, x.completions); add("area_opens", a, null, x.opens); });
    d.daily.forEach(x => add("daily_completions", x.day, null, x.completions));
    d.daily.forEach(x => add("daily_area_opens", x.day, null, x.opens));
    d.weekly.forEach(x => add("weekly_completions", "week of " + x.week_start, null, x.completions));
    d.top_activities.forEach(t => add("top_activities", t.activity_id, t.level, t.completions));
    d.by_level.forEach(r => add("completions_by_level", r.area, r.level, r.completions));
    [1, 2, 3, 4, 5].forEach(l => add("check_suggested_level", "level " + l, l, d.check_distribution[String(l)] || 0));
    add("accuracy", "all learning areas (first completions)", null, d.accuracy.overall.completions, d.accuracy.overall.correct, d.accuracy.overall.scored);
    LEARN.forEach(a => { const x = d.accuracy.by_area[a]; add("accuracy", a, null, x.completions, x.correct, x.scored); });
    d.accuracy.by_level.forEach(r => add("accuracy_by_level", r.area, r.level, r.completions, r.correct, r.scored));
    add("accuracy", "challenge arena", null, d.accuracy.challenge.completions, d.accuracy.challenge.correct, d.accuracy.challenge.scored);
    Object.keys(MODE_NAMES).forEach(m => { const x = d.accuracy.challenge_by_mode[m]; add("challenge_by_mode", m, null, x.completions, x.correct, x.scored); });
    const csv = rows.map(r => r.map(v => { const s = String(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; }).join(",")).join("\r\n");
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `nvs-english-quest-analytics_${d.range.from}_to_${d.range.to}.csv`;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    say("CSV downloaded.");
  }

  /* ---------- Start ---------- */
  $("#signOut").addEventListener("click", async () => { try { await sb.auth.signOut(); } catch (e) {} lastReport = null; viewLogin(); say("Signed out."); });
  (async () => {
    try { const { data } = await sb.auth.getSession(); if (data && data.session) { await afterSignIn(); return; } } catch (e) {}
    viewLogin();
  })();
})();
