<template>
  <div class="proyectos">
    <!-- Una fila por proyecto: título, descripción corta, tecnologías y links -->
    <article v-for="p in visibles" :key="p.id" class="proyecto">
      <header class="proyecto-cabecera">
        <h3>{{ p.titulo }}</h3>
        <span class="meta">
          <span v-if="p.estado === 'En Progreso'" class="en-progreso">En progreso</span>
          <span>{{ p.fecha }}</span>
        </span>
      </header>

      <p class="descripcion">{{ p.descripcion }}</p>
      <p class="tecnologias">{{ p.tecnologias.join(' · ') }}</p>

      <div class="links">
        <a v-for="l in enlaces(p)" :key="l.texto" :href="l.url" target="_blank" rel="noopener noreferrer"
          class="link">{{ l.texto }} ↗</a>
        <span v-if="!enlaces(p).length" class="proximamente">Próximamente</span>
      </div>
    </article>

    <!-- Pie de la lista -->
    <div class="pie">
      <button v-if="resto" type="button" class="btn btn-secundario" @click="verTodos = !verTodos">
        {{ verTodos ? 'Ver menos' : `Ver los ${proyectos.length} proyectos` }}
      </button>
      <a :href="github" target="_blank" rel="noopener noreferrer" class="link">Todos mis repositorios en GitHub ↗</a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { proyectos, contacto } from '@/data/datos'

const github = contacto.github
const verTodos = ref(false)

// Un enlace es válido si existe y no es el placeholder '#'
const tieneEnlace = (url) => Boolean(url) && url !== '#'

// Destacados (campo "destacado" en datos.js), en el orden indicado
const destacados = computed(() =>
  proyectos.filter((p) => p.destacado).sort((a, b) => a.destacado - b.destacado)
)
const resto = computed(() => proyectos.filter((p) => !p.destacado).length > 0)
const visibles = computed(() =>
  verTodos.value ? [...destacados.value, ...proyectos.filter((p) => !p.destacado)] : destacados.value
)

// Links de cada proyecto: "Demo" (si hay sitio en vivo) y "Código" (repositorio)
const enlaces = (p) => {
  const lista = []
  if (tieneEnlace(p.enlace) && p.enlace !== p.repositorio) lista.push({ texto: 'Demo', url: p.enlace })
  if (tieneEnlace(p.repositorio)) lista.push({ texto: 'Código', url: p.repositorio })
  else if (tieneEnlace(p.enlace) && !lista.length) lista.push({ texto: 'Ver', url: p.enlace })
  return lista
}
</script>

<style scoped>
.proyecto {
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--border);
}

.proyecto:first-child {
  padding-top: 0;
}

.proyecto-cabecera {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.35rem;
  letter-spacing: -0.02em;
}

.meta {
  display: inline-flex;
  gap: 0.75rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--muted);
  white-space: nowrap;
}

.en-progreso {
  color: var(--accent);
}

.descripcion {
  color: var(--muted);
  margin-bottom: 0.75rem;
}

.tecnologias {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 1rem;
}

.links {
  display: flex;
  gap: 1.25rem;
}

.link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
}

.link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.proximamente {
  font-size: 0.9rem;
  color: var(--muted);
}

.pie {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
}

@media (max-width: 640px) {
  .proyecto-cabecera {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
