import ScrollProgress from "@/components/ScrollProgress";
import ResumePicker from "@/components/ResumePicker";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import VoteLedger from "@/components/VoteLedger";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Finance from "@/components/Finance";
import Toolkit from "@/components/Toolkit";
import Leadership from "@/components/Leadership";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="ambient" aria-hidden />
      <div className="grain" aria-hidden />
      <div className="relative z-10">
        <ScrollProgress />
        <ResumePicker />
        <Nav />
        <main>
          <Hero />
          <Research />
          <VoteLedger caption="Expert vote ledger · 15 pairwise judgements · N = 11" />
          <Experience />
          <Projects />
          <VoteLedger direction="reverse" />
          <Finance />
          <Toolkit />
          <Leadership />
          <Writing />
        </main>
        <Footer />
      </div>
    </>
  );
}
