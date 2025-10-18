<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <h3>GAR Portfolio</h3>
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
          📥 CV
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
  { id: 5, nombre: 'Intereses', enlace: '#intereses' }
])
</script>

<style scoped>
:root {
  --primary: #7c3aed;
  --primary-dark: #6d28d9;
  --text-primary: #1f2937;
  --bg-white: #ffffff;
}

.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(124, 58, 237, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
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
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 5px;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-item:hover {
  color: var(--primary);
}

.nav-item:hover::after {
  width: 100%;
}

.btn-cv {
  background: linear-gradient(135deg, var(--primary) 0%, #a78bfa 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-cv:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
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