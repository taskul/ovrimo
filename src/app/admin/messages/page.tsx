"use client";

import { useEffect, useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { ContactMessage } from "@/lib/db";

export default function AdminMessages() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const res = await fetch("/api/admin/messages");
        if (res.ok) {
            const data = await res.json();
            setMessages(data.messages);
        }
        setLoading(false);
    };

    const deleteMessage = async (id: string) => {
        if (!confirm("Are you sure you want to delete this message?")) return;
        const res = await fetch("/api/admin/messages", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        if (res.ok) fetchMessages();
    };

    return (
        <SectionShell eyebrow="Admin" title="Contact Messages">
            <div className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-300">
                        <thead className="bg-slate-900/50 text-xs uppercase text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Subject</th>
                                <th className="px-6 py-4">Message</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan={6} className="px-6 py-4 text-center">Loading...</td></tr>
                            ) : messages.length === 0 ? (
                                <tr><td colSpan={6} className="px-6 py-4 text-center">No messages found.</td></tr>
                            ) : (
                                messages.map((msg) => (
                                    <tr key={msg.id} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                                        <td className="whitespace-nowrap px-6 py-4">{new Date(msg.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">{msg.name}</td>
                                        <td className="px-6 py-4">{msg.email}</td>
                                        <td className="px-6 py-4 font-medium text-white">{msg.subject}</td>
                                        <td className="max-w-xs truncate px-6 py-4" title={msg.message}>{msg.message}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => deleteMessage(msg.id)}
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
