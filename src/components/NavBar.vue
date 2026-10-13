<template>
  <header class="navbar">
    <nav class="navbar-container" aria-label="Principal">
      <!-- Marca -->
      <a href="#sobremi" class="marca">Gustavo Rodriguez</a>

      <!-- Links a las secciones -->
      <ul class="nav-list">
        <li v-for="nav in navegacion" :key="nav.id">
          <a :href="nav.enlace" class="nav-item">{{ nav.nombre }}</a>
        </li>
      </ul>

      <div class="acciones">
        <!-- Cambio de tema claro / oscuro -->
        <button type="button" class="btn-tema" :aria-label="oscuro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
          :title="oscuro ? 'Tema claro' : 'Tema oscuro'" @click="alternarTema">
          <!-- Sol (se muestra en tema oscuro) -->
          <svg v-if="oscuro" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <!-- Luna (se muestra en tema claro) -->
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>

        <!-- Descarga del CV -->
        <a :href="`/${cvPDF}`" class="btn btn-secundario btn-cv" download="CV_GustavoRodriguez.pdf"
          title="Descargar CV">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
          </svg>
          CV
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { contacto } from '@/data/datos'

const cvPDF = contacto.cvPDF

const navegacion = [
  { id: 1, nombre: 'Proyectos', enlace: '#proyectos' },
  { id: 2, nombre: 'Formación', enlace: '#formacion' },
  { id: 3, nombre: 'Contacto', enlace: '#contacto' }
]

/* ------------------------------------------------------------
   TEMA CLARO / OSCURO
   - Por defecto: oscuro.
   - La elección se guarda en localStorage (con try/catch: puede estar bloqueado).
   - Se aplica con el atributo data-theme en <html>; los colores salen de App.vue.
   ------------------------------------------------------------ */
const CLAVE = 'tema-portafolio'
const oscuro = ref(true)

const aplicar = (esOscuro) => {
  oscuro.value = esOscuro
  document.documentElement.setAttribute('data-theme', esOscuro ? 'dark' : 'light')
}

const alternarTema = () => {
  aplicar(!oscuro.value)
  try {
    localStorage.setItem(CLAVE, oscuro.value ? 'dark' : 'light')
  } catch (e) {
    /* sin almacenamiento: el cambio vale solo para esta visita */
  }
}

onMounted(() => {
  let guardado = null
  try {
    guardado = localStorage.getItem(CLAVE)
  } catch (e) {
    guardado = null
  }
  aplicar(guardado !== 'light')
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.navbar-container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.marca {
  font-weight: 700;
  text-decoration: none;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin-left: auto;
}

.nav-item {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: var(--text);
}

.acciones {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.btn-tema {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.btn-tema:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-cv {
  padding: 0.4rem 0.9rem;
  font-size: 0.88rem;
}

/* Pantallas chicas: los links bajan a una segunda fila */
@media (max-width: 640px) {
  .navbar-container {
    flex-wrap: wrap;
    padding: 0.6rem 1.25rem;
    gap: 0.5rem 1rem;
  }

  .acciones {
    margin-left: auto;
  }

  .nav-list {
    order: 3;
    width: 100%;
    margin-left: 0;
    gap: 1.25rem;
  }
}
</style>
