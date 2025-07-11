// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing portfolio...');
    
    // Initialize all functions with delay to ensure DOM is fully ready
    setTimeout(() => {
        initTypewriter();
        initScrollAnimations();
        initNavigation();
        initSkillBars();
        initContactForm();
        initTooltips();
        initSmoothScroll();
        initScrollReveal();
        initCountingAnimation();
    }, 100);
    
    // Hide loading screen
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.classList.add('hidden');
        }
    }, 1000);
});

// Backup initialization for typewriter if DOM is already loaded
if (document.readyState === 'loading') {
    // DOM is still loading
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Backup typewriter initialization');
        setTimeout(initTypewriter, 200);
    });
} else {
    // DOM has already loaded
    console.log('DOM already loaded, initializing immediately');
    setTimeout(initTypewriter, 100);
}

// Typewriter Effect
function initTypewriter() {
    const typewriterText = document.getElementById('typewriter');
    
    // Check if element exists
    if (!typewriterText) {
        console.error('Typewriter element not found!');
        return;
    }
    
    const roles = [
        'UI/UX Designer',
        'Graphic Designer',
        'Front-End Developer',
        'Creative Professional'
    ];
    
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeoutId = null;
    
    function typeEffect() {
        const currentText = roles[currentRole];
        
        if (!isDeleting) {
            // Typing
            if (currentChar <= currentText.length) {
                typewriterText.textContent = currentText.substring(0, currentChar);
                currentChar++;
                
                if (currentChar > currentText.length) {
                    // Finished typing, wait then start deleting
                    timeoutId = setTimeout(() => {
                        isDeleting = true;
                        typeEffect();
                    }, 2000);
                    return;
                }
            }
        } else {
            // Deleting
            if (currentChar >= 0) {
                typewriterText.textContent = currentText.substring(0, currentChar);
                currentChar--;
                
                if (currentChar < 0) {
                    // Finished deleting, move to next role
                    isDeleting = false;
                    currentRole = (currentRole + 1) % roles.length;
                    currentChar = 0;
                }
            }
        }
        
        // Continue the animation
        const typingSpeed = isDeleting ? 50 : 100;
        timeoutId = setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the typewriter effect
    typeEffect();
    
    // Return cleanup function
    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };
}

// Additional debugging and fallback for typewriter
window.addEventListener('load', function() {
    console.log('Window loaded - checking typewriter element...');
    
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) {
        console.error('Typewriter element still not found after window load!');
        // Try to find it with querySelector as backup
        const backup = document.querySelector('.typewriter-text');
        if (backup) {
            console.log('Found backup element, adding ID...');
            backup.id = 'typewriter';
            setTimeout(initTypewriter, 100);
        }
    } else {
        console.log('Typewriter element found successfully!');
        // Element exists, make sure typewriter is running
        if (!typewriterElement.textContent || typewriterElement.textContent === '') {
            console.log('Typewriter seems not running, reinitializing...');
            setTimeout(initTypewriter, 100);
        }
    }
});

// Manual typewriter test function (for debugging)
function testTypewriter() {
    const element = document.getElementById('typewriter');
    if (element) {
        element.textContent = 'UI/UX Designer';
        console.log('Manual typewriter test successful!');
    } else {
        console.error('Element not found for manual test');
    }
}

// Navigation Functions
function initNavigation() {
    const navbar = document.querySelector('.futuristic-nav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Collapse navbar on link click (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                navbarToggler.click();
            }
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            }
        });
    };
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'active');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// AOS (Animate On Scroll) Initialization
function initScrollReveal() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 100,
            easing: 'ease-in-out',
            once: true
        });
    }
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const inputs = document.querySelectorAll('.futuristic-input');
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // In a real application, you would send the data to a server
        console.log('Form submitted:', { name, email, subject, message });
    });
    
    // Input focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-green)' : '#ff4757'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            closeNotification(notification);
        }
    }, 5000);
}

function closeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.remove();
        }
    }, 300);
}

// Tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (typeof bootstrap !== 'undefined') {
        tooltipElements.forEach(element => {
            new bootstrap.Tooltip(element);
        });
    }
}

// Resume Download
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadResume');
    
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create a dummy PDF download
        const link = document.createElement('a');
        link.href = '#'; // In a real app, this would be the actual resume file
        link.download = 'Sunny_More_Resume.pdf';
        
        // Show notification since we don't have an actual file
        showNotification('Resume download would start here. Add your actual resume file to enable download.', 'info');
        
        // In a real application, you would have:
        // link.href = 'path/to/your/resume.pdf';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    });
});

// Portfolio Modal Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle animation to the clicked item
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
            }, 150);
        });
    });
});

// Particle System for Hero Background (Optional Enhancement)
function createParticles() {
    const heroSection = document.querySelector('.hero-section');
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    heroSection.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: var(--primary-blue);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 5}s linear infinite;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-40px) translateX(-5px); }
            75% { transform: translateY(-20px) translateX(15px); }
            100% { transform: translateY(0) translateX(0); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles on load
document.addEventListener('DOMContentLoaded', function() {
    // Only create particles on larger screens for performance
    if (window.innerWidth > 768) {
        createParticles();
    }
});

// Intersection Observer for Counting Animation
function initCountingAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.getAttribute('data-count'));
                const hasPlus = target.textContent.includes('+');
                animateNumber(target, 0, finalNumber, 2000, hasPlus);
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(number => {
        observer.observe(number);
    });
}

function animateNumber(element, start, end, duration, hasPlus = false) {
    let startTime = null;
    
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = Math.floor(easeOutQuart * (end - start) + start);
        
        element.textContent = currentNumber + (hasPlus ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end + (hasPlus ? '+' : '');
        }
    }
    
    requestAnimationFrame(step);
}

// Initialize counting animation
document.addEventListener('DOMContentLoaded', function() {
    initCountingAnimation();
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
}, 10));

// Social Media Links (Add your actual links here)
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    // Add your actual social media URLs here
    const socialURLs = {
        'fa-linkedin-in': 'https://linkedin.com/in/sunny-more',
        'fa-behance': 'https://behance.net/sunny-more',
        'fa-github': 'https://github.com/sunny-more'
    };
    
    socialLinks.forEach(link => {
        const icon = link.querySelector('i');
        const iconClass = Array.from(icon.classList).find(cls => cls.startsWith('fa-') && cls !== 'fab');
        
        if (socialURLs[iconClass]) {
            link.href = socialURLs[iconClass];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Service Worker Registration (for PWA if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following lines if you want to add PWA functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('ServiceWorker registration successful');
        //     })
        //     .catch(function(err) {
        //         console.log('ServiceWorker registration failed');
        //     });
    });
}
