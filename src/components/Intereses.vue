<template>
  <div class="intereses-container">
    <div class="intereses-grid">
      <!--Las tarjetas se distribuyen de forma equilibrada en el diseño responsivo -->
      <div v-for="interes in interesesData" :key="interes.id" class="interes-card">
        <div class="interes-icon">{{ interes.icon }}</div>
        <h3>{{ interes.titulo }}</h3>
        <p>{{ interes.descripcion }}</p>
        <div class="interes-tags">
          <span v-for="tag in interes.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

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
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-secondary: #2a2a2a;
  --border: #333;
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
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid var(--primary);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.interes-card:hover {
  border-color: var(--primary-claro);
  transform: translateY(-8px);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
}

.interes-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: bounce 2s ease-in-out infinite;
}

.interes-card:nth-child(1) .interes-icon {
  animation-delay: 0s;
}

.interes-card:nth-child(2) .interes-icon {
  animation-delay: 0.2s;
}

.interes-card:nth-child(3) .interes-icon {
  animation-delay: 0.4s;
}

.interes-card h3 {
  color: var(--primary);
  font-size: 1.3rem;
  margin: 0 0 0.75rem;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
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
  background: #93dede;
  color: #000000;
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 700;
}

.objetivos-section {
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid var(--primary);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.objetivos-section h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
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
  background: #2a2a2a;
  border-radius: 15px;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
}

.objetivo-item:hover {
  transform: translateX(5px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
}

.objetivo-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: #93dede;
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