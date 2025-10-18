// src/data/datos.js
// Archivo centralizado con toda la información del portafolio
// Actualiza aquí tu información personal

export const datosPersonales = {
  nombre: 'Gustavo Ariel Rodriguez',
  titulo: 'Técnico en Programación',
  subtitulo: 'Apasionado por la programación y la creatividad digital',
  email: 'garodrifornes79@gmail.com',
  telefono: '+54 9 261 XXXXXXX',
  ubicacion: 'Mendoza, Argentina',
  foto: 'fotoGustavo.jpg',
  resumen: 'Soy Técnico Universitario en Programación, egresado de la Universidad Tecnológica Nacional (UTN) - FRSR, Argentina. Me apasiona programar y desarrollar soluciones de aplicaciones web originales y personalizadas.',
  estadisticas: [
    { numero: '2+', label: 'Años de experiencia' },
    { numero: '5+', label: 'Proyectos completados' },
    { numero: '7+', label: 'Tecnologías dominadas' }
  ]
}

export const tecnologias = [
  { id: 1, nombre: 'Python', icon: '🐍', nivel: 'Avanzado' },
  { id: 2, nombre: 'JavaScript', icon: '⚙️', nivel: 'Avanzado' },
  { id: 3, nombre: 'Java', icon: '☕', nivel: 'Intermedio' },
  { id: 4, nombre: 'HTML5', icon: '🏗️', nivel: 'Avanzado' },
  { id: 5, nombre: 'CSS3', icon: '🎨', nivel: 'Avanzado' },
  { id: 6, nombre: 'Git', icon: '📦', nivel: 'Avanzado' },
  { id: 7, nombre: 'Vue.js', icon: '💚', nivel: 'Intermedio' }
]

export const educacion = [
  {
    id: 1,
    fecha: '2012 - 2013',
    titulo: 'Mantenimiento y Reparación de Computadoras',
    institucion: 'Escuelas de Capacitación Newton',
    descripcion: 'Capacitación de 288 horas reloj, donde adquirí habilidades prácticas enfocadas en diagnóstico y solución de fallas de hardware/software, ensamblaje y actualización de componentes.',
    habilidades: ['Hardware', 'Software', 'Diagnóstico'],
    enlace: ''
  },
  {
    id: 2,
    fecha: '2022 - 2024',
    titulo: 'Técnico Universitario en Programación',
    institucion: 'Universidad Tecnológica Nacional (UTN-FRSR)',
    descripcion: 'Formación integral en desarrollo de software, programación orientada a objetos, bases de datos y metodologías ágiles. Desarrollo de proyectos prácticos con tecnologías modernas.',
    habilidades: ['POO', 'Bases de Datos', 'Metodologías Ágiles', 'Git'],
    enlace: 'https://www.frsr.utn.edu.ar/'
  },
  {
    id: 3,
    fecha: '2024 - Presente',
    titulo: 'Especialización en Desarrollo Web',
    institucion: 'Formación Continua',
    descripcion: 'Aprendizaje continuo en frameworks modernos como Vue.js, React y herramientas de desarrollo web avanzado. Enfoque en crear aplicaciones responsivas y de alto rendimiento.',
    habilidades: ['Vue.js', 'Frontend', 'Responsivo'],
    enlace: ''
  }
]

export const experiencia = [
  {
    id: 1,
    titulo: 'Proyectos Académicos',
    periodo: '2022 - 2024',
    empresa: 'Universidad Tecnológica Nacional',
    descripcion: 'Desarrollo de múltiples aplicaciones web como parte de la formación académica, aplicando metodologías ágiles y buenas prácticas de programación.',
    logros: [
      'Desarrollo de aplicaciones web con HTML, CSS y JavaScript',
      'Implementación de algoritmos en Python, JavaScript y Java',
      'Manejo de control de versiones con Git y GitHub',
      'Aplicación de metodología Scrum en trabajo colaborativo'
    ],
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'Git']
  },
  {
    id: 2,
    titulo: 'Aprendizaje Continuo',
    periodo: 'Actualidad',
    empresa: 'Formación Autónoma',
    descripcion: 'Perfeccionamiento en tecnologías modernas del desarrollo web, enfocándome en frameworks front-end y mejores prácticas de desarrollo.',
    logros: [
      'Perfeccionamiento en tecnologías front-end',
      'Estudio de frameworks modernos como Vue.js y React',
      'Desarrollo de proyectos personales',
      'Participación en comunidades de desarrolladores'
    ],
    tecnologias: ['Vue.js', 'React', 'Frontend', 'Web Design']
  },
  {
    id: 3,
    titulo: 'Colaboración en Proyectos',
    periodo: '2023 - 2024',
    empresa: 'Equipo UTN',
    descripcion: 'Trabajo en equipo desarrollando soluciones integrales, participando en todas las fases del proyecto desde planificación hasta implementación.',
    logros: [
      'Colaboración efectiva con compañeros de equipo',
      'Resolución de problemas complejos',
      'Documentación y presentación de proyectos',
      'Implementación de feedback y mejoras continuas'
    ],
    tecnologias: ['Trabajo en Equipo', 'Comunicación', 'Documentación', 'Scrum']
  }
]

