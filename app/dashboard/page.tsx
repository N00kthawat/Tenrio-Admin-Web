export const metadata = {
  title: "Dashboard",
};

const panels = [
  {
    label: "Orders awaiting action",
    value: "12",
    note: "Placeholder metric for future backend-connected order queues.",
  },
  {
    label: "Refund reviews",
    value: "3",
    note: "Reserved for finance review workflows in later tasks.",
  },
  {
    label: "Provisioning follow-ups",
    value: "5",
    note: "Visual scaffold only. No real provisioning state is implemented.",
  },
] as const;

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brand)]">
          Dashboard
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Admin overview starter
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          This route provides a visual landing point for the future admin
          dashboard. The cards below are static placeholders to prove the route,
          layout, and styling foundation are in place.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {panels.map((panel) => (
          <article
            key={panel.label}
            className="rounded-[1.75rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
          >
            <p className="text-sm font-medium text-slate-500">{panel.label}</p>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              {panel.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {panel.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
