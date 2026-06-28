import { Briefcase, Store, Sparkles } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Experience
        </p>
        <h2 id="experience-heading" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Where I've been building things.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
        <div className="hidden md:flex md:flex-col md:items-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Briefcase size={20} />
          </span>
          <span className="mt-2 w-px flex-1 bg-border" aria-hidden />
        </div>

        <article className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:p-9">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Frontend Developer
              </p>
              <h3 className="mt-1 truncate text-xl font-bold text-foreground sm:text-2xl">
                PT. Alfa Rekacipta Kreasi
              </h3>
            </div>
            <span className="shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Jun 2022 — Present
            </span>
          </div>

          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li className="flex gap-3">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                <Store size={14} />
              </span>
              <span>
                Building the{" "}
                <span className="font-semibold text-foreground">AYO SRC ecosystem</span>,
                connecting{" "}
                <span className="font-semibold text-foreground">250,000+ grocery stores</span>
                {" "}across Indonesia into one digital network.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                <Sparkles size={14} />
              </span>
              <span>
                Pioneering{" "}
                <span className="font-semibold text-foreground">
                  AI-assisted development best practices
                </span>{" "}
                inside the team — workflows, prompts, and review patterns that ship faster
                without losing craft.
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
