import { NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';

export async function GET() {
    const db = getDb();
    const subscriptions = [...db.subscriptions].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json({ subscriptions });
}

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const db = getDb();

        // Prevent duplicates
        if (db.subscriptions.find(s => s.email === email)) {
            return NextResponse.json({ error: 'Already subscribed' }, { status: 400 });
        }

        const newSub = {
            id: Math.random().toString(36).substring(2, 15),
            email,
            status: 'active' as const,
            createdAt: new Date().toISOString()
        };

        db.subscriptions.push(newSub);
        saveDb(db);

        return NextResponse.json({ success: true, subscription: newSub });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const db = getDb();

        db.subscriptions = db.subscriptions.filter(s => s.id !== id);
        saveDb(db);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
