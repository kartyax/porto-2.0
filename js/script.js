const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const particlesContainer = document.querySelector('.pixel-particles');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

let lastScrollTop = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 4px 0 rgba(0, 0, 0, 0.3)';
    }

    lastScrollTop = scrollTop;
});

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

function createPixelParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 8 + 4;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 10;
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

for (let i = 0; i < 20; i++) {
    createPixelParticle();
}

const bgVideo = document.getElementById('bgVideo');

bgVideo.addEventListener('loadeddata', () => {
    bgVideo.play().catch(err => {
        console.log('Video autoplay prevented:', err);
    });
});

document.addEventListener('click', () => {
    if (bgVideo.paused) {
        bgVideo.play();
    }
}, { once: true });

const navbarHeight = navbar ? navbar.offsetHeight : 70;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            const currentNavHeight = document.getElementById('navbar') ? document.getElementById('navbar').offsetHeight : 70;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - currentNavHeight;

            smoothScrollTo(offsetPosition, 1000);
        }
    });
});

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const run = ease(Math.min(timeElapsed / duration, 1));

        window.scrollTo(0, startPosition + (distance * run));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

const heroTextElement = document.querySelector('.glitch-text');

if (heroTextElement) {
    const heroFullText = heroTextElement.getAttribute('data-text') || "HALO SAYA KEVIN ARTYA CHRISTIAN";
    let heroCharIndex = 0;
    let isHeroDeleting = false;

    function typeHeroLoop() {
        const currentText = heroFullText;

        if (isHeroDeleting) {
            heroTextElement.textContent = currentText.substring(0, heroCharIndex - 1);
            heroCharIndex--;
        } else {
            heroTextElement.textContent = currentText.substring(0, heroCharIndex + 1);
            heroCharIndex++;
        }

        let typeSpeed = isHeroDeleting ? 50 : 100;

        if (!isHeroDeleting && heroCharIndex === currentText.length) {
            typeSpeed = 2000;
            isHeroDeleting = true;
        } else if (isHeroDeleting && heroCharIndex === 0) {
            typeSpeed = 500;
            isHeroDeleting = false;
        }

        setTimeout(typeHeroLoop, typeSpeed);
    }

    typeHeroLoop();
}

const buttons = document.querySelectorAll('.pixel-btn');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
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

console.log('🎮 Pixel Art Portfolio Loaded!');
console.log('👾 Created by Kevin');

const dialogData = [
    {
        character: "???????",
        text: "Sudah tau saya belum? Yuk kenalan yukk!",
        sprite: "assets/pixel-removebg-preview.png"
    },
    {
        character: "Kevin AS 'MAHASIGMA'",
        text: "Haloo!, nama saya Kevin Artya Christian.Saya adalah mahasiswa Teknik Informatika di Universitas Dian Nuswantoro (UDINUS) dengan ketertarikan pada backend development dan dunia keamanan sistem.",
        sprite: "assets/pixel2-removebg-preview.png"
    },
    {
        character: "Kevin AS 'MAHASIGMA'",
        text: "Selain backend development, saya memiliki minat besar pada dunia Cyber security. Ketertarikan ini mendorong saya untuk memahami bagaimana sebuah sistem dapat diserang dan bagaimana cara mencegahnya??????.",
        sprite: "assets/pixel3-removebg-preview.png"
    },
    {
        character: "Kevin AS 'BJIRYA(BJORKA)'",
        text: "Saya tertarik mempelajari konsep seperti web security, vulnerability (SQL Injection, XSS, CSRF), keamanan API, serta praktik secure coding.",
        sprite: "assets/hacker.png",
        bgImage: "assets/hackerroom.png"
    },
    {
        character: "Kevin AS 'SATPAM'",
        text: "Bagi saya, backend bukan hanya soal membuat aplikasi berjalan, tetapi juga memastikan data pengguna terlindungi, sistem tidak mudah dieksploitasi, dan arsitektur dibangun dengan kesadaran keamanan sejak awal..",
        sprite: "assets/pixel4-removebg-preview.png",
        bgImage: "assets/gudangserver.png"
    },
    {
        character: "Kevin AS 'MAHASIGMA'",
        text: "Sekian ABOUT GUEH, Yuk kepoin Project gueh!",
        sprite: "assets/pixel5-removebg-preview.png",
        actionBtn: {
            text: "LIHAT PROJECT",
            link: "#projects"
        }
    }
];

let currentDialogIndex = 0;
let isTyping = false;
let typewriterTimeout;

const dialogText = document.getElementById('dialogText');
const characterName = document.getElementById('characterName');
const characterSprite = document.getElementById('characterSprite');
const dialogCounter = document.getElementById('dialogCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const continueIndicator = document.querySelector('.continue-indicator');

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTypingSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.value = 800 + Math.random() * 100;

    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.05);
}

function typeWriter(text, element, speed = 30) {
    return new Promise((resolve) => {
        isTyping = true;

        if (!element) {
            console.error("TypeWriter Error: Element not found!");
            resolve();
            return;
        }

        element.classList.add('typing');
        if (continueIndicator) continueIndicator.classList.add('hidden');

        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);

                if (text.charAt(i) !== ' ') {
                    playTypingSound();
                }

                i++;
                typewriterTimeout = setTimeout(type, speed);
            } else {
                isTyping = false;
                element.classList.remove('typing');
                if (continueIndicator) continueIndicator.classList.remove('hidden');
                resolve();
            }
        }

        type();
    });
}

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

