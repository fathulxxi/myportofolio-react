const groups = [
  { title: "Frontend", items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind"] },
  { title: "Backend & Data", items: ["Firebase", "PostgreSQL", "Node.js"] },
  { title: "AI & Tooling", items: ["Cursor", "Claude", "Gemini"] },
  { title: "Cloud & Testing", items: ["AWS", "Vitest"] },
];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Skills & tools
          </p>
          <h2 id="skills-heading" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The toolkit I reach for every day.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A mix of trusted classics and the AI-native tools that have changed how I build.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-sm font-semibold text-foreground">{g.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
