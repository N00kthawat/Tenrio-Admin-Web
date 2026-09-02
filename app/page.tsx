import Link from "next/link";

const routes = [
  {
    href: "/login",
    name: "Login",
    description:
      "Placeholder sign-in screen for future backend-authenticated admin access.",
  },
  {
    href: "/dashboard",
    name: "Dashboard",
    description:
      "A starter admin overview with high-level placeholders for operations.",
  },
  {
    href: "/orders",
    name: "Orders",
    description:
      "Initial order management route for future payment and provisioning workflows.",
  },
  {
    href: "/customers",
    name: "Customers",
    description:
      "Initial customer management route for support and account review flows.",
  },
] as const;

export default function HomePage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[2rem] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brand)]">
          Task ADM-001
        </p>
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950">
          The first Tenrio admin shell is ready for route-by-route expansion.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          This scaffold sets up the core frontend stack only: Next.js App
          Router, React, TypeScript strict mode, and Tailwind CSS. It
          intentionally avoids authentication, permissions, API contracts, and
          business logic until those specs exist.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Open dashboard
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            View login route
          </Link>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200/80 bg-[var(--color-brand-soft)] px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <h3 className="text-lg font-semibold text-slate-950">Included routes</h3>
        <div className="mt-6 space-y-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="block rounded-3xl border border-white/70 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-slate-950">
                  {route.name}
                </p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Route
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {route.description}
              </p>
              <p className="mt-3 text-sm font-medium text-[var(--color-brand)]">
                {route.href}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
