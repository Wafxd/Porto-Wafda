// 1. Custom Cursor
const cursor = document.getElementById('cursor');
const links = document.querySelectorAll('a, .project-card, .tagcloud, .nf-card, button');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.backgroundColor = 'rgba(255, 0, 255, 0.5)';
            cursor.style.boxShadow = '0 0 20px var(--magenta-glow)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = 'var(--cyan-glow)'; 
            cursor.style.boxShadow = '0 0 20px var(--cyan-glow)';
        });
    });
}

// 2. Inisialisasi AOS (Animasi Scroll)
AOS.init({ duration: 800, once: true, easing: 'ease-out-quad', offset: 50 });

// 3. Inisialisasi Swiper (Slider Netflix)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2, 
    spaceBetween: 15,
    loop: true, 
    loopedSlides: 4, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 }
    }
});

// 4. Inisialisasi 3D Skills Sphere (TagCloud)
const myTags = [
    'Python', 'Machine Learning', 'Deep Learning',
    'Data Analyst', 'Pasar Modal', 'Web Developer',
    'Video Editor', 'After Effects', 'VFX',
    'Flask', 'Django', 'NLP', 'BERT',
    'Desktop App', 'Automation'
];
var tagCloud = TagCloud('.content', myTags, {
    radius: window.innerWidth < 768 ? 160 : 280,
    maxSpeed: 'fast', initSpeed: 'fast', direction: 135, keep: true
});

// 5. Inisialisasi VanillaTilt (Efek 3D Card di Layar Lebar)
if (window.innerWidth > 768) {
    VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
        max: 15, speed: 400, glare: true, "max-glare": 0.3
    });
}

// 6. Inisialisasi tsparticles (Background Partikel)
loadParticles(tsParticles);
async function loadParticles(tsParticles) {
    await tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            number: { value: window.innerWidth < 768 ? 30 : 70, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.1, random: true },
            size: { value: 2, random: true },
            move: { enable: true, speed: 1, direction: "none", random: true, straight: false, out_mode: "out" },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.05, width: 1 }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: window.innerWidth > 768, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 0.2 } }, push: { particles_nb: 3 } }
        },
        retina_detect: true
    });
}