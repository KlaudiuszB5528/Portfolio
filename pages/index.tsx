import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll  bg-myBlack text-white font-amiri scrollbar-track-myBlack/80 scrollbar-white/90 scrollbar-thin">
      <Head>
        <title>Klaudiusz Biegacz</title>
        <meta name="description" content="Klaudiusz Biegacz portfolio page" />
        <link rel="icon" href="/waving.svg" />
      </Head>
      <Navbar />
      <main>
        <Welcome />
        <section id="hero" className="snap-center snap-always">
          <Hero />
        </section>
        <section id="about" className="snap-center snap-always">
          <About />
        </section>
        <section id="skills" className="snap-center snap-always">
          <Skills />
        </section>
        <section id="projects" className="snap-center snap-always">
          <Projects />
        </section>
        <section id="contact" className="snap-center snap-always">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
