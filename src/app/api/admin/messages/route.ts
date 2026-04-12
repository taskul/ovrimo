import { NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';

export async function GET() {
    const db = getDb();
    // Return the messages sorted by date descending
    const messages = [...db.messages].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json({ messages });
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const db = getDb();

        db.messages = db.messages.filter(msg => msg.id !== id);
        saveDb(db);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
