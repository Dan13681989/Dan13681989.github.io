// Auto-load GitHub projects
fetch('https://api.github.com/users/Dan13681989/repos?sort=updated&per_page=10')
  .then(response => response.json())
  .then(repos => {
    const projectsGrid = document.getElementById('projects-grid');
    repos.forEach(repo => {
      if (!repo.fork) {
        projectsGrid.innerHTML += `
          <div class="project-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
          </div>
        `;
      }
    });
  });
