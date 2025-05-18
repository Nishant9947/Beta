// script.js
document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i> View Project
                </a>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
});
