/* ==================================================
   0️⃣ VARIÁVEIS
================================================== */
:root {
    --bg-deep: #050a15;
    --primary: #00d2ff;
    --secondary: #3a7bd5;
    --text-main: #f8fafc;
    --text-dim: #dce5fc;

    --glass: rgba(255,255,255,0.06);
    --glass-border: rgba(255,255,255,0.12);

    --glow: 0 0 25px rgba(0,210,255,0.25);
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ==================================================
   1️⃣ RESET
================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg-deep);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
}

/* ==================================================
   2️⃣ FUNDO
================================================== */
body::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image:
        radial-gradient(circle at 20% 30%, rgba(0,210,255,0.15) 2px, transparent 2px),
        radial-gradient(circle at 80% 70%, rgba(58,123,213,0.15) 2px, transparent 2px);
    background-size: 600px 600px;
    pointer-events: none;
    animation: particleMove 120s linear infinite;
    z-index: 0;
}

@keyframes particleMove {
    from { background-position: 0 0; }
    to { background-position: 600px 600px; }
}
/* header 2 */

section h2 {
    text-align: center;
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 40px;
    color: var(--text-main);
    position: relative;
}

section h2::after {
    content: "";
    width: 60px;
    height: 2px;
    background: var(--primary);
    display: block;
    margin: 15px auto 0;
    opacity: 0.6;
}

/* p class lead */
.lead {
    font-size: 1.1rem;
    color: var(--text-dim);
    max-width: 600px;
    margin: 0 auto 30px;
    text-align: center;
}
/* ==================================================
   3️⃣ BASE MOBILE (PADRÃO)
================================================== */
section {
    position: relative;
    padding: 70px 0;
    z-index: 2;
}

.container {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
}

/* HERO */
.hero {
    min-height: 80dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 0;
}

.hero h1 {
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: -1px;
    margin-bottom: 18px;
    background: linear-gradient(to bottom, #fff 30%, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 1rem;
    color: var(--text-dim);
    margin-bottom: 30px;
}

/* BOTÕES */
.botoes {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.hero a {
    width: 100%;
    padding: 16px;
    background: var(--primary);
    color: #000;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    border-radius: 10px;
    transition: var(--transition);
    text-align: center;
}

/* CARDS */
.cards,
.cards-duplos {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 40px;
}

.card {
    background: var(--glass);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    padding: 28px;
    border-radius: 18px;
    transition: var(--transition);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.card h3 {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 12px;
}

.card p,
.card ul li {
    font-size: 0.95rem;
    color: var(--text-dim);
}

.card ul {
    list-style: none;
    padding-left: 0;
}

.card ul li {
    margin-bottom: 10px;
}
/* ==================================================
   ✨ TÍTULOS DE SEÇÃO (H2)
================================================== */

section h2 {
    text-align: center;
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 800;
    letter-spacing: -1px;
    margin-bottom: 20px;
    position: relative;

    background: linear-gradient(
        90deg, 
        #ffffff 0%, 
        var(--primary) 50%, 
        #ffffff 100%
    );
    
    background-size: 300% auto;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: gradientMove 40s ease-in-out infinite;
}

/* Linha decorativa - Suavizada para acompanhar o título */
section h2::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    margin: 18px auto 0;
    border-radius: 10px;
    
    background: linear-gradient(to right, var(--primary), var(--secondary));
    opacity: 0.6; 
}

@keyframes gradientMove {
    0% {
        background-position: 0% center;
    }
    50% {
        background-position: 100% center;
    }
    100% {
        background-position: 0% center;
    }
}
/* ===========================
   PARTICULAS BACKGROUND
=========================== */

#particles {
    position: fixed;
    inset: 0;
    z-index: -2;
    pointer-events: none;
}

body::before {
    z-index: -1;
}

/* ==================================================
   💻 DESKTOP
================================================== */
@media (min-width: 769px) {

    section {
        padding: 80px 0;
    }

    .container {
        max-width: 1200px;
        padding: 0 40px;
    }

    .hero {
        min-height: 80vh;
        padding: 0;
    }

    .hero h1 {
        font-size: clamp(2.5rem, 8vw, 5rem);
        letter-spacing: -2px;
    }

    .hero p {
        font-size: 1.2rem;
        max-width: 600px;
        margin: 0 auto 40px;
    }

    .botoes {
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }

    .hero a {
        width: auto;
        padding: 16px 35px;
        border-radius: 6px;
    }

    .cards {
        grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
        gap: 40px;
        margin-top: 80px;
    }

    .cards-duplos {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 40px;
    }

    .card {
        padding: 40px;
        border-radius: 24px;
        backdrop-filter: blur(14px);
    }

    .card:hover {
        transform: translateY(-8px);
        border-color: var(--primary);
        box-shadow:
            0 20px 60px rgba(0,0,0,0.4),
            0 0 20px rgba(0,210,255,0.2);
    }
}
