import Hero from "@/components/Hero";
import WhoIAm from "@/components/WhoIAm";
import ImpactMetrics from "@/components/ImpactMetrics";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <WhoIAm />
      <ImpactMetrics />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
