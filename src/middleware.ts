import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("middleware");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("mj: 미들웨어 경로 리다익렉텡");
    return NextResponse.redirect(new URL("/products", request.url));
  }
};

export const config = {
  matcher: ["/products/:path*"],
};
