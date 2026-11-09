/* =====================================================================
   NVS English Quest — Analytics settings (Version 3E)
   ---------------------------------------------------------------------
   Analytics are OFF until the school approves them.
   Everything in this file is public: anyone can read it in the browser.
   Never put a password, a Supabase secret key, or a service_role key here.

   To turn analytics on (see DEPLOYMENT_GUIDE.md, steps 14–15, and only after school approval):
     1. Paste the Supabase ingestion address into ingestUrl.
     2. (Optional) Paste the Cloudflare Web Analytics site token into cloudflareToken.
     3. Change enabled from false to true.
   ===================================================================== */
window.NVS_ANALYTICS_CONFIG = {
  /* Master switch. While this is false, the website sends nothing to anyone. */
  enabled: false,

  /* Anonymous learning statistics: the address of the Supabase "ingest" function.
     Example format: "https://YOUR-PROJECT-REF.supabase.co/functions/v1/ingest"  */
  ingestUrl: "",

  /* Website traffic: the site token from Cloudflare Web Analytics (Add a site → copy the token).
     Leave empty to skip Cloudflare. */
  cloudflareToken: ""
};
