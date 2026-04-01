import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteContact } from "../../siteData";

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Email is not configured on the server.",
        ...(process.env.NODE_ENV === "development" && {
          hint: "Add RESEND_API_KEY to a .env.local file in the project root (get a key at resend.com/api-keys), then restart npm run dev.",
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

  const { name, email, preferredTime, message, source, _gotcha } = body;

  if (_gotcha) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const trimmedName = typeof name === "string" ? name.trim() : "";
  const trimmedEmail = typeof email === "string" ? email.trim() : "";

  if (!trimmedName || trimmedName.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const pt =
    typeof preferredTime === "string" ? preferredTime.trim().slice(0, 500) : "";
  const msg =
    typeof message === "string" ? message.trim().slice(0, 8000) : "";
  const src =
    source === "home" || source === "contact" ? source : "contact";

  const to = process.env.CONTACT_TO_EMAIL || siteContact.email;
  const from =
    process.env.RESEND_FROM_EMAIL ||
    "Astha Parajuli Website <onboarding@resend.dev>";

  const subjectPrefix =
    src === "home" ? "Callback request" : "Session / booking request";

  const html = `
    <p><strong>New message from the website</strong></p>
    <p><strong>Source:</strong> ${escapeHtml(src === "home" ? "Home (Request callback)" : "Contact page")}</p>
    <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
    ${
      pt
        ? `<p><strong>Preferred time:</strong> ${escapeHtml(pt)}</p>`
        : ""
    }
    ${
      msg
        ? `<p><strong>Message / goals:</strong></p><p>${escapeHtml(msg).replace(/\n/g, "<br/>")}</p>`
        : ""
    }
  `.trim();

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: trimmedEmail,
    subject: `${subjectPrefix}: ${trimmedName}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    const resendMsg =
      typeof error?.message === "string"
        ? error.message
        : typeof error === "string"
          ? error
          : error
            ? JSON.stringify(error)
            : "";
    return NextResponse.json(
      {
        error: "Could not send your message. Please try again later.",
        ...(process.env.NODE_ENV === "development" &&
          resendMsg && {
            hint: `Resend: ${resendMsg}. If you use onboarding@resend.dev, the "to" address must usually be the same email you used to sign up at Resend, or verify a domain at resend.com and set RESEND_FROM_EMAIL.`,
          }),
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
