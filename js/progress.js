/* =====================================================================
   NVS English Quest — PROGRESS STORAGE
   Saves student progress in this browser (localStorage).
   The storage key and record format are the same as Version 1 and 2,
   so existing progress is kept. New fields are only ever ADDED.
   ===================================================================== */
(function () {
  "use strict";
  var KEY = "nvs-english-quest-v1";      /* never change: changing it would hide saved progress */
  var BACKUP_KEY = "nvs-english-quest-v1-backup";
  var ok = true;

  function fresh() { return { v: 1, q: {}, done: {}, badges: {}, last: null, w: {}, ch: { runs: [], weekly: {} } }; }

  /* Fill in any missing parts without touching existing records. */
  function migrate(d) {
    var s = Object.assign(fresh(), d);
    s.q = s.q || {}; s.done = s.done || {}; s.badges = s.badges || {}; s.w = s.w || {};
    s.ch = Object.assign({ runs: [], weekly: {} }, s.ch || {});
    s.app = "3E";
    return s;
  }

  function load() {
    var raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { ok = false; return fresh(); }
    if (!raw) return fresh();
    try {
      var d = JSON.parse(raw);
      if (d && d.v === 1 && d.q) return migrate(d);
    } catch (e) { /* unreadable record: keep a copy, never delete it */ }
    try { localStorage.setItem(BACKUP_KEY + "-" + Date.now(), raw); } catch (e) {}
    return fresh();
  }

  function isEmpty(s) {
    return !Object.keys(s.q).length && !Object.keys(s.done).length && !Object.keys(s.badges).length && !Object.keys(s.w).length && !s.ch.runs.length;
  }

  function save(s) {
    try {
      /* Safety: never overwrite a non-empty saved record with an empty one (except via reset). */
      if (isEmpty(s)) { var cur = localStorage.getItem(KEY); if (cur) { var c = JSON.parse(cur); if (c && c.q && Object.keys(c.q).length) return; } }
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (e) { ok = false; }
  }

  function clear() { try { localStorage.removeItem(KEY); } catch (e) {} return fresh(); }

  window.NVSProgress = { KEY: KEY, fresh: fresh, load: load, save: save, clear: clear, ok: function () { return ok; } };
})();
