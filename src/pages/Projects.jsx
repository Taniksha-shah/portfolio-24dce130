import { useState, useEffect, useCallback } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const GITHUB_USERNAME = 'Taniksha-shah';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
      );

      if (!response.ok) {
        throw new Error(`GitHub API responded with status ${response.status}`);
      }

      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch repositories.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <section className="page-section projects-page">
      <h2>student@portfolio:~$ curl api.github.com/users/{GITHUB_USERNAME}/repos</h2>

      {loading && <LoadingSpinner label="fetching repositories..." />}

      {!loading && error && (
        <ErrorMessage message={error} onRetry={fetchRepos} />
      )}

      {!loading && !error && repos.length === 0 && (
        <p className="empty-state">No repositories found.</p>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="projects-grid">
          {repos.map((repo) => (
            <article className="project-card" key={repo.id}>
                <h3>{repo.name}/</h3>
                <p>{repo.description || 'No description provided.'}</p>
                <div className="project-meta">
                {repo.language && (
                    <span className="tech-tag">{repo.language}</span>
                )}
                <span className="tech-tag">★ {repo.stargazers_count}</span>
                </div>
                <a
                className="repo-link"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                >
                {repo.html_url}
                </a>
            </article>
            ))}
        </div>
      )}
    </section>
  );
}

export default Projects;