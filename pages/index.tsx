import About from "../components/About";
import Contact from "../components/Contact";
import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div className="h-screen scroll-smooth overflow-x-hidden bg-myBlack text-white font-amiri scrollbar-track-myBlack/80 scrollbar-white/90 scrollbar-thin root">
      <Head>
        <title>Klaudiusz Biegacz</title>
        <meta
          name="description"
          content="Klaudiusz Biegacz frontend developer portfolio page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Klaudiusz Biegacz" />
        <meta name="copyright" content="Klaudiusz Biegacz" />
        <meta property="og:type" content="portfolio" />
        <meta
          property="og:title"
          content="Klaudiusz Biegacz frontend developer portfolio"
        />
        <meta
          property="og:description"
          content="Klaudiusz Biegacz frontend developer portfolio"
        />
        <link rel="icon" href="/waving.svg" />
      </Head>
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
