import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/site";

export function GET() {
  return NextResponse.redirect(new URL("/?utm_source=linkedin&utm_medium=social&utm_campaign=profile", siteUrl), {
    status: 307,
    headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}
