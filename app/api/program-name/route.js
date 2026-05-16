import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const sheetdbUrl = process.env.SHEETDB_API_URL?.trim();

  if (!sheetdbUrl) {
    return NextResponse.json({ name: "Book a Session" });
  }

  try {
    const res = await fetch(`${sheetdbUrl}?sheet=Program%20Name`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ name: "Book a Session" });
    }

    const data = await res.json();
    const name = data?.[0]?.["Program Name"]?.trim();
    return NextResponse.json({ name: name || "Book a Session" });
  } catch {
    return NextResponse.json({ name: "Book a Session" });
  }
}
