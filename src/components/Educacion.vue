<template>
  <!-- Sección principal que contiene toda la línea de tiempo educativa -->
  <div class="educacion-container">
    <div class="timeline">
      <!-- Se recorre el arreglo 'educacionData' y se genera una tarjeta (timeline-item) por cada entrada -->
      <div v-for="item in educacionData" :key="item.id" class="timeline-item">
        <!-- Marcador visual circular que representa cada hito educativo -->
        <div class="timeline-marker"></div>

        <!-- Contenido del hito (año, título, institución, descripción, habilidades, etc.) -->
        <div class="timeline-content">
          <!-- Etiqueta con la fecha o periodo -->
          <div class="fecha-badge">{{ item.fecha }}</div>

          <!-- Título del estudio o curso -->
          <h3>{{ item.titulo }}</h3>

          <!-- Nombre de la institución educativa -->
          <p class="institucion">{{ item.institucion }}</p>

          <!-- Descripción breve de los contenidos o logros -->
          <p class="descripcion">{{ item.descripcion }}</p>

          <!-- Sección opcional de habilidades adquiridas, mostradas como etiquetas -->
          <div v-if="item.habilidades" class="habilidades-mini">
            <span v-for="hab in item.habilidades" :key="hab" class="hab-tag">{{ hab }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importamos la función 'ref' para crear variables reactivas y los datos de educación desde la carpeta 'data'
import { ref } from 'vue'
import { educacion } from '@/data/datos'

// Creamos una referencia reactiva que contendrá la información educativa proveniente del archivo de datos
const educacionData = ref(educacion)
</script>

<style scoped>
/* ==============================
   VARIABLES GLOBALES DE COLOR Y ESTILO
   ============================== */
:root {
  --primary: #00ffff;        /* Color principal (cian brillante) */
  --primary-claro: #93dede;  /* Versión más clara del color principal */
  --text-primary: #ffffff;   /* Color principal del texto */
  --text-secondary: #cccccc; /* Color secundario del texto */
  --bg-secondary: #2a2a2a;   /* Fondo gris oscuro para tarjetas */
  --bg-primary: #1a1a1a;     /* Fondo principal de la página */
  --border: #333;            /* Color de bordes */
}

/* ==============================
   CONTENEDOR PRINCIPAL
   ============================== */
.educacion-container {
  padding: 1rem 0; /* Espaciado vertical */
}

/* ==============================
   LÍNEA DE TIEMPO
   ============================== */
.timeline {
  position: relative;
  padding-left: 3rem; /* Espacio para la línea y marcadores */
}

/* Línea vertical central que une todos los hitos */
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

/* Cada bloque de la línea de tiempo */
.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  animation: slideInUp 0.6s ease-out backwards; /* Animación de aparición suave */
}

/* Se aplican pequeños retrasos en la animación para un efecto escalonado */
.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }

/* ==============================
   MARCADOR CIRCULAR DE CADA HITO
   ============================== */
.timeline-marker {
  position: absolute;
  left: -2.65rem;
  top: 0;
  width: 18px;
  height: 18px;
  background: var(--bg-primary);
  border: 4px solid var(--primary);
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

/* Efecto de hover para resaltar el hito */
.timeline-item:hover .timeline-marker {
  transform: scale(1.3);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
}

/* ==============================
   CONTENIDO DE CADA TARJETA
   ============================== */
.timeline-content {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 25px;
  border: 2px solid var(--primary);
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Al pasar el cursor, se ilumina la tarjeta */
.timeline-item:hover .timeline-content {
  border-color: var(--primary-claro);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  transform: translateX(10px); /* Se desplaza ligeramente hacia la derecha */
}

/* ==============================
   ETIQUETA DE FECHA
   ============================== */
.fecha-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

/* ==============================
   TÍTULOS Y TEXTOS
   ============================== */
.timeline-content h3 {
  color: var(--primary);
  font-size: 1.4rem;
  margin: 0.5rem 0;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

.institucion {
  color: #ffffff;
  font-weight: 600;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.descripcion {
  color: #cccccc;
  margin: 1rem 0;
  line-height: 1.7; /* Mejora la legibilidad del texto */
}

/* ==============================
   ETIQUETAS DE HABILIDADES
   ============================== */
.habilidades-mini {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

/* ============================================================
   ETIQUETAS DE HABILIDADES - EFECTO HOVER UNIFICADO
   Transición suave, cambio de color a cian, efecto de brillo
   y elevación visual al pasar el mouse.
   ============================================================ */
.hab-tag {
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

.hab-tag:hover {
  background: var(--primary); /* Fondo cambia a color principal */
  color: #000000; /* Texto negro */
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.5); /* Luz sutil */
  border-color: var(--primary-light);
  transform: translateY(-2px);  /* Pequeña elevación */
}

/* ==============================
   ANIMACIÓN DE ENTRADA
   ============================== */
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

/* ==============================
   AJUSTES RESPONSIVOS (MÓVIL)
   ============================== */
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
