/* =====================================================================
   NVS English Quest — Anonymous analytics module (Version 3E)
   ---------------------------------------------------------------------
   • Does NOTHING unless analytics-config.js sets enabled: true.
   • Sends only small, anonymous, aggregate-friendly events:
       area_open, activity_complete, check_complete, challenge_complete.
   • Never sends names, IDs, answers, written text, or saved progress histories.
   • Creates no identifier: no cookies, no localStorage, no fingerprinting.
   • Every failure is silent. Learning never waits for analytics.
   ===================================================================== */
(function () {
  "use strict";
  var cfg = window.NVS_ANALYTICS_CONFIG || {};
  var enabled = cfg.enabled === true;
  /* https only (plain http is accepted for localhost testing). */
  var ingestUrl = (enabled && typeof cfg.ingestUrl === "string" && /^(https:\/\/[^\s"'<>]+|http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/[^\s"'<>]*)$/.test(cfg.ingestUrl)) ? cfg.ingestUrl : null;
  var cfToken = (enabled && typeof cfg.cloudflareToken === "string" && /^[A-Za-z0-9]{16,64}$/.test(cfg.cloudflareToken)) ? cfg.cloudflareToken : null;

  var AREAS = ["reading", "vocab", "grammar", "listening", "writing", "challenge"];
  var MODES = ["quick", "sprint", "detective", "weekly"];
  var sentKeys = {};          /* duplicate guard for this page load only (kept in memory, never saved) */
  var sentCount = 0, MAX_PER_PAGE_LOAD = 300;

  function int(n, lo, hi) { n = Number(n); return Number.isInteger(n) && n >= lo && n <= hi ? n : null; }

  /* Build the exact payload. Anything not listed here is never sent. */
  function clean(e) {
    if (!e || typeof e !== "object") return null;
    var out = { t: e.t, v: "3E" };
    if (e.t === "area_open") {
      if (AREAS.indexOf(e.area) < 0) return null; out.area = e.area;
    } else if (e.t === "activity_complete") {
      if (AREAS.indexOf(e.area) < 0 || e.area === "challenge") return null;
      if (typeof e.id !== "string" || !/^[a-z0-9-]{2,12}$/.test(e.id)) return null;
      var scored = int(e.scored, 0, 30), first = int(e.first, 0, 30);
      if (scored === null || first === null || first > scored) return null;
      if (e.attempt !== "first" && e.attempt !== "repeat") return null;
      out.area = e.area; out.id = e.id; out.first = first; out.scored = scored; out.attempt = e.attempt;
    } else if (e.t === "check_complete") {
      var rec = int(e.rec, 1, 5); if (rec === null) return null; out.rec = rec;
    } else if (e.t === "challenge_complete") {
      if (MODES.indexOf(e.mode) < 0) return null;
      var sc = int(e.scored, 0, 30), cor = int(e.correct, 0, 30);
      if (sc === null || cor === null || cor > sc) return null;
      out.mode = e.mode; out.correct = cor; out.scored = sc;
    } else return null;
    return out;
  }

  function send(payload) {
    if (!ingestUrl || typeof fetch !== "function") return;
    try {
      var ctrl = typeof AbortController === "function" ? new AbortController() : null;
      var timer = ctrl ? setTimeout(function () { try { ctrl.abort(); } catch (x) {} }, 4000) : null;
      /* text/plain keeps this a "simple" request (no CORS preflight). No credentials, no referrer. */
      fetch(ingestUrl, {
        method: "POST", body: JSON.stringify(payload), headers: { "Content-Type": "text/plain;charset=UTF-8" },
        keepalive: true, mode: "cors", credentials: "omit", cache: "no-store", referrerPolicy: "no-referrer",
        signal: ctrl ? ctrl.signal : undefined
      }).then(function () {}, function () {}).then(function () { if (timer) clearTimeout(timer); });
    } catch (x) { /* never interrupt learning */ }
  }

  /* key: optional duplicate-guard key supplied by the app (for example "first:r1-03"). */
  function track(e, key) {
    try {
      if (!enabled || !ingestUrl) return false;
      var p = clean(e); if (!p) return false;
      if (key) { if (sentKeys[key]) return false; sentKeys[key] = 1; }
      if (++sentCount > MAX_PER_PAGE_LOAD) return false;
      send(p); return true;
    } catch (x) { return false; }
  }

  /* Website traffic (Cloudflare Web Analytics). Loaded only when enabled AND a token is set.
     "spa": false because this site uses # addresses, which Cloudflare's SPA mode does not track.
     Section popularity therefore comes from the anonymous area_open events instead. */
  function loadCloudflare() {
    if (!cfToken || document.querySelector("script[data-nvs-cf]")) return;
    try {
      var s = document.createElement("script");
      /* type="module", as in Cloudflare's current manual snippet (module scripts are deferred automatically). */
      s.type = "module"; s.src = "https://static.cloudflareinsights.com/beacon.min.js";
      s.setAttribute("data-cf-beacon", JSON.stringify({ token: cfToken, spa: false }));
      s.setAttribute("data-nvs-cf", "1");
      document.head.appendChild(s);
    } catch (x) {}
  }
  if (cfToken) { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", loadCloudflare); else loadCloudflare(); }

  window.NVSAnalytics = {
    track: track,
    status: function () { return { enabled: enabled, learning: !!ingestUrl, traffic: !!cfToken }; }
  };
})();
