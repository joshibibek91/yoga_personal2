import { NextResponse } from "next/server";

const FORM_ID   = "1FAIpQLScWVBvOZ_39f-d9Iwjx7ISZM4HrbJGxENzjMlPMaC1zrrQOrg";
const FORM_BASE = `https://docs.google.com/forms/d/e/${FORM_ID}`;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { fullName, address, whatsapp, email, age, healthIssue, message } = body;

  const trimmedName     = typeof fullName    === "string" ? fullName.trim()    : "";
  const trimmedEmail    = typeof email       === "string" ? email.trim()       : "";
  const trimmedWhatsapp = typeof whatsapp    === "string" ? whatsapp.trim()    : "";
  const trimmedAge      = String(age ?? "").trim();

  if (!trimmedName || trimmedName.length > 200)
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  if (!trimmedEmail || !emailPattern.test(trimmedEmail))
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (!trimmedWhatsapp)
    return NextResponse.json({ error: "Please enter your WhatsApp number." }, { status: 400 });
  if (!trimmedAge || isNaN(Number(trimmedAge)))
    return NextResponse.json({ error: "Please enter your age." }, { status: 400 });

  const params = new URLSearchParams({
    "entry.1789500581": trimmedName,
    "entry.254884273":  typeof address     === "string" ? address.trim().slice(0, 300)     : "",
    "entry.797220523":  trimmedWhatsapp.slice(0, 25),
    "entry.194221757":  trimmedEmail,
    "entry.717519590":  trimmedAge,
    "entry.1073134132": typeof healthIssue === "string" ? healthIssue.trim().slice(0, 500) : "",
    "entry.484253324":  typeof message     === "string" ? message.trim().slice(0, 2000)    : "",
    "fvv":              "1",
    "draftResponse":    "[]",
    "pageHistory":      "0",
    "fbzx":             String(Math.floor(Math.random() * 9e15)),
  });

  try {
    const res = await fetch(`${FORM_BASE}/formResponse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer":      `${FORM_BASE}/viewform`,
        "Origin":       "https://docs.google.com",
        "User-Agent":   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: params.toString(),
    });

    const responseText = await res.text();

    if (process.env.NODE_ENV === "development") {
      console.log("Google Forms status:", res.status);
      console.log("Google Forms body snippet:", responseText.slice(0, 300));
    }

    // A saved submission redirects to a "recorded" confirmation page.
    // Detect failure: Google returns a form page again (has <form) instead of confirmation.
    const looksLikeFail =
      res.status >= 400 ||
      responseText.includes("The form you're trying to reach") ||
      responseText.includes("You can't submit this form");

    if (looksLikeFail) {
      console.error("Google Forms rejected submission, status:", res.status);
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
