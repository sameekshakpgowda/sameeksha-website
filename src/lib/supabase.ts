const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function createContactRequest(request: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase is not configured.");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/sam_contact_requests`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: request.name,
      email: request.email,
      phone: request.phone || null,
      messages: request.message,
    }),
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    console.error("Supabase contact request failed:", response.status, errorDetails);
    throw new Error("Unable to send your message.");
  }
}
