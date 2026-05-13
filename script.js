document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    // Theme Toggle Logic
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Reveal on Scroll Animation
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Adding reveal animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .reveal.active {
        opacity: 1;
        transform: translateY(0);
    }
    .hero-text .reveal:nth-child(1) { transition-delay: 0.1s; }
    .hero-text .reveal:nth-child(2) { transition-delay: 0.3s; }
    .hero-text .reveal:nth-child(3) { transition-delay: 0.5s; }
    .hero-text .reveal:nth-child(4) { transition-delay: 0.7s; }
    .hero-image-wrapper.reveal { transition-delay: 0.4s; }
`;
document.head.appendChild(style);
