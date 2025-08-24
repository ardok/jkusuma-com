import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { decrypt } from './app/lib/session';

// 1. Specify protected and public routes
const protectedRoutes = ['/doc2'];
const publicRoutes = ['/login', '/'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookiesObj = await cookies();
  const cookie = cookiesObj.get('session')?.value;
  const session = await decrypt(cookie);

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    // Set nextUrl
    cookiesObj.set('nextUrl', path);
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (session?.userId && path === '/login') {
    // Just redirect to main page
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  if (!session?.userId && path === '/login') {
    const headers = new Headers(req.headers);
    headers.set('pathname', req.nextUrl.pathname);
    return NextResponse.next({
      request: {
        headers,
      },
    });
  }

  // // 5. Redirect to previous page if the user is authenticated
  // if (isPublicRoute && session?.userId) {
  //   // Get nextUrl
  //   const nextUrl = cookiesObj.get('nextUrl')?.value;
  //   cookiesObj.delete('nextUrl');
  //   return NextResponse.redirect(new URL(nextUrl || '/', req.nextUrl));
  // }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
