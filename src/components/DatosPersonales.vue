<template>
  <section id="sobremi" class="sobre-mi">
    <div class="contenedor">
      <div class="foto-container">
        <img :src="`/src/assets/${datos.foto}`" :alt="datos.nombre" class="foto-perfil" />
      </div>
      <div class="texto-contenedor">
        <h2>Sobre mí</h2>
        <p class="intro">
          {{ datos.resumen }}
        </p>

        <div class="tecnologias">
          <h3>Tecnologías que manejo:</h3>
          <div class="tech-grid">
            <div v-for="tech in techs" :key="tech.id" class="tech-item">
              <span class="tech-icon">{{ tech.icon }}</span>
              <span class="tech-name">{{ tech.nombre }}</span>
            </div>
          </div>
        </div>

        <div class="stats">
          <div v-for="stat in datos.estadisticas" :key="stat.label" class="stat-item">
            <span class="stat-number">{{ stat.numero }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { datosPersonales, tecnologias } from '@/data/datos'

const datos = ref(datosPersonales)
const techs = ref(tecnologias)
</script>

<style scoped>
:root {
  --primary: #7c3aed;
  --primary-light: #a78bfa;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-light: #f9fafb;
  --border: #e5e7eb;
}

.sobre-mi {
  margin-top: 0;
  padding-top: 0;
}

.contenedor {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;
}

.foto-container {
  display: flex;
  justify-content: center;
}

.foto-perfil {
  width: 280px;
  height: 280px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 10px 40px rgba(124, 58, 237, 0.2);
  border: 4px solid var(--primary);
  transition: transform 0.3s ease;
}

.foto-perfil:hover {
  transform: scale(1.05);
}

.texto-contenedor h2 {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.8;
}

.tecnologias {
  margin: 2.5rem 0;
}

.tecnologias h3 {
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%);
  border-radius: 12px;
  border: 2px solid var(--primary-light);
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.2);
  border-color: var(--primary);
}

.tech-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.tech-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%);
  border-radius: 12px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--primary);
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

@media (max-width: 968px) {
  .contenedor {
    grid-template-columns: 1fr;
  }

  .foto-perfil {
    width: 240px;
    height: 240px;
  }

  .stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .texto-contenedor h2 {
    font-size: 1.8rem;
  }

  .stats {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }
}
</style>