<template>
  <!-- Contenedor principal de la sección de intereses y objetivos -->
  <div class="intereses-container">

    <!-- ==========================
         Grid de tarjetas de intereses
         ========================== -->
    <div class="intereses-grid">
      <!-- Recorremos el arreglo de intereses para generar cada tarjeta -->
      <div v-for="interes in interesesData" :key="interes.id" class="interes-card">

        <!-- Icono representativo del interés -->
        <div class="interes-icon">{{ interes.icon }}</div>

        <!-- Título del interés -->
        <h3>{{ interes.titulo }}</h3>

        <!-- Descripción breve del interés -->
        <p>{{ interes.descripcion }}</p>

        <!-- Lista de tags relacionados al interés -->
        <div class="interes-tags">
          <!-- Recorremos cada tag y lo mostramos -->
          <span v-for="tag in interes.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- ==========================
         Sección de objetivos profesionales
         ========================== -->
    <div class="objetivos-section">

      <!-- Título de la sección de objetivos -->
      <h3>Objetivos Profesionales</h3>

      <!-- Contenedor de los objetivos en formato lista/grid -->
      <div class="objetivos-list">
        <!-- Recorremos el arreglo de objetivos para crear cada item -->
        <div v-for="objetivo in objetivosData" :key="objetivo.id" class="objetivo-item">

          <!-- Número o índice del objetivo -->
          <span class="objetivo-number">{{ objetivo.id }}</span>

          <!-- Contenido del objetivo: título y descripción -->
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

const interesesData = ref(intereses)   // Contiene el listado de intereses
const objetivosData = ref(objetivos)   // Contiene el listado de objetivos profesionales
</script>

<style scoped>
/* ==============================
   VARIABLES CSS GLOBALES
   ============================== */
:root {
  --primary: #00ffff;           /* Color principal */
  --primary-claro: #93dede;    /* Color principal claro */
  --text-primary: #ffffff;      /* Color de texto principal */
  --text-secondary: #cccccc;    /* Color de texto secundario */
  --bg-secondary: #2a2a2a;      /* Fondo secundario */
  --border: #333;               /* Color de bordes */
}

/* =================================
   CONTENEDOR PRINCIPAL
   ================================= */
.intereses-container {
  display: flex;                /* Layout flexible */
  flex-direction: column;       /* Coloca los elementos en columna */
  gap: 3rem;                    /* Separación entre secciones */
}

/* =================================
   GRID DE INTERESES
   ================================= */
.intereses-grid {
  display: grid;                                    /* Layout tipo grid */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Columnas adaptativas */
  gap: 2rem;                                       /* Espacio entre tarjetas */
}

/* =================================
   TARJETA DE INTERÉS
   ================================= */
.interes-card {
  background: #2a2a2a;            /* Fondo de la tarjeta */
  padding: 2rem;                  /* Espaciado interno */
  border-radius: 15px;            /* Bordes redondeados */
  border: 2px solid var(--primary); /* Borde principal */
  text-align: center;              /* Texto centrado */
  transition: all 0.3s ease;      /* Animación suave en hover */
  display: flex;                   /* Layout flexible interno */
  flex-direction: column;          /* Columnas internas */
  align-items: center;             /* Centrar contenido */
}

/* Efecto hover en tarjeta */
.interes-card:hover {
  border-color: var(--primary-claro); /* Cambia el borde */
  transform: translateY(-8px);        /* Se eleva un poco */
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.3); /* Sombra de luz */
}

/* =================================
   ICONO DEL INTERÉS
   ================================= */
.interes-icon {
  font-size: 3.5rem;                /* Tamaño grande */
  margin-bottom: 1rem;              /* Separación inferior */
  animation: bounce 2s ease-in-out infinite; /* Animación de rebote */
}

/* Delay en animación según la posición */
.interes-card:nth-child(1) .interes-icon { animation-delay: 0s; }
.interes-card:nth-child(2) .interes-icon { animation-delay: 0.2s; }
.interes-card:nth-child(3) .interes-icon { animation-delay: 0.4s; }

/* =================================
   TITULO Y DESCRIPCIÓN DE TARJETA
   ================================= */
.interes-card h3 {
  color: var(--primary);                        /* Color título */
  font-size: 1.3rem;
  margin: 0 0 0.75rem;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2); /* Sombra suave */
}

.interes-card p {
  color: var(--text-secondary);                /* Color descripción */
  margin: 0 0 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* =================================
   TAGS DE CADA INTERÉS
   ================================= */
.interes-tags {
  display: flex;
  flex-wrap: wrap;             /* Permite varias líneas */
  gap: 0.5rem;
  justify-content: center;     /* Centrar horizontalmente */
}
/* ============================================================
   CHIPS DE TECNOLOGÍAS - EFECTO HOVER UNIFICADO
   Transición suave, cambio de color a cian, efecto de brillo,
   cambio de borde y elevación visual al pasar el mouse.
   ============================================================ */
.tag {
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
.tag:hover {
  background: var(--primary);       /* Fondo cambia a color principal */
  color: #000000;       /* Texto negro */
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); /* Luz sutil */
  border-color: var(--primary-light);
  transform: translateY(-2px);      /* Pequeña elevación */
}

/* =================================
   SECCIÓN DE OBJETIVOS
   ================================= */
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

/* Grid de objetivos */
.objetivos-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Cada item individual */
.objetivo-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #2a2a2a;
  border-radius: 15px;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
}

/* Hover en item: elevación y sombra */
.objetivo-item:hover {
  transform: translateX(5px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
}

/* Número del objetivo */
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

/* Contenido de cada objetivo */
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

/* =================================
   ANIMACIONES
   ================================= */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* =================================
   ESTILOS RESPONSIVOS
   ================================= */
@media (max-width: 768px) {
  .intereses-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  .objetivos-list { grid-template-columns: 1fr; gap: 1.5rem; }
  .objetivo-item { flex-direction: column; align-items: flex-start; }
  .objetivo-number { width: 40px; height: 40px; font-size: 1rem; }
  .interes-icon { font-size: 2.8rem; }
}
</style>
