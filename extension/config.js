// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
  SUPABASE_URL: 'https://tfggrujzgdoksvpimxrd.supabase.co',

  // Your Supabase anon/public key (from Project Settings > API)
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmZ2dydWp6Z2Rva3N2cGlteHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMDY4MTMsImV4cCI6MjA4NDY4MjgxM30.UBXESqdPH7hnDfN6AjPMB1cuWkg0WS8RYcHGXV3Savc',

  // Your web app URL (after deploying to Vercel/Netlify)
  WEB_APP_URL: 'https://your-stash-app.vercel.app',

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
  USER_ID: 'e986227f-cfa4-4af2-b130-32d327dd757d',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
