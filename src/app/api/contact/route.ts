import { NextResponse } from 'next/server';
import { addMessage } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        let { name, email, subject, message } = body;

        // 1. Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. Character limits
        if (name.length > 100) return NextResponse.json({ error: 'Name too long (max 100)' }, { status: 400 });
        if (email.length > 100) return NextResponse.json({ error: 'Email too long (max 100)' }, { status: 400 });
        if (subject.length > 200) return NextResponse.json({ error: 'Subject too long (max 200)' }, { status: 400 });
        if (message.length > 2000) return NextResponse.json({ error: 'Message too long (max 2000)' }, { status: 400 });

        // 3. Email format check
        if (!/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // 4. Simple sanitization (strip HTML tags to prevent XSS)
        const stripHtml = (str: string) => str.replace(/<[^>]*>?/gm, '');
        name = stripHtml(name).trim();
        subject = stripHtml(subject).trim();
        message = stripHtml(message).trim();
        email = email.toLowerCase().trim();

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
