import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Alias to static JSON — prefer /data/sources.json for CDN cache. */
export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/data/sources.json", request.url), 308);
}
