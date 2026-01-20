// ============================================
// PIXEL ART PORTFOLIO - JAVASCRIPT
// ============================================

// ===== DOM ELEMENTS =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const particlesContainer = document.querySelector('.pixel-particles');

// ===== MOBILE MENU TOGGLE =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScrollTop = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 4px 0 rgba(0, 0, 0, 0.3)';
    }

    lastScrollTop = scrollTop;
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===== PIXEL PARTICLES ANIMATION =====
function createPixelParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 8 + 4; // 4-12px
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 10; // 10-20s
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(160, 160, 160, ${Math.random() * 0.3 + 0.15});
        left: ${startX}px;
        top: -20px;
        box-shadow: 0 0 ${size}px rgba(160, 160, 160, 0.25);
        animation: fall ${duration}s linear ${delay}s infinite;
        image-rendering: pixelated;
    `;

    particlesContainer.appendChild(particle);
}

// Create CSS animation for falling particles
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight + 50}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Generate particles
for (let i = 0; i < 20; i++) {
    createPixelParticle();
}

// ===== VIDEO BACKGROUND CONTROLS =====
const bgVideo = document.getElementById('bgVideo');

// Ensure video plays on mobile devices
bgVideo.addEventListener('loadeddata', () => {
    bgVideo.play().catch(err => {
        console.log('Video autoplay prevented:', err);
    });
});

// Fallback for autoplay restrictions
document.addEventListener('click', () => {
    if (bgVideo.paused) {
        bgVideo.play();
    }
}, { once: true });

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
const navbarHeight = navbar ? navbar.offsetHeight : 70;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            // Recalculate navbar height dynamically in case of resize
            const currentNavHeight = document.getElementById('navbar') ? document.getElementById('navbar').offsetHeight : 70;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - currentNavHeight;

            // Call custom smooth scroll function
            smoothScrollTo(offsetPosition, 1000); // 1000ms duration
        }
    });
});

// Custom Smooth Scroll Function
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        // Easing function: easeInOutCubic
        const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const run = ease(Math.min(timeElapsed / duration, 1));

        window.scrollTo(0, startPosition + (distance * run));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ===== GLITCH TEXT EFFECT (Enhanced) =====
// ===== HERO TEXT TYPING LOOP (Type In/Out) =====
const heroTextElement = document.querySelector('.glitch-text');
// Safe check in case element doesn't exist
if (heroTextElement) {
    const heroFullText = heroTextElement.getAttribute('data-text') || "HALO SAYA KEVIN ARTYA CHRISTIAN";
    let heroCharIndex = 0;
    let isHeroDeleting = false;

    function typeHeroLoop() {
        const currentText = heroFullText;

        if (isHeroDeleting) {
            // Deleting
            heroTextElement.textContent = currentText.substring(0, heroCharIndex - 1);
            heroCharIndex--;
        } else {
            // Typing
            heroTextElement.textContent = currentText.substring(0, heroCharIndex + 1);
            heroCharIndex++;
        }

        // Speed Control
        let typeSpeed = isHeroDeleting ? 50 : 100; // Delete faster than type

        // Logic for Switching States
        if (!isHeroDeleting && heroCharIndex === currentText.length) {
            // Finished typing entire sentence
            typeSpeed = 2000; // Pause at end
            isHeroDeleting = true;
        } else if (isHeroDeleting && heroCharIndex === 0) {
            // Finished deleting
            typeSpeed = 500; // Pause before restarting
            isHeroDeleting = false;
        }

        setTimeout(typeHeroLoop, typeSpeed);
    }

    // Start the loop
    typeHeroLoop();
}

// ===== BUTTON SOUND EFFECTS (Optional pixel sound) =====
const buttons = document.querySelectorAll('.pixel-btn');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    .pixel-btn {
        overflow: hidden;
        position: relative;
    }
`;
document.head.appendChild(rippleStyle);

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load video on scroll into view
const observerOptions = {
    threshold: 0.1
};

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            bgVideo.play();
        } else {
            bgVideo.pause();
        }
    });
}, observerOptions);

