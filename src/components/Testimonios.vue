<template>
  <!-- ==============================
       SECCIÓN DE TESTIMONIOS
       ============================== -->
  <div class="testimonios-container">
    <div class="testimonios-grid">
      <!-- Se recorre el array "testimoniosData" para generar una tarjeta por testimonio -->
      <div v-for="testimonio in testimoniosData" :key="testimonio.id" class="testimonio-card">

        <!-- Comilla decorativa -->
        <div class="comilla-icon">"</div>

        <!-- Texto del testimonio -->
        <p class="testimonio-texto">{{ testimonio.testimonio }}</p>

        <!-- Información del autor -->
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

/* Array reactivo con los datos de los testimonios */
const testimoniosData = ref(testimonios)
</script>

<style scoped>
/* ==============================
   VARIABLES GLOBALES
   ============================== */
:root {
  --primary: #00ffff;           /* Color principal (borde y detalles) */
  --primary-claro: #93dede;    /* Color secundario para gradientes */
  --text-primary: #ffffff;      /* Texto principal */
  --text-secondary: #cccccc;    /* Texto secundario */
  --bg-secondary: #2a2a2a;      /* Fondo de tarjetas */
  --border: #333;               /* Color de separadores */
}

/* ==============================
   CONTENEDOR PRINCIPAL
   ============================== */
.testimonios-container {
  padding: 1rem 0;
}

/* Grid de tarjetas */
.testimonios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* ==============================
   TARJETA DE TESTIMONIO
   ============================== */
.testimonio-card {
  background:  #2a2a2a;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--primary); /* Borde lateral color principal */
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

/* Línea decorativa superior */
.testimonio-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-claro) 100%);
}

/* Efecto hover en la tarjeta */
.testimonio-card:hover {
  transform: translateY(-5px); /* Levanta ligeramente la tarjeta */
  box-shadow: 0 12px 24px rgba(0, 255, 255, 0.15); /* Sombra suave */
  border-left-color: var(--primary-claro); /* Cambia color del borde lateral */
}

/* ==============================
   ICONO DE COMILLA
   ============================== */
.comilla-icon {
  font-size: 3rem;
  color: var(--primary);
  opacity: 0.3;
  margin-bottom: 1rem;
  font-family: Georgia, serif;
}

/* ==============================
   TEXTO DEL TESTIMONIO
   ============================== */
.testimonio-texto {
  font-style: italic;
  color: var(--text-secondary);
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  line-height: 1.6;
}

/* ==============================
   INFORMACIÓN DEL AUTOR
   ============================== */
.testimonio-autor {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border); /* Separador superior */
}

/* Nombre del autor */
.autor-info h4 {
  color: var(--primary-claro);
  margin: 0 0 0.25rem;
  font-size: 1rem;
}

/* Cargo del autor */
.cargo {
  color: var(--text-secondary);
  font-size: 0.85rem;
  display: block;
}

/* ==============================
   RESPONSIVE
   ============================== */
@media (max-width: 768px) {
  .testimonios-grid {
    grid-template-columns: 1fr; /* Una columna en móvil */
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
