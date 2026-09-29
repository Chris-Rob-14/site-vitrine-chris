import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/site";

export function GET() {
  return NextResponse.redirect(new URL("/?utm_source=qr&utm_medium=print&utm_campaign=business_card", siteUrl), {
    status: 307,
    headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}