videoObserver.observe(bgVideo);


// ===== INITIALIZATION =====
console.log('🎮 Pixel Art Portfolio Loaded!');
console.log('👾 Created by Kevin');

// ===== GAME DIALOG SYSTEM =====
const dialogData = [
    {
        character: "Kevin",
        text: "Sudah tau saya? Yuk kenalan!",
        sprite: "assets/pixel-removebg-preview.png"
    },
    {
        character: "Kevin",
        text: "Halo, nama saya Kevin Artya Christian.Saya adalah mahasiswa Teknik Informatika di Universitas Dian Nuswantoro (UDINUS) dengan ketertarikan pada backend development dan dunia keamanan sistem.",
        sprite: "assets/pixel2-removebg-preview.png"
    },
    {
        character: "Kevin",
        text: "Selain backend development, saya memiliki minat besar pada dunia security. Ketertarikan ini mendorong saya untuk memahami bagaimana sebuah sistem dapat diserang dan bagaimana cara mencegahnya.",
        sprite: "assets/pixel3-removebg-preview.png"
    },
    {
        character: "Kevin AS 'SATPAM'",
        text: "Saya tertarik mempelajari konsep seperti web security, vulnerability (SQL Injection, XSS, CSRF), keamanan API, serta praktik secure coding. Bagi saya, backend bukan hanya soal membuat aplikasi berjalan, tetapi juga memastikan data pengguna terlindungi, sistem tidak mudah dieksploitasi, dan arsitektur dibangun dengan kesadaran keamanan sejak awal..",
        sprite: "assets/pixel4-removebg-preview.png",
        bgImage: "assets/gudangserver.png"
    },
    {
        character: "Kevin",
        text: "Yuk kepoin Project gueh!",
        sprite: "assets/pixel5-removebg-preview.png"
    }
];

let currentDialogIndex = 0;
let isTyping = false;
let typewriterTimeout;

// Dialog Elements
const dialogText = document.getElementById('dialogText');
const characterName = document.getElementById('characterName');
const characterSprite = document.getElementById('characterSprite');
const dialogCounter = document.getElementById('dialogCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const continueIndicator = document.querySelector('.continue-indicator');

// Typewriter Effect
function typeWriter(text, element, speed = 30) {
    return new Promise((resolve) => {
        isTyping = true;
        element.classList.add('typing');
        continueIndicator.classList.add('hidden');

        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                typewriterTimeout = setTimeout(type, speed);
            } else {
                isTyping = false;
                element.classList.remove('typing');
                continueIndicator.classList.remove('hidden');
                resolve();
            }
        }

        type();
    });
}

// Skip typewriter animation
function skipTypewriter() {
    if (isTyping && typewriterTimeout) {
        clearTimeout(typewriterTimeout);
        const currentDialog = dialogData[currentDialogIndex];
        dialogText.textContent = currentDialog.text;
        dialogText.classList.remove('typing');
        isTyping = false;
        continueIndicator.classList.remove('hidden');
    }
}

// Show Dialog
async function showDialog(index) {
    if (index < 0 || index >= dialogData.length) return;

    // Clear any existing typing timeout immediately
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    isTyping = false; // Reset status

    currentDialogIndex = index;
    const dialog = dialogData[index];

    // Update character info
    characterName.textContent = dialog.character;

    // Change character sprite with animation
    characterSprite.style.opacity = '0';
    setTimeout(() => {
        characterSprite.src = dialog.sprite;
        characterSprite.style.transition = 'opacity 0.3s ease';
        characterSprite.style.opacity = '1';
    }, 150);

    // Update counter
    dialogCounter.textContent = `${index + 1} / ${dialogData.length}`;

    // Update button states immediately (visual only)
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === dialogData.length - 1;

    // Type dialog text
    await typeWriter(dialog.text, dialogText);
}

