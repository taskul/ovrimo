import { NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/db';

export async function GET() {
    const products = await getProducts();
    return NextResponse.json({ products });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        const newProduct = {
            ...body,
            id: body.id || Math.random().toString(36).substring(2, 15),
        };

        await addProduct(newProduct);

        return NextResponse.json({ success: true, product: newProduct });
    } catch (error) {
        console.error('API Admin Products POST Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
