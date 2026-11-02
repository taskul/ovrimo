import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { ADMIN_COOKIE, verifyAdminSession } from '@/lib/admin-session';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isAdminPage = pathname.startsWith('/admin') && !pathname.startsWith('/admin/login');
    const isAdminApi = pathname.startsWith('/api/admin');

    if (!isAdminPage && !isAdminApi) return NextResponse.next();

    // The cookie must carry a valid, unexpired signature (see src/lib/admin-session.ts)
    const authenticated = await verifyAdminSession(request.cookies.get(ADMIN_COOKIE)?.value);
    if (authenticated) return NextResponse.next();

    if (isAdminApi) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Redirect to login if user is not authenticated
    return NextResponse.redirect(new URL('/admin/login', request.url));
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
};
