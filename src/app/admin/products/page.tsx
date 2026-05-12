"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import type { Product } from "@/types/product";

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await fetch("/api/admin/products");
            const data = await res.json();
            setProducts(data.products || []);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`/api/admin/products/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                setProducts(products.filter((p) => p.id !== id));
                setDeleteConfirm(null);
            }
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    return (
        <SectionShell eyebrow="Management" title="Products">
            <div className="mb-6 flex justify-end">
                <Link
                    href="/admin/products/new"
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-600"
                >
                    Add New Product
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-10 text-slate-400">Loading products...</div>
            ) : products.length === 0 ? (
                <div className="rounded-[32px] border border-dashed border-white/10 bg-white/5 p-10 text-center text-slate-400">
                    No products found. Click "Add New Product" to create one.
                </div>
            ) : (
                <div className="space-y-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-slate-800 p-2">
                                    <img src={product.icon} alt="" className="h-full w-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">{product.name}</h3>
                                    <p className="text-sm text-slate-400">{product.category} • {product.status}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {deleteConfirm === product.id ? (
                                    <>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600"
                                        >
                                            Confirm
                                        </button>
                                        <button
                                            onClick={() => setDeleteConfirm(null)}
                                            className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={`/admin/products/${product.id}`}
                                            className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => setDeleteConfirm(product.id)}
                                            className="rounded-lg border border-red-500/50 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </SectionShell>
    );
}
