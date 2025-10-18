<template>
  <div class="intereses-container">
    <div class="intereses-grid">
      <div v-for="interes in interesesData" :key="interes.id" class="interes-card">
        <div class="interes-icon">{{ interes.icon }}</div>
        <h3>{{ interes.titulo }}</h3>
        <p>{{ interes.descripcion }}</p>
        <div class="interes-tags">
          <span v-for="tag in interes.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- Sección adicional: Objetivos -->
    <div class="objetivos-section">
      <h3>Objetivos Profesionales</h3>
      <div class="objetivos-list">
        <div v-for="objetivo in objetivosData" :key="objetivo.id" class="objetivo-item">
          <span class="objetivo-number">{{ objetivo.id }}</span>
          <div class="objetivo-content">
            <h4>{{ objetivo.titulo }}</h4>
            <p>{{ objetivo.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { intereses, objetivos } from '@/data/datos'

const interesesData = ref(intereses)
const objetivosData = ref(objetivos)
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

.intereses-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.intereses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.interes-card {
  background: linear-gradient(135deg, #ffffff 0%, #faf5ff 100%);
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid var(--border);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.interes-card:hover {
  border-color: var(--primary);
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(124, 58, 237, 0.15);
}

.interes-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: bounce 2s ease-in-out infinite;
}

.interes-card:nth-child(2) .interes-icon {
  animation-delay: 0.2s;
}

.interes-card:nth-child(3) .interes-icon {
  animation-delay: 0.4s;
}

.interes-card:nth-child(4) .interes-icon {
  animation-delay: 0.6s;
}

.interes-card h3 {
  color: var(--primary);
  font-size: 1.3rem;
  margin: 0 0 0.75rem;
}

.interes-card p {
  color: var(--text-secondary);
  margin: 0 0 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.interes-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag {
  background: var(--primary-light);
  color: white;
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 700;
}

/* SECCIÓN OBJETIVOS */
.objetivos-section {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid var(--border);
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.08);
}

.objetivos-section h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.objetivos-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.objetivo-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f9fafb 0%, #f3e8ff 100%);
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
}

.objetivo-item:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 15px rgba(124, 58, 237, 0.1);
}

.objetivo-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  color: white;
  border-radius: 50%;
  font-weight: 800;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.objetivo-content h4 {
  color: var(--primary);
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

.objetivo-content p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .intereses-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .objetivos-list {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .objetivo-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .objetivo-number {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .interes-icon {
    font-size: 2.8rem;
  }
}
</style>