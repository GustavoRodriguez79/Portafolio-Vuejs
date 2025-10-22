<template>
  <section id="sobremi" class="sobre-mi">
    <div class="contenedor">
      <div class="foto-container">
        <img :src="`/src/assets/${datos.foto}`" :alt="datos.nombre" class="foto-perfil" />
      </div>
      <div class="texto-contenedor">
        <h2>Sobre mi</h2>
        <p class="intro">
          {{ datos.resumen }}
        </p>

        <div class="tecnologias">
          <h3>Tecnologias que manejo:</h3>
          <div class="tech-grid">
            <div class="tech-item" v-for="tech in tecnologiasConIconos" :key="tech.id">
              <img :src="tech.iconUrl" :alt="tech.nombre" class="tech-icon-img" />
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
import { ref, computed } from 'vue'
import { datosPersonales } from '@/data/datos'

const datos = ref(datosPersonales)

const tecnologiasConIconos = computed(() => [
  { id: 1, nombre: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { id: 2, nombre: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 3, nombre: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { id: 4, nombre: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 5, nombre: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id: 6, nombre: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { id: 7, nombre: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
])
</script>

<style scoped>
:root {
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-secondary: #2a2a2a;
  --bg-primary: #1a1a1a;
  --border: #333;
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
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  border: 4px solid var(--primary);
  transition: transform 0.3s ease;
}

.foto-perfil:hover {
  transform: scale(1.05);
  box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
}

.texto-contenedor h2 {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
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
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
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
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 2px solid var(--primary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  border-color: var(--primary-claro);
}

.tech-icon-img {
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.tech-item:hover .tech-icon-img {
  transform: scale(1.1);
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
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 2px solid var(--primary);
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
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
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

  .tech-icon-img {
    width: 40px;
    height: 40px;
  }
}
</style>