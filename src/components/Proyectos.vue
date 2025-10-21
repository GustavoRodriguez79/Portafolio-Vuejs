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
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-secondary: #2a2a2a;
  --border: #333;
  --success: #00ff88;
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
  background: var(--bg-secondary);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid var(--primary);
}

.proyecto-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  border-color: var(--primary-claro);
}

.proyecto-imagen {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #00ffff 0%, #93dede 100%);
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
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-ver:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
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
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
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
  background: var(--bg-secondary);
  color: var(--primary);
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid var(--primary);
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
  background: rgba(0, 255, 136, 0.2);
  color: var(--success);
}

.estado.en\ progreso {
  background: rgba(0, 255, 255, 0.2);
  color: var(--primary);
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