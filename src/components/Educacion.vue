<template>
  <div class="educacion-container">
    <div class="timeline">
      <div v-for="item in educacionData" :key="item.id" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="fecha-badge">{{ item.fecha }}</div>
          <h3>{{ item.titulo }}</h3>
          <p class="institucion">{{ item.institucion }}</p>
          <p class="descripcion">{{ item.descripcion }}</p>
          <div v-if="item.habilidades" class="habilidades-mini">
            <span v-for="hab in item.habilidades" :key="hab" class="hab-tag">{{ hab }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { educacion } from '@/data/datos'

const educacionData = ref(educacion)
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

.educacion-container {
  padding: 1rem 0;
}

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.75rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--primary) 0%, var(--primary-claro) 100%);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  animation: slideInUp 0.6s ease-out backwards;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}

.timeline-item:nth-child(2) {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(3) {
  animation-delay: 0.3s;
}

.timeline-marker {
  position: absolute;
  left: -2.65rem;
  top: 0;
  width: 18px;
  height: 18px;
  background: var(--bg-secondary);
  border: 4px solid var(--primary);
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.3);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
}

.timeline-content {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid var(--primary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.timeline-item:hover .timeline-content {
  border-color: var(--primary-claro);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  transform: translateX(10px);
}

.fecha-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.timeline-content h3 {
  color: var(--primary);
  font-size: 1.4rem;
  margin: 0.5rem 0;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

.institucion {
  color: var(--text-secondary);
  font-weight: 600;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.descripcion {
  color: var(--text-secondary);
  margin: 1rem 0;
  line-height: 1.7;
}

.habilidades-mini {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.hab-tag {
  background: var(--primary-claro);
  color: #000;
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 2rem;
  }

  .timeline::before {
    left: 0.4rem;
  }

  .timeline-marker {
    left: -2.3rem;
    width: 15px;
    height: 15px;
    border-width: 3px;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .timeline-content h3 {
    font-size: 1.1rem;
  }

  .descripcion {
    font-size: 0.9rem;
  }
}
</style>