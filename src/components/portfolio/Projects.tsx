import { ArrowUpRight } from "lucide-react";
import ayoTokoImg from "@/assets/ayo-toko.png";
import myAyoImg from "@/assets/my-ayo.png";
import myHeroImg from "@/assets/my-hero.png";
import spbuManagerImg from "@/assets/spbu-manager.png";
import pidiogengImg from "@/assets/pidiogeng.png";
import tasiImg from "@/assets/tasiaga.png";

const projects = [
  {
    title: "AYO Toko Web",
    type: "POS & Retail Platform",
    image: ayoTokoImg,
    href: "https://drive.google.com/file/d/18vIA_lkv5kAEZnn13E7JY-6wsrI9kdjQ/view?usp=sharing",
  },
  {
    title: "My Ayo",
    type: "Consumer Mobile App",
    image: myAyoImg,
    href: "https://play.google.com/store/apps/details?id=com.pmi.limited.pmiappm05726&hl=id&pli=1",
  },
  {
    title: "My Hero Web",
    type: "CMS Dashboard",
    image: myHeroImg,
    href: "https://drive.google.com/file/d/1Bwq-Gr0Hr00ov8j7z4D_w25G3bhnT1a0/view?usp=drive_link",
  },
  {
    title: "SPBU Manager",
    type: "System management for Gas Station",
    image: spbuManagerImg,
    href: "https://drive.google.com/file/d/1nruCbq16m_ISSsujwLLAxcnDh_sYVnyE/view?usp=sharing",
  },
  {
    title: "Pidiogeng",
    type: "Rent Landing Page",
    image: pidiogengImg,
    href: "https://pidiogeng.com",
  },
  {
    title: "Tasiaga",
    type: "E-commerce Platform",
    image: tasiImg,
    href: "https://tasiaga.store",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Projects
        </p>
        <h2
          id="projects-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          A few things I've shipped recently.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Selected work spanning landing page, e-commerce, etca.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-5"
          >
            <div className="overflow-hidden rounded-2xl bg-muted">
              <img
                src={p.image}
                alt={p.title}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-2 pb-2 pt-5">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold text-foreground sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-1 truncate text-sm text-muted-foreground">
                  {p.type}
                </p>
              </div>
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <ArrowUpRight size={18} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
