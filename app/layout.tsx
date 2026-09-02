import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navigation = [
  { href: "/login", label: "Login" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/orders", label: "Orders" },
  { href: "/customers", label: "Customers" },
] as const;

export const metadata: Metadata = {
  title: {
    default: "Tenrio Admin",
    template: "%s | Tenrio Admin",
  },
  description: "Initial Tenrio Admin Web project skeleton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-sand)] text-slate-900 antialiased">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
          <header className="mb-8 rounded-[2rem] border border-slate-200/80 bg-white/80 px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <Link href="/" className="inline-flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-brand)] text-sm font-semibold uppercase tracking-[0.24em] text-white">
                    TA
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-brand)]">
                      Tenrio
                    </p>
                    <h1 className="text-xl font-semibold text-slate-950">
                      Admin Web Skeleton
                    </h1>
                  </div>
                </Link>
                <p className="max-w-2xl text-sm text-slate-600">
                  MVP admin routes for operations, support, and finance
                  workflows. No real authentication or backend integration is
                  implemented in this task.
                </p>
              </div>

              <nav aria-label="Primary" className="flex flex-wrap gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
