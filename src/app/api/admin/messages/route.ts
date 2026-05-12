import { NextResponse } from 'next/server';
import { getMessages, deleteMessage } from '@/lib/db';

export async function GET() {
    const messages = await getMessages();
    return NextResponse.json({ messages });
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        await deleteMessage(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
