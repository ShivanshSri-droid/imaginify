import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/api/webhooks/clerk', '/sign-in(.*)', '/sign-up(.*)', '/']);

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)){
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// middleware.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { ClerkMiddlewareOptions, clerkMiddleware } from '@clerk/nextjs/server';

// const publicRoutes = ['/api/webhooks']; // Add your webhook route here

// export function middleware(request: NextRequest, event: any) {
//   const url = request.nextUrl.clone();
//   const isPublicRoute = publicRoutes.some((route) => url.pathname.startsWith(route));

//   if (isPublicRoute) {
//     return NextResponse.next();
//   }

//   // Correctly pass both request and event to clerkMiddleware
//   return clerkMiddleware(request, event);
// }

// export const config = {
//   matcher: [
//     ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
//   ],
// };
