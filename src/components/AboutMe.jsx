import { motion } from "framer-motion";
import satishImg from "../assets/img/satishchand.jpg";

export default function AboutMe({ darkMode }) {
  const skills = [
    { name: "Portrait Photography", percent: 95 },
    { name: "Landscape Photography", percent: 90 },
    { name: "Editing & Retouching", percent: 85 },
    { name: "Studio Lighting", percent: 80 },
    { name: "Creative Direction", percent: 80 },
  ];

  return (
    <section
      id="about"
      className={`py-5 ${
        darkMode ? "bg-black text-white" : "bg-light text-dark"
      }`}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Side */}
          <motion.div
            className="col-md-5 text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={satishImg}
              alt="Athanti Satish Chand"
              className="rounded-full mx-auto mb-3 shadow-lg object-cover"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5 className="fw-bold mb-1">Athanti Satish Chand</h5>
            <p className="mb-1">📸 Professional Photographer</p>
            <p className="mb-1">Experience: 20+ Years</p>
            <p>Location: Ongole, India</p>

            {/* Skills */}
            <h6 className="fw-bold mt-4 mb-2">Skills</h6>
            {skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <small className="d-block mb-1">
                  {skill.name} {skill.percent}%
                </small>
                <div
                  className="progress bg-dark-subtle"
                  style={{ height: "6px" }}
                >
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="col-md-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="fw-bold mb-3">About Me</h2>
            <p className="lead mb-3">
              Hi, I&apos;m <strong>Athanti Satish Chand</strong>, a passionate
              professional photographer specializing in portrait and landscape
              photography. My goal is to tell stories through my lens, capturing
              emotion and authenticity in every frame.
            </p>
            <p>
              My career in the photography industry spans over two decades,
              commencing in 1994. During this time, I have extensively honed my
              skills through collaborations with professional photographers and
              the use of advanced camera systems, with significant work
              undertaken in Ongole and numerous other geographical locations.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                ✅ Master of creative composition and storytelling
              </li>
              <li className="mb-2">
                ✅ Expertise in both studio and natural light environments
              </li>
              <li className="mb-2">
                ✅ Skilled in high-end photo retouching and editing
              </li>
              <li className="mb-2">
                ✅ Dedicated to delivering authentic, impactful photography for
                individuals and brands
              </li>
            </ul>
            <p className="mt-3">
              I am continuously driven by the passion to push creative
              boundaries and create timeless photographs. Let&apos;s work
              together to bring your vision to life! 📷✨
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
