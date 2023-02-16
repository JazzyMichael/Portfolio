function Skills() {
  const skills = [
    {
      title: "Javascript",
      icon: "devicon-javascript-plain",
      animation: "fade-down-right",
    },
    {
      title: "Typescript",
      icon: "devicon-typescript-plain",
      animation: "fade-down",
    },
    { title: "React", icon: "devicon-react-plain", animation: "flip-left" },
    { title: "NextJS", icon: "devicon-nextjs-plain", animation: "slide-right" },
    {
      title: "Angular",
      icon: "devicon-angularjs-plain",
      animation: "flip-down",
    },
    { title: "Ionic", icon: "devicon-ionic-original", animation: "flip-left" },
    { title: "Vue", icon: "devicon-vuejs-plain", animation: "slide-down" },
    { title: "Svelte", icon: "devicon-svelte-plain", animation: "flip-up" },
    {
      title: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      animation: "flip-right",
    },
    { title: "Node", icon: "devicon-nodejs-plain", animation: "fade-up" },
    {
      title: "Socket.io",
      icon: "devicon-socketio-plain",
      animation: "flip-down",
    },
    {
      title: "C#/.NET",
      icon: "devicon-dotnetcore-plain",
      animation: "fade-up-right",
    },
    {
      title: "Firebase",
      icon: "devicon-firebase-plain",
      animation: "flip-up",
    },
    { title: "Azure", icon: "devicon-azure-plain", animation: "fade-up-left" },
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-card aos-init"
            data-aos={skill.animation}
          >
            <i className={skill.icon}></i>

            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
