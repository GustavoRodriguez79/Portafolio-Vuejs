<!-- ============================================================
  COMPONENTE: DatosPersonales.vue (portada + stack)
  - Nombre y frase corta, con foto pequeña
  - Presentación animada: se escribe un código JavaScript y debajo aparece su salida
  - Stack tecnológico en una lista compacta
  ============================================================ -->

<template>
  <section id="sobremi" class="portada">
    <!-- Nombre -->
    <div class="portada-top">
      <img :src="`/${datos.foto}`" :alt="datos.nombre" class="avatar" />
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

    <!-- Presentación animada. Cada bloque lleva un texto "fantasma" invisible que reserva el alto
         (sin saltos de layout) y el texto real se superpone. El resumen completo queda en aria-label
         para lectores de pantalla. -->
    <div class="consola" ref="consolaRef" role="img" :aria-label="salidaCompleta">
      <div class="consola-barra" aria-hidden="true">
        <span class="punto rojo"></span><span class="punto amarillo"></span><span class="punto verde"></span>
        <span class="consola-archivo">sobre-mi.js</span>
      </div>

      <div class="bloque" aria-hidden="true">
        <pre class="fantasma">{{ codigoCompleto }}</pre>
        <pre
          class="escrito"><span v-html="codigoHtml"></span><span v-if="fase === 'codigo'" class="cursor"></span></pre>
      </div>

      <div class="consola-salida-barra" aria-hidden="true">
        <span>Salida · node sobre-mi.js</span>
        <span>{{ estadoTexto }}</span>
      </div>

      <div class="bloque" aria-hidden="true">
        <pre class="fantasma salida">&gt; {{ salidaCompleta }}</pre>
        <pre
          class="escrito salida"><span v-if="fase === 'salida' || fase === 'fin'" class="prompt">&gt; </span>{{ salidaEscrita }}<span v-if="fase === 'salida'" class="cursor"></span></pre>
      </div>
    </div>

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

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'           // Importa herramientas reactivas de Vue
import { datosPersonales, tecnologias, presentacion, contacto } from '@/data/datos' // Importa los datos del usuario desde un archivo externo

// Se almacenan los datos personales en una referencia reactiva
const datos = ref(datosPersonales)
const cvPDF = contacto.cvPDF

/* ------------------------------------------------------------
   Computed property: tecnologiasConIconos
   - Toma la lista de tecnologías (con sus íconos SVG de Devicons)
     desde src/data/datos.js, así se edita en un solo lugar.
   - Se utiliza un "computed" para mantener reactividad y claridad.
   ------------------------------------------------------------ */
const tecnologiasConIconos = computed(() => tecnologias)

/* ------------------------------------------------------------
   PRESENTACIÓN ANIMADA ("Sobre mí" escrito como código JavaScript)
   Fases: espera -> codigo (se escribe) -> ejecutando -> salida (se escribe) -> fin
   - Empieza cuando la consola entra en pantalla (IntersectionObserver).
   - Con "reducir movimiento" activado, muestra todo de una vez.
   - Velocidades en milisegundos por letra (más bajo = más rápido).
   ------------------------------------------------------------ */
const VELOCIDAD_CODIGO_MS = 8
const VELOCIDAD_SALIDA_MS = 16
const PAUSA_EJECUCION_MS = 700

// "a, b y c": igual que la función listar() del código que se muestra
const listar = (xs) => xs.slice(0, -1).join(', ') + ' y ' + xs[xs.length - 1]
const comillas = (t) => JSON.stringify(t)
const lista = (xs) => '[' + xs.map(comillas).join(', ') + ']'

// Texto del código que se escribe (se arma con los datos de datos.js)
const codigoCompleto = computed(() => {
  const d = presentacion
  return [
    'const gustavo = {',
    `  rol: ${comillas(d.rol)},`,
    `  carrera: ${comillas(d.carrera)},`,
    `  universidad: ${comillas(d.universidad)},`,
    `  stack: ${lista(d.stack)},`,
    `  bases: ${lista(d.bases)},`,
    `  pasion: ${comillas(d.pasion)},`,
    '};',
    '',
    'const listar = (xs) => xs.slice(0, -1).join(", ") + " y " + xs.at(-1);',
    '',
    'const presentarse = (d) =>',
    '  `${d.rol} de la ${d.carrera} en la ${d.universidad}. ` +',
    '  `Desarrollo aplicaciones web full stack con ${listar(d.stack)} ` +',
    '  `sobre bases de datos ${listar(d.bases)}, ` +',
    '  `y me apasiona ${d.pasion} trabajando en equipo.`;',
    '',
    'console.log(presentarse(gustavo));'
  ].join('\n')
})

// Resultado de ejecutar ese código
const salidaCompleta = computed(() => {
  const d = presentacion
  return `${d.rol} de la ${d.carrera} en la ${d.universidad}. ` +
    `Desarrollo aplicaciones web full stack con ${listar(d.stack)} ` +
    `sobre bases de datos ${listar(d.bases)}, ` +
    `y me apasiona ${d.pasion} trabajando en equipo.`
})

