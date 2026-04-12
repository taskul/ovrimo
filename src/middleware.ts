import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if we are accessing an protected admin route (except the login page)
    if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
        const sessionCookie = request.cookies.get('admin_session');

        if (!sessionCookie || sessionCookie.value !== 'authenticated') {
            // Redirect to login if user is not authenticated
            const loginUrl = new URL('/admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    // APIs under /api/admin can also be protected
    if (request.nextUrl.pathname.startsWith('/api/admin')) {
        const sessionCookie = request.cookies.get('admin_session');
        if (!sessionCookie || sessionCookie.value !== 'authenticated') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
};
