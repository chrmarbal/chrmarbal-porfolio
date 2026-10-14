import {
  siKotlin,
  siMongodb,
  siNodedotjs,
  siPython,
  siReact,
} from "simple-icons";

export const technologies = [
  { name: "React", icon: siReact, color: "react" },
  { name: "Node.js", icon: siNodedotjs, color: "node" },
  { name: "Java", icon: null, color: "java" },
  { name: "Python", icon: siPython, color: "python" },
  { name: "Kotlin", icon: siKotlin, color: "kotlin" },
  { name: "SQL Server", icon: null, color: "sql" },
  { name: "MongoDB", icon: siMongodb, color: "mongo" },
];

export const experience = [
  {
    date: "MAR — JUN 2026",
    title: "Desarrollador de Automatización RPA",
    titleEn: "RPA Automation Developer",
    place: "CONVOTIS Iberia · Remoto",
    placeEn: "CONVOTIS Iberia · Remote",
    description:
      "Automatización con Python, Selenium y Playwright. Desarrollo de un proyecto interno para renovar permisos de conservación de datos de candidatos.",
    descriptionEn:
      "Automation with Python, Selenium, and Playwright. Built an internal tool to renew candidate data retention permissions.",
    practice: true,
  },
  {
    date: "MAR — JUN 2025",
    title: "Desarrollador de Aplicaciones Web",
    place: "Tvitec · Villena, Alicante",
    placeEn: "Tvitec · Villena, Alicante",
    description:
      "Aplicación de pedidos masivos con importación de Excel, cálculo de tarifas y descuentos, y envío automático de XML para integración con el ERP.",
    titleEn: "Web Application Developer",
    descriptionEn:
      "Built a bulk ordering application with Excel import, pricing and discount calculations, and automatic XML delivery for ERP integration.",
    practice: true,
  },
  {
    date: "MAR — JUN 2023",
    title: "Técnico de Sistemas y Redes",
    place: "Tvitec · Villena, Alicante",
    placeEn: "Tvitec · Villena, Alicante",
    description:
      "Instalación y mantenimiento de equipos y redes. Resolución de incidencias de hardware y software y soporte a usuarios.",
    titleEn: "IT Systems and Network Technician",
    descriptionEn:
      "Installed and maintained equipment and networks, resolved hardware and software issues, and provided user support.",
    practice: true,
  },
];

export const education = [
  {
    date: "2025 — 2026",
    title: "Desarrollo de Aplicaciones Multiplataforma",
    place: "Grado Superior · IES San Vicente",
    placeEn: "Advanced Vocational Training · IES San Vicente",
    description: "San Vicente del Raspeig, Alicante · Nota media: 8,12",
    titleEn: "Multiplatform Application Development",
    descriptionEn: "San Vicente del Raspeig, Alicante · Average grade: 8.12",
  },
  {
    date: "2023 — 2025",
    title: "Desarrollo de Aplicaciones Web",
    place: "Grado Superior · IES Hermanos Amorós",
    placeEn: "Advanced Vocational Training · IES Hermanos Amorós",
    description: "Villena, Alicante · Nota media: 8,43",
    titleEn: "Web Application Development",
    descriptionEn: "Villena, Alicante · Average grade: 8.43",
  },
  {
    date: "2021 — 2023",
    title: "Sistemas Microinformáticos y Redes",
    place: "Grado Medio · IES Hermanos Amorós",
    placeEn: "Intermediate Vocational Training · IES Hermanos Amorós",
    description: "Villena, Alicante · Nota media: 7,17",
    titleEn: "Microcomputer Systems and Networking",
    descriptionEn: "Villena, Alicante · Average grade: 7.17",
  },
];

export const projects = [
  {
    name: "McnanoSoft",
    logo: "/images/mcnanosoft-logo.png",
    type: "web",
    category: "PLATAFORMA WEB",
    categoryEn: "WEB PLATFORM",
    cycle: "DAW",
    score: "10",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    description:
      "Una plataforma full stack para descubrir y adquirir proyectos de software. Del catálogo a la biblioteca personal, con una experiencia de compra completa.",
    descriptionEn:
      "A full-stack platform for discovering and purchasing software projects. From browsing the catalog to managing a personal library, with a complete shopping experience.",
    features: [
      "Autenticación con Google y GitHub, roles y recuperación de contraseña.",
      "Carrito, pagos con Stripe, biblioteca personal y sistema de reseñas.",
      "Proyectos almacenados en Google Drive y panel de administración.",
      "Script de generación automática de certificados HTTPS válidos en local.",
    ],
    featuresEn: [
      "Google and GitHub authentication, user roles, and password recovery.",
      "Shopping cart, Stripe payments, personal library, and reviews.",
      "Projects stored on Google Drive and an administration dashboard.",
      "A script that automatically generates locally trusted HTTPS certificates.",
    ],
  },
  {
    name: "GymTonic",
    logo: "/images/gymtonic-logo.png",
    type: "mobile",
    category: "APLICACIÓN MÓVIL",
    categoryEn: "MOBILE APPLICATION",
    cycle: "DAM",
    score: "9",
    stack: ["Kotlin", "Node.js", "SQL Server"],
    description:
      "Tu entrenamiento, a tu manera. Una aplicación de gimnasio para crear rutinas personalizadas, conectar con amigos y entrenar en grupo.",
    descriptionEn:
      "Your workout, your way. A gym app for creating custom routines, connecting with friends, and training together in groups.",
    features: [
      "Inicio de sesión con Google y Facebook.",
      "Creación y gestión de rutinas personalizadas.",
      "Amistades y grupos con rutinas compartidas para sus miembros.",
      "Disponible en español e inglés, con temas claro y oscuro.",
    ],
    featuresEn: [
      "Sign in with Google and Facebook.",
      "Create and manage personalized workout routines.",
      "Connect with friends and share routines with groups.",
      "Available in Spanish and English, with light and dark themes.",
    ],
  },
];
