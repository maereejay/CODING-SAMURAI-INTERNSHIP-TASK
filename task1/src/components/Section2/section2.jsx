import ProjectView from "./projectView";
import "./section2.css";

export default function Section2() {
  return (
    <div className="section2">
      <h2>Projects</h2>
      <div className="projectsContainer">
        <div className="projects">
          <div className="project">
            <div className="image"></div>
            <h3>My Portfolio</h3>
          </div>
          <div className="project">
            <div className="image"></div>
            <h3>My Portfolio</h3>
          </div>
          <div className="project">
            <div className="image"></div>
            <h3>My Portfolio</h3>
          </div>
          <div className="project">
            <div className="image"></div>
            <h3>My Portfolio</h3>
          </div>
          <div className="project">
            <div className="image"></div>
            <h3>My Portfolio</h3>
          </div>
          <div className="project">
            <div className="image"></div>
            <h3>My Portfolio</h3>
          </div>
          <div className="project">
            <div className="image"></div>
            <h3>My Portfolio</h3>
          </div>
        </div>
      </div>

      <div className="projectviewSection hide">
        <ProjectView />
      </div>
    </div>
  );
}
