# 🏷️ Portafolio Personal - Gustavo Ariel Rodriguez

Portafolio web sobrio y minimalista para mostrar proyectos, formación y contacto. Desarrollado con Vue 3 y Vite, con **tema oscuro y claro**, una **presentación animada en formato de terminal** y descarga del CV.

🌐 **Sitio en vivo:** [gustavo-rodriguez-portafolio-vuejs.netlify.app](https://gustavo-rodriguez-portafolio-vuejs.netlify.app/)

---

## ✨ Qué incluye

- **Portada** con nombre, frase corta y botones de "Ver proyectos" y "Descargar CV".
- **Presentación animada:** una terminal donde se escribe solo un código en JavaScript y, al "ejecutarlo", muestra la presentación como salida.
- **Stack tecnológico** en una lista compacta con 20 tecnologías (incluye IntelliJ IDEA y Spring).
- **Proyectos:** 4 destacados con enlaces a la demo y al código en GitHub, y un botón para ver los 8.
- **Formación:** estudios y experiencia en una sola línea de tiempo.
- **Contacto** con email, redes y descarga del CV.
- **Tema claro y oscuro** con un botón en la barra de navegación; recuerda la elección de cada visitante.
- **Accesible y responsivo:** contraste verificado, navegación con teclado y adaptación a celulares.

---

## 🛠️ Tecnologías utilizadas

- **Vue.js 3** (Composition API, `<script setup>`)
- **Vite 7** (bundler y servidor de desarrollo)
- **JavaScript (ES6+), HTML5 y CSS3** (variables CSS, sin librerías de estilos)
- **ESLint 9** (con `eslint-plugin-vue`)
- **Devicons** (logos de tecnologías, desde CDN)
- **Deploy:** Netlify

---

## 📂 Estructura de carpetas

```
Portafolio-Vuejs/
│
├── public/
│   ├── cv.pdf                    # Currículum descargable
│   └── fotoGustavo.png           # Foto de perfil
│
├── src/
│   ├── components/
│   │   ├── NavBar.vue            # Navegación, cambio de tema y botón de CV
│   │   ├── DatosPersonales.vue   # Portada: nombre, terminal animada y stack
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

### Presentación animada

El código que se escribe en la terminal y su salida se generan desde este objeto. Cambiás un valor y se actualizan los dos:

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

La velocidad se ajusta con `VELOCIDAD_CODIGO_MS` y `VELOCIDAD_SALIDA_MS` en `DatosPersonales.vue`.

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

La terminal es siempre oscura, también en el tema claro.

### Agregar una nueva sección

1. Crear el componente en `src/components/NuevaSeccion.vue`.
2. Importarlo y agregarlo en `App.vue`, dentro de un `<section id="..." class="seccion">`.
3. Sumar el enlace en la lista `navegacion` de `NavBar.vue`.

---

## 📱 Responsividad

- **Escritorio:** columna central de 760 px, con mucho espacio.
- **Celular** (menos de 640 px): los links de la barra pasan a una segunda fila, la terminal reduce el tamaño de letra y las filas de formación se apilan.

---

## 🚀 Historial de cambios

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
- [Netlify](https://netlify.com)

---

## 📄 Licencia

Este portafolio personal es de uso privado y personal de Gustavo Ariel Rodriguez.

---

## ✉️ Contacto

- **Email:** garodrifornes79@gmail.com
- **LinkedIn:** [Gustavo Ariel Rodriguez](https://www.linkedin.com/in/gustavo-ariel-rodr%C3%ADguez-fornes-36a899370/)
- **GitHub:** [@GustavoRodriguez79](https://github.com/GustavoRodriguez79)
- **Instagram:** [@garodrifornes79](https://instagram.com/garodrifornes79)
- **Portafolio online:** [Netlify](https://gustavo-rodriguez-portafolio-vuejs.netlify.app/)

---

**Última actualización:** Octubre 2026 · **Versión:** 4.0
