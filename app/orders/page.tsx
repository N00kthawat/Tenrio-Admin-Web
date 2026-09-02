const orderColumns = [
  "Order",
  "Customer",
  "Plan",
  "Term",
  "Status",
] as const;

const orderRows = [
  ["ORD-1001", "Acme Foods", "Business Basic", "Monthly", "Pending Payment"],
  ["ORD-1002", "Luma Studio", "Business Standard", "Annual", "Paid"],
  ["ORD-1003", "Northwind HR", "Business Basic", "Annual", "Provisioning"],
] as const;

export const metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brand)]">
          Orders
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          Initial order management route
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Static sample rows are included only to show the intended page shape.
          There is no API integration, payment authority, or provisioning logic
          in this task.
        </p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <table className="min-w-full border-collapse">
          <thead className="bg-slate-50">
            <tr>
              {orderColumns.map((column) => (
                <th
                  key={column}
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderRows.map((row) => (
              <tr key={row[0]} className="border-t border-slate-100">
                {row.map((cell) => (
                  <td key={cell} className="px-6 py-4 text-sm text-slate-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