// Navigation Buttons - Allow clicking even if typing (it will cancel typing and move)
prevBtn.addEventListener('click', () => {
    if (currentDialogIndex > 0) {
        showDialog(currentDialogIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentDialogIndex < dialogData.length - 1) {
        showDialog(currentDialogIndex + 1);
    }
});

// Click dialog box to skip/continue
if (dialogText) {
    const dialogBox = document.querySelector('.dialog-box');
    dialogBox.addEventListener('click', () => {
        if (isTyping) {
            skipTypewriter();
        } else if (currentDialogIndex < dialogData.length - 1) {
            showDialog(currentDialogIndex + 1);
        }
    });
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    // Only work when about section is visible
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;

    const rect = aboutSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (isTyping) {
                skipTypewriter();
            } else if (currentDialogIndex < dialogData.length - 1) {
                showDialog(currentDialogIndex + 1);
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (!isTyping && currentDialogIndex > 0) {
                showDialog(currentDialogIndex - 1);
            }
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (!isTyping && currentDialogIndex < dialogData.length - 1) {
                showDialog(currentDialogIndex + 1);
            }
        }
    }
});

// Initialize dialog when page loads
let currentBg = 'assets/udinus.png';

window.addEventListener('load', () => {
    // Preload images
    const bg1 = new Image(); bg1.src = 'assets/udinus.png';
    const bg2 = new Image(); bg2.src = 'assets/gudangserver.png';

    if (dialogText) {
        setTimeout(() => {
            showDialog(0);
        }, 500);
    }
});

function showDialog(index) {
    if (index < 0 || index >= dialogData.length) return;

    currentDialogIndex = index;
    const data = dialogData[index];

    // Re-query elements safely inside function
    const characterName = document.getElementById('characterName');
    const characterSprite = document.getElementById('characterSprite');
    const dialogCounter = document.getElementById('dialogCounter');
    const dialogText = document.getElementById('dialogText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!characterName || !characterSprite || !dialogText) return;

    // Update Text & Character
    characterName.textContent = data.character;
    characterSprite.src = data.sprite;
    if (dialogCounter) dialogCounter.textContent = `${index + 1} / ${dialogData.length}`;

    // Typewriter effect - PASS ELEMENT!
    typeWriter(data.text, dialogText);

    // Update Button States
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === dialogData.length - 1;

    // === BACKGROUND CHANGE LOGIC WITH GLITCH ===
    const targetBg = data.bgImage || 'assets/udinus.png';
    const aboutSection = document.querySelector('.about-section');

    if (currentBg !== targetBg) {
        currentBg = targetBg;

        // 1. Add Glitch Class
        aboutSection.classList.add('bg-glitch-active');

        // 2. Change Image after short delay (mid-glitch)
        setTimeout(() => {
            aboutSection.style.backgroundImage = `url('${targetBg}')`;
        }, 200);

        // 3. Remove Glitch Class
        setTimeout(() => {
            aboutSection.classList.remove('bg-glitch-active');
        }, 600);
    }
}

// ============================================
// CONTACT FORM HANDLING
// Form submission with pixel art feedback
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would normally send the data to a server
        // For now, we'll show a pixel art success message

        showSuccessMessage();

        // Reset form
        contactForm.reset();
    });
}

function showSuccessMessage() {
    // Create success message overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-card);
        border: 6px solid var(--text-light);
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.8);
        padding: 3rem;
        z-index: 9999;
        animation: fadeInUp 0.5s ease-out;
    `;

    overlay.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">✉️</div>
            <h3 style="font-family: 'Press Start 2P', cursive; font-size: 1.2rem; color: var(--primary-color); margin-bottom: 1rem; text-shadow: 2px 2px 0 #000;">MESSAGE SENT!</h3>
            <p style="font-family: 'Press Start 2P', cursive; font-size: 0.7rem; color: var(--text-light); margin-bottom: 2rem; max-width: 300px;">Thank you for contacting me! I'll get back to you soon.</p>
            <button id="closeSuccessMsg" style="font-family: 'Press Start 2P', cursive; font-size: 0.7rem; padding: 1rem 2rem; background: var(--primary-color); color: var(--text-light); border: 4px solid var(--text-light); cursor: pointer; box-shadow: 4px 4px 0 rgba(0,0,0,0.5);">OK!</button>
        </div>
    `;

    document.body.appendChild(overlay);

    // Close button handler
    document.getElementById('closeSuccessMsg').addEventListener('click', () => {
        overlay.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    });

    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(overlay)) {
            overlay.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 300);
        }
    }, 5000);
}

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
    }
