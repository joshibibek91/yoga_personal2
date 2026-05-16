import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name  = searchParams.get("name")?.trim();
  const email = searchParams.get("email")?.trim();

  if (!name || !email) return NextResponse.json({ isDuplicate: false });

  const sheetdbUrl = process.env.SHEETDB_API_URL?.trim();
  if (!sheetdbUrl)   return NextResponse.json({ isDuplicate: false });

  try {
    const url = `${sheetdbUrl}/search?Full%20Name=${encodeURIComponent(name)}&Email=${encodeURIComponent(email)}`;
    const res  = await fetch(url, { cache: "no-store" });
    if (!res.ok) return NextResponse.json({ isDuplicate: false });

    const data = await res.json();
    return NextResponse.json({ isDuplicate: Array.isArray(data) && data.length > 0 });
  } catch {
    return NextResponse.json({ isDuplicate: false });
  }
}
