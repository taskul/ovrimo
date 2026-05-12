"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product, ProductFeature, ProductFaq, ProductScreenshot, ProductUpdate, ProductLink } from "@/types/product";

interface ProductFormProps {
    initialData?: Product;
    isEditing?: boolean;
}

export function ProductForm({ initialData, isEditing = false }: ProductFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Product>>(
        initialData || {
            name: "",
            slug: "",
            tagline: "",
            shortDescription: "",
            longDescription: [""],
            category: "",
            status: "coming-soon",
            icon: "",
            heroImage: "",
            screenshots: [],
            features: [],
            faq: [],
            featured: false,
            releaseDate: new Date().getFullYear().toString(),
            seoTitle: "",
            seoDescription: "",
            relatedProductSlugs: [],
            links: [],
            updates: [],
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleArrayChange = (index: number, value: string, field: "longDescription") => {
        const newArray = [...(formData[field] || [])];
        newArray[index] = value;
        setFormData((prev) => ({ ...prev, [field]: newArray }));
    };

    const addArrayItem = (field: "longDescription") => {
        setFormData((prev) => ({ ...prev, [field]: [...(prev[field] || []), ""] }));
    };

    const removeArrayItem = (index: number, field: "longDescription") => {
        setFormData((prev) => ({ ...prev, [field]: (prev[field] || []).filter((_, i) => i !== index) }));
    };

    // Generic handler for object arrays
    const handleObjectArrayChange = <T extends object>(
        index: number,
        field: keyof T,
        value: string,
        parentField: keyof Product
    ) => {
        const newArray = [...(formData[parentField] as T[] || [])];
        newArray[index] = { ...newArray[index], [field]: value };
        setFormData((prev) => ({ ...prev, [parentField]: newArray }));
    };

    const addObjectArrayItem = (parentField: keyof Product, defaultValue: object) => {
        setFormData((prev) => ({ ...prev, [parentField]: [...(prev[parentField] as any[] || []), defaultValue] }));
    };

    const removeObjectArrayItem = (index: number, parentField: keyof Product) => {
        setFormData((prev) => ({ ...prev, [parentField]: (prev[parentField] as any[] || []).filter((_, i) => i !== index) }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isEditing ? `/api/admin/products/${initialData?.id}` : "/api/admin/products";
            const method = isEditing ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/admin/products");
                router.refresh();
            } else {
                const data = await res.json();
                alert(data.error || "Something went wrong");
            }
        } catch (error) {
            console.error("Failed to save product:", error);
            alert("Failed to save product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-12 pb-20">
            {/* Basic Info */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="mb-6 text-xl font-bold text-white">Basic Information</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Slug</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-slate-400">Tagline</label>
                        <input
                            type="text"
                            name="tagline"
                            value={formData.tagline}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        >
                            <option value="live">Live</option>
                            <option value="coming-soon">Coming Soon</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="mb-6 text-xl font-bold text-white">Descriptions</h2>
                <div className="space-y-6">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Short Description</label>
                        <textarea
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            required
                            rows={3}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Long Description (Paragraphs)</label>
                        <div className="space-y-3">
                            {formData.longDescription?.map((para, index) => (
                                <div key={index} className="flex gap-2">
                                    <textarea
                                        value={para}
                                        onChange={(e) => handleArrayChange(index, e.target.value, "longDescription")}
                                        rows={2}
                                        className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeArrayItem(index, "longDescription")}
                                        className="rounded-xl bg-red-500/10 px-3 text-red-400 transition hover:bg-red-500/20"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => addArrayItem("longDescription")}
                                className="text-sm text-cyan-400 hover:text-cyan-300"
                            >
                                + Add Paragraph
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="mb-6 text-xl font-bold text-white">Images & Assets</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Icon URL</label>
                        <input
                            type="text"
                            name="icon"
                            value={formData.icon}
                            onChange={handleChange}
                            placeholder="/products/name-icon.svg"
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Hero Image URL</label>
                        <input
                            type="text"
                            name="heroImage"
                            value={formData.heroImage}
                            onChange={handleChange}
                            placeholder="/products/name-hero.svg"
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <label className="mb-4 block text-sm font-medium text-slate-400">Screenshots</label>
                    <div className="space-y-4">
                        {formData.screenshots?.map((screenshot, index) => (
                            <div key={index} className="grid gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 md:grid-cols-3">
                                <input
                                    type="text"
                                    placeholder="Image Source URL"
                                    value={screenshot.src}
                                    onChange={(e) => handleObjectArrayChange(index, "src", e.target.value, "screenshots")}
                                    className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Alt Text"
                                    value={screenshot.alt}
                                    onChange={(e) => handleObjectArrayChange(index, "alt", e.target.value, "screenshots")}
                                    className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
                                />
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Caption"
                                        value={screenshot.caption}
                                        onChange={(e) => handleObjectArrayChange(index, "caption", e.target.value, "screenshots")}
                                        className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeObjectArrayItem(index, "screenshots")}
                                        className="rounded-lg bg-red-500/10 px-3 text-red-400"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addObjectArrayItem("screenshots", { src: "", alt: "", caption: "" })}
                            className="text-sm text-cyan-400 hover:text-cyan-300"
                        >
                            + Add Screenshot
                        </button>
                    </div>
                </div>
            </div>

            {/* Features & FAQ */}
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                    <h2 className="mb-6 text-xl font-bold text-white">Features</h2>
                    <div className="space-y-4">
                        {formData.features?.map((feature, index) => (
                            <div key={index} className="space-y-2 rounded-2xl border border-white/5 bg-white/5 p-4">
                                <div className="flex justify-between">
                                    <input
                                        type="text"
                                        placeholder="Feature Title"
                                        value={feature.title}
                                        onChange={(e) => handleObjectArrayChange(index, "title", e.target.value, "features")}
                                        className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeObjectArrayItem(index, "features")}
                                        className="ml-2 text-red-400"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <textarea
                                    placeholder="Feature Description"
                                    value={feature.description}
                                    onChange={(e) => handleObjectArrayChange(index, "description", e.target.value, "features")}
                                    rows={2}
                                    className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addObjectArrayItem("features", { title: "", description: "" })}
                            className="text-sm text-cyan-400 hover:text-cyan-300"
                        >
                            + Add Feature
                        </button>
                    </div>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                    <h2 className="mb-6 text-xl font-bold text-white">FAQ</h2>
                    <div className="space-y-4">
                        {formData.faq?.map((faq, index) => (
                            <div key={index} className="space-y-2 rounded-2xl border border-white/5 bg-white/5 p-4">
                                <div className="flex justify-between">
                                    <input
                                        type="text"
                                        placeholder="Question"
                                        value={faq.question}
                                        onChange={(e) => handleObjectArrayChange(index, "question", e.target.value, "faq")}
                                        className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeObjectArrayItem(index, "faq")}
                                        className="ml-2 text-red-400"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <textarea
                                    placeholder="Answer"
                                    value={faq.answer}
                                    onChange={(e) => handleObjectArrayChange(index, "answer", e.target.value, "faq")}
                                    rows={2}
                                    className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addObjectArrayItem("faq", { question: "", answer: "" })}
                            className="text-sm text-cyan-400 hover:text-cyan-300"
                        >
                            + Add FAQ
                        </button>
                    </div>
                </div>
            </div>

            {/* SEO & Extra */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="mb-6 text-xl font-bold text-white">SEO & Metadata</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">SEO Title</label>
                        <input
                            type="text"
                            name="seoTitle"
                            value={formData.seoTitle}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-400">Release Date/Year</label>
                        <input
                            type="text"
                            name="releaseDate"
                            value={formData.releaseDate}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-slate-400">SEO Description</label>
                        <textarea
                            name="seoDescription"
                            value={formData.seoDescription}
                            onChange={handleChange}
                            rows={2}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                        />
                    </div>
                </div>
                
                <div className="mt-6 flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="featured"
                        name="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                        className="h-5 w-5 rounded border-white/10 bg-slate-900 text-cyan-500"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-slate-400">Featured Product (Show on Homepage)</label>
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="rounded-xl border border-white/10 px-8 py-4 font-medium text-white transition hover:bg-white/5"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl bg-cyan-500 px-12 py-4 font-bold text-white transition hover:bg-cyan-600 disabled:opacity-50"
                >
                    {loading ? "Saving..." : isEditing ? "Update Product" : "Create Product"}
                </button>
            </div>
        </form>
    );
}