`;
document.head.appendChild(fadeOutStyle);

console.log('📝 Contact form ready!');

// ============================================
// LEVEL SELECTOR SYSTEM - PROJECTS
// Handle level selection and project display
// ============================================

// DOM Elements are retrieved dynamically inside functions to handle dynamic HTML injection
// const levelSelector = ... (Removed global constants)

// Handle level card click (Event Delegation for dynamic elements)
document.addEventListener('click', function (e) {
    const card = e.target.closest('.level-card');
    if (card) {
        const selectedLevel = card.getAttribute('data-level');
        showProjects(selectedLevel);
    }

    // Handle back button (Event Delegation)
    if (e.target.closest('#backToLevels') || e.target.id === 'backToLevels') {
        showLevelSelector();
    }
});

/* Old direct listeners removed to support dynamic HTML injection
if (levelCards.length > 0) {
    levelCards.forEach(card => { ... });
    if (backToLevelsBtn) { ... }
}
*/

function showProjects(level) {
    // Re-query elements just to be safe (Dynamic HTML)
    const levelSelector = document.getElementById('levelSelector');
    const projectsGrid = document.getElementById('projectsGrid');
    const projectSubtitle = document.getElementById('projectSubtitle');
    const levelProjectsContainers = document.querySelectorAll('.level-projects');

    if (!levelSelector || !projectsGrid) {
        console.error("DOM Elements not found! Check HTML structure.");
        return;
    }

    // Add hide animation to level selector
    levelSelector.classList.add('hide');

    // Wait for animation then hide and show projects
    setTimeout(() => {
        levelSelector.style.display = 'none';
        projectsGrid.style.display = 'grid';
        projectsGrid.classList.add('active');

        // Hide all project groups
        levelProjectsContainers.forEach(container => {
            container.style.display = 'none';
        });

        // Show selected level projects
        const selectedProjects = document.querySelector(`.level-projects[data-level="${level}"]`);
        if (selectedProjects) {
            selectedProjects.style.display = 'grid';
        }

        // Update subtitle
        if (projectSubtitle) {
            projectSubtitle.textContent = `Level ${level} - Use ◄ Back to change level`;
        }

    }, 500);
}

function showLevelSelector() {
    const levelSelector = document.getElementById('levelSelector');
    const projectsGrid = document.getElementById('projectsGrid');
    const projectSubtitle = document.getElementById('projectSubtitle');

    if (!levelSelector || !projectsGrid) return;

    // Hide projects grid
    projectsGrid.classList.remove('active');
    projectsGrid.style.display = 'none';

    // Show level selector
    levelSelector.style.display = 'grid';
    levelSelector.classList.remove('hide');

    // Reset subtitle
    if (projectSubtitle) {
        projectSubtitle.textContent = 'Select Your Level';
    }
}

console.log('🎮 Level selector system ready!');

// ============================================
// PROJECT CAROUSEL SYSTEM
// Convert project gr to carousel with animations
// ============================================

function initCarousel(levelContainer) {
    const projects = levelContainer.querySelectorAll('.project-card');

    if (projects.length === 0) return;

    // Wrap cards in carousel structure
    const wrapper = document.createElement('div');
    wrapper.className = 'carousel-wrapper';

    const track = document.createElement('div');
    track.className = 'carousel-track';

    // Move all project cards to track
    projects.forEach(card => {
        track.appendChild(card);
    });

    wrapper.appendChild(track);
    levelContainer.innerHTML = '';
    levelContainer.appendChild(wrapper);

    // Add navigation
    const nav = document.createElement('div');
    nav.className = 'carousel-nav';
    nav.innerHTML = `
        <button class="carousel-arrow prev-arrow">◄</button>
        <button class="carousel-arrow next-arrow">►</button>
    `;
    wrapper.appendChild(nav);

    // Add dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    projects.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });
    levelContainer.appendChild(dotsContainer);

    // Add counter
    const counter = document.createElement('div');
    counter.className = 'carousel-counter';
    counter.innerHTML = `<span class="current">1</span> / ${projects.length}`;
    levelContainer.appendChild(counter);

    // Carousel state
    let currentIndex = 0;
    const totalProjects = projects.length;

    // Set initial active card
    projects[0].classList.add('active');

    // Update carousel
    function updateCarousel(animate = true) {
        if (!projects[0]) return;

        // Calculate dimensions using getBoundingClientRect for better precision
        const wrapperRect = wrapper.getBoundingClientRect();
        const cardRect = projects[0].getBoundingClientRect();

        const wrapperWidth = wrapperRect.width;
        // Use fixed card width if rect is 0 (hidden), e.g. 380px from CSS and gap 32px
        const cardWidth = cardRect.width || 380;
        const gap = 32;

        // Calculate offset to center the ACTIVE card
        // Formula: (WrapperCenter) - (CardHalf) - (ActiveCardStartPos)
        // ActiveCardStartPos = Index * (Width + Gap)

        const centerOffset = (wrapperWidth / 2) - (cardWidth / 2);
        const activeCardPosition = currentIndex * (cardWidth + gap);
        const offset = centerOffset - activeCardPosition;

        if (animate) {
            track.style.transition = 'transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)';
        } else {
            track.style.transition = 'none';
        }

        track.style.transform = `translateX(${offset}px)`;

        // Update active states and z-index for depth effect
        projects.forEach((card, index) => {
            const isActive = index === currentIndex;
            card.classList.toggle('active', isActive);
            card.style.zIndex = isActive ? '10' : '1';
        });

        // Update dots
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Update counter
        counter.innerHTML = `<span class="current">${currentIndex + 1}</span> / ${totalProjects}`;

        // Update arrows
        const prevArrow = nav.querySelector('.prev-arrow');
        const nextArrow = nav.querySelector('.next-arrow');
        prevArrow.classList.toggle('disabled', currentIndex === 0);
        nextArrow.classList.toggle('disabled', currentIndex === totalProjects - 1);
    }

    // Next slide
    function nextSlide() {
        if (currentIndex < totalProjects - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    // Previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    // Go to specific slide
    function goToSlide(index) {
        if (index >= 0 && index < totalProjects) {
            currentIndex = index;
            updateCarousel();
        }
    }

    // Event listeners
    nav.querySelector('.prev-arrow').addEventListener('click', prevSlide);
    nav.querySelector('.next-arrow').addEventListener('click', nextSlide);

    // Dot navigation
    dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.index));
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (levelContainer.style.display === 'none') return;

        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    wrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }

    // Initial update
    updateCarousel(false);

    // Update on window resize
    window.addEventListener('resize', () => updateCarousel(false));
}

// Initialize carousels when level is shown
const originalShowProjects = showProjects;
window.showProjects = function (level) {
    originalShowProjects(level);

    // Wait for zoom animation (500ms) + buffer to ensure layout is stable
    setTimeout(() => {
        const activeLevel = document.querySelector(`.level-projects[data-level="${level}"]`);
        if (activeLevel && !activeLevel.querySelector('.carousel-wrapper')) {
            initCarousel(activeLevel);
        } else if (activeLevel) {
            // If carousel exists, force update to fix layout
            const arrow = activeLevel.querySelector('.next-arrow'); // trigger update via fake resize or finding wrapper
            const wrapper = activeLevel.querySelector('.carousel-wrapper');
            // We can't access updateCarousel directly as it is scoped, but resize triggers it.
            window.dispatchEvent(new Event('resize'));
        }
    }, 600); // 600ms > 500ms animation duration
};

console.log('🎠 Carousel system ready!');
