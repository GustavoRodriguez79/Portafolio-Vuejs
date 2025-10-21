<template>
  <div class="testimonios-container">
    <div class="testimonios-grid">
      <div v-for="testimonio in testimoniosData" :key="testimonio.id" class="testimonio-card">
        <div class="comilla-icon">"</div>
        <p class="testimonio-texto">{{ testimonio.testimonio }}</p>
        <div class="testimonio-autor">
          <div class="autor-info">
            <h4>{{ testimonio.nombre }}</h4>
            <span class="cargo">{{ testimonio.cargo }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { testimonios } from '@/data/datos'

const testimoniosData = ref(testimonios)
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

.testimonios-container {
  padding: 1rem 0;
}

.testimonios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonio-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.testimonio-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-claro) 100%);
}

.testimonio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 255, 255, 0.15);
  border-left-color: var(--primary-claro);
}

.comilla-icon {
  font-size: 3rem;
  color: var(--primary);
  opacity: 0.3;
  margin-bottom: 1rem;
  font-family: Georgia, serif;
}

.testimonio-texto {
  font-style: italic;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.testimonio-autor {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.autor-info h4 {
  color: var(--primary-claro);
  margin: 0 0 0.25rem;
  font-size: 1rem;
}

.cargo {
  color: var(--text-secondary);
  font-size: 0.85rem;
  display: block;
}

@media (max-width: 768px) {
  .testimonios-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .testimonio-card {
    padding: 1.5rem;
  }

  .comilla-icon {
    font-size: 2.5rem;
  }

  .testimonio-texto {
    font-size: 0.9rem;
  }
}
</style>