const customers = [
  {
    name: "Acme Foods",
    contact: "Mali S.",
    status: "Active",
    note: "Ready for future account detail and subscription views.",
  },
  {
    name: "Luma Studio",
    contact: "Narin P.",
    status: "Pending",
    note: "Placeholder for onboarding and support workflows.",
  },
  {
    name: "Northwind HR",
    contact: "Ploy T.",
    status: "Needs Review",
    note: "Reserved for future admin follow-up actions.",
  },
] as const;

export const metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brand)]">
          Customers
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Initial customer management route
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          This is a static shell for future customer support and account review
          features. No permissions, filtering, or backend queries are included
          yet.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {customers.map((customer) => (
          <article
            key={customer.name}
            className="rounded-[1.75rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">
                  {customer.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Primary contact: {customer.contact}
                </p>
              </div>
              <span className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                {customer.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {customer.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
