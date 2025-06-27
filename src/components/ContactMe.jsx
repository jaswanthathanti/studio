import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  // FaGlobe,
} from "react-icons/fa";

export default function ContactMe({ darkMode }) {
  const items = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "ADDRESS",
      detail: "Ongole, India",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "CONTACT NUMBER",
      detail: "+91-9440427791",
    },
    {
      icon: <FaPaperPlane size={24} />,
      title: "EMAIL ADDRESS",
      detail: "athantichandu@gmail.com",
    },
    // {
    //   icon: <FaGlobe size={24} />,
    //   title: "DOWNLOAD RESUME",
    //   detail:
    //     "https://drive.google.com/file/d/1p2fOZaJrb3-O4hYLQPwHfyTmiySFOgMre/view?usp=sharing",
    // },
  ];

  return (
    <section
      id="contact"
      className={`py-5 ${
        darkMode ? "bg-black text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="mb-5 text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Below are the details to reach out to me!
        </motion.p>

        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="d-flex flex-column align-items-center gap-2">
                <div
                  className="rounded-circle bg-dark-subtle p-3 mb-2"
                  style={{ backgroundColor: darkMode ? "#111" : "#ddd" }}
                >
                  <span className="text-warning">{item.icon}</span>
                </div>
                <h6 className="fw-bold text-uppercase">{item.title}</h6>
                <p
                  className="small mb-0 text-break"
                  style={{ wordWrap: "break-word" }}
                >
                  {item.title === "DOWNLOAD RESUME" ? (
                    <a
                      href={item.detail}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-warning"
                    >
                      View Resume
                    </a>
                  ) : (
                    item.detail
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
