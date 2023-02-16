function Projects() {
  const projects = [
    {
      title: "Session Platform",
      logo: "Session-Platform-Logo.png",
      link: "",
      animation: "fade-up-left",
    },
    {
      title: "XTrades",
      logo: "XTrades-Logo.png",
      link: "https://www.xtrades.net/",
      animation: "fade-up",
    },
    {
      title: "Pokemon Cards",
      logo: "Pokecards-Logo.jpeg",
      link: "https://pokecards-app.web.app/",
      animation: "fade-up-right",
    },
    {
      title: "The Art of Cooking Salmon",
      logo: "Salmon-Logo.jpeg",
      link: "https://theartofcookingsalmon.com/",
      animation: "fade-left",
    },
    {
      title: "Essentials Anonymous",
      logo: "Essentials-Anonymous-Logo.jpeg",
      link: "https://essentialsanonymous.com/",
      animation: "zoom-in",
    },
    {
      title: "Carona Balona",
      logo: "Carona-Balona-Logo.jpeg",
      link: "https://caronabalona.com/",
      animation: "fade-right",
    },
    {
      title: "Plebeian Marketplace",
      logo: "Plebeian-Logo.jpeg",
      link: "https://github.com/Jappzy/plebeian-deli",
      animation: "fade-down-left",
    },
    {
      title: "Menu Mash",
      logo: "Menu-Mash-Logo.jpeg",
      link: "https://menumash.app/",
      animation: "fade-down",
    },
    {
      title: "Ownable",
      logo: "Ownable-Logo.png",
      link: "https://www.facebook.com/ownableus/",
      animation: "fade-down-right",
    },
  ];

  const openProject = (link) => window.open(link, "_blank");

  return (
    <div className="projects-section">
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
              style={{ maxWidth: "90%", maxHeight: "70%", borderRadius: "4px" }}
            />
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
