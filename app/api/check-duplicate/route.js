import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function parseCSVLine(line) {
  const cols = [];
  let cur = "", inQ = false;
  for (const ch of line) {
    if (ch === '"') { inQ = !inQ; }
    else if (ch === "," && !inQ) { cols.push(cur); cur = ""; }
    else { cur += ch; }
  }
  cols.push(cur);
  return cols;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name  = searchParams.get("name")?.trim().toLowerCase();
  const email = searchParams.get("email")?.trim().toLowerCase();

  if (!name || !email) return NextResponse.json({ isDuplicate: false });

  const csvUrl = process.env.GOOGLE_SHEET_CSV_URL?.trim();
  if (!csvUrl) return NextResponse.json({ isDuplicate: false });

  try {
    const res = await fetch(csvUrl, { cache: "no-store" });
    if (!res.ok) return NextResponse.json({ isDuplicate: false });

    const csv = await res.text();
    // Google Form sheet columns: Timestamp, Full Name, Address, WhatsApp Number, Email, Age, Health Issue / Goal, Message
    const lines = csv.split("\n").slice(1);

    for (const line of lines) {
      if (!line.trim()) continue;
      const cols   = parseCSVLine(line);
      const rowName  = (cols[1] || "").trim().toLowerCase();
      const rowEmail = (cols[4] || "").trim().toLowerCase();
      if (rowName === name && rowEmail === email) {
        return NextResponse.json({ isDuplicate: true });
      }
    }

    return NextResponse.json({ isDuplicate: false });
  } catch {
    return NextResponse.json({ isDuplicate: false });
  }
}
