"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    const navLinks = [
        { href: "/admin", label: "Dashboard" },
        { href: "/admin/messages", label: "Contact Messages" },
        { href: "/admin/subscriptions", label: "Subscriptions" },
        { href: "/admin/newsletters", label: "Newsletters" },
    ];

    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-300">
            <aside className="w-64 border-r border-white/10 bg-slate-900/50 p-6 flex flex-col">
                <div className="mb-8 font-heading text-2xl font-bold text-white">Ovrimo Admin</div>
                <nav className="flex-1 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block rounded-lg px-4 py-2 text-sm transition ${isActive
                                        ? "bg-cyan-500/10 text-cyan-300"
                                        : "hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
                <button
                    onClick={handleLogout}
                    className="mt-8 rounded-lg px-4 py-2 text-sm text-left transition hover:bg-white/5 hover:text-white text-slate-400"
                >
                    Logout
                </button>
            </aside>
            <main className="flex-1 p-8">
                <div className="mx-auto max-w-5xl">
                    {children}
                </div>
            </main>
        </div>
    );
}
