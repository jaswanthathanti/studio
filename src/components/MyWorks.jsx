import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video1 from "../assets/projects/video1.mp4";
import img1 from "../assets/projects/img1.jpg";
import img2 from "../assets/projects/img2.jpg";
import img3 from "../assets/projects/img3.jpg";

const projects = [
  {
    title: "Urban Exploration",
    video: video1,
    description: "City life captured in vibrant motion.",
    details: "Shot on Sony Alpha, exploring hidden streets of Berlin.",
    mediaList: [video1, img1, img2, img3],
  },
  {
    title: "Nature Wonders",
    video: video1,
    description: "Serene landscapes and natural beauty.",
    details: "Mount Fuji during sunrise.",
    mediaList: [video1, img2, img3, img1],
  },
  {
    title: "Portrait Stories",
    video: video1,
    description: "Expressions and emotions in focus.",
    details: "Natural light portraits with shallow depth.",
    mediaList: [video1, img3, img2, img1],
  },
  {
    title: "Festival Vibes",
    video: video1,
    description: "Colors of celebration frozen in time.",
    details: "Holi festival captured with prime lenses.",
    mediaList: [video1, img1, img3, img2],
  },
];

export default function MyWorks({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section
      id="myworks"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container">
        <h2 className="fw-bold display-5 mb-4 text-center">My Works</h2>
        <p className="lead mb-4 text-center">
          Visual stories crafted with passion.
        </p>

        {/* Grid layout */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {projects.map((project, idx) => (
            <div className="col" key={idx}>
              <div
                className={`card h-100 ${
                  darkMode ? "bg-secondary text-light" : "bg-white text-dark"
                } border-0 shadow`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedProject(project);
                  setSelectedMedia(project.video);
                }}
              >
                {project.video.endsWith(".mp4") ? (
                  <video
                    src={project.video}
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={project.video}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: 1050,
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className={`card ${
                  darkMode ? "bg-dark text-light" : "bg-white text-dark"
                }`}
                style={{ width: "90%", maxWidth: "800px" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedMedia.endsWith(".mp4") ? (
                  <video
                    src={selectedMedia}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                    autoPlay
                    controls
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedMedia}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                    alt={selectedProject.title}
                  />
                )}

                <div className="card-body">
                  <h3 className="card-title">{selectedProject.title}</h3>
                  <p className="card-text">{selectedProject.description}</p>
                  <p className="text-muted">{selectedProject.details}</p>
                </div>

                <div className="d-flex flex-wrap p-2 gap-2 justify-content-center">
                  {selectedProject.mediaList.map((media, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: "80px",
                        height: "60px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border:
                          selectedMedia === media
                            ? "2px solid orange"
                            : "2px solid transparent",
                      }}
                      onClick={() => setSelectedMedia(media)}
                    >
                      {media.endsWith(".mp4") ? (
                        <video
                          src={media}
                          muted
                          loop
                          playsInline
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <img
                          src={media}
                          alt={`thumb-${idx}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="text-center mb-3">
                  <button
                    className="btn btn-warning"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
