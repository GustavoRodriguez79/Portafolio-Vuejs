<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Sección de Contacto Rápido -->
      <div class="footer-section">
        <h4>Contacto</h4>
        <div class="contact-links">
          <a :href="`mailto:${contactoData.email}`" class="contact-link">
            📧 Email
          </a>
          <a :href="contactoData.linkedin" target="_blank" rel="noopener noreferrer" class="contact-link">
            💼 LinkedIn
          </a>
          <a :href="contactoData.github" target="_blank" rel="noopener noreferrer" class="contact-link">
            🐙 GitHub
          </a>
        </div>
      </div>

      <!-- Sección de Enlaces Rápidos -->
      <div class="footer-section">
        <h4>Enlaces Rápidos</h4>
        <div class="quick-links">
          <a href="#educacion" class="quick-link">Educación</a>
          <a href="#experiencia" class="quick-link">Experiencia</a>
          <a href="#proyectos" class="quick-link">Proyectos</a>
          <a href="#habilidades" class="quick-link">Habilidades</a>
          <a href="#intereses" class="quick-link">Intereses</a>
        </div>
      </div>

      <!-- Sección de Redes Sociales -->
      <div class="footer-section">
        <h4>Sígueme</h4>
        <div class="social-icons">
          <a :href="contactoData.instagram" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram">
            📱
          </a>
          <a :href="contactoData.facebook" target="_blank" rel="noopener noreferrer" class="social-icon" title="Facebook">
            👥
          </a>
          <a href="#" class="social-icon" title="Volver al inicio">
            ⬆️
          </a>
        </div>
      </div>
    </div>

    <!-- Línea Divisoria -->
    <div class="footer-divider"></div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Gustavo Ariel Rodriguez. Todos los derechos reservados.</p>
      <p class="footer-credit">Desarrollado con <span class="heart">💜</span> usando Vue.js</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { contacto } from '@/data/datos'

const contactoData = ref(contacto)
const currentYear = ref(new Date().getFullYear())

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<style scoped>
:root {
  --primary: #7c3aed;
  --primary-light: #a78bfa;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-dark: #111827;
  --bg-darker: #0f172a;
  --border: #e5e7eb;
}

.footer {
  background: linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-darker) 100%);
  color: #e5e7eb;
  padding: 4rem 2rem 2rem;
  margin-top: 5rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: var(--primary-light);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-link {
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-link:hover {
  color: var(--primary-light);
  transform: translateX(5px);
}

.quick-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quick-link {
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-left: 2px solid transparent;
  padding-left: 0.75rem;
}

.quick-link:hover {
  color: var(--primary-light);
  border-left-color: var(--primary-light);
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(124, 58, 237, 0.1);
  border-radius: 50%;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid transparent;
}

.social-icon:hover {
  background: rgba(124, 58, 237, 0.3);
  border-color: var(--primary-light);
  transform: translateY(-3px);
}

.footer-divider {
  max-width: 1200px;
  margin: 0 auto 2rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-bottom p {
  color: #9ca3af;
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.footer-credit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.heart {
  display: inline-block;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
}

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

  .contact-link,
  .quick-link {
    justify-content: center;
  }

  .quick-link {
    padding-left: 0;
    border-left: none;
    border-bottom: 2px solid transparent;
    padding-bottom: 0.5rem;
  }

  .quick-link:hover {
    border-left: none;
    border-bottom-color: var(--primary-light);
  }

  .social-icons {
    justify-content: center;
  }

  .footer-bottom p {
    font-size: 0.85rem;
  }
}