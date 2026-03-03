import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />

      <div className="pt-2">
        <Hero />

        <div className="space-y-24 pb-24">
          <section id="about" className="scroll-mt-32">
            <Experience />
          </section>

          <section className="scroll-mt-32">
            <Skills />
          </section>

          <section className="scroll-mt-32">
            <Projects />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
