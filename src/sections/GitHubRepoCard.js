import { useEffect, useState } from "react";
import "../RepoCard.css"; // <-- import CSS

export default function RepoCard({ owner, repo }) {
  const [r, setR] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then(res => res.json())
      .then(setR);
  }, [owner, repo]);

  if (!r) return null;

  return (
    <div className="repo-card">

      <div className="repo-header">
        <svg className="repo-icon" viewBox="0 0 16 16">
          <path d="M2 2.5A2.5 2.5 0 014.5 0h7A2.5 2.5 0 0114 2.5v11a.5.5 0 01-.757.429L8 10.101l-5.243 3.828A.5.5 0 012 13.5v-11z" />
        </svg>

        <a href={r.html_url} target="_blank" className="repo-title">
          {r.name}
        </a>

        <span className="repo-badge">Public</span>
      </div>

      <p className="repo-description">
        {r.description || "No description provided."}
      </p>

      <div className="repo-footer">
        {r.language && (
          <span className="repo-language">
            <span
              className="repo-lang-dot"
              style={{ backgroundColor: langColor[r.language] || "#8b949e" }}
            />
            {r.language}
          </span>
        )}

        {r.stargazers_count > 0 && (
          <span className="repo-meta">⭐ {r.stargazers_count}</span>
        )}

        {r.forks_count > 0 && (
          <span className="repo-meta">🍴 {r.forks_count}</span>
        )}
      </div>
    </div>
  );
}

const langColor = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Dart: "#00b4ff",
  Python: "#3572a5",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  Go: "#00ADD8",
};