// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const parallaxBg = document.querySelector('.parallax-bg');
const sections = document.querySelectorAll('section');
const backToTop = document.querySelector('.back-to-top');
const navItems = document.querySelectorAll('.nav-links li a');
const cube = document.querySelector('.cube');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Header shadow on scroll
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Parallax background effect
    parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    
    // Show or hide back to top button
    if (scrollY > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
    
    // Animate sections on scroll
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 300;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        if (scrollY > sectionTop && scrollY < sectionBottom) {
            section.classList.add('active');
            
            // Highlight active navigation item
            navItems.forEach(item => {
                const href = item.getAttribute('href').substring(1);
                if (href === section.id) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });
});

// Add reactive hover effects to cube animation
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;
    
    if (cube) {
        cube.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[type="text"]:nth-of-type(2)').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simulate form submission
        console.log('Form submitted with:', { name, email, subject, message });
        
        // Reset form and show success message (in a real app you would send this data to a server)
        contactForm.reset();
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Thank you for your message! I will get back to you soon.';
        contactForm.appendChild(successMsg);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    });
}

// Apply smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add CSS class to animate elements when they come into view
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all cards and section titles
    document.querySelectorAll('.skill-card, .project-card, .floating-card, .section-title').forEach(el => {
        observer.observe(el);
        // Add initial class for CSS transitions
        el.classList.add('observe');
    });
};

// Initialize on page load
window.addEventListener('load', () => {
    // Simulate loading screen
    document.body.classList.add('loaded');
    
    // Initialize animations
    observeElements();
    
    // Additional CSS for observed elements
    const style = document.createElement('style');
    style.textContent = `
        .observe {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .in-view {
            opacity: 1;
            transform: translateY(0);
        }
        
        .success-message {
            background-color: rgba(108, 99, 255, 0.1);
            color: var(--primary-color);
            padding: 1rem;
            border-radius: 5px;
            margin-top: 1rem;
            text-align: center;
            animation: fadeIn 0.3s ease-out;
        }
        
        .back-to-top {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
        }
        
        .nav-links a.active {
            color: var(--primary-color);
        }
        
        .nav-links a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});

// Add dynamic year to the footer copyright text
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const year = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', year);
    }
}); 
