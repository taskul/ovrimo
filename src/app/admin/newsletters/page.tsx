"use client";

import { useEffect, useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Newsletter } from "@/lib/db";

export default function AdminNewsletters() {
    const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNewsletters();
    }, []);

    const fetchNewsletters = async () => {
        const res = await fetch("/api/admin/newsletters");
        if (res.ok) {
            const data = await res.json();
            setNewsletters(data.newsletters);
        }
        setLoading(false);
    };

    const createDraft = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!subject || !content) return;
        const res = await fetch("/api/admin/newsletters", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ subject, content }),
        });
        if (res.ok) {
            setSubject("");
            setContent("");
            fetchNewsletters();
        }
    };

    const sendNewsletter = async (id: string) => {
        if (!confirm("Are you sure you want to send this newsletter to all subscribers?")) return;
        const res = await fetch("/api/admin/newsletters", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, action: "send" }),
        });
        if (res.ok) fetchNewsletters();
    };

    return (
        <SectionShell eyebrow="Admin" title="Newsletters">
            <div className="grid gap-8 lg:grid-cols-2 mt-8">
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Create Draft</h2>
                    <form onSubmit={createDraft} className="space-y-4 rounded-[32px] border border-white/10 bg-white/5 p-6">
                        <div>
                            <label className="text-sm font-medium text-slate-100">Subject</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-slate-100">Content</label>
                            <textarea
                                rows={6}
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                        >
                            Save Draft
                        </button>
                    </form>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Recent Newsletters</h2>
                    <div className="space-y-4">
                        {loading ? (
                            <p>Loading...</p>
                        ) : newsletters.length === 0 ? (
                            <p className="text-slate-400">No newsletters yet.</p>
                        ) : (
                            newsletters.map(nl => (
                                <div key={nl.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold text-white">{nl.subject}</h3>
                                            <p className="text-xs text-slate-400 mt-1">
                                                Created: {new Date(nl.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                        {nl.sentAt ? (
                                            <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400">
                                                Sent {new Date(nl.sentAt).toLocaleDateString()}
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() => sendNewsletter(nl.id)}
                                                className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 hover:bg-blue-500/30"
                                            >
                                                Send Now
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </SectionShell>
    );
}
