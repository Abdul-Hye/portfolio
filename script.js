const username = "Abdul-Hye";
const repoList = document.getElementById("repo-list");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    repoList.innerHTML = "";
    data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .forEach(repo => {
        const div = document.createElement("div");
        div.className = "repo";
        div.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description"}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
        `;
        repoList.appendChild(div);
      });
  })
  .catch(() => {
    repoList.innerHTML = "Failed to load projects.";
  });
