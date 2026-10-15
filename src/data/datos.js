// src/data/datos.js
// ARCHIVO CENTRAL DE DATOS DEL PORTAFOLIO
// Este archivo contiene todos los datos que se muestran en el portafolio
// Se utiliza en los componentes Vue.js mediante imports

// ================== PALETA DE COLORES ==================
// Define los colores principales del portafolio
// Facilita el cambio uniforme de temas en toda la aplicación
export const tematico = {
  // COLORES PRINCIPALES
  primario: "#00ffff", // CYAN brillante - Color principal del portafolio
  primarioOscuro: "#00cccc", // CYAN más oscuro - Variación para hover
  primarioClaro: "#93dede", // TURQUESA/CYAN claro - Color de acentos
  secundario: "#00ffff",
  acento: "#93dede",

  // TEXTOS
  textoBase: "#ffffff", // Blanco para fondo oscuro
  textoSecundario: "#cccccc", // Gris claro

  // FONDOS
  bgPrimario: "#111111", // Fondo muy oscuro
  bgSecundario: "#1a1a1a", // Fondo oscuro
  bgTerciario: "#2a2a2a", // Fondo ligeramente más claro
  borde: "#333333",
};

// ================== DATOS PERSONALES ==================
// Información general del usuario del portafolio
export const datosPersonales = {
  nombre: "Gustavo Ariel Rodriguez",
  titulo: "Técnico en Programación (último semestre)",
  subtitulo: "Apasionado por la programación y la creatividad digital",
  email: "garodrifornes79@gmail.com",
  telefono: "+54 9 2622655607",
  ubicacion: "Tunuyán, Mendoza, Argentina",
  foto: "fotoGustavo.png",
  // Frase corta que se ve debajo del nombre en la portada
  lead: "Estudiante de Programación en la UTN San Rafael. Desarrollo web full stack.",
  resumen:
    "Estudiante del último semestre de la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional (UTN) - FRSR, Argentina. Desarrollo aplicaciones web full stack con Vue.js, React, Node.js y FastAPI sobre bases de datos SQL y NoSQL, y me apasiona crear soluciones originales y personalizadas trabajando en equipo.",
  estadisticas: [
    { numero: "2+", label: "Años de experiencia" },
    { numero: "5+", label: "Proyectos completados" },
    { numero: "15+", label: "Tecnologías utilizadas" },
  ],
};

// ================== PRESENTACIÓN ANIMADA ("Sobre mí") ==================
// Estos datos alimentan el bloque de código que se escribe solo en DatosPersonales.vue.
// El código que se ve y el texto de salida se generan desde acá: editás un valor y cambian los dos.
export const presentacion = {
  rol: "Estudiante del último semestre",
  carrera: "Tecnicatura Universitaria en Programación",
  universidad: "Universidad Tecnológica Nacional (UTN) - FRSR, Argentina",
  stack: ["Vue.js", "React", "Node.js", "FastAPI"],
  bases: ["SQL", "NoSQL"],
  pasion: "crear soluciones originales y personalizadas",
};