export const proyectos = [
  {
    id: 1,
    titulo: 'Portafolio Personal',
    descripcion: 'Sitio web responsive desarrollado con HTML y CSS para mostrar habilidades y proyectos. Diseño moderno con animaciones suaves.',
    emoji: '🌐',
    tecnologias: ['HTML5', 'CSS3', 'Responsive'],
    enlace: '#',
    estado: 'Completado',
    fecha: '2024',
    imagen: ''
  },
  {
    id: 2,
    titulo: 'Sistema de Gestión',
    descripcion: 'Aplicación desarrollada en Python para gestión de datos con interfaz amigable. Integración con base de datos SQL para manejo persistente de información.',
    emoji: '📊',
    tecnologias: ['Python', 'SQL', 'Tkinter'],
    enlace: '#',
    estado: 'Completado',
    fecha: '2023',
    imagen: ''
  },
  {
    id: 3,
    titulo: 'Algoritmos en Java',
    descripcion: 'Implementación de estructuras de datos y algoritmos de ordenamiento. Proyecto académico enfocado en optimización y complejidad computacional.',
    emoji: '⚙️',
    tecnologias: ['Java', 'Algoritmos', 'Git'],
    enlace: '#',
    estado: 'Completado',
    fecha: '2023',
    imagen: ''
  },
  {
    id: 4,
    titulo: 'Aplicación Web Interactiva',
    descripcion: 'Proyecto SPA desarrollado con Vue.js. Incluye componentes reutilizables, gestión de estado y API REST para comunicación con backend.',
    emoji: '💻',
    tecnologias: ['Vue.js', 'JavaScript', 'API REST'],
    enlace: '#',
    estado: 'En Progreso',
    fecha: '2024',
    imagen: ''
  },
  {
    id: 5,
    titulo: 'Blog con JavaScript',
    descripcion: 'Plataforma de blog interactiva con JavaScript vanilla. Características incluyen filtrado de artículos, búsqueda y almacenamiento local.',
    emoji: '📝',
    tecnologias: ['JavaScript', 'CSS Grid', 'Local Storage'],
    enlace: '#',
    estado: 'Completado',
    fecha: '2024',
    imagen: ''
  },
  {
    id: 6,
    titulo: 'API REST con Node.js',
    descripcion: 'Backend API desarrollado con Node.js y Express. Implementación de autenticación, validación de datos y manejo de errores.',
    emoji: '🔌',
    tecnologias: ['Node.js', 'Express', 'MongoDB'],
    enlace: '#',
    estado: 'En Progreso',
    fecha: '2024',
    imagen: ''
  }
]

