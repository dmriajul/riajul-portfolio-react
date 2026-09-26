import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SkillsTicker from "../components/home/SkillsTicker";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Certifications from "../components/home/Certifications";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";
import GrowthFramework from "../components/home/GrowthFramework";
import Experience from "../components/home/Experience";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  useEffect(() => {
    document.title =
      "Khandokar Riajul Islam | Performance Marketing Specialist & Social Media Manager | Meta Ads, Google Ads & SMM";

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://portfolio.riajultech.com/");
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SkillsTicker />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Services />
        <GrowthFramework />
        <Experience />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
