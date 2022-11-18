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
    <div className="h-screen scroll-smooth overflow-x-hidden overflow-y-scroll  bg-myBlack text-white font-amiri scrollbar-track-myBlack/80 scrollbar-white/90 scrollbar-thin">
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
};

export default Home;
