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
    <div className="h-screen snap-y snap-mandatory scroll-smooth overflow-x-hidden overflow-y-scroll  bg-myBlack text-white font-amiri scrollbar-track-myBlack/80 scrollbar-white/90 scrollbar-thin">
      <Head>
        <title>Klaudiusz Biegacz</title>
        <meta name="description" content="Klaudiusz Biegacz portfolio page" />
        <link rel="icon" href="/waving.svg" />
      </Head>
      <Navbar />
      <main>
        <Welcome />
        <section className="snap-center snap-always" id="hero">
          <Hero />
        </section>
        <section className="snap-center snap-always" id="about">
          <About />
        </section>
        <section className="snap-center snap-always" id="skills">
          <Skills />
        </section>
        <section className="snap-center snap-always" id="projects">
          <Projects />
        </section>
        <section className="snap-center snap-always" id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
