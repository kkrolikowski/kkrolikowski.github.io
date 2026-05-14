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
    const revealElements = document.querySelectorAll('.reveal, .era-header');
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

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.replace('fa-times', 'fa-bars');
        });
    });

    // Timeline Lazy Expansion
    const timelineItems = document.querySelectorAll('.timeline-item, .era-header');
    const itemsToShowInitially = 4; // Show first era and its roles

    // Initially hide items beyond the limit
    timelineItems.forEach((item, index) => {
        if (index >= itemsToShowInitially) {
            item.classList.add('hidden');
        }
    });

    // Observer to trigger expansion when the 4th item is in viewport
    if (timelineItems.length > itemsToShowInitially) {
        const triggerItem = timelineItems[itemsToShowInitially - 1]; 
        
        const timelineObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const hiddenItems = document.querySelectorAll('.timeline-item.hidden, .era-header.hidden');
                    
                    hiddenItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.remove('hidden');
                            item.classList.add('show');
                        }, index * 200); // Back to standard 200ms stagger
                    });

                    // Stop observing once triggered
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // Trigger earlier for smoother flow

        timelineObserver.observe(triggerItem);
    }
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
