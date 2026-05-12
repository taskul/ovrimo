"use client";

import { SectionShell } from "@/components/section-shell";
import { ProductForm } from "@/components/admin/product-form";

export default function NewProductPage() {
    return (
        <SectionShell eyebrow="Management" title="Add New Product">
            <div className="mt-8">
                <ProductForm />
            </div>
        </SectionShell>
    );
}
