<!-- ============================================================
  COMPONENTE: SobreMi.vue
  Descripción:
  Este componente muestra la sección "Sobre mí" del portafolio.
  Incluye la foto de perfil, una breve descripción personal,
  las tecnologías dominadas (con íconos SVG) y estadísticas visuales.

  Autor: [Tu nombre o iniciales]
  ============================================================ -->

<template>
  <!-- Sección principal identificada por el id "sobremi" -->
  <section id="sobremi" class="sobre-mi">
    <div class="contenedor">
      
      <!-- BLOQUE IZQUIERDO: Foto de perfil -->
      <div class="foto-container">
        <!-- Imagen dinámica obtenida desde los datos importados -->
        <img 
          :src="`/src/assets/${datos.foto}`" 
          :alt="datos.nombre" 
          class="foto-perfil" 
        />
      </div>

      <!-- BLOQUE DERECHO: Texto y contenido informativo -->
      <div class="texto-contenedor">
        <h2>Sobre mi</h2>
        
        <!-- Párrafo introductorio con resumen personal -->
        <p class="intro">
          {{ datos.resumen }}
        </p>

        <!-- SECCIÓN DE TECNOLOGÍAS -->
        <div class="tecnologias">
          <h3>Tecnologias que manejo:</h3>
          
          <!-- Grid que recorre las tecnologías y muestra su ícono y nombre -->
          <div class="tech-grid">
            <div 
              class="tech-item" 
              v-for="tech in tecnologiasConIconos" 
              :key="tech.id"
            >
              <!-- Ícono SVG dinámico -->
              <img 
                :src="tech.iconUrl" 
                :alt="tech.nombre" 
                class="tech-icon-img" 
              />
              <!-- Nombre de la tecnología -->
              <span class="tech-name">{{ tech.nombre }}</span>
            </div>
          </div>
        </div>

        <!-- SECCIÓN DE ESTADÍSTICAS PERSONALES -->
        <div class="stats">
          <div 
            v-for="stat in datos.estadisticas" 
            :key="stat.label" 
            class="stat-item"
          >
            <!-- Número o valor estadístico -->
            <span class="stat-number">{{ stat.numero }}</span>
            <!-- Etiqueta descriptiva -->
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/* ============================================================
   LÓGICA DEL COMPONENTE
   Uso de la API de composición de Vue 3 (Composition API)
   ============================================================ */

import { ref, computed } from 'vue'           // Importa herramientas reactivas de Vue
import { datosPersonales } from '@/data/datos' // Importa los datos del usuario desde un archivo externo

// Se almacenan los datos personales en una referencia reactiva
const datos = ref(datosPersonales)

/* ------------------------------------------------------------
   Computed property: tecnologiasConIconos
   - Genera una lista de tecnologías con sus íconos SVG.
   - Los íconos provienen del CDN oficial de Devicons.
   - Se utiliza un "computed" para mantener reactividad y claridad.
   ------------------------------------------------------------ */
const tecnologiasConIconos = computed(() => [
  { id: 1, nombre: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { id: 2, nombre: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 3, nombre: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { id: 4, nombre: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 5, nombre: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id: 6, nombre: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { id: 7, nombre: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { id: 8, nombre: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { id: 9, nombre: 'VSCode', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { id: 10, nombre: 'PyCharm', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' },
  { id: 11, nombre: 'Apache NetBeans', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  { id: 12, nombre: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
])
</script>

<style scoped>
/* ============================================================
   ESTILOS LOCALES (aislados al componente)
   Paleta basada en tonos cian y grises oscuros.
   ============================================================ */

:root {
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-secondary: #2a2a2a;
  --bg-primary: #1a1a1a;
  --border: #333;
}

/* Contenedor principal de la sección */
.sobre-mi {
  margin-top: 0;
  padding-top: 0;
}

/* GRID general de la sección (foto a la izquierda, texto a la derecha) */
.contenedor {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;
}

/* CENTRA la imagen en su contenedor */
.foto-container {
  display: flex;
  justify-content: center;
}

/* Imagen del perfil con efectos visuales */
.foto-perfil {
  width: 280px;
  height: 280px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  border: 4px solid var(--primary);
  transition: transform 0.3s ease;
}

/* Efecto hover sobre la foto */
.foto-perfil:hover {
  transform: scale(1.05);
  box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
}

/* Título principal */
.texto-contenedor h2 {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

/* Texto de introducción */
.intro {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.8;
}

/* SECCIÓN DE TECNOLOGÍAS */
.tecnologias {
  margin: 2.5rem 0;
}

.tecnologias h3 {
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

/* GRID para los íconos de tecnologías */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

/* Tarjeta individual de tecnología */
.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 2px solid #00ffff;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Efecto hover en cada tarjeta */
.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  border-color: var(--primary-claro);
}

/* Ícono dentro de cada tarjeta */
.tech-icon-img {
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

/* Aumenta el ícono al pasar el mouse */
.tech-item:hover .tech-icon-img {
  transform: scale(1.1);
}

/* Nombre de la tecnología */
.tech-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

/* ------------------------------------------------------------
   SECCIÓN DE ESTADÍSTICAS
   ------------------------------------------------------------ */
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

/* Números destacados */
.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--primary);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

/* Texto descriptivo de la estadística */
.stat-label {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

/* ------------------------------------------------------------
   MEDIA QUERIES - Responsividad
   ------------------------------------------------------------ */
@media (max-width: 968px) {
  .contenedor {
    grid-template-columns: 1fr; /* Cambia a una sola columna */
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
    grid-template-columns: 1fr; /* Coloca estadísticas en una sola columna */
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
