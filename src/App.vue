<template>
  <div id="app">
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
import Intereses from './components/Intereses.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
:root {
  --primary: #7c3aed;
  --primary-dark: #6d28d9;
  --primary-light: #a78bfa;
  --secondary: #6366f1;
  --accent: #c4b5fd;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-light: #f9fafb;
  --bg-white: #ffffff;
  --border: #e5e7eb;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-primary);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  background: linear-gradient(135deg, #f9fafb 0%, #faf5ff 100%);
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
  background: linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #8b5cf6 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
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
  background: rgba(255, 255, 255, 0.08);
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
}

.subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  animation: slideUp 0.8s ease-out 0.2s both;
}

.btn-hero {
  display: inline-block;
  background: white;
  color: #7c3aed;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  animation: slideUp 0.8s ease-out 0.4s both;
}

.btn-hero:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* SECCIONES */
.seccion {
  background: white;
  border-radius: 15px;
  padding: 4rem 2rem;
  margin: 3rem auto;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.08);
  border-left: 5px solid var(--primary);
}

.seccion h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
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