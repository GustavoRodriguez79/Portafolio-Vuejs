<template>
  <!-- ==========================
       SECCIÓN DE PROYECTOS
       ========================== -->
  <div class="proyectos-container">
    <div class="proyectos-grid">
      <!-- Se recorre el array "proyectosData" para crear una tarjeta por proyecto -->
      <div v-for="proyecto in proyectosData" :key="proyecto.id" class="proyecto-card">

        <!-- ==========================
             IMAGEN O REPRESENTACIÓN DEL PROYECTO
             ========================== -->
        <div class="proyecto-imagen">
          <!-- Placeholder visual (emoji) para representar el proyecto -->
          <div class="imagen-placeholder">{{ proyecto.emoji }}</div>

          <!-- Overlay que aparece al hacer hover sobre la imagen -->
          <div class="overlay">
            <!-- Si el proyecto está completado y tiene un enlace válido, abre en nueva ventana -->
            <a
              v-if="proyecto.estado === 'Completado' && proyecto.enlace && proyecto.enlace !== '#'"
              :href="proyecto.enlace"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ver"
            >
              Ver Proyecto
            </a>

            <!-- Si está completado pero el enlace no existe, muestra alerta -->
            <a
              v-else-if="proyecto.estado === 'Completado' && (!proyecto.enlace || proyecto.enlace === '#')"
              @click.prevent="mostrarEnProgreso(proyecto.titulo)"
              class="btn-ver"
            >
              Ver Proyecto
            </a>

            <!-- Si está en progreso, siempre muestra alerta -->
            <a
              v-else
              @click.prevent="mostrarEnProgreso(proyecto.titulo)"
              class="btn-ver"
            >
              Ver Proyecto
            </a>
          </div>
        </div>

        <!-- ==========================
             CONTENIDO DEL PROYECTO
             ========================== -->
        <div class="proyecto-contenido">
          <h3>{{ proyecto.titulo }}</h3>
          <p class="descripcion">{{ proyecto.descripcion }}</p>

          <!-- Tecnologías utilizadas -->
          <div class="tech-usado">
            <span v-for="tech in proyecto.tecnologias" :key="tech" class="tech-chip">{{ tech }}</span>
          </div>

          <!-- Estado y fecha -->
          <div class="proyecto-meta">
            <span class="estado" :class="proyecto.estado.toLowerCase()">{{ proyecto.estado }}</span>
            <span class="fecha">{{ proyecto.fecha }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { proyectos } from '@/data/datos'

/* Datos de proyectos */
const proyectosData = ref(proyectos)

/* Función para mostrar alerta si el proyecto está en progreso o no tiene enlace válido */
const mostrarEnProgreso = (titulo) => {
  alert(`"${titulo}" - Proyecto en progreso. ¡Vuelve pronto!`)
}
</script>

<style scoped>
/* ==============================
   VARIABLES GLOBALES
   ============================== */
:root {
  --primary: #00ffff;           /* Color principal para bordes y botones */
  --primary-claro: #93dede;    /* Color secundario para gradientes */
  --text-primary: #ffffff;      /* Texto principal */
  --text-secondary: #cccccc;    /* Texto secundario */
  --bg-secondary: #2a2a2a;      /* Fondo de tarjetas y chips */
  --border: #333;               /* Color de borde y separadores */
  --success: #00ff88;           /* Color para estado completado */
}

/* ==============================
   CONTENEDOR PRINCIPAL
   ============================== */
.proyectos-container {
  padding: 1rem 0;
}

/* Grid de proyectos, ajusta columnas automáticamente */
.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2rem;
}

/* ==============================
   TARJETA DE PROYECTO
   ============================== */
.proyecto-card {
  background: #2a2a2a;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid var(--primary);
}

/* Efecto hover en tarjeta */
.proyecto-card:hover {
  transform: translateY(-8px); /* Levanta la tarjeta */
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3); /* Luz alrededor */
  border-color: var(--primary-claro);
}

/* ==============================
   IMAGEN DEL PROYECTO
   ============================== */
.proyecto-imagen {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #00ffff 0%, #93dede 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Emoji flotante */
.imagen-placeholder {
  font-size: 5rem;
  animation: float 3s ease-in-out infinite; /* Animación de flotación */
}

/* Overlay oscuro que aparece al hover */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.proyecto-card:hover .overlay {
  opacity: 1; /* Aparece al hacer hover */
}

/* Botón para ver proyecto */
.btn-ver {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

/* Hover en botón */
.btn-ver:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

/* ==============================
   CONTENIDO DEL PROYECTO
   ============================== */
.proyecto-contenido {
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.proyecto-contenido h3 {
  color: var(--primary);
  font-size: 1.3rem;
  margin: 0 0 0.75rem;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

.descripcion {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* ==============================
   TECNOLOGÍAS USADAS
   ============================== */
.tech-usado {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

/* ============================================================
   CHIPS DE TECNOLOGÍAS - EFECTO HOVER UNIFICADO
   Transición suave, cambio de color a cian, efecto de brillo,
   cambio de borde y elevación visual al pasar el mouse.
   ============================================================ */
.tech-chip {
  background: var(--bg-secondary);
  color: var(--primary);
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid var(--primary);
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
}
/* Efecto hover en tags: cambio de color y brillo */
.tech-chip:hover {
  background: var(--primary); /* Fondo cambia a color principal */
  color: #000000; /* Texto negro */
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.5); /* Luz sutil */
  border-color: var(--primary-light);
  transform: translateY(-2px);  /* Pequeña elevación */
}

/* ==============================
   META DEL PROYECTO
   ============================== */
.proyecto-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.estado {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 15px;
}

/* Estado completado */
.estado.completado {
  background: rgba(0, 255, 136, 0.2);
  color: var(--success);
}

/* Estado en progreso */
.estado.en\ progreso {
  background: rgba(0, 255, 255, 0.2);
  color: var(--primary);
}

/* Fecha */
.fecha {
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
}

/* ==============================
   ANIMACIONES
   ============================== */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* ==============================
   RESPONSIVE
   ============================== */
@media (max-width: 768px) {
  .proyectos-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .proyecto-imagen {
    height: 180px;
  }

  .imagen-placeholder {
    font-size: 4rem;
  }

  .proyecto-contenido {
    padding: 1.5rem;
  }
}
</style>
