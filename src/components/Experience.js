import { experience } from "../constants";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experience.map((job, i) => (
          <div key={i} className="experience-card">
            {job.company}, {job.dates}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
