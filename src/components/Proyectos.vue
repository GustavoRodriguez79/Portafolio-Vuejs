<template>
  <div class="proyectos-container">
    <div class="proyectos-grid">
      <div v-for="proyecto in proyectosData" :key="proyecto.id" class="proyecto-card">
        <div class="proyecto-imagen">
          <div class="imagen-placeholder">{{ proyecto.emoji }}</div>
          <div class="overlay">
            <a v-if="proyecto.enlace" :href="proyecto.enlace" target="_blank" rel="noopener noreferrer" class="btn-ver">
              Ver Proyecto
            </a>
          </div>
        </div>
        <div class="proyecto-contenido">
          <h3>{{ proyecto.titulo }}</h3>
          <p class="descripcion">{{ proyecto.descripcion }}</p>
          <div class="tech-usado">
            <span v-for="tech in proyecto.tecnologias" :key="tech" class="tech-chip">{{ tech }}</span>
          </div>
          <div class="proyecto-meta">
            <span class="estado" :class="proyecto.estado.toLowerCase()">{{ proyecto.estado }}</span>
            <span class="fecha">{{ proyecto.fecha }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { proyectos } from '@/data/datos'

const proyectosData = ref(proyectos)
</script>

<style scoped>
:root {
  --primary: #7c3aed;
  --primary-light: #a78bfa;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-light: #f9fafb;
  --border: #e5e7eb;
  --success: #10b981;
}

.proyectos-container {
  padding: 1rem 0;
}

.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2rem;
}

.proyecto-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--border);
}

.proyecto-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(124, 58, 237, 0.15);
  border-color: var(--primary-light);
}

.proyecto-imagen {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.imagen-placeholder {
  font-size: 5rem;
  animation: float 3s ease-in-out infinite;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.proyecto-card:hover .overlay {
  opacity: 1;
}

.btn-ver {
  background: white;
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-ver:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

.proyecto-contenido {
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.proyecto-contenido h3 {
  color: var(--primary);
  font-size: 1.3rem;
  margin: 0 0 0.75rem;
}

.descripcion {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tech-usado {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-chip {
  background: linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%);
  color: var(--primary);
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid var(--primary-light);
}

.proyecto-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.estado {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
}

.estado.completado {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.estado.en\ progreso {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.fecha {
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .proyectos-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .proyecto-imagen {
    height: 180px;
  }

  .imagen-placeholder {
    font-size: 4rem;
  }

  .proyecto-contenido {
    padding: 1.5rem;
  }
}
</style>