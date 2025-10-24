<template>
  <!-- ==============================
       SECCIÓN DE EXPERIENCIA PROFESIONAL
       ============================== -->
  <div class="experiencia-grid">
    <!-- Se recorre el arreglo 'experienciaData' y se genera una tarjeta (exp-card) para cada experiencia -->
    <div v-for="exp in experienciaData" :key="exp.id" class="exp-card">

      <!-- Encabezado de la tarjeta: título del puesto y periodo -->
      <div class="exp-header">
        <h3>{{ exp.titulo }}</h3>
        <span class="periodo">{{ exp.periodo }}</span>
      </div>

      <!-- Nombre de la empresa -->
      <p class="empresa">{{ exp.empresa }}</p>

      <!-- Descripción general de las tareas o responsabilidades -->
      <p class="descripcion">{{ exp.descripcion }}</p>

      <!-- Lista de logros destacados (con ícono de check verde) -->
      <ul class="logros">
        <li v-for="logro in exp.logros" :key="logro">
          <span class="check">✓</span> {{ logro }}
        </li>
      </ul>

      <!-- Listado de tecnologías empleadas, mostrado como etiquetas (badges) -->
      <div v-if="exp.tecnologias" class="tech-list">
        <span v-for="tech in exp.tecnologias" :key="tech" class="tech-badge">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// ==============================
// IMPORTACIÓN DE DATOS Y CONFIGURACIÓN REACTIVA
// ==============================
import { ref } from 'vue'
import { experiencia } from '@/data/datos'

// Se crea una referencia reactiva que contendrá los datos importados
// Esto permite que el componente se actualice automáticamente si cambian los datos
const experienciaData = ref(experiencia)
</script>

<style scoped>
/* ==============================
   VARIABLES GLOBALES DE COLOR Y ESTILO
   ============================== */
:root {
  --primary: #00ffff;        /* Color principal (cian brillante) */
  --primary-claro: #93dede;  /* Variante más clara del color principal */
  --text-primary: #ffffff;   /* Texto principal blanco */
  --text-secondary: #cccccc; /* Texto secundario gris claro */
  --bg-secondary: #2a2a2a;   /* Fondo oscuro de las tarjetas */
  --border: #333;            /* Color para bordes */
  --success: #00ff88;        /* Verde para íconos de logros */
}

/* ==============================
   GRID PRINCIPAL DE EXPERIENCIAS
   ============================== */
.experiencia-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem; /* Espaciado entre tarjetas */
}

/* ==============================
   TARJETAS DE EXPERIENCIA (exp-card)
   ============================== */
.exp-card {
  background: #2a2a2a;
  padding: 2.5rem;
  border-radius: 25px;
  border: 2px solid var(--primary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Línea superior decorativa con degradado */
.exp-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-claro) 100%);
}

/* Efecto hover: levanta la tarjeta y resalta el borde */
.exp-card:hover {
  border-color: var(--primary-claro);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
  transform: translateY(-5px);
}

/* ==============================
   ENCABEZADO DE LA EXPERIENCIA
   ============================== */
.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* Título del puesto o rol desempeñado */
.exp-header h3 {
  color: var(--primary);
  font-size: 1.4rem;
  margin: 0;
  flex: 1;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

/* Periodo de trabajo (fecha de inicio y fin) */
.periodo {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color:#ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
}

/* ==============================
   INFORMACIÓN DE LA EMPRESA Y DESCRIPCIÓN
   ============================== */
.empresa {
  color: var(--text-secondary);
  font-weight: 600;
  margin: 0.5rem 0 1rem;
  font-size: 0.95rem;
}

.descripcion {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

/* ==============================
   LISTA DE LOGROS
   ============================== */
.logros {
  list-style: none; /* Quita los puntos predeterminados */
  margin: 1.5rem 0;
  padding: 0;
}

.logros li {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Ícono verde de check antes de cada logro */
.check {
  color: var(--success);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ==============================
   TECNOLOGÍAS UTILIZADAS
   ============================== */
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border); /* Línea divisoria superior */
}
/* ============================================================
   CHIPS DE TECNOLOGÍAS - EFECTO HOVER UNIFICADO
   Transición suave, cambio de color a cian, efecto de brillo,
   cambio de borde y elevación visual al pasar el mouse.
   ============================================================ */
.tech-badge {
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
.tech-badge:hover {
  background: var(--primary); /* Fondo cambia a color principal */
  color: #000000; /* Texto negro */
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.5); /* Luz sutil */
  border-color: var(--primary-light);
  transform: translateY(-2px);  /* Pequeña elevación */
}


/* ==============================
   DISEÑO RESPONSIVO (PANTALLAS PEQUEÑAS)
   ============================== */
@media (max-width: 768px) {
  .experiencia-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .exp-card {
    padding: 1.5rem;
  }

  .exp-header {
    flex-direction: column;
  }

  .periodo {
    align-self: flex-start;
  }

  .exp-header h3 {
    font-size: 1.2rem;
  }
}
</style>
