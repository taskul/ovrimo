"use client";

import { useEffect, useState, use } from "react";
import { SectionShell } from "@/components/section-shell";
import { ProductForm } from "@/components/admin/product-form";
import type { Product } from "@/types/product";

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/admin/products/${id}`);
                const data = await res.json();
                if (data.product) {
                    setProduct(data.product);
                }
            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <SectionShell eyebrow="Management" title="Edit Product">
            <div className="mt-8">
                {loading ? (
                    <div className="text-center py-10 text-slate-400">Loading product details...</div>
                ) : product ? (
                    <ProductForm initialData={product} isEditing={true} />
                ) : (
                    <div className="text-center py-10 text-red-400">Product not found.</div>
                )}
            </div>
        </SectionShell>
    );
}
