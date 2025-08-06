// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the name element specifically
    const nameElement = document.getElementById('name');
    
    // Add the typing class to start the animation
    if (nameElement) {
        // Small delay to ensure smooth animation start
        setTimeout(() => {
            nameElement.classList.add('typing');
        }, 500); // 500ms delay before starting
    }
    
    // Mobile-specific adjustments for typewriter animation
    function adjustForMobile() {
        if (window.innerWidth <= 768) {
            const nameElement = document.getElementById('name');
            if (nameElement) {
                // Ensure the name fits within the viewport but maintains single-line animation
                nameElement.style.maxWidth = '95vw';
                nameElement.style.overflow = 'hidden';
                nameElement.style.whiteSpace = 'nowrap';
            }
        }
    }
    
    // Call on load and resize
    adjustForMobile();
    window.addEventListener('resize', adjustForMobile);
});

// Start background animations immediately
window.addEventListener('load', function() {
    // Force start all background animations
    const natureBackground = document.querySelector('.nature-background');
    if (natureBackground) {
        natureBackground.style.animationPlayState = 'running';
    }
});

// Enhanced scroll animations with stagger effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add stagger delay for grid items
            if (entry.target.classList.contains('grid-card')) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            } else {
                entry.target.classList.add('visible');
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section-title, .grid-card, .project-card, .about-me-text').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Generate additional particles dynamically
function createParticle() {
    const particlesContainer = document.querySelector('.gentle-particles');
    if (particlesContainer) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 25000);
    }
}

// Generate particles periodically
setInterval(createParticle, 4000);

// Generate additional leaves dynamically
function createLeaf() {
    const leavesContainer = document.querySelector('.floating-leaves');
    if (leavesContainer) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        const leafTypes = ['🍃', '🌿', '🍂'];
        leaf.textContent = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        leaf.style.left = Math.random() * 100 + '%';
        leaf.style.animationDuration = (Math.random() * 8 + 15) + 's';
        leaf.style.animationDelay = Math.random() * 3 + 's';
        
        leavesContainer.appendChild(leaf);
        
        // Remove leaf after animation
        setTimeout(() => {
            if (leaf.parentNode) {
                leaf.remove();
            }
        }, 25000);
    }
}

// Generate leaves periodically
setInterval(createLeaf, 6000);

// Generate additional snowflakes dynamically
function createSnowflake() {
    const snowflakesContainer = document.querySelector('.floating-snowflakes');
    if (snowflakesContainer) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        const snowflakeTypes = ['❄️', '❅', '❆'];
        snowflake.textContent = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 10 + 15) + 's';
        snowflake.style.animationDelay = Math.random() * 3 + 's';
        snowflake.style.fontSize = (Math.random() * 0.8 + 1.1) + 'rem';
        snowflake.style.opacity = Math.random() * 0.4 + 0.6;
        
        snowflakesContainer.appendChild(snowflake);
        
        // Remove snowflake after animation
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.remove();
            }
        }, 28000);
    }
}

// Generate snowflakes periodically
setInterval(createSnowflake, 5000);