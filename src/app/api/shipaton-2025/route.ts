import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Alias to static JSON — prefer /data/shipaton-2025.json for CDN cache. */
export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/data/shipaton-2025.json", request.url), 308);
}
