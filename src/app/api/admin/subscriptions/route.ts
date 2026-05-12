import { NextResponse } from 'next/server';
import { getSubscriptions, addSubscription, deleteSubscription } from '@/lib/db';

export async function GET() {
    const subscriptions = await getSubscriptions();
    return NextResponse.json({ subscriptions });
}

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        await addSubscription({
            id: Math.random().toString(36).substring(2, 15),
            email,
            status: 'active',
        });

        return NextResponse.json({ success: true, message: 'Subscribed successfully' });
    } catch (error) {
        console.error('API Admin Subscriptions POST Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, status } = await request.json();

        // For simplicity, we just use addSubscription which handles ON CONFLICT
        // But we need the email to update by email if we don't have it.
        // Actually, we should probably have a specific updateSubscription function.
        // For now, let's just get the sub first.
        const subs = await getSubscriptions();
        const sub = subs.find(s => s.id === id);
        if (sub) {
            await addSubscription({ ...sub, status });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        await deleteSubscription(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
