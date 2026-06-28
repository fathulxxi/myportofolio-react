import { Sparkles, Code2, Rocket } from "lucide-react";
import mePhoto from "@/assets/me-photo.jpeg";

const highlights = [
  {
    icon: Code2,
    title: "4+ years building",
    body: "Shipping production-grade web apps across startups and enterprise teams.",
  },
  {
    icon: Rocket,
    title: "End-to-end",
    body: "Comfortable wiring up Firebase, Node.js, and modern frontends from scratch.",
  },
  {
    icon: Sparkles,
    title: "AI-native dev",
    body: "Pairing daily with Cursor, Claude, and Gemini to design and ship faster.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-secondary via-accent to-primary/40 shadow-[var(--shadow-lift)]">
            <div className="relative h-full w-full">
              <img
                src={mePhoto}
                alt="Fathul"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-end p-6">
                <div className="rounded-2xl bg-card/80 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-medium text-muted-foreground">Currently Work</p>
                  <p className="text-sm font-semibold text-foreground">As a Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-24 w-24 rounded-3xl bg-primary/30 blur-2xl"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            About me
          </p>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A developer who loves shipping warm, useful products.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I've spent the last{" "}
              <span className="font-semibold text-foreground">4+ years</span> turning ideas
              into real, working web applications — from quick prototypes to platforms used
              by hundreds of thousands of people every day.
            </p>
            <p>
              I'm comfortable building end-to-end with{" "}
              <span className="font-semibold text-foreground">Firebase</span> and{" "}
              <span className="font-semibold text-foreground">Node.js</span> on the back,
              and modern React stacks on the front. Lately, I lean heavily on AI tooling —{" "}
              <span className="font-semibold text-foreground">Cursor</span>,{" "}
              <span className="font-semibold text-foreground">Claude</span>, and{" "}
              <span className="font-semibold text-foreground">Gemini</span> — to design,
              refactor, and ship features at a pace that still feels considered.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <Icon size={18} />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
