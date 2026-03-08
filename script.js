const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray = [];
const numberOfParticles = 180;

/* ==========================
   RESIZE
========================== */

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* ==========================
   CLASSE PARTICULA
========================== */

class Particle {
    constructor(x = null, y = null, isExplosion = false) {

        this.x = x ?? Math.random() * canvas.width;
        this.y = y ?? Math.random() * canvas.height;

        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;

        this.explosion = isExplosion;

        if (this.explosion) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 25 + 1.5;

            this.speedX = Math.cos(angle) * speed;
            this.speedY = Math.sin(angle) * speed;

            this.life = 1;
        } else {
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
        }
    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.explosion) {
            this.speedX *= 0.96;
            this.speedY *= 0.96;
            this.life -= 0.02;
        } else {
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        if (this.explosion) {
            ctx.fillStyle = `rgba(0, 210, 255, ${this.life})`;
        } else {
            ctx.fillStyle = `rgba(0, 210, 255, ${this.opacity})`;
        }

        ctx.fill();
    }
}

/* ==========================
   INICIALIZA FUNDO
========================== */

function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

/* ==========================
   EXPLOSÃO DO BOTÃO
========================== */

function explode(x, y) {
    for (let i = 0; i < 60; i++) {
        particlesArray.push(new Particle(x, y, true));
    }
}

/* ==========================
   CONEXÕES
========================== */

function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {

            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = dx * dx + dy * dy;

            if (distance < 12000) {
                ctx.strokeStyle = "rgba(0, 210, 255, 0.5)";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

/* ==========================
   LOOP PRINCIPAL
========================== */

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.explosion && particle.life <= 0) {
            particlesArray.splice(index, 1);
        }
    });

    connectParticles();
    requestAnimationFrame(animate);
}

/* ==========================
   EVENTO BOTÃO
========================== */

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        explode(x, y);
    });
});

/* ==========================
   START
========================== */

init();
animate();
