import { createClient } from "@supabase/supabase-js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const hCaptchaSecret = Deno.env.get("HCAPTCHA_SECRET_KEY");
  if (!hCaptchaSecret) {
    return jsonResponse({ error: "Missing HCAPTCHA_SECRET_KEY" }, 500);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse(
      { error: "Missing Supabase environment variables" },
      500,
    );
  }

  let payload: {
    email?: string;
    name?: string;
    child_age?: number | null;
    captcha_token?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const { email, name, child_age, captcha_token } = payload;

  // Validate required fields
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return jsonResponse({ error: "Valid email is required" }, 400);
  }

  if (!captcha_token || typeof captcha_token !== "string") {
    return jsonResponse({ error: "CAPTCHA token is required" }, 400);
  }

  // Verify hCaptcha token server-side
  const formData = new URLSearchParams();
  formData.append("response", captcha_token);
  formData.append("secret", hCaptchaSecret);

  try {
    const captchaRes = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      body: formData,
    });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return jsonResponse({ error: "CAPTCHA verification failed" }, 400);
    }
  } catch {
    return jsonResponse({ error: "Failed to verify CAPTCHA" }, 500);
  }

  // CAPTCHA verified — insert into wishlists
  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

  const insertPayload: Record<string, unknown> = {
    email: email.trim(),
    captcha_token,
  };

  if (name && typeof name === "string" && name.trim().length > 0) {
    insertPayload.name = name.trim();
  }

  if (child_age !== undefined && child_age !== null) {
    insertPayload.child_age = child_age;
  }

  const { data, error } = await supabaseAdmin
    .from("wishlists")
    .upsert(insertPayload, { onConflict: "email" })
    .select()
    .single();

  if (error) {
    return jsonResponse({ error: error.message }, 500);
  }

  return jsonResponse({ success: true, wishlist: data });
});
