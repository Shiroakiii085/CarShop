// script.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial Animation Sequence
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroImg = document.getElementById('hero-img');
    const stats = document.querySelector('.hero-stats');
    
    // Add simple inline styles for JS animation 
    if(heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 0.8s ease-out';
    }
    
    if(heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        heroSubtitle.style.transition = 'all 0.8s ease-out 0.2s';
    }

    if(stats) {
        stats.style.opacity = '0';
        stats.style.transform = 'translateY(30px)';
        stats.style.transition = 'all 0.8s ease-out 0.4s';
    }
    
    if(heroImg) {
        heroImg.style.transition = 'transform 2s ease-out';
    }

    // Trigger animations right after load
    setTimeout(() => {
        if(heroTitle) {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }
        if(heroSubtitle) {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }
        if(stats) {
            stats.style.opacity = '1';
            stats.style.transform = 'translateY(0)';
        }
        if(heroImg) {
            heroImg.style.transform = 'scale(1)';
        }
    }, 100);

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Smooth scrolling for anchor links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all
            document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Like button toggle
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('ph-heart')) {
                icon.classList.replace('ph-heart', 'ph-fill');
                icon.classList.add('ph-heart');
                icon.style.color = 'var(--primary)';
            } else {
                icon.classList.replace('ph-fill', 'ph-heart');
                icon.style.color = '';
            }
        });
    });

    // 5. Filter buttons logic (Mock logic for UI interaction)
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Simulating layout reload
            const grid = document.querySelector('.car-grid');
            grid.style.opacity = '0';
            setTimeout(() => {
                grid.style.opacity = '1';
                grid.style.transition = 'opacity 0.4s ease';
            }, 300);
        });
    });
    // 6. Modal logic
    const openModalBtn = document.getElementById('openModalBtn');
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.querySelector('.close-modal');

    if(openModalBtn && bookingModal && closeModal) {
        openModalBtn.addEventListener('click', () => {
            bookingModal.classList.add('show');
        });

        closeModal.addEventListener('click', () => {
            bookingModal.classList.remove('show');
        });

        // Close when clicking outside of modal content
        window.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                bookingModal.classList.remove('show');
            }
        });
    }

    // 7. Form Next URL dynamically
    const nextInput = document.querySelector('input[name="_next"]');
    if (nextInput) {
        // FormSubmit requires a fully qualified URL for the _next parameter
        // This ensures it dynamically gets the absolute URL of the current page
        nextInput.value = window.location.href;
    }
});
