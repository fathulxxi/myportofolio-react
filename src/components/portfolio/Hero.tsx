import { ArrowRight, MapPin, Monitor, Zap, Sparkles } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-20 h-72 w-72 rounded-full bg-accent/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* Left: text content */}
          <div className="flex flex-col items-start">

            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground shadow-[var(--shadow-soft)]">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Hello, I'm M. Fathul Ilham
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-foreground">Full-Stack Web</span>
              <span className="block text-primary">Developer.</span>
            </h1>

            {/* Tagline */}
            <p className="mt-4 flex items-center gap-1.5 text-sm italic text-primary sm:text-base">
              <span>—</span>
              <span>Building Digital Experiences</span>
              <span aria-hidden>♡</span>
            </p>

            {/* Description */}
            <p className="mt-5 max-w-[440px] text-base leading-relaxed text-muted-foreground">
              I specialize in building performant, modern web applications using
              React, TypeScript, and Next.js. I'm also deeply passionate about
              AI-native development.
            </p>

            {/* Location */}
            <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
              <MapPin size={13} className="text-primary" />
              Indonesia
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>

            {/* Feature badges */}
            {/* <div className="mt-10 flex flex-wrap gap-3">
              {(
                [
                  { Icon: Monitor, label: "Modern", sub: "Stack" },
                  { Icon: Zap, label: "Fast &", sub: "Performant" },
                  { Icon: Sparkles, label: "AI", sub: "Native" },
                ] as const
              ).map(({ Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card/70 px-3.5 py-2.5 shadow-[var(--shadow-soft)]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                    <Icon size={15} />
                  </span>
                  <div className="leading-snug">
                    <p className="text-xs font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: hero image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="h-105 w-105 sm:h-125 sm:w-125 overflow-hidden rounded-full border-4 border-primary/30">
              <img
                src={heroPhoto}
                alt="M. Fathul Ilham"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
