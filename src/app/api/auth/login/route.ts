import { NextResponse } from 'next/server';

import {
    ADMIN_COOKIE,
    ADMIN_SESSION_MAX_AGE,
    createAdminSession,
    isAdminConfigured,
    safeEqual,
} from '@/lib/admin-session';

export async function POST(request: Request) {
    try {
        if (!isAdminConfigured()) {
            // No default credentials: ADMIN_USERNAME, ADMIN_PASSWORD and ADMIN_SESSION_SECRET must be set.
            return NextResponse.json({ error: 'Admin login is not configured on this server.' }, { status: 500 });
        }

        const { username, password } = await request.json();

        const userOk = await safeEqual(String(username ?? ''), process.env.ADMIN_USERNAME!);
        const passOk = await safeEqual(String(password ?? ''), process.env.ADMIN_PASSWORD!);

        if (userOk && passOk) {
            const session = await createAdminSession();
            const response = NextResponse.json({ success: true });

            // Signed, expiring session token in an HttpOnly cookie
            response.cookies.set(ADMIN_COOKIE, session!, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: ADMIN_SESSION_MAX_AGE,
            });

            return response;
        }

        // Slow down password guessing
        await new Promise((resolve) => setTimeout(resolve, 750));
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
