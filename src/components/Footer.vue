<!-- 
  ==============================
  COMPONENTE: Footer.vue
  ==============================
  Este componente representa el pie de página (footer) del portafolio personal.
  Incluye tres secciones principales:
  1. Contacto (enlaces a correo, LinkedIn y GitHub)
  2. Enlaces rápidos a secciones del sitio
  3. Íconos de redes sociales
  Además, muestra el año actual y un crédito al framework Vue.js.
-->

<template>
  <!-- Contenedor principal del pie de página -->
  <footer class="footer">
    <div class="footer-content">
      <!-- ===== Sección de contacto ===== -->
      <div class="footer-section">
        <h4>Contacto</h4>
        <div class="contact-links">
          <!-- Enlace para enviar correo -->
          <a :href="`mailto:${contactoData.email}`" class="contact-link">
            <i class="fas fa-envelope"></i> Email
          </a>
          <!-- Enlace a perfil de LinkedIn -->
          <a :href="contactoData.linkedin" target="_blank" rel="noopener noreferrer" class="contact-link">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <!-- Enlace a perfil de GitHub -->
          <a :href="contactoData.github" target="_blank" rel="noopener noreferrer" class="contact-link">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>

      <!-- ===== Sección de enlaces rápidos ===== -->
      <div class="footer-section">
        <h4>Enlaces Rápidos</h4>
        <div class="quick-links">
          <!-- Navegación interna mediante anclas a secciones del portafolio -->
          <a href="#sobremi" class="quick-link">Sobre mí</a>
          <a href="#educacion" class="quick-link">Educación</a>
          <a href="#experiencia" class="quick-link">Experiencia</a>
          <a href="#proyectos" class="quick-link">Proyectos</a>
          <a href="#habilidades" class="quick-link">Habilidades</a>
          <a href="#testimonios" class="quick-link">Testimonios</a>
        </div>
      </div>

      <!-- ===== Sección de redes sociales ===== -->
      <div class="footer-section">
        <h4>Sígueme</h4>
        <div class="social-icons">
          <!-- Cada ícono representa una red social diferente -->
          <a :href="contactoData.instagram" target="_blank" rel="noopener noreferrer" class="social-icon instagram" title="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a :href="contactoData.facebook" target="_blank" rel="noopener noreferrer" class="social-icon facebook" title="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a :href="contactoData.linkedin" target="_blank" rel="noopener noreferrer" class="social-icon linkedin" title="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a :href="contactoData.github" target="_blank" rel="noopener noreferrer" class="social-icon github" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a :href="`mailto:${contactoData.email}`" class="social-icon gmail" title="Gmail">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Línea decorativa que separa contenido del footer -->
    <div class="footer-divider"></div>

    <!-- Parte inferior del footer con derechos y créditos -->
    <div class="footer-bottom">
      <p>© {{ currentYear }} Gustavo Ariel Rodriguez. Todos los derechos reservados.</p>
      <p class="footer-credit">Desarrollado con <i class="fab fa-vuejs"></i> Vue.js</p>
    </div>
  </footer>
</template>

<script setup>
/* 
  ==============================
  LÓGICA DEL COMPONENTE
  ==============================
  Se utiliza la API de composición de Vue.js (Composition API)
  para manejar los datos de contacto y mostrar el año actual.
*/

import { ref, onMounted } from 'vue'
import { contacto } from '@/data/datos'

// Se crea una referencia reactiva que almacena la información de contacto
const contactoData = ref(contacto)

// Año actual mostrado dinámicamente en el footer
const currentYear = ref(new Date().getFullYear())

// onMounted asegura que el año se actualice automáticamente al montar el componente
onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<style scoped>
/* 
  ==============================
  ESTILOS DEL FOOTER
  ==============================
  Diseño oscuro con detalles en cian (color principal)
  y uso de gradientes, sombras y efectos hover para interacción.
*/

:root {
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-primary: #1a1a1a;
  --bg-darker: #0f0f0f;
  --border: #333;
}

/* Contenedor general del footer */
.footer {
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-darker) 100%);
  color: var(--text-secondary);
  padding: 4rem 2rem 2rem;
  margin-top: 5rem;
  border-top: 2px solid var(--primary);
}

/* Distribución en columnas responsivas */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
}

/* Títulos de cada sección */
.footer-section h4 {
  color: var(--primary);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

/* --- Enlaces de contacto --- */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
}

/* Íconos del bloque de contacto */
.contact-link i {
  color: var(--primary);
  font-size: 1.1rem;
}

/* Efecto hover */
.contact-link:hover {
  color: var(--primary);
  transform: translateX(5px);
}

.contact-link:hover i {
  color: var(--primary-claro);
}

/* --- Enlaces rápidos --- */
.quick-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quick-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-left: 2px solid transparent;
  padding-left: 0.75rem;
  font-size: 0.95rem;
}

/* Animación al pasar el cursor */
.quick-link:hover {
  color: var(--primary);
  border-left-color: var(--primary);
}

/* --- Íconos de redes sociales --- */
.social-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Estilo base para todos los íconos sociales */
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid;
  color: #fff;
}

/* Personalización de cada red social */
.social-icon.instagram {
  border-color: #E4405F;
  background: rgba(228, 64, 95, 0.1);
  color: #E4405F;
}
.social-icon.instagram:hover {
  background: #E4405F;
  color: #fff;
  box-shadow: 0 0 20px rgba(228, 64, 95, 0.5);
}

.social-icon.facebook {
  border-color: #1877F2;
  background: rgba(24, 119, 242, 0.1);
  color: #1877F2;
}
.social-icon.facebook:hover {
  background: #1877F2;
  color: #fff;
  box-shadow: 0 0 20px rgba(24, 119, 242, 0.5);
}

.social-icon.linkedin {
  border-color: #0077B5;
  background: rgba(0, 119, 181, 0.1);
  color: #0077B5;
}
.social-icon.linkedin:hover {
  background: #0077B5;
  color: #fff;
  box-shadow: 0 0 20px rgba(0, 119, 181, 0.5);
}

.social-icon.github {
  border-color: #333;
  background: rgba(51, 51, 51, 0.1);
  color: #fff;
}
.social-icon.github:hover {
  background: #333;
  color: #fff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.social-icon.gmail {
  border-color: #EA4335;
  background: rgba(234, 67, 53, 0.1);
  color: #EA4335;
}
.social-icon.gmail:hover {
  background: #EA4335;
  color: #fff;
  box-shadow: 0 0 20px rgba(234, 67, 53, 0.5);
}

/* Efecto general al pasar el cursor por cualquier ícono */
.social-icon:hover {
  transform: translateY(-3px);
}

/* Línea decorativa inferior */
.footer-divider {
  max-width: 1200px;
  margin: 0 auto 2rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
}

/* Texto inferior */
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-bottom p {
  color: var(--text-secondary);
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

/* Línea de crédito a Vue.js */
.footer-credit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.footer-credit i {
  color: var(--primary);
  font-size: 1.1rem;
}

/* ===== Responsividad (pantallas pequeñas) ===== */
@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 1.5rem;
    margin-top: 3rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .contact-links,
  .quick-links {
    align-items: center;
  }

  .quick-link {
    border-left: none;
    border-bottom: 2px solid transparent;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  .quick-link:hover {
    border-bottom-color: var(--primary);
  }

  .social-icons {
    justify-content: center;
  }

  .footer-bottom p {
    font-size: 0.85rem;
  }
}
</style>