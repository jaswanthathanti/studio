import { motion } from "framer-motion";

export default function AnimatedSection({
  id,
  title,
  children,
  darkMode,
  active,
}) {
  return (
    <section
      id={id}
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="container"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          animate={{
            boxShadow: active
              ? "0 0 25px rgba(0,123,255,0.7)"
              : "0 0 15px rgba(0,0,0,0.1)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`p-4 rounded ${active ? "border border-primary" : ""}`}
          style={{ backgroundColor: darkMode ? "#222" : "#fff" }}
        >
          <h2 className="mb-4">{title}</h2>
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
