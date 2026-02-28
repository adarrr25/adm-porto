import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-white font-sans selection:bg-[var(--color-primary)] selection:text-black">
      <Navbar />
      <Hero3D />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
