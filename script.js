// Improved Scroll to Top
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced Project Card Animation
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animation = 
                'fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
    projectObserver.observe(card);
});

// Improved Theme Transition
const setTheme = (theme) => {
    document.documentElement.style.setProperty('--transition-time', '0.4s');
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Smooth transition for theme change
    setTimeout(() => {
        document.documentElement.style.setProperty('--transition-time', '0.2s');
    }, 400);
};
