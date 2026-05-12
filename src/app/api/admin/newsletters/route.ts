import { NextResponse } from 'next/server';
import { getNewsletters, addNewsletter, updateNewsletter } from '@/lib/db';

export async function GET() {
    const newsletters = await getNewsletters();
    return NextResponse.json({ newsletters });
}

export async function POST(request: Request) {
    try {
        const { subject, content } = await request.json();

        if (!subject || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newNewsletter = {
            id: Math.random().toString(36).substring(2, 15),
            subject,
            content,
            sentAt: null,
        };

        await addNewsletter(newNewsletter);

        return NextResponse.json({ success: true, newsletter: newNewsletter });
    } catch (error) {
        console.error('API Admin Newsletters POST Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, action } = await request.json();
        const newsletters = await getNewsletters();

        const newsletter = newsletters.find(n => n.id === id);
        if (!newsletter) {
            return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });
        }

        if (action === 'send') {
            const sentAt = new Date().toISOString();
            await updateNewsletter(id, { sentAt });
            return NextResponse.json({ success: true, newsletter: { ...newsletter, sentAt } });
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    } catch (error) {
        console.error('API Admin Newsletters PUT Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