export const habilidades = {
  categorias: [
    {
      id: 1,
      nombre: 'Lenguajes de Programación',
      icon: '💻',
      skills: [
        { id: 1, nombre: 'Python', nivel: 'Avanzado', porcentaje: 85 },
        { id: 2, nombre: 'JavaScript', nivel: 'Avanzado', porcentaje: 80 },
        { id: 3, nombre: 'Java', nivel: 'Intermedio', porcentaje: 75 },
        { id: 4, nombre: 'HTML5', nivel: 'Avanzado', porcentaje: 90 },
        { id: 5, nombre: 'CSS3', nivel: 'Avanzado', porcentaje: 88 }
      ]
    },
    {
      id: 2,
      nombre: 'Frameworks & Librerías',
      icon: '🚀',
      skills: [
        { id: 1, nombre: 'Vue.js', nivel: 'Intermedio', porcentaje: 78 },
        { id: 2, nombre: 'React', nivel: 'Básico', porcentaje: 60 },
        { id: 3, nombre: 'Node.js', nivel: 'Intermedio', porcentaje: 70 },
        { id: 4, nombre: 'Express', nivel: 'Intermedio', porcentaje: 72 }
      ]
    },
    {
      id: 3,
      nombre: 'Bases de Datos',
      icon: '🗄️',
      skills: [
        { id: 1, nombre: 'SQL', nivel: 'Avanzado', porcentaje: 82 },
        { id: 2, nombre: 'MongoDB', nivel: 'Intermedio', porcentaje: 68 },
        { id: 3, nombre: 'MySQL', nivel: 'Avanzado', porcentaje: 80 }
      ]
    },
    {
      id: 4,
      nombre: 'Herramientas & DevOps',
      icon: '⚙️',
      skills: [
        { id: 1, nombre: 'Git/GitHub', nivel: 'Avanzado', porcentaje: 85 },
        { id: 2, nombre: 'VSCode', nivel: 'Avanzado', porcentaje: 90 },
        { id: 3, nombre: 'Linux', nivel: 'Intermedio', porcentaje: 75 },
        { id: 4, nombre: 'Docker', nivel: 'Básico', porcentaje: 55 }
      ]
    }
  ],
  
  competencias: [
    { id: 1, tecnologia: 'Python', icon: '🐍', nivel: 'Avanzado', experiencia: '2 años', proyectos: '5+' },
    { id: 2, tecnologia: 'JavaScript', icon: '⚙️', nivel: 'Avanzado', experiencia: '2 años', proyectos: '7+' },
    { id: 3, tecnologia: 'Vue.js', icon: '💚', nivel: 'Intermedio', experiencia: '1 año', proyectos: '3+' },
    { id: 4, tecnologia: 'SQL', icon: '🗄️', nivel: 'Avanzado', experiencia: '2 años', proyectos: '6+' },
    { id: 5, tecnologia: 'Git', icon: '📦', nivel: 'Avanzado', experiencia: '2 años', proyectos: '10+' },
    { id: 6, tecnologia: 'HTML/CSS', icon: '🏗️', nivel: 'Avanzado', experiencia: '2+ años', proyectos: '8+' }
  ]
}

export const intereses = [
  {
    id: 1,
    titulo: 'Desarrollo Web',
    icon: '🌐',
    descripcion: 'Apasionado por crear experiencias web interactivas y responsivas que brinden valor a los usuarios.',
    tags: ['Frontend', 'Backend', 'Full Stack']
  },
  {
    id: 2,
    titulo: 'Tecnología Emergente',
    icon: '🚀',
    descripcion: 'Interés constante en explorar nuevas tecnologías y frameworks para mejorar mis habilidades.',
    tags: ['AI', 'Machine Learning', 'Blockchain']
  },
  {
    id: 3,
    titulo: 'Código Limpio',
    icon: '✨',
    descripcion: 'Defensor de las buenas prácticas de programación, testing y mantenibilidad del código.',
    tags: ['Testing', 'Clean Code', 'Refactoring']
  },
  {
    id: 4,
    titulo: 'Comunidad Open Source',
    icon: '🤝',
    descripcion: 'Participación activa en proyectos open source y contribución a la comunidad de desarrolladores.',
    tags: ['GitHub', 'Colaboración', 'Open Source']
  }
]

export const objetivos = [
  {
    id: 1,
    titulo: 'Convertirme en Full Stack Developer',
    descripcion: 'Dominar tanto el desarrollo frontend como backend para crear soluciones completas y robustas.'
  },
  {
    id: 2,
    titulo: 'Especializarme en Vue.js y React',
    descripcion: 'Profundizar en los principales frameworks modernos de JavaScript para el desarrollo web.'
  },
  {
    id: 3,
    titulo: 'Contribuir a Proyectos Open Source',
    descripcion: 'Participar activamente en proyectos de código abierto y ayudar a la comunidad de desarrolladores.'
  },
  {
    id: 4,
    titulo: 'Obtener Certificaciones Profesionales',
    descripcion: 'Completar certificaciones relevantes que validen mis habilidades técnicas en la industria.'
  }
]

export const contacto = {
  email: 'garodrifornes79@gmail.com',
  linkedin: 'https://linkedin.com/in/gustavo-ariel-rodríguez-fornes',
  github: 'https://github.com/GustavoRodriguez79',
  instagram: 'https://instagram.com/garodrifornes79',
  facebook: 'https://facebook.com/profile.php?id=61577538662727',
  cvPDF: 'cv.pdf'
}

export const tematico = {
  primario: '#7c3aed',
  primarioOscuro: '#6d28d9',
  primarioClaro: '#a78bfa',
  secundario: '#6366f1',
  acento: '#c4b5fd',
  textoBase: '#1f2937',
  textoSecundario: '#6b7280',
  bgLight: '#f9fafb',
  bgBlanco: '#ffffff',
  borde: '#e5e7eb'
}