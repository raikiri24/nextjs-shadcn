import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  if (currentPath === "/") {
    return NextResponse.redirect(new URL("/faqs", request.url));
  }
}
