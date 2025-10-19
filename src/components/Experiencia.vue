<template>
  <div class="experiencia-grid">
    <div v-for="exp in experienciaData" :key="exp.id" class="exp-card">
      <div class="exp-header">
        <h3>{{ exp.titulo }}</h3>
        <span class="periodo">{{ exp.periodo }}</span>
      </div>
      <p class="empresa">{{ exp.empresa }}</p>
      <p class="descripcion">{{ exp.descripcion }}</p>
      <ul class="logros">
        <li v-for="logro in exp.logros" :key="logro">
          <span class="check">✔</span> {{ logro }}
        </li>
      </ul>
      <div v-if="exp.tecnologias" class="tech-list">
        <span v-for="tech in exp.tecnologias" :key="tech" class="tech-badge">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { experiencia } from '@/data/datos'

const experienciaData = ref(experiencia)
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

.experiencia-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.exp-card {
  background: linear-gradient(135deg, #ffffff 0%, #faf5ff 100%);
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid var(--border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.exp-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
}

.exp-card:hover {
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15);
  transform: translateY(-5px);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.exp-header h3 {
  color: var(--primary);
  font-size: 1.4rem;
  margin: 0;
  flex: 1;
}

.periodo {
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
}

.empresa {
  color: var(--text-secondary);
  font-weight: 600;
  margin: 0.5rem 0 1rem;
  font-size: 0.95rem;
}

.descripcion {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.logros {
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
}

.logros li {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.check {
  color: var(--success);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.tech-badge {
  background: var(--primary-light);
  color: white;
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .experiencia-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .exp-card {
    padding: 1.5rem;
  }

  .exp-header {
    flex-direction: column;
  }

  .periodo {
    align-self: flex-start;
  }

  .exp-header h3 {
    font-size: 1.2rem;
  }
}
</style>