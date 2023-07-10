import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Welcome from "../components/Welcome/Welcome";

export default async function Home() {
  return (
    <div className="h-screen scroll-smooth overflow-x-hidden bg-myBlack text-white font-amiri scrollbar-track-myBlack/80 scrollbar-white/90 scrollbar-thin root">
      <Navbar />
      <main>
        <Welcome />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
