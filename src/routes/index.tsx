import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M. Fathul Ilham — Full-Stack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of M. Fathul Ilham, a Full-Stack Web Developer building modern React, TypeScript, and Next.js apps with an AI-native workflow.",
      },
      { property: "og:title", content: "M. Fathul Ilham — Full-Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Full-Stack Web Developer based in Indonesia. React, TypeScript, Next.js, Firebase, and AI-native development.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}
