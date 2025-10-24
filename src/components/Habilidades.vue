<!--
  ==============================
  COMPONENTE: Habilidades.vue
  ==============================
  Este componente muestra:
  1. Categorías de habilidades con barras de progreso
  2. Una tabla con competencias técnicas detalladas
  Está diseñado con estilo moderno, gradientes y efectos hover.
-->

<template>
  <div class="habilidades-container">

    <!-- ===== GRID DE CATEGORÍAS ===== -->
    <div class="habilidades-grid">
      <!-- Itera sobre las categorías -->
      <div v-for="categoria in habilidadesData.categorias" :key="categoria.id" class="categoria-card">
        <div class="categoria-header">
          <span class="categoria-icon">{{ categoria.icon }}</span>
          <h3>{{ categoria.nombre }}</h3>
        </div>
        <!-- Lista de habilidades dentro de la categoría -->
        <div class="skills-list">
          <div v-for="skill in categoria.skills" :key="skill.id" class="skill-item">
            <div class="skill-header">
              <span class="skill-name">{{ skill.nombre }}</span>
              <span class="skill-level">{{ skill.nivel }}</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.porcentaje + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== TABLA DE COMPETENCIAS TÉCNICAS ===== -->
    <div class="competencias-tabla">
      <h3>Matriz de Competencias Técnicas</h3>
      <div class="tabla-scroll">
        <table>
          <thead>
            <tr>
              <th>Tecnología</th>
              <th>Nivel</th>
              <th>Experiencia</th>
              <th>Proyectos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="comp in habilidadesData.competencias" :key="comp.id">
              <td class="tech-name">
                <span class="tech-icon">{{ comp.icon }}</span>
                {{ comp.tecnologia }}
              </td>
              <td>
                <span class="nivel-badge" :class="comp.nivel.toLowerCase()">
                  {{ comp.nivel }}
                </span>
              </td>
              <td>{{ comp.experiencia }}</td>
              <td>{{ comp.proyectos }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup>
/*
  ==============================
  LÓGICA DEL COMPONENTE
  ==============================
  Se utiliza la Composition API de Vue.js para manejar los datos
  de habilidades y competencias técnicas.
*/

import { ref } from 'vue'
import { habilidades } from '@/data/datos'

// Datos reactivos de habilidades
const habilidadesData = ref(habilidades)
</script>

<style scoped>
/* ==============================
   VARIABLES GLOBALES
   ============================== */
:root {
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-secondary: #2a2a2a;
  --border: #333;
  --success: #00ff88;
}

/* Contenedor principal */
.habilidades-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Grid de categorías */
.habilidades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* ===== CATEGORÍA ===== */
.categoria-card {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 25px;
  border: 2px solid var(--primary);
  transition: all 0.3s ease;
}

.categoria-card:hover {
  border-color: var(--primary-claro);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  transform: translateY(-3px);
}

.categoria-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.categoria-icon {
  font-size: 2rem;
}

.categoria-header h3 {
  color: var(--primary);
  margin: 0;
  font-size: 1.3rem;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

/* ===== SKILLS ===== */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: 600;
  color: var(--text-primary);
}

/* ============================================================
   CHIPS DE TECNOLOGÍAS - EFECTO HOVER UNIFICADO
   Transición suave, cambio de color a cian, efecto de brillo,
   cambio de borde y elevación visual al pasar el mouse.
   ============================================================ */
.skill-level {
  background: var(--bg-secondary);
  color: var(--primary);
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid var(--primary);
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
}
.skill-level:hover {
  background: var(--primary); /* Fondo cambia a color principal */
  color: #000000; /* Texto negro */
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.5); /* Luz sutil */
  border-color: var(--primary-light);
  transform: translateY(-2px);  /* Pequeña elevación */
}


/* Barra de progreso */
.skill-bar {
  height: 8px;
  background: var(--border);
  border-radius: 15px;
  overflow:hidden;
}

.skill-progress {
  height: 100%;
  background: var(--primary);
  border-radius: 25%;
  transition: width 0.8s ease;
  animation: expandWidth 1s ease-out;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

@keyframes expandWidth {
  from { width: 0 !important; }
}

/* ===== TABLA DE COMPETENCIAS ===== */
.competencias-tabla {
  background: #2a2a2a;;
  padding: 2.5rem;
  border-radius: 25px;
  border: 2px solid var(--primary);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.competencias-tabla h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

.tabla-scroll {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: #000;
}

th {
  padding: 1rem;
  text-align: left;
  font-weight: 700;
}

td {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
}

tbody tr {
  transition: all 0.5s ease;
}

tbody tr:hover {
  background: rgba(0, 255, 255, 0.1);
}

.tech-name {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
}

.tech-icon {
  font-size: 1.3rem;
}

/* Badges de nivel */
.nivel-badge {
  padding: 0.4rem 0.9rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 100;
  display:inline-flex;
}

.nivel-badge.avanzado {
  background: rgba(0, 255, 136, 0.2);
  color: var(--success);
}

.nivel-badge.intermedio {
  background: rgba(0, 255, 255, 0.2);
  color: var(--primary);
}

.nivel-badge.basico {
  background: rgba(0, 255, 255, 0.2);
  color: var(--primary-claro);
}

/* ============================================================
   ETIQUETAS DE HABILIDADES - EFECTO HOVER UNIFICADO
   Transición suave, cambio de color a cian, efecto de brillo
   y elevación visual al pasar el mouse.
   ============================================================ */
.hab-tag {
  background: #93dede;
  color: #000000;
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
}

.hab-tag:hover {
  background: var(--primary);
  color: var(--text-primary);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* ===== RESPONSIVIDAD ===== */
@media (max-width: 768px) {
  .habilidades-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .competencias-tabla {
    padding: 1.5rem;
    overflow: hidden;
  }

  .tabla-scroll {
    overflow-x: auto;
    border-radius: 10px;
  }

  th,
  td {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
}
</style>
