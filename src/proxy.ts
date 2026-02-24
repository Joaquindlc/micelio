import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Definimos qué rutas son públicas (ej. la landing page o el sign-in)
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect(); // Protege todas las demás rutas (como el Dashboard)
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|pptx?)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};