<template>
  <footer id="contacto" class="footer">
    <div class="footer-contenido">
      <h2 class="etiqueta">Contacto</h2>

      <p class="mensaje">{{ contactoData.mensaje }}</p>

      <!-- Email grande + botón de CV -->
      <div class="principal">
        <a :href="`mailto:${contactoData.email}`" class="email">{{ contactoData.email }}</a>
        <a :href="`/${contactoData.cvPDF}`" class="btn btn-primario" download="CV_GustavoRodriguez.pdf">Descargar CV</a>
      </div>

      <!-- Redes: solo los logos (cada uno lleva su nombre para lectores de pantalla) -->
      <ul class="redes">
        <li>
          <a :href="contactoData.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <img src="/iconos/github.svg" alt="" width="44" height="44" />
          </a>
        </li>
        <li>
          <a :href="contactoData.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            title="LinkedIn">
            <img src="/iconos/linkedin.svg" alt="" width="44" height="44" />
          </a>
        </li>
        <li>
          <a :href="contactoData.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            title="Instagram">
            <img src="/iconos/instagram.svg" alt="" width="44" height="44" />
          </a>
        </li>
      </ul>
    </div>

    <div class="pie">
      <p>© {{ anio }} Gustavo Ariel Rodriguez</p>
      <p>Hecho con Vue.js</p>
    </div>
  </footer>
</template>

<script setup>
import { contacto } from '@/data/datos'

const contactoData = contacto
const anio = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  scroll-margin-top: 3.5rem;
}

.footer-contenido {
  max-width: 760px;
  margin: 0 auto;
  padding: 5rem 1.5rem 4rem;
}

.mensaje {
  font-size: clamp(1.25rem, 3.5vw, 1.75rem);
  line-height: 1.4;
  letter-spacing: -0.02em;
  font-weight: 600;
  max-width: 36rem;
  margin-bottom: 2rem;
}

.principal {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-bottom: 2rem;
}

.email {
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
  word-break: break-all;
}

.email:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.redes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  list-style: none;
}

.redes a {
  display: block;
  border-radius: 12px;
  line-height: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.redes img {
  display: block;
  width: 44px;
  height: 44px;
}

.redes a:hover {
  transform: translateY(-3px);
}

.redes a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.pie {
  max-width: 760px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-top: 1px solid var(--border);
  font-size: 0.85rem;
  color: var(--muted);
}

@media (max-width: 640px) {
  .footer-contenido {
    padding: 3.5rem 1.25rem 3rem;
  }

  .pie {
    padding: 1.25rem;
  }
}
</style>
