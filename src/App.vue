<template>
  <div id="app">
    <NavBar />
    <main>
      <header class="hero">
        <div class="hero-content">
          <h1 class="titulo">Gustavo Ariel Rodriguez</h1>
          <p class="subtitulo">Técnico en Programación | Apasionado por la programación y la creatividad digital</p>
          <a href="#sobremi" class="btn">Conóceme</a>
        </div>
      </header>

      <!-- SECCIÓN DATOS PERSONALES -->
      <DatosPersonales />

      <!-- SECCIÓN EDUCACIÓN -->
      <section id="educacion" class="seccion">
        <h2><i class="fas fa-graduation-cap"></i> Educación - Cursos</h2>
        <Educacion />
      </section>

      <!-- SECCIÓN EXPERIENCIA -->
      <section id="experiencia" class="seccion">
        <h2><i class="fas fa-briefcase"></i> Experiencia</h2>
        <Experiencia />
      </section>

      <!-- SECCIÓN PROYECTOS -->
      <section id="proyectos" class="seccion">
        <h2><i class="fas fa-code"></i> Proyectos</h2>
        <Proyectos />
      </section>

      <!-- SECCIÓN HABILIDADES -->
      <section id="habilidades" class="seccion">
        <h2><i class="fas fa-star"></i> Habilidades</h2>
        <Habilidades />
      </section>

      <!-- SECCIÓN TESTIMONIOS -->
      <section id="testimonios" class="seccion">
        <h2><i class="fas fa-quote-left"></i> Testimonios</h2>
        <Testimonios />
      </section>

      <!-- SECCIÓN INTERESES -->
      <section id="intereses" class="seccion">
        <h2><i class="fas fa-heart"></i> Intereses</h2>
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

<style>
/* VARIABLES DE TEMA - PALETA UNIFORME */
:root {
  --bg-primary: #111111;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --accent-primary: #00ffff;
  --accent-secondary: #93dede;
  --border-color: #333;
}

/* RESETEO BÁSICO */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: all 0.3s ease;
}

#app {
  min-height: 100vh;
  background: linear-gradient(135deg, #111111 0%, #2d2d2d 50%, #111111 100%);
}

main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* HERO SECTION */
.hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%),
    url('https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070') center/cover no-repeat;
  background-blend-mode: overlay;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 4rem;
  padding-bottom: 4rem;
}

.titulo {
  font-size: 4rem;
  margin: 0;
  color: var(--accent-secondary);
  animation: fadeIn 2s ease-in-out;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.subtitulo {
  font-size: 1.2rem;
  color: #eee;
  margin: 0 0 2rem;
  max-width: 700px;
  margin-inline: auto;
}

/* BOTONES */
.btn {
  background: var(--accent-primary);
  color: #000000;
  padding: 1rem 8rem;
  font-weight: bold;
  text-decoration: none;
  border: 5px solid var(--accent-primary);
  border-radius: 35px;
  box-shadow: 0 4px 8px rgba(0, 255, 255, 0.3);
  transition: 0.3s;
  display: inline-block;
  font-size: 1.5rem;
  min-width: 90%;  
  text-align: center;
}

.btn:hover {
  background: var(--accent-secondary);
  border-color: var(--accent-secondary);
  box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
  transform: translateY(-2px);
}

/* SECCIONES */
.seccion {
  background: var(--bg-secondary);
  margin: 2rem auto;
  max-width: 1000px;
  padding: 4rem 2rem;
  border-left: 5px solid var(--accent-primary);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.seccion h2 {
  color: var(--accent-primary);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.seccion h2 i {
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 255, 255, 0.5);
}

/* ANIMACIONES */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .titulo {
    font-size: 2.5rem;
  }

  .subtitulo {
    font-size: 1rem;
  }

  .seccion {
    margin: 1rem;
    padding: 2rem 1rem;
  }

  .seccion h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .titulo {
    font-size: 2rem;
  }
}
</style>