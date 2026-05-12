"use client";

import { useEffect, useState } from "react";
import { SectionShell } from "@/components/section-shell";

export default function AdminDashboard() {
    const [stats, setStats] = useState({ messages: 0, subscriptions: 0, newsletters: 0, products: 0 });

    useEffect(() => {
        // Basic aggregation
        Promise.all([
            fetch("/api/admin/messages").then(res => res.json()),
            fetch("/api/admin/subscriptions").then(res => res.json()),
            fetch("/api/admin/newsletters").then(res => res.json()),
            fetch("/api/admin/products").then(res => res.json())
        ]).then(([messagesData, subsData, newslettersData, productsData]) => {
            setStats({
                messages: messagesData.messages?.length || 0,
                subscriptions: subsData.subscriptions?.length || 0,
                newsletters: newslettersData.newsletters?.length || 0,
                products: productsData.products?.length || 0,
            });
        });
    }, []);

    return (
        <SectionShell eyebrow="Overview" title="Dashboard">
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Products" count={stats.products} />
                <StatCard title="Contact Messages" count={stats.messages} />
                <StatCard title="Newsletter Subscribers" count={stats.subscriptions} />
                <StatCard title="Newsletters Drafted/Sent" count={stats.newsletters} />
            </div>
        </SectionShell>
    );
}

function StatCard({ title, count }: { title: string; count: number }) {
    return (
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-lg">
            <h3 className="text-sm font-medium uppercase tracking-widest text-slate-400">{title}</h3>
            <p className="mt-4 text-4xl font-bold text-white">{count}</p>
        </div>
    );
}
