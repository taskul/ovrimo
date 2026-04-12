import { NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';

export async function GET() {
    const db = getDb();
    const newsletters = [...db.newsletters].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json({ newsletters });
}

export async function POST(request: Request) {
    try {
        const { subject, content } = await request.json();
        const db = getDb();

        const newNewsletter = {
            id: Math.random().toString(36).substring(2, 15),
            subject,
            content,
            sentAt: null,
            createdAt: new Date().toISOString()
        };

        db.newsletters.push(newNewsletter);
        saveDb(db);

        return NextResponse.json({ success: true, newsletter: newNewsletter });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, action } = await request.json();
        const db = getDb();

        const newsletter = db.newsletters.find(n => n.id === id);
        if (!newsletter) {
            return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });
        }

        if (action === 'send') {
            newsletter.sentAt = new Date().toISOString();
            saveDb(db);
            return NextResponse.json({ success: true, newsletter });
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
