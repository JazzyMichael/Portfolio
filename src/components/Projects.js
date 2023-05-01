import { projects } from "../constants";

function Projects() {
  const openProject = (link) => window.open(link, "_blank");

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-card aos-init"
            data-aos={project.animation}
            onClick={() => openProject(project.link)}
          >
            <img
              src={`projects/${project.logo}`}
              alt={project.title + " Logo"}
              style={{ maxWidth: "90%", maxHeight: "60%", borderRadius: "4px" }}
            />
            <p>{project.title}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
