function Experience() {
  const experience = [
    { company: "Goji Systems", dates: "2018-2019" },
    { company: "GoPuff", dates: "2019-2020" },
    { company: "Consulting", dates: "2020-2022" },
  ];

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
