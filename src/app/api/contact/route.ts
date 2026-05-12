import { NextResponse } from 'next/server';
import { addMessage } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await addMessage({
            id: Math.random().toString(36).substring(2, 15),
            name,
            email,
            subject,
            message,
        });

        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('API Contact Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
