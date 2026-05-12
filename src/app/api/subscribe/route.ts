import { NextResponse } from 'next/server';
import { addSubscription } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
        }

        // Sanitize email (lowercase and trim)
        const sanitizedEmail = email.toLowerCase().trim();

        await addSubscription({
            id: Math.random().toString(36).substring(2, 15),
            email: sanitizedEmail,
            status: 'active',
        });

        return NextResponse.json({ success: true, message: 'Subscribed successfully' });
    } catch (error) {
        console.error('API Subscribe Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
