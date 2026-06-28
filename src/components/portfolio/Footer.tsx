import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", value: "mfathulilhamm@gmail.com", href: "mailto:mfathulilhamm@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "m-fathul-ilham", href: "https://www.linkedin.com/in/m-fathul-ilham-93882a152/" },
  { icon: Github, label: "GitHub", value: "fathulxxi", href: "https://github.com/fathulxxi" },
];

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="rounded-[2rem] border border-border bg-gradient-to-br from-card via-card to-accent/60 p-8 shadow-[var(--shadow-lift)] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Get in touch
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Have an idea worth building? Let's make it happen. ✨
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          I'm always open to a good conversation about products, AI-native workflows, or
          interesting freelance work.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {socials.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <span className="block truncate text-sm font-semibold text-foreground">
                  {value}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} M. Fathul Ilham. Designed & built with care.
      </p>
    </footer>
  );
}
