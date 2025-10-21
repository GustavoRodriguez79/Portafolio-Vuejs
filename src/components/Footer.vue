<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Contacto</h4>
        <div class="contact-links">
          <a :href="`mailto:${contactoData.email}`" class="contact-link">Email</a>
          <a :href="contactoData.linkedin" target="_blank" rel="noopener noreferrer" class="contact-link">LinkedIn</a>
          <a :href="contactoData.github" target="_blank" rel="noopener noreferrer" class="contact-link">GitHub</a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Enlaces Rapidos</h4>
        <div class="quick-links">
          <a href="#educacion" class="quick-link">Educacion</a>
          <a href="#experiencia" class="quick-link">Experiencia</a>
          <a href="#proyectos" class="quick-link">Proyectos</a>
          <a href="#habilidades" class="quick-link">Habilidades</a>
          <a href="#testimonios" class="quick-link">Testimonios</a>
          <a href="#intereses" class="quick-link">Intereses</a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Sigueme</h4>
        <div class="social-icons">
          <a :href="contactoData.instagram" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram">IG</a>
          <a :href="contactoData.facebook" target="_blank" rel="noopener noreferrer" class="social-icon" title="Facebook">FB</a>
          <a href="#" class="social-icon" title="Volver al inicio">UP</a>
        </div>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <p>{{ currentYear }} Gustavo Ariel Rodriguez. Todos los derechos reservados.</p>
      <p class="footer-credit">Desarrollado con Vue.js</p>
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
  --primary: #00ffff;
  --primary-claro: #93dede;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-primary: #1a1a1a;
  --bg-darker: #0f0f0f;
  --border: #333;
}

.footer {
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-darker) 100%);
  color: var(--text-secondary);
  padding: 4rem 2rem 2rem;
  margin-top: 5rem;
  border-top: 2px solid var(--primary);
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
  color: var(--primary);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

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
  gap: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.contact-link::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
}

.contact-link:hover {
  color: var(--primary);
  transform: translateX(5px);
}

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
}

.quick-link:hover {
  color: var(--primary);
  border-left-color: var(--primary);
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
  background: rgba(0, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 700;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid transparent;
  color: var(--primary);
}

.social-icon:hover {
  background: rgba(0, 255, 255, 0.2);
  border-color: var(--primary);
  transform: translateY(-3px);
  color: var(--primary-claro);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.footer-divider {
  max-width: 1200px;
  margin: 0 auto 2rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
}

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

.footer-credit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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

  .contact-link {
    justify-content: center;
  }

  .contact-link::before {
    left: calc(50% - 3rem);
  }

  .quick-link {
    padding-left: 0;
    border-left: none;
    border-bottom: 2px solid transparent;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  .quick-link:hover {
    border-left: none;
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