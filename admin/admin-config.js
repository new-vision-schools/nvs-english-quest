/* =====================================================================
   NVS English Quest — Administrator dashboard settings (Version 3E)
   ---------------------------------------------------------------------
   These two values are PUBLIC by design (Supabase calls this the
   "publishable" key, formerly the "anon" key). They allow sign-in only;
   all data is protected on the server by Row Level Security and an
   administrator check.

   NEVER paste a secret key (sb_secret_...), a service_role key, or a password here.
   ===================================================================== */
window.NVS_ADMIN_CONFIG = {
  /* Supabase → Project Settings → API → Project URL, e.g. "https://abcdefghijkl.supabase.co" */
  supabaseUrl: "",
  /* Supabase → Project Settings → API Keys → Publishable key ("sb_publishable_...") or the legacy "anon" key */
  supabasePublishableKey: "",
  /* Link to your Cloudflare Web Analytics page (website visits are viewed there) */
  cloudflareDashboardUrl: "https://dash.cloudflare.com/?to=/:account/web-analytics"
};