// ================== TECNOLOGÍAS ==================
// Tecnologías que se muestran en la sección "Sobre mí" (grid con logos).
// Cada una lleva la URL de su ícono de Devicons.
// Para agregar una nueva: sumá un objeto con id, nombre e iconUrl.
// invertir: true -> el ícono es negro y se ve mal sobre fondo oscuro (se le aplica filter: invert).
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const tecnologias = [
  { id: 1, nombre: "Python", iconUrl: `${DEVICON}/python/python-original.svg` },
  { id: 2, nombre: "JavaScript", iconUrl: `${DEVICON}/javascript/javascript-original.svg` },
  { id: 3, nombre: "Java", iconUrl: `${DEVICON}/java/java-original.svg` },
  { id: 4, nombre: "HTML5", iconUrl: `${DEVICON}/html5/html5-original.svg` },
  { id: 5, nombre: "CSS3", iconUrl: `${DEVICON}/css3/css3-original.svg` },
  { id: 6, nombre: "Vue.js", iconUrl: `${DEVICON}/vuejs/vuejs-original.svg` },
  { id: 7, nombre: "React", iconUrl: `${DEVICON}/react/react-original.svg` },
  { id: 8, nombre: "Node.js", iconUrl: `${DEVICON}/nodejs/nodejs-original.svg` },
  {
    id: 9,
    nombre: "FastAPI",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  { id: 10, nombre: "MySQL", iconUrl: `${DEVICON}/mysql/mysql-original.svg` },
  { id: 11, nombre: "PostgreSQL", iconUrl: `${DEVICON}/postgresql/postgresql-original.svg` },
  { id: 12, nombre: "MongoDB", iconUrl: `${DEVICON}/mongodb/mongodb-original.svg` },
  { id: 13, nombre: "Docker", iconUrl: `${DEVICON}/docker/docker-original.svg` },
  { id: 14, nombre: "Git", iconUrl: `${DEVICON}/git/git-original.svg` },
  { id: 15, nombre: "GitHub", iconUrl: `${DEVICON}/github/github-original.svg`, invertir: true },
  { id: 16, nombre: "VSCode", iconUrl: `${DEVICON}/vscode/vscode-original.svg` },
  { id: 17, nombre: "PyCharm", iconUrl: `${DEVICON}/pycharm/pycharm-original.svg` },
  { id: 18, nombre: "Apache NetBeans", iconUrl: `${DEVICON}/netbeans/netbeans-original.svg` },
  { id: 19, nombre: "IntelliJ IDEA", iconUrl: `${DEVICON}/intellij/intellij-original.svg` },
  { id: 20, nombre: "Spring", iconUrl: `${DEVICON}/spring/spring-original.svg` },
];

// ================== EDUCACIÓN ==================
// Información sobre la formación académica
// Estructura: id, fecha, título, institución, descripción, habilidades adquiridas
export const educacion = [
  {
    id: 1,
    fecha: "2012 - 2013",
    titulo: "Mantenimiento y Reparación de Computadoras",
    institucion: "Escuelas de Capacitación Newton",
    descripcion:
      "Capacitación de 288 horas reloj, donde adquirí habilidades prácticas enfocadas en diagnóstico y solución de fallas de hardware/software, ensamblaje y actualización de componentes.",
    habilidades: ["Hardware", "Software", "Diagnóstico"],
    enlace: "https://escuelasnewton.com.ar/",
  },
  {
    id: 2,
    fecha: "2025 - Presente",
    titulo: "Técnico Universitario en Programación",
    institucion: "Universidad Tecnológica Nacional (UTN-FRSR)",
    descripcion:
      "Carrera de 2 años (4 cuatrimestres, 1375 horas reloj y 120 créditos) enfocada en desarrollo de software: programación orientada a objetos, aplicaciones web cliente-servidor, bases de datos relacionales y NoSQL, metodologías de sistemas y gestión de proyectos. Actualmente cursando el último cuatrimestre, con el Trabajo Final Integrador como cierre.",
    habilidades: ["POO", "Bases de Datos", "Node.js", "Metodologías Ágiles", "Git"],
    enlace: "https://www.frsr.utn.edu.ar/",
  },
  {
    id: 3,
    fecha: "2025 - Presente",
    titulo: "Especialización en Desarrollo Web",
    institucion: "Formación Continua",
    descripcion:
      "Aprendizaje continuo en frameworks modernos como Vue.js y React, y en backend con FastAPI y Node.js. Enfoque en crear aplicaciones full stack responsivas, con autenticación y desplegadas en producción.",
    habilidades: ["Vue.js", "React", "FastAPI", "Full Stack"],
    enlace: "",
  },
];

// ================== EXPERIENCIA ==================
// Información sobre experiencia laboral y académica
// Estructura: id, título, período, empresa, descripción, logros, tecnologías utilizadas
export const experiencia = [
  {
    id: 1,
    titulo: "Proyectos Académicos",
    periodo: "2025 - Presente",
    empresa: "Universidad Tecnológica Nacional",
    descripcion:
      "Desarrollo de múltiples aplicaciones como parte de la formación académica, desde interfaces web hasta backends con bases de datos, aplicando metodologías ágiles y buenas prácticas de programación.",
    logros: [
      "Aplicaciones web con HTML, CSS y JavaScript, y algoritmos en Python, JavaScript y Java",
      "Backend con Node.js y Express para un e-commerce con Mercado Pago",
      "Persistencia de datos con MySQL, PostgreSQL y MongoDB",
      "Control de versiones con Git y GitHub en repositorios compartidos",
      "Aplicación de metodología Scrum en trabajo colaborativo",
    ],
    tecnologias: [
      "JavaScript",
      "Node.js",
      "Express",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "Git",
    ],
  },
  {
    id: 2,
    titulo: "Aprendizaje Continuo",
    periodo: "Actualidad",
    empresa: "Formación Autónoma",
    descripcion:
      "Perfeccionamiento en tecnologías modernas del desarrollo web, con proyectos personales full stack publicados en producción.",
    logros: [
      "Dashboard financiero full stack con React, FastAPI y autenticación JWT + Google OAuth",
      "Gestor de gastos personales con FastAPI y PostgreSQL",
      "Estudio de frameworks modernos como Vue.js y React",
      "Uso de Docker y Linux (WSL) como entorno de desarrollo",
    ],
    tecnologias: ["React", "FastAPI", "Vue.js", "Docker", "PostgreSQL"],
  },
  {
    id: 3,
    titulo: "Colaboración en Proyectos",
    periodo: "2025 - Presente",
    empresa: "Equipos ByteNine y Qwerty123 - UTN FRSR",
    descripcion:
      "Trabajo en equipo desarrollando soluciones integrales, participando en las fases del proyecto desde la planificación hasta la implementación.",
    logros: [
      "Desarrollo del módulo Historia Clínica de un sistema de gestión médica (Python y PostgreSQL)",
      "Modelo Canvas, MER y automatización de alertas con n8n para el MVP GastoSmart",
      "Colaboración efectiva con compañeros mediante repositorios compartidos",
      "Documentación y presentación de proyectos",
    ],
    tecnologias: ["Trabajo en Equipo", "Scrum", "UML / MER", "n8n", "Documentación"],
  },
];

// ================== PROYECTOS ==================
// Estructura: id, título, descripción, emoji, tecnologías, enlace, repositorio, estado, fecha
// destacado   = 1, 2, 3, 4... aparece en la lista corta, en ese orden. Sin valor: solo en "Ver todos".
// enlace      = demo en vivo (o el repo si no hay demo). Si es válido, "Ver Proyecto" lo abre.
// repositorio = link al código en GitHub. Si existe y es distinto de enlace, aparece el botón "Código".
// IMPORTANTE: 'estado' debe ser exactamente 'Completado' o 'En Progreso'
// (son los dos valores que tienen estilo en Proyectos.vue).
// Si el enlace es '' o '#', la tarjeta muestra la alerta "en progreso".
export const proyectos = [
  {
    id: 1,
    titulo: "Portafolio Personal",
    descripcion:
      "Sitio web responsive desarrollado con Vue.js, HTML y CSS para mostrar habilidades y proyectos. Diseño moderno con animaciones suaves y componentes reutilizables.",
    emoji: "🌐",
    tecnologias: ["HTML5", "CSS3", "Vue.js", "JavaScript"],
    enlace: "https://gustavo-rodriguez-portafolio-vuejs.netlify.app/",
    repositorio: "https://github.com/GustavoRodriguez79/Portafolio-Vuejs",
    destacado: 4,
    estado: "Completado",
    fecha: "2025",
    imagen: "",
  },
  {
    id: 2,
    titulo: "Finanzas Dashboard",
    descripcion:
      "Dashboard financiero full stack con autenticación JWT y Google OAuth, desplegado en producción. Frontend en React (Vite) y API REST con FastAPI y PostgreSQL.",
    emoji: "📈",
    tecnologias: ["React", "FastAPI", "PostgreSQL", "JWT", "Google OAuth"],
    enlace: "https://finanzas-dashboard-gustavo.netlify.app",
    repositorio: "https://github.com/GustavoRodriguez79/finanzas-dashboard",
    destacado: 1,
    estado: "Completado",
    fecha: "2026",
    imagen: "",
  },
  {
    id: 3,
    titulo: "Gestor de Gastos",
    descripcion:
      "Aplicación de gastos personales con API en FastAPI, base de datos PostgreSQL y una interfaz web en HTML, CSS y JavaScript vanilla.",
    emoji: "💰",
    tecnologias: ["Python", "FastAPI", "PostgreSQL", "JavaScript"],
    enlace: "https://github.com/GustavoRodriguez79/gestor-gastos",
    repositorio: "https://github.com/GustavoRodriguez79/gestor-gastos",
    destacado: 2,
    estado: "Completado",
    fecha: "2026",
    imagen: "",
  },
  {
    id: 4,
    titulo: "Sistema de Gestión Médica",
    descripcion:
      "Proyecto integrador del 3° semestre con el equipo ByteNine. Aplicación de escritorio con base de datos PostgreSQL; estuve a cargo del módulo Historia Clínica.",
    emoji: "🏥",
    tecnologias: ["Python", "CustomTkinter", "PostgreSQL"],
    enlace: "https://github.com/HotCode2025/PI_TercerSemestre-ByteNine",
    repositorio: "https://github.com/HotCode2025/PI_TercerSemestre-ByteNine",
    estado: "Completado",
    fecha: "2026",
    imagen: "",
  },
  {
    id: 5,
    titulo: "E-commerce de Repostería",
    descripcion:
      "Proyecto integrador del 4° semestre: tienda online de repostería artesanal con catálogo por categorías, carrito y pagos con Mercado Pago. Me encargo del backend.",
    emoji: "🧁",
    tecnologias: ["JavaScript", "Node.js", "Express", "Mercado Pago"],
    enlace: "#",
    repositorio: "",
    estado: "En Progreso",
    fecha: "2026",
    imagen: "",
  },
  {
    id: 6,
    titulo: "GastoSmart (MVP)",
    descripcion:
      "MVP de una app de control de gastos personales: Modelo Canvas, MER en PostgreSQL y alertas automáticas por Email y Telegram con workflows de n8n.",
    emoji: "🔔",
    tecnologias: ["PostgreSQL", "n8n", "Canvas", "MER"],
    enlace: "#",
    repositorio: "",
    estado: "En Progreso",
    fecha: "2026",
    imagen: "",
  },
  {
    id: 7,
    titulo: "Tienda de Libros",
    descripcion:
      "Aplicación de gestión de una tienda de libros desarrollada en Java con Spring Boot y Maven, trabajada en IntelliJ IDEA como parte de las actividades del 4° semestre.",
    emoji: "📚",
    tecnologias: ["Java", "Spring Boot", "Maven", "IntelliJ IDEA"],
    enlace: "https://github.com/GustavoRodriguez79/tienda-libros",
    repositorio: "https://github.com/GustavoRodriguez79/tienda-libros",
    destacado: 3,
    estado: "Completado",
    fecha: "2026",
    imagen: "",
  },
  {
    id: 8,
    titulo: "PERN Stack",
    descripcion:
      "Práctica del stack PERN (PostgreSQL, Express, React y Node.js): backend con API REST en Node/Express y base de datos PostgreSQL; el frontend en React está en desarrollo.",
    emoji: "⚛️",
    tecnologias: ["PostgreSQL", "Express", "React", "Node.js"],
    enlace: "https://github.com/GustavoRodriguez79/pern-stack",
    repositorio: "https://github.com/GustavoRodriguez79/pern-stack",
    estado: "En Progreso",
    fecha: "2026",
    imagen: "",
  },
];

// ================== HABILIDADES ==================
// Información detallada sobre competencias técnicas organizadas por categoría
// Estructura por categoría: id, nombre, icon, skills (con nombre, nivel, porcentaje)
// 'nivel' debe ser 'Básico', 'Intermedio' o 'Avanzado'
export const habilidades = {
  categorias: [
    {
      id: 1,
      nombre: "Lenguajes de Programación",
      icon: "💻",
      skills: [
        { id: 1, nombre: "Python", nivel: "Intermedio", porcentaje: 60 },
        { id: 2, nombre: "JavaScript", nivel: "Intermedio", porcentaje: 75 },
        { id: 3, nombre: "Java", nivel: "Básico", porcentaje: 50 },
        { id: 4, nombre: "HTML5", nivel: "Intermedio", porcentaje: 70 },
        { id: 5, nombre: "CSS3", nivel: "Intermedio", porcentaje: 75 },
      ],
    },
    {
      id: 2,
      nombre: "Frameworks & Librerías",
      icon: "🚀",
      skills: [
        { id: 1, nombre: "Vue.js", nivel: "Intermedio", porcentaje: 75 },
        { id: 2, nombre: "React", nivel: "Básico", porcentaje: 45 },
        { id: 3, nombre: "Node.js", nivel: "Básico", porcentaje: 50 },
        { id: 4, nombre: "Express", nivel: "Básico", porcentaje: 45 },
        { id: 5, nombre: "FastAPI", nivel: "Básico", porcentaje: 45 },
        { id: 6, nombre: "Spring Boot", nivel: "Básico", porcentaje: 30 },
      ],
    },
    {
      id: 3,
      nombre: "Bases de Datos",
      icon: "🗄️",
      skills: [
        { id: 1, nombre: "SQL", nivel: "Básico", porcentaje: 40 },
        { id: 2, nombre: "MySQL", nivel: "Básico", porcentaje: 45 },
        { id: 3, nombre: "PostgreSQL", nivel: "Básico", porcentaje: 50 },
        { id: 4, nombre: "MongoDB", nivel: "Básico", porcentaje: 30 },
      ],
    },
    {
      id: 4,
      nombre: "Herramientas & DevOps",
      icon: "⚙️",
      skills: [
        { id: 1, nombre: "Git/GitHub", nivel: "Intermedio", porcentaje: 65 },
        { id: 2, nombre: "VSCode", nivel: "Intermedio", porcentaje: 65 },
        { id: 3, nombre: "PyCharm", nivel: "Intermedio", porcentaje: 55 },
        { id: 4, nombre: "IntelliJ IDEA", nivel: "Básico", porcentaje: 45 },
        { id: 5, nombre: "Apache NetBeans", nivel: "Básico", porcentaje: 50 },
        { id: 6, nombre: "Docker", nivel: "Básico", porcentaje: 35 },
        { id: 7, nombre: "Postman", nivel: "Básico", porcentaje: 40 },
      ],
    },
  ],

  competencias: [
    {
      id: 1,
      tecnologia: "Python",
      icon: "🐍",
      nivel: "Intermedio",
      experiencia: "1 año",
      proyectos: "4+",
    },
    {
      id: 2,
      tecnologia: "JavaScript",
      icon: "⚙️",
      nivel: "Intermedio",
      experiencia: "2 años",
      proyectos: "5+",
    },
    {
      id: 3,
      tecnologia: "Vue.js",
      icon: "💚",
      nivel: "Intermedio",
      experiencia: "1 año",
      proyectos: "3+",
    },
    {
      id: 4,
      tecnologia: "Node.js / Express",
      icon: "🟢",
      nivel: "Básico",
      experiencia: "< 1 año",
      proyectos: "2+",
    },
    {
      id: 5,
      tecnologia: "PostgreSQL",
      icon: "🐘",
      nivel: "Básico",
      experiencia: "1 año",
      proyectos: "4+",
    },
    {
      id: 6,
      tecnologia: "MySQL",
      icon: "🗄️",
      nivel: "Básico",
      experiencia: "1 año",
      proyectos: "2+",
    },
    {
      id: 7,
      tecnologia: "MongoDB",
      icon: "🍃",
      nivel: "Básico",
      experiencia: "< 1 año",
      proyectos: "1+",
    },
    {
      id: 8,
      tecnologia: "Git",
      icon: "📦",
      nivel: "Intermedio",
      experiencia: "2 años",
      proyectos: "10+",
    },
    {
      id: 9,
      tecnologia: "HTML/CSS",
      icon: "🗳️",
      nivel: "Intermedio",
      experiencia: "2+ años",
      proyectos: "8+",
    },
  ],
};

// ================== INTERESES ==================
// Intereses profesionales y áreas de enfoque
// Estructura: id, título, icon, descripción, tags
export const intereses = [
  {
    id: 1,
    titulo: "Desarrollo Web",
    icon: "🌐",
    descripcion:
      "Apasionado por crear experiencias web interactivas y responsivas que brinden valor a los usuarios.",
    tags: ["Frontend", "Backend", "Full Stack"],
  },
  {
    id: 2,
    titulo: "Tecnología Emergente",
    icon: "🚀",
    descripcion:
      "Interés constante en explorar nuevas tecnologías y frameworks para mejorar mis habilidades.",
    tags: ["AI", "Machine Learning", "Blockchain"],
  },
  {
    id: 3,
    titulo: "Código Limpio",
    icon: "✨",
    descripcion:
      "Defensor de las buenas prácticas de programación, testing y mantenibilidad del código.",
    tags: ["Testing", "Clean Code", "Refactoring"],
  },
];

// ================== OBJETIVOS PROFESIONALES ==================
// Objetivos a corto, mediano y largo plazo
// Estructura: id, título, descripción
export const objetivos = [
  {
    id: 1,
    titulo: "Consolidarme como Full Stack Developer",
    descripcion:
      "Seguir profundizando en frontend y backend para crear soluciones completas y robustas, llevando mis proyectos a producción.",
  },
  {
    id: 2,
    titulo: "Especializarme en Vue.js y React",
    descripcion:
      "Profundizar en los principales frameworks modernos de JavaScript para el desarrollo web.",
  },
  {
    id: 3,
    titulo: "Sumar experiencia en equipos reales",
    descripcion:
      "Completar mi práctica profesional y dar mis primeros pasos en la industria, aprendiendo de equipos de desarrollo en producción.",
  },
  {
    id: 4,
    titulo: "Obtener Certificaciones Profesionales",
    descripcion:
      "Completar certificaciones relevantes que validen mis habilidades técnicas en la industria.",
  },
];

// ================== INFORMACIÓN DE CONTACTO ==================
// Enlaces y datos de contacto para redes sociales y comunicación
// Estructura: email, linkedin, github, instagram, facebook, cvPDF
export const contacto = {
  email: "garodrifornes79@gmail.com",
  linkedin: "https://www.linkedin.com/in/gustavo-ariel-rodr%C3%ADguez-fornes-36a899370/",
  github: "https://github.com/GustavoRodriguez79",
  instagram: "https://instagram.com/garodrifornes79",
  facebook: "https://facebook.com/profile.php?id=61577538662727",
  cvPDF: "cv.pdf",
  // Texto de la sección Contacto
  mensaje:
    "Estoy terminando la tecnicatura y busco mi práctica profesional. Si tenés una propuesta o querés charlar sobre un proyecto, escribime.",
};
