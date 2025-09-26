import React, { useContext, useState } from "react";
import { MyContext } from "../../context/ContextProvider"; // adjust path
import "./projectView.css";

export default function ProjectView() {
  const { selectedProject, setSelectedProject } = useContext(MyContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!selectedProject) return null; // safety

  const images = selectedProject.images;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="projectView">
      <div className="projectviewContent">
        {/* Slideshow Section */}
        <div className="projectviewImage">
          <img
            src={images[currentIndex]}
            alt={`${selectedProject.name} screenshot`}
          />
          <button className="prev" onClick={prevSlide}>
            ◀
          </button>
          <button className="next" onClick={nextSlide}>
            ▶
          </button>
        </div>

        {/* Description Section */}
        <div className="projectviewDescription">
          <h1>{selectedProject.name}</h1>
          <p>{selectedProject.description}</p>

          <div className="buttons">
            <a href={selectedProject.codeLink} target="_blank" rel="noreferrer">
              <button>View Code</button>
            </a>
            <a href={selectedProject.liveLink} target="_blank" rel="noreferrer">
              <button>View Live</button>
            </a>
          </div>

          {/* Close Button */}
          <div className="close">
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
