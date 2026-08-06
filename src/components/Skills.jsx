function Skills({ skills }) {
  return (
    <section className="skills">
      <div className="glass-panel">
        <p className="section-eyebrow">// tech_stack</p>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill} className="skill-chip">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;