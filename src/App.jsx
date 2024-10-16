import { useEffect } from "react";
import BlurBackground from "./components/BlurBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contacts";

const App = () => {
  useEffect(() => {
    // Adding the chatbot script dynamically
    const script1 = document.createElement("script");
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "sghX5moCjYdb1oSV_mV7Q",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.defer = true;
    script2.setAttribute("chatbotId", "sghX5moCjYdb1oSV_mV7Q");
    script2.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script2);

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
};

export default App;