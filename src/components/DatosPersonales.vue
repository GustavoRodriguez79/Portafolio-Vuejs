<!-- ============================================================
  COMPONENTE: DatosPersonales.vue (portada + stack)
  - Nombre y frase corta, con foto pequeña
  - Video de presentación (monitor con código JavaScript y su salida)
  - Stack tecnológico en una lista compacta
  ============================================================ -->

<template>
  <section id="sobremi" class="portada">
    <!-- Nombre -->
    <div class="portada-top">
      <img :src="`/${datos.foto}`" :alt="datos.nombre" class="avatar" width="72" height="72" />
      <div>
        <p class="saludo">Hola, soy</p>
        <h1>{{ datos.nombre }}</h1>
      </div>
    </div>

    <p class="lead">{{ datos.lead }}</p>

    <div class="acciones">
      <a href="#proyectos" class="btn btn-primario">Ver proyectos</a>
      <a :href="`/${cvPDF}`" class="btn btn-secundario" download="CV_GustavoRodriguez.pdf">Descargar CV</a>
    </div>

    <!-- Video de presentación (20 s, sin audio). Con "reducir movimiento" no se reproduce solo y muestra controles. -->
    <video class="video-portada" src="/presentacion.mp4" poster="/poster.jpg" :autoplay="!reducirMovimiento"
      :controls="reducirMovimiento" muted loop playsinline preload="none"
      aria-label="Video de presentación de Gustavo Rodriguez: código JavaScript y su salida en un monitor"></video>

    <!-- Texto de la presentación para lectores de pantalla y buscadores (el video no lo contiene como texto) -->
    <p class="solo-lectores">{{ resumen }}</p>

    <!-- Stack -->
    <div class="stack">
      <h2 class="etiqueta">Stack</h2>
      <ul class="stack-lista">
        <li v-for="tech in tecnologiasConIconos" :key="tech.id" class="stack-item">
          <img :src="tech.iconUrl" alt="" class="stack-icono" :class="{ invertido: tech.invertir }" width="20"
            height="20" loading="lazy" />
          <span>{{ tech.nombre }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
/* ============================================================
   LÓGICA DEL COMPONENTE
   Uso de la API de composición de Vue 3 (Composition API)
   ============================================================ */

import { ref, computed } from 'vue'           // Importa herramientas reactivas de Vue
import { datosPersonales, tecnologias, presentacion, contacto } from '@/data/datos' // Importa los datos del usuario desde un archivo externo

// Se almacenan los datos personales en una referencia reactiva
const datos = ref(datosPersonales)
const cvPDF = contacto.cvPDF
// Si la persona pidió menos movimiento, el video no arranca solo
const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ------------------------------------------------------------
   Computed property: tecnologiasConIconos
   - Toma la lista de tecnologías (con sus íconos SVG de Devicons)
     desde src/data/datos.js, así se edita en un solo lugar.
   - Se utiliza un "computed" para mantener reactividad y claridad.
   ------------------------------------------------------------ */
const tecnologiasConIconos = computed(() => tecnologias)

/* ------------------------------------------------------------
   Texto de presentación (se arma con los datos de datos.js).
   Es el mismo que muestra el video; acá sirve para lectores de pantalla.
   ------------------------------------------------------------ */
const listar = (xs) => xs.slice(0, -1).join(', ') + ' y ' + xs[xs.length - 1]

const resumen = computed(() => {
  const d = presentacion
  return `${d.rol} de la ${d.carrera} en la ${d.universidad}. ` +
    `Desarrollo aplicaciones web full stack con ${listar(d.stack)} ` +
    `sobre bases de datos ${listar(d.bases)}, ` +
    `y me apasiona ${d.pasion} trabajando en equipo.`
})
</script>

<style scoped>
.portada {
  padding: 5rem 0 4rem;
}

.portada-top {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
  flex-shrink: 0;
}

.saludo {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--muted);
}

h1 {
  font-size: clamp(2rem, 6vw, 3.25rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 800;
}

.lead {
  font-size: 1.2rem;
  color: var(--muted);
  max-width: 34rem;
  margin-bottom: 2rem;
}

.acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

/* Video de presentación */
.video-portada {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: var(--consola-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-bottom: 4rem;
}

/* Texto solo para lectores de pantalla */
.solo-lectores {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

/* ------------------------------------------------------------
   STACK: lista plana y chica
   ------------------------------------------------------------ */
.stack-lista {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
}

.stack-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem 0.3rem 0.6rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.88rem;
  color: var(--muted);
}

.stack-icono {
  width: 20px;
  height: 20px;
}

.stack-icono.invertido {
  filter: var(--invert-icon);
}

@media (max-width: 640px) {
  .portada {
    padding: 3rem 0;
  }

  .avatar {
    width: 56px;
    height: 56px;
  }

  .lead {
    font-size: 1.05rem;
  }
}
</style>
