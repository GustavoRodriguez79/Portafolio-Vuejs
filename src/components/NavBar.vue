<template>
  <!-- ==========================
       BARRA DE NAVEGACIÓN
       ========================== -->
  <nav class="navbar">
    <div class="navbar-container">

      <!-- ==========================
           LOGO / MARCA
           ========================== -->
      <div class="navbar-brand">
        <h3>GAR Portafolio</h3>
      </div>

      <!-- ==========================
           MENÚ PRINCIPAL DE NAVEGACIÓN
           ========================== -->
      <div class="navbar-menu">
        <ul class="nav-list">
          <!-- Se recorre el array "navegacion" para generar los links -->
          <li v-for="nav in navegacion" :key="nav.id">
            <a :href="nav.enlace" class="nav-item">{{ nav.nombre }}</a>
          </li>
        </ul>
      </div>

      <!-- ==========================
           BOTÓN DE DESCARGA DEL CV
           ========================== -->
      <div class="navbar-actions">
        <a href="cv.pdf" class="btn-cv" download="CV_GustavoRodriguez.pdf" title="Descargar CV">
          <i class="fas fa-download"></i> CV
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

/* Array de navegación:
   Contiene los enlaces y nombres para cada sección de la página
   Se usa para renderizar dinámicamente el menú */
const navegacion = ref([
  { id: 1, nombre: 'Educación', enlace: '#educacion' },
  { id: 2, nombre: 'Experiencia', enlace: '#experiencia' },
  { id: 3, nombre: 'Proyectos', enlace: '#proyectos' },
  { id: 4, nombre: 'Habilidades', enlace: '#habilidades' },
  { id: 5, nombre: 'Intereses', enlace: '#intereses' }
])
</script>

<style scoped>
/* ==============================
   VARIABLES GLOBALES
   ============================== */
:root {
  --primary: #00ffff;           /* Color principal de la marca y elementos activos */
  --primary-claro: #93dede;    /* Color principal claro para hover o efectos */
  --text-primary: #ffffff;      /* Texto principal */
  --text-secondary: #cccccc;    /* Texto secundario */
  --bg-secondary: #1a1a1a;      /* Fondo de la navbar */
}

/* ==============================
   CONTENEDOR DE LA NAVBAR
   ============================== */
.navbar {
  background: var(--bg-secondary);               /* Fondo oscuro */
  box-shadow: 0 2px 10px rgba(0, 255, 255, 0.2); /* Sombra suave */
  position: sticky;                               /* Se queda pegada al hacer scroll */
  top: 0;
  z-index: 100;                                   /* Prioridad de superposición */
  border-bottom: 2px solid var(--primary);       /* Línea inferior decorativa */
}

/* Contenedor interno de los elementos */
.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;                  /* Layout flexible */
  justify-content: space-between; /* Distribuye espacio entre elementos */
  align-items: center;            /* Alinea verticalmente */
}

/* ==============================
   LOGO / MARCA
   ============================== */
.navbar-brand h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin: 0;
  font-weight: 800;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3); /* Resalta con sombra luminosa */
}

/* ==============================
   MENÚ DE NAVEGACIÓN
   ============================== */
.navbar-menu {
  flex: 1;             /* Ocupa todo el espacio disponible entre logo y acciones */
  margin: 0 2rem;      /* Margen lateral */
}

.nav-list {
  display: flex;       /* Lista horizontal */
  list-style: none;    /* Sin viñetas */
  gap: 2rem;           /* Separación entre items */
  margin: 0;
  padding: 0;
}

.nav-item {
  color: var(--primary);
  text-decoration: none;    /* Sin subrayado */
  font-weight: 600;
  transition: all 0.3s ease; /* Animaciones suaves en hover */
  position: relative;        /* Necesario para pseudo-elementos */
  padding-bottom: 5px;       /* Espacio para línea decorativa */
  font-size: 1rem;
}

/* Línea decorativa debajo del link que se anima */
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;                  /* Inicialmente no visible */
  height: 2px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-claro) 100%);
  transition: width 0.3s ease;
}

/* Hover en link: cambio de color y efecto de luz */
.nav-item:hover {
  color: var(--primary-claro);
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}

.nav-item:hover::after {
  width: 100%; /* La línea decorativa se expande al ancho completo */
}

/* ==============================
   BOTÓN DE DESCARGA DEL CV
   ============================== */
.btn-cv {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-claro) 100%);
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;       /* Bordes redondeados */
  text-decoration: none;
  font-weight: 700;
  transition: all 0.5s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3); /* Efecto de luz */
}

.btn-cv:hover {
  transform: translateY(-2px);                 /* Leve elevación */
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5); /* Luz más intensa */
}

/* ==============================
   ESTILOS RESPONSIVOS
   ============================== */
@media (max-width: 768px) {
  .navbar-container {
    flex-wrap: wrap;   /* Los elementos se acomodan en varias líneas */
    padding: 1rem;
  }

  .navbar-brand h3 {
    font-size: 1.2rem;
  }

  .navbar-menu {
    order: 3;          /* Aparece debajo del logo */
    width: 100%;
    margin: 1rem 0 0;
  }

  .nav-list {
    flex-direction: column; /* Lista vertical */
    gap: 1rem;
  }

  .btn-cv {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