/* Resaltado de sintaxis simple: comentarios, textos, palabras clave, números y funciones */
const escapar = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;')
const REGEX_TOKENS = /(\/\/[^\n]*)|(`[^`]*`|"[^"\n]*")|\b(const|let|await|async|function|return|new)\b|(\b\d+\b)|(\b[a-zA-Z_]\w*)(?=\()/g

const resaltar = (texto) => {
  let html = ''
  let ultimo = 0
  texto.replace(REGEX_TOKENS, (m, com, str, kw, num, fn, indice) => {
    html += escapar(texto.slice(ultimo, indice))
    const clase = com ? 'tk-com' : str ? 'tk-str' : kw ? 'tk-kw' : num ? 'tk-num' : 'tk-fn'
    html += `<span class="${clase}">${escapar(m)}</span>`
    ultimo = indice + m.length
    return m
  })
  return html + escapar(texto.slice(ultimo))
}

const consolaRef = ref(null)
const fase = ref('espera')
const codigoEscrito = ref('')
const salidaEscrita = ref('')
const codigoHtml = computed(() => resaltar(codigoEscrito.value))
const estadoTexto = computed(() => {
  if (fase.value === 'ejecutando') return '● ejecutando…'
  if (fase.value === 'salida' || fase.value === 'fin') return '✔ listo'
  return ''
})

let temporizador = null
let observador = null

// Escribe "completo" letra por letra en la referencia "destino"
const escribirTexto = (completo, destino, velocidad, alTerminar) => {
  let i = 0
  temporizador = setInterval(() => {
    i++
    destino.value = completo.slice(0, i)
    if (i >= completo.length) {
      clearInterval(temporizador)
      alTerminar()
    }
  }, velocidad)
}

const iniciar = () => {
  fase.value = 'codigo'
  escribirTexto(codigoCompleto.value, codigoEscrito, VELOCIDAD_CODIGO_MS, () => {
    fase.value = 'ejecutando'
    temporizador = setTimeout(() => {
      fase.value = 'salida'
      escribirTexto(salidaCompleta.value, salidaEscrita, VELOCIDAD_SALIDA_MS, () => {
        fase.value = 'fin'
      })
    }, PAUSA_EJECUCION_MS)
  })
}

onMounted(() => {
  const sinAnimacion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (sinAnimacion || !('IntersectionObserver' in window)) {
    codigoEscrito.value = codigoCompleto.value
    salidaEscrita.value = salidaCompleta.value
    fase.value = 'fin'
    return
  }
  observador = new IntersectionObserver(([entrada]) => {
    if (entrada.isIntersecting) {
      observador.disconnect()
      iniciar()
    }
  }, { threshold: 0.3 })
  observador.observe(consolaRef.value)
})

onBeforeUnmount(() => {
  clearInterval(temporizador)
  clearTimeout(temporizador)
  if (observador) observador.disconnect()
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
  margin-bottom: 3.5rem;
}

/* ------------------------------------------------------------
   CONSOLA ANIMADA (código + salida). Siempre oscura.
   ------------------------------------------------------------ */
.consola {
  background: var(--consola-bg);
  border: 1px solid var(--consola-borde);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 4rem;
  text-align: left;
}

.consola-barra {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0.55rem 0.9rem;
  background: var(--consola-barra);
  border-bottom: 1px solid var(--consola-borde);
}

.punto {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.punto.rojo {
  background: #ff5f56;
}

.punto.amarillo {
  background: #ffbd2e;
}

.punto.verde {
  background: #27c93f;
}

.consola-archivo {
  margin-left: 8px;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: #9aa6b2;
}

.consola-salida-barra {
  display: flex;
  justify-content: space-between;
  padding: 0.45rem 0.9rem;
  background: var(--consola-barra);
  border-top: 1px solid var(--consola-borde);
  border-bottom: 1px solid var(--consola-borde);
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9aa6b2;
}

/* Cada bloque tiene un texto invisible (reserva el alto) y el texto real encima */
.bloque {
  position: relative;
}

.bloque pre {
  margin: 0;
  padding: 1rem 1.1rem;
  font: 0.78rem/1.55 var(--mono);
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--consola-texto);
}

.bloque .fantasma {
  visibility: hidden;
}

.bloque .escrito {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.bloque .salida {
  color: #ffffff;
  font-size: 0.85rem;
}

.prompt {
  color: var(--consola-acento);
}

/* Colores del resaltado de sintaxis (v-html: se aplican con :deep) */
.escrito :deep(.tk-kw) {
  color: #ff79c6;
}

.escrito :deep(.tk-str) {
  color: #f1fa8c;
}

.escrito :deep(.tk-com) {
  color: #6a9955;
  font-style: italic;
}

.escrito :deep(.tk-num) {
  color: #bd93f9;
}

.escrito :deep(.tk-fn) {
  color: #50fa7b;
}

/* Cursor parpadeante */
.cursor {
  display: inline-block;
  width: 0.55ch;
  height: 1.1em;
  vertical-align: text-bottom;
  background: var(--consola-acento);
  margin-left: 1px;
  animation: parpadeo 1s steps(1) infinite;
}

@keyframes parpadeo {
  50% {
    opacity: 0;
  }
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

  .bloque pre {
    font-size: 0.68rem;
    padding: 0.8rem;
  }

  .bloque .salida {
    font-size: 0.78rem;
  }
}
</style>
