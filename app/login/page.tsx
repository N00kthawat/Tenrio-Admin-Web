export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-xl rounded-[2rem] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brand)]">
        Admin Access
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        Login placeholder
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        This screen is intentionally non-functional in `TASK-ADM-001`. Real
        authentication will be added later through the backend API once the auth
        contract is defined.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Work email
          </label>
          <input
            id="email"
            type="email"
            placeholder="admin@tenrio.co"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-0"
            disabled
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-0"
            disabled
          />
        </div>

        <button
          type="button"
          className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
          disabled
        >
          Sign in
        </button>
      </form>
    </section>
  );
}
