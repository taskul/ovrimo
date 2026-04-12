"use client";

import { useEffect, useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Subscription } from "@/lib/db";

export default function AdminSubscriptions() {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [emailInput, setEmailInput] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    const fetchSubscriptions = async () => {
        const res = await fetch("/api/admin/subscriptions");
        if (res.ok) {
            const data = await res.json();
            setSubscriptions(data.subscriptions);
        }
        setLoading(false);
    };

    const addSubscription = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailInput) return;
        const res = await fetch("/api/admin/subscriptions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailInput }),
        });
        if (res.ok) {
            setEmailInput("");
            fetchSubscriptions();
        } else {
            const data = await res.json();
            alert(data.error || "Failed to add subscription");
        }
    };

    const deleteSub = async (id: string) => {
        if (!confirm("Delete this subscription?")) return;
        const res = await fetch("/api/admin/subscriptions", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        if (res.ok) fetchSubscriptions();
    };

    return (
        <SectionShell eyebrow="Admin" title="Subscriptions">
            <form onSubmit={addSubscription} className="mt-8 mb-8 flex items-center gap-4">
                <input
                    type="email"
                    placeholder="New subscriber email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                />
                <button
                    type="submit"
                    className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                    Add Email
                </button>
            </form>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-300">
                        <thead className="bg-slate-900/50 text-xs uppercase text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Date Subscribed</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan={4} className="px-6 py-4 text-center">Loading...</td></tr>
                            ) : subscriptions.length === 0 ? (
                                <tr><td colSpan={4} className="px-6 py-4 text-center">No subscriptions yet.</td></tr>
                            ) : (
                                subscriptions.map((sub) => (
                                    <tr key={sub.id} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                                        <td className="whitespace-nowrap px-6 py-4">{new Date(sub.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 font-medium text-white">{sub.email}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400">
                                                {sub.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => deleteSub(sub.id)}
                                                className="text-amber-400 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </SectionShell>
    );
}
