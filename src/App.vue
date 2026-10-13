<template>
  <!-- Contenedor raíz de la aplicación -->
  <div id="app">

    <!-- BARRA DE NAVEGACIÓN (links, cambio de tema y descarga del CV) -->
    <NavBar />

    <main>
      <!-- PORTADA: nombre, presentación animada y stack -->
      <DatosPersonales />

      <!-- PROYECTOS -->
      <section id="proyectos" class="seccion">
        <h2 class="etiqueta">Proyectos</h2>
        <Proyectos />
      </section>

      <!-- FORMACIÓN Y EXPERIENCIA (una sola sección) -->
      <section id="formacion" class="seccion">
        <h2 class="etiqueta">Formación</h2>
        <Formacion />
      </section>
    </main>

    <!-- CONTACTO + PIE DE PÁGINA -->
    <Footer />
  </div>
</template>

<script setup>
/*
  Cada componente es un bloque de la página.
  Habilidades, Intereses, Educacion y Experiencia ya no se usan en esta versión:
  su contenido se simplificó y se fusionó en Formacion.vue y en la portada.
*/
import NavBar from './components/NavBar.vue'
import DatosPersonales from './components/DatosPersonales.vue'
import Proyectos from './components/Proyectos.vue'
import Formacion from './components/Formacion.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* ===============================
   TEMA (OSCURO POR DEFECTO + CLARO)
   ===============================
   Todos los colores del sitio salen de estas variables.
   Un solo acento (cian). NavBar.vue cambia data-theme="light" | "dark" en <html>.
   Contrastes verificados (WCAG): texto >= 16:1, texto secundario >= 7:1, acento >= 4.9:1.
*/
:root {
  color-scheme: dark;
  --bg: #0c0f14;
  --bg-elev: #12161d;
  --text: #e8edf3;
  --muted: #9aa6b2;
  --border: #222a35;
  --accent: #22d3ee;
  --accent-ink: #04222a;
  /* color del texto sobre el acento */
  --accent-soft: rgba(34, 211, 238, 0.12);
  --invert-icon: invert(1);
  /* íconos negros (GitHub) se invierten en oscuro */
}

:root[data-theme='light'] {
  color-scheme: light;
  --bg: #fbfcfd;
  --bg-elev: #f1f4f7;
  --text: #0f1720;
  --muted: #4a5866;
  --border: #dde3ea;
  --accent: #0e7490;
  --accent-ink: #ffffff;
  --accent-soft: rgba(14, 116, 144, 0.1);
  --invert-icon: none;
}

/* Terminal: siempre oscura, también en el tema claro */
:root {
  --consola-bg: #0d1117;
  --consola-barra: #161b22;
  --consola-borde: #272e38;
  --consola-texto: #d4d4d4;
  --consola-acento: #22d3ee;
}

:root {
  --fuente: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --mono: ui-monospace, 'Fira Code', 'Cascadia Code', Consolas, monospace;
}

/* ===============================
   RESETEO BÁSICO
   =============================== */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--fuente);
  background: var(--bg);
  color: var(--text);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  transition: background-color 0.25s ease, color 0.25s ease;
}

a {
  color: inherit;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  * {
    transition: none !important;
    animation: none !important;
  }
}

/* ===============================
   LAYOUT: una sola columna angosta, mucho aire
   =============================== */
#app {
  min-height: 100vh;
}

main {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.seccion {
  padding: 5rem 0;
  border-top: 1px solid var(--border);
  scroll-margin-top: 3.5rem;
}

/* Título pequeño de cada sección */
.etiqueta {
  font-family: var(--mono);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 2.5rem;
}

/* ===============================
   BOTONES (se usan en portada, navbar y contacto)
   =============================== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.btn-primario {
  background: var(--accent);
  color: var(--accent-ink);
}

.btn-primario:hover {
  filter: brightness(1.1);
}

.btn-secundario {
  border-color: var(--border);
  color: var(--text);
}

.btn-secundario:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 640px) {
  main {
    padding: 0 1.25rem;
  }

  .seccion {
    padding: 3.5rem 0;
  }
}
</style>
