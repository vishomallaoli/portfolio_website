import BlurBackground from "./components/BlurBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contacts";

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto
      relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Testimonial />
        <Contact />
      </main>
    </>
  )
}

export default App

