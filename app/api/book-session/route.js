import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const sheetdbUrl = process.env.SHEETDB_API_URL?.trim();

  if (!sheetdbUrl) {
    return NextResponse.json(
      {
        error: "Booking service is not configured on the server.",
        ...(process.env.NODE_ENV === "development" && {
          hint: "Add SHEETDB_API_URL to .env.local (your SheetDB API URL), then restart the dev server.",
        }),
      },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { fullName, address, whatsapp, email, age, healthIssue, message } = body;

  const trimmedName    = typeof fullName  === "string" ? fullName.trim()  : "";
  const trimmedEmail   = typeof email     === "string" ? email.trim()     : "";
  const trimmedWhatsapp= typeof whatsapp  === "string" ? whatsapp.trim()  : "";
  const trimmedAge     = String(age ?? "").trim();

  if (!trimmedName || trimmedName.length > 200)
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  if (!trimmedEmail || !emailPattern.test(trimmedEmail))
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (!trimmedWhatsapp)
    return NextResponse.json({ error: "Please enter your WhatsApp number." }, { status: 400 });
  if (!trimmedAge || isNaN(Number(trimmedAge)))
    return NextResponse.json({ error: "Please enter your age." }, { status: 400 });

  const row = {
    "Submitted At":       new Date().toLocaleString("en-GB", { timeZone: "Asia/Kathmandu" }),
    "Full Name":          trimmedName,
    "Address":            typeof address     === "string" ? address.trim().slice(0, 300)     : "",
    "WhatsApp":           trimmedWhatsapp.slice(0, 25),
    "Email":              trimmedEmail,
    "Age":                trimmedAge,
    "Health Issue / Goal":typeof healthIssue === "string" ? healthIssue.trim().slice(0, 500) : "",
    "Message":            typeof message     === "string" ? message.trim().slice(0, 2000)    : "",
  };

  try {
    const res = await fetch(sheetdbUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [row] }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("SheetDB error:", res.status, text);
      return NextResponse.json(
        { error: "Could not save your booking. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Book-session fetch error:", err);
    return NextResponse.json(
      { error: "Network error. Please try again later." },
      { status: 502 }
    );
  }
}