async function showDialog(index) {
    if (index < 0 || index >= dialogData.length) return;

    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    isTyping = false;

    currentDialogIndex = index;
    const dialog = dialogData[index];

    characterName.textContent = dialog.character;

    characterSprite.style.opacity = '0';
    setTimeout(() => {
        characterSprite.src = dialog.sprite;
        characterSprite.style.transition = 'opacity 0.3s ease';
        characterSprite.style.opacity = '1';
    }, 150);

    dialogCounter.textContent = `${index + 1} / ${dialogData.length}`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === dialogData.length - 1;

    await typeWriter(dialog.text, dialogText);
}

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

document.addEventListener('keydown', (e) => {
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

let currentBg = 'assets/udinus.png';

window.addEventListener('load', () => {
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

    const characterName = document.getElementById('characterName');
    const characterSprite = document.getElementById('characterSprite');
    const dialogCounter = document.getElementById('dialogCounter');
    const dialogText = document.getElementById('dialogText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!characterName || !characterSprite || !dialogText) return;

    characterName.textContent = data.character;
    characterSprite.src = data.sprite;
    let ctaBtn = document.getElementById('dialogCtaBtn');
    if (!ctaBtn) {
        ctaBtn = document.createElement('a');
        ctaBtn.id = 'dialogCtaBtn';
        ctaBtn.className = 'dialog-cta-btn';
        if (dialogText && dialogText.parentNode) {
            dialogText.parentNode.appendChild(ctaBtn);
        }
    }

    if (data.actionBtn) {
        ctaBtn.href = data.actionBtn.link;
        ctaBtn.textContent = data.actionBtn.text;
        ctaBtn.style.display = 'inline-block';

        ctaBtn.onclick = function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.getElementById('navbar') ? document.getElementById('navbar').offsetHeight : 70;
                const pos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                smoothScrollTo(pos, 1000);
            }
        };

        ctaBtn.style.opacity = '0';
        setTimeout(() => {
            ctaBtn.style.transition = 'opacity 0.5s ease';
            ctaBtn.style.opacity = '1';
        }, 1000);

    } else {
        ctaBtn.style.display = 'none';
    }

    if (dialogCounter) dialogCounter.textContent = `${index + 1} / ${dialogData.length}`;

    typeWriter(data.text, dialogText);

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === dialogData.length - 1;

    const targetBg = data.bgImage || 'assets/udinus.png';
    const aboutSection = document.querySelector('.about-section');

    if (currentBg !== targetBg) {
        currentBg = targetBg;

        aboutSection.classList.add('bg-glitch-active');

        setTimeout(() => {
            aboutSection.style.backgroundImage = `url('${targetBg}')`;
        }, 200);

        setTimeout(() => {
            aboutSection.classList.remove('bg-glitch-active');
        }, 600);
    }
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        showSuccessMessage();

        contactForm.reset();
    });
}

function showSuccessMessage() {
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

    document.getElementById('closeSuccessMsg').addEventListener('click', () => {
        overlay.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    });

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

document.addEventListener('click', function (e) {
    const card = e.target.closest('.level-card');
    if (card) {
        const selectedLevel = card.getAttribute('data-level');
        showProjects(selectedLevel);
    }

    if (e.target.closest('#backToLevels') || e.target.id === 'backToLevels') {
        showLevelSelector();
    }
});

function showProjects(level) {
    const levelSelector = document.getElementById('levelSelector');
    const projectsGrid = document.getElementById('projectsGrid');
    const projectSubtitle = document.getElementById('projectSubtitle');
    const levelProjectsContainers = document.querySelectorAll('.level-projects');

    if (!levelSelector || !projectsGrid) {
        console.error("DOM Elements not found! Check HTML structure.");
        return;
    }

    levelSelector.classList.add('hide');

    setTimeout(() => {
        levelSelector.style.display = 'none';
        projectsGrid.style.display = 'grid';
        projectsGrid.classList.add('active');

        levelProjectsContainers.forEach(container => {
            container.style.display = 'none';
        });

        const selectedProjects = document.querySelector(`.level-projects[data-level="${level}"]`);
        if (selectedProjects) {
            selectedProjects.style.display = 'grid';
        }

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

    projectsGrid.classList.remove('active');
    projectsGrid.style.display = 'none';

    levelSelector.style.display = 'grid';
    levelSelector.classList.remove('hide');

    if (projectSubtitle) {
        projectSubtitle.textContent = 'Select Your Level';
    }
}

console.log('Level selector system ready!');

function initCarousel(levelContainer) {
    const projects = levelContainer.querySelectorAll('.project-card');

    if (projects.length === 0) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'carousel-wrapper';

    const track = document.createElement('div');
    track.className = 'carousel-track';

    projects.forEach(project => {
        track.appendChild(project.cloneNode(true));
    });

    wrapper.appendChild(track);
    levelContainer.innerHTML = '';
    levelContainer.appendChild(wrapper);
}
