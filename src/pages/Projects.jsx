function Projects() {
  const projects = [
    {
      name: "credit-fraud-detection",
      description:
        "Hybrid anomaly detection system combining Isolation Forest, One-Class SVM, LOF, and an Autoencoder with supervised stacking, plus ablation analysis.",
      tech: ["Python", "Scikit-learn", "PyTorch"],
    },
    {
      name: "student-burnout-eda",
      description:
        "EDA on a 37-feature survey dataset examining how AI tool usage correlates with burnout among CS/IT students.",
      tech: ["Pandas", "Matplotlib", "Seaborn"],
    },
    {
      name: "house-price-prediction",
      description:
        "Regression models (Random Forest, Gradient Boosting) on the King County housing dataset with log-transformed targets.",
      tech: ["Scikit-learn", "NumPy"],
    },
    {
      name: "veritas-rag-engine",
      description:
        "RAG-based hallucination-reduction engine using recursive cross-verification and a citation-attribution module.",
      tech: ["Python", "LangChain", "Vector DB"],
    },
  ];

  return (
    <section className="page-section projects-page">
      <h2>student@portfolio:~$ ls -la projects/</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <h3>{project.name}/</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;