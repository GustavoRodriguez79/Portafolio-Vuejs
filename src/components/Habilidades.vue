<template>
  <div class="habilidades-container">
    <div class="habilidades-grid">
      <div v-for="categoria in habilidadesData.categorias" :key="categoria.id" class="categoria-card">
        <div class="categoria-header">
          <span class="categoria-icon">{{ categoria.icon }}</span>
          <h3>{{ categoria.nombre }}</h3>
        </div>
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

    <!-- Tabla de Competencias Técnicas -->
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
import { ref } from 'vue'
import { habilidades } from '@/data/datos'

const habilidadesData = ref(habilidades)
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

.habilidades-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.habilidades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.categoria-card {
  background: linear-gradient(135deg, #ffffff 0%, #faf5ff 100%);
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid var(--border);
  transition: all 0.3s ease;
}

.categoria-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.12);
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
}

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

.skill-level {
  background: var(--primary-light);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 700;
}

.skill-bar {
  height: 8px;
  background: var(--border);
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
  border-radius: 10px;
  transition: width 0.8s ease;
  animation: expandWidth 1s ease-out;
}

@keyframes expandWidth {
  from {
    width: 0 !important;
  }
}

/* TABLA DE COMPETENCIAS */
.competencias-tabla {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid var(--border);
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.08);
}

.competencias-tabla h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.tabla-scroll {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  color: white;
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
  transition: all 0.3s ease;
}

tbody tr:hover {
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.05));
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

.nivel-badge {
  padding: 0.4rem 0.9rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 700;
  display: inline-block;
}

.nivel-badge.avanzado {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.nivel-badge.intermedio {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.nivel-badge.basico {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

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