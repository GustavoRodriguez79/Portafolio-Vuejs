<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <h3>GAR Portafolio</h3>
      </div>
      <div class="navbar-menu">
        <ul class="nav-list">
          <li v-for="nav in navegacion" :key="nav.id">
            <a :href="nav.enlace" class="nav-item">{{ nav.nombre }}</a>
          </li>
        </ul>
      </div>
      <div class="navbar-actions">
        <a href="cv.pdf" class="btn-cv" download="CV_GustavoRodriguez.pdf" title="Descargar CV">
          <i class="fas fa-download"></i> CV
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const navegacion = ref([
  { id: 1, nombre: 'Educación', enlace: '#educacion' },
  { id: 2, nombre: 'Experiencia', enlace: '#experiencia' },
  { id: 3, nombre: 'Proyectos', enlace: '#proyectos' },
  { id: 4, nombre: 'Habilidades', enlace: '#habilidades' },
  { id: 5, nombre: 'Testimonios', enlace: '#testimonios' },
  { id: 6, nombre: 'Intereses', enlace: '#intereses' }
])
</script>

<style scoped>
:root {
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-secondary: #1a1a1a;
}

.navbar {
  background: var(--bg-secondary);
  box-shadow: 0 2px 10px rgba(0, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid var(--primary);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin: 0;
  font-weight: 800;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

.navbar-menu {
  flex: 1;
  margin: 0 2rem;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 5px;
  font-size: 1rem;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-claro) 100%);
  transition: width 0.3s ease;
}

.nav-item:hover {
  color: var(--primary-claro);
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}

.nav-item:hover::after {
  width: 100%;
}

.btn-cv {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.btn-cv:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .navbar-container {
    flex-wrap: wrap;
    padding: 1rem;
  }

  .navbar-brand h3 {
    font-size: 1.2rem;
  }

  .navbar-menu {
    order: 3;
    width: 100%;
    margin: 1rem 0 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 1rem;
  }

  .btn-cv {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>