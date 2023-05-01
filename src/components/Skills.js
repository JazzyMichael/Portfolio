import { skills } from "../constants";

function Skills() {
  return (
    <section className="skills">
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
    </section>
  );
}

export default Skills;
