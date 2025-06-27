import { useState, useEffect } from "react";
import CustomNavbar from "./components/CustomNavbar";
import LandingPage from "./components/LandingPage";
import AnimatedSection from "./components/AnimatedSection";
import AboutMe from "./components/Aboutme";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
// import MyWorks from "./components/MyWorks";

const sections = ["home", "about", "services" /*, "myworks"*/, "contact"];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.classList.toggle("bg-dark", darkMode);
    document.body.classList.toggle("text-light", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = "home";
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CustomNavbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        activeSection={activeSection}
      />

      <LandingPage darkMode={darkMode} />

      <AnimatedSection
        id="about"
        title="About Me"
        darkMode={darkMode}
        active={activeSection === "about"}
      >
        <AboutMe />
      </AnimatedSection>

      <AnimatedSection
        id="services"
        title="Services"
        darkMode={darkMode}
        active={activeSection === "services"}
      >
        <Services />
      </AnimatedSection>

      {/* <AnimatedSection
        id="myworks"
        title="MyWorks"
        darkMode={darkMode}
        active={activeSection === "myworks"}
      >
        <MyWorks />
      </AnimatedSection> */}

      <AnimatedSection
        id="contact"
        title="Contact Me"
        darkMode={darkMode}
        active={activeSection === "contact"}
      >
        <ContactMe darkMode={darkMode} />
      </AnimatedSection>

      <Footer darkMode={darkMode} />
    </>
  );
}
