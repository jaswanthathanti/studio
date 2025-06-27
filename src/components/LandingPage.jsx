import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/img/sony_alpha_a7.jpg";

export default function LandingPage({ darkMode }) {
  const [bgLoaded, setBgLoaded] = useState(false);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setBgLoaded(true);
  }, []);

  const gradientText = {
    background: "linear-gradient(90deg, #00C9FF, #92FE9D)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section
      id="home"
      role="banner"
      aria-label="Landing section with introduction and CTA"
      className={`d-flex align-items-center justify-content-center vh-100 ${
        darkMode ? "bg-dark text-light" : "bg-light text-light"
      }`}
      style={{
        position: "relative",
        backgroundImage: bgLoaded
          ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
        transition: "background-image 0.5s ease-in-out",
        overflow: "hidden",
      }}
    >
      {/* 🔵 Overlay Logo - Responsive on left side
      <motion.img
        src="/logo.png"
        alt="AbiStudio Logo"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="position-absolute"
        style={{
          top: "20px",
          left: "20px",
          width: "clamp(100px, 20vw, 250px)",
          height: "auto",
          zIndex: 10,
        }}
      /> */}

      {/* 🧩 Main Content */}
      <div className="container px-4 px-md-5 text-center">
        {/* Centered Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="d-flex justify-content-center mb-4"
        >
          <img
            src="public/logo.png"
            alt="AbiStudio Logo"
            style={{
              width: "clamp(150px, 30vw, 300px)",
              height: "auto",
            }}
          />
        </motion.div>

        <motion.h1
          className="fw-bold mb-3"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Transform Your Story with <span style={gradientText}>AbiStudio</span>
        </motion.h1>

        <motion.p
          className="lead mb-4"
          style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Welcome to Abistudio – Where Every Frame Captures a Moment of Art.
        </motion.p>

        {/* 🎯 CTA Buttons */}
        <motion.div
          className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.a
            href="#services"
            className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.1,
                    rotateX: 10,
                    rotateY: -10,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  }
            }
            whileTap={{ scale: 0.95 }}
          >
            Services
          </motion.a>

          <motion.a
            href="#contact"
            className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold"
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.1,
                    rotateX: 10,
                    rotateY: 10,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  }
            }
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* 📢 Tagline or Highlight */}
        <div className="small">
          📸 10,000+ Memories Captured | 💯 Creative Excellence | 🌍 Serving
          Worldwide
        </div>
      </div>
    </section>
  );
}
