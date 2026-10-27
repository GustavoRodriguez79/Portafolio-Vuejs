<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1200&color=22D3EE&center=true&vCenter=true&width=640&height=45&lines=Portafolio+personal+%C2%B7+Gustavo+Rodriguez;Vue+3+%C2%B7+Vite+%C2%B7+JavaScript;Tema+oscuro+y+claro;Proyectos%2C+formaci%C3%B3n+y+CV+descargable;Publicado+en+Netlify" alt="Texto animado: Portafolio personal de Gustavo Rodriguez, Vue 3, Vite, JavaScript, tema oscuro y claro, publicado en Netlify" />
</p>

# 🏷️ Portafolio Personal - Gustavo Ariel Rodriguez

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)
![Node](https://img.shields.io/badge/Node-%E2%89%A520.19-5FA04E?logo=nodedotjs&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)
![Frontend](https://img.shields.io/badge/Frontend-Deployed-brightgreen)

Portafolio web sobrio y minimalista para mostrar proyectos, formación y contacto. Desarrollado con Vue 3 y Vite, con **tema oscuro y claro**, un **video de presentación** en la portada y descarga del CV.

🌐 **Sitio en vivo:** [gustavo-rodriguez-portafolio-vuejs.netlify.app](https://gustavo-rodriguez-portafolio-vuejs.netlify.app/)

---

## ✨ Qué incluye

- **Portada** con nombre, frase corta y botones de "Ver proyectos" y "Descargar CV".
- **Video de presentación** (20 segundos, sin audio): un monitor donde se escribe un código en JavaScript y, al "ejecutarlo", muestra la presentación como salida, con los logos del stack alrededor. Arranca solo, en bucle; con "reducir movimiento" activado no se reproduce solo y muestra controles.
- **Stack tecnológico** en una lista compacta con 20 tecnologías (incluye IntelliJ IDEA y Spring).
- **Proyectos:** 4 destacados con enlaces a la demo y al código en GitHub, y un botón para ver los 8.
- **Formación:** estudios y experiencia en una sola línea de tiempo, con enlaces a las instituciones (UTN FRSR y Escuelas Newton).
- **Contacto** con email, redes y descarga del CV.
- **Tema claro y oscuro** con un botón en la barra de navegación; recuerda la elección de cada visitante.
- **Accesible y responsivo:** contraste verificado, navegación con teclado, texto de la presentación disponible para lectores de pantalla y adaptación a celulares.

---

## 🛠️ Tecnologías utilizadas

- **Vue.js 3** (Composition API, `<script setup>`)
- **Vite 7** (bundler y servidor de desarrollo)
- **JavaScript (ES6+), HTML5 y CSS3** (variables CSS, sin librerías de estilos)
- **ESLint 9** (con `eslint-plugin-vue`)
- **Devicons** (logos de tecnologías, desde CDN)
- **HyperFrames + GSAP** (solo para generar el video de presentación; no forman parte del sitio)
- **Deploy:** Netlify

---

## 📂 Estructura de carpetas

```
Portafolio-Vuejs/
│
├── docs/
│   └── iconos/                   # Íconos de contacto de este README
│
├── public/
│   ├── cv.pdf                    # Currículum descargable
│   ├── fotoGustavo.jpg           # Foto de perfil (256×256, liviana)
│   ├── presentacion.mp4          # Video de presentación de la portada
│   └── poster.jpg                # Imagen que se ve mientras carga el video
│
├── src/
│   ├── components/
│   │   ├── NavBar.vue            # Navegación, cambio de tema y botón de CV
│   │   ├── DatosPersonales.vue   # Portada: nombre, video y stack
│   │   ├── Proyectos.vue         # Lista de proyectos (destacados / todos)
│   │   ├── Formacion.vue         # Estudios y experiencia
│   │   └── Footer.vue            # Contacto y pie de página
│   │
│   ├── data/
│   │   └── datos.js              # Todos los datos del portafolio
│   │
│   ├── App.vue                   # Componente raíz y variables de color (temas)
│   └── main.js                   # Punto de entrada
│
├── index.html
├── package.json
├── vite.config.js                # Alias "@" → src
├── jsconfig.json
├── eslint.config.js
└── README.md
```

> `node_modules/` y `dist/` se generan localmente y no se versionan.

---

## 💻 Cómo ejecutarlo

### Requisitos

- **Node.js** `^20.19.0` o `>=22.12.0` (lo exige Vite 7)
- **npm**

### Desarrollo local

```bash
git clone https://github.com/GustavoRodriguez79/Portafolio-Vuejs.git
cd Portafolio-Vuejs
npm install
npm run dev
# Disponible en http://localhost:5173
```

### Build de producción

```bash
npm run build      # genera dist/
npm run preview    # previsualiza el build
```

> ⚠️ El proyecto **no se abre haciendo doble clic en `index.html`**: necesita el servidor de Vite.

### Deploy en Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## 🎨 Personalización

Casi todo el contenido se edita en **`src/data/datos.js`**, sin tocar los componentes.

### Video de presentación

El video vive en `public/presentacion.mp4`, con su imagen de carga en `public/poster.jpg`. Se muestra en `DatosPersonales.vue`:

```html
<video
  src="/presentacion.mp4"
  poster="/poster.jpg"
  autoplay
  muted
  loop
  playsinline
  preload="none"
></video>
```

- **Para cambiarlo:** reemplazá los dos archivos de `public/` por los nuevos, con los mismos nombres, y hacé push.
- **Cómo se hizo:** es una composición de [HyperFrames](https://github.com/heygen-com/hyperframes) (HTML + GSAP renderizado a MP4, 1920×1080, 30 fps, unos 2 MB). Para modificarlo se edita el texto o los íconos del HTML de esa composición y se vuelve a renderizar con `npx hyperframes render` (requiere Node 22 o más y FFmpeg). Esa composición no está en este repositorio.
- **Texto para lectores de pantalla:** el objeto `presentacion` de `datos.js` ya no dibuja nada en pantalla, pero arma el texto oculto de la presentación (accesibilidad y buscadores). Si cambiás el video, actualizalo también:

```javascript
export const presentacion = {
  rol: "Estudiante del último semestre",
  carrera: "Tecnicatura Universitaria en Programación",
  universidad: "Universidad Tecnológica Nacional (UTN) - FRSR, Argentina",
  stack: ["Vue.js", "React", "Node.js", "FastAPI"],
  bases: ["SQL", "NoSQL"],
  pasion: "crear soluciones originales y personalizadas",
};
```

### Tecnologías del stack

```javascript
{ id: 21, nombre: "Nueva", iconUrl: `${DEVICON}/nueva/nueva-original.svg` }
// invertir: true -> para íconos negros (como GitHub) que no se ven en el tema oscuro
```

### Proyectos

```javascript
{
  id: 9,
  titulo: "Nuevo Proyecto",
  descripcion: "Qué hace y con qué está hecho.",
  tecnologias: ["Vue.js", "Node.js"],
  enlace: "https://...",        // demo en vivo (o el repo si no hay demo); "#" si no está publicado
  repositorio: "https://github.com/...",
  destacado: 5,                 // opcional: 1, 2, 3... aparece en la lista corta, en ese orden
  estado: "Completado",         // "Completado" o "En Progreso"
  fecha: "2026",
}
```

Los proyectos sin `destacado` aparecen al tocar **"Ver los N proyectos"**.

### Formación

En `educacion` (dentro de `datos.js`), el campo `enlace` convierte el título en un enlace a la institución. Si queda vacío (`""`), se muestra como texto:

```javascript
{
  id: 1,
  fecha: "2012 - 2013",
  titulo: "Mantenimiento y Reparación de Computadoras",
  institucion: "Escuelas de Capacitación Newton",
  enlace: "https://escuelasnewton.com.ar/",
}
```

### Frase de contacto y CV

En `contacto` (dentro de `datos.js`):

- `mensaje`: el texto grande de la sección de contacto.
- `cvPDF`: nombre del archivo en `public/` (por defecto `cv.pdf`). Para actualizar el CV, reemplazá ese archivo y hacé push.

### Colores y tema

Los colores están en `src/App.vue`, como variables CSS. Hay un bloque para el tema oscuro y otro para el claro:

```css
:root {
  --bg: #0c0f14; /* fondo */
  --text: #e8edf3; /* texto */
  --muted: #9aa6b2; /* texto secundario */
  --accent: #22d3ee; /* único acento (cian) */
}

:root[data-theme="light"] {
  --bg: #fbfcfd;
  --text: #0f1720;
  --muted: #4a5866;
  --accent: #0e7490;
}
```

El video es siempre oscuro, también en el tema claro; por eso se muestra dentro de un recuadro con borde.

### Agregar una nueva sección

1. Crear el componente en `src/components/NuevaSeccion.vue`.
2. Importarlo y agregarlo en `App.vue`, dentro de un `<section id="..." class="seccion">`.
3. Sumar el enlace en la lista `navegacion` de `NavBar.vue`.

---

## 📱 Responsividad

- **Escritorio:** columna central de 760 px, con mucho espacio.
- **Celular** (menos de 640 px): los links de la barra pasan a una segunda fila, el video ocupa todo el ancho y las filas de formación se apilan.

---

## 🚀 Historial de cambios

### Versión 4.1 — Octubre 2026

- **Video de presentación** en la portada, en lugar de la terminal animada: un monitor con el código y su salida, y los logos del stack alrededor (20 s, sin audio, ~2 MB, carga diferida con imagen de portada).
- **Eliminada** la terminal animada de `DatosPersonales.vue`; el texto de la presentación queda como texto oculto para lectores de pantalla.

- **README:** texto animado superior, insignias de tecnologías e íconos de contacto.

### Versión 4.0 — Octubre 2026 (rediseño)

- **Diseño sobrio y minimalista:** una sola columna, tipografía grande, un único acento cian y sin bordes ni brillos.
- **Tema claro y oscuro** con botón en la barra y memoria de la elección.
- **Presentación en formato de terminal:** el código se escribe solo y muestra la salida.
- **Proyectos:** 4 destacados y botón para ver los 8; enlaces a la demo y al repositorio.
- **Formación:** Educación y Experiencia fusionadas en una sola sección.
- **Botón de CV** en la barra, la portada y el contacto.
- **Eliminado:** barras de progreso y matriz de competencias, intereses y objetivos, estadísticas, imagen de fondo de la portada y Font Awesome. Se borraron `Educacion.vue`, `Experiencia.vue`, `Habilidades.vue` e `Intereses.vue`.

### Versión 3.0

- Contenido actualizado al 4° semestre y proyectos reales (Finanzas Dashboard, Gestor de Gastos, Tienda de Libros, PERN Stack, entre otros).
- Tecnologías centralizadas en `datos.js` e incorporación de IntelliJ IDEA y Spring.

### Versión 2.1

- Imagen de perfil movida a `public/` y estructura optimizada para Netlify.

---

## 🔗 Enlaces útiles

- [Documentación Vue.js](https://vuejs.org)
- [Documentación Vite](https://vitejs.dev)
- [Devicons](https://devicon.dev)
- [HyperFrames](https://github.com/heygen-com/hyperframes)
- [Netlify](https://netlify.com)

---

## 📄 Licencia

Este portafolio personal es de uso privado y personal de Gustavo Ariel Rodriguez.

---

## ✉️ Contacto

<p align="center">
  <a href="mailto:garodrifornes79@gmail.com" title="Email"><img src="docs/iconos/email.svg" alt="Email" width="48" height="48" /></a>
  &nbsp;
  <a href="https://www.linkedin.com/in/gustavo-ariel-rodr%C3%ADguez-fornes-36a899370/" title="LinkedIn"><img src="docs/iconos/linkedin.svg" alt="LinkedIn" width="48" height="48" /></a>
  &nbsp;
  <a href="https://github.com/GustavoRodriguez79" title="GitHub"><img src="docs/iconos/github.svg" alt="GitHub" width="48" height="48" /></a>
  &nbsp;
  <a href="https://instagram.com/garodrifornes79" title="Instagram"><img src="docs/iconos/instagram.svg" alt="Instagram" width="48" height="48" /></a>
  &nbsp;
  <a href="https://gustavo-rodriguez-portafolio-vuejs.netlify.app/" title="Portafolio online"><img src="docs/iconos/portafolio.svg" alt="Portafolio online" width="48" height="48" /></a>
</p>

---

**Última actualización:** Octubre 2026 · **Versión:** 4.1
