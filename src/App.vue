<template>
  <div id="app" class="app-oscuro">
    <NavBar />
    <main>
      <header class="hero">
        <div class="hero-content">
          <h1>Gustavo Ariel Rodriguez</h1>
          <p class="subtitle">Técnico en Programación | Apasionado por la programación y la creatividad digital</p>
          <a href="#educacion" class="btn-hero">Explorar portafolio</a>
        </div>
      </header>

      <!-- SECCIÓN DATOS PERSONALES -->
      <DatosPersonales />

      <!-- SECCIÓN EDUCACIÓN -->
      <section id="educacion" class="seccion">
        <h2><i class="icon">🎓</i> Educación - Cursos</h2>
        <Educacion />
      </section>

      <!-- SECCIÓN EXPERIENCIA -->
      <section id="experiencia" class="seccion">
        <h2><i class="icon">💼</i> Experiencia</h2>
        <Experiencia />
      </section>

      <!-- SECCIÓN PROYECTOS -->
      <section id="proyectos" class="seccion">
        <h2><i class="icon">💻</i> Proyectos</h2>
        <Proyectos />
      </section>

      <!-- SECCIÓN HABILIDADES -->
      <section id="habilidades" class="seccion">
        <h2><i class="icon">⚡</i> Habilidades</h2>
        <Habilidades />
      </section>

      <!-- SECCIÓN TESTIMONIOS -->
      <section id="testimonios" class="seccion">
        <h2><i class="icon">💬</i> Testimonios</h2>
        <Testimonios />
      </section>

      <!-- SECCIÓN INTERESES -->
      <section id="intereses" class="seccion">
        <h2><i class="icon">🎯</i> Intereses</h2>
        <Intereses />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import DatosPersonales from './components/DatosPersonales.vue'
import Educacion from './components/Educacion.vue'
import Experiencia from './components/Experiencia.vue'
import Proyectos from './components/Proyectos.vue'
import Habilidades from './components/Habilidades.vue'
import Testimonios from './components/Testimonios.vue'
import Intereses from './components/Intereses.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
:root {
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-primary: #1a1a1a;
  --bg-secondary: #2a2a2a;
  --border: #333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.app-oscuro {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  min-height: 100vh;
  color: var(--text-primary);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* HERO SECTION */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-bottom: 3px solid var(--primary);
}

.hero::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: rgba(0, 255, 255, 0.05);
  border-radius: 50%;
  top: -200px;
  right: -200px;
  animation: float 6s ease-in-out infinite;
}

.hero::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(0, 255, 255, 0.03);
  border-radius: 50%;
  bottom: -150px;
  left: -150px;
  animation: float 8s ease-in-out infinite reverse;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 2rem;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  animation: slideDown 0.8s ease-out;
  color: var(--primary-claro);
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  animation: slideUp 0.8s ease-out 0.2s both;
  color: var(--text-secondary);
}

.btn-hero {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: #000;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  animation: slideUp 0.8s ease-out 0.4s both;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.btn-hero:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

/* SECCIONES */
.seccion {
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 4rem 2rem;
  margin: 3rem auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border-left: 5px solid var(--primary);
  border-top: 2px solid var(--primary-claro);
}

.seccion h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

.icon {
  font-size: 3rem;
}

/* ANIMACIONES */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .seccion {
    padding: 2rem 1rem;
    margin: 2rem auto;
  }

  .seccion h2 {
    font-size: 2rem;
  }
}
</style>