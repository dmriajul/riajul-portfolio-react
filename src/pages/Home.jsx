import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Certifications from "../components/home/Certifications";
import Projects from "../components/home/Projects";
import Services from "../components/home/Services";
import Experience from "../components/home/Experience";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;