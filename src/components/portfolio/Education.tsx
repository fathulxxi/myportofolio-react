import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Education
          </p>
          <h2 id="education-heading" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where it started.
          </h2>
        </div>

        <article className="mt-10 rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-9">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
              <GraduationCap size={20} />
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                S.Kom. in Informatics Engineering
              </h3>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                UIN Alauddin Makassar
              </p>
            </div>
            <span className="col-span-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground sm:col-span-1">
              <Award size={12} /> Cum Laude
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
