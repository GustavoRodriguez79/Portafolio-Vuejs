# 🏷️ Portafolio Personal - Gustavo Ariel Rodriguez

Sitio web profesional diseñado para mostrar habilidades, experiencia, educación y proyectos de desarrollo web. Un portafolio moderno, responsivo e interactivo desarrollado con tecnologías actuales de frontend.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Lenguajes**: JavaScript (ES6+), HTML5, CSS3
- **Herramientas de Desarrollo**:
  - Vite (Bundler y dev server)
  - Node.js y npm (Gestor de dependencias)
- **Diseño y Estilos**:
  - CSS3 con variables CSS personalizadas
  - Animaciones y transiciones suaves
  - Paleta de colores CYAN (#00ffff) y TURQUESA (#93dede)
- **Iconografía**:
  - Font Awesome (iconos de redes sociales)
  - Devicons (logos de tecnologías)
- **Características**:
  - Diseño Responsivo (Mobile First)
  - Smooth Scrolling
  - Efectos Hover dinámicos
  - Modo oscuro (Dark Theme)

---

## 📂 Estructura de Carpetas y Archivos

```
portafolio-personal/
│
├── src/
│   ├── assets/
│   │   ├── main.css          # Estilos globales principales
│   │   └── fotoGustavo.jpg   # Imagen de perfil
│   │
│   ├── components/           # Componentes Vue.js reutilizables
│   │   ├── NavBar.vue        # Barra de navegación principal
│   │   ├── DatosPersonales.vue   # Sección "Sobre mí"
│   │   ├── Educacion.vue     # Sección de educación con timeline
│   │   ├── Experiencia.vue   # Sección de experiencia laboral
│   │   ├── Proyectos.vue     # Galería de proyectos
│   │   ├── Habilidades.vue   # Matriz de competencias técnicas
│   │   ├── Testimonios.vue   # Testimonios de colegas
│   │   ├── Intereses.vue     # Intereses profesionales y objetivos
│   │   └── Footer.vue        # Pie de página con enlaces
│   │
│   ├── data/
│   │   └── datos.js          # Archivo centralizado de datos
│   │                          # (educación, experiencia, proyectos, etc.)
│   │
│   ├── App.vue               # Componente principal raíz
│   ├── main.js               # Punto de entrada de la aplicación
│   └── main.css              # Estilos CSS globales
│
├── public/
│   └── cv.pdf                # Currículum en PDF (descargable)
│
├── index.html                # Archivo HTML principal
├── package.json              # Dependencias y scripts npm
├── vite.config.js            # Configuración de Vite
└── README.md                 # Este archivo (documentación)
```

---

## 🎯 Características Principales

### 1. **Navegación Inteligente**
- Barra de navegación fija (sticky) con enlaces ancla
- Transiciones suaves entre secciones
- Botón de descarga de CV en la navbar

### 2. **Sección Hero (Portada)**
- Imagen de fondo con overlay degradado
- Título y subtítulo atractivos
- Llamada a la acción (CTA) con botón

### 3. **Sobre Mí**
- Foto de perfil con efecto hover
- Resumen profesional
- Grid de 12 tecnologías con logos profesionales
- Estadísticas clave (años de experiencia, proyectos completados, etc.)

### 4. **Educación**
- Timeline visual de formación académica
- Badges con habilidades por curso/carrera
- Enlaces a instituciones

### 5. **Experiencia**
- Tarjetas con descripción de experiencias
- Lista de logros destacados
- Tecnologías utilizadas en cada rol

### 6. **Proyectos**
- Galería de proyectos con emojis representativos
- Estados (Completado/En Progreso)
- Lógica interactiva: proyectos en progreso muestran alertas personalizadas
- Enlaces a proyectos completados

### 7. **Habilidades**
- Tarjetas de categorías (Lenguajes, Frameworks, BD, DevOps)
- Barras de progreso animadas
- Matriz de competencias técnicas con tabla interactiva
- Niveles visuales (Básico, Intermedio, Avanzado)

### 8. **Testimonios**
- 4 testimonios de profesores y colegas
- Diseño de tarjeta con icono de comilla
- Información del autor y cargo

### 9. **Intereses y Objetivos**
- 3 tarjetas de intereses profesionales
- 4 objetivos profesionales con numeración
- Animaciones sutiles

### 10. **Footer**
- Enlaces de contacto (Email, LinkedIn, GitHub)
- Iconos de redes sociales con colores distintivos
- Enlaces rápidos a secciones principales
- Año de copyright automático

---

## 💻 Instrucciones para Visualizar el Portafolio

### Opción 1: Servidor de Desarrollo Local (Recomendado)

1. **Requisitos previos**:
   - Tener instalado Node.js (versión 14 o superior)
   - npm (viene incluido con Node.js)

2. **Pasos para ejecutar**:
   ```bash
   # 1. Clonar o descargar el repositorio
   git clone <url-del-repositorio>
   cd portafolio-personal

   # 2. Instalar dependencias
   npm install

   # 3. Iniciar el servidor de desarrollo
   npm run dev

   # 4. Abrir en el navegador
   # El servidor local estará disponible en:
   # http://localhost:5173 (o la URL que Vite proporcione)
   ```

### Opción 2: Compilar para Producción

```bash
# Generar build optimizado para producción
npm run build

# Vista previa del build final
npm run preview
```

Los archivos compilados estarán en la carpeta `dist/`

### Opción 3: Abrir Directamente en el Navegador

Si solo necesitas visualizar el portafolio sin servidor:

1. Descarga o clona el proyecto
2. Abre el archivo `index.html` directamente en tu navegador
3. La mayoría de características funcionarán, aunque algunas puede que requieran un servidor local

---

## 🚀 Cambios Recientes (Modificaciones Realizadas)

### 1. ✅ Navbar Mejorada
- Agregado enlace "Testimonios" al menú de navegación (id: 5)
- El enlace está completamente integrado en el sistema de navegación

### 2. ✅ Tecnologías Expandidas
- Agregados 5 nuevas herramientas en la sección "Sobre mí":
  - MySQL
  - Visual Studio Code (VSCode)
  - PyCharm
  - Apache NetBeans
  - GitHub Desktop
- Los logos se obtienen de CDN profesional (devicons)

### 3. ✅ Lógica de Proyectos Mejorada
- Implementada lógica condicional para proyectos en progreso
- Proyectos completados: enlace directo funcional
- Proyectos en progreso: muestran alerta personalizada
  - "Proyecto en progreso. ¡Vuelve pronto!"

### 4. ✅ Estilos de Competencias Consistentes
- MySQL ahora tiene el mismo estilo visual que otras competencias
- Aplicados badges con colores según nivel (Básico/Intermedio/Avanzado)

### 5. ✅ Nuevo Testimonio Agregado
- Cuarto testimonio de Augusto Casado (Tutor de Cátedra - UTN)
- Destacando dedicación, aprendizaje y proactividad

### 6. ✅ Intereses Simplificados
  - Ahora solo 3 tarjetas de intereses principales:
  - Desarrollo Web
  - Tecnología Emergente
  - Código Limpio

### 7. ✅ Documentación Completa
- Comentarios detallados en español en todos los componentes
- Explicación clara
- Código legible 

---

## 📋 Requisitos del Sistema

- **Node.js**: v14.0.0 o superior
- **npm**: v6.0.0 o superior
- **Navegador moderno**: Chrome, Firefox, Safari, Edge (versiones recientes)
- **Espacio en disco**: ~500MB (incluyendo node_modules)

---

## 🎨 Personalización

### Cambiar Datos Personales

Edita el archivo `src/data/datos.js`:

```javascript
export const datosPersonales = {
  nombre: 'Tu Nombre',
  titulo: 'Tu Título Profesional',
  email: 'tu@email.com',
  // ... más datos
}
```

### Cambiar Paleta de Colores

En cualquier archivo CSS, modifica las variables:

```css
:root {
  --primary: #00ffff;        /* Color principal */
  --primary-claro: #93dede;  /* Color secundario */
  --text-primary: #ffffff;   /* Texto principal */
}
```

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `src/components/NuevaSeccion.vue`
2. Importa el componente en `App.vue`
3. Agrega los datos en `datos.js`
4. Incluye el componente en el template de `App.vue`

---

## 📱 Responsividad

El portafolio es completamente responsivo con breakpoints en:

- **Desktop**: 1024px y superior
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Mobile pequeño**: menos de 480px

---

## 🔗 Enlaces Útiles

- **Documentación Vue.js**: [vuejs.org](https://vuejs.org)
- **Documentación Vite**: [vitejs.dev](https://vitejs.dev)
- **Font Awesome**: [fontawesome.com](https://fontawesome.com)
- **Devicons**: [devicons.dev](https://devicons.dev)

---

## 📄 Licencia

Este portafolio personal es de uso privado y personal de Gustavo Ariel Rodriguez.

---

## ✉️ Contacto

- **Email**: garodrifornes79@gmail.com
- **LinkedIn**: [Gustavo Ariel Rodriguez](https://linkedin.com/in/gustavo-ariel-rodríguez-fornes)
- **GitHub**: [@GustavoRodriguez79](https://github.com/GustavoRodriguez79)
- **Instagram**: [@garodrifornes79](https://instagram.com/garodrifornes79)

---

## 📝 Notas de Desarrollo

- El proyecto utiliza **Composition API** de Vue.js (más moderno que Options API)
- Se recomienda usar **VS Code** como editor de código
- Instala la extensión "Volar" para mejor soporte de Vue.js en VS Code
- Usa **Live Server** o `npm run dev` para desarrollo local

---

**Última actualización**: Octubre 2025  
**Versión**: 2.0 (Con todas las modificaciones integradas)
