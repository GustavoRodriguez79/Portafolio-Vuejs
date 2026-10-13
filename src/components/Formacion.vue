<template>
  <div class="formacion">
    <!-- Estudios -->
    <h3 class="grupo">Estudios</h3>
    <div v-for="e in educacion" :key="`e${e.id}`" class="fila">
      <p class="fecha">{{ e.fecha }}</p>
      <div>
        <h4>
          <a v-if="e.enlace" :href="e.enlace" target="_blank" rel="noopener noreferrer">{{ e.titulo }}</a>
          <template v-else>{{ e.titulo }}</template>
        </h4>
        <p class="lugar">{{ e.institucion }}</p>
        <p class="texto">{{ e.descripcion }}</p>
      </div>
    </div>

    <!-- Experiencia -->
    <h3 class="grupo">Experiencia</h3>
    <div v-for="x in experiencia" :key="`x${x.id}`" class="fila">
      <p class="fecha">{{ x.periodo }}</p>
      <div>
        <h4>{{ x.titulo }}</h4>
        <p class="lugar">{{ x.empresa }}</p>
        <p class="texto">{{ x.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { educacion, experiencia } from '@/data/datos'
</script>

<style scoped>
.grupo {
  font-size: 0.8rem;
  font-family: var(--mono);
  font-weight: 500;
  color: var(--muted);
  margin: 0 0 1.5rem;
}

.grupo:not(:first-child) {
  margin-top: 3.5rem;
}

.fila {
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 1.5rem;
  padding-bottom: 1.75rem;
}

.fecha {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  padding-top: 0.2rem;
}

h4 {
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

h4 a {
  text-decoration: none;
}

h4 a:hover {
  color: var(--accent);
}

.lugar {
  color: var(--accent);
  font-size: 0.92rem;
  margin-bottom: 0.4rem;
}

.texto {
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .fila {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
</style>
